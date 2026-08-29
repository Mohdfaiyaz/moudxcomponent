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
      {list.map((employee: Employee, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className='employee-card' key={index}>
          <div>
            <strong>Name:</strong> {employee.EmployeeFullName}
          </div>
          <div>
            <strong>Gender:</strong> {employee.Gender}
          </div>
          <div>
            <strong>Date of Birth:</strong> {employee.DateOfBirth}
          </div>
          <div>
            <strong>Date of Joining:</strong> {employee.DateOfJoining}
          </div>
          <div>
            <strong>Employment Type:</strong> {employee.EmploymentType}
          </div>
          <div>
            <strong>Official Email:</strong> {employee.OfficialEmailAddress}
          </div>
          <div>
            <strong>Personal Email:</strong> {employee.PersonalEmailAddress}
          </div>
          <div>
            <strong>Primary Contact:</strong> {employee.PrimaryContactNumber}
          </div>
          <div>
            <strong>Emergency Contact Name:</strong> {employee.EmergencyContactName}
          </div>
          <div>
            <strong>Emergency Contact Number:</strong> {employee.EmergencyContactNumber}
          </div>
          <div>
            <strong>Current Address:</strong> {employee.CurrentAddress}
          </div>
          <div>
            <strong>Permanent Address:</strong> {employee.PermanentAddress}
          </div>
          <div>
            <strong>Educational Qualification:</strong> {employee.EducationalQualification}
          </div>
          <div>
            <strong>Previous Employer:</strong> {employee.PreviousEmployer}
          </div>
          <div>
            <strong>Skills & Technologies:</strong> {employee.SkillsAndTechnologies}
          </div>
        </div>
      ))}
    </StyledCapgeminiHrFlow360ListCardViewWrapper>
  );
}

export default withConfiguration(CapgeminiHrFlow360ListCardView);

// as objects are there in props, shallow comparision fails & re-rendering of comp happens even with
// same key value pairs in obj. hence using custom comparison function on when to re-render
// const comparisonFn = (prevProps, nextProps) => {
//   return prevProps.updateDateTime === nextProps.updateDateTime;
// };
