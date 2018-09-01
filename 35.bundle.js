(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main.js ***!
  \************************************************************************************************************************************/
/*! exports provided: Position, Range, Location, DiagnosticSeverity, Diagnostic, Command, TextEdit, TextDocumentEdit, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, CompletionItemKind, InsertTextFormat, CompletionItem, CompletionList, MarkedString, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolInformation, CodeActionContext, CodeLens, FormattingOptions, DocumentLink, EOL, TextDocument, TextDocumentSaveReason */function(e,t,n){"use strict";var r,i,o,u,a,c,s,d;n.r(t),n.d(t,"Position",function(){return r}),n.d(t,"Range",function(){return i}),n.d(t,"Location",function(){return o}),n.d(t,"DiagnosticSeverity",function(){return u}),n.d(t,"Diagnostic",function(){return a}),n.d(t,"Command",function(){return c}),n.d(t,"TextEdit",function(){return s}),n.d(t,"TextDocumentEdit",function(){return d}),n.d(t,"WorkspaceChange",function(){return M}),n.d(t,"TextDocumentIdentifier",function(){return f}),n.d(t,"VersionedTextDocumentIdentifier",function(){return l}),n.d(t,"TextDocumentItem",function(){return g}),n.d(t,"MarkupKind",function(){return m}),n.d(t,"CompletionItemKind",function(){return h}),n.d(t,"InsertTextFormat",function(){return p}),n.d(t,"CompletionItem",function(){return v}),n.d(t,"CompletionList",function(){return _}),n.d(t,"MarkedString",function(){return y}),n.d(t,"ParameterInformation",function(){return b}),n.d(t,"SignatureInformation",function(){return w}),n.d(t,"DocumentHighlightKind",function(){return k}),n.d(t,"DocumentHighlight",function(){return C}),n.d(t,"SymbolKind",function(){return I}),n.d(t,"SymbolInformation",function(){return x}),n.d(t,"CodeActionContext",function(){return E}),n.d(t,"CodeLens",function(){return D}),n.d(t,"FormattingOptions",function(){return S}),n.d(t,"DocumentLink",function(){return P}),n.d(t,"EOL",function(){return A}),n.d(t,"TextDocument",function(){return K}),n.d(t,"TextDocumentSaveReason",function(){return F}),function(e){e.create=function(e,t){return{line:e,character:t}},e.is=function(e){var t=e;return O.defined(t)&&O.number(t.line)&&O.number(t.character)}}(r||(r={})),function(e){e.create=function(e,t,n,i){if(O.number(e)&&O.number(t)&&O.number(n)&&O.number(i))return{start:r.create(e,t),end:r.create(n,i)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+i+"]")},e.is=function(e){var t=e;return O.defined(t)&&r.is(t.start)&&r.is(t.end)}}(i||(i={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return O.defined(t)&&i.is(t.range)&&(O.string(t.uri)||O.undefined(t.uri))}}(o||(o={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(u||(u={})),function(e){e.create=function(e,t,n,r,i){var o={range:e,message:t};return O.defined(n)&&(o.severity=n),O.defined(r)&&(o.code=r),O.defined(i)&&(o.source=i),o},e.is=function(e){var t=e;return O.defined(t)&&i.is(t.range)&&O.string(t.message)&&(O.number(t.severity)||O.undefined(t.severity))&&(O.number(t.code)||O.string(t.code)||O.undefined(t.code))&&(O.string(t.source)||O.undefined(t.source))}}(a||(a={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return O.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e;return O.defined(t)&&O.string(t.title)&&O.string(t.title)}}(c||(c={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}}}(s||(s={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return O.defined(t)&&l.is(t.textDocument)&&Array.isArray(t.edits)}}(d||(d={}));var f,l,g,m,h,p,v,_,y,b,w,k,C,I,x,E,D,S,T=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(s.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(s.replace(e,t))},e.prototype.delete=function(e){this.edits.push(s.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),M=function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var n=new T(e.edits);t._textEditChanges[e.textDocument.uri]=n}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new T(e.changes[n]);t._textEditChanges[n]=r}))}return Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(l.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e;if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new T(i),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new T(i),this._textEditChanges[e]=r}return r},e}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return O.defined(t)&&O.string(t.uri)}}(f||(f={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return O.defined(t)&&O.string(t.uri)&&O.number(t.version)}}(l||(l={})),function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e;return O.defined(t)&&O.string(t.uri)&&O.string(t.languageId)&&O.number(t.version)&&O.string(t.text)}}(g||(g={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(m||(m={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(h||(h={})),function(e){e.PlainText=1,e.Snippet=2}(p||(p={})),function(e){e.create=function(e){return{label:e}}}(v||(v={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(_||(_={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}}(y||(y={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(b||(b={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return O.defined(t)&&(i.documentation=t),O.defined(n)?i.parameters=n:i.parameters=[],i}}(w||(w={})),function(e){e.Text=1,e.Read=2,e.Write=3}(k||(k={})),function(e){e.create=function(e,t){var n={range:e};return O.number(t)&&(n.kind=t),n}}(C||(C={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(I||(I={})),function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}}(x||(x={})),function(e){e.create=function(e){return{diagnostics:e}},e.is=function(e){var t=e;return O.defined(t)&&O.typedArray(t.diagnostics,a.is)}}(E||(E={})),function(e){e.create=function(e,t){var n={range:e};return O.defined(t)&&(n.data=t),n},e.is=function(e){var t=e;return O.defined(t)&&i.is(t.range)&&(O.undefined(t.command)||c.is(t.command))}}(D||(D={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return O.defined(t)&&O.number(t.tabSize)&&O.boolean(t.insertSpaces)}}(S||(S={}));var P=function(){return function(){}}();!function(e){e.create=function(e,t){return{range:e,target:t}},e.is=function(e){var t=e;return O.defined(t)&&i.is(t.range)&&(O.undefined(t.target)||O.string(t.target))}}(P||(P={}));var K,F,A=["\n","\r\n","\r"];!function(e){e.create=function(e,t,n,r){return new j(e,t,n,r)},e.is=function(e){var t=e;return!!(O.defined(t)&&O.string(t.uri)&&(O.undefined(t.languageId)||O.string(t.languageId))&&O.number(t.lineCount)&&O.func(t.getText)&&O.func(t.positionAt)&&O.func(t.offsetAt))},e.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var u=0,a=0,c=0;u<i.length&&a<o.length;){var s=n(i[u],o[a]);t[c++]=s<=0?i[u++]:o[a++]}for(;u<i.length;)t[c++]=i[u++];for(;a<o.length;)t[c++]=o[a++];return t}(t,function(e,t){return 0==e.range.start.line-t.range.start.line?e.range.start.character-t.range.start.character:0}),i=n.length,o=r.length-1;o>=0;o--){var u=r[o],a=e.offsetAt(u.range.start),c=e.offsetAt(u.range.end);if(!(c<=i))throw new Error("Ovelapping edit");n=n.substring(0,a)+u.newText+n.substring(c,n.length),i=a}return n}}(K||(K={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(F||(F={}));var O,j=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,i=t.length;if(0===i)return r.create(0,e);for(;n<i;){var o=Math.floor((n+i)/2);t[o]>e?i=o:n=o+1}var u=n-1;return r.create(u,e-t[u])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.func=function(e){return"[object Function]"===t.call(e)},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(O||(O={}))},"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/htmlMode.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/htmlMode.js ***!
  \******************************************************************************************************/
/*! exports provided: setupMode */function(e,t,n){"use strict";n.r(t),n.d(t,"setupMode",function(){return o});var r=n(/*! ./workerManager.js */"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/workerManager.js"),i=n(/*! ./languageFeatures.js */"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/languageFeatures.js");function o(e){var t=new r.WorkerManager(e),n=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},o=e.languageId;monaco.languages.registerCompletionItemProvider(o,new i.CompletionAdapter(n)),monaco.languages.registerDocumentHighlightProvider(o,new i.DocumentHighlightAdapter(n)),monaco.languages.registerLinkProvider(o,new i.DocumentLinkAdapter(n)),"html"===o&&(monaco.languages.registerDocumentFormattingEditProvider(o,new i.DocumentFormattingEditProvider(n)),monaco.languages.registerDocumentRangeFormattingEditProvider(o,new i.DocumentRangeFormattingEditProvider(n)),new i.DiagnosticsAdapter(o,n,e))}},"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/languageFeatures.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/languageFeatures.js ***!
  \**************************************************************************************************************/
/*! exports provided: DiagnosticsAdapter, CompletionAdapter, DocumentHighlightAdapter, DocumentLinkAdapter, DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider */function(e,t,n){"use strict";n.r(t),n.d(t,"DiagnosticsAdapter",function(){return o}),n.d(t,"CompletionAdapter",function(){return f}),n.d(t,"DocumentHighlightAdapter",function(){return l}),n.d(t,"DocumentLinkAdapter",function(){return g}),n.d(t,"DocumentFormattingEditProvider",function(){return h}),n.d(t,"DocumentRangeFormattingEditProvider",function(){return p});var r=n(/*! ./_deps/vscode-languageserver-types/main.js */"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main.js"),i=(monaco.Uri,monaco.Range),o=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var i=n.map(function(e){return function(e,t){var n="number"==typeof t.code?String(t.code):t.code;return{severity:function(e){switch(e){case r.DiagnosticSeverity.Error:return monaco.MarkerSeverity.Error;case r.DiagnosticSeverity.Warning:return monaco.MarkerSeverity.Warning;case r.DiagnosticSeverity.Information:return monaco.MarkerSeverity.Info;case r.DiagnosticSeverity.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t,i)})}).then(void 0,function(e){console.error(e)})},e}();function u(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function a(e){if(e)return{start:u(e.getStartPosition()),end:u(e.getEndPosition())}}function c(e){if(e)return new i(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function s(e){var t=monaco.languages.CompletionItemKind;switch(e){case r.CompletionItemKind.Text:return t.Text;case r.CompletionItemKind.Method:return t.Method;case r.CompletionItemKind.Function:return t.Function;case r.CompletionItemKind.Constructor:return t.Constructor;case r.CompletionItemKind.Field:return t.Field;case r.CompletionItemKind.Variable:return t.Variable;case r.CompletionItemKind.Class:return t.Class;case r.CompletionItemKind.Interface:return t.Interface;case r.CompletionItemKind.Module:return t.Module;case r.CompletionItemKind.Property:return t.Property;case r.CompletionItemKind.Unit:return t.Unit;case r.CompletionItemKind.Value:return t.Value;case r.CompletionItemKind.Enum:return t.Enum;case r.CompletionItemKind.Keyword:return t.Keyword;case r.CompletionItemKind.Snippet:return t.Snippet;case r.CompletionItemKind.Color:return t.Color;case r.CompletionItemKind.File:return t.File;case r.CompletionItemKind.Reference:return t.Reference}return t.Property}function d(e){if(e)return{range:c(e.range),text:e.newText}}var f=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){e.getWordUntilPosition(t);var i=e.uri;return v(n,this._worker(i).then(function(e){return e.doComplete(i.toString(),u(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:s(e.kind)};return e.textEdit&&(t.range=c(e.textEdit.range),t.insertText=e.textEdit.newText),e.insertTextFormat===r.InsertTextFormat.Snippet&&(t.insertText={value:t.insertText}),t});return{isIncomplete:e.isIncomplete,items:t}}}))},e}();var l=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var i=e.uri;return v(n,this._worker(i).then(function(e){return e.findDocumentHighlights(i.toString(),u(t))}).then(function(e){if(e)return e.map(function(e){return{range:c(e.range),kind:function(e){var t=monaco.languages.DocumentHighlightKind;switch(e){case r.DocumentHighlightKind.Read:return t.Read;case r.DocumentHighlightKind.Write:return t.Write;case r.DocumentHighlightKind.Text:return t.Text}return t.Text}(e.kind)}})}))},e}(),g=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,t){var n=e.uri;return v(t,this._worker(n).then(function(e){return e.findDocumentLinks(n.toString())}).then(function(e){if(e)return e.map(function(e){return{range:c(e.range),url:e.target}})}))},e}();function m(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var h=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.format(r.toString(),null,m(t)).then(function(e){if(e&&0!==e.length)return e.map(d)})}))},e}(),p=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return v(r,this._worker(i).then(function(e){return e.format(i.toString(),a(t),m(n)).then(function(e){if(e&&0!==e.length)return e.map(d)})}))},e}();function v(e,t){return t.cancel&&e.onCancellationRequested(function(){return t.cancel()}),t}},"./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/workerManager.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-monaco-editor/node_modules/monaco-editor/esm/vs/language/html/workerManager.js ***!
  \***********************************************************************************************************/
/*! exports provided: WorkerManager */function(e,t,n){"use strict";n.r(t),n.d(t,"WorkerManager",function(){return i});var r=monaco.Promise,i=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return function(e){var t,n,i=new r(function(e,r){t=e,n=r},function(){});return e.then(t,n),i}(this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(n)}).then(function(t){return e}))},e}()}}]);
//# sourceMappingURL=35.bundle.js.map