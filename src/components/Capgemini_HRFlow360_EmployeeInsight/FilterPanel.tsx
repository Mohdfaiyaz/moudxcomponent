import React from 'react';

interface FilterPanelProps {
  show: boolean;
  searchQuery: string;
  employmentTypeFilter: string;
  // New prop: Receives the list of unique categories found in the database records
  categories: string[];
  onChangeSearch: (value: string) => void;
  onChangeType: (value: string) => void;
}

export default function FilterPanel({
  show,
  searchQuery,
  employmentTypeFilter,
  categories,
  onChangeSearch,
  onChangeType
}: FilterPanelProps) {
  if (!show) return null;

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span
          style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4a5568', marginBottom: '6px' }}
        >
          Search Name / Email
        </span>
        <input
          type='text'
          placeholder='Type to filter records instantly...'
          value={searchQuery}
          onChange={e => onChangeSearch(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            fontSize: '0.875rem'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        <span
          style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4a5568', marginBottom: '6px' }}
        >
          Employment Type
        </span>
        <select
          value={employmentTypeFilter}
          onChange={e => onChangeType(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            fontSize: '0.875rem',
            backgroundColor: '#fff',
            textTransform: 'capitalize'
          }}
        >
          <option value='All'>All Categories</option>
          {/* Dynamically map over real database classification terms */}
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
