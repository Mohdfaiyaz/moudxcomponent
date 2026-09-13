"use strict";(self.webpackChunkmoudxcomponent=self.webpackChunkmoudxcomponent||[]).push([[53784793],{393:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(1594),n=o(712);const a=function(e,t,{target:o=document,eventOptions:a,dependencies:l=[]}={}){(0,r.useEffect)(()=>{const[r]=(0,n.A)([o]);if(r)return r.addEventListener(e,t,a),()=>{r.removeEventListener(e,t,a)}},[e,o,t,a,...l])}},712:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(8268);const n=e=>e.flatMap(e=>{if(!e)return[];const t=(0,r.A)(e,EventTarget)?e:e.current;return t?[t]:[]})},2365:(e,t,o)=>{o.d(t,{A:()=>r});const r=e=>[e.scrollWidth>e.clientWidth,e.scrollHeight>e.clientHeight]},2514:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var r=o(1093),n=o(1594),a=o(8997),l=o(4879),s=o(8267);const i=s.Ay.div(()=>s.AH`
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
  `);var c=o(4848);const d=(0,r.A)(function(e){const{getPConnect:t}=e,[o,r]=(0,n.useState)([]),[s,d]=(0,n.useState)([]),[p,u]=(0,n.useState)(null),f=t?.(),m=f?.getActionsApi?.();(0,n.useEffect)(()=>{try{if(f){const e=f.getValue?.(".ListOfEmployee")??[],t=Array.isArray(e)?e:Object.values(e);r(t.filter(e=>"yes"!==String(e.pyStatusValue).toLowerCase())),d(t.filter(e=>"yes"===String(e.pyStatusValue).toLowerCase()))}}catch(e){console.error("❌ DX LOAD ERROR:",e)}},[f,e]);const g=(e,t)=>{sessionStorage.setItem("kanban_employee",JSON.stringify(e)),sessionStorage.setItem("kanban_source",t)},b=(e,t)=>{if(!f||!m)return;const o=[...f.getValue?.(".ListOfEmployee")||[]],r=o.findIndex(t=>t.EmployeeFullName===e);if(r>-1){o[r]={EmployeeFullName:o[r].EmployeeFullName,pyStatusValue:t};try{m.updateFieldValue(".ListOfEmployee",o),console.log("[Kanban Array Saved Sync]: Updated entire .ListOfEmployee list back to Pega successfully.")}catch(e){console.error("Critical failure updating Pega list content via updateFieldValue:",e)}}},h=e=>{u(null);const t=JSON.parse(sessionStorage.getItem("kanban_employee")||"{}");if(sessionStorage.getItem("kanban_source")===e)return;const o="selected"===e?"Yes":"No",n={EmployeeFullName:t.EmployeeFullName,pyStatusValue:o};b(t.EmployeeFullName,o),"selected"===e?(r(e=>e.filter(e=>e.EmployeeFullName!==t.EmployeeFullName)),d(e=>[...e,n])):(d(e=>e.filter(e=>e.EmployeeFullName!==t.EmployeeFullName)),r(e=>[...e,n]))};return(0,c.jsx)(i,{children:(0,c.jsx)(a.A,{children:(0,c.jsx)(l.A,{children:(0,c.jsxs)("div",{className:"kanban-board",children:[(0,c.jsxs)("div",{className:"kanban-column scoped",onDragOver:e=>{e.preventDefault(),"scoped"!==p&&u("scoped")},onDragLeave:()=>u(null),onDrop:()=>h("existing"),children:[(0,c.jsxs)("div",{className:"column-header",children:[(0,c.jsx)("span",{children:"Scoped Opportunities"}),(0,c.jsx)("span",{className:"badge-count",children:o.length})]}),(0,c.jsx)("div",{className:"column-body "+("scoped"===p?"drag-over":""),children:0===o.length?(0,c.jsx)("div",{className:"empty-placeholder",children:"Drag opportunities here to deselect"}):o.map(e=>(0,c.jsxs)("div",{draggable:!0,onDragStart:()=>g(e,"existing"),className:"kanban-card",children:[(0,c.jsx)("h4",{children:e.EmployeeFullName}),(0,c.jsxs)("div",{className:"card-skills",style:{marginTop:"4px",fontSize:"0.8rem",color:"#64748b"},children:[(0,c.jsx)("strong",{children:"Status:"})," ",e.pyStatusValue||"No"]}),(0,c.jsx)("div",{className:"card-footer",children:(0,c.jsx)("button",{type:"button",className:"action-link",onClick:()=>{b(e.EmployeeFullName,"Yes"),r(t=>t.filter(t=>t.EmployeeFullName!==e.EmployeeFullName)),d(t=>[...t,{EmployeeFullName:e.EmployeeFullName,pyStatusValue:"Yes"}])},children:"Select →"})})]},e.EmployeeFullName))})]}),(0,c.jsxs)("div",{className:"kanban-column selected",onDragOver:e=>{e.preventDefault(),"selected"!==p&&u("selected")},onDragLeave:()=>u(null),onDrop:()=>h("selected"),children:[(0,c.jsxs)("div",{className:"column-header",children:[(0,c.jsx)("span",{children:"Selected Categories"}),(0,c.jsx)("span",{className:"badge-count",children:s.length})]}),(0,c.jsx)("div",{className:"column-body "+("selected"===p?"drag-over":""),children:0===s.length?(0,c.jsx)("div",{className:"empty-placeholder",children:"Drop employee cards here to select"}):s.map(e=>(0,c.jsxs)("div",{draggable:!0,onDragStart:()=>g(e,"selected"),className:"kanban-card",children:[(0,c.jsx)("h4",{children:e.EmployeeFullName}),(0,c.jsxs)("div",{className:"card-skills",style:{marginTop:"4px",fontSize:"0.8rem",color:"#64748b"},children:[(0,c.jsx)("strong",{children:"Status:"})," ",e.pyStatusValue||"Yes"]}),(0,c.jsx)("div",{className:"card-footer",children:(0,c.jsx)("button",{type:"button",className:"action-link",style:{color:"#dc2626"},onClick:()=>{b(e.EmployeeFullName,"No"),d(t=>t.filter(t=>t.EmployeeFullName!==e.EmployeeFullName)),r(t=>[...t,{EmployeeFullName:e.EmployeeFullName,pyStatusValue:"No"}])},children:"← Deselect"})})]},e.EmployeeFullName))})]})]})})})})})},3351:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(1594),n=o(4685);const a=()=>(0,r.useRef)((0,n.A)()).current},3974:(e,t,o)=>{o.d(t,{A:()=>r});const r=(e,t)=>Object.hasOwn(e,t)},4685:(e,t,o)=>{o.d(t,{A:()=>r});const r=()=>`_${Math.random().toString(36).slice(2,11)}`},4869:(e,t,o)=>{o.d(t,{A:()=>r});const r=(e,t)=>(e.getTestIds=t,e)},4879:(e,t,o)=>{o.d(t,{N:()=>d,A:()=>p});var r=o(4848),n=o(8267),a=o(9549),l=o(7501),s=o(8889),i=o(8997);const c=n.Ay.footer(({theme:e})=>n.AH`
    ${s.l} &, &:not(${i.e} ${i.e} > &) {
      padding: calc(1.5 * ${e.base.spacing}) calc(${e.components.card.padding} * 2);
    }
  `);c.defaultProps=a.qn;const d=n.Ay.div(({theme:e})=>n.AH`
    ${s.l} &, &:not(${i.e} ${i.e} > &) {
      position: relative;
      padding: calc(1.5 * ${e.base.spacing}) calc(${e.components.card.padding} * 2);

      & + &,
      & + ${c} {
        padding-block-start: 0;
      }
    }
  `);d.defaultProps=a.qn;const p=({children:e,container:t,...o})=>(0,r.jsx)(l.A,{...o,container:{direction:"column",...t},as:d,children:e})},5582:(e,t,o)=>{o.d(t,{A:()=>l,y:()=>n}),o(8347);var r=o(4680);r.A&&(window.cosmos.popoverMap??=new WeakMap);const n=r.A?window.cosmos.popoverMap:new WeakMap,a=e=>{const t=e.getRootNode();return t instanceof Document||t instanceof DocumentFragment?[...e.querySelectorAll("[data-popover-target]")].flatMap(e=>n.has(e)?[...n.get(e)].map(e=>t.querySelector(`[data-popover-id="${e.replace(/"/g,'\\"')}"]`)).flatMap(e=>e?[e,...a(e)]:[]):[]):[]},l=a},6416:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(1594),n=o(5582),a=o(3351);const l=(e,t=!0)=>{const o=(0,a.A)();return(0,r.useEffect)(()=>{if(e&&t)return n.y.has(e)||n.y.set(e,new Set),e.toggleAttribute("data-popover-target",!0),n.y.get(e).add(o),()=>{n.y.has(e)&&(n.y.get(e).delete(o),0===n.y.get(e).size&&(n.y.delete(e),e.removeAttribute("data-popover-target")))}},[t,e,o]),o}},6629:(e,t,o)=>{o.d(t,{A:()=>r});const r=()=>{const e=document.createElement("div"),t="50px";let o=0;return e.style.position="absolute",e.style.top=`-${t}`,e.style.width=t,e.style.height=t,e.style.overflow="scroll",document.body.appendChild(e),o=e.offsetWidth-e.clientWidth,document.body.removeChild(e),o}},7501:(e,t,o)=>{o.d(t,{A:()=>u,D:()=>p});var r=o(4848),n=o(1594),a=o(8267),l=o(9549);const s=e=>["between","around","evenly"].includes(e)?`space-${e}`:["start","end"].includes(e)?`flex-${e}`:e,i=(e,t)=>{if(!e)return"";if(!0===e)return a.AH`
      display: flex;
    `;const o=(e=>{if(!Array.isArray(e))return[e,e,e,e];switch(e.length){case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return e;default:return[void 0,void 0,void 0,void 0]}})(e.pad);if(e&&"object"==typeof e){const r=!e.direction||e.direction.includes("row"),n=e.direction&&e.direction.includes("reverse");return a.AH`
      display: ${e.inline?"inline-flex":"flex"};

      ${void 0!==o[0]&&a.AH`
        padding-block-start: calc(${o[0]} * ${t});
      `}
      ${void 0!==o[1]&&a.AH`
        padding-inline-end: calc(${o[1]} * ${t});
      `}

        ${void 0!==o[2]&&a.AH`
        padding-block-end: calc(${o[2]} * ${t});
      `}

        ${void 0!==o[3]&&a.AH`
        padding-inline-start: calc(${o[3]} * ${t});
      `}

      ${e.direction&&a.AH`
        flex-direction: ${e.direction};
      `}

      ${e.justify&&a.AH`
        justify-content: ${s(e.justify)};
      `}

      ${e.wrap&&a.AH`
        flex-wrap: ${e.wrap};
      `}

      ${e.alignItems&&a.AH`
        align-items: ${s(e.alignItems)};
      `}

      ${e.alignContent&&a.AH`
        align-content: ${s(e.alignContent)};
      `}

      ${e.itemGap&&a.AH`
          > * {
            margin-${r?"inline-start":"block-start"}: calc(${e.itemGap} * ${e=>e.theme.base.spacing});
            ${n?":last-child":":first-child"} {
              margin-${r?"inline-start":"block-start"}: 0;
            }
          }
        `}

      ${void 0!==e.gap&&a.AH`
        gap: calc(${e.gap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.colGap&&a.AH`
        column-gap: calc(${e.colGap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.rowGap&&a.AH`
        row-gap: calc(${e.rowGap} * ${e=>e.theme.base.spacing});
      `}
    `}},c=e=>a.AH`
    ${e&&a.AH`
      max-width: 100%;
      min-width: 0;

      ${void 0!==e.grow&&a.AH`
        flex-grow: ${e.grow};
      `}

      ${void 0!==e.shrink&&a.AH`
        flex-shrink: ${e.shrink};
      `}

      ${e.alignSelf&&a.AH`
        align-self: ${s(e.alignSelf)};
      `}

      ${e.basis&&a.AH`
        flex-basis: ${e.basis};
      `}
    `}
  `,d=["xs","sm","md","lg","xl"],p=a.Ay.div(({container:e,item:t,theme:{base:{breakpoints:o,spacing:r}},xs:n,sm:l,md:s,lg:p,xl:u})=>{const f={xs:n,sm:l,md:s,lg:p,xl:u};return a.AH`
      ${i(e,r)}
      ${c(t)}

    ${d.map(e=>f[e]&&a.AH`
            @media screen and (min-width: ${o[e]}) {
              ${i(f[e]?.container,r)}
              ${c(f[e]?.item)}
            }
          `)}
    `});p.defaultProps=l.qn;const u=(0,n.forwardRef)(function(e,t){return(0,r.jsx)(p,{...e,ref:t})})},7666:(e,t,o)=>{o.d(t,{A:()=>s,U:()=>l});var r=o(3974),n=o(9749),a=o(4685);const l='a[href], button, input, textarea, select, details, video[controls], audio[controls], [tabindex]:not([tabindex="-1"])',s=(e,{includeActiveEl:t=!1}={})=>{const o=(0,a.A)();let s=o,i=null;const c=(0,r.A)(e,"current")?e.current:e;if(!c)return[];let d=l;t&&(i=(0,n.A)(),i&&(s=i.id||o,i.id=s,d=`${d}, [id="${s}"]`));const p=[...c.querySelectorAll(d)].filter(e=>e instanceof HTMLElement&&(e.id===s||!e.hasAttribute("disabled")&&"-1"!==e.getAttribute("tabindex")&&!e.closest("[inert]")));return i?.id===o&&i.removeAttribute("id"),p}},8044:(e,t,o)=>{o.d(t,{A:()=>r});const r=(e,t)=>o=>{const r=`${o??""}:${e}:`,n=Object.fromEntries(t.map(e=>{return[(t=e,t.replace(/^-+/g,"").replace(/-+(.)?/g,(e,t)=>t.toUpperCase())),`${r}${e}`];var t}));return n.root=r,n}},8268:(e,t,o)=>{o.d(t,{A:()=>n});const r=Object.prototype.toString(),n=(e,...t)=>{if(0===t.length)return!1;if(!e||"object"!=typeof e&&"function"!=typeof e)return!1;if(t.some(t=>e instanceof t))return!0;const o=new Set(t.flatMap(e=>{const t=Object.prototype.toString.call(e.prototype);return t===r&&e.prototype!==Object.prototype?[]:t}));if(0===o.size)return!1;let n=e;for(;n;){if(o.has(Object.prototype.toString.call(n)))return!0;n=Object.getPrototypeOf(n)}return!1}},8579:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(1594),n=o(9463);const a=(e,t)=>{const{testIds:o}=(0,n.A)();return(0,r.useMemo)(()=>o?"object"==typeof e&&e?e:t(e):{},[o,e,t])}},8889:(e,t,o)=>{o.d(t,{l:()=>s,s:()=>l});var r=o(8267),n=o(9549),a=o(7321);const l=r.Ay.div`
  background-color: inherit;

  ::before {
    content: '';
    display: block;
    position: absolute;
    inset: -0.25rem;
    background-color: inherit;
    transform: rotate(45deg);
  }
`;l.defaultProps=n.qn;const s=r.Ay.div(({theme:{base:{"border-radius":e,"z-index":{popover:t,backdrop:o},shadow:{high:n},palette:s},components:{card:{background:i,"foreground-color":c},"form-control":{"border-radius":d}}},portal:p,offset:u})=>{const{backgroundColor:f}=(0,a.LP)(i,c);return r.AH`
      /*
        Margin should never be used with Popper.
        https://popper.js.org/docs/v2/migration-guide/#4-remove-all-css-margins
      */
      margin: 0 !important;
      z-index: ${p?o-1:t};
      background: ${f};
      border-radius: calc(${d} * ${e});
      box-shadow: ${n};
      color: ${s["foreground-color"]};

      @media (forced-colors: active) {
        border: 0.0625rem solid transparent;
      }

      &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      &[data-popper-placement^='top'] {
        > ${l} {
          top: calc(100%);

          ::before {
            border-bottom-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${u}px;
          bottom: -${u}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='bottom'] {
        > ${l} {
          bottom: calc(100%);

          ::before {
            border-top-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${u}px;
          top: -${u}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='right'] {
        > ${l} {
          right: calc(100%);

          ::before {
            border-bottom-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${u}px;
          left: -${u}px;
          top: 0;
          bottom: 0;
        }
      }

      &[data-popper-placement^='left'] {
        > ${l} {
          left: calc(100%);

          ::before {
            border-top-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${u}px;
          right: -${u}px;
          top: 0;
          bottom: 0;
        }
      }
    `});s.defaultProps=n.qn},8997:(e,t,o)=>{o.d(t,{e:()=>N,A:()=>E});var r=o(4848),n=o(1594),a=o(8267),l=o(9549),s=o(7501),i=o(8889),c=o(5206),d=o(9463),p=o(7666),u=o(9749),f=o(393);var m=o(2365),g=o(6629);var b=o(8579),h=o(2477),x=o(4853),y=o(6416),v=o(7497),$=o(4869);const A=(0,o(8044).A)("fullscreen",[]),k=a.Ay.div(({theme:e,fullscreen:t})=>a.AH`
      ${t&&a.AH`
        --content-height-in-view: 100vh;
        position: fixed;
        z-index: ${e.base["z-index"].backdrop};
        inset: 0;
      `}
    `);k.defaultProps=l.qn;const w=(0,n.createContext)(void 0),j=({parentJSX:e,parentElRef:t})=>{const{portalTarget:o}=(0,d.A)();((e,t=!0,o=[],r=!0)=>{const a=(0,n.useCallback)(t=>{if(e?.current&&"Tab"===t.key){const o=(0,p.A)(e),{0:n,[o.length-1]:a}=o,l=(0,u.A)();if((l===e.current||!e.current.contains(l)||e.current.contains(l)&&!o.includes(l))&&r)if(t.preventDefault(),l){const o=(0,p.A)(e,{includeActiveEl:!0}),r=o.findIndex(e=>e===l);-1!==r?t.shiftKey?o[(r-1+o.length)%o.length].focus():o[(r+1)%o.length].focus():t.shiftKey?a?.focus():n?.focus()}else t.shiftKey?a?.focus():n?.focus();else t.shiftKey&&l===n?(t.preventDefault(),a?.focus()):t.shiftKey||l!==a||(t.preventDefault(),n?.focus())}},o);(0,f.A)("keydown",a,{target:t?void 0:e})})(t);const{disableScroll:a,enableScroll:l}=((e=":root")=>{const t=(0,n.useRef)(0),o=(0,n.useRef)(null),{styleSheetTarget:r}=(0,d.A)(),a=(0,n.useCallback)(()=>{o.current?.remove(),o.current=null},[]),l=(0,n.useCallback)(()=>{if(o.current)return;const n=document.querySelector(e);if(!n)return;const[a,l]=(0,m.A)(n);(a||l)&&(o.current=document.createElement("style"),o.current.nonce=window.__webpack_nonce__,o.current.textContent=`\n      ${e} {\n        ${l?`padding-inline-end: ${t.current}px !important`:""};\n        ${a?`padding-block-end: ${t.current}px !important`:""};\n        overflow: hidden !important;\n      }\n    `,(r??document.head).append(o.current))},[e]);return(0,n.useLayoutEffect)(()=>(t.current=(0,g.A)(),a),[a]),{enableScroll:a,disableScroll:l}})();return(0,n.useEffect)(()=>(a(),l),[]),o?(0,c.createPortal)((0,r.jsx)(v.A,{portalTarget:t.current??void 0,children:e}),o):null},S=((0,$.A)((0,n.forwardRef)(function({children:e,testId:t,...o},a){const l=(0,b.A)(t,A),[s,i]=(0,h.A)(),c=(0,x.A)(i,a),[d,p]=(0,h.A)(),[u,f]=(0,n.useState)(void 0),m=(0,n.useMemo)(()=>[u,()=>{f(e=>!e)}],[u]),g=(0,y.A)(d,!!u),v=(0,r.jsx)(k,{"data-testid":l.root,"data-fullscreen-enabled":!!u||void 0,...o,ref:c,fullscreen:!!u,"data-popover-id":g,children:e});return(0,r.jsx)(w.Provider,{value:m,children:u&&s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:p,style:{display:"none"}}),(0,r.jsx)(j,{parentJSX:v,parentElRef:c})]}):v})}),A),a.Ay.div`
  img,
  video,
  audio {
    object-fit: cover;
    width: 100%;
  }
`),N=a.Ay.article(e=>{const t=(0,n.useContext)(w),{"border-radius":o,"border-color":r,background:l}=e.theme.components.card,s=e.interactive?a.AH`
        &:hover {
          border: 0;
          box-shadow: 0 0 0 0.0625rem ${r};
        }
        &:focus {
          border: 0;
          box-shadow: 0 0 0 0.125rem ${r};
        }
      `:void 0;return a.AH`
    ${i.l} &, &:not(& &) {
      background: ${l};

      &:focus {
        outline: none;
      }

      ${s}

      ${S} {
        &:first-child img {
          border-radius: var(--container-border-radius, ${o})
            var(--container-border-radius, ${o}) 0 0;
        }
      }

      ${t?.[0]?a.AH`
            block-size: 100%;
            border-radius: 0;
          `:a.AH`
            border-radius: var(--border-radius, ${o});
            --container-border-radius: var(--border-radius, ${o});
            * {
              --border-radius: calc(var(--container-border-radius) * 0.5);
            }
          `}
    }
  `});N.defaultProps=l.qn;const E=(0,n.forwardRef)(function({children:e,as:t,onClick:o,interactive:n=!1,...a},l){const i={...o&&{onClick:o,tabIndex:0,role:"button"},...n&&{tabIndex:0},interactive:n};return(0,r.jsx)(s.A,{role:"none",container:{direction:"column"},as:N,forwardedAs:t,ref:l,...i,...a,children:e})})},9463:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(1594),n=(o(8347),o(4680)),a=o(7497);const l=()=>{const e=n.A?window.cosmos.configurationContext??a.Q:a.Q;return(0,r.useContext)(e)}},9749:(e,t,o)=>{o.d(t,{A:()=>n});const r=(e=document)=>{let t=e.activeElement;return t?("iframe"===t.tagName.toLowerCase()&&t.contentDocument&&(t=r(t.contentDocument)??t),t.shadowRoot&&(t=r(t.shadowRoot)??t),t):null},n=r}}]);
//# sourceMappingURL=CH0001_Capgemini_HRFlow360_EmployeeKanbanMode.2a710a72.js.map