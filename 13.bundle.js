(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{882:function(e,n,o){"use strict";o.r(n),o.d(n,"conf",function(){return t}),o.d(n,"language",function(){return s});var t={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"`",close:"`",notIn:["string"]},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"`",close:"`"},{open:'"',close:'"'},{open:"'",close:"'"}]},s={defaultToken:"",tokenPostfix:".go",keywords:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var","bool","true","false","uint8","uint16","uint32","uint64","int8","int16","int32","int64","float32","float64","complex64","complex128","byte","rune","uint","int","uintptr","string","nil"],operators:["+","-","*","/","%","&","|","^","<<",">>","&^","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=","&^=","&&","||","<-","++","--","==","<",">","=","!","!=","<=",">=",":=","...","(",")","","]","{","}",",",";",".",":"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/\[\[.*\]\]/,"annotation"],[/^\s*#\w+/,"keyword"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\d+[eE]([\-+]?\d+)?/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F]/,"number.hex"],[/0[0-7']*[0-7]/,"number.octal"],[/0[bB][0-1']*[0-1]/,"number.binary"],[/\d[\d']*/,"number"],[/\d/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"],[/`/,"string","@rawstring"],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@doccomment"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],doccomment:[[/[^\/*]+/,"comment.doc"],[/\/\*/,"comment.doc.invalid"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],rawstring:[[/[^\`]/,"string"],[/`/,"string","@pop"]]}}}}]);
//# sourceMappingURL=13.bundle.js.map