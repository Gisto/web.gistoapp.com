(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1969:function(e,n){function a(...e){return e.map(e=>(function(e){return e?"string"==typeof e?e:e.source:null})(e)).join("")}e.exports=function(e){const n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"].join(" ")},t={literal:["true","false","undefined","null"].join(" ")},s=/\[.*?\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,l=a("(",/'.*?'/,"|",/".*?"/,"|",s,"|",i,"|",/\.|\//,")+"),r=a("(",s,"|",i,")(?==)"),o={begin:l,lexemes:/[\w.\/]+/},c=e.inherit(o,{keywords:t}),m={begin:/\(/,end:/\)/},d={className:"attr",begin:r,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,c,m]}}},b={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},d,c,m],returnEnd:!0},g=e.inherit(o,{className:"name",keywords:n,starts:e.inherit(b,{end:/\)/})});m.contains=[g];const u=e.inherit(o,{keywords:n,className:"name",starts:e.inherit(b,{end:/}}/})}),p=e.inherit(o,{keywords:n,className:"name"}),h=e.inherit(o,{className:"name",keywords:n,starts:e.inherit(b,{end:/}}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[u],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[p]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[u]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[p]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[h]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[h]}]}}}}]);
//# sourceMappingURL=73.bundle.js.map