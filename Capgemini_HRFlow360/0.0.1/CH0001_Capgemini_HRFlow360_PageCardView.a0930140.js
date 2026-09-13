"use strict";(self.webpackChunkmoudxcomponent=self.webpackChunkmoudxcomponent||[]).push([[90704745],{6078:(e,s,i)=>{i.r(s),i.d(s,{default:()=>o});var a=i(1093),l=i(8267);const n=l.Ay.div(()=>l.AH`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;

    .employee-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: all 0.2s ease-in-out;
    }

    .employee-card:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .employee-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #e5e7eb;
    }

    .employee-avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .employee-name {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 4px;
    }

    .employee-meta {
      color: #6b7280;
      font-size: 14px;
    }

    .employee-section {
      margin-bottom: 24px;
    }

    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #f3f4f6;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 12px 24px;
    }

    .info-item {
      display: flex;
      flex-direction: column;
    }

    .info-label {
      font-size: 12px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .info-value {
      font-size: 14px;
      color: #111827;
      word-break: break-word;
    }

    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: #ffffff;
      padding: 6px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);
    }

    @media (max-width: 768px) {
      .employee-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  `);var r=i(1594),d=i(4848);const o=(0,a.A)(function(e){const{getPConnect:s,displayAs:i}=e,a=s?.(),[l,o]=(0,r.useState)();return(0,r.useEffect)(()=>{if(a){const e=a.getValue?.(".EmployeeDetails")??[];o(e)}},[a]),(0,d.jsx)(n,{children:l&&("simpleView"===i?(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:["Name: ",l.EmployeeFullName]}),(0,d.jsxs)("div",{children:["Gender: ",l.Gender]}),(0,d.jsxs)("div",{children:["DOB: ",l.DateOfBirth]}),(0,d.jsxs)("div",{children:["DOJ: ",l.DateOfJoining]}),(0,d.jsxs)("div",{children:["Employment Type: ",l.EmploymentType]}),(0,d.jsxs)("div",{children:["Personal Email: ",l.PersonalEmailAddress]}),(0,d.jsxs)("div",{children:["Official Email: ",l.OfficialEmailAddress]}),(0,d.jsxs)("div",{children:["Primary Contact: ",l.PrimaryContactNumber]}),(0,d.jsxs)("div",{children:["Emergency Contact: ",l.EmergencyContactNumber]}),(0,d.jsxs)("div",{children:["Emergency Contact Name: ",l.EmergencyContactName]}),(0,d.jsxs)("div",{children:["Current Address: ",l.CurrentAddress]}),(0,d.jsxs)("div",{children:["Permanent Address: ",l.PermanentAddress]}),(0,d.jsxs)("div",{children:["Qualification: ",l.EducationalQualification]}),(0,d.jsxs)("div",{children:["Previous Employer: ",l.PreviousEmployer]}),(0,d.jsxs)("div",{children:["Skills: ",l.SkillsAndTechnologies]})]}):(0,d.jsxs)("div",{className:"employee-card",children:[(0,d.jsxs)("div",{className:"employee-header",children:[(0,d.jsx)("div",{className:"employee-avatar",children:l.EmployeeFullName?.split(" ").map(e=>e[0]).join("").substring(0,2)}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"employee-name",children:l.EmployeeFullName}),(0,d.jsxs)("div",{className:"employee-meta",children:[l.EmploymentType," • Joined ",l.DateOfJoining]})]})]}),(0,d.jsxs)("div",{className:"employee-section",children:[(0,d.jsx)("div",{className:"section-title",children:"Personal Information"}),(0,d.jsxs)("div",{className:"info-grid",children:[(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Gender"}),(0,d.jsx)("span",{className:"info-value",children:l.Gender})]}),(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Date of Birth"}),(0,d.jsx)("span",{className:"info-value",children:l.DateOfBirth})]})]})]}),(0,d.jsxs)("div",{className:"employee-section",children:[(0,d.jsx)("div",{className:"section-title",children:"Contact Information"}),(0,d.jsxs)("div",{className:"info-grid",children:[(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Personal Email"}),(0,d.jsx)("span",{className:"info-value",children:l.PersonalEmailAddress})]}),(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Official Email"}),(0,d.jsx)("span",{className:"info-value",children:l.OfficialEmailAddress})]}),(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Primary Contact"}),(0,d.jsx)("span",{className:"info-value",children:l.PrimaryContactNumber})]}),(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Emergency Contact"}),(0,d.jsx)("span",{className:"info-value",children:l.EmergencyContactNumber})]})]})]}),(0,d.jsxs)("div",{className:"employee-section",children:[(0,d.jsx)("div",{className:"section-title",children:"Addresses"}),(0,d.jsxs)("div",{className:"info-grid",children:[(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Current Address"}),(0,d.jsx)("span",{className:"info-value",children:l.CurrentAddress})]}),(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"info-label",children:"Permanent Address"}),(0,d.jsx)("span",{className:"info-value",children:l.PermanentAddress})]})]})]}),(0,d.jsxs)("div",{className:"employee-section",children:[(0,d.jsx)("div",{className:"section-title",children:"Skills & Technologies"}),(0,d.jsx)("div",{className:"skills-container",children:l.SkillsAndTechnologies?.split(",").map((e,s)=>(0,d.jsx)("span",{className:"skill-tag",children:e.trim()},s))})]})]}))})})}}]);
//# sourceMappingURL=CH0001_Capgemini_HRFlow360_PageCardView.a0930140.js.map