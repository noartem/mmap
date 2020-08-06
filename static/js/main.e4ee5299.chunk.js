(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[0],{121:function(e,n,t){},122:function(e,n,t){},123:function(e,n,t){},129:function(e,n,t){},130:function(e,n,t){},131:function(e,n,t){},137:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(35),c=t.n(o),l=(t(83),t(3)),i=t(9),u=t(65),s=t(39),m=function(){var e=localStorage.getItem("mmap-store");return""===e||null===e?{search:"",notes:[],currentNoteName:""}:JSON.parse(e)}(),d=Object(s.b)({name:"mmap",initialState:m,reducers:{search:function(e,n){e.search=n.payload},addNote:function(e,n){void 0!==e.notes.find((function(e){return e.name===n.payload}))?alert("Note with this name already exist!"):(e.notes.push({name:n.payload,body:"# ".concat(n.payload,"!\n\nSome *text* goes here...")}),e.search="")},selectNote:function(e,n){e.currentNoteName=n.payload},updateNote:function(e,n){var t,a=Object(u.a)(e.notes);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.name===e.currentNoteName){r.name=n.payload.name,r.body=n.payload.body,e.currentNoteName=r.name;break}}}catch(o){a.e(o)}finally{a.f()}},deleteNote:function(e){e.notes=e.notes.filter((function(n){return n.name!==e.currentNoteName})),e.currentNoteName=""}}}),f=d.actions,b=f.search,v=f.addNote,p=f.selectNote,h=f.updateNote,E=f.deleteNote,g=function(e){return e.mmap},y=function(e){return e.mmap.notes.filter((function(n){return n.name.includes(e.mmap.search)}))},N=function(e){return e.mmap.notes.find((function(n){return n.name===e.mmap.currentNoteName}))},j=d.reducer,O=Object(i.styled)("div")({name:"Body",class:"b70m24p"});function w(){return r.a.createElement(O,null,r.a.createElement("p",null,r.a.createElement("b",null," Ctrl + Alt + $Number")," open $Number note"),r.a.createElement("p",null,r.a.createElement("b",null," Ctrl + B")," toggle edit mode"),r.a.createElement("p",null,r.a.createElement("b",null," Ctrl + M")," delete note"),r.a.createElement("p",null,r.a.createElement("b",null," Escape ")," close note"))}t(121);var k=t(145),S=t(144),C=t(16),A=Object(i.styled)("header")({name:"Header",class:"h1wuoji1"});function W(){var e=Object(l.c)(g).search,n=Object(l.b)(),t=Object(a.useRef)(null);return Object(C.a)(["control","I"],(function(){var e;return null===(e=t.current)||void 0===e?void 0:e.focus()}),[t]),r.a.createElement(A,null,r.a.createElement(S.a,{ref:t,name:"search",placeholder:"Search... (Ctrl + I to focus)",value:e,onChange:function(e){return n(b(e.target.value))}}),r.a.createElement(k.a,{focusable:!0,disabled:""===e,onClick:function(){return n(v(e))}},"Add"))}t(122);var x=t(66),B=Object(i.styled)("nav")({name:"Navbar",class:"n10xtx2v"});function I(){var e=Object(l.c)(y),n=Object(l.b)();return function(){var e=Object(l.c)(y),n=Object(l.b)(),t=function(t){return Object(C.a)(["control","alt",String(t+1)],(function(){return t>=e.length?null:n(p(e[t].name))}),[e])};t(0),t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9)}(),r.a.createElement(B,null,r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{title:e.name,key:e.name},r.a.createElement(x.a,{onClick:function(){return n(p(e.name))}},e.name))}))))}t(123);var R=t(47),J=t(67),M=t(147),U=t(146),$=function(e){var n=e.className,t=e.children;return r.a.createElement(M.a,{className:"s1o9afm2",language:""===n||void 0===n?"":n.split("-")[1],style:U.a,children:t})};t(129);var _=Object(i.styled)("main")({name:"Main",class:"m1g3thq9"});function L(e){var n=e.note,t=Object(l.b)(),o=Object(a.useState)(""),c=Object(R.a)(o,2),i=c[0],u=c[1],s=Object(a.useState)(""),m=Object(R.a)(s,2),d=m[0],f=m[1],b=Object(a.useRef)(null),v=""===i,g=function(){var e;f(n.name),u(n.body),null===(e=b.current)||void 0===e||e.focus()},y=function(){t(h({name:d,body:i})),f(""),u("")},N=function(){window.confirm("Are you sure?")&&t(E())};return Object(C.a)(["control","B"],(function(){return v?g():y()}),[n,d,i,b]),Object(C.a)(["control","M"],N,[]),Object(C.a)(["Escape"],(function(){return t(p(""))}),[]),r.a.createElement(_,null,r.a.createElement("nav",null,v?r.a.createElement("h1",null,n.name):r.a.createElement(S.a,{value:d,onChange:function(e){return f(e.target.value)}}),r.a.createElement("div",{className:"controls"},v?r.a.createElement(a.Fragment,null,r.a.createElement(k.a,{onClick:g},"Edit"),r.a.createElement(k.a,{onClick:N,unstable_system:{palette:"danger"}},"Delete")):r.a.createElement(k.a,{onClick:y},"Save"))),v?r.a.createElement("div",{id:"body_content",className:"markdown-body"},r.a.createElement(J.a,{children:n.body,options:{overrides:{code:{component:$}}}})):r.a.createElement(S.a,{name:"body",placeholder:"Some note body..",ref:b,value:i,as:"textarea",onChange:function(e){return u(e.target.value)}}))}t(130);var P=Object(i.styled)("div")({name:"BodyWrap",class:"b1rzfy9k"});function T(){var e=Object(l.c)(N);return r.a.createElement("section",null,r.a.createElement(W,null),r.a.createElement(P,null,r.a.createElement(I,null),e?r.a.createElement(L,{note:e}):r.a.createElement(w,null)))}t(131);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null))},z=Object(s.a)({reducer:{mmap:j}});z.subscribe((function(){return localStorage.setItem("mmap-store",JSON.stringify(z.getState().mmap))}));var D=t(148),F=t(75),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:z},r.a.createElement(D.a,{unstable_system:F},r.a.createElement(q,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mmap",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/mmap","/service-worker.js");H?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(n,e)}))}}()},78:function(e,n,t){e.exports=t(137)},83:function(e,n,t){}},[[78,209,210]]]);
//# sourceMappingURL=main.e4ee5299.chunk.js.map