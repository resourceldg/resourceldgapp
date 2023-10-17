import{r as Ae,s as He,f as Se,n as se,c as Ne,i as De,h as le}from"../chunks/scheduler.cbf234a0.js";import{d as Pe,S as Le,i as Oe,g as M,s as P,e as oe,C as Xe,h as W,f as g,c as L,y as Q,j as H,k as y,D as G,A as S,a as T,B as ee,m as N,n as D,l as R,o as te,E as Ce,F as Te}from"../chunks/index.200976ee.js";import{p as ze}from"../chunks/parse.bee59afc.js";import{j as Fe,k as Ie}from"../chunks/singletons.404b1b0b.js";import{r as qe}from"../chunks/index.14349a18.js";const Be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function I(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Me(n,e){n.d(1),e.delete(n.key)}function We(n,e,t,a,o,i,l,s,u,b,h,_){let p=n.length,f=i.length,c=p;const r={};for(;c--;)r[n[c].key]=c;const m=[],C=new Map,k=new Map,A=[];for(c=f;c--;){const v=_(o,i,c),E=t(v);let d=l.get(E);d?a&&A.push(()=>d.p(v,e)):(d=b(E,v),d.c()),C.set(E,m[c]=d),E in r&&k.set(E,Math.abs(c-r[E]))}const X=new Set,F=new Set;function O(v){Pe(v,1),v.m(s,h),l.set(v.key,v),h=v.first,f--}for(;p&&f;){const v=m[f-1],E=n[p-1],d=v.key,w=E.key;v===E?(h=v.first,p--,f--):C.has(w)?!l.has(d)||X.has(d)?O(v):F.has(w)?p--:k.get(d)>k.get(w)?(F.add(d),O(v)):(X.add(w),p--):(u(E,l),p--)}for(;p--;){const v=n[p];C.has(v.key)||u(v,l)}for(;f;)O(m[f-1]);return Ae(A),m}const Ve=(n,e={})=>{de(e);let{colors:t=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:a=3500,force:o=.5,particleCount:i=150,particleShape:l="mix",particleSize:s=12,destroyAfterDone:u=!0,stageHeight:b=800,stageWidth:h=1600}=e;(function(r){const m=Y("style");m.dataset.neoconfetti="",m.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',Z(document.head,m)})(),n.classList.add("fk9XWG_container"),n.style.setProperty("--stage-height",b+"px");let _,p=fe(i,t),f=re(n,p);function c(r,m){const C=V(z()*(Ke-1)),k=l!=="rectangles"&&(l==="circles"||Qe(C)),A=(O,v)=>r.style.setProperty(O,v+"");A("--x-landing-point",J(U(ue(m,90)-180),0,180,-h/2,h/2)+"px"),A("--duration-chaos",a-V(1e3*z())+"ms");const X=z()<xe?q(z()*Re,2):0;A("--x1",X),A("--x2",-1*X),A("--x3",X),A("--x4",q(U(J(U(ue(m,90)-180),0,180,-1,1)),4)),A("--y1",q(z()*ce,4)),A("--y2",q(z()*o*(je()?1:-1),4)),A("--y3",ce),A("--y4",q(Je(J(U(m-180),0,180,o,-o),0),4)),A("--width",(k?s:V(4*z())+s/2)+"px"),A("--height",(k?s:V(2*z())+s)+"px");const F=C.toString(2).padStart(3,"0").split("");A("--half-rotation",F.map(O=>+O/2+"")),A("--rotation",F),A("--rotation-duration",q(z()*(Ue-ie)+ie)+"ms"),A("--border-radius",k?"50%":0)}for(const[r,m]of Object.entries(f))c(m,p[+r].degree);return Promise.resolve().then(()=>_=setTimeout(()=>u&&(n.innerHTML=""),a)),{update(r){de(r);const m=r.particleCount??i,C=r.colors??t,k=r.stageHeight??b;if(p=fe(m,C),m===i&&JSON.stringify(t)!==JSON.stringify(C))for(const[A,{color:X}]of Object.entries(p))f[+A].style.setProperty("--bgcolor",X);m!==i&&(n.innerHTML="",f=re(n,p)),u&&!r.destroyAfterDone&&clearTimeout(_),n.style.setProperty("--stage-height",k+"px"),t=C,a=r.duration??a,o=r.force??o,i=m,l=r.particleShape??l,s=r.particleSize??s,u=r.destroyAfterDone??u,b=k,h=r.stageWidth??h},destroy(){clearTimeout(_)}}};function re(n,e=[]){const t=[];for(const{color:a}of e){const o=Y("div");o.className="fk9XWG_particle",o.style.setProperty("--bgcolor",a);const i=Y("div");Z(o,i),Z(n,o),t.push(o)}return t}const ie=200,Ue=800,xe=.1,Re=.3,ce=.5,U=Math.abs,z=Math.random,V=Math.round,Je=Math.max,Y=n=>document.createElement(n),Z=(n,e)=>n.appendChild(e),fe=(n,e)=>Array.from({length:n},(t,a)=>({color:e[a%e.length],degree:360*a/n})),q=(n,e=2)=>V((n+Number.EPSILON)*10**e)/10**e,J=(n,e,t,a,o)=>(n-e)*(o-a)/(t-e)+a,ue=(n,e)=>n+e>360?n+e-360:n+e,je=()=>z()>.5,Ke=6,Qe=n=>n!==1&&je(),$=n=>n===void 0,B=(n,e)=>{if(!$(n)&&Number.isSafeInteger(n)&&n<0)throw new Error(e+" must be a positive integer")},de=({particleCount:n,duration:e,colors:t,particleSize:a,force:o,stageHeight:i,stageWidth:l,particleShape:s})=>{if(B(n,"particleCount"),B(e,"duration"),B(a,"particleSize"),B(o,"force"),B(i,"stageHeight"),B(l,"stageWidth"),!$(s)&&!/^(mix|circles|rectangles)$/i.test(s))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!$(t)&&!Array.isArray(t))throw new Error("colors must be an array of strings");if(o>1)throw new Error("force must be within 0 and 1")},Ye=Fe("invalidate_all");function Ze(n){return Ie.apply_action(n)}function $e(n){const e=JSON.parse(n);return e.data&&(e.data=ze(e.data)),e}function he(n){return HTMLElement.prototype.cloneNode.call(n)}function et(n,e=()=>{}){const t=async({action:o,result:i,reset:l})=>{i.type==="success"&&(l!==!1&&HTMLFormElement.prototype.reset.call(n),await Ye()),(location.origin+location.pathname===o.origin+o.pathname||i.type==="redirect"||i.type==="error")&&Ze(i)};async function a(o){var c,r,m,C;if(((c=o.submitter)!=null&&c.hasAttribute("formmethod")?o.submitter.formMethod:he(n).method)!=="post")return;o.preventDefault();const l=new URL((r=o.submitter)!=null&&r.hasAttribute("formaction")?o.submitter.formAction:he(n).action),s=new FormData(n),u=(m=o.submitter)==null?void 0:m.getAttribute("name");u&&s.append(u,((C=o.submitter)==null?void 0:C.getAttribute("value"))??"");const b=new AbortController;let h=!1;const p=await e({action:l,cancel:()=>h=!0,controller:b,get data(){return s},formData:s,get form(){return n},formElement:n,submitter:o.submitter})??t;if(h)return;let f;try{const k=await fetch(l,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:s,signal:b.signal});f=$e(await k.text()),f.type==="error"&&(f.status=k.status)}catch(k){if((k==null?void 0:k.name)==="AbortError")return;f={type:"error",error:k}}p({action:l,get data(){return s},formData:s,get form(){return n},formElement:n,update:k=>t({action:l,result:f,reset:k==null?void 0:k.reset}),result:f})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",a)}}}const Ge="(prefers-reduced-motion: reduce)",tt=()=>window.matchMedia(Ge).matches,nt=qe(tt(),n=>{{const e=a=>{n(a.matches)},t=window.matchMedia(Ge);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});const{document:K,window:at}=Be;function pe(n,e,t){const a=n.slice();return a[11]=e[t],a}function me(n,e,t){const a=n.slice();return a[14]=e[t],a}function _e(n,e,t){const a=n.slice();a[11]=e[t];const o=a[11]===a[4];return a[17]=o,a}function ge(n,e,t){var _,p;const a=n.slice();a[20]=e[t];const o=a[17]?a[3]:a[1].guesses[a[11]];a[21]=o;const i=(_=a[1].answers[a[11]])==null?void 0:_[a[20]];a[22]=i;const l=((p=a[21])==null?void 0:p[a[20]])??"";a[23]=l;const s=a[17]&&a[20]===a[21].length;a[24]=s;const u=a[22]==="x";a[25]=u;const b=a[22]==="c";a[26]=b;const h=a[22]==="_";return a[27]=h,a}function st(n){let e;return{c(){e=N("empty")},l(t){e=D(t,"empty")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function lt(n){let e;return{c(){e=N("(absent)")},l(t){e=D(t,"(absent)")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function ot(n){let e;return{c(){e=N("(present)")},l(t){e=D(t,"(present)")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function rt(n){let e;return{c(){e=N("(correct)")},l(t){e=D(t,"(correct)")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function be(n,e){let t,a=e[23]+"",o,i,l,s,u,b,h;function _(c,r){return c[25]?rt:c[26]?ot:c[27]?lt:st}let p=_(e),f=p(e);return{key:n,first:null,c(){t=M("div"),o=N(a),i=P(),l=M("span"),f.c(),s=P(),u=M("input"),this.h()},l(c){t=W(c,"DIV",{class:!0});var r=H(t);o=D(r,a),i=L(r),l=W(r,"SPAN",{class:!0});var m=H(l);f.l(m),m.forEach(g),s=L(r),u=W(r,"INPUT",{name:!0,type:!0}),r.forEach(g),this.h()},h(){y(l,"class","visually-hidden"),y(u,"name","guess"),u.disabled=b=!e[17],y(u,"type","hidden"),u.value=h=e[23],y(t,"class","letter svelte-1pg2j5l"),G(t,"exact",e[25]),G(t,"close",e[26]),G(t,"missing",e[27]),G(t,"selected",e[24]),this.first=t},m(c,r){T(c,t,r),S(t,o),S(t,i),S(t,l),f.m(l,null),S(t,s),S(t,u)},p(c,r){e=c,r&26&&a!==(a=e[23]+"")&&te(o,a),p!==(p=_(e))&&(f.d(1),f=p(e),f&&(f.c(),f.m(l,null))),r&16&&b!==(b=!e[17])&&(u.disabled=b),r&26&&h!==(h=e[23])&&(u.value=h),r&2&&G(t,"exact",e[25]),r&2&&G(t,"close",e[26]),r&2&&G(t,"missing",e[27]),r&26&&G(t,"selected",e[24])},d(c){c&&g(t),f.d()}}}function ye(n,e){let t,a,o=e[11]+1+"",i,l,s,u=[],b=new Map,h,_=I(Array.from(Array(5).keys()));const p=f=>f[20];for(let f=0;f<_.length;f+=1){let c=ge(e,_,f),r=p(c);b.set(r,u[f]=be(r,c))}return{key:n,first:null,c(){t=M("h2"),a=N("Row "),i=N(o),l=P(),s=M("div");for(let f=0;f<u.length;f+=1)u[f].c();h=P(),this.h()},l(f){t=W(f,"H2",{class:!0});var c=H(t);a=D(c,"Row "),i=D(c,o),c.forEach(g),l=L(f),s=W(f,"DIV",{class:!0});var r=H(s);for(let m=0;m<u.length;m+=1)u[m].l(r);h=L(r),r.forEach(g),this.h()},h(){y(t,"class","visually-hidden"),y(s,"class","row svelte-1pg2j5l"),G(s,"current",e[17]),this.first=t},m(f,c){T(f,t,c),S(t,a),S(t,i),T(f,l,c),T(f,s,c);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(s,null);S(s,h)},p(f,c){e=f,c&26&&(_=I(Array.from(Array(5).keys())),u=We(u,c,p,1,e,_,b,s,Me,be,h,ge)),c&16&&G(s,"current",e[17])},d(f){f&&(g(t),g(l),g(s));for(let c=0;c<u.length;c+=1)u[c].d()}}}function it(n){let e,t,a,o,i,l,s="back",u,b,h,_=I(["qwertyuiop","asdfghjkl","zxcvbnm"]),p=[];for(let f=0;f<3;f+=1)p[f]=ke(pe(n,_,f));return{c(){e=M("div"),t=M("button"),a=N("enter"),i=P(),l=M("button"),l.textContent=s,u=P();for(let f=0;f<3;f+=1)p[f].c();this.h()},l(f){e=W(f,"DIV",{class:!0});var c=H(e);t=W(c,"BUTTON",{"data-key":!0,class:!0});var r=H(t);a=D(r,"enter"),r.forEach(g),i=L(c),l=W(c,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1ptb1bp"&&(l.textContent=s),u=L(c);for(let m=0;m<3;m+=1)p[m].l(c);c.forEach(g),this.h()},h(){y(t,"data-key","enter"),t.disabled=o=!n[7],y(t,"class","svelte-1pg2j5l"),G(t,"selected",n[7]),y(l,"data-key","backspace"),y(l,"formaction","?/update"),y(l,"name","key"),l.value="backspace",y(l,"class","svelte-1pg2j5l"),y(e,"class","keyboard svelte-1pg2j5l")},m(f,c){T(f,e,c),S(e,t),S(t,a),S(e,i),S(e,l),S(e,u);for(let r=0;r<3;r+=1)p[r]&&p[r].m(e,null);b||(h=ee(l,"click",Ce(n[9])),b=!0)},p(f,c){if(c&128&&o!==(o=!f[7])&&(t.disabled=o),c&128&&G(t,"selected",f[7]),c&708){_=I(["qwertyuiop","asdfghjkl","zxcvbnm"]);let r;for(r=0;r<3;r+=1){const m=pe(f,_,r);p[r]?p[r].p(m,c):(p[r]=ke(m),p[r].c(),p[r].m(e,null))}for(;r<3;r+=1)p[r].d(1)}},d(f){f&&g(e),Te(p,f),b=!1,h()}}}function ct(n){let e,t,a=n[5]?"you won :)":"game over :(",o,i,l=!n[5]&&n[1].answer&&we(n);return{c(){l&&l.c(),e=P(),t=M("button"),o=N(a),i=N(" play again?"),this.h()},l(s){l&&l.l(s),e=L(s),t=W(s,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var u=H(t);o=D(u,a),i=D(u," play again?"),u.forEach(g),this.h()},h(){y(t,"data-key","enter"),y(t,"class","restart selected svelte-1pg2j5l"),y(t,"formaction","?/restart")},m(s,u){l&&l.m(s,u),T(s,e,u),T(s,t,u),S(t,o),S(t,i)},p(s,u){!s[5]&&s[1].answer?l?l.p(s,u):(l=we(s),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),u&32&&a!==(a=s[5]?"you won :)":"game over :(")&&te(o,a)},d(s){s&&(g(e),g(t)),l&&l.d(s)}}}function ve(n){let e,t,a,o,i,l;return{c(){e=M("button"),t=N(n[14]),this.h()},l(s){e=W(s,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var u=H(e);t=D(u,n[14]),u.forEach(g),this.h()},h(){y(e,"data-key",n[14]),y(e,"class",a=le(n[2][n[14]])+" svelte-1pg2j5l"),e.disabled=n[7],y(e,"formaction","?/update"),y(e,"name","key"),e.value=n[14],y(e,"aria-label",o=n[14]+" "+(n[6][n[14]]||""))},m(s,u){T(s,e,u),S(e,t),i||(l=ee(e,"click",Ce(n[9])),i=!0)},p(s,u){u&4&&a!==(a=le(s[2][s[14]])+" svelte-1pg2j5l")&&y(e,"class",a),u&128&&(e.disabled=s[7]),u&64&&o!==(o=s[14]+" "+(s[6][s[14]]||""))&&y(e,"aria-label",o)},d(s){s&&g(e),i=!1,l()}}}function ke(n){let e,t,a=I(n[11]),o=[];for(let i=0;i<a.length;i+=1)o[i]=ve(me(n,a,i));return{c(){e=M("div");for(let i=0;i<o.length;i+=1)o[i].c();t=P(),this.h()},l(i){e=W(i,"DIV",{class:!0});var l=H(e);for(let s=0;s<o.length;s+=1)o[s].l(l);t=L(l),l.forEach(g),this.h()},h(){y(e,"class","row svelte-1pg2j5l")},m(i,l){T(i,e,l);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(e,null);S(e,t)},p(i,l){if(l&708){a=I(i[11]);let s;for(s=0;s<a.length;s+=1){const u=me(i,a,s);o[s]?o[s].p(u,l):(o[s]=ve(u),o[s].c(),o[s].m(e,t))}for(;s<o.length;s+=1)o[s].d(1);o.length=a.length}},d(i){i&&g(e),Te(o,i)}}}function we(n){let e,t,a=n[1].answer+"",o,i;return{c(){e=M("p"),t=N('the answer was "'),o=N(a),i=N('"')},l(l){e=W(l,"P",{});var s=H(e);t=D(s,'the answer was "'),o=D(s,a),i=D(s,'"'),s.forEach(g)},m(l,s){T(l,e,s),S(e,t),S(e,o),S(e,i)},p(l,s){s&2&&a!==(a=l[1].answer+"")&&te(o,a)},d(l){l&&g(e)}}}function Ee(n){let e,t,a,o;return{c(){e=M("div"),this.h()},l(i){e=W(i,"DIV",{style:!0}),H(e).forEach(g),this.h()},h(){R(e,"position","absolute"),R(e,"left","50%"),R(e,"top","30%")},m(i,l){T(i,e,l),a||(o=Se(t=Ve.call(null,e,{particleCount:n[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),a=!0)},p(i,l){t&&De(t.update)&&l&256&&t.update.call(null,{particleCount:i[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(i){i&&g(e),a=!1,o()}}}function ft(n){let e,t,a,o="Sverdle",i,l,s,u="How to play",b,h,_=[],p=new Map,f,c,r,m,C,k,A=I(Array.from(Array(6).keys()));const X=d=>d[11];for(let d=0;d<A.length;d+=1){let w=_e(n,A,d),j=X(w);p.set(j,_[d]=ye(j,w))}function F(d,w){return d[5]||d[1].answers.length>=6?ct:it}let O=F(n),v=O(n),E=n[5]&&Ee(n);return{c(){e=M("meta"),t=P(),a=M("h1"),a.textContent=o,i=P(),l=M("form"),s=M("a"),s.textContent=u,b=P(),h=M("div");for(let d=0;d<_.length;d+=1)_[d].c();f=P(),c=M("div"),v.c(),r=P(),E&&E.c(),m=oe(),this.h()},l(d){const w=Xe("svelte-18lvto8",K.head);e=W(w,"META",{name:!0,content:!0}),w.forEach(g),t=L(d),a=W(d,"H1",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-16hvqlg"&&(a.textContent=o),i=L(d),l=W(d,"FORM",{method:!0,action:!0,class:!0});var j=H(l);s=W(j,"A",{class:!0,href:!0,"data-svelte-h":!0}),Q(s)!=="svelte-1w3fhu3"&&(s.textContent=u),b=L(j),h=W(j,"DIV",{class:!0});var ne=H(h);for(let x=0;x<_.length;x+=1)_[x].l(ne);ne.forEach(g),f=L(j),c=W(j,"DIV",{class:!0});var ae=H(c);v.l(ae),ae.forEach(g),j.forEach(g),r=L(d),E&&E.l(d),m=oe(),this.h()},h(){var d;K.title="Sverdle",y(e,"name","description"),y(e,"content","A Wordle clone written in SvelteKit"),y(a,"class","visually-hidden"),y(s,"class","how-to-play svelte-1pg2j5l"),y(s,"href","/sverdle/how-to-play"),y(h,"class","grid svelte-1pg2j5l"),G(h,"playing",!n[5]),G(h,"bad-guess",(d=n[0])==null?void 0:d.badGuess),y(c,"class","controls svelte-1pg2j5l"),y(l,"method","POST"),y(l,"action","?/enter"),y(l,"class","svelte-1pg2j5l")},m(d,w){S(K.head,e),T(d,t,w),T(d,a,w),T(d,i,w),T(d,l,w),S(l,s),S(l,b),S(l,h);for(let j=0;j<_.length;j+=1)_[j]&&_[j].m(h,null);S(l,f),S(l,c),v.m(c,null),T(d,r,w),E&&E.m(d,w),T(d,m,w),C||(k=[ee(at,"keydown",n[10]),Se(et.call(null,l,ut))],C=!0)},p(d,[w]){var j;w&26&&(A=I(Array.from(Array(6).keys())),_=We(_,w,X,1,d,A,p,h,Me,ye,null,_e)),w&32&&G(h,"playing",!d[5]),w&1&&G(h,"bad-guess",(j=d[0])==null?void 0:j.badGuess),O===(O=F(d))&&v?v.p(d,w):(v.d(1),v=O(d),v&&(v.c(),v.m(c,null))),d[5]?E?E.p(d,w):(E=Ee(d),E.c(),E.m(m.parentNode,m)):E&&(E.d(1),E=null)},i:se,o:se,d(d){d&&(g(t),g(a),g(i),g(l),g(r),g(m)),g(e);for(let w=0;w<_.length;w+=1)_[w].d();v.d(),E&&E.d(d),C=!1,Ae(k)}}}const ut=()=>({update:n})=>{n({reset:!1})};function dt(n,e,t){let a,o,i,l,s;Ne(n,nt,c=>t(8,s=c));let{data:u}=e,{form:b}=e,h,_;function p(c){const r=c.target.getAttribute("data-key");r==="backspace"?(t(3,i=i.slice(0,-1)),b!=null&&b.badGuess&&t(0,b.badGuess=!1,b)):i.length<5&&t(3,i+=r)}function f(c){var r;c.metaKey||c.key==="Enter"&&!l||(r=document.querySelector(`[data-key="${c.key}" i]`))==null||r.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}return n.$$set=c=>{"data"in c&&t(1,u=c.data),"form"in c&&t(0,b=c.form)},n.$$.update=()=>{n.$$.dirty&2&&t(5,a=u.answers.at(-1)==="xxxxx"),n.$$.dirty&34&&t(4,o=a?-1:u.answers.length),n.$$.dirty&22&&(t(2,h={}),t(6,_={}),u.answers.forEach((c,r)=>{const m=u.guesses[r];for(let C=0;C<5;C+=1){const k=m[C];c[C]==="x"?(t(2,h[k]="exact",h),t(6,_[k]="correct",_)):h[k]||(t(2,h[k]=c[C]==="c"?"close":"missing",h),t(6,_[k]=c[C]==="c"?"present":"absent",_))}})),n.$$.dirty&18&&t(3,i=u.guesses[o]||""),n.$$.dirty&8&&t(7,l=i.length===5)},[b,u,h,i,o,a,_,l,s,p,f]}class bt extends Le{constructor(e){super(),Oe(this,e,dt,ft,He,{data:1,form:0})}}export{bt as component};
