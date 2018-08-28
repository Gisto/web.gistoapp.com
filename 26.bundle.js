(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js ***!
  \*****************************************************************************************************/
/*! exports provided: conf, language */function(e,o,n){"use strict";n.r(o),n.d(o,"conf",function(){return t}),n.d(o,"language",function(){return r});var t={comments:{lineComment:"'"},brackets:[["(",")"],["[","]"],["If","EndIf"],["While","EndWhile"],["For","EndFor"],["Sub","EndSub"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]}]},r={defaultToken:"",tokenPostfix:".sb",ignoreCase:!0,brackets:[{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"keyword.tag-if",open:"If",close:"EndIf"},{token:"keyword.tag-while",open:"While",close:"EndWhile"},{token:"keyword.tag-for",open:"For",close:"EndFor"},{token:"keyword.tag-sub",open:"Sub",close:"EndSub"}],keywords:["Else","ElseIf","EndFor","EndIf","EndSub","EndWhile","For","Goto","If","Step","Sub","Then","To","While"],tagwords:["If","Sub","While","For"],operators:[">","<","<>","<=",">=","And","Or","+","-","*","/","="],identifier:/[a-zA-Z_][\w]*/,symbols:/[=><:+\-*\/%\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},[/(@identifier)(?=[.])/,"type"],[/@identifier/,{cases:{"@keywords":{token:"keyword.$0"},"@operators":"operator","@default":"variable.name"}}],[/([.])(@identifier)/,{cases:{$2:["delimiter","type.member"],"@default":""}}],[/\d*\.\d+/,"number.float"],[/\d+/,"number"],[/[()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":"delimiter"}}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],whitespace:[[/[ \t\r\n]+/,""],[/(\').*$/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"C?/,"string","@pop"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9uYWNvLWVkaXRvci9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NiL3NiLmpzIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJkIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsImxhbmd1YWdlIiwiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImlnbm9yZUNhc2UiLCJ0b2tlbiIsImtleXdvcmRzIiwidGFnd29yZHMiLCJvcGVyYXRvcnMiLCJpZGVudGlmaWVyIiwic3ltYm9scyIsImVzY2FwZXMiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsImNhc2VzIiwiQGtleXdvcmRzIiwiQG9wZXJhdG9ycyIsIkBkZWZhdWx0IiwiJDIiLCJ3aGl0ZXNwYWNlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7OzhHQUFBQSxFQUFBQyxFQUFBQyxFQUFBLDZCQUFBQyxJQUtBLElBQUFDLEdBQ0FDLFVBQ0FDLFlBQUEsS0FFQUMsV0FDQSxvQkFDQSxlQUNBLHFCQUNBLGlCQUNBLGlCQUVBQyxtQkFDU0MsS0FBQSxJQUFBQyxNQUFBLElBQUFDLE9BQUEsc0JBQ0FGLEtBQUEsSUFBQUMsTUFBQSxJQUFBQyxPQUFBLHNCQUNBRixLQUFBLElBQUFDLE1BQUEsSUFBQUMsT0FBQSx1QkFHVFIsR0FDQVMsYUFBQSxHQUNBQyxhQUFBLE1BQ0FDLFlBQUEsRUFDQVAsV0FDU1EsTUFBQSxrQkFBQU4sS0FBQSxJQUFBQyxNQUFBLE1BQ0FLLE1BQUEsd0JBQUFOLEtBQUEsSUFBQUMsTUFBQSxNQUVBSyxNQUFBLGlCQUFBTixLQUFBLEtBQUFDLE1BQUEsVUFDQUssTUFBQSxvQkFBQU4sS0FBQSxRQUFBQyxNQUFBLGFBQ0FLLE1BQUEsa0JBQUFOLEtBQUEsTUFBQUMsTUFBQSxXQUNBSyxNQUFBLGtCQUFBTixLQUFBLE1BQUFDLE1BQUEsV0FFVE0sVUFDQSxxREFDQSxvREFFQUMsVUFDQSwwQkFFQUMsV0FBQSx1REFFQUMsV0FBQSxpQkFDQUMsUUFBQSxvQkFDQUMsUUFBQSx3RUFFQUMsV0FDQUMsT0FFYUMsUUFBQSxnQkFFYixnQ0FFQSxlQUNBQyxPQUNBQyxhQUFzQ1gsTUFBQSxjQUN0Q1ksYUFBQSxXQUNBQyxXQUFBLG9CQUlBLHNCQUNBSCxPQUNBSSxJQUFBLDJCQUNBRCxXQUFBLE9BSUEsNEJBQ0EsaUJBRUEseUJBQ0EsWUFDQUgsT0FDQUUsYUFBQSxXQUNBQyxXQUFBLGdCQUlBLHFDQUNBLHlCQUVBRSxhQUNBLGtCQUNBLHNCQUVBQyxTQUNBLHFCQUNBLDZCQUNBLGdDQUNBIiwiZmlsZSI6IjI2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnXFwnJyxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsnKCcsICcpJ10sIFsnWycsICddJ10sXG4gICAgICAgIFsnSWYnLCAnRW5kSWYnXSxcbiAgICAgICAgWydXaGlsZScsICdFbmRXaGlsZSddLFxuICAgICAgICBbJ0ZvcicsICdFbmRGb3InXSxcbiAgICAgICAgWydTdWInLCAnRW5kU3ViJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNiJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYXJyYXknLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICAvLyBTcGVjaWFsIGJyYWNrZXQgc3RhdGVtZW50IHBhaXJzXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1pZicsIG9wZW46ICdJZicsIGNsb3NlOiAnRW5kSWYnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy13aGlsZScsIG9wZW46ICdXaGlsZScsIGNsb3NlOiAnRW5kV2hpbGUnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1mb3InLCBvcGVuOiAnRm9yJywgY2xvc2U6ICdFbmRGb3InIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1zdWInLCBvcGVuOiAnU3ViJywgY2xvc2U6ICdFbmRTdWInIH0sXG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnRWxzZScsICdFbHNlSWYnLCAnRW5kRm9yJywgJ0VuZElmJywgJ0VuZFN1YicsICdFbmRXaGlsZScsXG4gICAgICAgICdGb3InLCAnR290bycsICdJZicsICdTdGVwJywgJ1N1YicsICdUaGVuJywgJ1RvJywgJ1doaWxlJ1xuICAgIF0sXG4gICAgdGFnd29yZHM6IFtcbiAgICAgICAgJ0lmJywgJ1N1YicsICdXaGlsZScsICdGb3InXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFsnPicsICc8JywgJzw+JywgJzw9JywgJz49JywgJ0FuZCcsICdPcicsICcrJywgJy0nLCAnKicsICcvJywgJz0nXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgaWRlbnRpZmllcjogL1thLXpBLVpfXVtcXHddKi8sXG4gICAgc3ltYm9sczogL1s9Pjw6K1xcLSpcXC8lXFwuLF0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIGNsYXNzZXNcbiAgICAgICAgICAgIFsvKEBpZGVudGlmaWVyKSg/PVsuXSkvLCAndHlwZSddLFxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMsIHRhZ3dvcmRzLCBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFsvQGlkZW50aWZpZXIvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndmFyaWFibGUubmFtZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gbWV0aG9kcywgcHJvcGVydGllcywgYW5kIGV2ZW50c1xuICAgICAgICAgICAgWy8oWy5dKShAaWRlbnRpZmllcikvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDInOiBbJ2RlbGltaXRlcicsICd0eXBlLm1lbWJlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9bKClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdkZWxpbWl0ZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvKFxcJykuKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIkM/LywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=