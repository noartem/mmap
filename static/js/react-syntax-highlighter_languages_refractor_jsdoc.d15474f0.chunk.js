(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[94,87],{149:function(e,a,n){"use strict";function t(e){!function(e){var a=e.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,n){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,n){var t=e.languages[a];if(t){var s=t["doc-comment"];if(!s){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};s=(t=e.languages.insertBefore(a,"comment",i))["doc-comment"]}if(s instanceof RegExp&&(s=t["doc-comment"]={pattern:s}),Array.isArray(s))for(var o=0,r=s.length;o<r;o++)s[o]instanceof RegExp&&(s[o]={pattern:s[o]}),n(s[o]);else n(s)}}(a,(function(e){e.inside||(e.inside={}),e.inside.rest=n}))}))}}),a.addSupport(["java","javascript","php"],a)}(e)}e.exports=t,t.displayName="javadoclike",t.aliases=[]},283:function(e,a,n){"use strict";var t=n(149);function s(e){e.register(t),function(e){var a=e.languages.javascript,n=/{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source,t="(@(?:param|arg|argument|property)\\s+(?:"+n+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(t+/[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(t+/\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:a,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{punctuation:/[.,:?=<>|{}()[\]]/}},{pattern:/(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,lookbehind:!0,inside:{punctuation:/\./}}],example:{pattern:/(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^(\s*(?:\*\s*)?).+$/m,lookbehind:!0,inside:a,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(e)}e.exports=s,s.displayName="jsdoc",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsdoc.d15474f0.chunk.js.map