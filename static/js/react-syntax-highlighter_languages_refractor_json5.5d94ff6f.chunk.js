(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[96,95],{153:function(e,n,t){"use strict";function a(e){e.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(?:e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}}}e.exports=a,a.displayName="json",a.aliases=[]},284:function(e,n,t){"use strict";var a=t(153);function s(e){e.register(a),function(e){var n=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;e.languages.json5=e.languages.extend("json",{property:[{pattern:RegExp(n.source+"(?=\\s*:)"),greedy:!0},{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/,alias:"unquoted"}],string:{pattern:n,greedy:!0},number:/[+-]?(?:NaN|Infinity|0x[a-fA-F\d]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/})}(e)}e.exports=s,s.displayName="json5",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_json5.5d94ff6f.chunk.js.map