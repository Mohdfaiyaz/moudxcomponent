import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 16px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    width: 100%;

    .kanban-board {
      display: flex;
      gap: 20px;
      width: 100%;
      min-height: 450px;
      box-sizing: border-box;
    }

    /* --- Kanban Column Structuring --- */
    .kanban-column {
      flex: 1;
      background-color: #f8fafc;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    /* Target Header Layout Color rules matching your mockups */
    .kanban-column.scoped .column-header {
      background-color: #f26522; /* Scoped Orange Header */
      color: #ffffff;
    }

    .kanban-column.selected .column-header {
      background-color: #10b981; /* Selected Green Header */
      color: #ffffff;
    }

    .column-header {
      padding: 14px 20px;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.02em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .badge-count {
      background-color: rgba(255, 255, 255, 0.25);
      padding: 2px 8px;
      border-radius: 20px;
      font-size: 0.8125rem;
      font-weight: 600;
    }

    /* --- Drop Container Area Hooks --- */
    .column-body {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
      max-height: 500px;
      transition: background-color 0.2s ease;

      &.drag-over {
        background-color: #f1f5f9;
        border: 2px dashed #cbd5e1;
        border-radius: 0 0 12px 12px;
      }
    }

    /* --- Kanban Card Styling --- */
    .kanban-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      cursor: grab;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
      position: relative;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        border-color: #cbd5e1;
      }

      &:active {
        cursor: grabbing;
      }

      h4 {
        margin: 0 0 8px 0;
        color: #0f172a;
        font-size: 0.9375rem;
        font-weight: 600;
      }
    }

    .card-skills {
      font-size: 0.8125rem;
      color: #64748b;
      margin-bottom: 12px;
      line-height: 1.4;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px dashed #e2e8f0;
      padding-top: 8px;
      margin-top: 8px;
    }

    .action-link {
      background: none;
      border: none;
      color: #2563eb;
      font-size: 0.8125rem;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;

      &:hover {
        text-decoration: underline;
        color: #1d4ed8;
      }
    }

    .card-meta-id {
      font-size: 0.75rem;
      color: #94a3b8;
    }

    .empty-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
      color: #94a3b8;
      font-size: 0.875rem;
      border: 1px dashed #e2e8f0;
      border-radius: 6px;
      background-color: #fafafa;
    }
  `;
});
