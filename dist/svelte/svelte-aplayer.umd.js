!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Aplayer=e()}(this,(function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function l(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}function i(t,e,n){t.$$.on_destroy.push(a(e,n))}function c(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t,e,n=e){return t.set(n),e}function h(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function y(){return m("")}function w(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function E(t,e,n,l){for(let s=0;s<t.length;s+=1){const l=t[s];if(l.nodeName===e){let e=0;const r=[];for(;e<l.attributes.length;){const t=l.attributes[e++];n[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)l.removeAttribute(r[t]);return t.splice(s,1)[0]}}return l?v(e):p(e)}function q(t,e){for(let n=0;n<t.length;n+=1){const l=t[n];if(3===l.nodeType)return l.data=""+e,t.splice(n,1)[0]}return m(e)}function b(t){return q(t," ")}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}function I(t,e,n){t.classList[n?"add":"remove"](e)}class D{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=p(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)d(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}let A;function S(t){A=t}function B(t){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(t)}const N=[],_=[],k=[],L=[],P=Promise.resolve();let V=!1;function z(t){k.push(t)}let O=!1;const H=new Set;function C(){if(!O){O=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];S(e),R(e.$$)}for(S(null),N.length=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];H.has(e)||(H.add(e),e())}k.length=0}while(N.length);for(;L.length;)L.pop()();V=!1,O=!1,H.clear()}}function R(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const U=new Set;function Y(t,e){t&&t.i&&(U.delete(t),t.i(e))}function j(t,e){t.d(1),e.delete(t.key)}function X(t,e){-1===t.$$.dirty[0]&&(N.push(t),V||(V=!0,P.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,o,a,i,c,u,h=[-1]){const d=A;S(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:l(),dirty:h,skip_bound:!1};let v=!1;if(p.ctx=a?a(e,o.props||{},((t,n,...l)=>{const s=l.length?l[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),v&&X(e,t)),n})):[],p.update(),v=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const t=x(o.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();o.intro&&Y(e.$$.fragment),function(t,e,l,o){const{fragment:a,on_mount:i,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,l),o||z((()=>{const e=i.map(n).filter(r);c?c.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(z)}(e,o.target,o.anchor,o.customElement),C()}S(d)}const F=[];function J(e,n=t){let l;const s=[];function r(t){if(o(e,t)&&(e=t,l)){const t=!F.length;for(let n=0;n<s.length;n+=1){const t=s[n];t[1](),F.push(t,e)}if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const i=[o,a];return s.push(i),1===s.length&&(l=n(r)||t),o(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(l(),l=null)}}}}function G(e,n,l){const o=!Array.isArray(e),i=o?[e]:e,c=n.length<2;return{subscribe:J(l,(e=>{let l=!1;const u=[];let h=0,d=t;const f=()=>{if(h)return;d();const l=n(o?u[0]:u,e);c?e(l):d=r(l)?l:t},p=i.map(((t,e)=>a(t,(t=>{u[e]=t,h&=~(1<<e),l&&f()}),(()=>{h|=1<<e}))));return l=!0,f(),function(){s(p),d()}})).subscribe}}const K=t=>{const e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),l=Math.floor(t-3600*e-60*n);return(e>0?[e,n,l]:[n,l]).map((t=>t<10?"0"+t:""+t)).join(":")},Q=/mobile/i.test(window.navigator.userAgent);function Z(t){if(t){const e=(t=t.replace(/([^\]^\n])\[/g,((t,e)=>e+"\n["))).split("\n");let n=[];const l=e.length;for(let t=0;t<l;t++){const l=e[t].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),s=e[t].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(l){const t=l.length;for(let e=0;e<t;e++){const t=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(l[e]),r=60*t[1]+parseInt(t[2])+(t[4]?parseInt(t[4])/(2===(t[4]+"").length?100:1e3):0);n.push([r,s])}}}return n=n.filter((t=>t[1])),n.sort(((t,e)=>t[0]-e[0])),n}return[]}const tt=[];function et(t,e,n){const l=t.slice();return l[66]=e[n],l[68]=n,l}function nt(t,e,n){const l=t.slice();return l[69]=e[n],l[71]=n,l}function lt(t){let e,n,l;return{c(){e=p("div"),n=v("svg"),l=v("path"),this.h()},l(t){e=E(t,"DIV",{class:!0});var s=x(e);n=E(s,"svg",{xmlns:!0,version:!0,viewBox:!0,class:!0},1);var r=x(n);l=E(r,"path",{d:!0,class:!0},1),x(l).forEach(f),r.forEach(f),s.forEach(f),this.h()},h(){$(l,"d","M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"),$(l,"class","svelte-3s9nfq"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"version","1.1"),$(n,"viewBox","0 0 16 31"),$(n,"class","svelte-3s9nfq"),$(e,"class","aplayer-button aplayer-play svelte-3s9nfq")},m(t,s){d(t,e,s),h(e,n),h(n,l)},d(t){t&&f(e)}}}function st(t){let e,n,l;return{c(){e=p("div"),n=v("svg"),l=v("path"),this.h()},l(t){e=E(t,"DIV",{class:!0});var s=x(e);n=E(s,"svg",{xmlns:!0,version:!0,viewBox:!0,class:!0},1);var r=x(n);l=E(r,"path",{d:!0,class:!0},1),x(l).forEach(f),r.forEach(f),s.forEach(f),this.h()},h(){$(l,"d","M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"),$(l,"class","svelte-3s9nfq"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"version","1.1"),$(n,"viewBox","0 0 17 32"),$(n,"class","svelte-3s9nfq"),$(e,"class","aplayer-button aplayer-pause svelte-3s9nfq")},m(t,s){d(t,e,s),h(e,n),h(n,l)},d(t){t&&f(e)}}}function rt(t){let e,n,l=[],s=new Map,r=t[6];const o=t=>t[69][0];for(let a=0;a<r.length;a+=1){let e=nt(t,r,a),n=o(e);s.set(n,l[a]=ot(n,e))}return{c(){e=p("div"),n=p("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=E(t,"DIV",{class:!0});var s=x(e);n=E(s,"DIV",{class:!0,style:!0});var r=x(n);for(let e=0;e<l.length;e+=1)l[e].l(r);r.forEach(f),s.forEach(f),this.h()},h(){$(n,"class","aplayer-lrc-contents svelte-3s9nfq"),T(n,"transform","translateY("+-16*Math.max(t[7],0)+"px)"),$(e,"class","aplayer-lrc svelte-3s9nfq")},m(t,s){d(t,e,s),h(e,n);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(t,e){192&e[0]&&(r=t[6],l=function(t,e,n,l,s,r,o,a,i,c,u,h){let d=t.length,f=r.length,p=d;const v={};for(;p--;)v[t[p].key]=p;const m=[],g=new Map,y=new Map;for(p=f;p--;){const t=h(s,r,p),a=n(t);let i=o.get(a);i?l&&i.p(t,e):(i=c(a,t),i.c()),g.set(a,m[p]=i),a in v&&y.set(a,Math.abs(p-v[a]))}const w=new Set,$=new Set;function x(t){Y(t,1),t.m(a,u),o.set(t.key,t),u=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],l=e.key,s=n.key;e===n?(u=e.first,d--,f--):g.has(s)?!o.has(l)||w.has(l)?x(e):$.has(s)?d--:y.get(l)>y.get(s)?($.add(l),x(e)):(w.add(s),d--):(i(n,o),d--)}for(;d--;){const e=t[d];g.has(e.key)||i(e,o)}for(;f;)x(m[f-1]);return m}(l,e,o,1,t,r,s,n,j,ot,null,nt)),128&e[0]&&T(n,"transform","translateY("+-16*Math.max(t[7],0)+"px)")},d(t){t&&f(e);for(let e=0;e<l.length;e+=1)l[e].d()}}}function ot(t,e){let n,l,s,r=e[69][1]+"";return{key:t,first:null,c(){n=p("p"),l=m(r),s=g(),this.h()},l(t){n=E(t,"P",{class:!0});var e=x(n);l=q(e,r),s=b(e),e.forEach(f),this.h()},h(){$(n,"class","svelte-3s9nfq"),I(n,"aplayer-lrc-current",e[71]===e[7]),this.first=n},m(t,e){d(t,n,e),h(n,l),h(n,s)},p(t,s){e=t,64&s[0]&&r!==(r=e[69][1]+"")&&M(l,r),192&s[0]&&I(n,"aplayer-lrc-current",e[71]===e[7])},d(t){t&&f(n)}}}function at(e){let n,l;return{c(){l=y(),this.h()},l(t){l=y(),this.h()},h(){n=new D(l)},m(t,e){n.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"\n                  /></svg\n        >',t,e),d(t,l,e)},p:t,d(t){t&&f(l),t&&n.d()}}}function it(e){let n,l;return{c(){l=y(),this.h()},l(t){l=y(),this.h()},h(){n=new D(l)},m(t,e){n.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"\n                  /></svg\n                >',t,e),d(t,l,e)},p:t,d(t){t&&f(l),t&&n.d()}}}function ct(e){let n,l;return{c(){l=y(),this.h()},l(t){l=y(),this.h()},h(){n=new D(l)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"\n                /></svg\n              >',t,e),d(t,l,e)},p:t,d(t){t&&f(l),t&&n.d()}}}function ut(e){let n,l;return{c(){l=y(),this.h()},l(t){l=y(),this.h()},h(){n=new D(l)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"\n                /></svg\n              >',t,e),d(t,l,e)},p:t,d(t){t&&f(l),t&&n.d()}}}function ht(e){let n,l;return{c(){l=y(),this.h()},l(t){l=y(),this.h()},h(){n=new D(l)},m(t,e){n.m(' <svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"\n                /></svg\n              >',t,e),d(t,l,e)},p:t,d(t){t&&f(l),t&&n.d()}}}function dt(e){let n,l;return{c(){l=y(),this.h()},l(t){l=y(),this.h()},h(){n=new D(l)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 33 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"\n                /></svg\n              >',t,e),d(t,l,e)},p:t,d(t){t&&f(l),t&&n.d()}}}function ft(e){let n,l;return{c(){l=y(),this.h()},l(t){l=y(),this.h()},h(){n=new D(l)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"\n                /></svg\n              >',t,e),d(t,l,e)},p:t,d(t){t&&f(l),t&&n.d()}}}function pt(e){let n,l,s,r,o;return{c(){n=p("button"),l=v("svg"),s=v("path"),this.h()},l(t){n=E(t,"BUTTON",{type:!0,class:!0});var e=x(n);l=E(e,"svg",{xmlns:!0,version:!0,viewBox:!0,class:!0},1);var r=x(l);s=E(r,"path",{d:!0,class:!0},1),x(s).forEach(f),r.forEach(f),e.forEach(f),this.h()},h(){$(s,"d","M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"),$(s,"class","svelte-3s9nfq"),$(l,"xmlns","http://www.w3.org/2000/svg"),$(l,"version","1.1"),$(l,"viewBox","0 0 22 32"),$(l,"class","svelte-3s9nfq"),$(n,"type","button"),$(n,"class","aplayer-icon aplayer-icon-menu svelte-3s9nfq")},m(t,a){d(t,n,a),h(n,l),h(l,s),r||(o=w(n,"click",e[54]),r=!0)},p:t,d(t){t&&f(n),r=!1,o()}}}function vt(t){let e;return{c(){e=p("span"),this.h()},l(t){e=E(t,"SPAN",{class:!0}),x(e).forEach(f),this.h()},h(){$(e,"class","aplayer-list-cur svelte-3s9nfq")},m(t,n){d(t,e,n)},d(t){t&&f(e)}}}function mt(t){let e,n,l,s,r,o,a,i,c,u,v,y,T,I=t[68]+1+"",D=t[66].name+"",A=t[66].artist+"",S=t[68]===t[4].playingIndex&&vt();function B(){return t[55](t[68])}return{c(){e=p("li"),S&&S.c(),n=g(),l=p("span"),s=m(I),r=g(),o=p("span"),a=m(D),i=g(),c=p("span"),u=m(A),v=g(),this.h()},l(t){e=E(t,"LI",{class:!0});var h=x(e);S&&S.l(h),n=b(h),l=E(h,"SPAN",{class:!0});var d=x(l);s=q(d,I),d.forEach(f),r=b(h),o=E(h,"SPAN",{class:!0});var p=x(o);a=q(p,D),p.forEach(f),i=b(h),c=E(h,"SPAN",{class:!0});var m=x(c);u=q(m,A),m.forEach(f),v=b(h),h.forEach(f),this.h()},h(){$(l,"class","aplayer-list-index svelte-3s9nfq"),$(o,"class","aplayer-list-title"),$(c,"class","aplayer-list-artist svelte-3s9nfq"),$(e,"class","svelte-3s9nfq")},m(t,f){d(t,e,f),S&&S.m(e,null),h(e,n),h(e,l),h(l,s),h(e,r),h(e,o),h(o,a),h(e,i),h(e,c),h(c,u),h(e,v),y||(T=w(e,"click",B),y=!0)},p(l,s){(t=l)[68]===t[4].playingIndex?S||(S=vt(),S.c(),S.m(e,n)):S&&(S.d(1),S=null),16&s[0]&&D!==(D=t[66].name+"")&&M(a,D),16&s[0]&&A!==(A=t[66].artist+"")&&M(u,A)},d(t){t&&f(e),S&&S.d(),y=!1,T()}}}function gt(e){let n,l,o,a,i,c,u,v,y,D,A,S,B,N,_,k,L,P,V,z,O,H,C,R,U,Y,j,X,W,F,J,G,K,Z,tt,nt,ot,vt,gt,yt,wt,$t,xt,Et,qt,bt,Mt,Tt,It=e[5].name+"",Dt=e[5].artist+"",At=e[19].ptime+"",St=e[19].duration+"";function Bt(t,e){return t[1].paused?lt:st}let Nt=Bt(e),_t=Nt(e),kt=e[5].lrc&&rt(e);function Lt(t,e){return t[21].muted||t[1].muted?it:at}let Pt=Lt(e),Vt=Pt(e);function zt(t,e){return"random"===t[17].order?ut:ct}let Ot=zt(e),Ht=Ot(e);function Ct(t,e){return"none"===t[17].loop?ft:"one"===t[17].loop?dt:"all"===t[17].loop?ht:void 0}let Rt=Ct(e),Ut=Rt&&Rt(e),Yt=e[4].audio.length>1&&pt(e),jt=e[4].audio,Xt=[];for(let t=0;t<jt.length;t+=1)Xt[t]=mt(et(e,jt,t));return{c(){n=p("div"),l=p("div"),o=p("div"),_t.c(),a=g(),i=p("div"),c=p("div"),u=p("span"),v=m(It),y=g(),D=p("span"),A=m(Dt),S=g(),kt&&kt.c(),B=g(),N=p("div"),_=p("div"),k=p("div"),L=p("div"),P=g(),V=p("div"),z=p("div"),O=p("span"),H=g(),C=p("div"),R=p("span"),U=p("span"),Y=m(At),j=m(" /\n            "),X=p("span"),W=m(St),F=g(),J=p("span"),G=g(),K=p("div"),Z=p("button"),Vt.c(),tt=g(),nt=p("div"),ot=p("div"),vt=p("div"),gt=g(),yt=p("button"),Ht.c(),wt=g(),$t=p("button"),Ut&&Ut.c(),xt=g(),Yt&&Yt.c(),Et=g(),qt=p("div"),bt=p("ol");for(let t=0;t<Xt.length;t+=1)Xt[t].c();this.h()},l(t){n=E(t,"DIV",{class:!0});var e=x(n);l=E(e,"DIV",{class:!0});var s=x(l);o=E(s,"DIV",{class:!0,style:!0});var r=x(o);_t.l(r),r.forEach(f),a=b(s),i=E(s,"DIV",{class:!0});var h=x(i);c=E(h,"DIV",{class:!0});var d=x(c);u=E(d,"SPAN",{class:!0});var p=x(u);v=q(p,It),p.forEach(f),y=b(d),D=E(d,"SPAN",{class:!0});var m=x(D);A=q(m,Dt),m.forEach(f),d.forEach(f),S=b(h),kt&&kt.l(h),B=b(h),N=E(h,"DIV",{class:!0});var g=x(N);_=E(g,"DIV",{class:!0});var w=x(_);k=E(w,"DIV",{class:!0});var $=x(k);L=E($,"DIV",{class:!0,style:!0}),x(L).forEach(f),P=b($),V=E($,"DIV",{class:!0,style:!0});var M=x(V);z=E(M,"DIV",{class:!0});var T=x(z);O=E(T,"SPAN",{class:!0,style:!0}),x(O).forEach(f),T.forEach(f),M.forEach(f),$.forEach(f),w.forEach(f),H=b(g),C=E(g,"DIV",{class:!0});var I=x(C);R=E(I,"SPAN",{class:!0});var Q=x(R);U=E(Q,"SPAN",{class:!0});var et=x(U);Y=q(et,At),et.forEach(f),j=q(Q," /\n            "),X=E(Q,"SPAN",{class:!0});var lt=x(X);W=q(lt,St),lt.forEach(f),Q.forEach(f),F=b(I),J=E(I,"SPAN",{hidden:!0}),x(J).forEach(f),G=b(I),K=E(I,"DIV",{class:!0});var st=x(K);Z=E(st,"BUTTON",{type:!0,class:!0});var rt=x(Z);Vt.l(rt),rt.forEach(f),tt=b(st),nt=E(st,"DIV",{class:!0});var at=x(nt);ot=E(at,"DIV",{class:!0});var it=x(ot);vt=E(it,"DIV",{class:!0,style:!0}),x(vt).forEach(f),it.forEach(f),at.forEach(f),st.forEach(f),gt=b(I),yt=E(I,"BUTTON",{type:!0,class:!0});var ct=x(yt);Ht.l(ct),ct.forEach(f),wt=b(I),$t=E(I,"BUTTON",{type:!0,class:!0});var ut=x($t);Ut&&Ut.l(ut),ut.forEach(f),xt=b(I),Yt&&Yt.l(I),I.forEach(f),g.forEach(f),h.forEach(f),Et=b(s),qt=E(s,"DIV",{class:!0,style:!0});var ht=x(qt);bt=E(ht,"OL",{class:!0});var dt=x(bt);for(let n=0;n<Xt.length;n+=1)Xt[n].l(dt);dt.forEach(f),ht.forEach(f),s.forEach(f),e.forEach(f),this.h()},h(){$(o,"class","aplayer-pic svelte-3s9nfq"),T(o,"background-image","url( "+e[5].cover+" )"),$(u,"class","aplayer-title svelte-3s9nfq"),$(D,"class","aplayer-artist svelte-3s9nfq"),$(c,"class","aplayer-music svelte-3s9nfq"),$(L,"class","aplayer-loaded svelte-3s9nfq"),T(L,"width",e[18].bufferPercentage),$(O,"class","aplayer-loading-icon"),T(O,"display",e[20]?"inline":"none"),$(z,"class","aplayer-thumb svelte-3s9nfq"),$(V,"class","aplayer-played svelte-3s9nfq"),T(V,"width",e[19].playPercentage),$(k,"class","aplayer-bar svelte-3s9nfq"),$(_,"class","aplayer-bar-wrap svelte-3s9nfq"),$(U,"class","aplayer-ptime"),$(X,"class","aplayer-dtime"),$(R,"class","aplayer-time-inner svelte-3s9nfq"),J.hidden=!0,$(Z,"type","button"),$(Z,"class","aplayer-icon aplayer-icon-volume-down svelte-3s9nfq"),$(vt,"class","aplayer-volume svelte-3s9nfq"),T(vt,"height",e[1].muted?"0px":e[21].volumePercentage),$(ot,"class","aplayer-volume-bar svelte-3s9nfq"),$(nt,"class","aplayer-volume-bar-wrap svelte-3s9nfq"),$(K,"class","aplayer-volume-wrap svelte-3s9nfq"),$(yt,"type","button"),$(yt,"class","aplayer-icon aplayer-icon-order svelte-3s9nfq"),$($t,"type","button"),$($t,"class","aplayer-icon aplayer-icon-loop svelte-3s9nfq"),$(C,"class","aplayer-time svelte-3s9nfq"),$(N,"class","aplayer-controller svelte-3s9nfq"),$(i,"class","aplayer-info svelte-3s9nfq"),$(bt,"class","svelte-3s9nfq"),$(qt,"class","aplayer-list svelte-3s9nfq"),T(qt,"height",e[17].showList?`${e[16]}px`:"0px"),$(l,"class","aplayer-body  svelte-3s9nfq"),$(n,"class","aplayer svelte-3s9nfq"),I(n,"aplayer-withlrc",e[6].length>0),I(n,"aplayer-withlist",e[4].audio.length>1),I(n,"aplayer-narrow",e[0]),I(n,"aplayer-mobile",Q)},m(t,s){d(t,n,s),h(n,l),h(l,o),_t.m(o,null),h(l,a),h(l,i),h(i,c),h(c,u),h(u,v),h(c,y),h(c,D),h(D,A),h(i,S),kt&&kt.m(i,null),h(i,B),h(i,N),h(N,_),h(_,k),h(k,L),h(k,P),h(k,V),h(V,z),h(z,O),O.innerHTML='<svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    version="1.1"\n                    viewBox="0 0 32 32"\n                    ><path\n                      d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"\n                    /></svg\n                  >',e[49](_),h(N,H),h(N,C),h(C,R),h(R,U),h(U,Y),h(R,j),h(R,X),h(X,W),h(C,F),h(C,J),h(C,G),h(C,K),h(K,Z),Vt.m(Z,null),h(K,tt),h(K,nt),h(nt,ot),h(ot,vt),e[51](ot),h(C,gt),h(C,yt),Ht.m(yt,null),h(C,wt),h(C,$t),Ut&&Ut.m($t,null),h(C,xt),Yt&&Yt.m(C,null),h(l,Et),h(l,qt),h(qt,bt);for(let e=0;e<Xt.length;e+=1)Xt[e].m(bt,null);e[56](qt),e[57](n),Mt||(Tt=[w(o,"click",e[48]),w(_,"mousedown",(function(){r(e[13])&&e[13].apply(this,arguments)})),w(_,"mousemove",(function(){r(e[14])&&e[14].apply(this,arguments)})),w(_,"mouseup",(function(){r(e[15])&&e[15].apply(this,arguments)})),w(_,"mouseleave",(function(){r(e[15])&&e[15].apply(this,arguments)})),w(_,"touchstart",(function(){r(e[13])&&e[13].apply(this,arguments)})),w(_,"touchmove",(function(){r(e[14])&&e[14].apply(this,arguments)})),w(_,"touchend",(function(){r(e[15])&&e[15].apply(this,arguments)})),w(Z,"click",e[50],!0),w(nt,"mousedown",(function(){r(e[10])&&e[10].apply(this,arguments)})),w(nt,"mousemove",(function(){r(e[11])&&e[11].apply(this,arguments)})),w(nt,"mouseup",(function(){r(e[12])&&e[12].apply(this,arguments)})),w(nt,"mouseleave",(function(){r(e[12])&&e[12].apply(this,arguments)})),w(nt,"touchstart",(function(){r(e[10])&&e[10].apply(this,arguments)})),w(nt,"touchmove",(function(){r(e[11])&&e[11].apply(this,arguments)})),w(nt,"touchend",(function(){r(e[12])&&e[12].apply(this,arguments)})),w(yt,"click",e[52]),w($t,"click",e[53])],Mt=!0)},p(t,l){if(Nt!==(Nt=Bt(e=t))&&(_t.d(1),_t=Nt(e),_t&&(_t.c(),_t.m(o,null))),32&l[0]&&T(o,"background-image","url( "+e[5].cover+" )"),32&l[0]&&It!==(It=e[5].name+"")&&M(v,It),32&l[0]&&Dt!==(Dt=e[5].artist+"")&&M(A,Dt),e[5].lrc?kt?kt.p(e,l):(kt=rt(e),kt.c(),kt.m(i,B)):kt&&(kt.d(1),kt=null),262144&l[0]&&T(L,"width",e[18].bufferPercentage),1048576&l[0]&&T(O,"display",e[20]?"inline":"none"),524288&l[0]&&T(V,"width",e[19].playPercentage),524288&l[0]&&At!==(At=e[19].ptime+"")&&M(Y,At),524288&l[0]&&St!==(St=e[19].duration+"")&&M(W,St),Pt===(Pt=Lt(e))&&Vt?Vt.p(e,l):(Vt.d(1),Vt=Pt(e),Vt&&(Vt.c(),Vt.m(Z,null))),2097154&l[0]&&T(vt,"height",e[1].muted?"0px":e[21].volumePercentage),Ot===(Ot=zt(e))&&Ht?Ht.p(e,l):(Ht.d(1),Ht=Ot(e),Ht&&(Ht.c(),Ht.m(yt,null))),Rt===(Rt=Ct(e))&&Ut?Ut.p(e,l):(Ut&&Ut.d(1),Ut=Rt&&Rt(e),Ut&&(Ut.c(),Ut.m($t,null))),e[4].audio.length>1?Yt?Yt.p(e,l):(Yt=pt(e),Yt.c(),Yt.m(C,null)):Yt&&(Yt.d(1),Yt=null),18&l[0]){let t;for(jt=e[4].audio,t=0;t<jt.length;t+=1){const n=et(e,jt,t);Xt[t]?Xt[t].p(n,l):(Xt[t]=mt(n),Xt[t].c(),Xt[t].m(bt,null))}for(;t<Xt.length;t+=1)Xt[t].d(1);Xt.length=jt.length}196608&l[0]&&T(qt,"height",e[17].showList?`${e[16]}px`:"0px"),64&l[0]&&I(n,"aplayer-withlrc",e[6].length>0),16&l[0]&&I(n,"aplayer-withlist",e[4].audio.length>1),1&l[0]&&I(n,"aplayer-narrow",e[0])},i:t,o:t,d(t){t&&f(n),_t.d(),kt&&kt.d(),e[49](null),Vt.d(),e[51](null),Ht.d(),Ut&&Ut.d(),Yt&&Yt.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(Xt,t),e[56](null),e[57](null),Mt=!1,s(Tt)}}}function yt(t,n,l){let s,r,o,a,h,d,f,p,v,m,g,y,w,$,x;var E,q,b;const{player:M,playList:T,currentSong:I,rdTime:D,currentTime:A,duration:S,rdBufTime:N,wtBufTime:k,loading:L,lrc:P,controlState:V,volumeState:z}=function(){const t=document.createElement("audio");tt.push(t);let e=J(0),n=J(NaN);const l=G([e,n],(([t,e])=>{let n=t/e;return n=Math.max(n,0),n=Math.min(n,1),n*=100,{ptime:K(t),duration:K(e),playPercentage:`${n}%`}}));let s=J(0);const r=G([s,n],(([t,e])=>{let n=t/e;return n=Math.max(n,0),n=Math.min(n,1),n*=100,{bufferPercentage:`${n}%`,bufTime:t}})),o=J({playingIndex:0,audio:[]}),a=J({volume:.7,loop:"all",order:"list",showList:!0}),i=G(a,(t=>({volumePercentage:100*t.volume+"%",muted:0===t.volume}))),c=G(o,(t=>t.audio[t.playingIndex])),u=G([r,e],(([{bufTime:e},n])=>!t.paused&&(t.readyState<=HTMLMediaElement.HAVE_CURRENT_DATA||e-n<2&&t.readyState===HTMLMediaElement.HAVE_FUTURE_DATA))),h=G(c,((t,e)=>{if(!t||!t.lrc)return void e([]);const n=t.lrc;n.startsWith("http")?fetch(n).then((t=>{if(!t.ok)throw new Error(`${t.statusText} canot loading lrc from ${n}`);return t.text()})).then((t=>{e(Z(t))})).catch((t=>{throw e([]),console.error(t),t})):e(Z(n))}),[]);return{player:t,playList:o,currentSong:c,rdTime:l,currentTime:e,duration:n,rdBufTime:r,wtBufTime:s,loading:u,lrc:h,controlState:a,volumeState:i}}();i(t,T,(t=>l(4,d=t))),i(t,I,(t=>l(5,f=t))),i(t,D,(t=>l(19,w=t))),i(t,A,(t=>l(60,v=t))),i(t,S,(t=>l(61,m=t))),i(t,N,(t=>l(18,y=t))),i(t,k,(t=>l(62,g=t))),i(t,L,(t=>l(20,$=t))),i(t,P,(t=>l(6,p=t))),i(t,V,(t=>l(17,h=t))),i(t,z,(t=>l(21,x=t)));let{audio:O}=n,{order:H=h.order}=n,{loop:C=h.loop}=n,{volume:R=h.volume}=n,{mini:U=!1}=n,{mutex:Y=!0}=n,{autoplay:j=!1}=n,{theme:X}=n,W=!j;const F=()=>{Y&&(console.log(tt),tt.forEach((t=>t.pause()))),M.play().catch((t=>{console.error(t)}))};let Q=-1;M.addEventListener("timeupdate",(()=>{if(u(A,v=M.currentTime,v),console.log(Q),a.includes("lrc"))for(;Q+1<p.length&&M.currentTime>=p[Q+1][0];)l(7,Q++,Q)})),M.addEventListener("volumechange",(()=>{u(V,h.volume=M.volume,h)})),M.addEventListener("loadedmetadata",(()=>{u(S,m=M.duration,m)})),M.addEventListener("error",(()=>{console.warn("An audio error has occurred, player will skip forward in 2 seconds."),d.audio.length>1&&setTimeout((()=>{u(T,d.playingIndex=(d.playingIndex+1)%d.audio.length,d),M.paused&&F()}),2e3)}));const et=()=>{const t=M.buffered.length?M.buffered.end(M.buffered.length-1):0;u(k,g=t,g)};M.addEventListener("progress",et),M.addEventListener("canplay",et),M.addEventListener("durationchange",(()=>{u(S,m=M.duration,m)}));let nt,lt,st,rt,ot,at,it,ct,ut;M.addEventListener("ended",(()=>{const t=Array.isArray(d.audio)?d.audio:[d.audio],e=(d.playingIndex+1)%t.length;if("none"===h.loop){if("list"===h.order)d.playingIndex<t.length-1?(u(T,d.playingIndex=e,d),l(1,M.currentTime=0,M)):(u(T,d.playingIndex=(d.playingIndex+1)%t.length,d),l(44,W=!0),M.pause());else if("random"===h.order){const n=Math.floor(t.length*Math.random());n===d.playingIndex?u(T,d.playingIndex=e,d):u(T,d.playingIndex=n,d),l(1,M.currentTime=0,M)}}else"one"===h.loop?l(1,M.currentTime=0,M):"all"===h.loop&&u(T,d.playingIndex=e,d)}));let ht,dt=0;B((()=>{"localhost"===location.hostname&&(window.theAudio=M);const t=function(t,e){let n=!1;return{volumeDragStart:()=>{n=!0},volumeDragMove:l=>{if(n){let n=1-((l.clientY||l.changedTouches[0].clientY)-e.getBoundingClientRect().top)/e.clientHeight;n=Math.max(n,0),n=Math.min(n,1),t.volume=n}},volumeDragEnd:l=>{if(n){let s=1-((l.clientY||l.changedTouches[0].clientY)-e.getBoundingClientRect().top)/e.clientHeight;s=Math.max(s,0),s=Math.min(s,1),t.volume=s,n=!1}}}}(M,nt);l(10,st=t.volumeDragStart),l(11,rt=t.volumeDragMove),l(12,ot=t.volumeDragEnd);const e=function(t,e){let n=!1;return{progressDragStart:()=>{n=!0},progressDragMove:l=>{if(n){let n=((l.clientX||l.changedTouches[0].clientX)-e.getBoundingClientRect().left)/e.clientWidth;n=Math.max(n,0),n=Math.min(n,1),t.currentTime=t.duration*n}},progressDragEnd:l=>{if(n){n=!1;let s=((l.clientX||l.changedTouches[0].clientX)-e.getBoundingClientRect().left)/e.clientWidth;s=Math.max(s,0),s=Math.min(s,1),t.currentTime=t.duration*s}}}}(M,lt);l(13,at=e.progressDragStart),l(14,it=e.progressDragMove),l(15,ct=e.progressDragEnd)}));return t.$$set=t=>{l(65,n=e(e({},n),c(t))),"audio"in t&&l(34,O=t.audio),"order"in t&&l(35,H=t.order),"loop"in t&&l(36,C=t.loop),"volume"in t&&l(37,R=t.volume),"mini"in t&&l(0,U=t.mini),"mutex"in t&&l(38,Y=t.mutex),"autoplay"in t&&l(39,j=t.autoplay),"theme"in t&&l(40,X=t.theme)},t.$$.update=()=>{8&t.$$.dirty[1]&&l(45,s="string"==typeof O?JSON.parse(O):O),16384&t.$$.dirty[1]&&u(T,d.audio=Array.isArray(s)?s:[s],d),l(46,r=!function(t,e){const n=t[e];return!(null==n||"false"===n)}(n,"list_folded")&&d.audio.length>1),32768&t.$$.dirty[1]&&u(V,h.showList=r,h),32&t.$$.dirty[1]&&u(V,h.loop=C,h),16&t.$$.dirty[1]&&u(V,h.order=H,h),64&t.$$.dirty[1]&&u(V,h.volume=R,h),64&t.$$.dirty[1]&&l(1,M.volume=R,M),32&t.$$.dirty[0]&&l(1,M.src=f.url,M),32&t.$$.dirty[0]|3584&t.$$.dirty[1]&&l(47,o=null!==l(42,q=null!==l(41,E=f.theme)&&void 0!==E?E:X)&&void 0!==q?q:"#fadfa3"),8&t.$$.dirty[0]|65536&t.$$.dirty[1]&&ht&&ht.style.setProperty("--theme-color",o),64&t.$$.dirty[0]&&(a=p&&p.length>0?"withlrc":""),2&t.$$.dirty[0]|8192&t.$$.dirty[1]&&(M.src,l(7,Q=-1),W||F(),l(44,W=!1)),4&t.$$.dirty[0]|4096&t.$$.dirty[1]&&l(16,dt=null!==l(43,b=null==ut?void 0:ut.scrollHeight)&&void 0!==b?b:0)},n=c(n),[U,M,ut,ht,d,f,p,Q,nt,lt,st,rt,ot,at,it,ct,dt,h,y,w,$,x,T,I,D,A,S,N,k,L,P,V,z,F,O,H,C,R,Y,j,X,E,q,b,W,s,r,o,()=>{M.paused?F():M.pause()},function(t){_[t?"unshift":"push"]((()=>{lt=t,l(9,lt)}))},()=>{l(1,M.muted=!M.muted,M)},function(t){_[t?"unshift":"push"]((()=>{nt=t,l(8,nt)}))},()=>{u(V,h.order="list"===h.order?"random":"list",h)},()=>{"all"===h.loop?u(V,h.loop="one",h):"one"===h.loop?u(V,h.loop="none",h):"none"===h.loop&&u(V,h.loop="all",h)},()=>{u(V,h.showList=!h.showList,h)},t=>{u(T,d.playingIndex=t,d),l(1,M.currentTime=0,M)},function(t){_[t?"unshift":"push"]((()=>{ut=t,l(2,ut)}))},function(t){_[t?"unshift":"push"]((()=>{ht=t,l(3,ht)}))}]}return class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),W(this,t,yt,gt,o,{audio:34,order:35,loop:36,volume:37,mini:0,mutex:38,autoplay:39,theme:40},[-1,-1,-1])}}}));
