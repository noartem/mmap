(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[185,184],{154:function(t,e,a){"use strict";function n(t){!function(t){function e(t,e,a){return{pattern:RegExp("<#"+t+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+t+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:e,alias:a}}}}t.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(a){var n=t.languages[a],s="language-"+a;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:e("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:e("=",n,s),"class-feature":e("\\+",n,s),standard:e("",n,s)}}}}})}(t)}t.exports=n,n.displayName="t4Templating",n.aliases=[]},367:function(t,e,a){"use strict";var n=a(154);function s(t){t.register(n),t.languages["t4-vb"]=t.languages["t4-templating"].createT4("visual-basic")}t.exports=s,s.displayName="t4Vb",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Vb.dd0a92cb.chunk.js.map