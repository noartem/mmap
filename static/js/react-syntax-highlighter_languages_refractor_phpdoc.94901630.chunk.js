(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[142,87],{162:function(a,e,n){"use strict";function o(a){!function(a){var e=a.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,n){"string"===typeof e&&(e=[e]),e.forEach((function(e){!function(e,n){var o=a.languages[e];if(o){var t=o["doc-comment"];if(!t){var r={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};t=(o=a.languages.insertBefore(e,"comment",r))["doc-comment"]}if(t instanceof RegExp&&(t=o["doc-comment"]={pattern:t}),Array.isArray(t))for(var s=0,i=t.length;s<i;s++)t[s]instanceof RegExp&&(t[s]={pattern:t[s]}),n(t[s]);else n(t)}}(e,(function(a){a.inside||(a.inside={}),a.inside.rest=n}))}))}}),e.addSupport(["java","javascript","php"],e)}(a)}a.exports=o,o.displayName="javadoclike",o.aliases=[]},390:function(a,e,n){"use strict";var o=n(162);function t(a){a.register(o),function(a){var e=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;a.languages.phpdoc=a.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+e+"\\s+)?)\\$\\w+"),lookbehind:!0}}),a.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+e),lookbehind:!0,inside:{keyword:/\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,punctuation:/[|\\[\]()]/}}]}),a.languages.javadoclike.addSupport("php",a.languages.phpdoc)}(a)}a.exports=t,t.displayName="phpdoc",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_phpdoc.94901630.chunk.js.map