function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=e.parcelRequire7e0b;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return o[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequire7e0b=r),r.register("cmoHh",(function(t,e){!function(t,e,o){function n(t){var e,o=this,n=(e=4022871197,function(t){t=String(t);for(var o=0;o<t.length;o++){var n=.02519603282416938*(e+=t.charCodeAt(o));n-=e=n>>>0,e=(n*=e)>>>0,e+=4294967296*(n-=e)}return 2.3283064365386963e-10*(e>>>0)});o.next=function(){var t=2091639*o.s0+2.3283064365386963e-10*o.c;return o.s0=o.s1,o.s1=o.s2,o.s2=t-(o.c=0|t)},o.c=1,o.s0=n(" "),o.s1=n(" "),o.s2=n(" "),o.s0-=n(t),o.s0<0&&(o.s0+=1),o.s1-=n(t),o.s1<0&&(o.s1+=1),o.s2-=n(t),o.s2<0&&(o.s2+=1),n=null}function r(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function a(t,e){var o=new n(t),a=e&&e.state,i=o.next;return i.int32=function(){return 4294967296*o.next()|0},i.double=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.quick=i,a&&("object"==typeof a&&r(a,o),i.state=function(){return r(o,{})}),i}e&&e.exports?e.exports=a:o&&o.amd?o((function(){return a})):this.alea=a}(0,t,"function"==typeof define&&define)})),r.register("euRi5",(function(t,e){!function(t,e,o){function n(t){var e=this,o="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:o+=t;for(var n=0;n<o.length+64;n++)e.x^=0|o.charCodeAt(n),e.next()}function r(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function a(t,e){var o=new n(t),a=e&&e.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/2097152}while(0===t);return t},i.int32=o.next,i.quick=i,a&&("object"==typeof a&&r(a,o),i.state=function(){return r(o,{})}),i}e&&e.exports?e.exports=a:o&&o.amd?o((function(){return a})):this.xor128=a}(0,t,"function"==typeof define&&define)})),r.register("hDsEw",(function(t,e){!function(t,e,o){function n(t){var e=this,o="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:o+=t;for(var n=0;n<o.length+64;n++)e.x^=0|o.charCodeAt(n),n==o.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function r(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function a(t,e){var o=new n(t),a=e&&e.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/2097152}while(0===t);return t},i.int32=o.next,i.quick=i,a&&("object"==typeof a&&r(a,o),i.state=function(){return r(o,{})}),i}e&&e.exports?e.exports=a:o&&o.amd?o((function(){return a})):this.xorwow=a}(0,t,"function"==typeof define&&define)})),r.register("3J2Zm",(function(t,e){!function(t,e,o){function n(t){var e=this;e.next=function(){var t,o,n=e.x,r=e.i;return t=n[r],o=(t^=t>>>7)^t<<24,o^=(t=n[r+1&7])^t>>>10,o^=(t=n[r+3&7])^t>>>3,o^=(t=n[r+4&7])^t<<7,t=n[r+7&7],o^=(t^=t<<13)^t<<9,n[r]=o,e.i=r+1&7,o},function(t,e){var o,n=[];if(e===(0|e))n[0]=e;else for(e=""+e,o=0;o<e.length;++o)n[7&o]=n[7&o]<<15^e.charCodeAt(o)+n[o+1&7]<<13;for(;n.length<8;)n.push(0);for(o=0;o<8&&0===n[o];++o);for(8==o?n[7]=-1:n[o],t.x=n,t.i=0,o=256;o>0;--o)t.next()}(e,t)}function r(t,e){return e.x=t.x.slice(),e.i=t.i,e}function a(t,e){null==t&&(t=+new Date);var o=new n(t),a=e&&e.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/2097152}while(0===t);return t},i.int32=o.next,i.quick=i,a&&(a.x&&r(a,o),i.state=function(){return r(o,{})}),i}e&&e.exports?e.exports=a:o&&o.amd?o((function(){return a})):this.xorshift7=a}(0,t,"function"==typeof define&&define)})),r.register("6Px8M",(function(t,e){!function(t,e,o){function n(t){var e=this;e.next=function(){var t,o,n=e.w,r=e.X,a=e.i;return e.w=n=n+1640531527|0,o=r[a+34&127],t=r[a=a+1&127],o^=o<<13,t^=t<<17,o^=o>>>15,t^=t>>>12,o=r[a]=o^t,e.i=a,o+(n^n>>>16)|0},function(t,e){var o,n,r,a,i,u=[],s=128;for(e===(0|e)?(n=e,e=null):(e+="\0",n=0,s=Math.max(s,e.length)),r=0,a=-32;a<s;++a)e&&(n^=e.charCodeAt((a+32)%e.length)),0===a&&(i=n),n^=n<<10,n^=n>>>15,n^=n<<4,n^=n>>>13,a>=0&&(i=i+1640531527|0,r=0==(o=u[127&a]^=n+i)?r+1:0);for(r>=128&&(u[127&(e&&e.length||0)]=-1),r=127,a=512;a>0;--a)n=u[r+34&127],o=u[r=r+1&127],n^=n<<13,o^=o<<17,n^=n>>>15,o^=o>>>12,u[r]=n^o;t.w=i,t.X=u,t.i=r}(e,t)}function r(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function a(t,e){null==t&&(t=+new Date);var o=new n(t),a=e&&e.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/2097152}while(0===t);return t},i.int32=o.next,i.quick=i,a&&(a.X&&r(a,o),i.state=function(){return r(o,{})}),i}e&&e.exports?e.exports=a:o&&o.amd?o((function(){return a})):this.xor4096=a}(0,t,"function"==typeof define&&define)})),r.register("lDm0S",(function(t,e){!function(t,e,o){function n(t){var e=this,o="";e.next=function(){var t=e.b,o=e.c,n=e.d,r=e.a;return t=t<<25^t>>>7^o,o=o-n|0,n=n<<24^n>>>8^r,r=r-t|0,e.b=t=t<<20^t>>>12^o,e.c=o=o-n|0,e.d=n<<16^o>>>16^r,e.a=r-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):o+=t;for(var n=0;n<o.length+20;n++)e.b^=0|o.charCodeAt(n),e.next()}function r(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function a(t,e){var o=new n(t),a=e&&e.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/2097152}while(0===t);return t},i.int32=o.next,i.quick=i,a&&("object"==typeof a&&r(a,o),i.state=function(){return r(o,{})}),i}e&&e.exports?e.exports=a:o&&o.amd?o((function(){return a})):this.tychei=a}(0,t,"function"==typeof define&&define)})),r.register("kjyEk",(function(t,e){}));var a,i,u,s,l={},h=l&&l.__assign||function(){return h=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},h.apply(this,arguments)},c=l&&l.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<o;e++)for(var a=arguments[e],i=0,u=a.length;i<u;i++,r++)n[r]=a[i];return n};l.__esModule=!0,(i=a||(a={})).linear="linear",i.quadradic="quadradic",i.cubic="cubic",i.quartic="quartic",i.quintic="quintic",(s=u||(u={})).default="default",s.in="in",s.out="out",s.both="both";var d=new Set(Object.values(u)),f=new Set(Object.values(a));function y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return{easeStyle:t.filter((function(t){return d.has(t)}))[0]||u.default,easeFunc:t.filter((function(t){return f.has(t)}))[0]||null,durationMs:t.filter((function(t){return Number.isInteger(t)}))[0]||0}}function p(t){var e={linear:"cubic-bezier(0.250, 0.250, 0.750, 0.750)",in:"cubic-bezier(0.420, 0.000, 1.000, 1.000)",out:"cubic-bezier(0.000, 0.000, 0.580, 1.000)",both:"cubic-bezier(0.420, 0.000, 0.580, 1.000)",default:"cubic-bezier(0.250, 0.100, 0.250, 1.000)","in-quad":"cubic-bezier(0.550, 0.085, 0.680, 0.530)","in-cubic":"cubic-bezier(0.550, 0.055, 0.675, 0.190)","in-quartic":"cubic-bezier(0.895, 0.030, 0.685, 0.220)","in-quintic":"cubic-bezier(0.755, 0.050, 0.855, 0.060)","out-quad":"cubic-bezier(0.250, 0.460, 0.450, 0.940)","out-cubic":"cubic-bezier(0.215, 0.610, 0.355, 1.000)","out-quartic":"cubic-bezier(0.165, 0.840, 0.440, 1.000)","out-quintic":"cubic-bezier(0.230, 1.000, 0.320, 1.000)","both-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","both-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","both-quartic":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","both-quintic":"cubic-bezier(0.860, 0.000, 0.070, 1.000)","default-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","default-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","default-quartic":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","default-quintic":"cubic-bezier(0.860, 0.000, 0.070, 1.000)"};return t.easeStyle||t.easeFunc?t.easeStyle&&!t.easeFunc?e[t.easeStyle]:!t.easeStyle&&t.easeFunc?e["both-"+t.easeFunc]:t.easeFunc===a.linear?e.linear:e[t.easeStyle+"-"+t.easeFunc]:e.default}function m(t){var e={elements:[],all:function(o){if(void 0===o&&(o=!1),o||!e.elements.length){var n=t;if("string"==typeof t)n=Array.from(document.body.querySelectorAll(t));else if("function"==typeof t.all){var r=t.all();Array.isArray(r)&&(n=r)}e.elements=Array.isArray(n)?n:[n]}return e.elements},idx:function(t){return e.all()[0]||null}};return["get","set","del","cyc","rnd"].forEach((function(o){e[o]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return m[o].apply(m,c([t],e))},e[o].cls=function(){for(var e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(e=m[o]).cls.apply(e,c([t],n))},e[o].sty=function(){for(var e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(e=m[o]).sty.apply(e,c([t],n))}})),h(h({},e),{on:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return m.on.apply(m,c([t],e))},off:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return m.off.apply(m,c([t],e))},one:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return m.one.apply(m,c([t],e))},add:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return m.add.apply(m,c([t],e))},rem:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return m.rem.apply(m,c([t],e))},ani:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return m.ani.apply(m,c([t],e))}})}function g(t,e,o,n){var r=m(t).all().map((function(t){return o(t,e)}));if(new Set(r).size>1)throw new Error(n+' called on multiple elements with differing values for key "'+e+'"');return r[0]||null}function w(t,e,o,n){for(var r=[],a=4;a<arguments.length;a++)r[a-4]=arguments[a];return null!=o&&(o=o.toString(),m.ani.apply(m,c([t],r)).all().forEach((function(t){return n(t,e,o)}))),o}function v(t,e,o,n){for(var r=[],a=4;a<arguments.length;a++)r[a-4]=arguments[a];return!!m.ani.apply(m,c([t],r)).all().filter((function(t){return o(t,e)})).map((function(t){return n(t,e)})).length}function b(t,e,o,n,r){for(var a=[],i=5;i<arguments.length;i++)a[i-5]=arguments[i];var u=m(t),s=(o=o.map((function(t){return t.toString()})))[(o.indexOf(n(u,e))+1)%o.length];return r(u,e,s),s}function W(t,e,o,n){for(var r=[],a=4;a<arguments.length;a++)r[a-4]=arguments[a];var i=m(t),u=(o=o.map((function(t){return t.toString()})))[Math.floor(Math.random()*o.length)];return n(i,e,u),u}m.ease=h(h({},u),a),m.ani=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];var n=m(t),r=y.apply(void 0,e);if(r.durationMs>0){n.animation=r;var a=m.get.sty(n,"transition");m.set.sty(n,"transition","all "+r.durationMs+"ms "+p(r)),setTimeout((function(){m.set.sty(n,"transition",a),n.animation=null}),r.durationMs)}return n},m.add=function(t,e){for(var o,n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a=document.createElement(e),i=(o=m(a)).ani.apply(o,n);return i.animation&&(m.set.sty(i,"opacity",0),requestAnimationFrame((function(){return m.set.sty(i,"opacity",1)})),setTimeout((function(){return m.del.sty(i,"opacity")}),i.animation.durationMs)),t&&m(t).idx(0).appendChild(a),i},m.rem=function(t){for(var e,o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];var r=c(o).reverse().filter((function(t){return"boolean"==typeof t})),a=!!r.length&&r[0],i=!!r.length&&!r[0],u=(y.apply(void 0,o),(e=m(t)).ani.apply(e,o));return u.animation?(m.set.sty(u,"opacity",m.get.sty(u,"opacity")||(i?0:1)),requestAnimationFrame((function(){return m.set.sty(u,"opacity",i?1:0)})),setTimeout((function(){a&&u.all().forEach((function(t){return t.parentNode.removeChild(t)}))}),u.animation.durationMs)):a?u.all().forEach((function(t){return t.parentNode.removeChild(t)})):m.set.sty(u,"opacity",i?1:0),u},m.on=function(t,e,o,n){var r=m(t),a=e.split(",").map((function(t){return t.trim()}));return r.all().forEach((function(t){return a.forEach((function(e){return(n?t.removeEventListener:t.addEventListener).call(t,e,o)}))})),r},m.off=function(t,e,o,n){return m.on(t,e,o,!n)},m.one=function(t,e,o){return m.on(t,e,(function n(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];m.off(t,e,n),o.call.apply(o,c([this],r))}))},m.get=function(t,e){return g(t,e,(function(t,e){return t.getAttribute(e)}),"L.get")},m.get.cls=function(t,e){return g(t,e,(function(t,e){return(t.className||"").split(" ").includes(e)?e:null}),"L.get.cls")},m.get.sty=function(t,e){return g(t,e,(function(t,e){return t.style[e]}),"L.get.sty")},m.set=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];var a=function(t,e,o){return t.setAttribute(e,o)};return w.apply(void 0,c([t,e,o,a],n))},m.set.cls=function(t,e){return w(t,e,!0,(function(t,e){return t.classlist.add(e)}))},m.set.sty=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];var a=function(t,e,o){return t.style[e]=o};return w.apply(void 0,c([t,e,o,a],n))},m.del=function(t,e){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];var r=function(t,e){return t.hasAttribute(e)},a=function(t,o){return t.removeAttribute(e)};return v.apply(void 0,c([t,e,r,a],o))},m.del.cls=function(t,e){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];var r=function(t,e){return t.classList.contains(e)},a=function(t,e){return t.removeAttribute(e)};return v.apply(void 0,c([t,e,r,a],o))},m.del.sty=function(t,e){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];var r=function(t){return!!t.style[e].length},a=function(t){return t.style[e]=""};return v.apply(void 0,c([t,e,r,a],o))},m.cyc=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];return b.apply(void 0,c([t,e,o,m.get,m.set],n))},m.cyc.cls=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];return b.apply(void 0,c([t,e,o,m.get.cls,m.set.cls],n))},m.cyc.sty=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];return b.apply(void 0,c([t,e,o,m.get.sty,m.set.sty],n))},m.rnd=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];return W.apply(void 0,c([t,e,o,m.set],n))},m.rnd.cls=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];return W.apply(void 0,c([t,e,o,m.set.cls],n))},m.rnd.sty=function(t,e,o){for(var n=[],r=3;r<arguments.length;r++)n[r-3]=arguments[r];return W.apply(void 0,c([t,e,o,m.set.sty],n))},m.state={params:new URLSearchParams,config:null,aliases:null,configure:function(t){return m.state.config=m.state.config||new Map,m.state.aliases=m.state.aliases||new Map,Object.entries(t).forEach((function(e){var o,n=e[0],r=e[1];m.state.config.set(n,h(h({},m.state.config.get(n)||{}),t[n])),null===(o=r.aliases)||void 0===o||o.forEach((function(t){return m.state.aliases.set(t,n)}))})),m.state},load:function(t){return m(window).on("load,popstate",(function(){m.state.params=new URLSearchParams,new URLSearchParams(window.location.search).forEach((function(t,e){return m.state.set(e,t)}));m.state.config.forEach((function(t,e){t.default&&!m.state.get(e)&&(m.state.set(e,t.default),!0)})),m.state.write({push:!1}),t&&t()})),m.state},aliased:function(t,e){var o,n,r,a=(void 0===e?{}:e).reverse;return void 0!==a&&a?(null===(r=null===(n=null===(o=m.state.config)||void 0===o?void 0:o.get(t))||void 0===n?void 0:n.aliases)||void 0===r?void 0:r.sort((function(t,e){return t.length-e.length}))[0])||t:m.state.aliases.get(t)||t},indexed:function(t,e,o){var n,r,a=(void 0===o?{}:o).reverse,i=void 0!==a&&a,u=null===(r=null===(n=m.state.config)||void 0===n?void 0:n.get(m.state.aliased(t)))||void 0===r?void 0:r.options;return i?u&&u.indexOf(e).toString()||e:u&&u[parseInt(e)]||e},validate:function(t,e){var o;if(m.state.config){if(!m.state.config.has(t))throw new Error('L.state.get given invalid key "'+t+'"');if("string"==typeof e){var n=null===(o=m.state.config.get(t))||void 0===o?void 0:o.options;if(n&&!n.includes(e))throw new Error('L.state.set given invalid value "'+e+'" for key "'+t+'"')}}return m.state},get:function(t){return t=m.state.aliased(t),m.state.validate(t),m.state.params.get(t)||null},set:function(t,e){return t=m.state.aliased(t),e=m.state.indexed(t,e),m.state.validate(t,e),"string"==typeof e&&m.state.params.get(t)!==e&&(m.state.params.set(t,e),m.state.params.sort()),e},del:function(t){return t=m.state.aliased(t),m.state.validate(t),!!m.state.params.has(t)&&(m.state.params.delete(t),!0)},write:function(t){var e=(void 0===t?{}:t).push,o=void 0!==e&&e,n=new URL(window.location.href);return n.search=m.state.params.toString(),o?window.history.pushState({path:n.href},"",n.href):window.history.replaceState({path:n.href},"",n.href),m.state},url:function(t){var e,o=(void 0===t?{}:t).short,n=void 0!==o&&o,r=new URL(window.location.href);return n?(e=new URLSearchParams,m.state.params.forEach((function(t,o){var n=m.state.aliased(o,{reverse:!0}),r=m.state.indexed(o,t,{reverse:!0});e.set(n,r)})),e.sort()):e=m.state.params,r.search=e.toString(),r.href}},m.copy=function(t){var e="Copy url and send to your spotter -> Press Ctrl+C then Enter";if(navigator.clipboard)navigator.clipboard.writeText(t).catch((function(){return window.prompt(e,t)}));else{var o=document.createElement("textarea");o.value=t,o.style.top=(0).toString(),o.style.left=(0).toString(),o.style.position="fixed",document.body.appendChild(o),o.focus(),o.select();try{document.execCommand("copy")}catch(o){window.prompt(e,t)}document.body.removeChild(o)}return t},l.default=m;var x,k=r("cmoHh"),z=r("euRi5"),S=r("hDsEw"),q=r("3J2Zm"),C=r("6Px8M"),M=r("lDm0S"),j={};!function(t,e,o){var n,a=256,i=o.pow(a,6),u=o.pow(2,52),s=2*u,l=255;function h(r,l,h){var m=[],g=y(f((l=1==l?{entropy:!0}:l||{}).entropy?[r,p(e)]:null==r?function(){try{var o;return n&&(o=n.randomBytes)?o=o(a):(o=new Uint8Array(a),(t.crypto||t.msCrypto).getRandomValues(o)),p(o)}catch(o){var r=t.navigator,i=r&&r.plugins;return[+new Date,t,i,t.screen,p(e)]}}():r,3),m),w=new c(m),v=function(){for(var t=w.g(6),e=i,o=0;t<u;)t=(t+o)*a,e*=a,o=w.g(1);for(;t>=s;)t/=2,e/=2,o>>>=1;return(t+o)/e};return v.int32=function(){return 0|w.g(4)},v.quick=function(){return w.g(4)/4294967296},v.double=v,y(p(w.S),e),(l.pass||h||function(t,e,n,r){return r&&(r.S&&d(r,w),t.state=function(){return d(w,{})}),n?(o.random=t,e):t})(v,g,"global"in l?l.global:this==o,l.state)}function c(t){var e,o=t.length,n=this,r=0,i=n.i=n.j=0,u=n.S=[];for(o||(t=[o++]);r<a;)u[r]=r++;for(r=0;r<a;r++)u[r]=u[i=l&i+t[r%o]+(e=u[r])],u[i]=e;(n.g=function(t){for(var e,o=0,r=n.i,i=n.j,u=n.S;t--;)e=u[r=l&r+1],o=o*a+u[l&(u[r]=u[i=l&i+e])+(u[i]=e)];return n.i=r,n.j=i,o})(a)}function d(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function f(t,e){var o,n=[],r=typeof t;if(e&&"object"==r)for(o in t)try{n.push(f(t[o],e-1))}catch(t){}return n.length?n:"string"==r?t:t+"\0"}function y(t,e){for(var o,n=t+"",r=0;r<n.length;)e[l&r]=l&(o^=19*e[l&r])+n.charCodeAt(r++);return p(e)}function p(t){return String.fromCharCode.apply(0,t)}if(y(o.random(),e),j){j=h;try{n=r("kjyEk")}catch(t){}}else"function"==typeof define&&define.amd?define((function(){return h})):o.seedrandom=h}("undefined"!=typeof self?self:j,[],Math),j.alea=k,j.xor128=z,j.xorwow=S,j.xorshift7=q,j.xor4096=C,j.tychei=M,x=j;var E=["What’s the best thing you’ve got going on in your life at the moment?","What incredibly common thing have you never done?","What has taken you the longest to get good or decent at?","What food do you love that a lot of people might find a little odd?","If you could start a charity, what would it be for?","What was the funniest thing you’ve seen recently online?","What are some of your favorite games to play?","What takes a lot of time but is totally worth it?","What is the most amazing fact you know?","What website or app doesn’t exist, but you really wish it did?","What’s your favorite type of day? (weather, temp, etc.)","What is the most clever or funniest use of advertising you’ve seen?","How into self-improvement are you?","When someone finds out what you do, or where you are from, what question do they always ask you?","Are you more productive at night or in the morning? Do you think it’s possible to change and get used to another schedule?","What scene in a movie always gives you goosebumps every time you watch it?","What topic could you give a 20-minute presentation on without any preparation?","What’s something that a lot of people are missing out on because they don’t know about it?","What are some of your guilty pleasures?","Who is the most interesting person you’ve met and talked with?","What has really taken a toll on you?","How did you spend the money from your very first job?","What do you wish someone taught you a long time ago?","Do you think you rely too heavily on your phone? Why or why not?","How could carousels be spiced up so they are more exciting?","What’s your favorite car that you’ve owned?","What subjects should be taught in school but aren’t?","What’s the biggest vehicle you’ve driven?","What songs would be played on a loop in hell?","What rule do you wish they would introduce into your favorite sport?","What kind of challenges are you facing these days?","What do you highly recommend to most people you meet?","Do you think you have a pretty good work-life balance? Why or why not?","What was the last thing you were really excited about?","What’s your best “my coworkers are crazy” story?","What does your perfect breakfast look like?","What are some of your favorite holiday traditions that you did while growing up?","If you could choose your dreams, what would you prefer to dream about?","Would you ride in a zeppelin if given a chance?","What’s something that was once important but is now becoming less and less relevant?","What tells you the most about a person?","When is the most interesting period in history?","What is the best pair of shoes you have owned?","What book had the most significant impact on you?","Where’s your favorite place to nap?","What is the best event you’ve attended?","What do you buy way more of than most people?","What do you rebel against?","What well-known person does the most good for the world?","What’s your favorite food combination?","What’s the weirdest way you have met someone?","What’s the most amazing natural occurrence you’ve witnessed?","How did you get that scar of yours?","What do you wish was illegal?","If someone came up to you and said “Hey, do that thing you do!”, what thing would pop into your head first?","Who is the most intelligent or creative person you know?","What wastes the most time in your day to day life?","What’s a problem you have, that might be entirely unique to you?","What company or brand did you love until they betrayed your trust?","Would you ever try space tourism, if you had the money for it?","What’s the most annoying machine you must deal with regularly?","What are you grateful for?","What hobby would you be a lot of fun to get into?","What do you resent paying for most?","What pets did you have growing up?","What’s the best or worst prank you’ve played on someone?","What was the scariest movie you’ve seen?","What motivates you?","Where are five places you really want to visit before you die?","What’s the best location to fully enjoy a good cup of coffee?","How handy are you when it comes to fixing things?","What skill or talent would you most like to learn?","What weird thing do you have nostalgia for?","What works of art have really made an impression on you?","What culture would you like to learn more about?","If you were featured on the local news, what would you most likely be on there for?","What do you wish your phone could do?","What’s your favorite international food?","What workers have the worst jobs?","What kind of physical activities do you like doing?","Would you rather watch a movie on your TV at home or on the big screen in the theater, and why?","What assumption you made went hilariously wrong?","What big problem do you think technology will solve next?","What fashion trend needs to be brought back?","How do you think you will be/act when you are old?","What’s your favorite way to waste time online?","What’s the longest trip you’ve been on?","What was something you thought would be easy until you tried it?","What, in your opinion, is the most amazing animal?","How into tech are you? Why?","What is the biggest mistake you’ve made at work?","Who is the oldest person you know personally? What interesting stories have they told you?","Who is the funniest person in your family?","What useless facts do you know?","What’s your favorite Olympic sport to watch?","How do you usually get your news?","What smell do you hate that doesn’t seem to bother other people?","What’s the most delightful hotel or house you’ve stayed in on vacation?","What weird quirks did you pick up from your parents?","What were your favorite television shows when you were growing up?","What’s the silliest thing you are pretty good at?","What’s your idea of a great day?","What are some of the dumbest misadventures you’ve been on?","What do you want to do when you retire?","What do you do to unwind after a hard day?","Who is the most competitive person you know?","Would you rather spend time with other people or at home alone?","What are some films that would make it on to your top 50 list of movies?","What slang are you really happy went out of fashion?","What music do you put on when you want to get pumped?","What makes you feel old when you think about it?","How well do you know your neighbors?","What’s the best backhanded compliment you’ve heard / can think of on the spot?","Who is the most interesting stranger you’ve met?","What was your funniest or worst experience with a dentist?","What’s the noblest endeavor a person can dedicate their life to?","What’s your idea of a great party?","What are some of your favorite scenes from movies?","What are two of your favorite snacks?","What’s the biggest adventure you’ve been on?","Besides war and diplomacy, what would be the best way for countries to settle disputes?","What household chore do you actually enjoy?","What is something you do better than most people and something you do worse than most people?","What TV show are you hooked on or were recently hooked on?","If you had to lose one of your senses, which would you choose to lose?","If a new volcano formed and the government had an online contest to see what it would be named, what name would you submit?","What is the last goal you achieved?","What was your worst haircut experience?","Do you prefer pens or pencils? Why?","What’s the best way to stay young?","What is the most stressful TV show or movie you watched?","How good are you at drawing?","What did your teachers and parents say would be really important when you grew up, but it hasn’t been? ","How do you feel about clowns?","What is your favorite genre of movie? Why?","What brands do you love/hate the most?","What is the weirdest food combination you’ve made and tried?","What would you change if you were in charge of the company you work for?","Who has been your most interesting/confusing/annoying neighbor?","Has there ever been a time when something so amazing or unexpected happened that it literally left you speechless for a time?","Where’s the most surreal area you been to?","What are common misconceptions about your job?","What public spaces do you feel most comfortable in? (Library, bar, park, mall, stadium, etc.)","What’s the most outdated piece of tech you still use regularly?","What’s the weirdest food you’ve eaten?","Who was your favorite teacher?","What recent trend are you totally on board with?","What about becoming an adult caught you completely off guard?","How often do you dance?","What’s the best cake you’ve ever eaten?","What kind of art do you appreciate the most?","What crossed way too far into the uncanny valley for you?","What’s your favorite thing about the area/city/state you live in?","What’s the best day you’ve had recently?","What’s your favorite way to spend time outdoors?","What does your perfect burger or sandwich have in it?","What’s the worst advice you’ve been given?","What’s the strangest name someone you have met had?","What was something courageous you’ve (in person) seen someone do?","What card or board games do you like to play?","What are you best at fixing?","What movie never gets old no matter how many times you’ve seen it?","If the universe is just a simulation, what update or patch does it need?","Where have you traveled to?","What’s the scariest horror movie or horror book monster?","What’s the most unique shop or restaurant you’ve been in?","What hard time in your life left you a better person after it was finished?","What’s the best sports game you’ve been to?","What period would be the best to be born in?","What sport do you wish you knew more about?","What’s something you’re looking forward to?","What’s the most creative thing you’ve done?","What are you hilariously bad at?","Tell me about a time you were totally out of your element/comfort zone.","Are you a cat or dog person or neither? Why?","Who is the most gifted person you know?","What was your best vacation?","What do you usually do on your commute to work?","What was the craziest theme park or fair ride you’ve been on?","What kind of people do you most enjoy hanging out with?","What do you think the ideal age to be is?","What are you kind of snobby about?","What toy did you hate most as a child?","What’s your drink of choice? (Either alcoholic or non.)","If you left your current life behind and ran away to follow your dreams, what would you be doing?","What food is underrated or underappreciated?","What’s your favorite line from a book or a movie?","What is the best thing you have ever bought?","What catchy jingle or bit of advertising has stuck with you all these years?","What luxury is totally worth the price?","What is the most unique or silliest problem you have going on in your life at the moment?","What could movie theaters do to improve the experience of going there?","If you were so wealthy you didn’t need to work, what would you do with your time?","What apps do you use most?","What is the most tedious and/or the most exciting sport to watch?","What’s your favorite island that you’ve visited?","What do you geek out about?","Besides insects and spiders, what animals annoy you the most?","What’s your favorite month?","What’s the best concert you’ve been to and why was it so good?"];function A(t){for(let e=2;e<t;e++)if(t%e==0)return!1;return t>1}function I(e){const o=Math.sqrt(e);let n=Math.ceil(o)+Math.floor(t(x)(`${e}`)()*(o/2)),r=Math.floor(o)-Math.floor(t(x)(`${n}`)()*(o/2));for(;n*r!==e;)(r<1||n>e)&&(n=Math.ceil(o),r=Math.floor(o)),n*r<e?n++:r--;return n%2?[r,n]:[n,r]}const T=function(e){let o,n=(e=Array.from(e)).length;for(;n--;)o=Math.floor(t(x)("")()*n),[e[n],e[o]]=[e[o],e[n]];return e}(["afar","ahem","ahoy","alas","anti","area","atop","away","baby","back","ball","band","bang","bank","bare","base","bear","beat","bill","blue","body","bold","book","both","burn","busy","call","calm","card","care","case","cash","cast","city","club","cold","come","cook","cool","cope","cost","dare","dark","darn","date","deal","dear","deep","doom","door","down","draw","drop","dual","dull","duty","earn","east","easy","edge","egad","else","ergo","even","ever","evil","face","fact","fail","fair","fall","farm","fast","fear","feel","file","fill","film","find","fine","fire","firm","fish","flat","flip","fond","food","foot","fore","form","foul","four","free","from","full","fund","gain","game","girl","give","glad","goal","gold","good","gosh","grey","grim","grow","hair","half","hall","hand","hang","hard","hate","have","head","hear","heck","help","here","hers","hide","high","hill","hold","home","honk","hope","hour","huge","hurt","idea","idly","into","join","jump","just","keen","keep","kill","kind","king","know","lack","lady","land","last","late","lazy","lead","lend","lest","life","lift","like","line","link","list","live","lone","long","look","lord","lose","loss","loud","main","make","many","mark","mass","mean","meet","meow","mild","mind","mine","miss","move","much","must","nada","name","near","neat","need","news","next","nice","none","note","okay","once","only","onto","oops","open","ouch","ours","over","page","pair","pale","park","part","pass","past","path","phew","pick","pink","plan","play","plus","poof","poor","post","pull","pure","push","race","rain","rare","rate","read","real","rear","rely","rest","rich","ride","ring","rise","risk","road","rock","role","roll","room","rude","rule","safe","sale","same","save","seat","seek","seem","self","sell","send","shed","shop","show","shut","sick","side","sign","sing","site","size","slim","slip","slow","snap","soft","sole","solo","some","soon","sort","star","stay","step","stop","such","suit","sure","take","talk","tall","task","team","tell","tend","term","test","text","than","that","thee","them","then","they","thin","this","thor","thus","tidy","till","time","tiny","tone","tour","town","tree","true","turn","type","ugly","unit","unto","upon","user","vain","vast","very","vice","view","vote","wait","wake","walk","wall","want","warm","warn","wary","wash","wear","week","west","wham","what","when","whiz","wide","wild","will","wind","wine","wise","wish","with","wood","word","work","year","your","yuck","zero"]),H=function(t){let e=1;if(t>2)for(e=Math.floor(t/2)+1;!A(e);)e++;return e}(E.length),L=new Map(T.map(((t,e)=>[t,e])));function O(){return T[Math.floor(Math.random()*T.length)]}function $(t,e){t||(t=`${O()}-${O()}`);const[o,n]=t.split("-"),[r,a]=[L.get(o),L.get(n)];let i=r*a%E.length+H;i>=E.length&&(i-=E.length);const[u,s]=I(i),[l,h]=[T[u],T[s]];return t=`${l}-${h}`,e&&(t=U(t,e)),t}function _(t){const[e,o]=t.split("-"),[n,r]=[T.indexOf(e),T.indexOf(o)];if(-1===n||-1===r)throw new Error("Invalid seed encountered");return E[n*r%E.length]}function D(t){return(t=t.split("-").join("").slice(0,8)).slice(0,4)+"-"+t.slice(4,8)}function U(t,e){const o=Math.floor(e/T.length),n=e%T.length;return t=D(t)+`-${T[n]}`,o&&(t+=`-${T[o]}`),t}function R(t){return(t=t.split("-").join("").toLowerCase()).length>=8&&t.length<=16&&[t.slice(0,4),t.slice(4,8),t.slice(8,12),t.slice(12,16)].every((t=>""===t||T.includes(t)))}function F(t,e){return[t=$(t,e),_(t)]}function N(t,e){return t=function(t,e){const[o,n]=t.split("-"),[r,a]=[L.get(o),L.get(n)];let i=r*a%E.length-H;i<0&&(i+=E.length);const[u,s]=I(i),[l,h]=[T[u],T[s]];return t=`${l}-${h}`,e&&(t=U(t,e)),t}(t,e),[t,_(t)]}let P=null;function X(t,e,o){V(t=U(t,e));const n=Math.floor((new Date).getTime()/1e3),r=Math.floor((new Date).setUTCHours(0,0,0,0)/1e3),a=e-(n-r)%e;function i(){t=$(t,e),o(t,_(t)),P=setInterval((()=>{t=$(t,e),o(t,_(t))}),1e3*e)}return 0===a?(t=$(t,e),o(t,_(t)),i()):P=setTimeout(i,1e3*a),[t,_(t),e,a]}function V(t){return t=t?D(t):null,P&&(clearInterval(P),P=null),[t??$(),t?_(t):""]}const B=t(l)("h1"),G=t(l)('input[type="checkbox"]'),J=t(l)('input[type="number"]'),Q=t(l)("button.next"),Z=t(l)("button.prev"),K=t(l)("button.copy"),Y=t(l)(".info"),tt=t(l)("button.cli");let et,ot=0,nt=!1,rt=window.location.pathname.slice(1);const at=document.title.trim(),it=K.idx(0).textContent.trim(),ut=tt.idx(0).textContent.trim();function st(){document.title=`${at} · ${rt}`,B.idx(0).textContent=et,K.idx(0).textContent=it,tt.idx(0).textContent=`${ut} ${rt}`,window.history.pushState(null,"",`/${rt}`);const[t]=F(rt,nt?ot:null);window.localStorage?.setItem("MAGIC_HAT_NEXT_QUESTION",t)}function lt(){const t=G.idx(0).checked;t?(ot=parseInt(J.idx(0).value,10),[rt,et,ot]=X(rt,ot,(()=>{[rt,et]=F(rt,ot),st()})),st(),nt=!0):t||([rt,et]=V(rt),st(),nt=!1)}window.onpopstate=function(){var t,e;rt=window.location.pathname.slice(1),rt.length&&R(rt)&&([rt,et]=(t=rt,[t=(e=nt?ot:null)?U(t,e):D(t),_(t)]),window.history.replaceState(null,"",`/${rt}`),B.idx(0).textContent=et)},rt.length&&!R(rt)&&(rt="",window.history.replaceState(null,"","/")),""===rt&&(rt=window.localStorage?.getItem("MAGIC_HAT_NEXT_QUESTION")??""),[rt,et,ot]=function(t,e){const o=function(t){t=t.split("-").join("").toLowerCase();let[e,o]=[T.indexOf(t.slice(8,12)),T.indexOf(t.slice(12,16))];return e<0?e=0:o<0&&(o=0),o*T.length+e}(t=t?.length?t:$(t));return o>0?X(t,o,e):[t,_(t),0,0]}(rt,(()=>{[rt,et]=F(rt,ot),st()})),st(),ot>0&&(nt=!0,J.idx(0).value=ot,G.idx(0).checked=!0),Q.on("click",(()=>{[rt,et]=F(rt,nt?ot:null),st()})),Z.on("click",(()=>{[rt,et]=N(rt,nt?ot:null),st()})),G.on("change",lt),J.on("change",(()=>{G.idx(0).checked=!0,lt()})),K.on("click",(e=>{e.stopPropagation(),t(l).copy(window.location.href),K.idx(0).textContent="Copied!"})),Y.on("click",(()=>{const e=tt.idx(0);t(l).copy(e.textContent.trim()),e.textContent="Copied!"}));
//# sourceMappingURL=index.89d9eb04.js.map