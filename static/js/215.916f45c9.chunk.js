(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[215],{135:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2);function r(){return c.a.createElement("div",{className:"s10p7xju"},c.a.createElement("p",null,c.a.createElement("b",null," Alt + S")," focus search input"),c.a.createElement("p",null,c.a.createElement("b",null," Control + Alt + $number")," open ",c.a.createElement("i",null,"$number")," note"),c.a.createElement("p",null,c.a.createElement("b",null," Ctrl + B")," toggle edit mode"),c.a.createElement("p",null,c.a.createElement("b",null," Alt + I ")," delete note"),c.a.createElement("p",null,c.a.createElement("b",null," Escape ")," close note"))}n(135);var u=n(26),o=n(219),i=n(218),m=n(20),s=n(29);var d=Object(u.b)((function(e){return{query:Object(s.f)(e)}}),(function(e){return{search:function(t){return e(Object(s.d)(t))},addNote:function(t){return e(Object(s.a)(t))}}}))((function(e){var t=e.query,n=e.search,l=e.addNote,r=Object(a.useRef)(null);return Object(m.a)("alt+s",(function(){var e;return null===(e=r.current)||void 0===e?void 0:e.focus()}),[r]),c.a.createElement("header",{className:"s1hkm41o"},c.a.createElement(i.a,{ref:r,name:"search",placeholder:"Search... (Alt + S to focus)",value:t,onChange:function(e){return n(e.target.value)}}),c.a.createElement(o.a,{focusable:!0,disabled:""===t,onClick:function(){return l(t)}},"Add"))}));n(137);var b=n(12);var f=function(e){var t=e.url,n=Object(u.d)(s.g);return function(e){var t=Object(u.d)(s.g),n=Object(l.f)(),a=function(a){return Object(m.a)("ctrl+alt+".concat(String(a+1)),(function(){return a>=t.length?null:n.push("".concat(e,"/").concat(t[a].id))}),[t])};a(0),a(1),a(2),a(3),a(4),a(5),a(6),a(7),a(8),a(9)}(t),c.a.createElement("div",{className:"s19visf3"},c.a.createElement("ul",null,n.map((function(e){return c.a.createElement("li",{title:e.name,key:e.id},c.a.createElement(b.b,{to:"".concat(t,"/").concat(e.id)},e.name))}))))};n(138);var E=n(132),v=n(139),p=n(413),h=n(220),j=function(e){var t=e.className,n=e.children;return c.a.createElement(p.a,{className:"sg57n81",language:""===t||void 0===t?"":t.split("-")[1],style:h.a,children:n})};n(152);var O=function(){var e=Object(l.g)().noteId,t=Object(u.d)(Object(s.e)(e)),n=Object(l.f)(),r=Object(u.c)(),d=Object(a.useState)(""),b=Object(E.a)(d,2),f=b[0],p=b[1],h=Object(a.useState)(""),O=Object(E.a)(h,2),g=O[0],y=O[1],N=Object(a.useRef)(null),k=""===f,C=function(){var e;t&&(y(t.name),p(t.body),null===(e=N.current)||void 0===e||e.focus())},S=function(){t&&(r(Object(s.h)({id:t.id,name:g,body:f})),y(""),p(""))},w=function(){t&&window.confirm("Are you sure?")&&r(Object(s.c)(t.id))},A=function(){return n.push("/notes")};return Object(m.a)("ctrl+b",(function(){return k?C():S()}),[t,g,f,N]),Object(m.a)("alt+i",w,[]),Object(m.a)("escape",A,[]),t?c.a.createElement("div",{className:"spe9wzf"},c.a.createElement("nav",null,k?c.a.createElement("h1",{title:t.name},t.name):c.a.createElement(i.a,{value:g,onChange:function(e){return y(e.target.value)}}),c.a.createElement("div",{className:"controls"},k?c.a.createElement(a.Fragment,null,c.a.createElement(o.a,{onClick:C},"Edit"),c.a.createElement(o.a,{onClick:w,unstable_system:{palette:"danger"}},"Delete")):c.a.createElement(o.a,{onClick:S},"Save"))),k?c.a.createElement("div",{id:"body_content",className:"markdown-body"},c.a.createElement(v.a,{children:t.body,options:{overrides:{code:{component:j}}}})):c.a.createElement(i.a,{name:"body",placeholder:"Some note body..",ref:N,value:f,as:"textarea",onChange:function(e){return p(e.target.value)}})):(A(),c.a.createElement("p",null,"Redirecting..."))};n(153);t.default=function(){var e=Object(l.h)(),t=e.path,n=e.url;return c.a.createElement("section",{className:"s1f4n7wo"},c.a.createElement(d,null),c.a.createElement("div",{className:"nav-and-body"},c.a.createElement(f,{url:n}),c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:t},c.a.createElement(r,null)),c.a.createElement(l.a,{path:"".concat(t,"/:noteId")},c.a.createElement(O,null)))))};n(154)}}]);
//# sourceMappingURL=215.916f45c9.chunk.js.map