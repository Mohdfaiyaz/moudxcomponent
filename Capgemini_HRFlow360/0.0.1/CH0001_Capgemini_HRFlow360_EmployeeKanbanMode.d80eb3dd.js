"use strict";(self.webpackChunkmoudxcomponent=self.webpackChunkmoudxcomponent||[]).push([[53784793],{2514:(e,a,o)=>{o.r(a),o.d(a,{CapgeminiHrFlow360EmployeeKanbanMode:()=>d,default:()=>i});var n=o(1594),r=o(1093),l=o(8267);const s=l.Ay.div(()=>l.AH`
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
  `);var t=o(4848);function d(e){const a=e.getPConnect?.(),o=a?.getActionsApi?.(),[r,l]=(0,n.useState)([]),[d,i]=(0,n.useState)(null),[c,p]=(0,n.useState)(null),m=()=>{if(!a)return[];const e=a.getValue?.(".ListOfEmployee");return e?Array.isArray(e)?e:Object.values(e):[]};(0,n.useEffect)(()=>{if(!a)return;const e=m();l(e)},[a]);const g=(e,a)=>{l(o=>o.map((o,n)=>n!==e?o:{...o,pyStatusValue:a}))},u=(e,n)=>{if(!a||!o)return void console.error("Pega connection or Actions API is unavailable.");const s=r[e];if(!s)return void console.error(`Employee was not found at index ${e}.`);const t=s.pyStatusValue,d="scoped"===n?"Yes":"No";l(a=>a.map((a,o)=>o!==e?a:{...a,pyStatusValue:d}));const i=m();if(0===i.length)return console.error("ListOfEmployee is empty or unavailable in the Pega clipboard."),void g(e,t);let c=!1;try{for(const[a]of i.entries()){const n=`.ListOfEmployee(${a+1})`;try{a===e?(o.updateFieldValue(`${n}.pyStatusValue`,d),console.log(`Successfully updated ${n}.pyStatusValue to "${d}".`)):o.updateFieldValue(`${n}.pyNote`,"Yes")}catch(o){console.error(`Error while updating internal list path ${n}:`,o),a===e&&(c=!0)}}if(c)return void g(e,t);window.setTimeout(()=>{(()=>{if(!a)return;const e=m();console.log("[EMPLOYEE CARD MOVEMENT] Full ListOfEmployee JSON Code Payload:"),console.log(JSON.stringify(e,null,2))})()},100)}catch(a){console.error("Error while executing the employee card update:",a),g(e,t)}},x=(e,a,o)=>{const n={originalIndex:a,sourceColumn:o};i(n),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",JSON.stringify(n)),e.currentTarget.classList.add("is-dragging"),console.log(`Started dragging employee at original index ${a} from the ${o} column.`)},f=e=>{e.currentTarget.classList.remove("is-dragging"),i(null),p(null)},b=(e,a)=>{e.preventDefault(),e.dataTransfer.dropEffect="move",c!==a&&p(a)},h=(e,a)=>{const o=e.currentTarget,n=e.relatedTarget;n&&o.contains(n)||p(e=>e===a?null:e)},y=(e,a)=>{e.preventDefault(),e.stopPropagation();const o=(e=>{const a=e.dataTransfer.getData("text/plain");if(a)try{const e=JSON.parse(a),o=Number.isInteger(e.originalIndex),n="scoped"===e.sourceColumn||"selected"===e.sourceColumn;if(o&&n)return e}catch(e){console.warn("Unable to parse the transferred employee data:",e)}return d})(e);if(p(null),i(null),!o)return void console.error("The dropped employee information is unavailable.");const{originalIndex:n,sourceColumn:l}=o;l!==a?r[n]?u(n,l):console.error(`Dropped employee was not found at index ${n}.`):console.log(`Employee remained in the ${a} column.`)},N=(e,a,o)=>{"Enter"!==e.key&&" "!==e.key||e.target instanceof HTMLButtonElement||(e.preventDefault(),u(a,o))},v=e=>{e.stopPropagation()},j=r.map((e,a)=>({emp:e,originalIndex:a})),k=j.filter(({emp:e})=>"Yes"!==e.pyStatusValue),E=j.filter(({emp:e})=>"Yes"===e.pyStatusValue),w=(e,a)=>e.pyGUID?e.pyGUID:`${e.EmployeeFullName||"employee"}-${a}`,D=e=>d?.originalIndex===e,S=()=>(0,t.jsxs)("span",{className:"drag-handle","aria-hidden":"true",title:"Drag employee",children:[(0,t.jsx)("span",{className:"drag-handle-dot"}),(0,t.jsx)("span",{className:"drag-handle-dot"}),(0,t.jsx)("span",{className:"drag-handle-dot"}),(0,t.jsx)("span",{className:"drag-handle-dot"}),(0,t.jsx)("span",{className:"drag-handle-dot"}),(0,t.jsx)("span",{className:"drag-handle-dot"})]});return(0,t.jsx)(s,{children:(0,t.jsxs)("div",{className:"kanban-board",children:[(0,t.jsxs)("section",{className:"kanban-column scoped "+("scoped"===c?"drag-over":""),onDragOver:e=>b(e,"scoped"),onDragLeave:e=>h(e,"scoped"),onDrop:e=>y(e,"scoped"),"aria-label":"Scoped employees drop area",children:[(0,t.jsxs)("header",{className:"column-header",children:[(0,t.jsx)("span",{children:"Scoped Employees"}),(0,t.jsx)("span",{className:"badge-count","aria-label":`${k.length} scoped employees`,children:k.length})]}),(0,t.jsxs)("div",{className:"column-body "+("scoped"===c?"drag-over":""),children:[k.map(({emp:e,originalIndex:a})=>(0,t.jsxs)("article",{className:"kanban-card "+(D(a)?"is-dragging":""),draggable:!0,tabIndex:0,role:"button","aria-grabbed":D(a),"aria-label":`${e.EmployeeFullName||"Unnamed employee"}. Drag to selected employees or press Enter to move.`,onDragStart:e=>x(e,a,"scoped"),onDragEnd:f,onKeyDown:e=>N(e,a,"scoped"),children:[(0,t.jsxs)("div",{className:"card-heading",children:[S(),(0,t.jsx)("div",{className:"employee-name",children:e.EmployeeFullName||"Unnamed Employee"})]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Employment type:"})," ",e.EmploymentType||"Not provided"]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Personal email:"})," ",e.PersonalEmailAddress||"Not provided"]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Contact:"})," ",e.PrimaryContactNumber||"Not provided"]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Date of joining:"})," ",e.DateOfJoining||"Not provided"]}),(0,t.jsx)("span",{className:"employee-status status-no",children:"Available"}),(0,t.jsxs)("div",{className:"card-footer",children:[(0,t.jsxs)("span",{className:"card-meta-id",children:["Row: ",a+1]}),(0,t.jsx)("button",{type:"button",className:"action-link",draggable:!1,onMouseDown:v,onClick:()=>u(a,"scoped"),"aria-label":`Move ${e.EmployeeFullName||"employee"} to selected`,children:"Move to selection →"})]})]},w(e,a))),0===k.length&&(0,t.jsxs)("div",{className:"empty-placeholder",children:[(0,t.jsx)("span",{className:"empty-icon","aria-hidden":"true",children:"↓"}),(0,t.jsx)("span",{children:"No scoped employee records available"}),(0,t.jsx)("small",{children:"Drop a selected employee here to move the record back."})]})]})]}),(0,t.jsxs)("section",{className:"kanban-column selected "+("selected"===c?"drag-over":""),onDragOver:e=>b(e,"selected"),onDragLeave:e=>h(e,"selected"),onDrop:e=>y(e,"selected"),"aria-label":"Selected employees drop area",children:[(0,t.jsxs)("header",{className:"column-header",children:[(0,t.jsx)("span",{children:"Selected Employees"}),(0,t.jsx)("span",{className:"badge-count","aria-label":`${E.length} selected employees`,children:E.length})]}),(0,t.jsxs)("div",{className:"column-body "+("selected"===c?"drag-over":""),children:[E.map(({emp:e,originalIndex:a})=>(0,t.jsxs)("article",{className:"kanban-card selected-card "+(D(a)?"is-dragging":""),draggable:!0,tabIndex:0,role:"button","aria-grabbed":D(a),"aria-label":`${e.EmployeeFullName||"Unnamed employee"}. Drag to scoped employees or press Enter to move.`,onDragStart:e=>x(e,a,"selected"),onDragEnd:f,onKeyDown:e=>N(e,a,"selected"),children:[(0,t.jsxs)("div",{className:"card-heading",children:[S(),(0,t.jsx)("div",{className:"employee-name",children:e.EmployeeFullName||"Unnamed Employee"})]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Employment type:"})," ",e.EmploymentType||"Not provided"]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Personal email:"})," ",e.PersonalEmailAddress||"Not provided"]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Contact:"})," ",e.PrimaryContactNumber||"Not provided"]}),(0,t.jsxs)("div",{className:"employee-info",children:[(0,t.jsx)("strong",{children:"Date of joining:"})," ",e.DateOfJoining||"Not provided"]}),(0,t.jsx)("span",{className:"employee-status status-yes",children:"Selected"}),(0,t.jsxs)("div",{className:"card-footer",children:[(0,t.jsxs)("span",{className:"card-meta-id",children:["Row: ",a+1]}),(0,t.jsx)("button",{type:"button",className:"action-link remove-action",draggable:!1,onMouseDown:v,onClick:()=>u(a,"selected"),"aria-label":`Move ${e.EmployeeFullName||"employee"} back to scoped`,children:"← Move to scoped"})]})]},w(e,a))),0===E.length&&(0,t.jsxs)("div",{className:"empty-placeholder",children:[(0,t.jsx)("span",{className:"empty-icon","aria-hidden":"true",children:"↓"}),(0,t.jsx)("span",{children:"No employees have been selected"}),(0,t.jsx)("small",{children:"Drag a scoped employee here to select the record."})]})]})]})]})})}const i=(0,r.A)(d)}}]);
//# sourceMappingURL=CH0001_Capgemini_HRFlow360_EmployeeKanbanMode.d80eb3dd.js.map