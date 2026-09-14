import React, { useEffect, useState } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from '../shared/PConnProps';
import StyledKanbanWrapper from './styles';

export interface Employee {
  pyGUID?: string;
  EmployeeFullName: string;
  Gender: string;
  DateOfBirth: string;
  DateOfJoining: string;
  EmploymentType: string;
  PersonalEmailAddress: string;
  OfficialEmailAddress: string;
  PrimaryContactNumber: string;
  pyStatusValue?: string;
  pyNote?: string;
}

type EmployeeColumn = 'scoped' | 'selected';

interface DraggedEmployee {
  originalIndex: number;
  sourceColumn: EmployeeColumn;
}

export function CapgeminiHrFlow360EmployeeKanbanMode(props: PConnFieldProps) {
  const pConn = props.getPConnect?.();
  const actions = pConn?.getActionsApi?.();

  const [employees, setEmployees] = useState<Employee[]>([]);

  /**
   * Stores the employee currently being dragged.
   */
  const [draggedEmployee, setDraggedEmployee] = useState<DraggedEmployee | null>(null);

  /**
   * Stores the column currently acting as a drop target.
   */
  const [dragOverColumn, setDragOverColumn] = useState<EmployeeColumn | null>(null);

  /**
   * Converts the Pega ListOfEmployee clipboard value
   * into a JavaScript array.
   */
  const getEmployeeList = (): Employee[] => {
    if (!pConn) {
      return [];
    }

    const listData = pConn.getValue?.('.ListOfEmployee');

    if (!listData) {
      return [];
    }

    return Array.isArray(listData)
      ? (listData as Employee[])
      : (Object.values(listData) as Employee[]);
  };

  /**
   * Reads the latest employee list from the Pega clipboard
   * and prints the complete JSON payload.
   */
  const logCurrentPegaJson = (contextName: string) => {
    if (!pConn) {
      return;
    }

    const freshList = getEmployeeList();

    console.log(`[${contextName}] Full ListOfEmployee JSON Code Payload:`);
    console.log(JSON.stringify(freshList, null, 2));
  };

  /**
   * Initial load from the Pega clipboard.
   */
  useEffect(() => {
    if (!pConn) {
      return;
    }

    const parsedList = getEmployeeList();
    setEmployees(parsedList);
  }, [pConn]);

  /**
   * Restores the previous employee status in local React state.
   * This is called if the Pega update fails.
   */
  const restoreEmployeeStatus = (originalIndex: number, previousStatus: string | undefined) => {
    setEmployees(previousEmployees =>
      previousEmployees.map((employee, index) => {
        if (index !== originalIndex) {
          return employee;
        }

        return {
          ...employee,
          pyStatusValue: previousStatus
        };
      })
    );
  };

  /**
   * Moves an employee between the Scoped and Selected columns.
   *
   * Scoped to Selected:
   * pyStatusValue becomes "Yes".
   *
   * Selected to Scoped:
   * pyStatusValue becomes "No".
   */
  const moveEmployee = (originalIndex: number, currentColumn: EmployeeColumn) => {
    if (!pConn || !actions) {
      console.error('Pega connection or Actions API is unavailable.');
      return;
    }

    const currentEmployee = employees[originalIndex];

    if (!currentEmployee) {
      console.error(`Employee was not found at index ${originalIndex}.`);
      return;
    }

    const previousStatus = currentEmployee.pyStatusValue;
    const nextStatus = currentColumn === 'scoped' ? 'Yes' : 'No';

    /**
     * Update local React state immediately so the card
     * moves without waiting for the Pega clipboard update.
     */
    setEmployees(previousEmployees =>
      previousEmployees.map((employee, index) => {
        if (index !== originalIndex) {
          return employee;
        }

        return {
          ...employee,
          pyStatusValue: nextStatus
        };
      })
    );

    const currentList = getEmployeeList();

    if (currentList.length === 0) {
      console.error('ListOfEmployee is empty or unavailable in the Pega clipboard.');

      restoreEmployeeStatus(originalIndex, previousStatus);
      return;
    }

    let selectedRowUpdateFailed = false;

    try {
      /**
       * Loop through every employee to preserve the bulk
       * synchronization behavior used by the Pega component.
       */
      for (const [index] of currentList.entries()) {
        const basePath = `.ListOfEmployee(${index + 1})`;

        try {
          if (index === originalIndex) {
            actions.updateFieldValue(`${basePath}.pyStatusValue`, nextStatus);

            console.log(`Successfully updated ${basePath}.pyStatusValue to "${nextStatus}".`);
          } else {
            /**
             * Retains the existing Pega synchronization logic.
             */
            actions.updateFieldValue(`${basePath}.pyNote`, 'Yes');
          }
        } catch (rowError) {
          console.error(`Error while updating internal list path ${basePath}:`, rowError);

          if (index === originalIndex) {
            selectedRowUpdateFailed = true;
          }
        }
      }

      /**
       * Roll back the local movement if the selected
       * employee row could not be updated.
       */
      if (selectedRowUpdateFailed) {
        restoreEmployeeStatus(originalIndex, previousStatus);
        return;
      }

      /**
       * Give the Pega store time to process the updates
       * before reading the latest clipboard payload.
       */
      window.setTimeout(() => {
        logCurrentPegaJson('EMPLOYEE CARD MOVEMENT');
      }, 100);
    } catch (error) {
      console.error('Error while executing the employee card update:', error);

      restoreEmployeeStatus(originalIndex, previousStatus);
    }
  };

  /**
   * Starts dragging an employee card.
   */
  const handleDragStart = (
    event: React.DragEvent<HTMLElement>,
    originalIndex: number,
    sourceColumn: EmployeeColumn
  ) => {
    const dragInformation: DraggedEmployee = {
      originalIndex,
      sourceColumn
    };

    setDraggedEmployee(dragInformation);

    event.dataTransfer.effectAllowed = 'move';

    /**
     * Some browsers require setData before permitting a drop.
     */
    event.dataTransfer.setData('text/plain', JSON.stringify(dragInformation));

    event.currentTarget.classList.add('is-dragging');

    console.log(
      `Started dragging employee at original index ${originalIndex} from the ${sourceColumn} column.`
    );
  };

  /**
   * Clears all drag state when dragging ends.
   */
  const handleDragEnd = (event: React.DragEvent<HTMLElement>) => {
    event.currentTarget.classList.remove('is-dragging');

    setDraggedEmployee(null);
    setDragOverColumn(null);
  };

  /**
   * Allows a Kanban column to receive a dropped card.
   */
  const handleDragOver = (event: React.DragEvent<HTMLElement>, targetColumn: EmployeeColumn) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';

    if (dragOverColumn !== targetColumn) {
      setDragOverColumn(targetColumn);
    }
  };

  /**
   * Removes the drop-target state when the pointer
   * completely leaves the column.
   */
  const handleDragLeave = (event: React.DragEvent<HTMLElement>, column: EmployeeColumn) => {
    const currentTarget = event.currentTarget;
    const relatedTarget = event.relatedTarget as Node | null;

    /**
     * Do not clear drag state when the pointer moves
     * between children inside the same column.
     */
    if (relatedTarget && currentTarget.contains(relatedTarget)) {
      return;
    }

    setDragOverColumn(currentColumn => (currentColumn === column ? null : currentColumn));
  };

  /**
   * Reads dragged employee information from dataTransfer.
   * React state is used as a fallback.
   */
  const getDroppedEmployee = (event: React.DragEvent<HTMLElement>): DraggedEmployee | null => {
    const transferredData = event.dataTransfer.getData('text/plain');

    if (transferredData) {
      try {
        const parsedData = JSON.parse(transferredData) as DraggedEmployee;

        const validIndex = Number.isInteger(parsedData.originalIndex);

        const validColumn =
          parsedData.sourceColumn === 'scoped' || parsedData.sourceColumn === 'selected';

        if (validIndex && validColumn) {
          return parsedData;
        }
      } catch (error) {
        console.warn('Unable to parse the transferred employee data:', error);
      }
    }

    return draggedEmployee;
  };

  /**
   * Handles an employee card being dropped on a column.
   */
  const handleDrop = (event: React.DragEvent<HTMLElement>, targetColumn: EmployeeColumn) => {
    event.preventDefault();
    event.stopPropagation();

    const droppedEmployee = getDroppedEmployee(event);

    setDragOverColumn(null);
    setDraggedEmployee(null);

    if (!droppedEmployee) {
      console.error('The dropped employee information is unavailable.');
      return;
    }

    const { originalIndex, sourceColumn } = droppedEmployee;

    /**
     * Do not update if the employee was dropped
     * into the same column.
     */
    if (sourceColumn === targetColumn) {
      console.log(`Employee remained in the ${targetColumn} column.`);
      return;
    }

    const employee = employees[originalIndex];

    if (!employee) {
      console.error(`Dropped employee was not found at index ${originalIndex}.`);
      return;
    }

    /**
     * moveEmployee expects the employee's current column.
     */
    moveEmployee(originalIndex, sourceColumn);
  };

  /**
   * Moves a focused employee card using Enter or Space.
   */
  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    originalIndex: number,
    currentColumn: EmployeeColumn
  ) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    /**
     * Ignore keyboard events originating from a button
     * inside the employee card.
     */
    if (event.target instanceof HTMLButtonElement) {
      return;
    }

    event.preventDefault();
    moveEmployee(originalIndex, currentColumn);
  };

  /**
   * Prevents action-button mouse interaction from
   * accidentally starting a card drag operation.
   */
  const handleButtonMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  /**
   * Preserve each employee's original array index
   * before filtering into columns.
   */
  const employeesWithOriginalIndex = employees.map((emp, originalIndex) => ({
    emp,
    originalIndex
  }));

  /**
   * Employees without status "Yes" appear in Scoped.
   */
  const scopedEmployees = employeesWithOriginalIndex.filter(
    ({ emp }) => emp.pyStatusValue !== 'Yes'
  );

  /**
   * Employees with status "Yes" appear in Selected.
   */
  const selectedEmployees = employeesWithOriginalIndex.filter(
    ({ emp }) => emp.pyStatusValue === 'Yes'
  );

  /**
   * Generates a stable React key for an employee card.
   */
  const getEmployeeKey = (employee: Employee, originalIndex: number) => {
    if (employee.pyGUID) {
      return employee.pyGUID;
    }

    return `${employee.EmployeeFullName || 'employee'}-${originalIndex}`;
  };

  /**
   * Returns true when an employee card is being dragged.
   */
  const isEmployeeDragging = (originalIndex: number): boolean => {
    return draggedEmployee?.originalIndex === originalIndex;
  };

  /**
   * Renders the six-dot drag-handle icon.
   */
  const renderDragHandle = () => (
    <span className='drag-handle' aria-hidden='true' title='Drag employee'>
      <span className='drag-handle-dot' />
      <span className='drag-handle-dot' />
      <span className='drag-handle-dot' />
      <span className='drag-handle-dot' />
      <span className='drag-handle-dot' />
      <span className='drag-handle-dot' />
    </span>
  );

  return (
    <StyledKanbanWrapper>
      <div className='kanban-board'>
        {/* Scoped employee column */}
        <section
          className={`kanban-column scoped ${dragOverColumn === 'scoped' ? 'drag-over' : ''}`}
          onDragOver={event => handleDragOver(event, 'scoped')}
          onDragLeave={event => handleDragLeave(event, 'scoped')}
          onDrop={event => handleDrop(event, 'scoped')}
          aria-label='Scoped employees drop area'
        >
          <header className='column-header'>
            <span>Scoped Employees</span>

            <span className='badge-count' aria-label={`${scopedEmployees.length} scoped employees`}>
              {scopedEmployees.length}
            </span>
          </header>

          <div className={`column-body ${dragOverColumn === 'scoped' ? 'drag-over' : ''}`}>
            {scopedEmployees.map(({ emp, originalIndex }) => (
              <article
                key={getEmployeeKey(emp, originalIndex)}
                className={`kanban-card ${isEmployeeDragging(originalIndex) ? 'is-dragging' : ''}`}
                draggable
                tabIndex={0}
                role='button'
                aria-grabbed={isEmployeeDragging(originalIndex)}
                aria-label={`${
                  emp.EmployeeFullName || 'Unnamed employee'
                }. Drag to selected employees or press Enter to move.`}
                onDragStart={event => handleDragStart(event, originalIndex, 'scoped')}
                onDragEnd={handleDragEnd}
                onKeyDown={event => handleCardKeyDown(event, originalIndex, 'scoped')}
              >
                <div className='card-heading'>
                  {renderDragHandle()}

                  <div className='employee-name'>{emp.EmployeeFullName || 'Unnamed Employee'}</div>
                </div>

                <div className='employee-info'>
                  <strong>Employment type:</strong> {emp.EmploymentType || 'Not provided'}
                </div>

                <div className='employee-info'>
                  <strong>Personal email:</strong> {emp.PersonalEmailAddress || 'Not provided'}
                </div>

                <div className='employee-info'>
                  <strong>Contact:</strong> {emp.PrimaryContactNumber || 'Not provided'}
                </div>

                <div className='employee-info'>
                  <strong>Date of joining:</strong> {emp.DateOfJoining || 'Not provided'}
                </div>

                <span className='employee-status status-no'>Available</span>

                <div className='card-footer'>
                  <span className='card-meta-id'>Row: {originalIndex + 1}</span>

                  <button
                    type='button'
                    className='action-link'
                    draggable={false}
                    onMouseDown={handleButtonMouseDown}
                    onClick={() => moveEmployee(originalIndex, 'scoped')}
                    aria-label={`Move ${emp.EmployeeFullName || 'employee'} to selected`}
                  >
                    Move to selection &rarr;
                  </button>
                </div>
              </article>
            ))}

            {scopedEmployees.length === 0 && (
              <div className='empty-placeholder'>
                <span className='empty-icon' aria-hidden='true'>
                  ↓
                </span>

                <span>No scoped employee records available</span>

                <small>Drop a selected employee here to move the record back.</small>
              </div>
            )}
          </div>
        </section>

        {/* Selected employee column */}
        <section
          className={`kanban-column selected ${dragOverColumn === 'selected' ? 'drag-over' : ''}`}
          onDragOver={event => handleDragOver(event, 'selected')}
          onDragLeave={event => handleDragLeave(event, 'selected')}
          onDrop={event => handleDrop(event, 'selected')}
          aria-label='Selected employees drop area'
        >
          <header className='column-header'>
            <span>Selected Employees</span>

            <span
              className='badge-count'
              aria-label={`${selectedEmployees.length} selected employees`}
            >
              {selectedEmployees.length}
            </span>
          </header>

          <div className={`column-body ${dragOverColumn === 'selected' ? 'drag-over' : ''}`}>
            {selectedEmployees.map(({ emp, originalIndex }) => (
              <article
                key={getEmployeeKey(emp, originalIndex)}
                className={`kanban-card selected-card ${
                  isEmployeeDragging(originalIndex) ? 'is-dragging' : ''
                }`}
                draggable
                tabIndex={0}
                role='button'
                aria-grabbed={isEmployeeDragging(originalIndex)}
                aria-label={`${
                  emp.EmployeeFullName || 'Unnamed employee'
                }. Drag to scoped employees or press Enter to move.`}
                onDragStart={event => handleDragStart(event, originalIndex, 'selected')}
                onDragEnd={handleDragEnd}
                onKeyDown={event => handleCardKeyDown(event, originalIndex, 'selected')}
              >
                <div className='card-heading'>
                  {renderDragHandle()}

                  <div className='employee-name'>{emp.EmployeeFullName || 'Unnamed Employee'}</div>
                </div>

                <div className='employee-info'>
                  <strong>Employment type:</strong> {emp.EmploymentType || 'Not provided'}
                </div>

                <div className='employee-info'>
                  <strong>Personal email:</strong> {emp.PersonalEmailAddress || 'Not provided'}
                </div>

                <div className='employee-info'>
                  <strong>Contact:</strong> {emp.PrimaryContactNumber || 'Not provided'}
                </div>

                <div className='employee-info'>
                  <strong>Date of joining:</strong> {emp.DateOfJoining || 'Not provided'}
                </div>

                <span className='employee-status status-yes'>Selected</span>

                <div className='card-footer'>
                  <span className='card-meta-id'>Row: {originalIndex + 1}</span>

                  <button
                    type='button'
                    className='action-link remove-action'
                    draggable={false}
                    onMouseDown={handleButtonMouseDown}
                    onClick={() => moveEmployee(originalIndex, 'selected')}
                    aria-label={`Move ${emp.EmployeeFullName || 'employee'} back to scoped`}
                  >
                    &larr; Move to scoped
                  </button>
                </div>
              </article>
            ))}

            {selectedEmployees.length === 0 && (
              <div className='empty-placeholder'>
                <span className='empty-icon' aria-hidden='true'>
                  ↓
                </span>

                <span>No employees have been selected</span>

                <small>Drag a scoped employee here to select the record.</small>
              </div>
            )}
          </div>
        </section>
      </div>
    </StyledKanbanWrapper>
  );
}

export default withConfiguration(CapgeminiHrFlow360EmployeeKanbanMode);
