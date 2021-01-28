(this["webpackJsonpmern-frontend"]=this["webpackJsonpmern-frontend"]||[]).push([[1],[,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),l=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},,,,function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(28);t.a=function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}},function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(7),r=n.n(c);n(37);t.a=function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,l=n(0),c=n.n(l),r=n(7),o=n.n(r),i=(n(27),n(1)),u=n(8),m=n(15),s=n(10),E=(n(29),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),d=n(11),f=(n(30),function(e){var t=Object(l.useContext)(d.a);return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(u.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(u.c,{to:"/".concat(t.userId,"/places")},"MY PLACES")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(u.c,{to:"/places/new"},"ADD PLACE")),!t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(u.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),g=n(41),v=(n(36),function(e){var t=c.a.createElement(g.a,{in:e.show,timeout:200,classNames:{enterActive:"Slide-in-left-enter",enterDone:"Slide-in-left-enter-active",exitActive:"Slide-in-left-exit",exitDone:"Slide-in-left-exit-active"},mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),b=n(16),h=(n(38),function(e){var t=Object(l.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],o=function(){r(!1)};return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(b.a,{onClick:o}),a&&c.a.createElement(v,{show:a,onClick:o},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(f,null))),c.a.createElement(E,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{src:"logo.png",alt:""}))),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(f,null))))}),p=c.a.lazy((function(){return n.e(4).then(n.bind(null,74))})),k=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,71))})),I=c.a.lazy((function(){return Promise.all([n.e(9),n.e(5)]).then(n.bind(null,75))})),O=c.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,72))})),w=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,73))})),S=function(){var e,t=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(),o=Object(s.a)(r,2),i=o[0],u=o[1],m=Object(l.useState)(!1),E=Object(s.a)(m,2),d=E[0],f=E[1],g=Object(l.useCallback)((function(e,t,n){c(t),f(e);var a=n||new Date((new Date).getTime()+31536e6);u(a),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:a.toISOString()}))}),[]),v=Object(l.useCallback)((function(){c(null),u(null),f(null),localStorage.removeItem("userData")}),[]);return Object(l.useEffect)((function(){if(n&&i){var e=i.getTime()-(new Date).getTime();a=setTimeout(v,e)}else clearTimeout(a)}),[n,v,i]),Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&g(e.userId,e.token)}),[g]),{token:n,login:g,logout:v,userId:d}}(),n=t.token,r=t.login,o=t.logout,E=t.userId;return e=n?c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(p,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(I,null)),c.a.createElement(i.b,{path:"/places/new",exact:!0},c.a.createElement(k,null)),c.a.createElement(i.b,{path:"/places/:placeId"},c.a.createElement(O,null)),c.a.createElement(i.a,{to:"/"})):c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(p,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(I,null)),c.a.createElement(i.b,{path:"/auth"},c.a.createElement(w,null)),c.a.createElement(i.a,{to:"/auth"})),c.a.createElement(d.a.Provider,{value:{isLoggedIn:!!n,token:n,userId:E,login:r,logout:o}},c.a.createElement(u.a,null,c.a.createElement(h,null),c.a.createElement("main",null,c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",{className:"center"},c.a.createElement(m.a,null))},e))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,2,3]]]);
//# sourceMappingURL=main.5ca01e3f.chunk.js.map