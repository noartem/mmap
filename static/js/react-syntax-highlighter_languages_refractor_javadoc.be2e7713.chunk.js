(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[86,87],{162:function(a,e,n){"use strict";function t(a){!function(a){var e=a.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,n){"string"===typeof e&&(e=[e]),e.forEach((function(e){!function(e,n){var t=a.languages[e];if(t){var i=t["doc-comment"];if(!i){var o={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};i=(t=a.languages.insertBefore(e,"comment",o))["doc-comment"]}if(i instanceof RegExp&&(i=t["doc-comment"]={pattern:i}),Array.isArray(i))for(var s=0,r=i.length;s<r;s++)i[s]instanceof RegExp&&(i[s]={pattern:i[s]}),n(i[s]);else n(i)}}(e,(function(a){a.inside||(a.inside={}),a.inside.rest=n}))}))}}),e.addSupport(["java","javascript","php"],e)}(a)}a.exports=t,t.displayName="javadoclike",t.aliases=[]},341:function(a,e,n){"use strict";var t=n(162);function i(a){a.register(t),function(a){var e={code:{pattern:/(^(?:\s*(?:\*\s*)*)).*[^*\s].+$/m,lookbehind:!0,inside:a.languages.java,alias:"language-java"}};a.languages.javadoc=a.languages.extend("javadoclike",{}),a.languages.insertBefore("javadoc","keyword",{"class-name":[{pattern:/(@(?:exception|throws|see|link|linkplain|value)\s+(?:[a-z\d]+\.)*)[A-Z](?:\w*[a-z]\w*)?(?:\.[A-Z](?:\w*[a-z]\w*)?)*/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}}],namespace:{pattern:/(@(?:exception|throws|see|link|linkplain)\s+)(?:[a-z\d]+\.)+/,lookbehind:!0,inside:{punctuation:/\./}},"code-section":[{pattern:/(\{@code\s+)(?:[^{}]|\{[^{}]*\})+?(?=\s*\})/,lookbehind:!0,inside:e},{pattern:/(<(code|tt)>\s*)[\s\S]+?(?=\s*<\/\2>)/,lookbehind:!0,inside:e}],tag:a.languages.markup.tag}),a.languages.javadoclike.addSupport("java",a.languages.javadoc)}(a)}a.exports=i,i.displayName="javadoc",i.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoc.be2e7713.chunk.js.map