"use strict";(self.webpackChunkmoudxcomponent=self.webpackChunkmoudxcomponent||[]).push([[4729076],{397:(e,i,r)=>{r.r(i),r.d(i,{default:()=>t});var s=r(388),o=r(267);const n=o.Ay.div(()=>o.AH`
    margin: 0;
    padding: 12px;

    .employee-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }

    .employee-card {
      background: #ffffff;
      border-radius: 16px;
      padding: 18px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
      cursor: pointer;
      overflow: hidden;
      position: relative;
    }

    .employee-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .employee-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #0f62fe;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #0f62fe;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .employee-name {
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
    }

    .employee-type {
      display: inline-block;
      margin-top: 4px;
      padding: 4px 10px;
      border-radius: 20px;
      background: #e8f5e9;
      color: #2e7d32;
      font-size: 12px;
      font-weight: 600;
    }

    .employee-details {
      font-size: 13px;
      color: #4b5563;
      line-height: 1.8;
    }

    .employee-details div {
      margin-bottom: 6px;
    }

    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 14px;
    }

    .skill-tag {
      background: #eef4ff;
      color: #0f62fe;
      border: 1px solid #d6e4ff;
      border-radius: 20px;
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 500;
    }
  `);var a=r(594),l=r(848);const t=(0,s.A)(function(e){const{getPConnect:i}=e,[r,s]=(0,a.useState)([]),o=i?.();return(0,a.useEffect)(()=>{try{if(o){const e=o.getValue?.(".ListOfEmployee")??[];s(e)}}catch(e){console.log("❌ DX LOAD ERROR:",e)}},[o]),(0,l.jsx)(n,{children:(0,l.jsx)("div",{className:"employee-grid",children:r.map((e,i)=>(0,l.jsxs)("div",{className:"employee-card",children:[(0,l.jsxs)("div",{className:"card-header",children:[(0,l.jsx)("div",{className:"avatar",children:e.EmployeeFullName?.split(" ").map(e=>e[0]).join("").substring(0,2)}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:e.EmployeeFullName}),(0,l.jsx)("span",{children:e.EmploymentType})]})]}),(0,l.jsxs)("div",{className:"card-content",children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Email:"})," ",e.PersonalEmailAddress]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Phone:"})," ",e.PrimaryContactNumber]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Previous Employer:"})," ",e.PreviousEmployer]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Joined:"})," ",e.DateOfJoining]})]}),(0,l.jsx)("div",{className:"skills-container",children:e.SkillsAndTechnologies?.split(",").map(e=>(0,l.jsx)("span",{className:"skill-tag",children:e.trim()},e.trim()))})]},i))})})})}}]);
//# sourceMappingURL=CH0001_Capgemini_HRFlow360_ListCardView.c224ddf6.js.map