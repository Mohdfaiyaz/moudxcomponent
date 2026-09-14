import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 8px 0;
    width: 100%;
    font-family:
      'Segoe UI',
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;

    /* =============================
       KANBAN BOARD
    ============================== */

    .kanban-board {
      display: flex;
      gap: 12px;
      width: 100%;
      min-height: 420px;
      align-items: flex-start;
    }

    /* =============================
       COLUMN
    ============================== */

    .kanban-column {
      flex: 1;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      transition: all 0.2s ease;
    }

    .kanban-column:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .kanban-column.drag-over {
      border: 2px dashed #60a5fa;
      background: #eff6ff;
    }

    .kanban-column.scoped .column-header {
      background: linear-gradient(135deg, #f26522 0%, #ff8c42 100%);
      color: #fff;
    }

    .kanban-column.selected .column-header {
      background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
      color: #fff;
    }

    /* =============================
       HEADER
    ============================== */

    .column-header {
      padding: 12px 16px;
      font-size: 15px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .badge-count {
      min-width: 24px;
      padding: 3px 8px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.25);
      font-size: 11px;
      font-weight: 600;
      text-align: center;
    }

    /* =============================
       BODY
    ============================== */

    .column-body {
      padding: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow-y: auto;
      min-height: 320px;
      background: #f8fafc;
    }

    .column-body.drag-over {
      background: #eff6ff;
      border: 1px dashed #60a5fa;
      border-radius: 6px;
    }

    /* =============================
       CARD
    ============================== */

    .kanban-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 10px 12px;
      cursor: grab;
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .kanban-card:hover {
      border-color: #cbd5e1;
      transform: translateY(-1px);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    }

    .kanban-card.is-dragging {
      opacity: 0.5;
      transform: rotate(1deg);
    }

    .selected-card {
      background: #ecfdf5;
      border-left: 3px solid #10b981;
    }

    /* =============================
       DRAG HANDLE
    ============================== */

    .drag-handle {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 6px;
      padding-bottom: 4px;
      border-bottom: 1px solid #f1f5f9;
    }

    .drag-handle-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #94a3b8;
    }

    /* =============================
       CONTENT
    ============================== */

    .employee-name {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 6px;
    }

    .employee-info {
      font-size: 12px;
      line-height: 1.35;
      color: #64748b;
      margin-bottom: 3px;
      word-break: break-word;
    }

    .employee-info strong {
      color: #475569;
      font-weight: 600;
    }

    .employee-status {
      display: inline-block;
      margin-top: 6px;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: 600;
    }

    .status-no {
      background: #fee2e2;
      color: #dc2626;
    }

    .status-yes {
      background: #dcfce7;
      color: #15803d;
    }

    /* =============================
       FOOTER
    ============================== */

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid #f1f5f9;
    }

    .card-meta-id {
      font-size: 10px;
      color: #94a3b8;
    }

    /* =============================
       BUTTONS
    ============================== */

    .action-link {
      border: none;
      background: #2563eb;
      color: white;
      padding: 6px 10px;
      border-radius: 5px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s;
    }

    .action-link:hover {
      background: #1d4ed8;
    }

    .remove-action {
      background: #ef4444;
    }

    .remove-action:hover {
      background: #dc2626;
    }

    /* =============================
       EMPTY STATE
    ============================== */

    .empty-placeholder {
      min-height: 120px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border: 2px dashed #cbd5e1;
      border-radius: 8px;
      background: #fff;
      color: #94a3b8;
      font-size: 13px;
      text-align: center;
    }

    .empty-icon {
      font-size: 18px;
    }

    .empty-placeholder small {
      font-size: 11px;
    }

    /* =============================
       SCROLLBAR
    ============================== */

    .column-body::-webkit-scrollbar {
      width: 6px;
    }

    .column-body::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 10px;
    }

    .column-body::-webkit-scrollbar-track {
      background: transparent;
    }

    /* =============================
       RESPONSIVE
    ============================== */

    @media (max-width: 768px) {
      .kanban-board {
        flex-direction: column;
      }

      .kanban-column {
        width: 100%;
      }

      .card-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
      }

      .action-link {
        width: 100%;
      }
    }
  `;
});
