var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var o=/\blang(?:uage)?-(\w+)\b/i,a=0,W=_self.Prism={util:{encode:function(e){return e instanceof l?new l(e.type,W.util.encode(e.content),e.alias):"Array"===W.util.type(e)?e.map(W.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function(e){switch(W.util.type(e)){case"Object":var a={};for(var t in e)e.hasOwnProperty(t)&&(a[t]=W.util.clone(e[t]));return a;case"Array":return e.map&&e.map(function(e){return W.util.clone(e)})}return e}},languages:{extend:function(e,a){var t=W.util.clone(W.languages[e]);for(var n in a)t[n]=a[n];return t},insertBefore:function(t,e,a,n){var r=(n=n||W.languages)[t];if(2==arguments.length){for(var i in a=e)a.hasOwnProperty(i)&&(r[i]=a[i]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var i in a)a.hasOwnProperty(i)&&(s[i]=a[i]);s[l]=r[l]}return W.languages.DFS(W.languages,function(e,a){a===n[t]&&e!=t&&(this[e]=s)}),n[t]=s},DFS:function(e,a,t,n){for(var r in n=n||{},e)e.hasOwnProperty(r)&&(a.call(e,r,e[r],t||r),"Object"!==W.util.type(e[r])||n[W.util.objId(e[r])]?"Array"!==W.util.type(e[r])||n[W.util.objId(e[r])]||(n[W.util.objId(e[r])]=!0,W.languages.DFS(e[r],a,r,n)):(n[W.util.objId(e[r])]=!0,W.languages.DFS(e[r],a,null,n)))}},plugins:{},highlightAll:function(e,a){var t={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};W.hooks.run("before-highlightall",t);for(var n,r=t.elements||document.querySelectorAll(t.selector),i=0;n=r[i++];)W.highlightElement(n,!0===e,t.callback)},highlightElement:function(e,a,t){for(var n,r,i=e;i&&!o.test(i.className);)i=i.parentNode;i&&(n=(i.className.match(o)||[,""])[1].toLowerCase(),r=W.languages[n]),e.className=e.className.replace(o,"").replace(/\s+/g," ")+" language-"+n,i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(o,"").replace(/\s+/g," ")+" language-"+n);var s={element:e,language:n,grammar:r,code:e.textContent};if(W.hooks.run("before-sanity-check",s),s.code&&s.grammar)if(W.hooks.run("before-highlight",s),a&&_self.Worker){var l=new Worker(W.filename);l.onmessage=function(e){s.highlightedCode=e.data,W.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,t&&t.call(s.element),W.hooks.run("after-highlight",s),W.hooks.run("complete",s)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=W.highlight(s.code,s.grammar,s.language),W.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,t&&t.call(e),W.hooks.run("after-highlight",s),W.hooks.run("complete",s);else W.hooks.run("complete",s)},highlight:function(e,a,t){var n=W.tokenize(e,a);return l.stringify(W.util.encode(n),t)},tokenize:function(e,a){var t=W.Token,n=[e],r=a.rest;if(r){for(var i in r)a[i]=r[i];delete a.rest}e:for(var i in a)if(a.hasOwnProperty(i)&&a[i]){var s=a[i];s="Array"===W.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var o=s[l],u=o.inside,g=!!o.lookbehind,c=!!o.greedy,p=0,d=o.alias;if(c&&!o.pattern.global){var m=o.pattern.toString().match(/[imuy]*$/)[0];o.pattern=RegExp(o.pattern.source,m+"g")}o=o.pattern||o;for(var h=0,f=0;h<n.length;f+=(n[h].matchedStr||n[h]).length,++h){var k=n[h];if(n.length>e.length)break e;if(!(k instanceof t)){o.lastIndex=0;var b=1;if(!(S=o.exec(k))&&c&&h!=n.length-1){if(o.lastIndex=f,!(S=o.exec(e)))break;for(var y=S.index+(g?S[1].length:0),P=S.index+S[0].length,w=h,v=f,_=n.length;w<_&&v<P;++w)(v+=(n[w].matchedStr||n[w]).length)<=y&&(++h,f=v);if(n[h]instanceof t||n[w-1].greedy)continue;b=w-h,k=e.slice(f,v),S.index-=f}if(S){g&&(p=S[1].length);P=(y=S.index+p)+(S=S[0].slice(p)).length;var S,A=k.slice(0,y),x=k.slice(P),$=[h,b];A&&$.push(A);var j=new t(i,u?W.tokenize(S,u):S,d,S,c);$.push(j),x&&$.push(x),Array.prototype.splice.apply(n,$)}}}}}return n},hooks:{all:{},add:function(e,a){var t=W.hooks.all;t[e]=t[e]||[],t[e].push(a)},run:function(e,a){var t=W.hooks.all[e];if(t&&t.length)for(var n,r=0;n=t[r++];)n(a)}}},l=W.Token=function(e,a,t,n,r){this.type=e,this.content=a,this.alias=t,this.matchedStr=n||null,this.greedy=!!r};if(l.stringify=function(a,t,e){if("string"==typeof a)return a;if("Array"===W.util.type(a))return a.map(function(e){return l.stringify(e,t,a)}).join("");var n={type:a.type,content:l.stringify(a.content,t,e),tag:"span",classes:["token",a.type],attributes:{},language:t,parent:e};if("comment"==n.type&&(n.attributes.spellcheck="true"),a.alias){var r="Array"===W.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(n.classes,r)}W.hooks.run("wrap",n);var i="";for(var s in n.attributes)i+=(i?" ":"")+s+'="'+(n.attributes[s]||"")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(i?" "+i:"")+">"+n.content+"</"+n.tag+">"},!_self.document)return _self.addEventListener&&_self.addEventListener("message",function(e){var a=JSON.parse(e.data),t=a.language,n=a.code,r=a.immediateClose;_self.postMessage(W.highlight(n,W.languages[t],t)),r&&_self.close()},!1),_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(W.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(W.highlightAll):window.setTimeout(W.highlightAll,16):document.addEventListener("DOMContentLoaded",W.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,Prism.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,boolean:/\b(true|false)\b/gi,null:/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json,Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold),Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(a){"php"===a.language&&(a.tokenStack=[],a.code=a.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(e){return a.tokenStack.push(e),"{{{PHP"+a.tokenStack.length+"}}}"}))}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var a,t=0;a=e.tokenStack[t];t++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(t+1)+"}}}",Prism.highlight(a,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),Prism.languages.insertBefore("php","variable",{this:/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/(static|self|parent)/,punctuation:/(::|\\)/}}});