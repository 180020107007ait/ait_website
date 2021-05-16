/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
ea("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
ea("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
ea("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
ea("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var p=this||self;function q(a,b){a=a.split(".");b=b||p;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function fa(){}
function u(a,b){a=a.split(".");var c=p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ha(a,b){function c(){}
c.prototype=b.prototype;a.qa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ya=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function ia(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ia);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.fa=b)}
ha(ia,Error);ia.prototype.name="CustomError";function ja(a,b,c){Array.prototype.forEach.call(a,b,c)}
function ka(a,b){for(let d=1;d<arguments.length;d++){const e=arguments[d];var c=typeof e;c="object"!=c?c:e?Array.isArray(e)?"array":c:"null";if("array"==c||"object"==c&&"number"==typeof e.length){c=a.length||0;const f=e.length||0;a.length=c+f;for(let g=0;g<f;g++)a[c+g]=e[g]}else a.push(e)}}
function la(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function ma(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=ma(a[c]);return b}
const na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oa(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<na.length;f++)c=na[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};(class{constructor(a,b){this.h=b===qa?a:""}}).prototype.toString=function(){return this.h.toString()};
var qa={};var ra;a:{var sa=p.navigator;if(sa){var ta=sa.userAgent;if(ta){ra=ta;break a}}ra=""}function w(a){return-1!=ra.indexOf(a)}
;var y=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ua(a){return a?decodeURI(a):a}
function va(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)va(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function wa(a){var b=[],c;for(c in a)va(c,a[c],b);return b.join("&")}
;function xa(a,b,c){if(ya.length){var d=ya.pop();a&&za(d,a,b,c);return d}return new Aa(a,b,c)}
function za(a,b,c,d){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?Ba(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.j=b;a.l=void 0!==c?c:0;a.i=void 0!==d?a.l+d:a.j.length;a.h=a.l}
function Ca(a){var b=a.j;var c=b[a.h+0];var d=c&127;if(128>c)return a.h+=1,d;c=b[a.h+1];d|=(c&127)<<7;if(128>c)return a.h+=2,d;c=b[a.h+2];d|=(c&127)<<14;if(128>c)return a.h+=3,d;c=b[a.h+3];d|=(c&127)<<21;if(128>c)return a.h+=4,d;c=b[a.h+4];d|=(c&15)<<28;if(128>c)return a.h+=5,d>>>0;a.h+=5;128<=b[a.h++]&&128<=b[a.h++]&&128<=b[a.h++]&&128<=b[a.h++]&&a.h++;return d}
class Aa{constructor(a,b,c){this.j=null;this.h=this.i=this.l=0;this.m=!1;a&&za(this,a,b,c)}clone(){return xa(this.j,this.l,this.i-this.l)}clear(){this.j=null;this.h=this.i=this.l=0;this.m=!1}reset(){this.h=this.l}advance(a){this.h+=a}}var ya=[];function Da(a){var b=a.h;(b=b.h==b.i)||(b=a.l)||(b=a.h,b=b.m||0>b.h||b.h>b.i);if(b)return!1;b=Ca(a.h);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.l=!0,!1;a.j=b>>>3;a.i=c;return!0}
function z(a){switch(a.i){case 0:if(0!=a.i)z(a);else{for(a=a.h;a.j[a.h]&128;)a.h++;a.h++}break;case 1:1!=a.i?z(a):a.h.advance(8);break;case 2:if(2!=a.i)z(a);else{var b=Ca(a.h);a.h.advance(b)}break;case 5:5!=a.i?z(a):a.h.advance(4);break;case 3:b=a.j;do{if(!Da(a)){a.l=!0;break}if(4==a.i){a.j!=b&&(a.l=!0);break}z(a)}while(1);break;default:a.l=!0}}
class Ea{constructor(a){this.h=xa(a,void 0,void 0);this.i=this.j=-1;this.l=!1}reset(){this.h.reset();this.i=this.j=-1}advance(a){this.h.advance(a)}};var Ga=w("Safari")&&!((w("Chrome")||w("CriOS"))&&!w("Edge")||w("Coast")||w("Opera")||w("Edge")||w("Edg/")||w("OPR")||w("Firefox")||w("FxiOS")||w("Silk")||w("Android"))&&!(w("iPhone")&&!w("iPod")&&!w("iPad")||w("iPad")||w("iPod"));var Ha={},Ia=null;function Ba(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ja(a,function(f){d[e++]=f});
return d.subarray(0,e)}
function Ja(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),t=Ia[l];if(null!=t)return t;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ka();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ka(){if(!Ia){Ia={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ha[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Ia[f]&&(Ia[f]=e)}}}}
;var La="function"===typeof Uint8Array;function Ma(a){let b;if(Array.isArray(a)){var c=Array(a.length);for(var d=0;d<a.length;d++)b=a[d],null!=b&&(c[d]="object"==typeof b?Ma(b):b);return c}if(La&&a instanceof Uint8Array)return new Uint8Array(a);c={};for(d in a)b=a[d],null!=b&&(c[d]="object"==typeof b?Ma(b):b);return c}
;function Na(){}
let Oa;function Pa(a,b,c,d){a.h=null;Oa&&(b||(b=Oa),Oa=null);b||(b=c?[c]:[]);a.u=c?String(c):void 0;a.l=0===c?-1:0;a.i=b;a:{if(b=a.i.length)if(--b,c=a.i[b],!(null===c||"object"!=typeof c||Array.isArray(c)||La&&c instanceof Uint8Array)){a.m=b-a.l;a.j=c;break a}a.m=Number.MAX_VALUE}a.H={};if(a.I=d)for(b=0;b<d.length;b++)c=d[b],c<a.m?(c+=a.l,a.i[c]=a.i[c]||Qa):(Ra(a),a.j[c]=a.j[c]||Qa)}
const Qa=[];function Ra(a){let b=a.m+a.l;a.i[b]||(a.j=a.i[b]={})}
function A(a,b){if(b<a.m){b+=a.l;var c=a.i[b];return c!==Qa?c:a.i[b]=[]}if(a.j)return c=a.j[b],c===Qa?a.j[b]=[]:c}
function Sa(a){var b=Ta;a.h||(a.h={});if(!a.h[1]){let c=A(a,1),d=[];for(let e=0;e<c.length;e++)d[e]=new b(c[e]);a.h[1]=d}b=a.h[1];b==Qa&&(b=a.h[1]=[]);return b}
function Ua(a){if(a.h)for(var b in a.h){var c=a.h[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&Ua(c[d]);else c&&Ua(c)}return a.i}
Na.prototype.clone=function(){var a=Ma(Ua(this));Oa=a;a=new this.constructor(a);Oa=null;return a};function B(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Va(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Wa(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=l=0}
function b(m){for(var r=g,n=0;64>n;n+=4)r[n/4]=m[n]<<24|m[n+1]<<16|m[n+2]<<8|m[n+3];for(n=16;80>n;n++)m=r[n-3]^r[n-8]^r[n-14]^r[n-16],r[n]=(m<<1|m>>>31)&4294967295;m=e[0];var v=e[1],x=e[2],F=e[3],aa=e[4];for(n=0;80>n;n++){if(40>n)if(20>n){var N=F^v&(x^F);var Fa=1518500249}else N=v^x^F,Fa=1859775393;else 60>n?(N=v&x|F&(v|x),Fa=2400959708):(N=v^x^F,Fa=3395469782);N=((m<<5|m>>>27)&4294967295)+N+aa+Fa+r[n]&4294967295;aa=F;F=x;x=(v<<30|v>>>2)&4294967295;v=m;m=N}e[0]=e[0]+m&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+aa&4294967295}
function c(m,r){if("string"===typeof m){m=unescape(encodeURIComponent(m));for(var n=[],v=0,x=m.length;v<x;++v)n.push(m.charCodeAt(v));m=n}r||(r=m.length);n=0;if(0==l)for(;n+64<r;)b(m.slice(n,n+64)),n+=64,t+=64;for(;n<r;)if(f[l++]=m[n++],t++,64==l)for(l=0,b(f);n+64<r;)b(m.slice(n,n+64)),n+=64,t+=64}
function d(){var m=[],r=8*t;56>l?c(h,56-l):c(h,64-(l-56));for(var n=63;56<=n;n--)f[n]=r&255,r>>>=8;b(f);for(n=r=0;5>n;n++)for(var v=24;0<=v;v-=8)m[r++]=e[n]>>v&255;return m}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,t;a();return{reset:a,update:c,digest:d,ga:function(){for(var m=d(),r="",n=0;n<m.length;n++)r+="0123456789ABCDEF".charAt(Math.floor(m[n]/16))+"0123456789ABCDEF".charAt(m[n]%16);return r}}}
;function Xa(a,b,c){var d=String(p.location.href);return d&&a&&b?[b,Ya(Va(d),a,c||null)].join(" "):null}
function Ya(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],ja(d,function(h){e.push(h)}),Za(e.join(" "));
var f=[],g=[];ja(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];ja(d,function(h){e.push(h)});
a=Za(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Za(a){var b=Wa();b.update(a);return b.ga().toLowerCase()}
;const $a={};function C(){this.h=document||{cookie:""}}
C.prototype.isEnabled=function(){if(!p.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{X:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
C.prototype.set=function(a,b,c){let d,e,f,g=!1,h;"object"===typeof c&&(h=c.Fa,g=c.Ga||!1,f=c.domain||void 0,e=c.path||void 0,d=c.X);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")};
C.prototype.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=pa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
C.prototype.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{X:0,path:b,domain:c});return d};
C.prototype.isEmpty=function(){return!this.h.cookie};
C.prototype.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=pa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function ab(){return!!$a.FPA_SAMESITE_PHASE2_MOD||!1}
function bb(a,b,c,d){(a=p[a])||(a=(new C).get(b));return a?Xa(a,c,d):null}
function cb(){var a=[],b=Va(String(p.location.href));const c=[];var d=p.__SAPISID||p.__APISID||p.__3PSAPISID||p.__OVERRIDE_SID;ab()&&(d=d||p.__1PSAPISID);if(d)var e=!0;else e=new C,d=e.get("SAPISID")||e.get("APISID")||e.get("__Secure-3PAPISID")||e.get("SID"),ab()&&(d=d||e.get("__Secure-1PAPISID")),e=!!d;e&&(d=(e=b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?p.__SAPISID:p.__APISID,d||(d=new C,d=d.get(e?"SAPISID":"APISID")||d.get("__Secure-3PAPISID")),
(e=d?Xa(d,e?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(e),b&&ab()&&((b=bb("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=bb("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a)));return 0==c.length?null:c.join(" ")}
;var db=class{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}put(a){this.l(a);100>this.i&&(this.i++,a.next=this.h,this.h=a)}};function eb(a){p.setTimeout(()=>{throw a;},0)}
;class fb{constructor(){this.i=this.h=null}add(a,b){const c=gb.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var gb=new db(()=>new hb,a=>a.reset());
class hb{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};function ib(a,b){jb||kb();lb||(jb(),lb=!0);mb.add(a,b)}
var jb;function kb(){var a=p.Promise.resolve(void 0);jb=function(){a.then(nb)}}
var lb=!1,mb=new fb;function nb(){for(var a;a=mb.remove();){try{a.h.call(a.scope)}catch(b){eb(b)}gb.put(a)}lb=!1}
;function ob(a){var b=q("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||b}catch(g){e="Not available",c=!0}b=pb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,qb[c])c=qb[c];else{c=String(c);if(!qb[c]){var f=/function\s+([^\(]+)/m.exec(c);qb[c]=f?f[1]:"[Anonymous]"}c=qb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function pb(a,b){b||(b={});b[rb(a)]=!0;var c=a.stack||"";(a=a.fa)&&!b[rb(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=pb(a,b));return c}
function rb(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var qb={};function sb(){this.j=this.j;this.l=this.l}
sb.prototype.j=!1;sb.prototype.dispose=function(){this.j||(this.j=!0,this.H())};
sb.prototype.H=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function D(a){this.s=0;this.aa=void 0;this.G=this.C=this.F=null;this.K=this.N=!1;if(a!=fa)try{var b=this;a.call(void 0,function(c){E(b,2,c)},function(c){E(b,3,c)})}catch(c){E(this,3,c)}}
function tb(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
tb.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var ub=new db(function(){return new tb},function(a){a.reset()});
function vb(a,b,c){var d=ub.get();d.i=a;d.onRejected=b;d.context=c;return d}
function wb(a){if(a instanceof D)return a;var b=new D(fa);E(b,2,a);return b}
D.prototype.then=function(a,b,c){return xb(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
D.prototype.$goog_Thenable=!0;D.prototype.cancel=function(a){if(0==this.s){var b=new yb(a);ib(function(){zb(this,b)},this)}};
function zb(a,b){if(0==a.s)if(a.F){var c=a.F;if(c.C){for(var d=0,e=null,f=null,g=c.C;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.s&&1==d?zb(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Ab(c),Bb(c,e,3,b)))}a.F=null}else E(a,3,b)}
function Cb(a,b){a.C||2!=a.s&&3!=a.s||Db(a);a.G?a.G.next=b:a.C=b;a.G=b}
function xb(a,b,c,d){var e=vb(null,null,null);e.h=new D(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof yb?g(h):f(k)}catch(l){g(l)}}:g});
e.h.F=a;Cb(a,e);return e.h}
D.prototype.ta=function(a){this.s=0;E(this,2,a)};
D.prototype.va=function(a){this.s=0;E(this,3,a)};
function E(a,b,c){if(0==a.s){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.s=1;a:{var d=c,e=a.ta,f=a.va;if(d instanceof D){Cb(d,vb(e||fa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if("object"==h&&null!=d||"function"==h)try{var k=d.then;if("function"===typeof k){Eb(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.aa=c,a.s=b,a.F=null,Db(a),3!=b||c instanceof yb||Fb(a,c))}}
function Eb(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Db(a){a.N||(a.N=!0,ib(a.ha,a))}
function Ab(a){var b=null;a.C&&(b=a.C,a.C=b.next,b.next=null);a.C||(a.G=null);return b}
D.prototype.ha=function(){for(var a;a=Ab(this);)Bb(this,a,this.s,this.aa);this.N=!1};
function Bb(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.K;a=a.F)a.K=!1;if(b.h)b.h.F=null,Gb(b,c,d);else try{b.j?b.i.call(b.context):Gb(b,c,d)}catch(e){Hb.call(null,e)}ub.put(b)}
function Gb(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Fb(a,b){a.K=!0;ib(function(){a.K&&Hb.call(null,b)})}
var Hb=eb;function yb(a){ia.call(this,a)}
ha(yb,ia);yb.prototype.name="cancel";function G(a){sb.call(this);this.U=1;this.m=[];this.u=0;this.h=[];this.i={};this.da=!!a}
ha(G,sb);G.prototype.ca=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.U;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.U=e+3;d.push(e);return e};
G.prototype.T=function(a){var b=this.h[a];if(b){var c=this.i[b];if(0!=this.u)this.m.push(a),this.h[a+1]=fa;else{if(c){var d=Array.prototype.indexOf.call(c,a,void 0);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.h[a];delete this.h[a+1];delete this.h[a+2]}}return!!b};
G.prototype.I=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.da)for(e=0;e<c.length;e++){var g=c[e];Ib(this.h[g+1],this.h[g+2],d)}else{this.u++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.u--,0<this.m.length&&0==this.u)for(;c=this.m.pop();)this.T(c)}}return 0!=e}return!1};
function Ib(a,b,c){ib(function(){a.apply(b,c)})}
G.prototype.clear=function(a){if(a){var b=this.i[a];b&&(ja(b,this.T,this),delete this.i[a])}else this.h.length=0,this.i={}};
G.prototype.H=function(){G.qa.H.call(this);this.clear();this.m.length=0};/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Jb="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Kb=["notification/convert_endpoint_to_url"],Lb=["notification/record_interactions"],Mb=["notification_registration/set_registration"];var Nb=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var Ob=["notifications_register","notifications_check_registration"];var Pb=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};let Qb=null;function H(a,b){const c={};c.key=a;c.value=b;return Rb().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function Sb(){return H("IndexedDBCheck","testing IndexedDB").then(()=>I("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function I(a){const b=new Pb("Error accessing DB");return Rb().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function Rb(){return Qb?Promise.resolve(Qb):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Qb=d,a(Qb);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Rb()};
c.onupgradeneeded=Tb})}
function Tb(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const Ub={["WEB_UNPLUGGED"]:"^unplugged/",["WEB_UNPLUGGED_ONBOARDING"]:"^unplugged/",["WEB_UNPLUGGED_OPS"]:"^unplugged/",["WEB_UNPLUGGED_PUBLIC"]:"^unplugged/",["WEB_CREATOR"]:"^creator/",["WEB_KIDS"]:"^kids/",["WEB_EXPERIMENTS"]:"^experiments/",["WEB_MUSIC"]:"^music/",["WEB_REMIX"]:"^music/",["WEB_MUSIC_EMBEDDED_PLAYER"]:"^music/",["WEB_MUSIC_EMBEDDED_PLAYER"]:"^main_app/|^sfv/"};
function Vb(a){if(1===a.length)return a[0];var b=Ub.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Ub).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Wb(a){return`/youtubei/v1/${Vb(a)}`}
;const J=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",J);function K(a){var b=arguments;1<b.length?J[b[0]]=b[1]:1===b.length&&Object.assign(J,b[0])}
function L(a,b){return a in J?J[a]:b}
;var Xb=class extends Na{constructor(a){super();Pa(this,a,0,null)}};var Yb=class extends Na{constructor(a){super();Pa(this,a,"yt.sw.adr",null)}};function M(a){a=Zb(a);return"string"===typeof a&&"false"===a?!1:!!a}
function $b(a,b){a=Zb(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Zb(a){const b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
;let ac=0;u("ytDomDomGetNextId",q("ytDomDomGetNextId")||(()=>++ac));const bc=[];function cc(a){bc.forEach(b=>b(a))}
function dc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ec(b)}}:a}
function ec(a){var b=q("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),K("ERRORS",b));cc(a)}
function fc(a){var b=q("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),K("ERRORS",b))}
;u("ytEventsEventsListeners",p.ytEventsEventsListeners||{});u("ytEventsEventsCounter",p.ytEventsEventsCounter||{count:0});function gc(a,b){"function"===typeof a&&(a=dc(a));return window.setTimeout(a,b)}
;var hc=class{};var ic=class extends hc{start(){const a=q("yt.scheduler.instance.start");a&&a()}};ic.h||(ic.h=new ic);const jc=/^[\w.]*$/,kc={q:!0,search_query:!0};function lc(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=mc(h[0]||""),l=mc(h[1]||"");k in c?Array.isArray(c[k])?ka(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(lc);d.args=[{key:e,value:h[1],query:a,method:nc==l?"unchanged":l}];kc.hasOwnProperty(e)||fc(d)}}return c}
const nc=String(lc);function oc(a){"?"==a.charAt(0)&&(a=a.substr(1));return lc(a,"&")}
function pc(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=oc(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=wa(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function qc(a){if(!b)var b=window.location.href;const c=a.match(y)[1]||null,d=ua(a.match(y)[3]||null);c&&d?(a=a.match(y),b=b.match(y),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ua(b.match(y)[3]||null)==d&&(Number(b.match(y)[4]||null)||null)==(Number(a.match(y)[4]||null)||null):!0;return a}
function mc(a){return a&&a.match(jc)?a:decodeURIComponent(a.replace(/\+/g," "))}
;let rc=!1;function sc(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=tc(a,b);const d=uc(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||p;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=t=>{t=t||{};k?b.onSuccess&&b.onSuccess.call(e,t,h):b.onError&&b.onError.call(e,t,h);b.onFinish&&b.onFinish.call(e,t,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
b.onFetchTimeout&&0<b.timeout&&(g=gc(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||p))},b.timeout))}
function tc(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=L("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=pc(a,b||{},!0);return a}
function uc(a,b){const c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0);var e=b.postBody||"",f=b.postParams;const g=L("XSRF_FIELD_NAME",void 0);let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ua(a.match(y)[3]||null)&&!b.withCredentials&&ua(a.match(y)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=oc(e),oa(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):wa(e));if(!(a=e)&&(a=f)){a:{for(const k in f){f=!1;break a}f=!0}a=!f}!rc&&a&&"POST"!=b.method&&(rc=!0,ec(Error("AJAX request with postData should use POST")));return e}
;p.ytPubsubPubsubInstance||new G;const O=window;var P=O.ytcsi&&O.ytcsi.now?O.ytcsi.now:O.performance&&O.performance.timing&&O.performance.now&&O.performance.timing.navigationStart?()=>O.performance.timing.navigationStart+O.performance.now():()=>(new Date).getTime();const vc=$b("initial_gel_batch_timeout",2E3),wc=Math.pow(2,16)-1;let xc=null,yc=0,Q=void 0,zc=0,Ac=0,Bc=0,Cc=!0;const Dc=p.ytLoggingTransportGELQueue_||new Map,Ec=p.ytLoggingTransportTokensToCttTargetIds_||{};
function Fc(a,b){if("log_event"===a.endpoint){var c="";a.J?c="visitorOnlyApprovedKey":a.A&&(Ec[a.A.token]=Gc(a.A),c=a.A.token);var d=Dc.get(c)||[];Dc.set(c,d);d.push(a.payload);b&&(Q=new b);a=$b("tvhtml5_logging_max_batch")||$b("web_logging_max_batch")||100;b=P();d.length>=a?Hc({writeThenSend:!0}):10<=b-Bc&&(Ic(),Bc=b)}}
function Jc(a,b){if("log_event"===a.endpoint){var c="";a.J?c="visitorOnlyApprovedKey":a.A&&(Ec[a.A.token]=Gc(a.A),c=a.A.token);var d=new Map;d.set(c,[a.payload]);b&&(Q=new b);return new D(e=>{Q&&Kc(Q)?Lc(d,e,{bypassNetworkless:!0}):e()})}}
function Hc(a={}){new D(b=>{window.clearTimeout(zc);window.clearTimeout(Ac);Ac=0;Q&&Kc(Q)?(Lc(Dc,b,a),Dc.clear()):(Ic(),b())})}
function Ic(){M("web_gel_timeout_cap")&&!Ac&&(Ac=gc(()=>{Hc({writeThenSend:!0})},6E4));
window.clearTimeout(zc);let a=L("LOGGING_BATCH_TIMEOUT",$b("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Cc&&(a=vc);zc=gc(()=>{Hc({writeThenSend:!0})},a)}
function Lc(a,b,c={}){var d=Q;const e=Math.round(P());let f=a.size;for(const [h,k]of a){a=ma({context:Mc(d.h||Nc())});a.events=k;var g=Ec[h];g&&Oc(a,h,g);delete Ec[h];g="visitorOnlyApprovedKey"===h;Pc(a,e,g);Qc(d,a,{retry:!0,onSuccess:()=>{f--;f||b();yc=Math.round(P()-e)},
onError:()=>{f--;f||b()},
Ca:c,J:g});Cc=!1}}
function Pc(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID",void 0))&&((c=L("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*wc/2)),c++,c>wc&&(c=1),K("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,xc&&yc&&M("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:xc,roundtripMs:String(yc)}),xc=b,yc=0)}
function Oc(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Gc(a){const b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;const Rc=p.ytLoggingGelSequenceIdObj_||{};function Sc(a,b,c,d={}){const e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=q("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,Rc[b]=b in Rc?Rc[b]+1:0,a.sequence={index:Rc[b],groupKey:b},d.Aa&&delete Rc[d.ba]);(d.Ha?Jc:Fc)({endpoint:"log_event",payload:e,A:d.A,J:d.J},c)}
;function Tc(){if(!p.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return p.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":p.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":p.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":p.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;u("ytglobal.prefsUserPrefsPrefs_",q("ytglobal.prefsUserPrefsPrefs_")||{});const Uc={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Vc={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Wc(){const a=p.navigator;return a?a.connection:void 0}
;function Xc(){return"INNERTUBE_API_KEY"in J&&"INNERTUBE_API_VERSION"in J}
function Nc(){return{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),ia:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ja:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),la:L("INNERTUBE_CONTEXT_HL",void 0),ka:L("INNERTUBE_CONTEXT_GL",void 0),ma:L("INNERTUBE_HOST_OVERRIDE",void 0)||"",oa:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),na:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Mc(a){const b={client:{hl:a.la,gl:a.ka,clientName:a.ja,clientVersion:a.innertubeContextClientVersion,configInfo:a.ia}};var c=p.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=L("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];const d=L("EXPERIMENTS_FORCED_FLAGS",{});for(var e in d)c.push({key:e,value:String(d[e])});e=L("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request=
{internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!M("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Tc()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!M("music_web_display_mode_killswitch")){var h;b.client.Z=null!=(h=b.client.Z)?h:{};b.client.Z.webDisplayMode=Tc()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=
a.appInstallData);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a:{if(h=Wc()){a=Uc[h.type||"unknown"]||"CONN_UNKNOWN";h=Uc[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);M("web_log_effective_connection_type")&&(a=Wc(),a=null!==a&&void 0!==a&&a.effectiveType?Vc.hasOwnProperty(a.effectiveType)?
Vc[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f=L("DEVICE","");e={};for(const [k,l]of Object.entries(oc(f)))"cbrand"===k?e.deviceMake=l:"cmodel"===k?e.deviceModel=l:"cbr"===k?e.browserName=l:"cbrver"===k?e.browserVersion=l:"cos"===k?e.osName=l:"cosver"===k?e.osVersion=l:"cplatform"===k&&(e.platform=l);b.client=h.call(a,g,e);return b}
function Yc(a,b,c){c=void 0===c?{}:c;const d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.xa||L("AUTHORIZATION"))||(a?b=`Bearer ${q("gapi.auth.getToken")().wa}`:b=cb());b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;const Zc=["client.name","client.version"];function $c(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?Zc.includes(b.key):!1);
return a}
;const ad=q("ytPubsub2Pubsub2Instance")||new G;G.prototype.subscribe=G.prototype.ca;G.prototype.unsubscribeByKey=G.prototype.T;G.prototype.publish=G.prototype.I;G.prototype.clear=G.prototype.clear;u("ytPubsub2Pubsub2Instance",ad);u("ytPubsub2Pubsub2SubscribedKeys",q("ytPubsub2Pubsub2SubscribedKeys")||{});u("ytPubsub2Pubsub2TopicToKeys",q("ytPubsub2Pubsub2TopicToKeys")||{});u("ytPubsub2Pubsub2IsAsync",q("ytPubsub2Pubsub2IsAsync")||{});u("ytPubsub2Pubsub2SkipSubKey",null);function bd(a){const b={};var c=cb();c&&(b.Authorization=c,c=a=null===a||void 0===a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in J||(b["X-Origin"]=window.location.origin),M("pageid_as_header_web")&&void 0===a&&"DELEGATED_SESSION_ID"in J&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
var cd=class{constructor(){this.ra=!0}};var dd={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var ed=class{isSupported(){return!0}};const R=[];let S,fd=!1;function gd(a){fd||(S?S.handleError(a):(R.push({type:"ERROR",payload:a}),10<R.length&&R.shift()))}
function hd(a,b){fd||(S?S.L(a,b):(R.push({type:"EVENT",eventType:a,payload:b}),10<R.length&&R.shift()))}
;function id(){if(void 0!==L("DATASYNC_ID",void 0))return L("DATASYNC_ID",void 0);throw Error("Datasync ID not set");}
;function jd(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function kd(a){return a.substr(0,a.indexOf(":"))||a}
;const ld={["AUTH_INVALID"]:"No user identifier specified.",["EXPLICIT_ABORT"]:"Transaction was explicitly aborted.",["IDB_NOT_SUPPORTED"]:"IndexedDB is not supported.",["MISSING_OBJECT_STORE"]:"Object store not created.",["UNKNOWN_ABORT"]:"Transaction was aborted for unknown reasons.",["QUOTA_EXCEEDED"]:"The current transaction exceeded its quota limitations.",["QUOTA_MAYBE_EXCEEDED"]:"The current transaction may have failed because of exceeding quota limitations.",["EXECUTE_TRANSACTION_ON_CLOSED_DB"]:"Can't start a transaction on a closed database"},
md={["AUTH_INVALID"]:"ERROR",["EXECUTE_TRANSACTION_ON_CLOSED_DB"]:"WARNING",["EXPLICIT_ABORT"]:"IGNORED",["IDB_NOT_SUPPORTED"]:"ERROR",["MISSING_OBJECT_STORE"]:"ERROR",["QUOTA_EXCEEDED"]:"WARNING",["QUOTA_MAYBE_EXCEEDED"]:"WARNING",["UNKNOWN_ABORT"]:"WARNING"},nd={["AUTH_INVALID"]:!1,["EXECUTE_TRANSACTION_ON_CLOSED_DB"]:!1,["EXPLICIT_ABORT"]:!1,["IDB_NOT_SUPPORTED"]:!1,["MISSING_OBJECT_STORE"]:!1,["QUOTA_EXCEEDED"]:!1,["QUOTA_MAYBE_EXCEEDED"]:!0,["UNKNOWN_ABORT"]:!0};
var T=class extends Pb{constructor(a,b={},c=ld[a],d=md[a],e=nd[a]){super(c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}},od=class extends T{constructor(a){super("MISSING_OBJECT_STORE",{Ba:a},ld.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,od.prototype)}};
const pd=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function qd(a,b,c){b=kd(b);let d;d=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(d instanceof T)return d;if("QuotaExceededError"===d.name)return new T("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Ga&&"UnknownError"===d.name)return new T("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&pd.some(e=>d.message.includes(e)))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new T("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Da:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function rd(a){if(!a)throw Error();throw a;}
function sd(a){return a}
function td(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof U?ud(a,b,f,d,e):d(f)}catch(f){e(f)}}
function vd(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof U?ud(a,b,f,d,e):d(f)}catch(f){e(f)}}
function ud(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof U?ud(a,b,f,d,e):d(f)},f=>{e(f)})}
var U=class{constructor(a){this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=c=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:c};for(const d of this.h)d()}};
const b=c=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",reason:c};for(const d of this.onRejected)d()}};
try{this.i(a,b)}catch(c){b(c)}}static all(a){return new U((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)U.resolve(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})})}static resolve(a){return new U((b,c)=>{a instanceof U?a.then(b,c):b(a)})}static reject(a){return new U((b,c)=>{c(a)})}then(a,b){const c=null!==a&&void 0!==a?a:sd,d=null!==b&&void 0!==b?b:rd;
return new U((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{td(this,this,c,e,f)}),this.onRejected.push(()=>{vd(this,this,d,e,f)})):"FULFILLED"===this.state.status?td(this,this,c,e,f):"REJECTED"===this.state.status&&vd(this,this,d,e,f)})}catch(a){return this.then(void 0,a)}};function wd(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function xd(a){return new Promise((b,c)=>{wd(a,b,c)})}
function V(a){return new U((b,c)=>{wd(a,b,c)})}
;function yd(a,b){return new U((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()})}
;function W(a,b,c,d){return B(a,function*(){var e={mode:"readonly",D:!1};"string"===typeof c?e.mode=c:e=c;this.transactionCount++;const f=e.D?$b("ytidb_transaction_try_count",1):1;let g=0,h;for(;!h;){g++;const l=Math.round(P());try{const t=this.h.transaction(b,e.mode);var k=d;const m=new zd(t),r=yield Ad(m,k),n=Math.round(P());Bd(this,l,n,g,void 0,b.join(),e);return r}catch(t){k=Math.round(P());const m=qd(t,this.h.name,b.join());if(m instanceof T&&!m.h||g>=f)Bd(this,l,k,g,m,b.join(),e),h=m}}return Promise.reject(h)})}
function Cd(a,b,c){a=a.h.createObjectStore(b,c);return new Dd(a)}
function Bd(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&hd("QUOTA_EXCEEDED",{dbName:kd(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(hd("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Ed(a,!1,d,f,b),gd(e)):Ed(a,!0,d,f,b)}
function Ed(a,b,c,d,e){hd("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
var Fd=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}add(a,b,c){return W(this,[a],{mode:"readwrite",D:!0},d=>X(d,a).add(b,c))}clear(a){return W(this,[a],{mode:"readwrite",
D:!0},b=>X(b,a).clear())}close(){var a;
this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()}count(a,b){return W(this,[a],{mode:"readonly",D:!0},c=>X(c,a).count(b))}delete(a,b){return W(this,[a],{mode:"readwrite",
D:!0},c=>X(c,a).delete(b))}get(a,b){return W(this,[a],{mode:"readonly",
D:!0},c=>X(c,a).get(b))}put(a,b,c){return W(this,[a],{mode:"readwrite",
D:!0},d=>X(d,a).put(b,c))}};
function Gd(a,b,c){a=a.h.openCursor(b.query,b.direction);return Hd(a).then(d=>yd(d,c))}
function Id(a,b){return Gd(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
var Dd=class{constructor(a){this.h=a}add(a,b){return V(this.h.add(a,b))}clear(){return V(this.h.clear()).then(()=>{})}count(a){return V(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Id(this,a):V(this.h.delete(a))}get(a){return V(this.h.get(a))}index(a){return new Jd(this.h.index(a))}put(a,b){return V(this.h.put(a,b))}};
function Ad(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
function X(a,b){b=a.h.objectStore(b);let c=a.i.get(b);c||(c=new Dd(b),a.i.set(b,c));return c}
var zd=class{constructor(a){this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.aborted){d=T;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.aborted=!0;throw new T("EXPLICIT_ABORT");}};function Kd(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Hd(a).then(f=>yd(f,c))}
var Jd=class{constructor(a){this.h=a}count(a){return V(this.h.count(a))}delete(a){return Kd(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return V(this.h.get(a))}getKey(a){return V(this.h.getKey(a))}};
function Hd(a){return V(a).then(b=>null===b?null:new Ld(a,b))}
var Ld=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return Hd(this.request)}continue(a){this.cursor.continue(a);return Hd(this.request)}delete(){return V(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}update(a){return V(this.cursor.update(a))}};function Md(a,b,c){return B(this,function*(){const d=self.indexedDB.open(a,b),e=c.blocked,f=c.blocking,g=c.sa,h=c.upgrade,k=c.closed;let l;const t=()=>{l||(l=new Fd(d.result,{closed:k}));return l};
d.addEventListener("upgradeneeded",r=>{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===d.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&hd("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:kd(a)});const n=t(),v=new zd(d.transaction);h&&h(n,r.oldVersion,r.newVersion,v)});
e&&d.addEventListener("blocked",()=>{e()});
const m=yield xd(d);f&&m.addEventListener("versionchange",()=>{f(t())});
m.addEventListener("close",()=>{hd("IDB_UNEXPECTEDLY_CLOSED",{dbName:kd(a),dbVersion:m.version});g&&g()});
return t()})}
function Nd(a,b,c={}){return Md(a,b,c)}
function Od(a,b={}){return B(this,function*(){const c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",()=>{d()});
yield xd(c)})}
;function Y(a){if(!a.h){let b;const c=()=>{a.h===b&&(a.h=void 0)},d={blocking:f=>{f.close()},
closed:c,sa:c,upgrade:a.options.upgrade},e=()=>B(a,function*(){try{const k=yield this.i(this.name,this.options.version,d);a:{var f=k,g=this.options;for(const l of Object.keys(g.O))if(!f.h.objectStoreNames.contains(l)){var h=l;break a}h=void 0}if(void 0!==h){if(!this.j)return this.j=!0,yield this.delete(),e();throw new od(h);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&"An attempt was made to open a database using a lower version than the existing version."===
k.message)return this.i(this.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0}));c();throw k;}});
b=e();a.h=b}return a.h}
var Pd=class{constructor(a,b){this.name=a;this.options=b;this.j=!1}i(a,b,c={}){return Nd(a,b,c)}delete(a={}){return Od(this.name,a)}};const Qd=new Pd("YtIdbMeta",{O:{databases:!0},upgrade(a,b){1>b&&Cd(a,"databases",{keyPath:"actualName"})}});function Rd(a){return B(this,function*(){return W(yield Y(Qd),["databases"],{D:!0,mode:"readwrite"},b=>{const c=X(b,"databases");return c.get(a.actualName).then(d=>{if(d?a.actualName!==d.actualName||a.publicName!==d.publicName||a.userIdentifier!==d.userIdentifier||a.clearDataOnAuthChange!==d.clearDataOnAuthChange:1)return c.put(a).then(()=>{})})})})}
function Sd(a){return B(this,function*(){return(yield Y(Qd)).delete("databases",a)})}
;let Td;function Ud(){return B(this,function*(){return new ed})}
function Vd(){if(void 0!==Td)return Td;fd=!0;return Td=Ud().then(a=>{fd=!1;return a.isSupported()})}
;function Wd(a){try{id();var b=!0}catch(c){b=!1}if(!b)throw a=new T("AUTH_INVALID"),gd(a),a;b=id();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function Xd(a,b,c,d){var e;return B(this,function*(){yield Yd({caller:"openDbImpl",publicName:a,version:b});jd(a);let f;f=c?{actualName:a,publicName:a,userIdentifier:void 0}:Wd(a);f.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1;try{return yield Rd(f),yield Nd(f.actualName,b,d)}catch(g){try{yield Sd(f.actualName)}catch(h){}throw g;}})}
function Yd(a){return B(this,function*(){if(!(yield Vd())){const b=new T("IDB_NOT_SUPPORTED",{context:a});gd(b);throw b;}})}
function Zd(a,b,c={}){return Xd(a,b,!1,c)}
function $d(a,b,c={}){return Xd(a,b,!0,c)}
function ae(a,b={}){return B(this,function*(){if(yield Vd()){jd(a);var c=Wd(a);yield Od(c.actualName,b);yield Sd(c.actualName)}})}
function be(a,b={}){return B(this,function*(){if(yield Vd())jd(a),yield Od(a,b),yield Sd(a)})}
;var ce=class extends Pd{constructor(a,b){super(a,b);this.options=b;jd(a)}i(a,b,c={}){return(this.options.R?$d:Zd)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))}delete(a={}){return(this.options.R?be:ae)(this.name,a)}};function de(a,b){let c;return()=>{c||(c=new ce(a,b));return c}}
;let ee;function fe(){ee||(ee=de("LogsDatabaseV2",{O:{["LogsRequestsStore"]:!0,["sapisid"]:!0,["SWHealthLog"]:!0},R:!M("nwl_use_ytidb_partitioning"),upgrade(a,b){2>b&&(Cd(a,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Cd(a,"sapisid"));3>b&&Cd(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},version:3}));return Y(ee())}
function ge(a){return B(this,function*(){var b=yield fe(),c=b.put,d=L("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=$c(e.clientError));e.interface=d;return c.call(b,"SWHealthLog",e)})}
;const he=p.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,isIdbSupported:!1,potentialEsfErrorCounter:0};M("export_networkless_options")&&u("ytNetworklessLoggingInitializationOptions",he);function Kc(a){!a.h&&Xc()&&(a.h=Nc());return!!a.h}
function Qc(a,b,c){!L("VISITOR_DATA")&&.01>Math.random()&&fc(new Pb("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!Kc(a))throw a=new Pb("innertube xhrclient not ready","log_event",b,c),ec(a),a;const d={headers:{"Content-Type":"application/json"},method:"POST",postParams:b,postBodyFormat:"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(k,l)=>{if(c.onSuccess)c.onSuccess(l)},
onFetchSuccess:k=>{if(c.onSuccess)c.onSuccess(k)},
onError:(k,l)=>{if(c.onError)c.onError(l)},
onFetchError:k=>{if(c.onError)c.onError(k)},
timeout:c.timeout,withCredentials:!0};b="";var e=a.h.ma;e&&(b=e);e=Yc(a.h.oa||!1,b,c);Object.assign(d.headers,e);d.headers.Authorization&&!b&&(d.headers["x-origin"]=window.location.origin);e=`/${"youtubei"}/${a.h.innertubeApiVersion}/${"log_event"}`;let f={alt:"json"};a.h.na&&d.headers.Authorization||(f.key=a.h.innertubeApiKey);const g=pc(`${b}${e}`,f||{},!0),h=()=>{try{sc(g,d)}catch(k){if("InvalidAccessError"==k.name)fc(Error("An extension is blocking network request."));else throw k;}};
q("ytNetworklessLoggingInitializationOptions")&&he.isNwlInitialized?Vd().then(k=>{h(k)}):h(!1)}
class ie{constructor(a){this.h=null;a?this.h=a:Xc()&&(this.h=Nc())}};let je=ie;function ke(a,b,c={}){let d=je;L("ytLoggingEventsDefaultDisabled",!1)&&je==ie&&(d=null);Sc(a,b,d,c)}
;const le=[{Y:a=>`Cannot read property '${a.key}'`,
P:{TypeError:[{o:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{o:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{o:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{o:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{o:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{o:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Y:a=>`Cannot call '${a.key}'`,
P:{TypeError:[{o:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{o:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{o:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{o:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{o:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{o:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var ne={B:[],v:[{ea:me,weight:500}]};function me(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function oe(){if(!pe){var a=pe=new qe;a.B.length=0;a.v.length=0;re(a,ne)}return pe}
function re(a,b){b.B&&a.B.push.apply(a.B,b.B);b.v&&a.v.push.apply(a.v,b.v)}
var qe=class{constructor(){this.v=[];this.B=[]}},pe;const se=new G;function te(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=ue(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=ue(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=ue(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function ue(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function ve(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=we(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=te(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?we(`${f}.ve`,g,h,k):0;d+=f;d+=we(e,a[e],b,c);if(500<d)break}}else c[b]=xe(a),d+=c[b].length;else c[b]=xe(a),d+=c[b].length;return d}
function we(a,b,c,d){c+=`.${a}`;a=xe(b);d[c]=a;return c.length+a.length}
function xe(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var ye=new Set,ze=0,Ae=0,Be=0,Ce=[];const De=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ee(a,b="ERROR"){var c={};c.name=L("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);Fe(a,c||{},b)}
function Fe(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(M("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=ze)){var e=ob(a);d=e.message||"Unknown Error";const v=
e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${v}: ${d}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let x=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(x=ve(a.args[h],`params.${h}`,b,x),500<=x);h++);else if(a.hasOwnProperty("params")&&a.params){const F=a.params;if("object"===typeof a.params)for(h in F){if(!F[h])continue;const aa=`params.${h}`,N=xe(F[h]);b[aa]=N;x+=
aa.length+N.length;if(500<x)break}else b.params=xe(F)}if(Ce.length)for(h=0;h<Ce.length&&!(x=ve(Ce[h],`params.context.${h}`,b,x),500<=x);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:d,name:v,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=oe();d=b;for(k of a.B)if(d.message&&d.message.match(k.pa)){k=k.weight;break a}for(var l of a.v)if(l.ea(d)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var t of le)if(t.P[k.name]){l=t.P[k.name];for(var m of l)if(l=k.message.match(m.o)){k.params["params.error.original"]=l[0];a=m.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=t.Y(b);break}}k.params||(k.params={});t=oe();k.params["params.errorServiceSignature"]=`msg=${t.B.length}&cb=${t.v.length}`;k.params["params.serviceWorker"]="true";p.document&&p.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(k);if(0!==k.sampleWeight&&!ye.has(k.message)){"ERROR"===c?(se.I("handleError",k),M("record_app_crashed_web")&&0===Be&&1===k.sampleWeight&&(Be++,ke("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Ae++):"WARNING"===c&&se.I("handleWarning",k);b:{for(r of De)if((t=ra)&&0<=t.toLowerCase().indexOf(r.toLowerCase())){var r=!0;break b}r=!1}if(r)var n=void 0;else{t={stackTrace:k.stack};
k.fileName&&(t.filename=k.fileName);r=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==r.length&&(1!==r.length||isNaN(Number(r[0]))?2!==r.length||isNaN(Number(r[0]))||isNaN(Number(r[1]))||(t.lineNumber=Number(r[0]),t.columnNumber=Number(r[1])):t.lineNumber=Number(r[0]));r={level:"ERROR_LEVEL_UNKNOWN",message:k.message,errorClassName:k.name,sampleWeight:k.sampleWeight};"ERROR"===c?r.level="ERROR_LEVEL_ERROR":"WARNING"===c&&(r.level="ERROR_LEVEL_WARNNING");t={isObfuscated:!0,browserStackInfo:t};
m={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(m.experimentIds=L("FEXP_EXPERIMENTS"));if(l=k.params)for(n of Object.keys(l))m.kvPairs.push({key:`client.${n}`,value:String(l[n])});n=L("SERVER_NAME",void 0);l=L("SERVER_VERSION",void 0);n&&l&&(m.kvPairs.push({key:"server.name",value:n}),m.kvPairs.push({key:"server.version",value:l}));n={errorMetadata:m,stackTrace:t,logMessage:r}}n&&(ke("clientError",n),("ERROR"===c||M("errors_flush_gel_always_killswitch"))&&Hc());ye.add(k.message);
ze++}}}}
;function Ge(a){return B(a,function*(){var b=yield p.fetch(this.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]===(new Yb).u){b=new Yb(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function He(a=!1){return B(Ie.h,function*(){if(a||!this.h)this.h=Ge(this).then(this.j).catch(b=>{delete this.h;Ee(b)});
return this.h})}
var Ie=class{constructor(){this.i=`${self.location.origin}/sw.js_data`}j(a){var b;a.h||(a.h={});a.h[2]||(b=A(a,2))&&(a.h[2]=new Xb(b));if(b=a.h[2]){const c=A(b,5);c&&(p.__SAPISID=c);null!=A(b,7)&&K("VISITOR_DATA",A(b,7));null!=A(b,4)&&K("SESSION_INDEX",String(A(b,4)));null!=A(b,8)&&K("DELEGATED_SESSION_ID",A(b,8))}return a}};const Je=Date.now().toString();let Ke=p.ytLoggingDocDocumentNonce_;
if(!Ke){var Le;a:{if(window.crypto&&window.crypto.getRandomValues)try{const d=Array(16),e=new Uint8Array(16);window.crypto.getRandomValues(e);for(let f=0;f<d.length;f++)d[f]=e[f];Le=d;break a}catch(d){}const c=Array(16);for(let d=0;16>d;d++){const e=Date.now();for(let f=0;f<e%23;f++)c[d]=Math.random();c[d]=Math.floor(256*Math.random())}if(Je){let d=1;for(let e=0;e<Je.length;e++)c[d%16]=c[d%16]^c[(d-1)%16]/4^Je.charCodeAt(e),d++}Le=c}const a=Le,b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&
63));Ke=b.join("")};var Me=class{constructor(){this.h={}}};function Ne(){var a=L("INNERTUBE_CONTEXT");if(!a)return Ee(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=ma(a);M("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=L("EXPERIMENTS_TOKEN","");c?b.experimentsToken=c:delete b.experimentsToken;Me.h||(Me.h=new Me);b=Me.h.h;c=[];let d=0;for(const e in b)c[d++]=b[e];a.request=Object.assign(Object.assign({},
a.request),{consistencyTokenJars:c});a.user=Object.assign({},a.user);return a}
;var Oe=class{};const Pe={["GET_DATASYNC_IDS"]:class extends Oe{}};function Qe(a){cd.h||(cd.h=new cd);Re.h=new Re(a)}
function Se(a,b,c){return B(a,function*(){var d;if(this.h.ra){const e=null===(d=null===b||void 0===b?void 0:b.V)||void 0===d?void 0:d.sessionIndex;d=bd({sessionIndex:e});d=Object.assign(Object.assign({},Te(c)),d)}else d=Ue(b,c);return d})}
function Ve(a,b,c){return B(a,function*(){for(var d of[])d.Ea(b.W.context);d=JSON.stringify(b.W);b.M=Object.assign(Object.assign({},b.M),{headers:c});let e=Object.assign({},b.M);"POST"===b.M.method&&(e=Object.assign(Object.assign({},e),{body:d}));return yield this.i.fetch(b.input,e)})}
function We(a,b,c){var d={V:{identity:dd}};b.context||(b.context=Ne());return new D(e=>B(a,function*(){var f=qc(c)?"same-origin":"cors";f=yield Se(this,d,f);var g;var h=L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null===f||void 0===f?0:f.Authorization)?c:pc(c,{key:L("INNERTUBE_API_KEY")},!1);if(g=L("INNERTUBE_HOST_OVERRIDE")){g=String(g);var k=String,l=h.match(y);h=l[5];var t=l[6];l=l[7];var m="";h&&(m+=h);t&&(m+="?"+t);l&&(m+="#"+l);h=g+k(m)}g=h;k={method:"POST",mode:qc(g)?"same-origin":
"cors",credentials:qc(g)?"same-origin":"include"};e(Ve(this,{input:g,M:k,W:b,config:d},f))}))}
function Ue(a,b){var c;a=null===(c=null===a||void 0===a?void 0:a.V)||void 0===c?void 0:c.sessionIndex;return wb(bd({sessionIndex:a})).then(d=>Promise.resolve(Object.assign(Object.assign({},Te(b)),d)))}
function Te(a){const b={"Content-Type":"application/json"},c=L("VISITOR_DATA");c&&(b["X-Goog-Visitor-Id"]=c);"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a));return b}
var Re=class{constructor(a){var b=cd.h,c={za:{}},d=Xe;this.i=a;this.h=b;this.handleError=d;c.S||(c.S={});c.S=Object.assign(Object.assign({},Pe),c.S)}};function Z(a){return B(this,function*(){yield Ye();Ee(a,"WARNING")})}
function Xe(a){return B(this,function*(){yield Ye();Ee(a)})}
function Ze(a){B(this,function*(){if(M("nwl_sw_health_payloads"))yield ge(a);else{yield He();var b={timestamp:a.timestamp};b=a.appShellAssetLoadReport?{payloadName:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{payloadName:"clientError",payload:a.clientError,options:b}:void 0;b&&ke(b.payloadName,b.payload)}})}
function Ye(){return B(this,function*(){try{yield He()}catch(a){}})}
;let $e;function af(){$e||(Qe({fetch:(a,b)=>wb(fetch(new Request(a,b)))}),$e=Re.h);
return $e}
;const bf={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"};function cf(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(H("IDToken",b),df()):"notifications_check_registration"===a&&ef(b)}
function ff(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function gf(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function hf(a){return B(this,function*(){const b=gf(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Wb(Kb);return jf().then(e=>We(e,c,d).then(f=>{f.json().then(g=>{if(!g||!g.endpointUrl)return Promise.resolve();a.payload.chrome.postedEndpoint&&kf(a.payload.chrome.postedEndpoint);return lf(a,g.endpointUrl)})}))})}
function lf(a,b){a.deviceId&&H("DeviceId",a.deviceId);a.timestampSec&&H("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome;return self.registration.showNotification(c.title,{body:c.body,icon:c.iconUrl,data:{nav:b,id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint},tag:c.title+c.body+c.iconUrl,requireInteraction:!0}).then(()=>{mf(a.displayCap)}).catch(()=>{})}
function kf(a){if(!a.recordNotificationInteractionsEndpoint)return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest},c=Wb(Lb);return jf().then(d=>We(d,b,c))}
function mf(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let c=0;c<b.length-a;c++)b[c].close()})}
function ef(a){const b=[nf(a),I("RegistrationTimestamp").then(of),pf(),qf(),rf()];Promise.all(b).catch(()=>{H("IDToken",a);df();return Promise.resolve()})}
function of(a){return 9E7>=Date.now()-(a||0)?Promise.resolve():Promise.reject()}
function nf(a){return I("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function pf(){return I("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function qf(){return I("Endpoint").then(a=>sf().then(b=>a===b?Promise.resolve():Promise.reject()))}
function rf(){return I("application_server_key").then(a=>tf().then(b=>a===b?Promise.resolve():Promise.reject()))}
function uf(){var a=Notification.permission;if(bf[a])return bf[a]}
function df(){H("RegistrationTimestamp",0);Promise.all([sf(),vf(),wf(),tf()]).then(([a,b,c,d])=>{b=b?Nb(b):null;c=c?Nb(c):null;if(d){d=new Uint8Array(d);var e=4;void 0===e&&(e=0);Ka();e=Ha[e];for(var f=[],g=0;g<d.length;g+=3){var h=d[g],k=g+1<d.length,l=k?d[g+1]:0,t=g+2<d.length,m=t?d[g+2]:0,r=h>>2;h=(h&3)<<4|l>>4;l=(l&15)<<2|m>>6;m&=63;t||(m=64,k||(l=64));f.push(e[r],e[h],e[l]||"",e[m]||"")}d=f.join("")}else d=null;xf(a,b,c,d)}).catch(()=>{xf()})}
function xf(a=null,b=null,c=null,d=null){Sb().then(e=>{e&&(H("Endpoint",a),H("P256dhKey",b),H("AuthKey",c),H("application_server_key",d),H("Permission",Notification.permission),Promise.all([I("DeviceId"),I("NotificationsDisabled")]).then(([f,g])=>{if(null!==f&&void 0!==f)var h=f;else{f=[];var k;h=h||Jb.length;for(k=0;256>k;k++)f[k]=Jb[0|Math.random()*h];h=f.join("")}yf(h,null!==a&&void 0!==a?a:void 0,null!==b&&void 0!==b?b:void 0,null!==c&&void 0!==c?c:void 0,null!==d&&void 0!==d?d:void 0,null!==
g&&void 0!==g?g:void 0)}))})}
function yf(a,b,c,d,e,f){B(this,function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:uf()}}},h=Wb(Mb);return jf().then(k=>We(k,g,h).then(()=>{H("DeviceId",a);H("RegistrationTimestamp",Date.now());H("TimestampLowerBound",Date.now())},l=>{Z(l)}))})}
function sf(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function vf(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function wf(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function tf(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function jf(){return B(this,function*(){try{return yield He(!0),af()}catch(a){return yield Z(a),Promise.reject(a)}})}
;let zf=void 0;function Af(a){return B(this,function*(){zf||(zf=yield a.open("yt-appshell-assets"));return zf})}
function Bf(a,b){return B(this,function*(){const c=yield Af(a),d=b.map(e=>Cf(c,e));
return Promise.all(d)})}
function Df(a,b){return B(this,function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Ef(a,b){return B(this,function*(){const c=yield Af(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Ff(a,b,c){return B(this,function*(){yield(yield Af(a)).put(b,c)})}
function Gf(a,b){B(this,function*(){yield(yield Af(a)).delete(b)})}
function Cf(a,b){return B(this,function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;let Hf=null;const If=de("yt-serviceworker-metadata",{O:{["auth"]:!0,["resource-manifest-assets"]:!0},R:!0,upgrade(a,b){1>b&&Cd(a,"resource-manifest-assets");2>b&&Cd(a,"auth")},version:2});function Jf(){return new Promise(a=>{Vd().then(b=>{b?(Kf.h||(Kf.h=new Kf),a(Kf.h)):a(void 0)})})}
function Lf(a,b){return B(a,function*(){yield W(yield Y(If()),["resource-manifest-assets"],"readwrite",c=>{const d=X(c,"resource-manifest-assets"),e=Date.now();return d.put(b,e).then(()=>{Hf=e;let f=!0;return Gd(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function Mf(a,b){return B(a,function*(){let c=!1,d=0;yield W(yield Y(If()),["resource-manifest-assets"],"readonly",e=>Gd(X(e,"resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.cursor.value.includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function Nf(a){return B(a,function*(){Hf||(yield W(yield Y(If()),["resource-manifest-assets"],"readonly",b=>Gd(X(b,"resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{Hf=c.getKey()})));
return Hf})}
var Kf=class{};function Of(){return new Promise(a=>{Vd().then(b=>{b?(Pf.h||(Pf.h=new Pf),a(Pf.h)):a(void 0)})})}
function Qf(a,b){return B(a,function*(){yield(yield Y(If())).put("auth",b,"shell_identifier_key")})}
function Rf(a){return B(a,function*(){return(yield(yield Y(If())).get("auth","shell_identifier_key"))||""})}
function Sf(a){return B(a,function*(){yield(yield Y(If())).clear("auth")})}
var Pf=class{};function Tf(){B(this,function*(){const a=yield Of();a&&(yield Sf(a))})}
;function Uf(a,b){for(;Da(b)&&4!=b.i;){var c=void 0;switch(b.j){case 1:var d=b,e=Ca(d.h);d=d.h;var f=d.j;c=d.h;var g=c+e,h=[];for(e="";c<g;){var k=f[c++];if(128>k)h.push(k);else if(192>k)continue;else if(224>k){var l=f[c++];h.push((k&31)<<6|l&63)}else if(240>k){l=f[c++];var t=f[c++];h.push((k&15)<<12|(l&63)<<6|t&63)}else if(248>k){l=f[c++];t=f[c++];var m=f[c++];k=(k&7)<<18|(l&63)<<12|(t&63)<<6|m&63;k-=65536;h.push((k>>10&1023)+55296,(k&1023)+56320)}8192<=h.length&&(e+=String.fromCharCode.apply(null,
h),h.length=0)}if(8192>=h.length)h=String.fromCharCode.apply(null,h);else{f="";for(g=0;g<h.length;g+=8192)f+=String.fromCharCode.apply(null,la(h,g,g+8192));h=f}e+=h;d.h=c;c=e;d=a;1<d.m?d.i[1+d.l]=c:(Ra(d),d.j[1]=c);break;default:z(b)}}return a}
var Ta=class extends Na{constructor(a){super();Pa(this,a,0,null)}};function Vf(a){var b=new Wf;for(a=new Ea(a);Da(a)&&4!=a.i;){var c=void 0;switch(a.j){case 1:c=new Ta;var d=a,e=c,f=Uf,g=d.h.i,h=Ca(d.h);h=d.h.h+h;d.h.i=h;f(e,d);d.h.h=h;d.h.i=g;d=b;e=c;c=Sa(d);e=e?e:new Ta;d=A(d,1);c.push(e);d.push(Ua(e));break;default:z(a)}}return b}
var Wf=class extends Na{constructor(){super();Pa(this,void 0,0,Xf)}},Xf=[1];function Yf(a){return B(this,function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(Zf(b)):Promise.reject(Error("No resource manifest header"))})}
function Zf(a){return Sa(Vf(decodeURIComponent(a))).reduce((b,c)=>{(c=A(c,1))&&b.push(c);return b},[])}
;function $f(a){return B(a,function*(){const b=yield He();if(b&&null!=A(b,3)){var c=yield Of();c&&(c=yield Rf(c),A(b,3)!==c&&(Gf(this.h,this.i),Tf()))}})}
function ag(a){return B(a,function*(){let b,c;try{c=yield bg(this,this.j),b=yield Yf(c),yield Bf(this.h,b)}catch(d){return Promise.reject(d)}try{yield cg(this),yield Ff(this.h,this.i,c)}catch(d){return Promise.reject(d)}if(b)try{yield dg(this,b,this.i)}catch(d){}return Promise.resolve()})}
function eg(a){return B(a,function*(){yield $f(this);return ag(this)})}
function bg(a,b){return B(a,function*(){try{return yield p.fetch(new Request(b))}catch(c){return Promise.reject(c)}})}
function cg(a){return B(a,function*(){var b=yield He();let c;b&&null!=A(b,3)&&(c=A(b,3));return c?(b=yield Of())?Promise.resolve(Qf(b,c)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function dg(a,b,c){return B(a,function*(){const d=yield Jf();if(d)try{yield Lf(d,b)}catch(e){yield Z(e)}b.push(c);try{yield Ef(this.h,b)}catch(e){yield Z(e)}return Promise.resolve()})}
function fg(a,b){return B(a,function*(){return Df(this.h,b)})}
function gg(a){return B(a,function*(){return Df(this.h,this.i)})}
var hg=class{constructor(){var a=self.location.origin+"/app_shell",b=self.location.origin+"/app_shell_home";this.h=self.caches;this.j=a;this.i=b}};function ig(a,b){return B(a,function*(){const c=b.request,d=yield fg(this.h,c.url);if(d)return Ze({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:P()}),d;jg(c);return kg(b)})}
function lg(a,b){return B(a,function*(){const c=yield mg(this,b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield gg(this.h);if(d)return ng(this),d;og(this);return c.response?c.response:Promise.reject(c.error)})}
function pg(a,b){b=new URL(b);if(!a.i.includes(b.pathname))return!1;if(!b.search)return!0;for(const c of a.l)if(a=b.searchParams.get(c.key),void 0===c.value||a===c.value)if(b.searchParams.delete(c.key),!b.search)return!0;return!1}
function qg(a,b){return B(a,function*(){const c=yield gg(this.h);if(!c)return og(this),kg(b);ng(this);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(P()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return c;d=yield mg(this,b);return d.response&&d.response.ok?d.response:c})}
function kg(a){return Promise.resolve(a.preloadResponse).then(b=>b||p.fetch(a.request))}
function jg(a){const b={assetPath:a.url,cacheHit:!1};Jf().then(c=>{if(c){var d=Nf(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=Mf(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{Z(e)}).finally(()=>{Ze({appShellAssetLoadReport:b,
timestamp:P()})})}else Ze({appShellAssetLoadReport:b,
timestamp:P()})})}
function ng(a){Ze({appShellAssetLoadReport:{assetPath:a.h.i,cacheHit:!0},timestamp:P()})}
function og(a){Ze({appShellAssetLoadReport:{assetPath:a.h.i,cacheHit:!1},timestamp:P()})}
function mg(a,b){return B(a,function*(){try{return{response:yield kg(b)}}catch(c){return{error:c}}})}
var wg=class{constructor(){var a=rg,b=sg,c=tg,d=ug;const e=[];e.push({key:"feature",value:"ytca"});e.push({key:"client_dev_root_url"});var f=vg();this.h=a;this.m=b;this.u=c;this.i=d;this.l=e;this.j=f}};var ug=["/","/feed/downloads"];const xg=[/^\/$/,/^\/feed\/downloads$/],yg=[/^\/$/,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/];function vg(){return new RegExp((M("kevlar_sw_app_wide_fallback")?yg:xg).map(a=>a.source).join("|"))}
var sg=/^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,tg=/^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;var zg=class{constructor(){var a=rg,b=new wg;this.h=self;this.i=a;this.m=b;this.I=Ob}init(){this.h.oninstall=this.u.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.H.bind(this)}u(a){a.waitUntil(this.h.skipWaiting());const b=eg(this.i).catch(c=>{Z(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()];this.h.registration.navigationPreload&&b.push(this.h.registration.navigationPreload.enable());a.waitUntil(Promise.all(b))}l(a){return B(this,function*(){var b=this.m,c=!!this.h.registration.navigationPreload;const d=a.request;if(b.u.test(d.url))Ie.h&&(delete Ie.h.h,p.__SAPISID=void 0,K("VISITOR_DATA",void 0),K("SESSION_INDEX",void 0),K("DELEGATED_SESSION_ID",void 0)),c=a.respondWith,b=b.h,Gf(b.h,b.i),Tf(),b=kg(a),c.call(a,b);else if(b.m.test(d.url))a.respondWith(ig(b,
a));else if("navigate"===d.mode){const e=new URL(d.url);b.j.test(e.pathname)?a.respondWith(lg(b,a)):pg(b,d.url)?a.respondWith(qg(b,a)):c&&a.respondWith(kg(a))}})}H(a){const b=a.data;
this.I.includes(b.type)?cf(a):"refresh_shell"===b.type&&ag(this.i).catch(c=>{Z(c)})}};function Ag(){var a,b;return B(this,function*(){const c=navigator;if(null===(a=c.storage)||void 0===a?0:a.estimate)return c.storage.estimate();if(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)return Bg()})}
function Bg(){const a=navigator;return new Promise((b,c)=>{var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
;function Cg(a,b){Ag().then(c=>{c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Dg(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:Dg(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class Eg{constructor(){var a=Fg;this.handleError=Gg;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0})}L(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);
break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Cg(this,b);break;case "TRANSACTION_ENDED":Math.random()<=$b("ytidb_transaction_ended_event_rate_limit",.02)&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}
function Dg(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;re(oe(),{B:[{pa:/Failed to fetch/,weight:500}],v:[]});var {handleError:Gg=function(a){Ee(a)},
L:Fg=ke}={handleError:Xe,L:function(a,b){return B(this,function*(){yield Ye();ke(a,b)})}};
for(S=new Eg;0<R.length;){const a=R.shift();switch(a.type){case "ERROR":S.handleError(a.payload);break;case "EVENT":S.L(a.eventType,a.payload)}}Ie.h=new Ie;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data,c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(kf(b.clickEndpoint))};
self.onpush=function(a){a.waitUntil(I("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return hf(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(ff())};
self.onpushsubscriptionchange=function(){df()};
const rg=new hg;(new zg).init();
