"use strict";(self.webpackChunkmoudxcomponent=self.webpackChunkmoudxcomponent||[]).push([[81838156],{2401:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r}),i(1594);var n=i(1093),a=i(8267);const o=a.Ay.div(()=>a.AH`
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    padding: 24px;
    border-radius: 8px;

    /*
     * Main layout
     */
    .timeline-layout {
      display: grid;
      width: 100%;
      min-width: 0;
      align-items: start;
    }

    .timeline-layout.active-layout {
      grid-template-columns: minmax(360px, 45%) minmax(0, 55%);
      column-gap: 32px;
    }

    .timeline-layout.inline-layout,
    .timeline-layout.timeline-only-layout {
      grid-template-columns: minmax(0, 1fr);
    }

    /*
     * Left timeline section
     */
    .timeline-section {
      width: 100%;
      min-width: 0;
    }

    .timeline-row {
      display: grid;
      grid-template-columns: 180px 40px 1fr;
      min-height: 42px;
    }

    .header-column {
      padding-right: 12px;
      color: ${({theme:e})=>e.base.palette["brand-primary"]};
      font-size: 16px;
      font-weight: 600;
      line-height: 1.3;
    }

    .timeline-column {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .vertical-line {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background: ${({theme:e})=>e.base.palette["border-line"]};
      left: 50%;
      transform: translateX(-50%);
    }

    .content-column {
      min-width: 0;
      padding-bottom: 20px;
    }

    .label {
      color: #111827;
      font-size: 15px;
      font-weight: 600;
      margin-top: 2px;
    }

    /*
     * Dashboard Style Status Badges
     */
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      width: fit-content;
      margin-top: 8px;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
    }

    .status-badge::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    /* Completed */
    .status-badge.completed {
      background: #edfdf5;
      color: #38c793;
    }

    .status-badge.completed::before {
      background: #38c793;
    }

    /* In Progress */
    .status-badge.inProgress {
      background: #e9f4ff;
      color: #1b84e7;
    }

    .status-badge.inProgress::before {
      background: #1b84e7;
    }

    /* Pending */
    .status-badge.pending {
      background: #fbe8ef;
      color: #e9719d;
    }

    .status-badge.pending::before {
      background: #e9719d;
    }

    /* Canceled */
    .status-badge.canceled {
      background: #fff4e8;
      color: #f39c4a;
    }

    .status-badge.canceled::before {
      background: #f39c4a;
    }

    /*
     * Timeline Circle
     */
    .circle {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #ffffff;
      border: 2px solid #d5d7da;
      z-index: 2;
    }

    .circle.completed {
      border-color: ${({theme:e})=>e.base.palette["brand-primary"]};
      background-color: #ffffff;
    }

    .circle.inProgress {
      border-color: ${({theme:e})=>e.base.palette["brand-primary"]};
      background-color: ${({theme:e})=>e.base.palette["brand-primary"]};
    }

    .circle.pending {
      border-color: #d5d7da;
      background: #ffffff;
    }

    /*
     * Right-side stage information section
     */
    .stage-information-section {
      position: sticky;
      top: 16px;
      min-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
    }

    .stage-information-card {
      min-width: 0;
      box-sizing: border-box;
    }

    .stage-information-heading {
      margin: 0 0 8px;
      color: #374151;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.3;
    }

    .stage-information-label {
      margin: 0 0 8px;
      color: ${({theme:e})=>e.base.palette["brand-primary"]};
      font-size: 14px;
      font-weight: 600;
      line-height: 1.3;
    }

    .inline-stage-information {
      margin-top: 8px;
    }

    .note {
      min-width: 0;
      margin-top: 8px;
      color: #5f6368;
      font-size: 14px;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .note > :first-child {
      margin-top: 0;
    }

    .note > :last-child {
      margin-bottom: 0;
    }

    .note > div {
      margin: 0;
      padding: 0;
    }

    .note h1,
    .note h2,
    .note h3,
    .note h4,
    .note h5,
    .note h6 {
      margin: 0 0 6px;
      color: #374151;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.3;
    }

    .note p {
      margin: 0 0 6px;
      line-height: 1.4;
    }

    .note ul,
    .note ol {
      margin: 4px 0 0;
      padding-left: 20px;
    }

    .note li {
      margin: 2px 0;
      line-height: 1.4;
    }

    .note a {
      color: #0070ad;
      text-decoration: underline;
      overflow-wrap: anywhere;
    }

    .note a:hover {
      text-decoration: none;
    }

    .note a:focus-visible {
      outline: 2px solid #0070ad;
      outline-offset: 2px;
      border-radius: 2px;
    }

    .note strong {
      color: #111827;
      font-weight: 600;
    }

    .inline-layout .timeline-row {
      grid-template-columns: 180px 40px minmax(400px, 1fr);
    }

    .timeline-only-layout .timeline-row {
      grid-template-columns: 180px 40px minmax(300px, 1fr);
    }

    @media (max-width: 1100px) {
      padding: 20px;

      .timeline-layout.active-layout {
        grid-template-columns: minmax(320px, 45%) minmax(0, 55%);
        column-gap: 24px;
      }

      .timeline-row,
      .inline-layout .timeline-row,
      .timeline-only-layout .timeline-row {
        grid-template-columns: minmax(110px, 32%) 36px minmax(0, 1fr);
      }
    }

    @media (max-width: 768px) {
      padding: 16px;

      .timeline-layout.active-layout {
        grid-template-columns: minmax(0, 1fr);
        row-gap: 20px;
      }

      .timeline-row,
      .inline-layout .timeline-row,
      .timeline-only-layout .timeline-row {
        grid-template-columns: minmax(85px, 28%) 32px minmax(0, 1fr);
      }

      .stage-information-section {
        position: static;
        padding: 20px 0 0;
        border-top: 1px solid #d5d7da;
      }

      .content-column {
        padding-bottom: 16px;
      }

      .label {
        font-size: 15px;
      }

      .note h1,
      .note h2,
      .note h3,
      .note h4,
      .note h5,
      .note h6 {
        font-size: 16px;
      }
    }

    @media (max-width: 480px) {
      padding: 12px;

      .timeline-row,
      .inline-layout .timeline-row,
      .timeline-only-layout .timeline-row {
        grid-template-columns: 76px 28px minmax(0, 1fr);
      }

      .header-column {
        padding-right: 6px;
        font-size: 13px;
      }

      .label {
        font-size: 14px;
      }

      .status-badge {
        padding: 4px 10px;
        font-size: 11px;
      }
    }
  `);var l=i(4848);const r=(0,n.A)(function(e){const{getPConnect:t,showStatus:i=!0,stageInfoDisplay:n="all"}=e,a=t?.().getValue(".TimelineData"),r=Array.isArray(a)?a:[],s=(e="")=>{switch(e.trim().toLowerCase()){case"completed":return"completed";case"in progress":case"inprogress":return"inProgress";default:return"pending"}},d=r.find(e=>"inProgress"===s(e.pyStatusValue));return(0,l.jsx)(o,{children:(0,l.jsxs)("div",{className:`timeline-layout ${(()=>{switch(n){case"active":return"active-layout";case"none":return"timeline-only-layout";default:return"inline-layout"}})()}`,children:[(0,l.jsx)("div",{className:"timeline-section",children:r.map((e,t)=>{const a=s(e.pyStatusValue),o=0===t||e.pyHeaderText!==r[t-1]?.pyHeaderText,d=e.pyGUID||`${e.pyHeaderText}-${e.pyLabel}-${t}`,m="all"===n&&Boolean(e.pyNote);return(0,l.jsxs)("div",{className:"timeline-row",children:[(0,l.jsx)("div",{className:"header-column",children:o?e.pyHeaderText:""}),(0,l.jsxs)("div",{className:"timeline-column",children:[t!==r.length-1&&(0,l.jsx)("div",{className:"vertical-line"}),(0,l.jsx)("div",{className:`circle ${a}`,role:"img","aria-label":`${e.pyLabel}: ${e.pyStatusValue||"Pending"}`})]}),(0,l.jsxs)("div",{className:"content-column",children:[(0,l.jsx)("div",{className:"label",children:e.pyLabel}),i&&e.pyStatusValue&&(0,l.jsx)("div",{className:`status-badge ${a}`,children:e.pyStatusValue}),m&&(0,l.jsx)("div",{className:"note inline-stage-information",dangerouslySetInnerHTML:{__html:e.pyNote||""}})]})]},d)})}),"active"===n&&(0,l.jsx)("aside",{className:"stage-information-section","aria-label":"Active stage information",children:d?.pyNote?(0,l.jsx)("div",{className:"stage-information-card",children:(0,l.jsx)("div",{className:"note",dangerouslySetInnerHTML:{__html:d.pyNote}})}):(0,l.jsxs)("div",{className:"stage-information-card",children:[(0,l.jsx)("h3",{className:"stage-information-heading",children:"About this stage"}),(0,l.jsx)("p",{className:"note",children:"No information is available for the active stage."})]})})]})})})}}]);
//# sourceMappingURL=CH0001_Capgemini_HRFlow360_Timeline.d1abae68.js.map