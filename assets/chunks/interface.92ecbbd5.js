import{d as o,g as n,H as t}from"./framework.51914527.js";const g={spin:{type:Boolean},rotate:{type:String},tabIndex:{type:Number}},a=o({name:"ZgIconWrapper",props:g,setup(e,{slots:s,attrs:i}){const r=n(()=>{let l=e.tabIndex;return l==null&&i.onClick&&(l=-1),l}),d=n(()=>e.rotate?{transform:`rotate(${e.rotate}deg)`}:void 0),c=n(()=>({"zg-icon":!0,"zg-icon--spin":!!e.spin}));return()=>t("span",{tabindex:r.value,role:"img",class:c.value,style:d.value},[s.default&&s.default()])}});const w=e=>t(a,e,{default:()=>[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 1024 1024"},[t("path",{d:"M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm180.821 265.472a21.333 21.333 0 0 0-26.709 5.845l-220.16 283.733-88.064-113.493a21.333 21.333 0 0 0-29.91-3.755l-16.853 13.056a21.333 21.333 0 0 0-3.84 29.952l121.771 156.928a21.333 21.333 0 0 0 33.707 0l253.909-327.168a21.333 21.333 0 0 0-3.755-29.952l-16.853-13.056z"},null)])]}),h=e=>t(a,e,{default:()=>[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 1024 1024"},[t("path",{d:"M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm140.288 307.925a17.067 17.067 0 0 0-24.15 0L512 466.731 395.861 350.592a17.067 17.067 0 0 0-24.149 0l-21.12 21.12a17.067 17.067 0 0 0 0 24.15L466.731 512 350.592 628.139a17.067 17.067 0 0 0 0 24.149l21.12 21.12a17.067 17.067 0 0 0 24.15 0L512 557.227l116.139 116.181a17.067 17.067 0 0 0 24.149 0l21.12-21.12a17.067 17.067 0 0 0 0-24.15L557.227 512l116.181-116.139a17.067 17.067 0 0 0 0-24.149z"},null)])]}),x=e=>t(a,e,{default:()=>[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 1024 1024"},[t("path",{d:"M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm0 64a405.333 405.333 0 1 0 0 810.666 405.333 405.333 0 0 0 0-810.666zm140.288 243.925 21.12 21.12a17.067 17.067 0 0 1 0 24.15L557.269 512l116.139 116.139a17.067 17.067 0 0 1 0 24.149l-21.12 21.12a17.067 17.067 0 0 1-24.15 0L512 557.269 395.861 673.408a17.067 17.067 0 0 1-24.149 0l-21.12-21.12a17.067 17.067 0 0 1 0-24.15L466.731 512 350.592 395.861a17.067 17.067 0 0 1 0-24.149l21.12-21.12a17.067 17.067 0 0 1 24.15 0L512 466.731l116.139-116.139a17.067 17.067 0 0 1 24.149 0z"},null)])]}),p=e=>t(a,e,{default:()=>[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 1024 1024"},[t("path",{d:"M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm0 626.474a42.667 42.667 0 1 0 0 85.334 42.667 42.667 0 0 0 0-85.334zm10.667-417.365h-21.334A21.333 21.333 0 0 0 480 273.109v311.979a21.333 21.333 0 0 0 21.333 21.333h21.334A21.333 21.333 0 0 0 544 585.088V273.067a21.333 21.333 0 0 0-21.333-21.334z"},null)])]}),u=e=>t(a,e,{default:()=>[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 1024 1024"},[t("path",{d:"M512 981.333C252.8 981.333 42.667 771.2 42.667 512S252.8 42.667 512 42.667 981.333 252.8 981.333 512 771.2 981.333 512 981.333zm0-626.474a42.667 42.667 0 1 0 0-85.334 42.667 42.667 0 0 0 0 85.334zm-10.667 417.365h21.334a21.333 21.333 0 0 0 20.992-17.493l.341-3.84V438.912a21.333 21.333 0 0 0-17.493-20.992l-3.84-.341h-21.334a21.333 21.333 0 0 0-20.992 17.493l-.341 3.84v312.021a21.333 21.333 0 0 0 17.493 20.992l3.84.342z"},null)])]}),v=o({props:{vNode:{type:[String,Object],required:!0}},setup(e){return()=>e.vNode}}),C=v,z={info:u,success:w,error:h,warning:p};export{x as C,p as E,u as I,C as R,a as Z,h as a,w as b,z as i};