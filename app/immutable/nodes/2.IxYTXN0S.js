import{S as Xe,T as Ye,H as ke,J as Ze,C as Se,U as xe,s as ne,e as T,c as F,b as M,f as _,v as d,i as w,k as qe,V as $e,W as le,X as se,Y as $,Z as Ee,_ as we,n as K,h as O,a as A,g as W,$ as q,E as et,a0 as ee,a1 as te,w as fe,a2 as Pe,a3 as tt,q as lt,l as st,u as nt,m as at,o as it,p as ve,a4 as rt,r as Ae,a5 as ot,y as We,a6 as Me,a7 as Ge,t as H,d as R,j as x,a8 as be,a9 as ct}from"../chunks/CaoHfmFr.js";import{g as ae,a as z,c as ie,t as U,S as re,i as oe,f as ut,h as ft,j as Je,b as de,d as me,m as he,e as ge}from"../chunks/CbexwknH.js";import{w as dt,r as mt}from"../chunks/DW4QGQcX.js";function Ce(l,e){const t=e.token={};function s(a,n,c,f){if(e.token!==t)return;e.resolved=f;let m=e.ctx;c!==void 0&&(m=m.slice(),m[c]=f);const r=a&&(e.current=a)(m);let i=!1;e.block&&(e.blocks?e.blocks.forEach((o,u)=>{u!==n&&o&&(ae(),z(o,1,1,()=>{e.blocks[u]===o&&(e.blocks[u]=null)}),ie())}):e.block.d(1),r.c(),U(r,1),r.m(e.mount(),e.anchor),i=!0),e.block=r,e.blocks&&(e.blocks[n]=r),i&&Ze()}if(Xe(l)){const a=Ye();if(l.then(n=>{ke(a),s(e.then,1,e.value,n),ke(null)},n=>{if(ke(a),s(e.catch,2,e.error,n),ke(null),!e.hasCatch)throw n}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,l),!0;e.resolved=l}}function ht(l,e,t){const s=e.slice(),{resolved:a}=l;l.current===l.then&&(s[l.value]=a),l.current===l.catch&&(s[l.error]=a),l.block.p(s,t)}function Be(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function gt(l,e){z(l,1,1,()=>{e.delete(l.key)})}function _t(l,e,t,s,a,n,c,f,m,r,i,o){let u=l.length,h=n.length,b=u;const g={};for(;b--;)g[l[b].key]=b;const v=[],p=new Map,P=new Map,C=[];for(b=h;b--;){const I=o(a,n,b),B=t(I);let D=c.get(B);D?C.push(()=>D.p(I,e)):(D=r(B,I),D.c()),p.set(B,v[b]=D),B in g&&P.set(B,Math.abs(b-g[B]))}const N=new Set,L=new Set;function j(I){U(I,1),I.m(f,i),c.set(I.key,I),i=I.first,h--}for(;u&&h;){const I=v[h-1],B=l[u-1],D=I.key,V=B.key;I===B?(i=I.first,u--,h--):p.has(V)?!c.has(D)||N.has(D)?j(I):L.has(V)?u--:P.get(D)>P.get(V)?(L.add(D),j(I)):(N.add(V),u--):(m(B,c),u--)}for(;u--;){const I=l[u];p.has(I.key)||m(I,c)}for(;h;)j(v[h-1]);return Se(C),v}const kt=async({fetch:l,params:e})=>{let a=(await(await l("https://pokeapi.co/api/v2/pokemon/?limit=6969")).json()).results.map(n=>({label:n.name.toUpperCase(),value:n.name}));return a=a.sort((n,c)=>n.value.localeCompare(c.value)),{pokemons:a}},nl=Object.freeze(Object.defineProperty({__proto__:null,load:kt},Symbol.toStringTag,{value:"Module"})),pe={};function De(l){return l==="local"?localStorage:sessionStorage}function Ie(l,e,t){const s=JSON,a="local";function n(c,f){De(a).setItem(c,s.stringify(f))}if(!pe[l]){const c=dt(e,r=>{const i=De(a).getItem(l);i&&r(s.parse(i));{const o=u=>{u.key===l&&r(u.newValue?s.parse(u.newValue):null)};return window.addEventListener("storage",o),()=>window.removeEventListener("storage",o)}}),{subscribe:f,set:m}=c;pe[l]={set(r){n(l,r),m(r)},update(r){const i=r(xe(c));n(l,i),m(i)},subscribe:f}}return pe[l]}const bt=Ie("modeOsPrefers",!1),vt=Ie("modeUserPrefers",void 0),ye=Ie("modeCurrent",!1);function pt(){const l=window.matchMedia("(prefers-color-scheme: light)").matches;return bt.set(l),l}function yt(l){vt.set(l)}function Oe(l){const e=document.documentElement.classList,t="dark";l===!0?e.remove(t):e.add(t),ye.set(l)}function Lt(){const l=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",t=!("modeUserPrefers"in localStorage),s=window.matchMedia("(prefers-color-scheme: dark)").matches;e||t&&s?l.add("dark"):l.remove("dark")}const Qe="(prefers-reduced-motion: reduce)";function St(){return window.matchMedia(Qe).matches}const Et=mt(St(),l=>{{const e=s=>{l(s.matches)},t=window.matchMedia(Qe);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function wt(l){const e=l-1;return e*e*e+1}function Te(l,{delay:e=0,duration:t=400,easing:s=wt,axis:a="y"}={}){const n=getComputedStyle(l),c=+n.opacity,f=a==="y"?"height":"width",m=parseFloat(n[f]),r=a==="y"?["top","bottom"]:["left","right"],i=r.map(p=>`${p[0].toUpperCase()}${p.slice(1)}`),o=parseFloat(n[`padding${i[0]}`]),u=parseFloat(n[`padding${i[1]}`]),h=parseFloat(n[`margin${i[0]}`]),b=parseFloat(n[`margin${i[1]}`]),g=parseFloat(n[`border${i[0]}Width`]),v=parseFloat(n[`border${i[1]}Width`]);return{delay:e,duration:t,easing:s,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*c};${f}: ${p*m}px;padding-${r[0]}: ${p*o}px;padding-${r[1]}: ${p*u}px;margin-${r[0]}: ${p*h}px;margin-${r[1]}: ${p*b}px;border-${r[0]}-width: ${p*g}px;border-${r[1]}-width: ${p*v}px;`}}function Fe(l,e){const{transition:t,params:s,enabled:a}=e;return a?t(l,s):"duration"in s?t(l,{duration:0}):{duration:0}}function Ue(l,e,t){const s=l.slice();return s[35]=e[t],s}function It(l){let e,t,s;return{c(){e=T("div"),t=new Ee(!1),this.h()},l(a){e=F(a,"DIV",{class:!0});var n=M(e);t=we(n,!1),n.forEach(_),this.h()},h(){t.a=null,d(e,"class",s="autocomplete-empty "+l[7])},m(a,n){w(a,e,n),t.m(l[0],e)},p(a,n){n[0]&1&&t.p(a[0]),n[0]&128&&s!==(s="autocomplete-empty "+a[7])&&d(e,"class",s)},i:K,o:K,d(a){a&&_(e)}}}function Pt(l){let e,t,s=[],a=new Map,n,c,f,m=Be(l[6].slice(0,l[13]));const r=i=>i[35];for(let i=0;i<m.length;i+=1){let o=Ue(l,m,i),u=r(o);a.set(u,s[i]=Ne(u,o))}return{c(){e=T("nav"),t=T("ul");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=F(i,"NAV",{class:!0});var o=M(e);t=F(o,"UL",{class:!0});var u=M(t);for(let h=0;h<s.length;h+=1)s[h].l(u);u.forEach(_),o.forEach(_),this.h()},h(){d(t,"class",n="autocomplete-list "+l[10]),d(e,"class",c="autocomplete-nav "+l[11])},m(i,o){w(i,e,o),O(e,t);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(t,null);f=!0},p(i,o){o[0]&25458&&(m=Be(i[6].slice(0,i[13])),ae(),s=_t(s,o,r,1,i,m,a,t,gt,Ne,null,Ue),ie()),(!f||o[0]&1024&&n!==(n="autocomplete-list "+i[10]))&&d(t,"class",n),(!f||o[0]&2048&&c!==(c="autocomplete-nav "+i[11]))&&d(e,"class",c)},i(i){if(!f){for(let o=0;o<m.length;o+=1)U(s[o]);f=!0}},o(i){for(let o=0;o<s.length;o+=1)z(s[o]);f=!1},d(i){i&&_(e);for(let o=0;o<s.length;o+=1)s[o].d()}}}function Ne(l,e){let t,s,a,n=e[35].label+"",c,f,m,r,i,o,u,h;function b(){return e[29](e[35])}return{key:l,first:null,c(){t=T("li"),s=T("button"),a=new Ee(!1),f=A(),this.h()},l(g){t=F(g,"LI",{class:!0});var v=M(t);s=F(v,"BUTTON",{class:!0,type:!0});var p=M(s);a=we(p,!1),p.forEach(_),f=W(v),v.forEach(_),this.h()},h(){a.a=null,d(s,"class",c="autocomplete-button "+e[8]),d(s,"type","button"),d(t,"class",m="autocomplete-item "+e[9]),this.first=t},m(g,v){w(g,t,v),O(t,s),a.m(n,s),O(t,f),o=!0,u||(h=[q(s,"click",b),q(s,"click",e[27]),q(s,"keypress",e[28])],u=!0)},p(g,v){e=g,(!o||v[0]&8256)&&n!==(n=e[35].label+"")&&a.p(n),(!o||v[0]&256&&c!==(c="autocomplete-button "+e[8]))&&d(s,"class",c),(!o||v[0]&512&&m!==(m="autocomplete-item "+e[9]))&&d(t,"class",m)},i(g){o||(g&&et(()=>{o&&(i&&i.end(1),r=ut(t,Fe,{transition:e[2],params:e[3],enabled:e[1]}),r.start())}),o=!0)},o(g){r&&r.invalidate(),g&&(i=ft(t,Fe,{transition:e[4],params:e[5],enabled:e[1]})),o=!1},d(g){g&&_(t),g&&i&&i.end(),u=!1,Se(h)}}}function Mt(l){let e,t,s,a,n;const c=[Pt,It],f=[];function m(r,i){return r[6].length>0?0:1}return t=m(l),s=f[t]=c[t](l),{c(){e=T("div"),s.c(),this.h()},l(r){e=F(r,"DIV",{class:!0,"data-testid":!0});var i=M(e);s.l(i),i.forEach(_),this.h()},h(){d(e,"class",a="autocomplete "+l[12]),d(e,"data-testid","autocomplete")},m(r,i){w(r,e,i),f[t].m(e,null),n=!0},p(r,i){let o=t;t=m(r),t===o?f[t].p(r,i):(ae(),z(f[o],1,1,()=>{f[o]=null}),ie(),s=f[t],s?s.p(r,i):(s=f[t]=c[t](r),s.c()),U(s,1),s.m(e,null)),(!n||i[0]&4096&&a!==(a="autocomplete "+r[12]))&&d(e,"class",a)},i(r){n||(U(s),n=!0)},o(r){z(s),n=!1},d(r){r&&_(e),f[t].d()}}}function Ct(l,e,t){let s,a,n,c,f,m,r,i,o,u;qe(l,Et,k=>t(30,u=k));const h=$e();let{input:b=void 0}=e,{options:g=[]}=e,{limit:v=void 0}=e,{allowlist:p=[]}=e,{denylist:P=[]}=e,{emptyState:C="No Results Found."}=e,{regionNav:N=""}=e,{regionList:L="list-nav"}=e,{regionItem:j=""}=e,{regionButton:I="w-full"}=e,{regionEmpty:B="text-center"}=e,{filter:D=E}=e,{transitions:V=!u}=e,{transitionIn:y=Te}=e,{transitionInParams:Y={duration:200}}=e,{transitionOut:G=Te}=e,{transitionOutParams:X={duration:200}}=e;function S(k,J){let Q=[...g];k.length&&(Q=Q.filter(_e=>k.includes(_e.value))),J.length&&(Q=Q.filter(_e=>!J.includes(_e.value))),!k.length&&!J.length&&(Q=g),t(26,s=Q)}function E(){let k=[...s];return k=k.filter(J=>{const Q=String(b).toLowerCase().trim();if(JSON.stringify([J.label,J.value,J.keywords]).toLowerCase().includes(Q))return J}),k}function Z(k){h("selection",k)}function ce(k){$.call(this,l,k)}function ue(k){$.call(this,l,k)}const Ke=k=>Z(k);return l.$$set=k=>{t(34,e=le(le({},e),se(k))),"input"in k&&t(15,b=k.input),"options"in k&&t(16,g=k.options),"limit"in k&&t(17,v=k.limit),"allowlist"in k&&t(18,p=k.allowlist),"denylist"in k&&t(19,P=k.denylist),"emptyState"in k&&t(0,C=k.emptyState),"regionNav"in k&&t(20,N=k.regionNav),"regionList"in k&&t(21,L=k.regionList),"regionItem"in k&&t(22,j=k.regionItem),"regionButton"in k&&t(23,I=k.regionButton),"regionEmpty"in k&&t(24,B=k.regionEmpty),"filter"in k&&t(25,D=k.filter),"transitions"in k&&t(1,V=k.transitions),"transitionIn"in k&&t(2,y=k.transitionIn),"transitionInParams"in k&&t(3,Y=k.transitionInParams),"transitionOut"in k&&t(4,G=k.transitionOut),"transitionOutParams"in k&&t(5,X=k.transitionOutParams)},l.$$.update=()=>{l.$$.dirty[0]&65536&&t(26,s=g),l.$$.dirty[0]&786432&&S(p,P),l.$$.dirty[0]&100696064&&t(6,a=b?D():s),l.$$.dirty[0]&131136&&t(13,n=v??a.length),t(12,c=`${e.class??""}`),l.$$.dirty[0]&1048576&&t(11,f=`${N}`),l.$$.dirty[0]&2097152&&t(10,m=`${L}`),l.$$.dirty[0]&4194304&&t(9,r=`${j}`),l.$$.dirty[0]&8388608&&t(8,i=`${I}`),l.$$.dirty[0]&16777216&&t(7,o=`${B}`)},e=se(e),[C,V,y,Y,G,X,a,o,i,r,m,f,c,n,Z,b,g,v,p,P,N,L,j,I,B,D,s,ce,ue,Ke]}class Bt extends re{constructor(e){super(),oe(this,e,Ct,Mt,ne,{input:15,options:16,limit:17,allowlist:18,denylist:19,emptyState:0,regionNav:20,regionList:21,regionItem:22,regionButton:23,regionEmpty:24,filter:25,transitions:1,transitionIn:2,transitionInParams:3,transitionOut:4,transitionOutParams:5},null,[-1,-1])}}function je(l){let e,t,s;const a=l[16].default,n=st(a,l,l[15],null);return{c(){e=ee("text"),n&&n.c(),this.h()},l(c){e=te(c,"text",{x:!0,y:!0,"text-anchor":!0,"dominant-baseline":!0,"font-weight":!0,"font-size":!0,class:!0});var f=M(e);n&&n.l(f),f.forEach(_),this.h()},h(){d(e,"x","50%"),d(e,"y","50%"),d(e,"text-anchor","middle"),d(e,"dominant-baseline","middle"),d(e,"font-weight","bold"),d(e,"font-size",l[2]),d(e,"class",t="progress-radial-text "+l[7])},m(c,f){w(c,e,f),n&&n.m(e,null),s=!0},p(c,f){n&&n.p&&(!s||f&32768)&&nt(n,a,c,c[15],s?it(a,c[15],f,null):at(c[15]),null),(!s||f&4)&&d(e,"font-size",c[2]),(!s||f&128&&t!==(t="progress-radial-text "+c[7]))&&d(e,"class",t)},i(c){s||(U(n,c),s=!0)},o(c){z(n,c),s=!1},d(c){c&&_(e),n&&n.d(c)}}}function Dt(l){let e,t,s,a,n,c,f=`${l[9]}
			${l[9]}`,m,r,i,o,u=l[0]!=null&&l[0]>=0&&l[13].default&&je(l);return{c(){e=T("figure"),t=ee("svg"),s=ee("circle"),n=ee("circle"),u&&u.c(),this.h()},l(h){e=F(h,"FIGURE",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-valuemin":!0,"aria-valuemax":!0});var b=M(e);t=te(b,"svg",{viewBox:!0,class:!0});var g=M(t);s=te(g,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0}),M(s).forEach(_),n=te(g,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0,"stroke-linecap":!0}),M(n).forEach(_),u&&u.l(g),g.forEach(_),b.forEach(_),this.h()},h(){d(s,"class",a="progress-radial-track "+ze+" "+l[6]),d(s,"stroke-width",l[1]),d(s,"r",l[12]),d(s,"cx","50%"),d(s,"cy","50%"),d(n,"class",c="progress-radial-meter "+Ve+" "+l[5]+" "+l[4]),d(n,"stroke-width",l[1]),d(n,"r",l[12]),d(n,"cx","50%"),d(n,"cy","50%"),d(n,"stroke-linecap",l[3]),fe(n,"stroke-dasharray",f),fe(n,"stroke-dashoffset",l[10]),d(t,"viewBox","0 0 "+Le+" "+Le),d(t,"class","rounded-full"),Pe(t,"animate-spin",l[0]===void 0),d(e,"class",m="progress-radial "+l[11]),d(e,"data-testid","progress-radial"),d(e,"role","meter"),d(e,"aria-labelledby",l[8]),d(e,"aria-valuenow",r=l[0]||0),d(e,"aria-valuetext",i=l[0]?`${l[0]}%`:"Indeterminate Spinner"),d(e,"aria-valuemin",0),d(e,"aria-valuemax",100)},m(h,b){w(h,e,b),O(e,t),O(t,s),O(t,n),u&&u.m(t,null),o=!0},p(h,[b]){(!o||b&64&&a!==(a="progress-radial-track "+ze+" "+h[6]))&&d(s,"class",a),(!o||b&2)&&d(s,"stroke-width",h[1]),(!o||b&48&&c!==(c="progress-radial-meter "+Ve+" "+h[5]+" "+h[4]))&&d(n,"class",c),(!o||b&2)&&d(n,"stroke-width",h[1]),(!o||b&8)&&d(n,"stroke-linecap",h[3]),b&512&&f!==(f=`${h[9]}
			${h[9]}`)&&fe(n,"stroke-dasharray",f),b&1024&&fe(n,"stroke-dashoffset",h[10]),h[0]!=null&&h[0]>=0&&h[13].default?u?(u.p(h,b),b&8193&&U(u,1)):(u=je(h),u.c(),U(u,1),u.m(t,null)):u&&(ae(),z(u,1,1,()=>{u=null}),ie()),(!o||b&1)&&Pe(t,"animate-spin",h[0]===void 0),(!o||b&2048&&m!==(m="progress-radial "+h[11]))&&d(e,"class",m),(!o||b&256)&&d(e,"aria-labelledby",h[8]),(!o||b&1&&r!==(r=h[0]||0))&&d(e,"aria-valuenow",r),(!o||b&1&&i!==(i=h[0]?`${h[0]}%`:"Indeterminate Spinner"))&&d(e,"aria-valuetext",i)},i(h){o||(U(u),o=!0)},o(h){z(u),o=!1},d(h){h&&_(e),u&&u.d()}}}const Ot="progress-radial relative overflow-hidden",ze="fill-transparent",Ve="fill-transparent -rotate-90 origin-[50%_50%]",Le=512;function Tt(l,e,t){let s,{$$slots:a={},$$scope:n}=e;const c=tt(a);let{value:f=void 0}=e,{stroke:m=40}=e,{font:r=56}=e,{strokeLinecap:i="butt"}=e,{transition:o="transition-[stroke-dashoffset]"}=e,{width:u="w-36"}=e,{meter:h="stroke-surface-900 dark:stroke-surface-50"}=e,{track:b="stroke-surface-500/30"}=e,{fill:g="fill-token"}=e,{labelledby:v=""}=e;const p=Le/2-m/2;let P=p,C;function N(L){t(9,P=p*2*Math.PI),t(10,C=P-L/100*P)}return N(0),lt(()=>{N(f===void 0?25:f)}),l.$$set=L=>{t(18,e=le(le({},e),se(L))),"value"in L&&t(0,f=L.value),"stroke"in L&&t(1,m=L.stroke),"font"in L&&t(2,r=L.font),"strokeLinecap"in L&&t(3,i=L.strokeLinecap),"transition"in L&&t(4,o=L.transition),"width"in L&&t(14,u=L.width),"meter"in L&&t(5,h=L.meter),"track"in L&&t(6,b=L.track),"fill"in L&&t(7,g=L.fill),"labelledby"in L&&t(8,v=L.labelledby),"$$scope"in L&&t(15,n=L.$$scope)},l.$$.update=()=>{t(11,s=`${Ot} ${u} ${e.class??""}`)},e=se(e),[f,m,r,i,o,h,b,g,v,P,C,s,p,c,u,n,a]}class Ft extends re{constructor(e){super(),oe(this,e,Tt,Dt,ne,{value:0,stroke:1,font:2,strokeLinecap:3,transition:4,width:14,meter:5,track:6,fill:7,labelledby:8})}}function Ut(l){let e,t=`<script nonce="%sveltekit.nonce%">(${Lt.toString()})();<\/script>`,s,a,n,c,f,m,r,i,o,u,h,b;return{c(){e=new Ee(!1),s=ve(),a=A(),n=T("div"),c=T("div"),f=ee("svg"),m=ee("path"),this.h()},l(g){const v=rt("svelte-gewkj4",document.head);e=we(v,!1),s=ve(),v.forEach(_),a=W(g),n=F(g,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var p=M(n);c=F(p,"DIV",{class:!0});var P=M(c);f=te(P,"svg",{class:!0,xmlns:!0,viewBox:!0});var C=M(f);m=te(C,"path",{d:!0}),M(m).forEach(_),C.forEach(_),P.forEach(_),p.forEach(_),this.h()},h(){e.a=s,d(m,"d",r=l[1]?l[5].sun:l[5].moon),d(f,"class",i="lightswitch-icon "+l[2]),d(f,"xmlns","http://www.w3.org/2000/svg"),d(f,"viewBox","0 0 512 512"),d(c,"class",o="lightswitch-thumb "+l[3]),d(n,"class",u="lightswitch-track "+l[4]),d(n,"role","switch"),d(n,"aria-label","Light Switch"),d(n,"aria-checked",l[1]),d(n,"title",l[0]),d(n,"tabindex","0")},m(g,v){e.m(t,document.head),O(document.head,s),w(g,a,v),w(g,n,v),O(n,c),O(c,f),O(f,m),h||(b=[q(n,"click",l[6]),q(n,"click",l[19]),q(n,"keydown",Vt),q(n,"keydown",l[20]),q(n,"keyup",l[21]),q(n,"keypress",l[22])],h=!0)},p(g,[v]){v&2&&r!==(r=g[1]?g[5].sun:g[5].moon)&&d(m,"d",r),v&4&&i!==(i="lightswitch-icon "+g[2])&&d(f,"class",i),v&8&&o!==(o="lightswitch-thumb "+g[3])&&d(c,"class",o),v&16&&u!==(u="lightswitch-track "+g[4])&&d(n,"class",u),v&2&&d(n,"aria-checked",g[1]),v&1&&d(n,"title",g[0])},i:K,o:K,d(g){g&&(e.d(),_(a),_(n)),_(s),h=!1,Se(b)}}}const Nt="cursor-pointer",jt="aspect-square scale-[0.8] flex justify-center items-center",zt="w-[70%] aspect-square";function Vt(l){["Enter","Space"].includes(l.code)&&(l.preventDefault(),l.currentTarget.click())}function Ht(l,e,t){let s,a,n,c,f,m,r,i;qe(l,ye,y=>t(1,i=y));let{title:o="Toggle light or dark mode."}=e,{bgLight:u="bg-surface-50"}=e,{bgDark:h="bg-surface-900"}=e,{fillLight:b="fill-surface-50"}=e,{fillDark:g="fill-surface-900"}=e,{width:v="w-12"}=e,{height:p="h-6"}=e,{ring:P="ring-[1px] ring-surface-500/30"}=e,{rounded:C="rounded-token"}=e;const N="transition-all duration-[200ms]",L={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function j(){ot(ye,i=!i,i),yt(i),Oe(i)}Ae(()=>{"modeCurrent"in localStorage||Oe(pt())});function I(y){$.call(this,l,y)}function B(y){$.call(this,l,y)}function D(y){$.call(this,l,y)}function V(y){$.call(this,l,y)}return l.$$set=y=>{t(24,e=le(le({},e),se(y))),"title"in y&&t(0,o=y.title),"bgLight"in y&&t(7,u=y.bgLight),"bgDark"in y&&t(8,h=y.bgDark),"fillLight"in y&&t(9,b=y.fillLight),"fillDark"in y&&t(10,g=y.fillDark),"width"in y&&t(11,v=y.width),"height"in y&&t(12,p=y.height),"ring"in y&&t(13,P=y.ring),"rounded"in y&&t(14,C=y.rounded)},l.$$.update=()=>{l.$$.dirty&386&&t(18,s=i===!0?u:h),l.$$.dirty&386&&t(17,a=i===!0?h:u),l.$$.dirty&2&&t(16,n=i===!0?"translate-x-[100%]":""),l.$$.dirty&1538&&t(15,c=i===!0?b:g),t(4,f=`${Nt} ${N} ${v} ${p} ${P} ${C} ${s} ${e.class??""}`),l.$$.dirty&217088&&t(3,m=`${jt} ${N} ${p} ${C} ${a} ${n}`),l.$$.dirty&32768&&t(2,r=`${zt} ${c}`)},e=se(e),[o,i,r,m,f,L,j,u,h,b,g,v,p,P,C,c,n,a,s,I,B,D,V]}class Rt extends re{constructor(e){super(),oe(this,e,Ht,Ut,ne,{title:0,bgLight:7,bgDark:8,fillLight:9,fillDark:10,width:11,height:12,ring:13,rounded:14})}}function qt(l){let e,t,s,a,n,c,f,m;function r(o){l[5](o)}let i={options:l[0]};return l[1]!==void 0&&(i.input=l[1]),a=new Bt({props:i}),We.push(()=>Je(a,"input",r)),a.$on("selection",l[2]),{c(){e=T("input"),t=A(),s=T("div"),de(a.$$.fragment),this.h()},l(o){e=F(o,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),t=W(o),s=F(o,"DIV",{class:!0,tabindex:!0});var u=M(s);me(a.$$.fragment,u),u.forEach(_),this.h()},h(){d(e,"class","input"),d(e,"type","search"),d(e,"name","autocomplete-search"),d(e,"placeholder","Search pokemon..."),d(s,"class","card w-full max-w-sm max-h-48 p-4 overflow-y-auto"),d(s,"tabindex","-1")},m(o,u){w(o,e,u),Me(e,l[1]),w(o,t,u),w(o,s,u),he(a,s,null),c=!0,f||(m=q(e,"input",l[4]),f=!0)},p(o,[u]){u&2&&e.value!==o[1]&&Me(e,o[1]);const h={};u&1&&(h.options=o[0]),!n&&u&2&&(n=!0,h.input=o[1],Ge(()=>n=!1)),a.$set(h)},i(o){c||(U(a.$$.fragment,o),c=!0)},o(o){z(a.$$.fragment,o),c=!1},d(o){o&&(_(e),_(t),_(s)),ge(a),f=!1,m()}}}function At(l,e,t){let{pokemonList:s}=e,{selected:a=""}=e,n="";function c(r){t(3,a=r.detail.value)}function f(){n=this.value,t(1,n)}function m(r){n=r,t(1,n)}return l.$$set=r=>{"pokemonList"in r&&t(0,s=r.pokemonList),"selected"in r&&t(3,a=r.selected)},[s,n,c,a,f,m]}class Wt extends re{constructor(e){super(),oe(this,e,At,qt,ne,{pokemonList:0,selected:3})}}function Gt(l){let e,t=l[2].message+"",s;return{c(){e=T("p"),s=H(t),this.h()},l(a){e=F(a,"P",{style:!0});var n=M(e);s=R(n,t),n.forEach(_),this.h()},h(){fe(e,"color","red")},m(a,n){w(a,e,n),O(e,s)},p(a,n){n&1&&t!==(t=a[2].message+"")&&x(s,t)},d(a){a&&_(e)}}}function Jt(l){let e,t=l[1].name+"",s,a,n=l[1].id+"",c,f,m,r,i,o,u,h,b,g,v,p,P,C=l[1].height+"",N,L,j,I,B=l[1].weight+"",D,V,y,Y,G=l[1].base_experience+"",X;return{c(){e=T("h1"),s=H(t),a=H(" ("),c=H(n),f=H(")"),m=A(),r=T("img"),u=A(),h=T("img"),v=A(),p=T("p"),P=H("Height: "),N=H(C),L=A(),j=T("p"),I=H("Weight: "),D=H(B),V=A(),y=T("p"),Y=H("Base experience: "),X=H(G),this.h()},l(S){e=F(S,"H1",{});var E=M(e);s=R(E,t),a=R(E," ("),c=R(E,n),f=R(E,")"),E.forEach(_),m=W(S),r=F(S,"IMG",{src:!0,alt:!0}),u=W(S),h=F(S,"IMG",{src:!0,alt:!0}),v=W(S),p=F(S,"P",{});var Z=M(p);P=R(Z,"Height: "),N=R(Z,C),Z.forEach(_),L=W(S),j=F(S,"P",{});var ce=M(j);I=R(ce,"Weight: "),D=R(ce,B),ce.forEach(_),V=W(S),y=F(S,"P",{});var ue=M(y);Y=R(ue,"Base experience: "),X=R(ue,G),ue.forEach(_),this.h()},h(){be(r.src,i=l[1].sprites.front_default)||d(r,"src",i),d(r,"alt",o=l[1].name),be(h.src,b=l[1].sprites.back_default)||d(h,"src",b),d(h,"alt",g=l[1].name)},m(S,E){w(S,e,E),O(e,s),O(e,a),O(e,c),O(e,f),w(S,m,E),w(S,r,E),w(S,u,E),w(S,h,E),w(S,v,E),w(S,p,E),O(p,P),O(p,N),w(S,L,E),w(S,j,E),O(j,I),O(j,D),w(S,V,E),w(S,y,E),O(y,Y),O(y,X)},p(S,E){E&1&&t!==(t=S[1].name+"")&&x(s,t),E&1&&n!==(n=S[1].id+"")&&x(c,n),E&1&&!be(r.src,i=S[1].sprites.front_default)&&d(r,"src",i),E&1&&o!==(o=S[1].name)&&d(r,"alt",o),E&1&&!be(h.src,b=S[1].sprites.back_default)&&d(h,"src",b),E&1&&g!==(g=S[1].name)&&d(h,"alt",g),E&1&&C!==(C=S[1].height+"")&&x(N,C),E&1&&B!==(B=S[1].weight+"")&&x(D,B),E&1&&G!==(G=S[1].base_experience+"")&&x(X,G)},d(S){S&&(_(e),_(m),_(r),_(u),_(h),_(v),_(p),_(L),_(j),_(V),_(y))}}}function Qt(l){let e,t="Fetching pokemon...";return{c(){e=T("p"),e.textContent=t},l(s){e=F(s,"P",{"data-svelte-h":!0}),ct(e)!=="svelte-brujrl"&&(e.textContent=t)},m(s,a){w(s,e,a)},p:K,d(s){s&&_(e)}}}function Kt(l){let e,t,s={ctx:l,current:null,token:null,hasCatch:!0,pending:Qt,then:Jt,catch:Gt,value:1,error:2};return Ce(t=He(l[0]),s),{c(){e=ve(),s.block.c()},l(a){e=ve(),s.block.l(a)},m(a,n){w(a,e,n),s.block.m(a,s.anchor=n),s.mount=()=>e.parentNode,s.anchor=e},p(a,[n]){l=a,s.ctx=l,n&1&&t!==(t=He(l[0]))&&Ce(t,s)||ht(s,l,n)},i:K,o:K,d(a){a&&_(e),s.block.d(a),s.token=null,s=null}}}async function He(l){return(await fetch(`https://pokeapi.co/api/v2/pokemon/${l}`)).json()}function Xt(l,e,t){let{pokemon:s}=e;return l.$$set=a=>{"pokemon"in a&&t(0,s=a.pokemon)},[s]}class Yt extends re{constructor(e){super(),oe(this,e,Xt,Kt,ne,{pokemon:0})}}function Zt(l){let e,t,s,a,n,c;function f(i){l[3](i)}let m={pokemonList:l[0].pokemons};l[1]!==void 0&&(m.selected=l[1]),e=new Wt({props:m}),We.push(()=>Je(e,"selected",f));let r=l[1]&&Re(l);return n=new Rt({}),{c(){de(e.$$.fragment),s=A(),r&&r.c(),a=A(),de(n.$$.fragment)},l(i){me(e.$$.fragment,i),s=W(i),r&&r.l(i),a=W(i),me(n.$$.fragment,i)},m(i,o){he(e,i,o),w(i,s,o),r&&r.m(i,o),w(i,a,o),he(n,i,o),c=!0},p(i,o){const u={};o&1&&(u.pokemonList=i[0].pokemons),!t&&o&2&&(t=!0,u.selected=i[1],Ge(()=>t=!1)),e.$set(u),i[1]?r?(r.p(i,o),o&2&&U(r,1)):(r=Re(i),r.c(),U(r,1),r.m(a.parentNode,a)):r&&(ae(),z(r,1,1,()=>{r=null}),ie())},i(i){c||(U(e.$$.fragment,i),U(r),U(n.$$.fragment,i),c=!0)},o(i){z(e.$$.fragment,i),z(r),z(n.$$.fragment,i),c=!1},d(i){i&&(_(s),_(a)),ge(e,i),r&&r.d(i),ge(n,i)}}}function xt(l){let e,t,s;return t=new Ft({}),{c(){e=T("div"),de(t.$$.fragment),this.h()},l(a){e=F(a,"DIV",{class:!0});var n=M(e);me(t.$$.fragment,n),n.forEach(_),this.h()},h(){d(e,"class","h-screen flex items-center justify-center")},m(a,n){w(a,e,n),he(t,e,null),s=!0},p:K,i(a){s||(U(t.$$.fragment,a),s=!0)},o(a){z(t.$$.fragment,a),s=!1},d(a){a&&_(e),ge(t)}}}function Re(l){let e,t;return e=new Yt({props:{pokemon:l[1]}}),{c(){de(e.$$.fragment)},l(s){me(e.$$.fragment,s)},m(s,a){he(e,s,a),t=!0},p(s,a){const n={};a&2&&(n.pokemon=s[1]),e.$set(n)},i(s){t||(U(e.$$.fragment,s),t=!0)},o(s){z(e.$$.fragment,s),t=!1},d(s){ge(e,s)}}}function $t(l){let e,t,s,a;const n=[xt,Zt],c=[];function f(m,r){return m[2]?0:1}return t=f(l),s=c[t]=n[t](l),{c(){e=T("main"),s.c()},l(m){e=F(m,"MAIN",{});var r=M(e);s.l(r),r.forEach(_)},m(m,r){w(m,e,r),c[t].m(e,null),a=!0},p(m,[r]){let i=t;t=f(m),t===i?c[t].p(m,r):(ae(),z(c[i],1,1,()=>{c[i]=null}),ie(),s=c[t],s?s.p(m,r):(s=c[t]=n[t](m),s.c()),U(s,1),s.m(e,null))},i(m){a||(U(s),a=!0)},o(m){z(s),a=!1},d(m){m&&_(e),c[t].d()}}}function el(l,e,t){let{data:s}=e,a=!0;Ae(()=>{t(2,a=!1)});let n="";function c(f){n=f,t(1,n)}return l.$$set=f=>{"data"in f&&t(0,s=f.data)},l.$$.update=()=>{l.$$.dirty&2},[s,n,a,c]}class al extends re{constructor(e){super(),oe(this,e,el,$t,ne,{data:0})}}export{al as component,nl as universal};
