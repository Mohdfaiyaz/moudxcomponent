import { withConfiguration } from '@pega/cosmos-react-core';
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';
import StyledCapgeminiHrFlow360EmployeeKanbanModeWrapper from './styles';

// 1. Strict Two-Property Interface matching your updated Page List design
interface Employee {
  EmployeeFullName: string;
  pyStatusValue: string;
}

interface CapgeminiHrFlow360EmployeeKanbanModeProps extends PConnFieldProps {}

function CapgeminiHrFlow360EmployeeKanbanMode(props: CapgeminiHrFlow360EmployeeKanbanModeProps) {
  const { getPConnect } = props;

  // Master Kanban Dual-Column State Machine
  const [existingEmployees, setExistingEmployees] = useState<Employee[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);

  // Tracks active column drag styling
  const [activeOverColumn, setActiveOverColumn] = useState<string | null>(null);

  const pConn = getPConnect?.();
  const actions = pConn?.getActionsApi?.();

  // --- 2. INITIAL DATA LOAD & PROPERTIES LIST MONITOR ---
  useEffect(() => {
    try {
      if (pConn) {
        // Query the direct Page List values from the case clipboard (.ListOfEmployee)
        const employeeList = pConn.getValue?.('.ListOfEmployee') ?? [];
        const parsedList: Employee[] = Array.isArray(employeeList)
          ? employeeList
          : Object.values(employeeList);

        // Sort items into their columns checking 'Yes' strictly against pyStatusValue
        setExistingEmployees(
          parsedList.filter((emp: Employee) => String(emp.pyStatusValue).toLowerCase() !== 'yes')
        );

        setSelectedEmployees(
          parsedList.filter((emp: Employee) => String(emp.pyStatusValue).toLowerCase() === 'yes')
        );
      }
    } catch (e) {
      console.error('❌ DX LOAD ERROR:', e);
    }
  }, [pConn, props]); // Component updates if changes happen from the OOTB grid inputs

  // --- 3. DRAG START SETUP ---
  const handleDragStart = (employee: Employee, source: 'existing' | 'selected') => {
    sessionStorage.setItem('kanban_employee', JSON.stringify(employee));
    sessionStorage.setItem('kanban_source', source);
  };

  // --- 4. COMPREHENSIVE SAVING ENGINE (Using Whole-List Synchronization) ---
  const updateEmployeeSelectionOnClipboard = (
    employeeName: string,
    isSelectedValue: 'Yes' | 'No'
  ) => {
    if (!pConn || !actions) return;

    // Grab a clean copy of the entire list from the clipboard
    const fullClipboardList = [...(pConn.getValue?.('.ListOfEmployee') || [])];

    // Find our matching employee row using their exact Full Name string parameter match
    const index = fullClipboardList.findIndex(emp => emp.EmployeeFullName === employeeName);

    if (index > -1) {
      // Modify the target property context explicitly
      fullClipboardList[index] = {
        EmployeeFullName: fullClipboardList[index].EmployeeFullName, // Only keeping name property
        pyStatusValue: isSelectedValue // Only keeping status value property
      };

      // Since there are only two properties now, we can pass the entire updated array payload safely.
      // This tells Pega to refresh BOTH the clipboard and any other component (like the table grid) layout!
      try {
        actions.updateFieldValue('.ListOfEmployee', fullClipboardList);
        console.log(
          `[Kanban Array Saved Sync]: Updated entire .ListOfEmployee list back to Pega successfully.`
        );
      } catch (err) {
        console.error('Critical failure updating Pega list content via updateFieldValue:', err);
      }
    }
  };

  // --- 5. DROP EVENT ACTION PIPELINE ---
  const handleDrop = (target: 'existing' | 'selected') => {
    setActiveOverColumn(null);

    const employee = JSON.parse(sessionStorage.getItem('kanban_employee') || '{}');
    const source = sessionStorage.getItem('kanban_source');

    // Prevent execution if dropped back inside the identical source origin container panel
    if (source === target) return;

    const targetStatusString = target === 'selected' ? 'Yes' : 'No';

    const updatedEmployeeInstance = {
      EmployeeFullName: employee.EmployeeFullName,
      pyStatusValue: targetStatusString
    };

    // Trigger the real-time server write-back assignment loop task
    updateEmployeeSelectionOnClipboard(employee.EmployeeFullName, targetStatusString);

    // Swap columns smoothly on the client side UI views
    if (target === 'selected') {
      setExistingEmployees(prev =>
        prev.filter(e => e.EmployeeFullName !== employee.EmployeeFullName)
      );
      setSelectedEmployees(prev => [...prev, updatedEmployeeInstance]);
    } else {
      setSelectedEmployees(prev =>
        prev.filter(e => e.EmployeeFullName !== employee.EmployeeFullName)
      );
      setExistingEmployees(prev => [...prev, updatedEmployeeInstance]);
    }
  };

  return (
    <StyledCapgeminiHrFlow360EmployeeKanbanModeWrapper>
      <Card>
        <CardContent>
          <div className='kanban-board'>
            {/* COLUMN 1: SCOPED WORKSPACE AREA */}
            <div
              className='kanban-column scoped'
              onDragOver={e => {
                e.preventDefault();
                if (activeOverColumn !== 'scoped') setActiveOverColumn('scoped');
              }}
              onDragLeave={() => setActiveOverColumn(null)}
              onDrop={() => handleDrop('existing')}
            >
              <div className='column-header'>
                <span>Scoped Opportunities</span>
                <span className='badge-count'>{existingEmployees.length}</span>
              </div>
              <div className={`column-body ${activeOverColumn === 'scoped' ? 'drag-over' : ''}`}>
                {existingEmployees.length === 0 ? (
                  <div className='empty-placeholder'>Drag opportunities here to deselect</div>
                ) : (
                  existingEmployees.map((employee: Employee) => (
                    <div
                      key={employee.EmployeeFullName}
                      draggable
                      onDragStart={() => handleDragStart(employee, 'existing')}
                      className='kanban-card'
                    >
                      <h4>{employee.EmployeeFullName}</h4>
                      <div
                        className='card-skills'
                        style={{ marginTop: '4px', fontSize: '0.8rem', color: '#64748b' }}
                      >
                        <strong>Status:</strong> {employee.pyStatusValue || 'No'}
                      </div>

                      <div className='card-footer'>
                        <button
                          type='button'
                          className='action-link'
                          onClick={() => {
                            updateEmployeeSelectionOnClipboard(employee.EmployeeFullName, 'Yes');
                            setExistingEmployees(prev =>
                              prev.filter(e => e.EmployeeFullName !== employee.EmployeeFullName)
                            );
                            setSelectedEmployees(prev => [
                              ...prev,
                              { EmployeeFullName: employee.EmployeeFullName, pyStatusValue: 'Yes' }
                            ]);
                          }}
                        >
                          Select &rarr;
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* COLUMN 2: SELECTED TARGET WORKSPACE */}
            <div
              className='kanban-column selected'
              onDragOver={e => {
                e.preventDefault();
                if (activeOverColumn !== 'selected') setActiveOverColumn('selected');
              }}
              onDragLeave={() => setActiveOverColumn(null)}
              onDrop={() => handleDrop('selected')}
            >
              <div className='column-header'>
                <span>Selected Categories</span>
                <span className='badge-count'>{selectedEmployees.length}</span>
              </div>
              <div className={`column-body ${activeOverColumn === 'selected' ? 'drag-over' : ''}`}>
                {selectedEmployees.length === 0 ? (
                  <div className='empty-placeholder'>Drop employee cards here to select</div>
                ) : (
                  selectedEmployees.map((employee: Employee) => (
                    <div
                      key={employee.EmployeeFullName}
                      draggable
                      onDragStart={() => handleDragStart(employee, 'selected')}
                      className='kanban-card'
                    >
                      <h4>{employee.EmployeeFullName}</h4>
                      <div
                        className='card-skills'
                        style={{ marginTop: '4px', fontSize: '0.8rem', color: '#64748b' }}
                      >
                        <strong>Status:</strong> {employee.pyStatusValue || 'Yes'}
                      </div>

                      <div className='card-footer'>
                        <button
                          type='button'
                          className='action-link'
                          style={{ color: '#dc2626' }}
                          onClick={() => {
                            updateEmployeeSelectionOnClipboard(employee.EmployeeFullName, 'No');
                            setSelectedEmployees(prev =>
                              prev.filter(e => e.EmployeeFullName !== employee.EmployeeFullName)
                            );
                            setExistingEmployees(prev => [
                              ...prev,
                              { EmployeeFullName: employee.EmployeeFullName, pyStatusValue: 'No' }
                            ]);
                          }}
                        >
                          &larr; Deselect
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </StyledCapgeminiHrFlow360EmployeeKanbanModeWrapper>
  );
}

export default withConfiguration(CapgeminiHrFlow360EmployeeKanbanMode);
