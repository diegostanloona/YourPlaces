(this["webpackJsonpmern-frontend"]=this["webpackJsonpmern-frontend"]||[]).push([[5],{42:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(8);n(52);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"," ").concat(e.icon&&"button--icon"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},45:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(48);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},46:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(49),o=n(42);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(o.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(43),r=n.n(a),c=n(44),o=n(10),l=n(0),s=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(l.useState)(),u=Object(o.a)(s,2),i=u[0],m=u[1],d=Object(l.useRef)([]),f=Object(l.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c,o,l,s,u,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,o=i.length>3&&void 0!==i[3]?i[3]:{},a(!0),l=new AbortController,d.current.push(l),e.prev=6,e.next=9,fetch(t,{method:n,body:c,headers:o,signal:l.signal});case 9:return s=e.sent,e.next=12,s.json();case 12:if(u=e.sent,d.current=d.current.filter((function(e){return e!==l})),s.ok){e.next=17;break}throw a(!1),new Error(u.message);case 17:return a(!1),e.abrupt("return",u);case 21:throw e.prev=21,e.t0=e.catch(6),console.log(e.t0),m(e.t0.message),a(!1),e.t0;case 27:case"end":return e.stop()}}),e,null,[[6,21]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(l.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:i,sendRequest:f,clearError:function(){m(null)}}}},48:function(e,t,n){},49:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(41),s=n(16),u=(n(51),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal_footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(s.a,{onClick:e.onCancel}),r.a.createElement(l.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(u,e)))}},51:function(e,t,n){},52:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(43),r=n.n(a),c=n(44),o=n(10),l=n(0),s=n.n(l),u=n(1),i=n(45),m=n(42),d=n(68),f=n(61),p=n(49),E=(n(66),function(e){var t=Object(l.useRef)(),n=e.center,a=e.zoom;return Object(l.useEffect)((function(){new window.ol.Map({target:t.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([n.lng,n.lat]),zoom:a})})}),[n,a]),s.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style,id:"map"})}),h=n(46),b=n(15),v=n(47),g=n(11),O=(n(67),function(e){var t=Object(l.useContext)(g.a),n=(Object(u.h)().placeId,Object(u.g)(),Object(v.a)()),a=n.isLoading,O=n.error,w=n.sendRequest,k=n.clearError,j=Object(l.useState)(!1),C=Object(o.a)(j,2),N=C[0],y=C[1],_=Object(l.useState)(!1),x=Object(o.a)(_,2),S=x[0],I=x[1],D=Object(l.useState)(e.likes.includes(t.userId)),z=Object(o.a)(D,2),L=z[0],A=z[1],P=Object(l.useState)(e.likes.length),T=Object(o.a)(P,2),F=T[0],R=T[1],M=function(){return y(!1)},q=function(){return I(!1)},B=function(){var n=Object(c.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return I(!1),n.prev=1,n.next=4,w("".concat("https://sluga-udemy-mern.herokuapp.com/","api/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 4:n.sent,e.onDelete(e.id),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),J=function(){var n=Object(c.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w("".concat("https://sluga-udemy-mern.herokuapp.com/","api/places/").concat(e.id),"POST",null,{Authorization:"Bearer "+t.token});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:A(!L),R(L?F-1:F+1);case 10:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{error:O,onClear:k}),s.a.createElement(p.a,{show:N,onCancel:M,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(m.a,{onClick:M},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement(E,{center:e.coordinates,zoom:16}))),s.a.createElement(p.a,{show:S,onCancel:q,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{inverse:!0,onClick:q},"CANCEL"),s.a.createElement(m.a,{danger:!0,onClick:B},"Delete"))},s.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter.")," ")," ",s.a.createElement("li",{className:"place-item"},s.a.createElement(i.a,{className:"place-item__content"},s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("https://storage.googleapis.com/sluga_yourplaces/").concat(e.imageUrl),alt:e.title})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"place-item__actions"},a&&s.a.createElement("div",{className:"center"},s.a.createElement(b.a,null)),s.a.createElement(f.b.Provider,{value:{size:"2.3em"}},s.a.createElement(m.a,{icon:!0,inverse:!0,onClick:t.userId?J:null},L&&t.userId&&s.a.createElement(d.a,null)," ",(!L||!t.userId)&&s.a.createElement(d.b,null))),s.a.createElement("br",null),s.a.createElement("p",{className:"likeCounter"},F),s.a.createElement(m.a,{inverse:!0,onClick:function(){return y(!0)}},"VIEW ON MAP"),t.userId===e.creatorId&&s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{to:"/places/".concat(e.id)},"EDIT"),s.a.createElement(m.a,{danger:!0,onClick:function(){return I(!0)}},"DELETE"))))," ")," ")}),w=(n(69),function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(i.a,null,s.a.createElement("h2",null,"No places found, Maybe create one?"),s.a.createElement(m.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(O,{key:t.id,id:t.id,imageUrl:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,likes:t.likes,onDelete:e.onDelete})})))});t.default=function(e){var t=Object(l.useState)(),n=Object(o.a)(t,2),a=n[0],i=n[1],m=Object(v.a)(),d=m.isLoading,f=m.error,p=m.sendRequest,E=m.clearError,g=Object(u.h)().userId;Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("".concat("https://sluga-udemy-mern.herokuapp.com/","api/places/user/").concat(g));case 3:t=e.sent,i(t.places),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[p,g]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{error:f,onClear:E}),d&&s.a.createElement("div",{className:"center"},s.a.createElement(b.a,null)),!d&&a&&s.a.createElement(w,{items:a,onDelete:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=5.1aa26627.chunk.js.map