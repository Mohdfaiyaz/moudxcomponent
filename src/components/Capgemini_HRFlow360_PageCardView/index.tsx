import { withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';

import StyledCapgeminiHrFlow360PageCardViewWrapper from './styles';
import { useState, useEffect } from 'react';

// interface for props
interface CapgeminiHrFlow360PageCardViewProps extends PConnFieldProps {
  displayAs: string;
}

interface Employee {
  EmployeeFullName: string;
  Gender: string;
  DateOfBirth: string;
  DateOfJoining: string;
  EmploymentType: string;
  PersonalEmailAddress: string;
  OfficialEmailAddress: string;
  PrimaryContactNumber: string;
  EmergencyContactNumber: string;
  EmergencyContactName: string;
  CurrentAddress: string;
  PermanentAddress: string;
  EducationalQualification: string;
  PreviousEmployer: string;
  SkillsAndTechnologies: string;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function CapgeminiHrFlow360PageCardView(props: CapgeminiHrFlow360PageCardViewProps) {
  const { getPConnect, displayAs } = props;
  const pConn = getPConnect?.();
  const [employeeDetails, setEmployeeDetails] = useState<Employee>();
  useEffect(() => {
    if (pConn) {
      const employee = pConn.getValue?.('.EmployeeDetails') ?? [];
      setEmployeeDetails(employee);
    }
  }, [pConn]);

  return (
    <StyledCapgeminiHrFlow360PageCardViewWrapper>
      {employeeDetails &&
        (displayAs === 'simpleView' ? (
          <div>
            <div>Name: {employeeDetails.EmployeeFullName}</div>
            <div>Gender: {employeeDetails.Gender}</div>
            <div>DOB: {employeeDetails.DateOfBirth}</div>
            <div>DOJ: {employeeDetails.DateOfJoining}</div>
            <div>Employment Type: {employeeDetails.EmploymentType}</div>
            <div>Personal Email: {employeeDetails.PersonalEmailAddress}</div>
            <div>Official Email: {employeeDetails.OfficialEmailAddress}</div>
            <div>Primary Contact: {employeeDetails.PrimaryContactNumber}</div>
            <div>Emergency Contact: {employeeDetails.EmergencyContactNumber}</div>
            <div>Emergency Contact Name: {employeeDetails.EmergencyContactName}</div>
            <div>Current Address: {employeeDetails.CurrentAddress}</div>
            <div>Permanent Address: {employeeDetails.PermanentAddress}</div>
            <div>Qualification: {employeeDetails.EducationalQualification}</div>
            <div>Previous Employer: {employeeDetails.PreviousEmployer}</div>
            <div>Skills: {employeeDetails.SkillsAndTechnologies}</div>
          </div>
        ) : (
          <div className='employee-card'>
            <div className='employee-header'>
              <div className='employee-avatar'>
                {employeeDetails.EmployeeFullName?.split(' ')
                  .map(name => name[0])
                  .join('')
                  .substring(0, 2)}
              </div>

              <div>
                <div className='employee-name'>{employeeDetails.EmployeeFullName}</div>

                <div className='employee-meta'>
                  {employeeDetails.EmploymentType} • Joined {employeeDetails.DateOfJoining}
                </div>
              </div>
            </div>

            <div className='employee-section'>
              <div className='section-title'>Personal Information</div>

              <div className='info-grid'>
                <div className='info-item'>
                  <span className='info-label'>Gender</span>
                  <span className='info-value'>{employeeDetails.Gender}</span>
                </div>

                <div className='info-item'>
                  <span className='info-label'>Date of Birth</span>
                  <span className='info-value'>{employeeDetails.DateOfBirth}</span>
                </div>
              </div>
            </div>

            <div className='employee-section'>
              <div className='section-title'>Contact Information</div>

              <div className='info-grid'>
                <div className='info-item'>
                  <span className='info-label'>Personal Email</span>
                  <span className='info-value'>{employeeDetails.PersonalEmailAddress}</span>
                </div>

                <div className='info-item'>
                  <span className='info-label'>Official Email</span>
                  <span className='info-value'>{employeeDetails.OfficialEmailAddress}</span>
                </div>

                <div className='info-item'>
                  <span className='info-label'>Primary Contact</span>
                  <span className='info-value'>{employeeDetails.PrimaryContactNumber}</span>
                </div>

                <div className='info-item'>
                  <span className='info-label'>Emergency Contact</span>
                  <span className='info-value'>{employeeDetails.EmergencyContactNumber}</span>
                </div>
              </div>
            </div>

            <div className='employee-section'>
              <div className='section-title'>Addresses</div>

              <div className='info-grid'>
                <div className='info-item'>
                  <span className='info-label'>Current Address</span>
                  <span className='info-value'>{employeeDetails.CurrentAddress}</span>
                </div>

                <div className='info-item'>
                  <span className='info-label'>Permanent Address</span>
                  <span className='info-value'>{employeeDetails.PermanentAddress}</span>
                </div>
              </div>
            </div>

            <div className='employee-section'>
              <div className='section-title'>Skills & Technologies</div>

              <div className='skills-container'>
                {employeeDetails.SkillsAndTechnologies?.split(',').map(
                  (skill: string, index: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={index} className='skill-tag'>
                      {skill.trim()}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        ))}

      {/*
    <pre>
      {JSON.stringify(employeeDetails, null, 2)}
    </pre>
    */}
    </StyledCapgeminiHrFlow360PageCardViewWrapper>
  );
}
export default withConfiguration(CapgeminiHrFlow360PageCardView);

// as objects are there in props, shallow comparision fails & re-rendering of comp happens even with
// same key value pairs in obj. hence using custom comparison function on when to re-render
// const comparisonFn = (prevProps, nextProps) => {
//   return prevProps.updateDateTime === nextProps.updateDateTime;
// };
