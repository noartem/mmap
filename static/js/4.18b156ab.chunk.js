(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[4],{199:function(e,n,t){},200:function(e,n,t){},201:function(e,n,t){},202:function(e,n,t){},203:function(e,n,t){},204:function(e,n,t){},212:function(e,n,t){"use strict";t.r(n);var a=t(41),r=t(0),c=t.n(r),l=t(3),u=t(63),o=t(187),s=t(64),i=t(30),m=t.n(i),d=t(49),b=t(176),f=t(152),j=t(42),O=t(65),E=Object(l.styled)("li")({name:"Container",class:"c1sh0jtb",vars:{"c1sh0jtb-0":[function(e){return e.background}]}}),v=Object(l.styled)("div")({name:"ButtonContainer",class:"b1v70c6o"}),g=Object(l.styled)("div")({name:"InputControls",class:"i1ef6dd4"});var p=function(){var e=Object(r.useReducer)((function(e){return!e}),!1),n=Object(a.a)(e,2),t=n[0],l=n[1],o=Object(r.useState)(""),i=Object(a.a)(o,2),p=i[0],y=i[1],h=Object(r.useRef)(null),C=Object(u.b)(),k=function(){var e=Object(d.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:null===(n=h.current)||void 0===n||n.focus();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){l(),y("")},x=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===p){e.next=4;break}return e.next=3,C(Object(s.b)(p));case 3:I();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(E,{background:t?"#ebecf0":"rgba(0, 0, 0, 0.2)"},t?c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{ref:h,value:p,onKeyDown:function(e){return"Enter"===e.key&&x()},onChange:function(e){return y(e.target.value)}}),c.a.createElement(g,null,c.a.createElement(b.a,{onClick:x},"Add to the bord"),c.a.createElement(O.b,{onClick:I},c.a.createElement(j.f,{size:24})))):c.a.createElement(v,null,c.a.createElement(O.b,{onClick:k},c.a.createElement(j.c,{size:18}),c.a.createElement("span",null,"Add new column"))))};t(199);var y=t(181),h=t(215),C=t(214),k=t(211),I=Object(l.styled)("li")({name:"Container",class:"cuktt5m"}),x=Object(l.styled)("div")({name:"ButtonContainer",class:"ba7rjm3"}),w=Object(l.styled)("div")({name:"InputControls",class:"i1kzy0b9"});var D=function(e){var n=e.columnId,t=Object(r.useReducer)((function(e){return!e}),!1),l=Object(a.a)(t,2),o=l[0],i=l[1],E=Object(r.useState)(""),v=Object(a.a)(E,2),g=v[0],p=v[1],y=Object(r.useRef)(null),h=Object(u.b)(),C=function(){var e=Object(d.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:null===(n=y.current)||void 0===n||n.focus();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){i(),p("")},D=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===g){e.next=4;break}return e.next=3,h(Object(s.a)({columnId:n,cardName:g}));case 3:k();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(I,null,o?c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{ref:y,value:g,onKeyDown:function(e){return"Enter"===e.key&&D()},onChange:function(e){return p(e.target.value)}}),c.a.createElement(w,null,c.a.createElement(b.a,{onClick:D},"Add to the bord"),c.a.createElement(O.b,{onClick:k},c.a.createElement(j.f,{size:24})))):c.a.createElement(x,null,c.a.createElement(O.b,{onClick:C},c.a.createElement(j.c,{size:18}),c.a.createElement("span",null,"Add new column"))))};t(200);var z=t(157),N=t(188),S=t(210),q=t(189),A=t(84),R=Object(l.styled)("div")({name:"Modal",class:"mp5q2nz"}),T=Object(l.styled)("header")({name:"Header",class:"hvbtemr"}),B=Object(l.styled)("div")({name:"Body",class:"brexm3b"}),H=Object(l.styled)("div")({name:"Content",class:"c8ma29x"}),P=Object(l.styled)("textarea")({name:"Textarea",class:"t3x19i"});var F=function(e){var n=e.card,t=e.close,l=Object(u.b)(),o=Object(r.useRef)(null),i=Object(r.useState)(""),m=Object(a.a)(i,2),d=m[0],b=m[1];return c.a.createElement(R,null,c.a.createElement(T,null,c.a.createElement(O.a,{name:n.name,saveName:function(e){return l(Object(s.f)(Object(A.a)(Object(A.a)({},n),{},{name:e})))}}),c.a.createElement(O.b,{onClick:t},c.a.createElement(j.f,{size:24}))),c.a.createElement(B,null,c.a.createElement(H,null,""===d?c.a.createElement(O.c,{text:n.body}):c.a.createElement(f.a,{name:"body",placeholder:"Some note body..",ref:o,value:d,as:P,onChange:function(e){return b(e.target.value)}}))))};t(201);var J=Object(l.styled)("div")({name:"Container",class:"ce6m5s0"}),K=Object(l.styled)("h3")({name:"Title",class:"tkhipyr"});var M=function(e){var n=e.cardId,t=Object(u.c)(Object(s.k)(n)),a=Object(z.a)();return c.a.createElement(J,null,c.a.createElement(K,null,c.a.createElement(N.a,Object.assign({as:O.b},a),t.name)),c.a.createElement(S.a,a,c.a.createElement(q.a,Object.assign({},a,{"aria-label":"Welcome"}),c.a.createElement(F,{card:t,close:a.toggle}))))};t(202);var W=Object(l.styled)("li")({name:"Container",class:"c1z18h8"}),G=Object(l.styled)("div")({name:"Header",class:"h1bsw81q"}),L=Object(l.styled)("ul")({name:"Cards",class:"c1j0ctmq",vars:{"c1j0ctmq-0":[function(e){return e.isDragging?"30px":"0"}]}});var Q=function(e){var n=e.columnId,t=e.isDragging,a=e.setIsDragging,r=Object(u.c)(Object(s.l)(n)),l=Object(u.b)(),i=Object(y.a)();return c.a.createElement(W,null,c.a.createElement(G,null,c.a.createElement("span",{className:"column-drag-handle"},c.a.createElement(j.d,{size:18})),c.a.createElement(O.a,{name:r.name,saveName:function(e){return l(Object(s.g)({columnId:n,newName:e}))}}),c.a.createElement("div",{className:"column-menu"},c.a.createElement(h.a,Object.assign({},i,{className:"menu-button"}),c.a.createElement(j.e,{size:20})),c.a.createElement(C.a,Object.assign({},i,{"aria-label":"Column controls"}),c.a.createElement(k.a,Object.assign({},i,{onClick:function(){return window.confirm("Are you sure?")&&l(Object(s.e)(n))}}),"Delete Column")))),c.a.createElement(L,{isDragging:t},c.a.createElement(o.Container,{groupName:"column",getChildPayload:function(e){return r.cardsIds[e]},onDrop:function(e){var t=e.removedIndex,a=e.addedIndex,r=e.payload;null===t&&null===a||t===a||(null===t||null===a?null===t?null===a||l(Object(s.m)({cardId:r,columnId:n,newIndex:a})):l(Object(s.d)({cardId:r,columnId:n,fromCards:!1})):l(Object(s.h)({columnId:n,cardId:r,newIndex:a})))},dropPlaceholder:{animationDuration:200,showOnTop:!0,className:"cards-drop-preview"},onDragStart:function(e){return e.isSource&&a(!0)},onDragEnd:function(e){return e.isSource&&a(!1)},dragClass:"card-ghost"},r.cardsIds.map((function(e){return c.a.createElement(o.Draggable,{key:e},c.a.createElement(M,{cardId:e}))}))),c.a.createElement(D,{columnId:n})))};t(203);var U=Object(l.styled)("div")({name:"Container",class:"c8gjxii",vars:{"c8gjxii-0":[function(e){return e.background}]}}),V=Object(l.styled)("ul")({name:"Columns",class:"c3q0tuh"});function X(){var e=Object(u.c)(s.j),n=e.columnOrder,t=e.background,l=Object(u.b)(),i=Object(r.useState)(!1),m=Object(a.a)(i,2),d=m[0],b=m[1];return c.a.createElement(U,{background:t},c.a.createElement(V,null,c.a.createElement(o.Container,{groupName:"board",orientation:"horizontal",onDrop:function(e){var n=e.removedIndex,t=e.addedIndex;return null!==n&&null!==t&&l(Object(s.i)({oldIndex:n,newIndex:t}))},dragHandleSelector:".column-drag-handle",dropPlaceholder:{animationDuration:200,showOnTop:!0,className:"columns-drop-preview"}},n.map((function(e){return c.a.createElement(o.Draggable,{key:"column-"+e},c.a.createElement(Q,{columnId:e,isDragging:d,setIsDragging:b}))}))),c.a.createElement(p,null)))}n.default=function(){return c.a.createElement(X,null)};t(204)}}]);
//# sourceMappingURL=4.18b156ab.chunk.js.map