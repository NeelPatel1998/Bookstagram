(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[3],{407:function(e,t,a){"use strict";a.r(t);var s=a(19),c=a(2),o=a(0),l=a.n(o),n=a(34),r=a(236),i=(a(239),a(237)),j=a(240),b=a(276);a(275),a(250),a(248),a(305);t.default=function(){JSON.parse(localStorage.getItem("userData"));var e=Object(o.useState)(),t=Object(s.a)(e,2),a=(t[0],t[1]),u=Object(o.useState)(),d=Object(s.a)(u,2),O=d[0],x=d[1],m=Object(o.useState)(),f=Object(s.a)(m,2),h=f[0],p=f[1],g=Object(o.useState)(),v=Object(s.a)(g,2),N=v[0],k=v[1],y=Object(o.useState)(),S=Object(s.a)(y,2),C=(S[0],S[1]),w=Object(o.useState)(!1),B=Object(s.a)(w,2),F=B[0],D=B[1],I=Object(o.useState)(null),R=Object(s.a)(I,2),T=R[0],U=R[1];Object(n.b)(),Object(n.c)((function(e){return e}));Object(o.useEffect)((function(){}),[]);return Object(c.jsxs)(l.a.Fragment,{children:[Object(c.jsx)(j.a,{}),Object(c.jsx)(i.a,{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"content-body",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h2",{children:"Upload your Book"})}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"container",children:[F?Object(c.jsx)("h2",{children:"Your Book was uploaded"}):null,T?Object(c.jsxs)("h2",{children:["Your Book Failed to upload because: ",T]}):null,Object(c.jsx)("input",{className:"uploadbooktextbox",type:"text",placeholder:"Category",name:"Category",onChange:function(e){a(e.target.value)},required:!0}),Object(c.jsx)("input",{className:"uploadbooktextbox",type:"text",placeholder:"BookTitle",name:"BookTitle",onChange:function(e){x(e.target.value)},required:!0}),Object(c.jsx)("input",{className:"reviewtext",type:"text",placeholder:"Description/Summary",name:"Description/Summary",onChange:function(e){p(e.target.value)},required:!0})]}),Object(c.jsx)("div",{className:"col-xxl-12",children:Object(c.jsxs)("div",{className:"form-file",children:[Object(c.jsx)("input",{type:"file",className:"form-file-input",id:"customFile",onChange:function(e){!function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){k(e.target.result)},t.readAsDataURL(e.target.files[0])}}(e)}}),Object(c.jsxs)("label",{className:"form-file-label",for:"customFile",children:[Object(c.jsx)("span",{className:"form-file-text",children:"Choose Cover Photo"}),Object(c.jsx)("span",{className:"form-file-button",children:"Browse"})]})]})}),Object(c.jsx)("div",{className:"col-xxl-12",children:Object(c.jsxs)("div",{className:"form-file",children:[Object(c.jsx)("input",{type:"file",className:"form-file-input",id:"customFile",onChange:function(e){var t;t=e,console.log("Here",t.target.files[0]),C(t.target.files[0].webkitRelativePath)}}),Object(c.jsxs)("label",{className:"form-file-label",for:"customFile",children:[Object(c.jsx)("span",{className:"form-file-text",children:"Choose PDF File"}),Object(c.jsx)("span",{className:"form-file-button",children:"Browse"})]})]})}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"reviewsubmit",onClick:function(e){!function(e){e.preventDefault();var t=localStorage.getItem("userId");console.log("ID:",t),r.a.post("/book/",{name:O,desc:h,dp:N,authname:t,booktype:"Textual"}).then((function(e){200===e.status&&(console.log("Response:",e.data),D(!0))})).catch((function(e){console.error("Error",e),U("This User Book upload Failed")}))}(e)},children:"Upload!"})]})})})})]})}}}]);
//# sourceMappingURL=3.9726f2fc.chunk.js.map