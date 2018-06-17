module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e){function n(t){this.id=t,this.content=[],this.attrs={}}n.prototype.setAttribute=function(t,e){null==e?delete this.attrs[t]:this.attrs[t]=e},n.prototype.toString=function(t){var e=this.content.join(null==t?"\n":t),n="",r=this.attrs;return Object.keys(this.attrs).forEach(function(t){n+=t+'="'+r[t]+'" '}),n.length>0&&(n=" "+n.slice(0,-1)),"<style"+n+">"+e+"</style>"},t.exports=n},function(t,e,n){var r,o,i,s=n(1),a=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},u="data-universal",c="ssr",l=[],f={},p=null,d=0,v=[];function h(){}function b(){for(var t,e=[].slice.call(document.getElementsByTagName("style"),0),n=0;n<e.length;n++)(t=e[n]).getAttribute(u)===c&&t.parentNode.removeChild(t)}function y(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function m(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(j(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(j(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:s}}}}function g(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=v[v.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function x(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function w(t){var e=document.createElement("style");return t.attrs.type="text/css",_(e,t.attrs),g(t,e),e}function _(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function j(t,e){var n,r,o,s;if(e.transform&&t.css){if(!(s=e.transform(t.css)))return function(){};t.css=s}if(e.singleton){var a=d++;n=p||(p=w(e)),r=U.bind(null,n,a,!1),o=U.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",_(e,t.attrs),g(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||s)&&(r=i(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,e),o=function(){x(n),n.href&&URL.revokeObjectURL(n.href)}):(n=w(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){x(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{};var v,g=y(t,e);return h.__universal__=void 0,"object"==typeof window&&window.document?(r=a(function(){return window&&document&&document.all&&!window.atob}),e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom"),i=n(0),v={},o=function(t){if(void 0===v[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}v[t]=e}return v[t]},m(g,e),setTimeout(b,16),function(t){for(var n=[],r=0;r<g.length;r++){var o=g[r];(i=f[o.id]).refs--,n.push(i)}t&&m(y(t,e),e);for(r=0;r<n.length;r++){var i;if(0===(i=n[r]).refs){for(var s=0;s<i.parts.length;s++)i.parts[s]();delete f[i.id]}}}):(r=a(function(){return!("object"!=typeof navigator||!navigator.userAgent)&&/MSIE [5-9]\b/i.test(navigator.userAgent)}),e.singleton||(e.singleton=r()),function(t,e){for(var n=0;n<t.length;n++)for(var r=t[n],o=0;o<r.parts.length;o++)i(r.parts[o],e,r.id);return h.__universal__=l,h;function i(t,e,n){var r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return h;t.css=o}if(e.attrs.type="text/css",e.attrs[u]=c,e.singleton){var i=d++;e.attrs["data-singleton"]="singleton",(r=p||(p=a(e,n))).content.splice(i,1,t.css),-1===l.indexOf(r)&&l.push(r)}else(r=a(e,n)).content.push(t.css),t.media&&r.setAttribute("media",t.media),l.push(r);return h}function a(t,e){var n=new s(e);return Object.keys(t.attrs).forEach(function(e){n.setAttribute(e,t.attrs[e])}),n}}(g,e))};var O,M=(O=[],function(t,e){return O[t]=e,O.filter(Boolean).join("\n")});function U(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=M(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,".vb1yHxpTc1ZFaeC_wPZPg{background-color:#add8e6;border:1px solid gray;padding:5px}",""]),e.locals={"my-hello-view":"vb1yHxpTc1ZFaeC_wPZPg"}},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={transform:void 0},i=n(2)(r,o);r.locals&&(t.exports=r.locals),t.exports.__universal__=i.__universal__},function(t,e){t.exports=require("react")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MyHelloView=void 0;var r=i(n(6)),o=i(n(5));function i(t){return t&&t.__esModule?t:{default:t}}e.MyHelloView=function(t){return r.default.createElement("div",{className:o.default["my-hello-view"]},r.default.createElement("h1",null,"HelloViewLib"),r.default.createElement("div",null,t.children))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})})}]);