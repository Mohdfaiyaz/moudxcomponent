import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 0px 0;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: #f8fafc;
    width: 100%;
    box-sizing: border-box;

    /* --- Toolbar Action Area --- */
    .dashboard-toolbar {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .btn-filter {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      color: #4a5568;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: #f7fafc;
        border-color: #cbd5e0;
      }
    }

    .btn-add {
      background-color: #2563eb;
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #1d4ed8;
      }
    }

    /* --- Modern Table Architecture --- */
    .table-container {
      width: 100%;
      overflow-x: auto;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .modern-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.875rem;

      thead {
        background-color: #f8fafc;
        border-bottom: 1px solid #e2e8f0;

        th {
          padding: 14px 16px;
          font-weight: 600;
          color: #4a5568;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid #f1f5f9;
          transition: background-color 0.2s ease;

          &:hover {
            background-color: #f8fafc;
          }

          td {
            padding: 14px 16px;
            color: #334155;
            vertical-align: middle;

            strong {
              color: #0f172a;
              font-weight: 500;
            }
          }
        }
      }
    }

    /* --- Status Badges --- */
    .status-badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: capitalize;

      &.active {
        background-color: #effdf4;
        color: #16a34a;
      }

      &.inactive {
        background-color: #fef2f2;
        color: #dc2626;
      }
    }

    /* --- Table Action Link Button --- */
    .btn-action {
      background: transparent;
      border: 1px solid #cbd5e1;
      color: #475569;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 0.8125rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: #f1f5f9;
        border-color: #94a3b8;
        color: #0f172a;
      }
    }

    /* --- Popup Modal / Dialog Overlay --- */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(15, 23, 42, 0.3);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: fadeIn 0.2s ease-out;
    }

    .modal-container {
      background: #ffffff;
      width: 100%;
      max-width: 560px;
      border-radius: 12px;
      box-shadow:
        0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
      overflow: hidden;
      animation: slideUp 0.25s ease-out;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid #e2e8f0;
      background-color: #f8fafc;

      h3 {
        margin: 0;
        color: #0f172a;
        font-size: 1.125rem;
        font-weight: 600;
      }
    }

    .btn-close {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      color: #94a3b8;
      cursor: pointer;
      line-height: 1;
      padding: 4px;

      &:hover {
        color: #475569;
      }
    }

    /* --- Modal Interior Layout Cards --- */
    .avatar-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #e0f2fe;
      color: #0369a1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.25rem;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .detail-item {
      display: flex;
      flex-direction: column;
      background-color: #f8fafc;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #f1f5f9;
    }

    .detail-label {
      font-size: 0.75rem;
      color: #64748b;
      text-transform: uppercase;
      margin-bottom: 4px;
      font-weight: 500;
      letter-spacing: 0.02em;
    }

    .detail-value {
      font-size: 0.9375rem;
      color: #1e293b;
      font-weight: 500;
    }

    .loading-text {
      padding: 24px;
      text-align: center;
      color: #64748b;
      font-size: 0.875rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
});
