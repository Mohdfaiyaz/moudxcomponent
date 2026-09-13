(self.webpackChunkmoudxcomponent=self.webpackChunkmoudxcomponent||[]).push([[24022175],{1291:e=>{function a(e){return Promise.resolve().then(()=>{var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a})}a.keys=()=>[],a.resolve=a,a.id=1291,e.exports=a},6145:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>m});var r=t(1093),o=t(1594),l=t(8997),i=t(6407),s=t(4879),n=t(8267);const d=n.Ay.div(()=>n.AH`
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
  `);var c=t(4848);function p({show:e,searchQuery:a,employmentTypeFilter:t,categories:r,onChangeSearch:o,onChangeType:l}){return e?(0,c.jsxs)("div",{style:{display:"flex",gap:"16px",marginBottom:"20px",padding:"16px",backgroundColor:"#ffffff",borderRadius:"8px",border:"1px solid #e2e8f0",boxShadow:"0 1px 2px rgba(0,0,0,0.05)"},children:[(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,c.jsx)("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"#4a5568",marginBottom:"6px"},children:"Search Name / Email"}),(0,c.jsx)("input",{type:"text",placeholder:"Type to filter records instantly...",value:a,onChange:e=>o(e.target.value),style:{padding:"8px 12px",border:"1px solid #cbd5e1",borderRadius:"6px",fontSize:"0.875rem"}})]}),(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"200px"},children:[(0,c.jsx)("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"#4a5568",marginBottom:"6px"},children:"Employment Type"}),(0,c.jsxs)("select",{value:t,onChange:e=>l(e.target.value),style:{padding:"8px 12px",border:"1px solid #cbd5e1",borderRadius:"6px",fontSize:"0.875rem",backgroundColor:"#fff",textTransform:"capitalize"},children:[(0,c.jsx)("option",{value:"All",children:"All Categories"}),r.map(e=>(0,c.jsx)("option",{value:e,children:e},e))]})]})]}):null}function x({selectedEmpId:e,detailedEmployee:a,detailLoading:t,detailError:r,onClose:o}){return e?(0,c.jsx)("div",{className:"modal-overlay",onClick:o,children:(0,c.jsxs)("div",{className:"modal-container",onClick:e=>e.stopPropagation(),children:[(0,c.jsxs)("div",{className:"modal-header",children:[(0,c.jsx)("h3",{children:"Employee Insight Card"}),(0,c.jsx)("button",{type:"button",className:"btn-close",onClick:o,children:"×"})]}),t&&(0,c.jsx)("div",{className:"loading-text",children:"Querying single view secure endpoints..."}),r&&(0,c.jsx)("p",{style:{color:"#e53e3e",padding:"16px"},children:r}),!t&&a&&(0,c.jsxs)("div",{style:{padding:"24px"},children:[(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px"},children:[(0,c.jsx)("div",{className:"avatar-circle",children:a.EmployeeFullName?.charAt(0)||"E"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{style:{margin:0,color:"#1a202c",fontSize:"1.5rem"},children:a.EmployeeFullName}),(0,c.jsxs)("p",{style:{margin:"4px 0 0 0",color:"#718096",fontSize:"0.875rem"},children:["ID Ref: ",e.slice(0,8),"..."]})]})]}),(0,c.jsxs)("div",{className:"grid-container",children:[(0,c.jsxs)("div",{className:"detail-item",children:[(0,c.jsx)("span",{className:"detail-label",children:"Gender"}),(0,c.jsx)("span",{className:"detail-value",children:a.Gender})]}),(0,c.jsxs)("div",{className:"detail-item",children:[(0,c.jsx)("span",{className:"detail-label",children:"Date of Birth"}),(0,c.jsx)("span",{className:"detail-value",children:a.DateOfBirth})]}),(0,c.jsxs)("div",{className:"detail-item",children:[(0,c.jsx)("span",{className:"detail-label",children:"Date of Joining"}),(0,c.jsx)("span",{className:"detail-value",children:a.DateOfJoining})]}),(0,c.jsxs)("div",{className:"detail-item",children:[(0,c.jsx)("span",{className:"detail-label",children:"Employment Type"}),(0,c.jsx)("span",{className:"detail-value",children:a.EmploymentType||"Full-time"})]}),(0,c.jsxs)("div",{className:"detail-item",children:[(0,c.jsx)("span",{className:"detail-label",children:"Official Email"}),(0,c.jsx)("span",{className:"detail-value",style:{color:"#2563eb"},children:a.PersonalEmailAddress||"N/A"})]}),(0,c.jsxs)("div",{className:"detail-item",children:[(0,c.jsx)("span",{className:"detail-label",children:"Personal Email"}),(0,c.jsx)("span",{className:"detail-value",children:a.PersonalEmailAddress})]}),(0,c.jsxs)("div",{className:"detail-item",style:{gridColumn:"span 2"},children:[(0,c.jsx)("span",{className:"detail-label",children:"Primary Contact Number"}),(0,c.jsx)("span",{className:"detail-value",children:a.PrimaryContactNumber})]})]})]})]})}):null}const m=(0,r.A)(function(e){const{getPConnect:a}=e,[t,r]=(0,o.useState)([]),[n,m]=(0,o.useState)(!0),[f,h]=(0,o.useState)(null),[g,u]=(0,o.useState)(null),[b,y]=(0,o.useState)(null),[j,v]=(0,o.useState)(!1),[N,w]=(0,o.useState)(null),[A,C]=(0,o.useState)(!1),[k,E]=(0,o.useState)(""),[S,P]=(0,o.useState)("All"),z=a?a().getContextName():"";(0,o.useEffect)(()=>{a&&(m(!0),PCore.getDataPageUtils().getDataAsync("D_EmployeeList",z,{}).then(e=>{e&&e.data&&Array.isArray(e.data.data)?r(e.data.data):e&&Array.isArray(e.data)?r(e.data):e&&e.data&&e.data.pxResults?r(e.data.pxResults):e&&e.pxResults?r(e.pxResults):Array.isArray(e)?r(e):r([]),m(!1)}).catch(e=>{console.error("List Data Page Error:",e),h("Failed to populate modern dashboard view."),m(!1)}))},[a,z]),(0,o.useEffect)(()=>{if(!g||!z)return;v(!0),w(null),y(null);const e={pyGUID:g};PCore.getDataPageUtils().getPageDataAsync("D_GetEmployee",z,e,{invalidateCache:!1}).then(e=>{e&&e.data?y(e.data):e&&y(e),v(!1)}).catch(e=>{console.error("Single Record Load Failure:",e),w("Unable to retrieve profile insights."),v(!1)})},[g,z]);const D=(0,o.useMemo)(()=>{const e=t.map(e=>e.EmploymentType).filter(e=>"string"==typeof e&&""!==e.trim());return Array.from(new Set(e))},[t]),T=t.filter(e=>{const a=e.EmployeeFullName||"",t=e.PersonalEmailAddress||"",r=a.toLowerCase().includes(k.toLowerCase())||t.toLowerCase().includes(k.toLowerCase()),o="All"===S||(e.EmploymentType||"").toLowerCase()===S.toLowerCase();return r&&o});return(0,c.jsxs)(d,{children:[(0,c.jsxs)(l.A,{children:[(0,c.jsx)(i.A,{actions:(0,c.jsxs)("div",{className:"dashboard-toolbar",children:[(0,c.jsxs)("button",{type:"button",className:"btn-filter "+(A?"active":""),onClick:()=>C(!A),children:[(0,c.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,c.jsx)("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),A?"Hide Filters":"Filter"]}),(0,c.jsx)("button",{type:"button",className:"btn-add",onClick:()=>{if(!a)return;const e="Capg-HRFlow360-Work-CreateEmployee";try{const t=PCore.getActionsUtils();t&&"function"==typeof t.createNewWork?t.createNewWork(e,{containerName:"modal",content:{}}):a().getActionsApi().openCreateStage(e)}catch(e){console.error("Failed to trigger Pega case creation routing engine:",e)}},children:"+ Add Employee"})]}),children:"Employee Directory"}),(0,c.jsxs)(s.A,{children:[(0,c.jsx)(p,{show:A,searchQuery:k,employmentTypeFilter:S,categories:D,onChangeSearch:E,onChangeType:P}),n&&(0,c.jsx)("div",{className:"loading-text",children:"Assembling directory view..."}),f&&(0,c.jsx)("h3",{style:{color:"#e53e3e"},children:f}),!n&&!f&&0===T.length&&(0,c.jsx)("p",{style:{padding:"20px",textAlign:"center",color:"#718096"},children:"No active records match your specified search layout parameters."}),!n&&!f&&T.length>0&&(0,c.jsx)("div",{className:"table-container",children:(0,c.jsxs)("table",{className:"modern-table",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Name"}),(0,c.jsx)("th",{children:"Employment Type"}),(0,c.jsx)("th",{children:"Official Email"}),(0,c.jsx)("th",{children:"Contact Number"}),(0,c.jsx)("th",{children:"Join Date"}),(0,c.jsx)("th",{children:"Status"}),(0,c.jsx)("th",{style:{textAlign:"right"},children:"Actions"})]})}),(0,c.jsx)("tbody",{children:T.map((e,a)=>{const t=e.pyGUID||e.PersonalEmailAddress||`emp-${a}`,r=e.Status||(a%3==2?"Inactive":"Active");return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("strong",{children:e.EmployeeFullName})}),(0,c.jsx)("td",{children:e.EmploymentType||"N/A"}),(0,c.jsx)("td",{children:e.PersonalEmailAddress||"N/A"}),(0,c.jsx)("td",{children:e.PrimaryContactNumber}),(0,c.jsx)("td",{children:e.DateOfJoining}),(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:`status-badge ${r.toLowerCase()}`,children:r})}),(0,c.jsx)("td",{style:{textAlign:"right"},children:(0,c.jsx)("button",{type:"button",className:"btn-action",onClick:()=>u(t),children:"View Profile"})})]},e.PersonalEmailAddress||`row-${a}`)})})]})})]})]}),(0,c.jsx)(x,{selectedEmpId:g,detailedEmployee:b,detailLoading:j,detailError:N,onClose:()=>{u(null),y(null)}})]})})}}]);
//# sourceMappingURL=CH0001_Capgemini_HRFlow360_EmployeeInsight.0e720cdc.js.map