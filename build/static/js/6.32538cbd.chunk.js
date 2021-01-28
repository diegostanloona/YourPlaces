(this["webpackJsonpmern-frontend"]=this["webpackJsonpmern-frontend"]||[]).push([[6],{45:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(48);a.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},48:function(e,a,t){},56:function(e,a,t){"use strict";var n=t(10),r=t(0),i=t.n(r),l=t(42);t(57);a.a=function(e){var a=Object(r.useState)(),t=Object(n.a)(a,2),s=t[0],c=t[1],u=Object(r.useState)(),o=Object(n.a)(u,2),p=o[0],m=o[1],d=Object(r.useState)(!1),v=Object(n.a)(d,2),f=v[0],b=v[1],g=Object(r.useRef)();Object(r.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){m(e.result)},e.readAsDataURL(s)}}),[s]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:g,style:{display:"none"},type:"file",accept:".jpg, .png, .jpeg",onChange:function(a){var t,n=f;a.target.files&&1===a.target.files.length?(t=a.target.files[0],c(t),b(!0),n=!0):(b(!1),n=!1),e.onInput(e.id,t,n)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(l.a,{type:"button",onClick:function(){g.current.click()}},"PICK IMAGE")),!f&&i.a.createElement("p",null,e.errorText))}},57:function(e,a,t){},70:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(43),r=t.n(n),i=t(44),l=t(55),s=t(10),c=t(0),u=t.n(c),o=t(45),p=t(54),m=t(42),d=t(56),v=t(46),f=t(15),b=t(53),g=t(58),O=t(47),E=t(11);t(70);a.default=function(){var e=Object(c.useContext)(E.a),a=Object(c.useState)(!0),t=Object(s.a)(a,2),n=t[0],j=t[1],h=Object(O.a)(),w=h.isLoading,y=h.error,k=h.sendRequest,x=h.clearError,I=Object(g.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(s.a)(I,3),P=N[0],S=N[1],T=N[2],C=function(){var a=Object(i.a)(r.a.mark((function a(t){var i,l,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),!n){a.next=13;break}return a.prev=2,a.next=5,k("".concat("https://sluga-udemy-mern.herokuapp.com/","api/users/login"),"POST",JSON.stringify({email:P.inputs.email.value,password:P.inputs.password.value}),{"Content-Type":"application/json"});case 5:i=a.sent,e.login(i.userId,i.token),a.next=11;break;case 9:a.prev=9,a.t0=a.catch(2);case 11:a.next=27;break;case 13:return a.prev=13,(l=new FormData).append("email",P.inputs.email.value),l.append("name",P.inputs.name.value),l.append("password",P.inputs.password.value),l.append("image",P.inputs.image.value),a.next=21,k("".concat("https://sluga-udemy-mern.herokuapp.com/","api/users/signup"),"POST",l);case 21:s=a.sent,e.login(s.userId,s.token),a.next=27;break;case 25:a.prev=25,a.t1=a.catch(13);case 27:case"end":return a.stop()}}),a,null,[[2,9],[13,25]])})));return function(e){return a.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{error:y,onClear:x}),u.a.createElement(o.a,{className:"authentication"},w&&u.a.createElement(f.a,{asOverlay:!0}),u.a.createElement("h2",null,"Login Required"),u.a.createElement("hr",null),u.a.createElement("form",{onSubmit:C},!n&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(b.c)()],errorText:"Please enter a name.",onInput:S}),u.a.createElement(d.a,{id:"image",center:!0,onInput:S,errorText:"Please select an image."})),u.a.createElement(p.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(b.a)()],errorText:"Please enter a valid email address.",onInput:S}),u.a.createElement(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(b.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:S}),u.a.createElement(m.a,{type:"submit",disabled:!P.isValid},n?"LOGIN":"SIGNUP")),u.a.createElement(m.a,{inverse:!0,onClick:function(){n?T(Object(l.a)(Object(l.a)({},P.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):T(Object(l.a)(Object(l.a)({},P.inputs),{},{name:void 0,image:void 0}),P.inputs.email.isValid&&P.inputs.password.isValid),j((function(e){return!e}))}},"SWITCH TO ",n?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=6.32538cbd.chunk.js.map