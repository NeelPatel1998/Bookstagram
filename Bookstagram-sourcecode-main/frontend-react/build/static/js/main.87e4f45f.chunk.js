(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[5],{110:function(e,t,n){},111:function(e,t,n){},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return l}));var c=n(6),r=function(){return{type:c.c}},a=function(e){return{type:c.d,payload:e}},o=function(e){return{type:c.f,payload:e}},s=function(){return{type:c.e}},i=function(){return{type:c.a}},u=function(){return{type:c.h}},l=function(){return{type:c.g}}},229:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),o=n(17),s=n.n(o),i=n(34),u=n(18),l=n(99),d=(n(110),n(7)),b=n(25),j=(n(111),n(230),n(43)),p=function(){var e=localStorage.getItem("userToken"),t=localStorage.getItem("userType"),r=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",component:a.a.lazy((function(){return Promise.resolve().then(n.bind(null,230))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/signup",component:a.a.lazy((function(){return n.e(17).then(n.bind(null,386))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/reset-password",component:a.a.lazy((function(){return n.e(25).then(n.bind(null,387))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/verify-otp",component:a.a.lazy((function(){return n.e(26).then(n.bind(null,388))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/verify-email",component:a.a.lazy((function(){return n.e(4).then(n.bind(null,389))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/verified-message/:secret",component:a.a.lazy((function(){return n.e(18).then(n.bind(null,390))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/resend-otp",component:a.a.lazy((function(){return n.e(24).then(n.bind(null,391))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/attack",component:a.a.lazy((function(){return Promise.all([n.e(8),n.e(21)]).then(n.bind(null,392))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/privacy-policy",component:a.a.lazy((function(){return n.e(23).then(n.bind(null,405))}))})]});return e&&(r="reader"==t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d.b,{path:"/",component:a.a.lazy((function(){return n.e(22).then(n.bind(null,427))}))})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",component:a.a.lazy((function(){return Promise.all([n.e(1),n.e(2)]).then(n.bind(null,406))}))}),Object(c.jsx)(d.b,{exact:!0,path:"/uploadbook",component:a.a.lazy((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,407))}))})]})),Object(c.jsx)(a.a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsx)(b.a,{children:Object(c.jsx)(d.d,{children:r})})})},m=function(e){e&&e instanceof Function&&n.e(28).then(n.bind(null,408)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},O=n(11),h=n(6),x={action:!1},f=(localStorage.getItem("userToken"),JSON.parse(localStorage.getItem("userData")),Object(u.c)({dummyReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.c:return Object(O.a)(Object(O.a)({},e),{},{action:!0});default:return e}}})),g=function(e,t){return"RESET_APP"===t.type&&(e=void 0),f(e,t)},v=n(13),y=n.n(v),S=n(9),w=n(15),k=y.a.mark(C),N=y.a.mark(I);function C(e){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.b)([localStorage,"setItem"],"dummyAction","Succeeded");case 2:return e.next=4,Object(S.c)(Object(w.a)());case 4:case"end":return e.stop()}}),k)}function I(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S.a,e.next=3,Object(S.d)(h.b,C);case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),N)}var E=n(62),P=n.n(E),_=n(45),T=y.a.mark(z),D=y.a.mark(R);function z(e){var t,n,c,r,a,o,s;return y.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,i.prev=1,n=t.username,c=t.password,i.next=5,Object(S.c)(Object(w.g)());case 5:return console.log("Response:",t),(r=new FormData).append("username",n),r.append("password",c),a=P.a.create({baseURL:"http://40.80.95.65/store",headers:{}}),o={headers:{"content-type":"multipart/form-data"}},i.next=13,a.post("/book/login/",r,o);case 13:if(200!==(s=i.sent).status){i.next=35;break}return console.log("RESPONSE:",s.data),i.next=18,localStorage.setItem("userToken",s.data.auth_token.token);case 18:return i.next=20,localStorage.setItem("userId",JSON.stringify(s.data.app_userid));case 20:return i.next=22,localStorage.setItem("userType",s.data.usertype);case 22:return i.next=24,localStorage.setItem("dp",s.data.dp);case 24:return i.next=26,localStorage.setItem("email",s.data.email);case 26:return i.next=28,localStorage.setItem("name",s.data.username);case 28:return i.next=30,Object(S.c)(Object(w.e)({userToken:s.data.accessToken,userData:s.data.role}));case 30:return i.next=32,Object(S.c)(Object(w.b)());case 32:window.location.reload(!1),i.next=40;break;case 35:return _.a.error("".concat(s.msg),{position:"top-right",autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),i.next=38,Object(S.c)(Object(w.d)());case 38:return i.next=40,Object(S.c)(Object(w.b)());case 40:i.next=50;break;case 42:return i.prev=42,i.t0=i.catch(1),console.log("error",i.t0),_.a.error("Something went wrong",{position:"top-right",autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),i.next=48,Object(S.c)(Object(w.b)());case 48:return i.next=50,Object(S.c)(Object(w.d)());case 50:case"end":return i.stop()}}),T,null,[[1,42]])}function R(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S.a,e.next=3,Object(S.d)(h.d,z);case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),D)}var F=y.a.mark(A);function A(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([I(),R()]);case 2:case"end":return e.stop()}}),F)}var L=null;L=u.d;var U=Object(l.a)(),B=Object(u.e)(g,L(Object(u.a)(U)));U.run(A),s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(i.a,{store:B,children:Object(c.jsx)(p,{})})}),document.getElementById("root")),m()},230:function(e,t,n){"use strict";n.r(t);var c=n(19),r=n(2),a=n(0),o=n(25),s=n(34),i=(n(100),n(63)),u=n(15);n(43),t.default=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],l=t[1],d=Object(a.useState)({}),b=Object(c.a)(d,2),j=b[0],p=b[1],m=Object(a.useState)(),O=Object(c.a)(m,2),h=O[0],x=O[1],f=Object(s.b)(),g=function(){!function(){var e={},t=!0;return n||(t=!1,e="Username Cannot be empty"),j||(t=!1,e="Password Cannot be empty"),j&&j.length<8&&(t=!1,e="Password Cannot be less than 8 digits"),x(e),t}()?console.log("Error Value",h):f(Object(u.c)({username:n,password:j}))};return Object(r.jsx)("div",{id:"main-wrapper",children:Object(r.jsx)("div",{className:"authincation section-padding",children:Object(r.jsx)("div",{className:"container h-100",children:Object(r.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:Object(r.jsxs)("div",{className:"col-xl-5 col-md-6",children:[Object(r.jsxs)("div",{className:"mini-logo text-center my-4",children:[Object(r.jsx)("a",{href:"./intro.html"}),Object(r.jsx)("img",{src:i.a,alt:""}),Object(r.jsx)("h4",{className:"card-title mt-3",children:"Sign in to Bookstagram"})]}),Object(r.jsx)("div",{className:"auth-form card",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("input",{type:"email",className:"form-control",placeholder:"username",name:"email",onChange:function(e){return l(e.target.value)}})}),Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",onChange:function(e){return p(e.target.value)},required:!0})}),Object(r.jsx)("div",{className:"col-6",children:Object(r.jsxs)("div",{className:"form-check form-switch",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onChange:function(e){return console.log("Hi",e.target.value)}}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Remember me"}),h?Object(r.jsx)("p",{style:{color:"red"},children:h}):null]})}),Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)(o.b,{to:"/reset-password",children:"Forgot Password?"})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){return g()},children:"Sign in"})}),Object(r.jsxs)("p",{className:"mt-3 mb-0",children:["Don't have an account?"," ",Object(r.jsx)(o.b,{className:"text-primary",to:"/signup",children:"Sign up"})]})]})}),Object(r.jsx)("div",{className:"privacy-link",children:Object(r.jsx)(o.b,{to:"/privacy-policy",children:"Privacy Policy"})})]})})})})})}},43:function(e,t,n){"use strict";var c=n(2),r=n(0),a=n(59),o=n.n(a);t.a=function(){return Object(r.useEffect)((function(){o()(window).on("load",(function(){o()("#preloader").fadeOut(500)}))}),[]),Object(c.jsxs)("div",{id:"preloader",children:[Object(c.jsx)("i",{children:"."}),Object(c.jsx)("i",{children:"."}),Object(c.jsx)("i",{children:"."})]})}},6:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return l}));var c="DUMMY_ACTION_SUCCESS",r="DUMMY_ACTION_SAGA",a="LOGIN_REQUEST",o="LOGIN_REQUEST_SUCCESS",s="LOGIN_REQUEST_FAIL",i="ON_SHOW_LOADER",u="ON_HIDE_LOADER",l="DESTROY_SESSION"},63:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.e907d6ae.png"}},[[229,6,7]]]);
//# sourceMappingURL=main.87e4f45f.chunk.js.map