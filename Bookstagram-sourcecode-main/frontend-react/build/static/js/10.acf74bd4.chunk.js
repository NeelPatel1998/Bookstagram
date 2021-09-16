/*! For license information please see 10.acf74bd4.chunk.js.LICENSE.txt */
(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[10],{236:function(e,t,c){"use strict";var s=c(62),a=c.n(s),i=localStorage.getItem("userToken"),n=a.a.create({baseURL:"http://40.80.95.65/store",headers:{Authorization:"token "+i}});t.a=n},237:function(e,t,c){"use strict";var s=c(2),a=(c(0),c(25)),i=c(7),n=c(63);t.a=Object(i.i)((function(){var e=localStorage.getItem("userType");return Object(s.jsxs)("div",{class:"sidebar",children:[Object(s.jsx)("div",{class:"brand-logo",children:Object(s.jsx)("a",{href:"index.html",children:Object(s.jsx)("img",{src:n.a,alt:"logo",height:"75px",width:"75px"})})}),Object(s.jsxs)("div",{class:"menu",children:["reader"==e?Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/home","data-toggle":"tooltip","data-placement":"right",title:"Home",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-ui-home"})})})}),Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/my-books","data-toggle":"tooltip","data-placement":"right",title:"My book Shelf",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-library"})})})}),Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/book-list","data-toggle":"tooltip","data-placement":"right",title:"List Of Books",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-book"})})})}),Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/my-friends","data-toggle":"tooltip","data-placement":"right",title:"My Friends",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-ui-user-group"})})})}),Object(s.jsx)("li",{class:"logout",children:Object(s.jsx)("a",{href:"signin.html","data-toggle":"tooltip","data-placement":"right",title:"Signout",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-power"})})})})]}):Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/","data-toggle":"tooltip","data-placement":"right",title:"Home",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-ui-home"})})})}),Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"/uploadbook","data-toggle":"tooltip","data-placement":"right",title:"upload a book",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-library"})})})}),Object(s.jsx)("li",{class:"logout",children:Object(s.jsx)("a",{href:"signin.html","data-toggle":"tooltip","data-placement":"right",title:"Signout",children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{class:"icofont-power"})})})})]}),Object(s.jsxs)("p",{class:"copyright",children:["\xa9 ",Object(s.jsx)("a",{href:"#",children:"Bookstagram INC"})]})]})]})}))},239:function(e,t,c){"use strict";c.p},240:function(e,t,c){"use strict";var s=c(19),a=c(2),i=c(0),n=c.n(i),o=c(34),l=(c(239),c(237)),r=c(15),j=c(25),b=c(236),d=c(45);Object.size=function(e){var t,c=0;for(t in e)e.hasOwnProperty(t)&&c++;return c};t.a=function(){JSON.parse(localStorage.getItem("userData"));var e=Object(i.useState)([]),t=Object(s.a)(e,2),c=t[0],h=t[1],m=Object(i.useState)(!1),u=Object(s.a)(m,2),O=u[0],g=u[1],p=Object(i.useState)(),x=Object(s.a)(p,2),A=(x[0],x[1]),N=Object(i.useState)(),f=Object(s.a)(N,2),v=f[0],I=f[1],E=Object(i.useState)(!1),M=Object(s.a)(E,2),S=M[0],Z=M[1],y=Object(o.b)(),U=(Object(o.c)((function(e){return e})),localStorage.getItem("dp")),w=localStorage.getItem("email");Object(i.useEffect)((function(){void 0!=localStorage.getItem("notification")?I(localStorage.getItem("notification")):I(0),G()}),[v]);var G=function(){var e=localStorage.getItem("userId");b.a.get("/userfeed/?pk="+e,{notify_type:"Ticker Notification"}).then((function(e){200===e.status&&(console.log("Response",Object.size(e.data)),h(e.data),d.a.success("User Books Fetch Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})),console.log("Notify",v),localStorage.setItem("notification",Object.size(e.data)-v)})).catch((function(e){A(e),console.error("Error",e),A("This Books Fetch Failed")}))};return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-xxl-12",children:Object(a.jsxs)("div",{className:"header-content",children:[Object(a.jsxs)("div",{className:"header-right",children:[Object(a.jsx)("div",{className:"brand-logo",children:Object(a.jsxs)("a",{href:"index.html",children:[Object(a.jsx)("img",{src:"./images/logo.png",alt:""}),Object(a.jsx)("span",{children:"Bookstagram"})]})}),Object(a.jsx)("div",{className:"search",children:Object(a.jsx)("form",{action:"#",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Here"}),Object(a.jsx)("span",{className:"input-group-text",children:Object(a.jsx)("i",{className:"icofont-search"})})]})})})]}),Object(a.jsxs)("div",{className:"header-right",children:[Object(a.jsxs)("div",{className:"dark-light-toggle",onclick:function(){return console.log("Toggle Clicked")},children:[Object(a.jsx)("span",{className:"dark",children:Object(a.jsx)("i",{className:"icofont-moon"})}),Object(a.jsx)("span",{className:"light",children:Object(a.jsx)("i",{className:"icofont-sun-alt"})})]}),Object(a.jsxs)("div",{className:"notification dropdown",children:[Object(a.jsx)("div",{className:"notify-bell",onClick:function(){return Z(!S)},children:Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"icofont-alarm"})})}),S?Object(a.jsxs)("div",{className:"dropdown-menu dropdown-menu-right notification-list",children:[Object(a.jsx)("h4",{children:"Announcements"}),c.length>=1&&c.map((function(e,t){var c=e.publist,s=e.comments,i=e.authorJSON,n=e.buyerJSON,o=e.bookJSON;return Object(a.jsx)("div",{className:"lists",children:Object(a.jsx)("a",{href:"#",className:"",children:Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"mr-3 icon success",children:Object(a.jsx)("i",{className:"icofont-check"})}),"Book Bought Ticker"===s?Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:s}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[n.first_name," ",n.last_name," Bought book ",o.name," from ",i.first_name," ",i.last_name," "]}),Object(a.jsx)("span",{children:c})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:s}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Bought book "}),Object(a.jsx)("span",{children:c})]})]})})})}))]}):null]}),Object(a.jsxs)("div",{className:"profile_log dropdown",children:[Object(a.jsxs)("div",{className:"user",onClick:function(){return g(!O)},children:[Object(a.jsx)("span",{className:"thumb",children:Object(a.jsx)("img",{src:U,alt:"profile"})}),Object(a.jsx)("span",{className:"arrow",children:Object(a.jsx)("i",{className:"icofont-angle-down"})})]}),O?Object(a.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[Object(a.jsx)("div",{className:"user-email",children:Object(a.jsxs)("div",{className:"user",children:[Object(a.jsx)("span",{className:"thumb",children:Object(a.jsx)("img",{src:U,alt:"profile"})}),Object(a.jsx)("div",{className:"user-info",children:Object(a.jsx)("span",{children:w})})]})}),Object(a.jsxs)(j.b,{to:"/profile",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-ui-user"}),"Profile"]}),Object(a.jsxs)(j.b,{to:"/settings-profile",className:"dropdown-item",children:[Object(a.jsx)("i",{className:"icofont-ui-settings"}),"Settings"]}),Object(a.jsxs)("a",{className:"dropdown-item logout",onClick:function(){return localStorage.clear(),y(Object(r.f)()),y(Object(r.b)()),void(window.location.href="/")},children:[Object(a.jsx)("i",{className:"icofont-logout"})," Logout"]})]}):null]})]})]})})})})}),Object(a.jsx)(l.a,{})]})}},243:function(e,t,c){var s;!function(){"use strict";var c={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var i=typeof s;if("string"===i||"number"===i)e.push(s);else if(Array.isArray(s)&&s.length){var n=a.apply(null,s);n&&e.push(n)}else if("object"===i)for(var o in s)c.call(s,o)&&s[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(s=function(){return a}.apply(t,[]))||(e.exports=s)}()},244:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return l})),c.d(t,"a",(function(){return r}));var s,a=c(21),i=c.n(a);function n(e,t){return void 0===e&&(e=""),void 0===t&&(t=s),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var o="object"===typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,t,c){if(!(e[t]instanceof o))return new Error("Invalid prop `"+t+"` supplied to `"+c+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var l=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function r(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},250:function(e,t,c){"use strict";t.a=c.p+"static/media/img8.aaa9d0c4.png"},276:function(e,t,c){"use strict";var s=c(5),a=c(8),i=c(0),n=c.n(i),o=c(21),l=c.n(o),r=c(243),j=c.n(r),b=c(244),d={tag:b.c,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,c=e.cssModule,i=e.fluid,o=e.tag,l=Object(a.a)(e,["className","cssModule","fluid","tag"]),r="container";!0===i?r="container-fluid":i&&(r="container-"+i);var d=Object(b.b)(j()(t,r),c);return n.a.createElement(o,Object(s.a)({},l,{className:d}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},306:function(e,t,c){"use strict";var s=c(5),a=c(8),i=c(0),n=c.n(i),o=c(21),l=c.n(o),r=c(243),j=c.n(r),b=c(244),d=l.a.oneOfType([l.a.number,l.a.string]),h={tag:b.c,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},m={tag:"div",widths:["xs","sm","md","lg","xl"]},u=function(e){var t=e.className,c=e.cssModule,i=e.noGutters,o=e.tag,l=e.form,r=e.widths,d=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];r.forEach((function(t,c){var s=e[t];if(delete d[t],s){var a=!c;h.push(a?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var m=Object(b.b)(j()(t,i?"no-gutters":null,l?"form-row":"row",h),c);return n.a.createElement(o,Object(s.a)({},d,{className:m}))};u.propTypes=h,u.defaultProps=m,t.a=u},420:function(e,t,c){"use strict";c.r(t);var s=c(19),a=c(2),i=c(0),n=c.n(i),o=c(236),l=c(45),r=c(276),j=c(306),b=c(5),d=c(8),h=c(21),m=c.n(h),u=c(243),O=c.n(u),g=c(244),p=m.a.oneOfType([m.a.number,m.a.string]),x=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:p,offset:p})]),A={tag:g.c,xs:x,sm:x,md:x,lg:x,xl:x,className:m.a.string,cssModule:m.a.object,widths:m.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,c){return!0===c||""===c?e?"col":"col-"+t:"auto"===c?e?"col-auto":"col-"+t+"-auto":e?"col-"+c:"col-"+t+"-"+c},v=function(e){var t=e.className,c=e.cssModule,s=e.widths,a=e.tag,i=Object(d.a)(e,["className","cssModule","widths","tag"]),o=[];s.forEach((function(t,s){var a=e[t];if(delete i[t],a||""===a){var n=!s;if(Object(g.a)(a)){var l,r=n?"-":"-"+t+"-",j=f(n,t,a.size);o.push(Object(g.b)(O()(((l={})[j]=a.size||""===a.size,l["order"+r+a.order]=a.order||0===a.order,l["offset"+r+a.offset]=a.offset||0===a.offset,l)),c))}else{var b=f(n,t,a);o.push(b)}}})),o.length||o.push("col");var l=Object(g.b)(O()(t,o),c);return n.a.createElement(a,Object(b.a)({},i,{className:l}))};v.propTypes=A,v.defaultProps=N;var I=v,E=c(7),M=c(237),S=c(240);c.p,c.p,c.p,c.p,c.p,c.p,c.p,c(250),t.default=Object(E.i)((function(e){var t=Object(i.useState)([]),c=Object(s.a)(t,2),b=c[0],d=c[1],h=Object(i.useState)(),m=Object(s.a)(h,2),u=(m[0],m[1]);Object(i.useEffect)((function(){O()}),[]);var O=function(){o.a.get("/book/").then((function(e){200===e.status&&(console.log("Response",e.data),d(e.data),l.a.success("User Books Fetch Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))})).catch((function(e){u(e),console.error("Error",e),u("This Books Fetch Failed")}))};return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(S.a,{}),Object(a.jsx)(M.a,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(r.a,{children:Object(a.jsx)("div",{className:"content ",children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(I,{xs:"4",children:Object(a.jsxs)("div",{className:"music_box ",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUEyNEU3NDEyODRCRTExMUEzNzBCMUEyRDM3MURCNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ3NURDNTE3OEFGMTFFNUEyNDM5Q0I5QjQ2N0U3QTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ3NURDNTA3OEFGMTFFNUEyNDM5Q0I5QjQ2N0U3QTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3NzcyNmQ0LWIyMGEtMzg0NC1iNzFiLWE5NzEyMzk3OGRiZiIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDo5QTM2RTJCQUM0QUZFMTExOTk2RkI0NzdDMzE5Njk2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhtmnEUAAAF9SURBVHjaxJY7TsNAEIa9S8IFglLxSiwKDgBdRAWXiOS48QFyhtAkZ0iZU0CF0qG4ThVSAAWBnACZ5Z9oLK2Q94GwzS99kuXZnfF6d2ZHKKUCiyQ4AtfgCpyDFtu2YAkewD14Bl9GTxTIwCkYgTeQKbMyHjPiOYX+TEEisFa/15rnOgM1wVj9XWP2ZQw0UeVpYgoUqfI1+BnoBKwqCLTKDwgd3wZIQDcoX1323RC0Gjw8grbHREq6T35uAuExZwMuaUU3nkFSEIMzJuZ3LrV3MbCimce/XoCwID9Ctrk0o8GpYxBlft9SQfqOykFKpVa7TKI9mVvsc23fTGrJoCZJrsI20enqWew9HmPTVnKpd33MEIQFtpBtrj+zpM1MPLN8wWXqmIk8TxwpqSNh38EFLfkVTD33lBzvM8JzznQXQ7tNqyiqT3lR1RNvUEGg+F8vvlqv8tqaE50OuPVstzY8tmPyJxwN5B445DsrbyAP2PahNZB34AVkJkffAgwA7ZvJKR0WHfYAAAAASUVORK5CYII=",className:"float_l"}),Object(a.jsx)("h2",{className:"music_box_h2",children:"AUDIO PODCASTS"}),Object(a.jsx)("p",{className:"desc float_l ",children:"Bookstagram lauches new experiance with audio blogging and story podcasts"})]})}),Object(a.jsx)(I,{xs:"4",children:Object(a.jsxs)("div",{className:"music_box",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUEyNEU3NDEyODRCRTExMUEzNzBCMUEyRDM3MURCNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YzOUU4NDI3OEI0MTFFNUE0NThGNjA5NzgzMzRCM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YzOUU4NDE3OEI0MTFFNUE0NThGNjA5NzgzMzRCM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3NzcyNmQ0LWIyMGEtMzg0NC1iNzFiLWE5NzEyMzk3OGRiZiIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDo5QTM2RTJCQUM0QUZFMTExOTk2RkI0NzdDMzE5Njk2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqhkXTsAAAKESURBVHjapJVdiIxRGMffGTO7s3bZ3ZSEdYHVxmplVmLlYzXlRtxI9kZccLPUtldSPlKSJHe+SuHChUi4QPnMBRpJ8jHKt2KFbD427M74Pfq/dXqbd2fe3ad+Pe+Zc+b5n/Oc55wTKxQK3v3WVq+EVcJ0mARJ+ATP5L10Nhv6x0SJwGnohBVQX6T/BhyDk2EBYoOsYD90Oe0+zfo3NMAEp+82dLCSd8Eg8RDhK07wi7BUK5gN82AiNMFujVkAOSY6sxyBc5DRdwcsh2uauWs52ApT4SFUwT1Exg4msF75NlsCp7zS9kIrew0pOB8mYN8H9L1DG1iWkfs8brGac1lFezGBlTAKvsBOL6Ih8gZ3RM3OYgLL5E94Q7ej8hlWkQwKzJC/MwyBx9APNTAlKDBG/utQo5OmPuf/9UGBP/J/veFZtXx/8Kp4CnZQ1sJ48Ov5Fxx3JuDaIitR8j2A/6mzUK0z8yookJNfJ1w7E5K6LufcuPaSdH12U7QQNjsDLjib/QPyIen4KG/BzlpgtZtY1b7/l102na7SgJEKulon0toPtCeWrm9FBA7BRtgFB1Uoq2Cb+tttBWsUzHLYBm9hMozToEIZG2s132hjSc12/CX93m0Cs9S4rFSklLp4hMqxsTFnUv6Ba0w4+U3J57WaVASBhKpthNoV/urjzmZmdDisHOsi1r4dsNGamNkm+UcmcFpvq+Xxrq5ey2FPBIEacn/VBKgeS898/b7XfzJbVDExdfgPyDSVaUNIFR2GDdALz7WfSfVtQXRP3AnYDLfUblFwTxdX2Ib791ctzFHw9/ZwWfDgSX6io9+m97bCye/3EAF7oK7DgMr5A9wkeK8/4J8AAwAYhqbMZFHuIwAAAABJRU5ErkJggg==",className:""}),Object(a.jsx)("h2",{className:"music_box_h2",children:"LISTEN BEFORE PURCHASE"}),Object(a.jsx)("p",{className:"desc ",children:"Listen to the previews before you buy"})]})}),Object(a.jsx)(I,{xs:"4",children:Object(a.jsxs)("div",{className:"music_box ",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAYAAAAtZZsLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUEyNEU3NDEyODRCRTExMUEzNzBCMUEyRDM3MURCNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0EzMDZEQjE3OEI0MTFFNTlFMjhFRjg1Q0ExM0ZGNEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0EzMDZEQjA3OEI0MTFFNTlFMjhFRjg1Q0ExM0ZGNEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3NzcyNmQ0LWIyMGEtMzg0NC1iNzFiLWE5NzEyMzk3OGRiZiIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDo5QTM2RTJCQUM0QUZFMTExOTk2RkI0NzdDMzE5Njk2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu+7asYAAASMSURBVHjazJgLaJZVGMe/yYcrdYo2Ky+pyVKjK7JiYoV0gTSMTYlUnGiZhV0oMyUoaBJEZNHU6KIiKNqaLN3susqs1CZZaN5aW4WX2cJVK6dNvLz9Hvq/eji833w/96k98ON73+ec57zP+5znvOc5X1YQBIkMyVz9zkxkULIy5OAiuAYOw0F4G6rg0Ply8BXoomj9DX/ARl3fA1/DAXgMGs61g0shH36GgXAMrlabRWwtTIeb4XEoaI+DHU7Tng1vQCUMlW6YHGmCQepzI7yoqDZpmsvgK/i4XXNsEfS4DProugp2wAvQCL9AC+zT/YcwVH37w/tQ5I33LqyMeE4s/Ag+COugAiZAX+gEV8BRMQJmwSXKuT2y3Q0ToRAWOmOOgT4wPxMRbIU3oSz4TyxK22EvfAqT1K+3ovuA7idANWyEJXAEnnfGzYHdMCvdCIYX3aEYDsqxOtgPY2GEdB/BEMe4ox64DTbBQ9DLme5Ajof9e8Ah56VikSSIU2E43ADfQz30gs2wAZq1Mr+AH2AkjIPecASeg9VwMfzqTPcUWA7fQq0+RbdCDTTCmrhTbG+5BtbBN/Co3n4FZDtvY9Fcr4jNgzynrVY2+V4E5kvf0dHdJN0t6UxxSXBKzMkPpAvzrU75NS1ikPsd210R7Wb7YwqbgXEdNFY5D7rN0XfRQtkWMUCWHu7KzIh+Jss93XTp8+I6aAneICNbhT1jPMSm6R+YAd85Tvbz+g2SfqqnL5W+RxwHE5rCULZ4bVdJP9HR5UI3Xec7tpsiHlastmEReXoc+sZx0FjmPGiO1zblNLnzqmM7KaJ9odq6evpy6S+K4+AAqIdjMhrutVdKH2Wbra0wTJOciD5bIhaNsTQqwqmSc7I+qiZ/ajG47c365ETZ3u1EsVq70l/aDMI+J2Cn9xkzXtJ0Pw2Fts+3tcSXaAGYVHhtudLPTmFb5q3scmc3mScn6lNEeJxsLECFbTloSbtZ0TJ5wmsvkr7A05c40S91PtKLlDY2vaMinnehqqbVyvWctqbYXRQNyqdAnwu3fYH0Se97WgOddT9bfX7z9maXR7T3B35BEWfDfk11oMkeb9tKqDasjbCzD/EBVUIPtxGArU4q7FDteF06DuZpQdRpkEqv/QLp5+r+WU2xRey+FGMWO/t3oEX0Obyj/C1Ix8HwTW27a9KAT3rtBdI362EzUowzEjZ4jtWotizVCyXTneKQl7VDHNbgd3ntd6oIiLIdrVkIpUUV1CdKoXvh0lT1YFx5C66FOv1aDXil6sfOcLtqPVfsgFUCd+jeToCfQSv8DluhXPVhRo6d42EyXK5zyl54CqapGE2ouK3U0bRYuqM65+TqBXfClyqQM34utkP7YEWnu3SNOqjnqhp3pUKV93H4Sffbz+bB/XqYAzk64Z0szm0857pKU7ofTuh+7bn668POJEUwQId2V5ZBC/TU2eQ9HWXPSJJnaFemQ1arcq2DFs0+/bvQScm/8nz+uzUEFmjlWt51VcR2weL/y99vNs3P6Di6Hl5PZFiS7bRfpemt1h9GGZd/BRgASo3XNSuZIsgAAAAASUVORK5CYII=",className:""}),Object(a.jsx)("h2",{className:"music_box_h2",children:"AUTHOR SCREENS"}),Object(a.jsx)("p",{className:"desc ",children:"Launching on 5th April 2021,Author's insightful and interactive user experience"})]})})]})})}),Object(a.jsx)(r.a,{children:Object(a.jsx)("div",{className:"maincontent ",children:Object(a.jsxs)(j.a,{children:[Object(a.jsxs)("h3",{children:["LATEST ARRIVALS IN BOOKSTAGRAM",Object(a.jsx)("div",{className:"arrow"})]}),b.length>=1&&b.map((function(t,c){var s=t.id,i=t.name,n=t.desc,o=t.dp,l=t.rate,r=t.authJSON;return Object(a.jsx)(I,{xs:"3",children:Object(a.jsxs)("div",{className:"box1 ",onClick:function(){return function(t){e.history.push({pathname:"/book-description",state:{bookId:t}})}(s)},children:[Object(a.jsx)("div",{className:"arrival_img",children:Object(a.jsx)("div",{className:"arrival_imgcard",children:Object(a.jsx)("img",{src:o,width:"226",height:"228"})})}),Object(a.jsxs)("h4",{children:["\xa0\xa0\xa0\xa0",Object(a.jsx)("a",{children:i})," \xa0\xa0",Object(a.jsx)("i",{children:Object(a.jsx)("small",{children:Object(a.jsxs)("a",{href:"#",children:["by ",r.first_name]})})})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:i})," ",n]}),Object(a.jsxs)("p",{children:["$ ",l,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)("a",{href:"Mens-Product-Detail-Page.html",children:"ADD TO CART"})]})]})})}))]})})})]})}))}}]);
//# sourceMappingURL=10.acf74bd4.chunk.js.map