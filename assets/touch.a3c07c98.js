import{c as H,h as S,f as y,R as nt,a as G,g as R,r as E,i as ot,o as oe,T as it,w as M,S as fe,N as Be,U as Tt,J as Ae,b as ue,H as Re,M as Et,l as _,V as We,q as qt,W as xt,X as kt,E as A,L as Bt,K as Ct,D as Mt,Y as Lt,Z as be,$ as De,a0 as $t}from"./index.1b00b384.js";import{g as Pt,c as Ie,v as te,b as _t,u as Ht,d as At,e as Rt,f as se,h as Wt,n as lt,a as Dt,Q as we,i as It}from"./QBtn.26bf56b0.js";import{a as O,h as Nt}from"./render.fa539d76.js";const jt=[Element,String],zt=[null,document,document.body,document.scrollingElement,document.documentElement];function Ft(e,t){let n=Pt(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return zt.includes(n)?window:n}function Qt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Vt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function Ot(){if(le!==void 0)return le;const e=document.createElement("p"),t=document.createElement("div");Ie(e,{width:"100%",height:"200px"}),Ie(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),le=n-o,le}function Kt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}var no=H({name:"QSpace",setup(){const e=S("div",{class:"q-space"});return()=>e}});const Ut={ratio:[String,Number]};function Gt(e,t){return y(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}function qe(){let e=null;const t=R();function n(){e!==null&&(clearTimeout(e),e=null)}return nt(n),G(n),{removeTimeout:n,registerTimeout(o,i){n(),te(t)===!1&&(e=setTimeout(()=>{e=null,o()},i))}}}const Xt=1.7778;var oo=H({name:"QImg",props:{...Ut,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Xt},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const o=E(e.initialRatio),i=Gt(e,o),a=R(),{registerTimeout:l,removeTimeout:s}=qe(),{registerTimeout:d,removeTimeout:u}=qe(),c=y(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),g=y(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),h=[E(null),E(c.value)],r=E(0),v=E(!1),q=E(!1),x=y(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),C=y(()=>({width:e.width,height:e.height})),b=y(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),f=y(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function m(){if(u(),e.loadingShowDelay===0){v.value=!0;return}d(()=>{v.value=!0},e.loadingShowDelay)}function T(){u(),v.value=!1}function W({target:p}){te(a)===!1&&(s(),o.value=p.naturalHeight===0?.5:p.naturalWidth/p.naturalHeight,B(p,1))}function B(p,$){$===1e3||te(a)===!0||(p.complete===!0?L(p):l(()=>{B(p,$+1)},50))}function L(p){te(a)!==!0&&(r.value=r.value^1,h[r.value].value=null,T(),p.getAttribute("__qerror")!=="true"&&(q.value=!1),n("load",p.currentSrc||p.src))}function P(p){s(),T(),q.value=!0,h[r.value].value=g.value,h[r.value^1].value=c.value,n("error",p)}function X(p){const $=h[p].value,j={key:"img_"+p,class:b.value,style:f.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...$};return r.value===p?Object.assign(j,{class:j.class+"current",onLoad:W,onError:P}):j.class+="loaded",S("div",{class:"q-img__container absolute-full",key:"img"+p},S("img",j))}function ie(){return v.value===!1?S("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},O(t[q.value===!0?"error":"default"])):S("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[S(_t,{color:e.spinnerColor,size:e.spinnerSize})])}{let p=function(){M(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,$=>{s(),q.value=!1,$===null?(T(),h[r.value^1].value=c.value):m(),h[r.value].value=$},{immediate:!0})};ot.value===!0?oe(p):p()}return()=>{const p=[];return i.value!==null&&p.push(S("div",{key:"filler",style:i.value})),h[0].value!==null&&p.push(X(0)),h[1].value!==null&&p.push(X(1)),p.push(S(it,{name:"q-transition--fade"},ie)),S("div",{key:"main",class:x.value,style:C.value,role:"img","aria-label":e.alt},p)}}}),io=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=y(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:n.value},O(t.default))}}),lo=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=y(()=>parseInt(e.lines,10)),o=y(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=y(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>S("div",{style:i.value,class:o.value},O(t.default))}});const Ce={dark:{type:Boolean,default:null}};function Me(e,t){return y(()=>e.dark===null?t.dark.isActive:e.dark)}var ao=H({name:"QItem",props:{...Ce,...Ht,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=R(),i=Me(e,o),{hasLink:a,linkAttrs:l,linkClass:s,linkTag:d,navigateOnClick:u}=At(),c=E(null),g=E(null),h=y(()=>e.clickable===!0||a.value===!0||e.tag==="label"),r=y(()=>e.disable!==!0&&h.value===!0),v=y(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=y(()=>{if(e.insetLevel===void 0)return null;const f=o.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function x(f){r.value===!0&&(g.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===c.value?g.value.focus():document.activeElement===g.value&&c.value.focus()),u(f))}function C(f){if(r.value===!0&&fe(f,[13,32])===!0){Be(f),f.qKeyEvent=!0;const m=new MouseEvent("click",f);m.qKeyEvent=!0,c.value.dispatchEvent(m)}n("keyup",f)}function b(){const f=Nt(t.default,[]);return r.value===!0&&f.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:g})),f}return()=>{const f={ref:c,class:v.value,style:q.value,role:"listitem",onClick:x,onKeyup:C};return r.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,l.value)):h.value===!0&&(f["aria-disabled"]="true"),S(d.value,f,b())}}});const Yt=["ul","ol"];var ro=H({name:"QList",props:{...Ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=R(),o=Me(e,n.proxy.$q),i=y(()=>Yt.includes(e.tag)?null:"list"),a=y(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:a.value,role:i.value},O(t.default))}}),Jt=H({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=y(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(i=>e[i]===!0).map(i=>`q-btn-group--${i}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>S("div",{class:n.value},O(t.default))}});function Zt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const en={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},tn={...en,contextMenu:Boolean};function nn({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:i,emit:a}=R(),l=E(null);let s=null;function d(r){return l.value===null?!1:r===void 0||r.touches===void 0||r.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(r){i.hide(r)},toggle(r){i.toggle(r),r.qAnchorHandled=!0},toggleKey(r){fe(r,13)===!0&&u.toggle(r)},contextClick(r){i.hide(r),Ae(r),ue(()=>{i.show(r),r.qAnchorHandled=!0})},prevent:Ae,mobileTouch(r){if(u.mobileCleanup(r),d(r)!==!0)return;i.hide(r),l.value.classList.add("non-selectable");const v=r.target;Re(u,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,i.show(r),r.qAnchorHandled=!0},300)},mobileCleanup(r){l.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&r!==void 0&&Zt()}}),n=function(r=o.contextMenu){if(o.noParentEvent===!0||l.value===null)return;let v;r===!0?i.$q.platform.is.mobile===!0?v=[[l.value,"touchstart","mobileTouch","passive"]]:v=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:v=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],Re(u,"anchor",v)});function c(){Et(u,"anchor")}function g(r){for(l.value=r;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;n()}function h(){if(o.target===!1||o.target===""||i.$el.parentNode===null)l.value=null;else if(o.target===!0)g(i.$el.parentNode);else{let r=o.target;if(typeof o.target=="string")try{r=document.querySelector(o.target)}catch{r=void 0}r!=null?(l.value=r.$el||r,n()):(l.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return M(()=>o.contextMenu,r=>{l.value!==null&&(c(),n(r))}),M(()=>o.target,()=>{l.value!==null&&c(),h()}),M(()=>o.noParentEvent,r=>{l.value!==null&&(r===!0?c():n())}),oe(()=>{h(),t!==!0&&o.modelValue===!0&&l.value===null&&a("update:modelValue",!1)}),G(()=>{s!==null&&clearTimeout(s),c()}),{anchorEl:l,canShow:d,anchorEvents:u}}function on(e,t){const n=E(null);let o;function i(s,d){const u=`${d!==void 0?"add":"remove"}EventListener`,c=d!==void 0?d:o;s!==window&&s[u]("scroll",c,_.passive),window[u]("scroll",c,_.passive),o=d}function a(){n.value!==null&&(i(n.value),n.value=null)}const l=M(()=>e.noParentEvent,()=>{n.value!==null&&(a(),t())});return G(l),{localScrollTarget:n,unconfigureScrollTarget:a,changeScrollEvent:i}}const ln={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},an=["beforeShow","show","beforeHide","hide"];function rn({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:i,processOnMount:a}){const l=R(),{props:s,emit:d,proxy:u}=l;let c;function g(b){e.value===!0?v(b):h(b)}function h(b){if(s.disable===!0||b!==void 0&&b.qAnchorHandled===!0||t!==void 0&&t(b)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!0),c=b,ue(()=>{c===b&&(c=void 0)})),(s.modelValue===null||f===!1)&&r(b)}function r(b){e.value!==!0&&(e.value=!0,d("beforeShow",b),o!==void 0?o(b):d("show",b))}function v(b){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!1),c=b,ue(()=>{c===b&&(c=void 0)})),(s.modelValue===null||f===!1)&&q(b)}function q(b){e.value!==!1&&(e.value=!1,d("beforeHide",b),i!==void 0?i(b):d("hide",b))}function x(b){s.disable===!0&&b===!0?s["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):b===!0!==e.value&&(b===!0?r:q)(c)}M(()=>s.modelValue,x),n!==void 0&&Rt(l)===!0&&M(()=>u.$route.fullPath,()=>{n.value===!0&&e.value===!0&&v()}),a===!0&&oe(()=>{x(s.modelValue)});const C={show:h,hide:v,toggle:g};return Object.assign(u,C),C}let Z=[],ne=[];function at(e){ne=ne.filter(t=>t!==e)}function sn(e){at(e),ne.push(e)}function Ne(e){at(e),ne.length===0&&Z.length!==0&&(Z[Z.length-1](),Z=[])}function un(e){ne.length===0?e():Z.push(e)}let cn=1,dn=document.body;function fn(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${cn++}`:e,We.globalNodes!==void 0){const o=We.globalNodes.class;o!==void 0&&(n.className=o)}return dn.appendChild(n),n}function vn(e){e.remove()}const K=[];function mn(e){return K.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function rt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return se(e)}else if(e.__qPortal===!0){const n=se(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=se(e)}while(e!=null)}function hn(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=rt(e,t);continue}e.hide(t)}e=se(e)}}const gn=H({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function bn(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function wn(e,t,n,o){const i=E(!1),a=E(!1);let l=null;const s={},d=o==="dialog"&&bn(e);function u(g){if(g===!0){Ne(s),a.value=!0;return}a.value=!1,i.value===!1&&(d===!1&&l===null&&(l=fn(!1,o)),i.value=!0,K.push(e.proxy),sn(s))}function c(g){if(a.value=!1,g!==!0)return;Ne(s),i.value=!1;const h=K.indexOf(e.proxy);h!==-1&&K.splice(h,1),l!==null&&(vn(l),l=null)}return qt(()=>{c(!0)}),e.proxy.__qPortal=!0,xt(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:c,portalIsActive:i,portalIsAccessible:a,renderPortal:()=>d===!0?n():i.value===!0?[S(kt,{to:l},S(gn,n))]:void 0}}const st={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function yn(e,t=()=>{},n=()=>{}){return{transitionProps:y(()=>{const o=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function pn(){let e;const t=R();function n(){e=void 0}return nt(n),G(n),{removeTick:n,registerTick(o){e=o,ue(()=>{e===o&&(te(t)===!1&&e(),e=void 0)})}}}const F=[];let U;function Sn(e){U=e.keyCode===27}function Tn(){U===!0&&(U=!1)}function En(e){U===!0&&(U=!1,fe(e,27)===!0&&F[F.length-1](e))}function ut(e){window[e]("keydown",Sn),window[e]("blur",Tn),window[e]("keyup",En),U=!1}function qn(e){A.is.desktop===!0&&(F.push(e),F.length===1&&ut("addEventListener"))}function je(e){const t=F.indexOf(e);t!==-1&&(F.splice(t,1),F.length===0&&ut("removeEventListener"))}const Q=[];function ct(e){Q[Q.length-1](e)}function xn(e){A.is.desktop===!0&&(Q.push(e),Q.length===1&&document.body.addEventListener("focusin",ct))}function kn(e){const t=Q.indexOf(e);t!==-1&&(Q.splice(t,1),Q.length===0&&document.body.removeEventListener("focusin",ct))}const{notPassiveCapture:ce}=_,V=[];function de(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=K.length-1;for(;n>=0;){const o=K[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=V.length-1;o>=0;o--){const i=V[o];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Bn(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",de,ce),document.addEventListener("touchstart",de,ce))}function ze(e){const t=V.findIndex(n=>n===e);t!==-1&&(V.splice(t,1),V.length===0&&(document.removeEventListener("mousedown",de,ce),document.removeEventListener("touchstart",de,ce)))}let Fe,Qe;function Ve(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Cn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const xe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{xe[`${e}#ltr`]=e,xe[`${e}#rtl`]=e});function Oe(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:xe[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Mn(e,t){let{top:n,left:o,right:i,bottom:a,width:l,height:s}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],a+=t[1],i+=t[0],l+=t[0],s+=t[1]),{top:n,bottom:a,height:s,left:o,right:i,width:l,middle:o+(i-o)/2,center:n+(a-n)/2}}function Ln(e,t,n){let{top:o,left:i}=e.getBoundingClientRect();return o+=t.top,i+=t.left,n!==void 0&&(o+=n[1],i+=n[0]),{top:o,bottom:o+1,height:1,left:i,right:i+1,width:1,middle:i,center:o}}function $n(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Ke(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function dt(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{dt(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:i,anchorOrigin:a,selfOrigin:l,absoluteOffset:s,fit:d,cover:u,maxHeight:c,maxWidth:g}=e;if(A.is.ios===!0&&window.visualViewport!==void 0){const W=document.body.style,{offsetLeft:B,offsetTop:L}=window.visualViewport;B!==Fe&&(W.setProperty("--q-pe-left",B+"px"),Fe=B),L!==Qe&&(W.setProperty("--q-pe-top",L+"px"),Qe=L)}const{scrollLeft:h,scrollTop:r}=n,v=s===void 0?Mn(i,u===!0?[0,0]:o):Ln(i,s,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:c,visibility:"visible"});const{offsetWidth:q,offsetHeight:x}=n,{elWidth:C,elHeight:b}=d===!0||u===!0?{elWidth:Math.max(v.width,q),elHeight:u===!0?Math.max(v.height,x):x}:{elWidth:q,elHeight:x};let f={maxWidth:g,maxHeight:c};(d===!0||u===!0)&&(f.minWidth=v.width+"px",u===!0&&(f.minHeight=v.height+"px")),Object.assign(n.style,f);const m=$n(C,b);let T=Ke(v,m,a,l);if(s===void 0||o===void 0)ye(T,v,m,a,l);else{const{top:W,left:B}=T;ye(T,v,m,a,l);let L=!1;if(T.top!==W){L=!0;const P=2*o[1];v.center=v.top-=P,v.bottom-=P+2}if(T.left!==B){L=!0;const P=2*o[0];v.middle=v.left-=P,v.right-=P+2}L===!0&&(T=Ke(v,m,a,l),ye(T,v,m,a,l))}f={top:T.top+"px",left:T.left+"px"},T.maxHeight!==void 0&&(f.maxHeight=T.maxHeight+"px",v.height>T.maxHeight&&(f.minHeight=f.maxHeight)),T.maxWidth!==void 0&&(f.maxWidth=T.maxWidth+"px",v.width>T.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(n.style,f),n.scrollTop!==r&&(n.scrollTop=r),n.scrollLeft!==h&&(n.scrollLeft=h)}function ye(e,t,n,o,i){const a=n.bottom,l=n.right,s=Ot(),d=window.innerHeight-s,u=document.body.clientWidth;if(e.top<0||e.top+a>d)if(i.vertical==="center")e.top=t[o.vertical]>d/2?Math.max(0,d-a):0,e.maxHeight=Math.min(a,d);else if(t[o.vertical]>d/2){const c=Math.min(d,o.vertical==="center"?t.center:o.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(a,c),e.top=Math.max(0,c-a)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(a,d-e.top);if(e.left<0||e.left+l>u)if(e.maxWidth=Math.min(l,u),i.horizontal==="middle")e.left=t[o.horizontal]>u/2?Math.max(0,u-l):0;else if(t[o.horizontal]>u/2){const c=Math.min(u,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(l,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(l,u-e.left)}var Pn=H({name:"QMenu",inheritAttrs:!1,props:{...tn,...ln,...Ce,...st,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ve},self:{type:String,validator:Ve},offset:{type:Array,validator:Cn},scrollTarget:jt,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...an,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let i=null,a,l,s;const d=R(),{proxy:u}=d,{$q:c}=u,g=E(null),h=E(!1),r=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=Me(e,c),{registerTick:q,removeTick:x}=pn(),{registerTimeout:C}=qe(),{transitionProps:b,transitionStyle:f}=yn(e),{localScrollTarget:m,changeScrollEvent:T,unconfigureScrollTarget:W}=on(e,_e),{anchorEl:B,canShow:L}=nn({showing:h}),{hide:P}=rn({showing:h,canShow:L,handleShow:gt,handleHide:bt,hideOnRouteChange:r,processOnMount:!0}),{showPortal:X,hidePortal:ie,renderPortal:p}=wn(d,g,yt,"menu"),$={anchorEl:B,innerRef:g,onClickOutside(w){if(e.persistent!==!0&&h.value===!0)return P(w),(w.type==="touchstart"||w.target.classList.contains("q-dialog__backdrop"))&&Be(w),!0}},j=y(()=>Oe(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),vt=y(()=>e.cover===!0?j.value:Oe(e.self||"top start",c.lang.rtl)),mt=y(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),ht=y(()=>e.autoClose===!0?{onClick:wt}:{}),$e=y(()=>h.value===!0&&e.persistent!==!0);M($e,w=>{w===!0?(qn(he),Bn($)):(je(he),ze($))});function me(){un(()=>{let w=g.value;w&&w.contains(document.activeElement)!==!0&&(w=w.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||w.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||w.querySelector("[autofocus], [data-autofocus]")||w,w.focus({preventScroll:!0}))})}function gt(w){if(i=e.noRefocus===!1?document.activeElement:null,xn(He),X(),_e(),a=void 0,w!==void 0&&(e.touchPosition||e.contextMenu)){const ge=Bt(w);if(ge.left!==void 0){const{top:pt,left:St}=B.value.getBoundingClientRect();a={left:ge.left-St,top:ge.top-pt}}}l===void 0&&(l=M(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,Y)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{Y(),e.noFocus!==!0&&me()}),C(()=>{c.platform.is.ios===!0&&(s=e.autoClose,g.value.click()),Y(),X(!0),n("show",w)},e.transitionDuration)}function bt(w){x(),ie(),Pe(!0),i!==null&&(w===void 0||w.qClickOutside!==!0)&&(((w&&w.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),C(()=>{ie(!0),n("hide",w)},e.transitionDuration)}function Pe(w){a=void 0,l!==void 0&&(l(),l=void 0),(w===!0||h.value===!0)&&(kn(He),W(),ze($),je(he)),w!==!0&&(i=null)}function _e(){(B.value!==null||e.scrollTarget!==void 0)&&(m.value=Ft(B.value,e.scrollTarget),T(m.value,Y))}function wt(w){s!==!0?(rt(u,w),n("click",w)):s=!1}function He(w){$e.value===!0&&e.noFocus!==!0&&Wt(g.value,w.target)!==!0&&me()}function he(w){n("escapeKey"),P(w)}function Y(){dt({targetEl:g.value,offset:e.offset,anchorEl:B.value,anchorOrigin:j.value,selfOrigin:vt.value,absoluteOffset:a,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function yt(){return S(it,b.value,()=>h.value===!0?S("div",{role:"menu",...o,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+mt.value,o.class],style:[o.style,f.value],...ht.value},O(t.default)):null)}return G(Pe),Object.assign(u,{focus:me,updatePosition:Y}),p}});let pe,ae=0;const k=new Array(256);for(let e=0;e<256;e++)k[e]=(e+256).toString(16).substring(1);const _n=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),Ue=4096;function ke(){(pe===void 0||ae+16>Ue)&&(ae=0,pe=_n(Ue));const e=Array.prototype.slice.call(pe,ae,ae+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,k[e[0]]+k[e[1]]+k[e[2]]+k[e[3]]+"-"+k[e[4]]+k[e[5]]+"-"+k[e[6]]+k[e[7]]+"-"+k[e[8]]+k[e[9]]+"-"+k[e[10]]+k[e[11]]+k[e[12]]+k[e[13]]+k[e[14]]+k[e[15]]}function Hn(e){return e==null?null:e}function Ge(e,t){return e==null?t===!0?`f_${ke()}`:null:e}function An({getValue:e,required:t=!0}={}){if(ot.value===!0){const n=e!==void 0?E(Hn(e())):E(null);return t===!0&&n.value===null&&oe(()=>{n.value=`f_${ke()}`}),e!==void 0&&M(e,o=>{n.value=Ge(o,t)}),n}return e!==void 0?y(()=>Ge(e(),t)):E(`f_${ke()}`)}const Rn=Object.keys(lt);function Wn(e){return Rn.reduce((t,n)=>{const o=e[n];return o!==void 0&&(t[n]=o),t},{})}var so=H({name:"QBtnDropdown",props:{...lt,...st,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:o}=R(),i=E(e.modelValue),a=E(null),l=An(),s=y(()=>{const m={"aria-expanded":i.value===!0?"true":"false","aria-haspopup":"true","aria-controls":l.value,"aria-label":e.toggleAriaLabel||o.$q.lang.label[i.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(m["aria-disabled"]="true"),m}),d=y(()=>"q-btn-dropdown__arrow"+(i.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),u=y(()=>It(e)),c=y(()=>Wn(e));M(()=>e.modelValue,m=>{a.value!==null&&a.value[m?"show":"hide"]()}),M(()=>e.split,f);function g(m){i.value=!0,n("beforeShow",m)}function h(m){n("show",m),n("update:modelValue",!0)}function r(m){i.value=!1,n("beforeHide",m)}function v(m){n("hide",m),n("update:modelValue",!1)}function q(m){n("click",m)}function x(m){Ct(m),f(),n("click",m)}function C(m){a.value!==null&&a.value.toggle(m)}function b(m){a.value!==null&&a.value.show(m)}function f(m){a.value!==null&&a.value.hide(m)}return Object.assign(o,{show:b,hide:f,toggle:C}),oe(()=>{e.modelValue===!0&&b()}),()=>{const m=[S(Dt,{class:d.value,name:e.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&m.push(S(Pn,{ref:a,id:l.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:g,onShow:h,onBeforeHide:r,onHide:v},t.default)),e.split===!1?S(we,{class:"q-btn-dropdown q-btn-dropdown--simple",...c.value,...s.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:q},{default:()=>O(t.label,[]).concat(m),loading:t.loading}):S(Jt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...u.value,glossy:e.glossy,stretch:e.stretch},()=>[S(we,{class:"q-btn-dropdown--current",...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:x},{default:t.label,loading:t.loading}),S(we,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...s.value,...u.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>m)])}}});function Xe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var uo=Mt({name:"close-popup",beforeMount(e,{value:t}){const n={depth:Xe(t),handler(o){n.depth!==0&&setTimeout(()=>{const i=mn(e);i!==void 0&&hn(i,o,n.depth)})},handlerKey(o){fe(o,13)===!0&&n.handler(o)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=Xe(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const I="https://nfl-api-data.p.rapidapi.com",N={method:"GET",headers:{"x-rapidapi-key":"6568ee9edbmsh0644457251a6d43p19b1bbjsncf1c083cc72d","x-rapidapi-host":"nfl-api-data.p.rapidapi.com"}};async function co(){return(await fetch(`${I}/nfl-team-list`,N)).json()}async function fo(e){return(await fetch(`${I}/nfl-team-schedule?id=${e}`,N)).json()}async function vo(e){return(await fetch(`${I}/nfl-team-roster?id=${e}`,N)).json()}async function mo(e){return(await fetch(`${I}/nfl-ath-fullinfo?id=${e}`,N)).json()}async function ho(e){return(await fetch(`${I}/nfl-team-news?id=${e}`,N)).json()}async function go(e){return(await fetch(`${I}/nfl-single-news?id=${e}`,N)).json()}async function bo(e,t){return(await fetch(`${I}/nfl-team-statistics?year=${t}&id=${e}`,N)).json()}async function wo(e,t){return(await fetch(`${I}/nfl-team-record?id=${e}&year=${t}`,N)).json()}const Dn=/^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;function ve({r:e,g:t,b:n,a:o}){const i=o!==void 0;if(e=Math.round(e),t=Math.round(t),n=Math.round(n),e>255||t>255||n>255||i&&o>100)throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");return o=i?(Math.round(255*o/100)|1<<8).toString(16).slice(1):"","#"+(n|t<<8|e<<16|1<<24).toString(16).slice(1)+o}function ft(e){if(typeof e!="string")throw new TypeError("Expected a string");e=e.replace(/^#/,""),e.length===3?e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e.length===4&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=parseInt(e,16);return e.length>6?{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:Math.round((t&255)/2.55)}:{r:t>>16,g:t>>8&255,b:t&255}}function In({h:e,s:t,v:n,a:o}){let i,a,l;t=t/100,n=n/100,e=e/360;const s=Math.floor(e*6),d=e*6-s,u=n*(1-t),c=n*(1-d*t),g=n*(1-(1-d)*t);switch(s%6){case 0:i=n,a=g,l=u;break;case 1:i=c,a=n,l=u;break;case 2:i=u,a=n,l=g;break;case 3:i=u,a=c,l=n;break;case 4:i=g,a=u,l=n;break;case 5:i=n,a=u,l=c;break}return{r:Math.round(i*255),g:Math.round(a*255),b:Math.round(l*255),a:o}}function Nn({r:e,g:t,b:n,a:o}){const i=Math.max(e,t,n),a=Math.min(e,t,n),l=i-a,s=i===0?0:l/i,d=i/255;let u;switch(i){case a:u=0;break;case e:u=t-n+l*(t<n?6:0),u/=6*l;break;case t:u=n-e+l*2,u/=6*l;break;case n:u=e-t+l*4,u/=6*l;break}return{h:Math.round(u*360),s:Math.round(s*100),v:Math.round(d*100),a:o}}function D(e){if(typeof e!="string")throw new TypeError("Expected a string");const t=e.replace(/ /g,""),n=Dn.exec(t);if(n===null)return ft(t);const o={r:Math.min(255,parseInt(n[2],10)),g:Math.min(255,parseInt(n[3],10)),b:Math.min(255,parseInt(n[4],10))};if(n[1]){const i=parseFloat(n[5]);o.a=Math.min(1,isNaN(i)===!0?1:i)*100}return o}function jn(e,t){if(typeof e!="string")throw new TypeError("Expected a string as color");if(typeof t!="number")throw new TypeError("Expected a numeric percent");const n=D(e),o=t<0?0:255,i=Math.abs(t)/100,a=n.r,l=n.g,s=n.b;return"#"+(16777216+(Math.round((o-a)*i)+a)*65536+(Math.round((o-l)*i)+l)*256+(Math.round((o-s)*i)+s)).toString(16).slice(1)}function zn(e){if(typeof e!="string"&&(!e||e.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const t=typeof e=="string"?D(e):e,n=t.r/255,o=t.g/255,i=t.b/255,a=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),l=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),s=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*a+.7152*l+.0722*s}function Fn(e){if(typeof e!="string"&&(!e||e.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const t=typeof e=="string"?D(e):e;return(t.r*299+t.g*587+t.b*114)/1e3}function Qn(e,t){if(typeof e!="string"&&(!e||e.r===void 0))throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");const n=typeof e=="string"?D(e):e,o=n.r/255,i=n.g/255,a=n.b/255,l=n.a!==void 0?n.a/100:1,s=typeof t=="string"?D(t):t,d=s.r/255,u=s.g/255,c=s.b/255,g=s.a!==void 0?s.a/100:1,h=l+g*(1-l),r=Math.round((o*l+d*g*(1-l))/h*255),v=Math.round((i*l+u*g*(1-l))/h*255),q=Math.round((a*l+c*g*(1-l))/h*255),x={r,g:v,b:q,a:Math.round(h*100)};return typeof e=="string"?ve(x):x}function Vn(e,t){if(typeof e!="string")throw new TypeError("Expected a string as color");if(t===void 0||t<-1||t>1)throw new TypeError("Expected offset to be between -1 and 1");const{r:n,g:o,b:i,a}=D(e),l=a!==void 0?a/100:0;return ve({r:n,g:o,b:i,a:Math.round(Math.min(1,Math.max(0,l+t))*100)})}function On(e){if(typeof e!="string")throw new TypeError("Expected a string as color");const t=document.createElement("div");t.className=`text-${e} invisible fixed no-pointer-events`,document.body.appendChild(t);const n=getComputedStyle(t).getPropertyValue("color");return t.remove(),ve(D(n))}var Kn={rgbToHex:ve,hexToRgb:ft,hsvToRgb:In,rgbToHsv:Nn,textToRgb:D,lighten:jn,luminosity:zn,brightness:Fn,blend:Qn,changeAlpha:Vn,getPaletteColor:On};const yo=Lt("team",{state:()=>({selectedTeam:localStorage.getItem("sports4DorksSelectedTeam")?JSON.parse(localStorage.getItem("sports4DorksSelectedTeam")):null,selectedTeam:null}),actions:{setTeam(e){const{luminosity:t,lighten:n}=Kn;if(this.selectedTeam=e,localStorage.setItem("sports4DorksSelectedTeam",JSON.stringify(e)),be("primary",`#${e.color}`),t(`#${e.alternateColor}`)>.65){const o=(1.25-t(`#${e.alternateColor}`))*100;be("secondary",`${n(e.alternateColor,-o)}`)}else be("secondary",`#${e.alternateColor}`)}}});function po(e,t,n){let o;function i(){o!==void 0&&(De.remove(o),o=void 0)}return G(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){o={condition:()=>n.value===!0,handler:t},De.add(o)}}}let J=0,Se,Te,ee,Ee=!1,Ye,Je,Ze,z=null;function Un(e){Gn(e)&&Be(e)}function Gn(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=$t(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=n||o?e.deltaY:e.deltaX;for(let a=0;a<t.length;a++){const l=t[a];if(Kt(l,o))return o?i<0&&l.scrollTop===0?!0:i>0&&l.scrollTop+l.clientHeight===l.scrollHeight:i<0&&l.scrollLeft===0?!0:i>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function et(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){Ee!==!0&&(Ee=!0,requestAnimationFrame(()=>{Ee=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:o}=document.scrollingElement;(ee===void 0||t!==window.innerHeight)&&(ee=n-t,document.scrollingElement.scrollTop=o),o>ee&&(document.scrollingElement.scrollTop-=Math.ceil((o-ee)/8))}))}function tt(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:i}=window.getComputedStyle(t);Se=Vt(window),Te=Qt(window),Ye=t.style.left,Je=t.style.top,Ze=window.location.href,t.style.left=`-${Se}px`,t.style.top=`-${Te}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,A.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,_.passiveCapture),window.visualViewport.addEventListener("scroll",re,_.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",et,_.passiveCapture))}A.is.desktop===!0&&A.is.mac===!0&&window[`${e}EventListener`]("wheel",Un,_.notPassive),e==="remove"&&(A.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",re,_.passiveCapture),window.visualViewport.removeEventListener("scroll",re,_.passiveCapture)):window.removeEventListener("scroll",et,_.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ye,t.style.top=Je,window.location.href===Ze&&window.scrollTo(Se,Te),ee=void 0)}function Xn(e){let t="add";if(e===!0){if(J++,z!==null){clearTimeout(z),z=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(t="remove",A.is.ios===!0&&A.is.nativeMobile===!0){z!==null&&clearTimeout(z),z=setTimeout(()=>{tt(t),z=null},100);return}}tt(t)}function So(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Xn(t))}}}const Le={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Yn=Object.keys(Le);Le.all=!0;function To(e){const t={};for(const n of Yn)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?Le:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Jn=["INPUT","TEXTAREA"];function Eo(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Jn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}export{pn as A,yn as B,uo as C,wn as D,un as E,kn as F,je as G,xn as H,qn as I,mo as J,vo as K,go as L,ho as M,en as N,Ve as O,Cn as P,no as Q,on as R,nn as S,ze as T,dt as U,Oe as V,Bn as W,An as X,ke as Y,bo as Z,wo as _,Qt as a,Vt as b,Ot as c,co as d,so as e,ro as f,Ft as g,ao as h,io as i,oo as j,lo as k,To as l,Eo as m,Zt as n,ln as o,Ce as p,an as q,Me as r,jt as s,qe as t,yo as u,rn as v,po as w,So as x,fo as y,st as z};
