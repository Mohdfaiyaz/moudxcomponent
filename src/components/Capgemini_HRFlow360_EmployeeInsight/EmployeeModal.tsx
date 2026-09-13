import React from 'react';
import { Employee } from './types';

interface EmployeeModalProps {
  selectedEmpId: string | null;
  detailedEmployee: Employee | null;
  detailLoading: boolean;
  detailError: string | null;
  onClose: () => void;
}

export default function EmployeeModal({
  selectedEmpId,
  detailedEmployee,
  detailLoading,
  detailError,
  onClose
}: EmployeeModalProps) {
  // Guard clause: Only display if an active ID has been selected
  if (!selectedEmpId) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-container' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h3>Employee Insight Card</h3>
          <button type='button' className='btn-close' onClick={onClose}>
            &times;
          </button>
        </div>

        {detailLoading && (
          <div className='loading-text'>Querying single view secure endpoints...</div>
        )}
        {detailError && <p style={{ color: '#e53e3e', padding: '16px' }}>{detailError}</p>}

        {!detailLoading && detailedEmployee && (
          <div style={{ padding: '24px' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
            >
              <div className='avatar-circle'>
                {detailedEmployee.EmployeeFullName?.charAt(0) || 'E'}
              </div>
              <div>
                <h2 style={{ margin: 0, color: '#1a202c', fontSize: '1.5rem' }}>
                  {detailedEmployee.EmployeeFullName}
                </h2>
                <p style={{ margin: '4px 0 0 0', color: '#718096', fontSize: '0.875rem' }}>
                  ID Ref: {selectedEmpId.slice(0, 8)}...
                </p>
              </div>
            </div>

            <div className='grid-container'>
              <div className='detail-item'>
                <span className='detail-label'>Gender</span>
                <span className='detail-value'>{detailedEmployee.Gender}</span>
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Date of Birth</span>
                <span className='detail-value'>{detailedEmployee.DateOfBirth}</span>
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Date of Joining</span>
                <span className='detail-value'>{detailedEmployee.DateOfJoining}</span>
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Employment Type</span>
                <span className='detail-value'>
                  {detailedEmployee.EmploymentType || 'Full-time'}
                </span>
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Official Email</span>
                <span className='detail-value' style={{ color: '#2563eb' }}>
                  {detailedEmployee.PersonalEmailAddress || 'N/A'}
                </span>
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Personal Email</span>
                <span className='detail-value'>{detailedEmployee.PersonalEmailAddress}</span>
              </div>
              <div className='detail-item' style={{ gridColumn: 'span 2' }}>
                <span className='detail-label'>Primary Contact Number</span>
                <span className='detail-value'>{detailedEmployee.PrimaryContactNumber}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
