(this["webpackJsonpangelbroking-smartapi-app"]=this["webpackJsonpangelbroking-smartapi-app"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(23),s=n.n(r),i=(n(29),n(1)),o=n(4),j=(n(30),n(24)),u=(n(83),n(0)),b=function(e){var t=e.onSuccess,n=Object(c.useState)({api_key:"",user_id:"",password:"",error:""}),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(u.jsxs)("div",{className:"ab-api-login-form",children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsx)("label",{children:"API Key:"}),Object(u.jsx)("input",{type:"text",value:r.api_key,onChange:function(e){s(Object(i.a)(Object(i.a)({},r),{},{api_key:e.target.value}))}}),Object(u.jsx)("label",{children:"User ID:"}),Object(u.jsx)("input",{type:"text",value:r.user_id,onChange:function(e){s(Object(i.a)(Object(i.a)({},r),{},{user_id:e.target.value}))}}),Object(u.jsx)("label",{children:"Password:"}),Object(u.jsx)("input",{type:"text",value:r.password,onChange:function(e){s(Object(i.a)(Object(i.a)({},r),{},{password:e.target.value}))}}),r.error?Object(u.jsxs)("div",{className:"error",children:["Error: ",r.error]}):null,Object(u.jsx)("button",{onClick:function(){s(Object(i.a)(Object(i.a)({},r),{},{error:""}));var e=new j.SmartAPI({api_key:r.api_key});e.generateSession(r.user_id,r.password).then((function(n){n.status?e.getProfile().then((function(n){console.log("User Data"),console.log(n),n.status&&t(e,n.data)})):s(Object(i.a)(Object(i.a)({},r),{},{error:"[".concat(n.errorcode,"] ").concat(n.message)}))}))},children:"Submit"})]})},l=(n(85),function(e){var t=e.user;return Object(u.jsx)("div",{className:"ab-api-welcome",children:Object(u.jsxs)("h2",{children:["Welcome ",t.name]})})}),O=function(){var e=Object(c.useState)({authUser:{},user:{}}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(u.jsx)("div",{className:"ab-api-wrap",children:Object(u.jsxs)("div",{className:"ab-api-content",children:[Object(u.jsx)("h1",{children:"Angle Broking SmartAPI"}),Object.keys(n.user).length?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l,{user:n.user})}):Object(u.jsx)(b,{onSuccess:function(e,t){console.log("userInfo",t),a(Object(i.a)(Object(i.a)({},n),{},{authUser:e,user:t}))}})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),d()}},[[86,1,2]]]);
//# sourceMappingURL=main.2c222e40.chunk.js.map