(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[159],{343:function(e,a,n){"use strict";function s(e){!function(e){var a={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,s=/\\[wsd]|\.|\\p{[^{}]+}/i,i="(?:[^\\\\-]|"+n.source+")",r=RegExp(i+"-"+i),t={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},c=[/\\(?![123][0-7]{2})[1-9]/,{pattern:/\\k<[^<>']+>/,inside:{"group-name":t}}];e.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0},"charset-punctuation":/^\[|\]$/,range:{pattern:r,inside:{escape:n,"range-punctuation":/-/}},"special-escape":a,charclass:s,backreference:c,escape:n}},"special-escape":a,charclass:s,backreference:c,anchor:/[$^]|\\[ABbGZz]/,escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,inside:{"group-name":t}},/\)/],quantifier:/[+*?]|\{(?:\d+,?\d*)\}/,alternation:/\|/},["actionscript","coffescript","flow","javascript","typescript","vala"].forEach((function(a){var n=e.languages[a];n&&(n.regex.inside={"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/,"language-regex":{pattern:/[\s\S]+/,inside:e.languages.regex}})}))}(e)}e.exports=s,s.displayName="regex",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_regex.e480d78d.chunk.js.map