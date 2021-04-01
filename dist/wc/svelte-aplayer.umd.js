!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Aplayer=t()}(this,(function(){"use strict";function e(){}function t(e,t){for(const a in t)e[a]=t[a];return e}function a(e){return e()}function r(){return Object.create(null)}function n(e){e.forEach(a)}function l(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t,...a){if(null==t)return e;const r=t.subscribe(...a);return r.unsubscribe?()=>r.unsubscribe():r}function s(e,t,a){e.$$.on_destroy.push(i(t,a))}function p(e){const t={};for(const a in e)"$"!==a[0]&&(t[a]=e[a]);return t}function c(e,t,a=t){return e.set(a),t}function h(e,t){e.appendChild(t)}function u(e,t,a){e.insertBefore(t,a||null)}function d(e){e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function f(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function g(e){return document.createTextNode(e)}function m(){return g(" ")}function v(){return g("")}function x(e,t,a,r){return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)}function w(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function b(e){return Array.from(e.childNodes)}function $(e,t,a,r){for(let n=0;n<e.length;n+=1){const r=e[n];if(r.nodeName===t){let t=0;const l=[];for(;t<r.attributes.length;){const e=r.attributes[t++];a[e.name]||l.push(e.name)}for(let e=0;e<l.length;e++)r.removeAttribute(l[e]);return e.splice(n,1)[0]}}return r?f(t):y(t)}function E(e,t){for(let a=0;a<e.length;a+=1){const r=e[a];if(3===r.nodeType)return r.data=""+t,e.splice(a,1)[0]}return g(t)}function M(e){return E(e," ")}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function T(e,t,a,r){e.style.setProperty(t,a,r?"important":"")}function I(e,t,a){e.classList[a?"add":"remove"](t)}class A{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,a=null){this.e||(this.e=y(t.nodeName),this.t=t,this.h(e)),this.i(a)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)u(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}function D(e){const t={};for(const a of e)t[a.name]=a.value;return t}let z;function q(e){z=e}function S(e){(function(){if(!z)throw new Error("Function called outside component initialization");return z})().$$.on_mount.push(e)}const _=[],L=[],B=[],N=[],P=Promise.resolve();let V=!1;function H(e){B.push(e)}let C=!1;const O=new Set;function R(){if(!C){C=!0;do{for(let e=0;e<_.length;e+=1){const t=_[e];q(t),U(t.$$)}for(q(null),_.length=0;L.length;)L.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];O.has(t)||(O.add(t),t())}B.length=0}while(_.length);for(;N.length;)N.pop()();V=!1,C=!1,O.clear()}}function U(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}const j=new Set;function Y(e,t){e&&e.i&&(j.delete(e),e.i(t))}function X(e,t){e.d(1),t.delete(e.key)}function W(e,t){-1===e.$$.dirty[0]&&(_.push(e),V||(V=!0,P.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,o,i,s,p,c,h=[-1]){const u=z;q(t);const y=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:p,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:h,skip_bound:!1};let f=!1;if(y.ctx=i?i(t,o.props||{},((e,a,...r)=>{const n=r.length?r[0]:a;return y.ctx&&p(y.ctx[e],y.ctx[e]=n)&&(!y.skip_bound&&y.bound[e]&&y.bound[e](n),f&&W(t,e)),a})):[],y.update(),f=!0,n(y.before_update),y.fragment=!!s&&s(y.ctx),o.target){if(o.hydrate){const e=b(o.target);y.fragment&&y.fragment.l(e),e.forEach(d)}else y.fragment&&y.fragment.c();o.intro&&Y(t.$$.fragment),function(e,t,r,o){const{fragment:i,on_mount:s,on_destroy:p,after_update:c}=e.$$;i&&i.m(t,r),o||H((()=>{const t=s.map(a).filter(l);p?p.push(...t):n(t),e.$$.on_mount=[]})),c.forEach(H)}(t,o.target,o.anchor,o.customElement),R()}q(u)}let J;"function"==typeof HTMLElement&&(J=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(a).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,a){this[e]=a}disconnectedCallback(){n(this.$$.on_disconnect)}$destroy(){!function(e,t){const a=e.$$;null!==a.fragment&&(n(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});const G=[];function K(t,a=e){let r;const n=[];function l(e){if(o(t,e)&&(t=e,r)){const e=!G.length;for(let a=0;a<n.length;a+=1){const e=n[a];e[1](),G.push(e,t)}if(e){for(let e=0;e<G.length;e+=2)G[e][0](G[e+1]);G.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(o,i=e){const s=[o,i];return n.push(s),1===n.length&&(r=a(l)||e),o(t),()=>{const e=n.indexOf(s);-1!==e&&n.splice(e,1),0===n.length&&(r(),r=null)}}}}function Q(t,a,r){const o=!Array.isArray(t),s=o?[t]:t,p=a.length<2;return{subscribe:K(r,(t=>{let r=!1;const c=[];let h=0,u=e;const d=()=>{if(h)return;u();const r=a(o?c[0]:c,t);p?t(r):u=l(r)?r:e},y=s.map(((e,t)=>i(e,(e=>{c[t]=e,h&=~(1<<t),r&&d()}),(()=>{h|=1<<t}))));return r=!0,d(),function(){n(y),u()}})).subscribe}}const Z=e=>{const t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),r=Math.floor(e-3600*t-60*a);return(t>0?[t,a,r]:[a,r]).map((e=>e<10?"0"+e:""+e)).join(":")},ee=/mobile/i.test(window.navigator.userAgent);function te(e){if(e){const t=(e=e.replace(/([^\]^\n])\[/g,((e,t)=>t+"\n["))).split("\n");let a=[];const r=t.length;for(let e=0;e<r;e++){const r=t[e].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),n=t[e].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(r){const e=r.length;for(let t=0;t<e;t++){const e=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[t]),l=60*e[1]+parseInt(e[2])+(e[4]?parseInt(e[4])/(2===(e[4]+"").length?100:1e3):0);a.push([l,n])}}}return a=a.filter((e=>e[1])),a.sort(((e,t)=>e[0]-t[0])),a}return[]}const ae=[];function re(e,t,a){const r=e.slice();return r[66]=t[a],r[68]=a,r}function ne(e,t,a){const r=e.slice();return r[69]=t[a],r[71]=a,r}function le(e){let t,a,r;return{c(){t=y("div"),a=f("svg"),r=f("path"),this.h()},l(e){t=$(e,"DIV",{class:!0});var n=b(t);a=$(n,"svg",{xmlns:!0,version:!0,viewBox:!0},1);var l=b(a);r=$(l,"path",{d:!0},1),b(r).forEach(d),l.forEach(d),n.forEach(d),this.h()},h(){w(r,"d","M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"),w(a,"xmlns","http://www.w3.org/2000/svg"),w(a,"version","1.1"),w(a,"viewBox","0 0 16 31"),w(t,"class","aplayer-button aplayer-play")},m(e,n){u(e,t,n),h(t,a),h(a,r)},d(e){e&&d(t)}}}function oe(e){let t,a,r;return{c(){t=y("div"),a=f("svg"),r=f("path"),this.h()},l(e){t=$(e,"DIV",{class:!0});var n=b(t);a=$(n,"svg",{xmlns:!0,version:!0,viewBox:!0},1);var l=b(a);r=$(l,"path",{d:!0},1),b(r).forEach(d),l.forEach(d),n.forEach(d),this.h()},h(){w(r,"d","M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"),w(a,"xmlns","http://www.w3.org/2000/svg"),w(a,"version","1.1"),w(a,"viewBox","0 0 17 32"),w(t,"class","aplayer-button aplayer-pause")},m(e,n){u(e,t,n),h(t,a),h(a,r)},d(e){e&&d(t)}}}function ie(e){let t,a,r=[],n=new Map,l=e[6];const o=e=>e[69][0];for(let i=0;i<l.length;i+=1){let t=ne(e,l,i),a=o(t);n.set(a,r[i]=se(a,t))}return{c(){t=y("div"),a=y("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=$(e,"DIV",{class:!0});var n=b(t);a=$(n,"DIV",{class:!0,style:!0});var l=b(a);for(let t=0;t<r.length;t+=1)r[t].l(l);l.forEach(d),n.forEach(d),this.h()},h(){w(a,"class","aplayer-lrc-contents"),T(a,"transform","translateY("+-16*Math.max(e[7],0)+"px)"),w(t,"class","aplayer-lrc")},m(e,n){u(e,t,n),h(t,a);for(let t=0;t<r.length;t+=1)r[t].m(a,null)},p(e,t){192&t[0]&&(l=e[6],r=function(e,t,a,r,n,l,o,i,s,p,c,h){let u=e.length,d=l.length,y=u;const f={};for(;y--;)f[e[y].key]=y;const g=[],m=new Map,v=new Map;for(y=d;y--;){const e=h(n,l,y),i=a(e);let s=o.get(i);s?r&&s.p(e,t):(s=p(i,e),s.c()),m.set(i,g[y]=s),i in f&&v.set(i,Math.abs(y-f[i]))}const x=new Set,w=new Set;function b(e){Y(e,1),e.m(i,c),o.set(e.key,e),c=e.first,d--}for(;u&&d;){const t=g[d-1],a=e[u-1],r=t.key,n=a.key;t===a?(c=t.first,u--,d--):m.has(n)?!o.has(r)||x.has(r)?b(t):w.has(n)?u--:v.get(r)>v.get(n)?(w.add(r),b(t)):(x.add(n),u--):(s(a,o),u--)}for(;u--;){const t=e[u];m.has(t.key)||s(t,o)}for(;d;)b(g[d-1]);return g}(r,t,o,1,e,l,n,a,X,se,null,ne)),128&t[0]&&T(a,"transform","translateY("+-16*Math.max(e[7],0)+"px)")},d(e){e&&d(t);for(let t=0;t<r.length;t+=1)r[t].d()}}}function se(e,t){let a,r,n,l=t[69][1]+"";return{key:e,first:null,c(){a=y("p"),r=g(l),n=m(),this.h()},l(e){a=$(e,"P",{});var t=b(a);r=E(t,l),n=M(t),t.forEach(d),this.h()},h(){I(a,"aplayer-lrc-current",t[71]===t[7]),this.first=a},m(e,t){u(e,a,t),h(a,r),h(a,n)},p(e,n){t=e,64&n[0]&&l!==(l=t[69][1]+"")&&k(r,l),192&n[0]&&I(a,"aplayer-lrc-current",t[71]===t[7])},d(e){e&&d(a)}}}function pe(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new A(r)},m(e,t){a.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"\n                  /></svg\n        >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function ce(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new A(r)},m(e,t){a.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"\n                  /></svg\n                >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function he(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new A(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function ue(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new A(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function de(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new A(r)},m(e,t){a.m(' <svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function ye(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new A(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 33 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function fe(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new A(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function ge(t){let a,r,n,l,o;return{c(){a=y("button"),r=f("svg"),n=f("path"),this.h()},l(e){a=$(e,"BUTTON",{type:!0,class:!0});var t=b(a);r=$(t,"svg",{xmlns:!0,version:!0,viewBox:!0},1);var l=b(r);n=$(l,"path",{d:!0},1),b(n).forEach(d),l.forEach(d),t.forEach(d),this.h()},h(){w(n,"d","M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"),w(r,"xmlns","http://www.w3.org/2000/svg"),w(r,"version","1.1"),w(r,"viewBox","0 0 22 32"),w(a,"type","button"),w(a,"class","aplayer-icon aplayer-icon-menu")},m(e,i){u(e,a,i),h(a,r),h(r,n),l||(o=x(a,"click",t[54]),l=!0)},p:e,d(e){e&&d(a),l=!1,o()}}}function me(e){let t;return{c(){t=y("span"),this.h()},l(e){t=$(e,"SPAN",{class:!0}),b(t).forEach(d),this.h()},h(){w(t,"class","aplayer-list-cur")},m(e,a){u(e,t,a)},d(e){e&&d(t)}}}function ve(e){let t,a,r,n,l,o,i,s,p,c,f,v,T,I=e[68]+1+"",A=e[66].name+"",D=e[66].artist+"",z=e[68]===e[4].playingIndex&&me();function q(){return e[55](e[68])}return{c(){t=y("li"),z&&z.c(),a=m(),r=y("span"),n=g(I),l=m(),o=y("span"),i=g(A),s=m(),p=y("span"),c=g(D),f=m(),this.h()},l(e){t=$(e,"LI",{});var h=b(t);z&&z.l(h),a=M(h),r=$(h,"SPAN",{class:!0});var u=b(r);n=E(u,I),u.forEach(d),l=M(h),o=$(h,"SPAN",{class:!0});var y=b(o);i=E(y,A),y.forEach(d),s=M(h),p=$(h,"SPAN",{class:!0});var g=b(p);c=E(g,D),g.forEach(d),f=M(h),h.forEach(d),this.h()},h(){w(r,"class","aplayer-list-index"),w(o,"class","aplayer-list-title"),w(p,"class","aplayer-list-artist")},m(e,d){u(e,t,d),z&&z.m(t,null),h(t,a),h(t,r),h(r,n),h(t,l),h(t,o),h(o,i),h(t,s),h(t,p),h(p,c),h(t,f),v||(T=x(t,"click",q),v=!0)},p(r,n){(e=r)[68]===e[4].playingIndex?z||(z=me(),z.c(),z.m(t,a)):z&&(z.d(1),z=null),16&n[0]&&A!==(A=e[66].name+"")&&k(i,A),16&n[0]&&D!==(D=e[66].artist+"")&&k(c,D)},d(e){e&&d(t),z&&z.d(),v=!1,T()}}}function xe(t){let a,r,o,i,s,p,c,f,v,A,D,z,q,S,_,L,B,N,P,V,H,C,O,R,U,j,Y,X,W,F,J,G,K,Q,Z,te,ae,ne,se,me,xe,we,be,$e,Ee,Me,ke,Te,Ie=t[5].name+"",Ae=t[5].artist+"",De=t[19].ptime+"",ze=t[19].duration+"";function qe(e,t){return e[1].paused?le:oe}let Se=qe(t),_e=Se(t),Le=t[5].lrc&&ie(t);function Be(e,t){return e[21].muted||e[1].muted?ce:pe}let Ne=Be(t),Pe=Ne(t);function Ve(e,t){return"random"===e[17].order?ue:he}let He=Ve(t),Ce=He(t);function Oe(e,t){return"none"===e[17].loop?fe:"one"===e[17].loop?ye:"all"===e[17].loop?de:void 0}let Re=Oe(t),Ue=Re&&Re(t),je=t[4].audio.length>1&&ge(t),Ye=t[4].audio,Xe=[];for(let e=0;e<Ye.length;e+=1)Xe[e]=ve(re(t,Ye,e));return{c(){a=y("div"),r=y("div"),o=y("div"),_e.c(),i=m(),s=y("div"),p=y("div"),c=y("span"),f=g(Ie),v=m(),A=y("span"),D=g(Ae),z=m(),Le&&Le.c(),q=m(),S=y("div"),_=y("div"),L=y("div"),B=y("div"),N=m(),P=y("div"),V=y("div"),H=y("span"),C=m(),O=y("div"),R=y("span"),U=y("span"),j=g(De),Y=g(" /\n            "),X=y("span"),W=g(ze),F=m(),J=y("span"),G=m(),K=y("div"),Q=y("button"),Pe.c(),Z=m(),te=y("div"),ae=y("div"),ne=y("div"),se=m(),me=y("button"),Ce.c(),xe=m(),we=y("button"),Ue&&Ue.c(),be=m(),je&&je.c(),$e=m(),Ee=y("div"),Me=y("ol");for(let e=0;e<Xe.length;e+=1)Xe[e].c();this.c=e,this.h()},l(e){a=$(e,"DIV",{class:!0});var t=b(a);r=$(t,"DIV",{class:!0});var n=b(r);o=$(n,"DIV",{class:!0,style:!0});var l=b(o);_e.l(l),l.forEach(d),i=M(n),s=$(n,"DIV",{class:!0});var h=b(s);p=$(h,"DIV",{class:!0});var u=b(p);c=$(u,"SPAN",{class:!0});var y=b(c);f=E(y,Ie),y.forEach(d),v=M(u),A=$(u,"SPAN",{class:!0});var g=b(A);D=E(g,Ae),g.forEach(d),u.forEach(d),z=M(h),Le&&Le.l(h),q=M(h),S=$(h,"DIV",{class:!0});var m=b(S);_=$(m,"DIV",{class:!0});var x=b(_);L=$(x,"DIV",{class:!0});var w=b(L);B=$(w,"DIV",{class:!0,style:!0}),b(B).forEach(d),N=M(w),P=$(w,"DIV",{class:!0,style:!0});var k=b(P);V=$(k,"DIV",{class:!0});var T=b(V);H=$(T,"SPAN",{class:!0,style:!0}),b(H).forEach(d),T.forEach(d),k.forEach(d),w.forEach(d),x.forEach(d),C=M(m),O=$(m,"DIV",{class:!0});var I=b(O);R=$(I,"SPAN",{class:!0});var ee=b(R);U=$(ee,"SPAN",{class:!0});var re=b(U);j=E(re,De),re.forEach(d),Y=E(ee," /\n            "),X=$(ee,"SPAN",{class:!0});var le=b(X);W=E(le,ze),le.forEach(d),ee.forEach(d),F=M(I),J=$(I,"SPAN",{hidden:!0}),b(J).forEach(d),G=M(I),K=$(I,"DIV",{class:!0});var oe=b(K);Q=$(oe,"BUTTON",{type:!0,class:!0});var ie=b(Q);Pe.l(ie),ie.forEach(d),Z=M(oe),te=$(oe,"DIV",{class:!0});var pe=b(te);ae=$(pe,"DIV",{class:!0});var ce=b(ae);ne=$(ce,"DIV",{class:!0,style:!0}),b(ne).forEach(d),ce.forEach(d),pe.forEach(d),oe.forEach(d),se=M(I),me=$(I,"BUTTON",{type:!0,class:!0});var he=b(me);Ce.l(he),he.forEach(d),xe=M(I),we=$(I,"BUTTON",{type:!0,class:!0});var ue=b(we);Ue&&Ue.l(ue),ue.forEach(d),be=M(I),je&&je.l(I),I.forEach(d),m.forEach(d),h.forEach(d),$e=M(n),Ee=$(n,"DIV",{class:!0,style:!0});var de=b(Ee);Me=$(de,"OL",{});var ye=b(Me);for(let a=0;a<Xe.length;a+=1)Xe[a].l(ye);ye.forEach(d),de.forEach(d),n.forEach(d),t.forEach(d),this.h()},h(){w(o,"class","aplayer-pic"),T(o,"background-image","url( "+t[5].cover+" )"),w(c,"class","aplayer-title"),w(A,"class","aplayer-artist"),w(p,"class","aplayer-music"),w(B,"class","aplayer-loaded"),T(B,"width",t[18].bufferPercentage),w(H,"class","aplayer-loading-icon"),T(H,"display",t[20]?"inline":"none"),w(V,"class","aplayer-thumb"),w(P,"class","aplayer-played"),T(P,"width",t[19].playPercentage),w(L,"class","aplayer-bar"),w(_,"class","aplayer-bar-wrap"),w(U,"class","aplayer-ptime"),w(X,"class","aplayer-dtime"),w(R,"class","aplayer-time-inner"),J.hidden=!0,w(Q,"type","button"),w(Q,"class","aplayer-icon aplayer-icon-volume-down"),w(ne,"class","aplayer-volume"),T(ne,"height",t[1].muted?"0px":t[21].volumePercentage),w(ae,"class","aplayer-volume-bar"),w(te,"class","aplayer-volume-bar-wrap"),w(K,"class","aplayer-volume-wrap"),w(me,"type","button"),w(me,"class","aplayer-icon aplayer-icon-order"),w(we,"type","button"),w(we,"class","aplayer-icon aplayer-icon-loop"),w(O,"class","aplayer-time"),w(S,"class","aplayer-controller"),w(s,"class","aplayer-info"),w(Ee,"class","aplayer-list"),T(Ee,"height",t[17].showList?`${t[16]}px`:"0px"),w(r,"class","aplayer-body "),w(a,"class","aplayer"),I(a,"aplayer-withlrc",t[6].length>0),I(a,"aplayer-withlist",t[4].audio.length>1),I(a,"aplayer-narrow",t[0]),I(a,"aplayer-mobile",ee)},m(e,n){u(e,a,n),h(a,r),h(r,o),_e.m(o,null),h(r,i),h(r,s),h(s,p),h(p,c),h(c,f),h(p,v),h(p,A),h(A,D),h(s,z),Le&&Le.m(s,null),h(s,q),h(s,S),h(S,_),h(_,L),h(L,B),h(L,N),h(L,P),h(P,V),h(V,H),H.innerHTML='<svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    version="1.1"\n                    viewBox="0 0 32 32"\n                    ><path\n                      d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"\n                    /></svg\n                  >',t[49](_),h(S,C),h(S,O),h(O,R),h(R,U),h(U,j),h(R,Y),h(R,X),h(X,W),h(O,F),h(O,J),h(O,G),h(O,K),h(K,Q),Pe.m(Q,null),h(K,Z),h(K,te),h(te,ae),h(ae,ne),t[51](ae),h(O,se),h(O,me),Ce.m(me,null),h(O,xe),h(O,we),Ue&&Ue.m(we,null),h(O,be),je&&je.m(O,null),h(r,$e),h(r,Ee),h(Ee,Me);for(let t=0;t<Xe.length;t+=1)Xe[t].m(Me,null);t[56](Ee),t[57](a),ke||(Te=[x(o,"click",t[48]),x(_,"mousedown",(function(){l(t[13])&&t[13].apply(this,arguments)})),x(_,"mousemove",(function(){l(t[14])&&t[14].apply(this,arguments)})),x(_,"mouseup",(function(){l(t[15])&&t[15].apply(this,arguments)})),x(_,"mouseleave",(function(){l(t[15])&&t[15].apply(this,arguments)})),x(_,"touchstart",(function(){l(t[13])&&t[13].apply(this,arguments)})),x(_,"touchmove",(function(){l(t[14])&&t[14].apply(this,arguments)})),x(_,"touchend",(function(){l(t[15])&&t[15].apply(this,arguments)})),x(Q,"click",t[50],!0),x(te,"mousedown",(function(){l(t[10])&&t[10].apply(this,arguments)})),x(te,"mousemove",(function(){l(t[11])&&t[11].apply(this,arguments)})),x(te,"mouseup",(function(){l(t[12])&&t[12].apply(this,arguments)})),x(te,"mouseleave",(function(){l(t[12])&&t[12].apply(this,arguments)})),x(te,"touchstart",(function(){l(t[10])&&t[10].apply(this,arguments)})),x(te,"touchmove",(function(){l(t[11])&&t[11].apply(this,arguments)})),x(te,"touchend",(function(){l(t[12])&&t[12].apply(this,arguments)})),x(me,"click",t[52]),x(we,"click",t[53])],ke=!0)},p(e,r){if(Se!==(Se=qe(t=e))&&(_e.d(1),_e=Se(t),_e&&(_e.c(),_e.m(o,null))),32&r[0]&&T(o,"background-image","url( "+t[5].cover+" )"),32&r[0]&&Ie!==(Ie=t[5].name+"")&&k(f,Ie),32&r[0]&&Ae!==(Ae=t[5].artist+"")&&k(D,Ae),t[5].lrc?Le?Le.p(t,r):(Le=ie(t),Le.c(),Le.m(s,q)):Le&&(Le.d(1),Le=null),262144&r[0]&&T(B,"width",t[18].bufferPercentage),1048576&r[0]&&T(H,"display",t[20]?"inline":"none"),524288&r[0]&&T(P,"width",t[19].playPercentage),524288&r[0]&&De!==(De=t[19].ptime+"")&&k(j,De),524288&r[0]&&ze!==(ze=t[19].duration+"")&&k(W,ze),Ne===(Ne=Be(t))&&Pe?Pe.p(t,r):(Pe.d(1),Pe=Ne(t),Pe&&(Pe.c(),Pe.m(Q,null))),2097154&r[0]&&T(ne,"height",t[1].muted?"0px":t[21].volumePercentage),He===(He=Ve(t))&&Ce?Ce.p(t,r):(Ce.d(1),Ce=He(t),Ce&&(Ce.c(),Ce.m(me,null))),Re===(Re=Oe(t))&&Ue?Ue.p(t,r):(Ue&&Ue.d(1),Ue=Re&&Re(t),Ue&&(Ue.c(),Ue.m(we,null))),t[4].audio.length>1?je?je.p(t,r):(je=ge(t),je.c(),je.m(O,null)):je&&(je.d(1),je=null),18&r[0]){let e;for(Ye=t[4].audio,e=0;e<Ye.length;e+=1){const a=re(t,Ye,e);Xe[e]?Xe[e].p(a,r):(Xe[e]=ve(a),Xe[e].c(),Xe[e].m(Me,null))}for(;e<Xe.length;e+=1)Xe[e].d(1);Xe.length=Ye.length}196608&r[0]&&T(Ee,"height",t[17].showList?`${t[16]}px`:"0px"),64&r[0]&&I(a,"aplayer-withlrc",t[6].length>0),16&r[0]&&I(a,"aplayer-withlist",t[4].audio.length>1),1&r[0]&&I(a,"aplayer-narrow",t[0])},i:e,o:e,d(e){e&&d(a),_e.d(),Le&&Le.d(),t[49](null),Pe.d(),t[51](null),Ce.d(),Ue&&Ue.d(),je&&je.d(),function(e,t){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(t)}(Xe,e),t[56](null),t[57](null),ke=!1,n(Te)}}}function we(e,a,r){let n,l,o,i,h,u,d,y,f,g,m,v,x,w,b;var $,E,M;const{player:k,playList:T,currentSong:I,rdTime:A,currentTime:D,duration:z,rdBufTime:q,wtBufTime:_,loading:B,lrc:N,controlState:P,volumeState:V}=function(){const e=document.createElement("audio");ae.push(e);let t=K(0),a=K(NaN);const r=Q([t,a],(([e,t])=>{let a=e/t;return a=Math.max(a,0),a=Math.min(a,1),a*=100,{ptime:Z(e),duration:Z(t),playPercentage:`${a}%`}}));let n=K(0);const l=Q([n,a],(([e,t])=>{let a=e/t;return a=Math.max(a,0),a=Math.min(a,1),a*=100,{bufferPercentage:`${a}%`,bufTime:e}})),o=K({playingIndex:0,audio:[]}),i=K({volume:.7,loop:"all",order:"list",showList:!0}),s=Q(i,(e=>({volumePercentage:100*e.volume+"%",muted:0===e.volume}))),p=Q(o,(e=>e.audio[e.playingIndex])),c=Q([l,t],(([{bufTime:t},a])=>!e.paused&&(e.readyState<=HTMLMediaElement.HAVE_CURRENT_DATA||t-a<2&&e.readyState===HTMLMediaElement.HAVE_FUTURE_DATA))),h=Q(p,((e,t)=>{if(!e||!e.lrc)return void t([]);const a=e.lrc;a.startsWith("http")?fetch(a).then((e=>{if(!e.ok)throw new Error(`${e.statusText} canot loading lrc from ${a}`);return e.text()})).then((e=>{t(te(e))})).catch((e=>{throw t([]),console.error(e),e})):t(te(a))}),[]);return{player:e,playList:o,currentSong:p,rdTime:r,currentTime:t,duration:a,rdBufTime:l,wtBufTime:n,loading:c,lrc:h,controlState:i,volumeState:s}}();s(e,T,(e=>r(4,u=e))),s(e,I,(e=>r(5,d=e))),s(e,A,(e=>r(19,x=e))),s(e,D,(e=>r(60,f=e))),s(e,z,(e=>r(61,g=e))),s(e,q,(e=>r(18,v=e))),s(e,_,(e=>r(62,m=e))),s(e,B,(e=>r(20,w=e))),s(e,N,(e=>r(6,y=e))),s(e,P,(e=>r(17,h=e))),s(e,V,(e=>r(21,b=e)));let{audio:H}=a,{order:C=h.order}=a,{loop:O=h.loop}=a,{volume:R=h.volume}=a,{mini:U=!1}=a,{mutex:j=!0}=a,{autoplay:Y=!1}=a,{theme:X}=a,W=!Y;const F=()=>{j&&(console.log(ae),ae.forEach((e=>e.pause()))),k.play().catch((e=>{console.error(e)}))};let J=-1;k.addEventListener("timeupdate",(()=>{if(c(D,f=k.currentTime,f),console.log(J),i.includes("lrc"))for(;J+1<y.length&&k.currentTime>=y[J+1][0];)r(7,J++,J)})),k.addEventListener("volumechange",(()=>{c(P,h.volume=k.volume,h)})),k.addEventListener("loadedmetadata",(()=>{c(z,g=k.duration,g)})),k.addEventListener("error",(()=>{console.warn("An audio error has occurred, player will skip forward in 2 seconds."),u.audio.length>1&&setTimeout((()=>{c(T,u.playingIndex=(u.playingIndex+1)%u.audio.length,u),k.paused&&F()}),2e3)}));const G=()=>{const e=k.buffered.length?k.buffered.end(k.buffered.length-1):0;c(_,m=e,m)};k.addEventListener("progress",G),k.addEventListener("canplay",G),k.addEventListener("durationchange",(()=>{c(z,g=k.duration,g)}));let ee,re,ne,le,oe,ie,se,pe,ce;k.addEventListener("ended",(()=>{const e=Array.isArray(u.audio)?u.audio:[u.audio],t=(u.playingIndex+1)%e.length;if("none"===h.loop){if("list"===h.order)u.playingIndex<e.length-1?(c(T,u.playingIndex=t,u),r(1,k.currentTime=0,k)):(c(T,u.playingIndex=(u.playingIndex+1)%e.length,u),r(44,W=!0),k.pause());else if("random"===h.order){const a=Math.floor(e.length*Math.random());a===u.playingIndex?c(T,u.playingIndex=t,u):c(T,u.playingIndex=a,u),r(1,k.currentTime=0,k)}}else"one"===h.loop?r(1,k.currentTime=0,k):"all"===h.loop&&c(T,u.playingIndex=t,u)}));let he,ue=0;S((()=>{"localhost"===location.hostname&&(window.theAudio=k);const e=function(e,t){let a=!1;return{volumeDragStart:()=>{a=!0},volumeDragMove:r=>{if(a){let a=1-((r.clientY||r.changedTouches[0].clientY)-t.getBoundingClientRect().top)/t.clientHeight;a=Math.max(a,0),a=Math.min(a,1),e.volume=a}},volumeDragEnd:r=>{if(a){let n=1-((r.clientY||r.changedTouches[0].clientY)-t.getBoundingClientRect().top)/t.clientHeight;n=Math.max(n,0),n=Math.min(n,1),e.volume=n,a=!1}}}}(k,ee);r(10,ne=e.volumeDragStart),r(11,le=e.volumeDragMove),r(12,oe=e.volumeDragEnd);const t=function(e,t){let a=!1;return{progressDragStart:()=>{a=!0},progressDragMove:r=>{if(a){let a=((r.clientX||r.changedTouches[0].clientX)-t.getBoundingClientRect().left)/t.clientWidth;a=Math.max(a,0),a=Math.min(a,1),e.currentTime=e.duration*a}},progressDragEnd:r=>{if(a){a=!1;let n=((r.clientX||r.changedTouches[0].clientX)-t.getBoundingClientRect().left)/t.clientWidth;n=Math.max(n,0),n=Math.min(n,1),e.currentTime=e.duration*n}}}}(k,re);r(13,ie=t.progressDragStart),r(14,se=t.progressDragMove),r(15,pe=t.progressDragEnd)}));return e.$$set=e=>{r(65,a=t(t({},a),p(e))),"audio"in e&&r(34,H=e.audio),"order"in e&&r(35,C=e.order),"loop"in e&&r(36,O=e.loop),"volume"in e&&r(37,R=e.volume),"mini"in e&&r(0,U=e.mini),"mutex"in e&&r(38,j=e.mutex),"autoplay"in e&&r(39,Y=e.autoplay),"theme"in e&&r(40,X=e.theme)},e.$$.update=()=>{8&e.$$.dirty[1]&&r(45,n="string"==typeof H?JSON.parse(H):H),16384&e.$$.dirty[1]&&c(T,u.audio=Array.isArray(n)?n:[n],u),r(46,l=!function(e,t){const a=e[t];return!(null==a||"false"===a)}(a,"list_folded")&&u.audio.length>1),32768&e.$$.dirty[1]&&c(P,h.showList=l,h),32&e.$$.dirty[1]&&c(P,h.loop=O,h),16&e.$$.dirty[1]&&c(P,h.order=C,h),64&e.$$.dirty[1]&&c(P,h.volume=R,h),64&e.$$.dirty[1]&&r(1,k.volume=R,k),32&e.$$.dirty[0]&&r(1,k.src=d.url,k),32&e.$$.dirty[0]|3584&e.$$.dirty[1]&&r(47,o=null!==r(42,E=null!==r(41,$=d.theme)&&void 0!==$?$:X)&&void 0!==E?E:"#fadfa3"),8&e.$$.dirty[0]|65536&e.$$.dirty[1]&&he&&he.style.setProperty("--theme-color",o),64&e.$$.dirty[0]&&(i=y&&y.length>0?"withlrc":""),2&e.$$.dirty[0]|8192&e.$$.dirty[1]&&(k.src,r(7,J=-1),W||F(),r(44,W=!1)),4&e.$$.dirty[0]|4096&e.$$.dirty[1]&&r(16,ue=null!==r(43,M=null==ce?void 0:ce.scrollHeight)&&void 0!==M?M:0)},a=p(a),[U,k,ce,he,u,d,y,J,ee,re,ne,le,oe,ie,se,pe,ue,h,v,x,w,b,T,I,A,D,z,q,_,B,N,P,V,F,H,C,O,R,j,Y,X,$,E,M,W,n,l,o,()=>{k.paused?F():k.pause()},function(e){L[e?"unshift":"push"]((()=>{re=e,r(9,re)}))},()=>{r(1,k.muted=!k.muted,k)},function(e){L[e?"unshift":"push"]((()=>{ee=e,r(8,ee)}))},()=>{c(P,h.order="list"===h.order?"random":"list",h)},()=>{"all"===h.loop?c(P,h.loop="one",h):"one"===h.loop?c(P,h.loop="none",h):"none"===h.loop&&c(P,h.loop="all",h)},()=>{c(P,h.showList=!h.showList,h)},e=>{c(T,u.playingIndex=e,u),r(1,k.currentTime=0,k)},function(e){L[e?"unshift":"push"]((()=>{ce=e,r(2,ce)}))},function(e){L[e?"unshift":"push"]((()=>{he=e,r(3,he)}))}]}class be extends J{constructor(e){super(),this.shadowRoot.innerHTML="<style>.aplayer{--aplayer-height:66px;--lrc-height:30px;--aplayer-height-lrc:calc(var(--aplayer-height) + var(--lrc-height) - 6px);--theme-color:#fadfa3;position:relative;background:#fff;box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);font-family:Arial, Helvetica, sans-serif;margin:5px;overflow:hidden;border-radius:2px;user-select:none;line-height:normal}.aplayer svg{width:100%;height:100%}.aplayer svg path{fill:#fff}.aplayer .aplayer-icon{width:15px;height:15px;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:0.8;vertical-align:middle;padding:0;font-size:12px;margin:0;display:inline-block}.aplayer .aplayer-icon path{transition:all 0.2s ease-in-out}.aplayer .aplayer-pic{position:relative;float:left;height:var(--aplayer-height);width:var(--aplayer-height);background-color:antiquewhite;background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;transition:all 0.3s ease;cursor:pointer}.aplayer .aplayer-pic:hover .aplayer-button{opacity:1}.aplayer .aplayer-pic .aplayer-button{position:absolute;border-radius:50%;opacity:0.8;text-shadow:0 1px 1px rgba(0, 0, 0, 0.2);box-shadow:0 1px 1px rgba(0, 0, 0, 0.2);background:rgba(0, 0, 0, 0.2);transition:all 0.1s ease}.aplayer .aplayer-pic .aplayer-play{width:26px;height:26px}.aplayer .aplayer-pic .aplayer-play svg{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer .aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer .aplayer-pic .aplayer-pause svg{position:absolute;top:2px;left:2px;height:12px;width:12px}.aplayer .aplayer-info{margin-left:66px;padding:14px 7px 0 10px;height:66px;box-sizing:border-box}.aplayer .aplayer-info .aplayer-music{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:text;margin:0 0 13px 5px;padding-bottom:2px;cursor:default}.aplayer .aplayer-info .aplayer-music .aplayer-title{font-size:14px}.aplayer .aplayer-info .aplayer-music .aplayer-artist{font-size:12px;color:#666}.aplayer .aplayer-info .aplayer-controller{display:flex;position:relative}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap{flex:1;margin:0 0 0 5px;padding:4px 0;cursor:pointer !important}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap:hover .aplayer-bar .aplayer-played .aplayer-thumb{transform:scale(1)}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;transition:all 0.5s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px;background:var(--theme-color) none repeat scroll 0 0}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:10px;width:10px;border-radius:50%;cursor:pointer;transition:all 0.3s ease-in-out;background:var(--theme-color) none repeat scroll 0 0;transform:scale(0)}.aplayer .aplayer-info .aplayer-controller .aplayer-loading-icon svg{display:block;position:absolute;animation:rotate 1s linear infinite}.aplayer .aplayer-info .aplayer-controller .aplayer-time{position:relative;right:0;bottom:4px;height:17px;color:#999;font-size:11px;padding-left:7px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner{vertical-align:center}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;transition:all 0.2s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon path{fill:#666}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap{display:inline-block;position:relative;margin-left:3px;cursor:pointer}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{height:40px}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap{position:absolute;bottom:15px;right:-3px;width:25px;height:0;z-index:99;overflow:hidden;transition:all 0.2s ease-in-out}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa;border-radius:2.5px;overflow:hidden}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{background:var(--theme-color) none repeat scroll 0 0;position:absolute;bottom:0;right:0;width:5px;transition:all 0.1s ease}.aplayer .aplayer-lrc{display:none;position:relative;height:var(--lrc-height);text-align:center;overflow:hidden;margin:-10px 0 7px}.aplayer .aplayer-lrc p{font-size:12px;color:#666;line-height:16px !important;height:16px !important;padding:0 !important;margin:0 !important;transition:all 0.5s ease-out;opacity:0.4;overflow:hidden}.aplayer .aplayer-lrc p.aplayer-lrc-current{opacity:1;overflow:visible;height:initial !important;min-height:16px}.aplayer .aplayer-lrc .aplayer-lrc-contents{transition:all 0.5s ease-out;width:100%;user-select:text;cursor:default}.aplayer .aplayer-list{transition:all 0.5s ease;will-change:height;display:none;overflow:hidden;list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer .aplayer-list ol{list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer .aplayer-list li{position:relative;text-align:left;height:32px;line-height:32px;padding:0 15px;font-size:12px;border-top:1px solid #e9e9e9;cursor:pointer;transition:all 0.2s ease;overflow:hidden;margin:0}.aplayer .aplayer-list li:first-child{border-top:none}.aplayer .aplayer-list li:hover{background:#efefef}.aplayer .aplayer-list li .aplayer-list-cur{width:3px;height:22px;position:absolute;left:0;top:5px;cursor:pointer;background-color:var(--theme-color)}.aplayer .aplayer-list li .aplayer-list-index{color:#666;margin-right:12px;cursor:pointer}.aplayer .aplayer-list li .aplayer-list-artist{color:#666;float:right;cursor:pointer}.aplayer.aplayer-withlrc .aplayer-pic{height:var(--aplayer-height-lrc);width:var(--aplayer-height-lrc)}.aplayer.aplayer-withlrc .aplayer-info{margin-left:var(--aplayer-height-lrc);height:var(--aplayer-height-lrc);padding:10px 7px 0 7px}.aplayer.aplayer-withlrc .aplayer-lrc{display:block}.aplayer.aplayer-withlist .aplayer-list{display:block}.aplayer.aplayer-narrow{width:var(--aplayer-height)}.aplayer.aplayer-narrow .aplayer-info{display:none}.aplayer.aplayer-narrow .aplayer-list{display:none}.aplayer.aplayer-narrow .aplayer-pic,.aplayer.aplayer-narrow .aplayer-body{height:var(--aplayer-height);width:var(--aplayer-height)}.aplayer.aplayer-mobile .aplayer-icon-volume-down{display:none}@keyframes aplayer-roll{0%{left:0}100%{left:-100%}}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>",F(this,{target:this.shadowRoot,props:D(this.attributes),customElement:!0},we,xe,o,{audio:34,order:35,loop:36,volume:37,mini:0,mutex:38,autoplay:39,theme:40},[-1,-1,-1]),e&&(e.target&&u(e.target,this,e.anchor),e.props&&(this.$set(e.props),R()))}static get observedAttributes(){return["audio","order","loop","volume","mini","mutex","autoplay","theme"]}get audio(){return this.$$.ctx[34]}set audio(e){this.$set({audio:e}),R()}get order(){return this.$$.ctx[35]}set order(e){this.$set({order:e}),R()}get loop(){return this.$$.ctx[36]}set loop(e){this.$set({loop:e}),R()}get volume(){return this.$$.ctx[37]}set volume(e){this.$set({volume:e}),R()}get mini(){return this.$$.ctx[0]}set mini(e){this.$set({mini:e}),R()}get mutex(){return this.$$.ctx[38]}set mutex(e){this.$set({mutex:e}),R()}get autoplay(){return this.$$.ctx[39]}set autoplay(e){this.$set({autoplay:e}),R()}get theme(){return this.$$.ctx[40]}set theme(e){this.$set({theme:e}),R()}}return customElements.define("s-aplayer",be),be}));
