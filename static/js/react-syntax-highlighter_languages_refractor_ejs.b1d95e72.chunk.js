(this.webpackJsonpmmap=this.webpackJsonpmmap||[]).push([[48,115],{141:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,s){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof s&&!s(e))return e;for(var o,r=i.length;-1!==t.code.indexOf(o=n(a,r));)++r;return i[r]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,s=Object.keys(t.tokenStack);!function i(r){for(var u=0;u<r.length&&!(o>=s.length);u++){var c=r[u];if("string"===typeof c||c.content&&"string"===typeof c.content){var p=s[o],l=t.tokenStack[p],g="string"===typeof c?c:c.content,f=n(a,p),k=g.indexOf(f);if(k>-1){++o;var m=g.substring(0,k),d=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),h=g.substring(k+f.length),v=[];m&&v.push.apply(v,i([m])),v.push(d),h&&v.push.apply(v,i([h])),"string"===typeof c?r.splice.apply(r,[u,1].concat(v)):c.content=v}}else c.content&&i(c.content)}return r}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},304:function(e,n,t){"use strict";var a=t(141);function o(e){e.register(a),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"ejs")}))}(e)}e.exports=o,o.displayName="ejs",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.b1d95e72.chunk.js.map