(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[87],{149:function(a,e,n){"use strict";function t(a){!function(a){var e=a.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,n){"string"===typeof e&&(e=[e]),e.forEach((function(e){!function(e,n){var t=a.languages[e];if(t){var o=t["doc-comment"];if(!o){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};o=(t=a.languages.insertBefore(e,"comment",i))["doc-comment"]}if(o instanceof RegExp&&(o=t["doc-comment"]={pattern:o}),Array.isArray(o))for(var r=0,s=o.length;r<s;r++)o[r]instanceof RegExp&&(o[r]={pattern:o[r]}),n(o[r]);else n(o)}}(e,(function(a){a.inside||(a.inside={}),a.inside.rest=n}))}))}}),e.addSupport(["java","javascript","php"],e)}(a)}a.exports=t,t.displayName="javadoclike",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoclike.4fd71bd3.chunk.js.map