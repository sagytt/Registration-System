(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(4),m=a(1),s=a(10),i=a(7),u=a(8),d="http://localhost:8080",p=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},E=function(e,t){return e.location.pathname===t?{color:"#ff9900"}:{color:"#ffffff"}},f=Object(m.g)((function(e){var t=e.history;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-primary"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(t,"/"),to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(t,"/user/profile"),to:"/user/profile"},"Profile")),!p()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(t,"/signin"),to:"/signin"},"Signin")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(t,"/signup"),to:"/signup"},"Signup"))),p()&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(d,"/api/auth/signout"),{method:"GET"}).then((function(e){console.log("signout",e)})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))}},"Signout"))))})),h=function(e){var t=e.title,a=void 0===t?"Title":t,n=e.description,l=void 0===n?"Description":n,c=e.className,o=e.children;return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,a),r.a.createElement("p",{className:"lead"},l))),r.a.createElement("div",{className:c},o))},b=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(u.a)(e,2),a=t[0],l=t[1],c=a.name,m=a.email,p=a.password,E=a.success,f=a.error,b=function(e){return function(t){l(Object(i.a)({},a,Object(s.a)({error:!1},e,t.target.value)))}},g=function(e){var t;e.preventDefault(),l(Object(i.a)({},a,{error:!1})),(t={name:c,email:m,password:p},fetch("".concat(d,"/api/auth/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?l(Object(i.a)({},a,{error:e.error,success:!1})):l(Object(i.a)({},a,{name:"",email:"",password:"",error:"",success:!0}))}))};return r.a.createElement(h,{title:"SignUp",description:"You are now signing up",className:"container col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-info",style:{display:E?"":"none"}},"New Account is created. Please ",r.a.createElement(o.b,{to:"/signin"},"Signin")),r.a.createElement("div",{className:"alert alert-danger",style:{display:f?"":"none"}},f),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:b("name"),type:"text",className:"form-control",value:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:b("email"),type:"email",className:"form-control",value:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:b("password"),type:"password",className:"form-control",value:p})),r.a.createElement("button",{onClick:g,className:"btn btn-primary"},"Submit")))},g=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,redirectToReferrer:!1}),t=Object(u.a)(e,2),a=t[0],l=t[1],c=a.email,o=a.password,p=a.loading,E=a.error,f=a.redirectToReferrer,b=function(e){return function(t){l(Object(i.a)({},a,Object(s.a)({error:!1},e,t.target.value)))}},g=function(e){var t;e.preventDefault(),l(Object(i.a)({},a,{error:!1,loading:!0})),(t={email:c,password:o},fetch("".concat(d,"/api/auth/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?l(Object(i.a)({},a,{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){l(Object(i.a)({},a,{redirectToReferrer:!0}))}))}))};return r.a.createElement(h,{title:"SignIn",description:"Please sign in",className:"container col-md-6 offset-md-3"},p&&r.a.createElement("div",{className:"alert alert-info"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"alert alert-danger",style:{display:E?"":"none"}},E),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:b("email"),type:"email",className:"form-control",value:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:b("password"),type:"password",className:"form-control",value:o})),r.a.createElement("button",{onClick:g,className:"btn btn-primary"},"Submit")),function(){if(f)return r.a.createElement(m.a,{to:"/"})}())},N=function(e){var t=e.candidates;return r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"All Candidates"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Full Name"),r.a.createElement("th",{scope:"col"},"Job Title"),r.a.createElement("th",{scope:"col"},"Avatar"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.first_name+" "+e.last_name),r.a.createElement("td",null,e.job_title),r.a.createElement("td",null,r.a.createElement("img",{className:"col-md-4",src:e.avatar,alt:"avatar"})),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/candidate/".concat(e.id)},r.a.createElement("button",{className:"btn btn-primary"},"Full details"))))})))))},v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=function(){fetch("".concat(d,"/api/candidates"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){if(e.error)return e.error;l(e)}))};return Object(n.useEffect)((function(){p()&&c()}),[]),r.a.createElement(h,{title:"Home Page",description:"",className:"container"},p()&&r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"mb-4"},"New Candidates"),r.a.createElement(N,{candidates:a})))},j=a(19),y=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return p()?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},w=function(){var e=p().user,t=e.name,a=e.email,n=e.role;return r.a.createElement(h,{title:"Profile",description:"Hello ".concat(t),className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"User Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))))))},O=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],o=function(e){p()&&function(e){return fetch("".concat(d,"/api/candidate/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(e).then((function(e){if(e.error)return e.error;c(e)}))};return Object(n.useEffect)((function(){var t=e.match.params.userId;o(t)}),[e.match.params.userId]),r.a.createElement(h,{title:"Candidate",description:"Candidate Description",className:"container"},p()&&r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"mb-4"},l.first_name+" "+l.last_name),r.a.createElement("div",{className:"card mb-5"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Gender"),r.a.createElement("th",{scope:"col"},"Job Title"),r.a.createElement("th",{scope:"col"},"Job Description"),r.a.createElement("th",{scope:"col"},"Avatar"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},l.id),r.a.createElement("td",null,l.first_name),r.a.createElement("td",null,l.last_name),r.a.createElement("td",null,l.email),r.a.createElement("td",null,l.gender),r.a.createElement("td",null,l.job_title),r.a.createElement("td",null,l.job_description),r.a.createElement("td",null,r.a.createElement("img",{className:"col-md-8",src:l.avatar,alt:"avatar"}))))))))},S=function(){return r.a.createElement(o.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:v}),r.a.createElement(m.b,{path:"/signin",exact:!0,component:g}),r.a.createElement(m.b,{path:"/signup",exact:!0,component:b}),r.a.createElement(y,{path:"/user/profile",exact:!0,component:w}),r.a.createElement(m.b,{path:"/candidate/:userId",exact:!0,component:O})))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.12ba1da0.chunk.js.map