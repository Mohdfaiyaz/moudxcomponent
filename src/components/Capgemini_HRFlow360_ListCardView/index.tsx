import { withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';

// includes in bundle

import StyledCapgeminiHrFlow360ListCardViewWrapper from './styles';
import { useEffect, useState } from 'react';

// interface for props
interface CapgeminiHrFlow360ListCardViewProps extends PConnFieldProps {}

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
function CapgeminiHrFlow360ListCardView(props: CapgeminiHrFlow360ListCardViewProps) {
  const { getPConnect } = props;
  const [list, setList] = useState<Employee[]>([]);
  const pConn = getPConnect?.();
  useEffect(() => {
    try {
      if (pConn) {
        const employeeList = pConn.getValue?.('.ListOfEmployee') ?? [];
        setList(employeeList);
      }
    } catch (e) {
      console.log('❌ DX LOAD ERROR:', e);
    }
  }, [pConn]);
  return (
    <StyledCapgeminiHrFlow360ListCardViewWrapper>
      <div className='employee-grid'>
        {list.map((employee: Employee, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className='employee-card' key={index}>
            <div className='card-header'>
              <div className='avatar'>
                {employee.EmployeeFullName?.split(' ')
                  .map(n => n[0])
                  .join('')
                  .substring(0, 2)}
              </div>

              <div>
                <h3>{employee.EmployeeFullName}</h3>
                <span>{employee.EmploymentType}</span>
              </div>
            </div>

            <div className='card-content'>
              <p>
                <strong>Email:</strong> {employee.PersonalEmailAddress}
              </p>

              <p>
                <strong>Phone:</strong> {employee.PrimaryContactNumber}
              </p>

              <p>
                <strong>Previous Employer:</strong> {employee.PreviousEmployer}
              </p>

              <p>
                <strong>Joined:</strong> {employee.DateOfJoining}
              </p>
            </div>

            <div className='skills-container'>
              {employee.SkillsAndTechnologies?.split(',').map(skill => (
                <span key={skill.trim()} className='skill-tag'>
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledCapgeminiHrFlow360ListCardViewWrapper>
  );
}

export default withConfiguration(CapgeminiHrFlow360ListCardView);

// as objects are there in props, shallow comparision fails & re-rendering of comp happens even with
// same key value pairs in obj. hence using custom comparison function on when to re-render
// const comparisonFn = (prevProps, nextProps) => {
//   return prevProps.updateDateTime === nextProps.updateDateTime;
// };
