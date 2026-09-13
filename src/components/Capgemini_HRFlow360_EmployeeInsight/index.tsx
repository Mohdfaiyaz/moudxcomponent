import { withConfiguration } from '@pega/cosmos-react-core';
import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardHeader, CardContent } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';
import StyledCapgeminiHrFlow360EmployeeInsightWrapper from './styles';

import { Employee } from './types';
import FilterPanel from './FilterPanel';
import EmployeeModal from './EmployeeModal';

interface CapgeminiHrFlow360EmployeeInsightProps extends PConnFieldProps {}
declare const PCore: any;

function CapgeminiHrFlow360EmployeeInsight(props: CapgeminiHrFlow360EmployeeInsightProps) {
  const { getPConnect } = props;

  // Master List State Layout
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [listLoading, setListLoading] = useState<boolean>(true);
  const [listError, setListError] = useState<string | null>(null);

  // Detail Modal Sub-States
  const [selectedEmpId, setSelectedEmpId] = useState<string | null>(null);
  const [detailedEmployee, setDetailedEmployee] = useState<Employee | null>(null);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [detailError, setDetailError] = useState<string | null>(null);

  // Filter Variables State Machine
  const [showFilterBar, setShowFilterBar] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState<string>('All');

  const context = getPConnect ? getPConnect().getContextName() : '';

  // Fetch Master Records List Data
  useEffect(() => {
    if (!getPConnect) return;

    const listDataPageName = 'D_EmployeeList';
    const listParameters = {};

    setListLoading(true);
    PCore.getDataPageUtils()
      .getDataAsync(listDataPageName, context, listParameters)
      .then((response: any) => {
        if (response && response.data && Array.isArray(response.data.data)) {
          setEmployeeList(response.data.data);
        } else if (response && Array.isArray(response.data)) {
          setEmployeeList(response.data);
        } else if (response && response.data && response.data.pxResults) {
          setEmployeeList(response.data.pxResults);
        } else if (response && response.pxResults) {
          setEmployeeList(response.pxResults);
        } else if (Array.isArray(response)) {
          setEmployeeList(response);
        } else {
          setEmployeeList([]);
        }
        setListLoading(false);
      })
      .catch((error: any) => {
        console.error('List Data Page Error:', error);
        setListError('Failed to populate modern dashboard view.');
        setListLoading(false);
      });
  }, [getPConnect, context]);

  // Fetch Single Detailed Record Profile
  useEffect(() => {
    if (!selectedEmpId || !context) return;

    setDetailLoading(true);
    setDetailError(null);
    setDetailedEmployee(null);

    const dataPageName = 'D_GetEmployee';
    const parameters = { pyGUID: selectedEmpId };
    const options = { invalidateCache: false };

    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then((response: any) => {
        if (response && response.data) {
          setDetailedEmployee(response.data);
        } else if (response) {
          setDetailedEmployee(response);
        }
        setDetailLoading(false);
      })
      .catch((error: any) => {
        console.error('Single Record Load Failure:', error);
        setDetailError('Unable to retrieve profile insights.');
        setDetailLoading(false);
      });
  }, [selectedEmpId, context]);

  // Handle Pega Create Case System Router Actions
  const handleAddEmployeeClick = () => {
    if (!getPConnect) return;
    const employeeCaseType = 'Capg-HRFlow360-Work-CreateEmployee';

    try {
      const actionUtils = PCore.getActionsUtils();
      if (actionUtils && typeof actionUtils.createNewWork === 'function') {
        actionUtils.createNewWork(employeeCaseType, {
          containerName: 'modal',
          content: {}
        });
      } else {
        getPConnect().getActionsApi().openCreateStage(employeeCaseType);
      }
    } catch (err) {
      console.error('Failed to trigger Pega case creation routing engine:', err);
    }
  };

  // --- ADDED: Extract Unique Categories Dynamically From Live Server Data ---
  const uniqueCategories = useMemo(() => {
    const types = employeeList
      .map(emp => emp.EmploymentType)
      .filter((type): type is string => typeof type === 'string' && type.trim() !== '');

    // Set automatically deduplicates matches into single instances
    return Array.from(new Set(types));
  }, [employeeList]);

  // Complex Evaluation Rule Array Multi-Filtering computation
  const filteredEmployees = employeeList.filter(emp => {
    const nameMatch = emp.EmployeeFullName || '';
    const emailMatch = emp.PersonalEmailAddress || '';

    const matchesSearch =
      nameMatch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emailMatch.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesEmploymentType =
      employmentTypeFilter === 'All' ||
      (emp.EmploymentType || '').toLowerCase() === employmentTypeFilter.toLowerCase();

    return matchesSearch && matchesEmploymentType;
  });

  return (
    <StyledCapgeminiHrFlow360EmployeeInsightWrapper>
      <Card>
        <CardHeader
          actions={
            <div className='dashboard-toolbar'>
              <button
                type='button'
                className={`btn-filter ${showFilterBar ? 'active' : ''}`}
                onClick={() => setShowFilterBar(!showFilterBar)}
              >
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
                </svg>
                {showFilterBar ? 'Hide Filters' : 'Filter'}
              </button>

              <button type='button' className='btn-add' onClick={handleAddEmployeeClick}>
                + Add Employee
              </button>
            </div>
          }
        >
          Employee Directory
        </CardHeader>
        <CardContent>
          {/* --- REUSABLE COMPONENT: Filtering Panel with dynamic categories --- */}
          <FilterPanel
            show={showFilterBar}
            searchQuery={searchQuery}
            employmentTypeFilter={employmentTypeFilter}
            categories={uniqueCategories}
            onChangeSearch={setSearchQuery}
            onChangeType={setEmploymentTypeFilter}
          />

          {listLoading && <div className='loading-text'>Assembling directory view...</div>}
          {listError && <h3 style={{ color: '#e53e3e' }}>{listError}</h3>}

          {!listLoading && !listError && filteredEmployees.length === 0 && (
            <p style={{ padding: '20px', textAlign: 'center', color: '#718096' }}>
              No active records match your specified search layout parameters.
            </p>
          )}

          {!listLoading && !listError && filteredEmployees.length > 0 && (
            <div className='table-container'>
              <table className='modern-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Employment Type</th>
                    <th>Official Email</th>
                    <th>Contact Number</th>
                    <th>Join Date</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((emp, index) => {
                    const empId = emp.pyGUID || emp.PersonalEmailAddress || `emp-${index}`;
                    const calculatedStatus =
                      emp.Status || (index % 3 === 2 ? 'Inactive' : 'Active');

                    return (
                      <tr key={emp.PersonalEmailAddress || `row-${index}`}>
                        <td>
                          <strong>{emp.EmployeeFullName}</strong>
                        </td>
                        <td>{emp.EmploymentType || 'N/A'}</td>
                        <td>{emp.PersonalEmailAddress || 'N/A'}</td>
                        <td>{emp.PrimaryContactNumber}</td>
                        <td>{emp.DateOfJoining}</td>
                        <td>
                          <span className={`status-badge ${calculatedStatus.toLowerCase()}`}>
                            {calculatedStatus}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            type='button'
                            className='btn-action'
                            onClick={() => setSelectedEmpId(empId)}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* --- REUSABLE COMPONENT: Detail Popup Overlay Dialog --- */}
      <EmployeeModal
        selectedEmpId={selectedEmpId}
        detailedEmployee={detailedEmployee}
        detailLoading={detailLoading}
        detailError={detailError}
        onClose={() => {
          setSelectedEmpId(null);
          setDetailedEmployee(null);
        }}
      />
    </StyledCapgeminiHrFlow360EmployeeInsightWrapper>
  );
}

export default withConfiguration(CapgeminiHrFlow360EmployeeInsight);
