import{i as ye,j as Ee,k as oe,v as me,b as ee,u as Te,l as xe,h as Me,m as z}from"./QBtn.eb4b34f6.js";import{w as $,o as te,g as P,b as Q,V as he,a as U,f as w,W as ke,c as H,h as M,r as T,F as ve,s as qe,v as ie,t as le,z as $e,l as Y,X as ae,E as Se,Y as Ce,Z as Le,k as Pe,i as He,$ as Be,a0 as K}from"./index.f2729141.js";const mt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ht=["beforeShow","show","beforeHide","hide"];function vt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:i,processOnMount:a}){const l=P(),{props:s,emit:c,proxy:u}=l;let d;function v(h){e.value===!0?m(h):g(h)}function g(h){if(s.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(c("update:modelValue",!0),d=h,Q(()=>{d===h&&(d=void 0)})),(s.modelValue===null||f===!1)&&r(h)}function r(h){e.value!==!0&&(e.value=!0,c("beforeShow",h),o!==void 0?o(h):c("show",h))}function m(h){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(c("update:modelValue",!1),d=h,Q(()=>{d===h&&(d=void 0)})),(s.modelValue===null||f===!1)&&E(h)}function E(h){e.value!==!1&&(e.value=!1,c("beforeHide",h),i!==void 0?i(h):c("hide",h))}function y(h){s.disable===!0&&h===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):h===!0!==e.value&&(h===!0?r:E)(d)}$(()=>s.modelValue,y),n!==void 0&&ye(l)===!0&&$(()=>u.$route.fullPath,()=>{n.value===!0&&e.value===!0&&m()}),a===!0&&te(()=>{y(s.modelValue)});const C={show:g,hide:m,toggle:v};return Object.assign(u,C),C}const gt=[Element,String],We=[null,document,document.body,document.scrollingElement,document.documentElement];function pt(e,t){let n=Ee(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return We.includes(n)?window:n}function bt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function wt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let N;function Ae(){if(N!==void 0)return N;const e=document.createElement("p"),t=document.createElement("div");oe(e,{width:"100%",height:"200px"}),oe(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),N=n-o,N}function yt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function Et(){let e=null;const t=P();function n(){e!==null&&(clearTimeout(e),e=null)}return he(n),U(n),{removeTimeout:n,registerTimeout(o,i){n(),me(t)===!1&&(e=setTimeout(()=>{e=null,o()},i))}}}const ge={dark:{type:Boolean,default:null}};function pe(e,t){return w(()=>e.dark===null?t.dark.isActive:e.dark)}const ne={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_e=Object.keys(ne);ne.all=!0;function Tt(e){const t={};for(const n of _e)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?ne:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Re=["INPUT","TEXTAREA"];function xt(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Re.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function je(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ke.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var Mt=H({name:"QSpace",setup(){const e=M("div",{class:"q-space"});return()=>e}}),kt=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>M("div",{class:n.value},ee(t.default))}}),qt=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=w(()=>parseInt(e.lines,10)),o=w(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=w(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>M("div",{style:i.value,class:o.value},ee(t.default))}}),$t=H({name:"QItem",props:{...ge,...Te,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=P(),i=pe(e,o),{hasLink:a,linkAttrs:l,linkClass:s,linkTag:c,navigateOnClick:u}=xe(),d=T(null),v=T(null),g=w(()=>e.clickable===!0||a.value===!0||e.tag==="label"),r=w(()=>e.disable!==!0&&g.value===!0),m=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=w(()=>{if(e.insetLevel===void 0)return null;const f=o.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function y(f){r.value===!0&&(v.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),u(f))}function C(f){if(r.value===!0&&ve(f,[13,32])===!0){qe(f),f.qKeyEvent=!0;const x=new MouseEvent("click",f);x.qKeyEvent=!0,d.value.dispatchEvent(x)}n("keyup",f)}function h(){const f=Me(t.default,[]);return r.value===!0&&f.unshift(M("div",{class:"q-focus-helper",tabindex:-1,ref:v})),f}return()=>{const f={ref:d,class:m.value,style:E.value,role:"listitem",onClick:y,onKeyup:C};return r.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,l.value)):g.value===!0&&(f["aria-disabled"]="true"),M(c.value,f,h())}}});const Ie=["ul","ol"];var St=H({name:"QList",props:{...ge,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=P(),o=pe(e,n.proxy.$q),i=w(()=>Ie.includes(e.tag)?null:"list"),a=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>M(e.tag,{class:a.value,role:i.value},ee(t.default))}});const Ne={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Ct={...Ne,contextMenu:Boolean};function Lt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:i,emit:a}=P(),l=T(null);let s=null;function c(r){return l.value===null?!1:r===void 0||r.touches===void 0||r.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(r){i.hide(r)},toggle(r){i.toggle(r),r.qAnchorHandled=!0},toggleKey(r){ve(r,13)===!0&&u.toggle(r)},contextClick(r){i.hide(r),ie(r),Q(()=>{i.show(r),r.qAnchorHandled=!0})},prevent:ie,mobileTouch(r){if(u.mobileCleanup(r),c(r)!==!0)return;i.hide(r),l.value.classList.add("non-selectable");const m=r.target;le(u,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,i.show(r),r.qAnchorHandled=!0},300)},mobileCleanup(r){l.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&r!==void 0&&je()}}),n=function(r=o.contextMenu){if(o.noParentEvent===!0||l.value===null)return;let m;r===!0?i.$q.platform.is.mobile===!0?m=[[l.value,"touchstart","mobileTouch","passive"]]:m=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:m=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],le(u,"anchor",m)});function d(){$e(u,"anchor")}function v(r){for(l.value=r;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;n()}function g(){if(o.target===!1||o.target===""||i.$el.parentNode===null)l.value=null;else if(o.target===!0)v(i.$el.parentNode);else{let r=o.target;if(typeof o.target=="string")try{r=document.querySelector(o.target)}catch{r=void 0}r!=null?(l.value=r.$el||r,n()):(l.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return $(()=>o.contextMenu,r=>{l.value!==null&&(d(),n(r))}),$(()=>o.target,()=>{l.value!==null&&d(),g()}),$(()=>o.noParentEvent,r=>{l.value!==null&&(r===!0?d():n())}),te(()=>{g(),t!==!0&&o.modelValue===!0&&l.value===null&&a("update:modelValue",!1)}),U(()=>{s!==null&&clearTimeout(s),d()}),{anchorEl:l,canShow:c,anchorEvents:u}}function Pt(e,t){const n=T(null);let o;function i(s,c){const u=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:o;s!==window&&s[u]("scroll",d,Y.passive),window[u]("scroll",d,Y.passive),o=c}function a(){n.value!==null&&(i(n.value),n.value=null)}const l=$(()=>e.noParentEvent,()=>{n.value!==null&&(a(),t())});return U(l),{localScrollTarget:n,unconfigureScrollTarget:a,changeScrollEvent:i}}let A=[],_=[];function be(e){_=_.filter(t=>t!==e)}function Fe(e){be(e),_.push(e)}function re(e){be(e),_.length===0&&A.length!==0&&(A[A.length-1](),A=[])}function Ht(e){_.length===0?e():A.push(e)}let ze=1,Qe=document.body;function Ve(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${ze++}`:e,ae.globalNodes!==void 0){const o=ae.globalNodes.class;o!==void 0&&(n.className=o)}return Qe.appendChild(n),n}function De(e){e.remove()}const L=[];function Bt(e){return L.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Ue(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return z(e)}else if(e.__qPortal===!0){const n=z(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=z(e)}while(e!=null)}function Wt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Ue(e,t);continue}e.hide(t)}e=z(e)}}const Ge=H({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Ke(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function At(e,t,n,o){const i=T(!1),a=T(!1);let l=null;const s={},c=o==="dialog"&&Ke(e);function u(v){if(v===!0){re(s),a.value=!0;return}a.value=!1,i.value===!1&&(c===!1&&l===null&&(l=Ve(!1,o)),i.value=!0,L.push(e.proxy),Fe(s))}function d(v){if(a.value=!1,v!==!0)return;re(s),i.value=!1;const g=L.indexOf(e.proxy);g!==-1&&L.splice(g,1),l!==null&&(De(l),l=null)}return Se(()=>{d(!0)}),e.proxy.__qPortal=!0,Ce(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:d,portalIsActive:i,portalIsAccessible:a,renderPortal:()=>c===!0?n():i.value===!0?[M(Le,{to:l},M(Ge,n))]:void 0}}const _t={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Rt(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const o=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function jt(){let e;const t=P();function n(){e=void 0}return he(n),U(n),{removeTick:n,registerTick(o){e=o,Q(()=>{e===o&&(me(t)===!1&&e(),e=void 0)})}}}const{notPassiveCapture:V}=Y,S=[];function D(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=L.length-1;for(;n>=0;){const o=L[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=S.length-1;o>=0;o--){const i=S[o];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function It(e){S.push(e),S.length===1&&(document.addEventListener("mousedown",D,V),document.addEventListener("touchstart",D,V))}function Nt(e){const t=S.findIndex(n=>n===e);t!==-1&&(S.splice(t,1),S.length===0&&(document.removeEventListener("mousedown",D,V),document.removeEventListener("touchstart",D,V)))}let se,ue;function Ft(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function zt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Z[`${e}#ltr`]=e,Z[`${e}#rtl`]=e});function Qt(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:Z[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Oe(e,t){let{top:n,left:o,right:i,bottom:a,width:l,height:s}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],a+=t[1],i+=t[0],l+=t[0],s+=t[1]),{top:n,bottom:a,height:s,left:o,right:i,width:l,middle:o+(i-o)/2,center:n+(a-n)/2}}function Xe(e,t,n){let{top:o,left:i}=e.getBoundingClientRect();return o+=t.top,i+=t.left,n!==void 0&&(o+=n[1],i+=n[0]),{top:o,bottom:o+1,height:1,left:i,right:i+1,width:1,middle:i,center:o}}function Ye(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ce(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Ze(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ze(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:i,anchorOrigin:a,selfOrigin:l,absoluteOffset:s,fit:c,cover:u,maxHeight:d,maxWidth:v}=e;if(Pe.is.ios===!0&&window.visualViewport!==void 0){const I=document.body.style,{offsetLeft:B,offsetTop:q}=window.visualViewport;B!==se&&(I.setProperty("--q-pe-left",B+"px"),se=B),q!==ue&&(I.setProperty("--q-pe-top",q+"px"),ue=q)}const{scrollLeft:g,scrollTop:r}=n,m=s===void 0?Oe(i,u===!0?[0,0]:o):Xe(i,s,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:v,maxHeight:d,visibility:"visible"});const{offsetWidth:E,offsetHeight:y}=n,{elWidth:C,elHeight:h}=c===!0||u===!0?{elWidth:Math.max(m.width,E),elHeight:u===!0?Math.max(m.height,y):y}:{elWidth:E,elHeight:y};let f={maxWidth:v,maxHeight:d};(c===!0||u===!0)&&(f.minWidth=m.width+"px",u===!0&&(f.minHeight=m.height+"px")),Object.assign(n.style,f);const x=Ye(C,h);let b=ce(m,x,a,l);if(s===void 0||o===void 0)O(b,m,x,a,l);else{const{top:I,left:B}=b;O(b,m,x,a,l);let q=!1;if(b.top!==I){q=!0;const W=2*o[1];m.center=m.top-=W,m.bottom-=W+2}if(b.left!==B){q=!0;const W=2*o[0];m.middle=m.left-=W,m.right-=W+2}q===!0&&(b=ce(m,x,a,l),O(b,m,x,a,l))}f={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(f.maxHeight=b.maxHeight+"px",m.height>b.maxHeight&&(f.minHeight=f.maxHeight)),b.maxWidth!==void 0&&(f.maxWidth=b.maxWidth+"px",m.width>b.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(n.style,f),n.scrollTop!==r&&(n.scrollTop=r),n.scrollLeft!==g&&(n.scrollLeft=g)}function O(e,t,n,o,i){const a=n.bottom,l=n.right,s=Ae(),c=window.innerHeight-s,u=document.body.clientWidth;if(e.top<0||e.top+a>c)if(i.vertical==="center")e.top=t[o.vertical]>c/2?Math.max(0,c-a):0,e.maxHeight=Math.min(a,c);else if(t[o.vertical]>c/2){const d=Math.min(c,o.vertical==="center"?t.center:o.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(a,d),e.top=Math.max(0,d-a)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(a,c-e.top);if(e.left<0||e.left+l>u)if(e.maxWidth=Math.min(l,u),i.horizontal==="middle")e.left=t[o.horizontal]>u/2?Math.max(0,u-l):0;else if(t[o.horizontal]>u/2){const d=Math.min(u,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(l,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(l,u-e.left)}let X,F=0;const p=new Array(256);for(let e=0;e<256;e++)p[e]=(e+256).toString(16).substring(1);const Je=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),de=4096;function J(){(X===void 0||F+16>de)&&(F=0,X=Je(de));const e=Array.prototype.slice.call(X,F,F+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,p[e[0]]+p[e[1]]+p[e[2]]+p[e[3]]+"-"+p[e[4]]+p[e[5]]+"-"+p[e[6]]+p[e[7]]+"-"+p[e[8]]+p[e[9]]+"-"+p[e[10]]+p[e[11]]+p[e[12]]+p[e[13]]+p[e[14]]+p[e[15]]}function et(e){return e==null?null:e}function fe(e,t){return e==null?t===!0?`f_${J()}`:null:e}function Vt({getValue:e,required:t=!0}={}){if(He.value===!0){const n=e!==void 0?T(et(e())):T(null);return t===!0&&n.value===null&&te(()=>{n.value=`f_${J()}`}),e!==void 0&&$(e,o=>{n.value=fe(o,t)}),n}return e!==void 0?w(()=>fe(e(),t)):T(`f_${J()}`)}const R="https://nfl-api-data.p.rapidapi.com",j={method:"GET",headers:{"x-rapidapi-key":"6568ee9edbmsh0644457251a6d43p19b1bbjsncf1c083cc72d","x-rapidapi-host":"nfl-api-data.p.rapidapi.com"}};async function Dt(){return fetch(`${R}/nfl-team-list`,j).then(e=>e.json()).then(e=>e)}async function Ut(e){return fetch(`${R}/nfl-team-schedule?id=${e}`,j).then(t=>t.json()).then(t=>t)}async function Gt(e){return fetch(`${R}/nfl-team-roster?id=${e}`,j).then(t=>t.json()).then(t=>t)}async function Kt(e){return fetch(`${R}/nfl-team-news?id=${e}`,j).then(t=>t.json()).then(t=>t)}async function Ot(e){return fetch(`${R}/nfl-team-statistics?year=${new Date().getFullYear()}&id=${e}`,j).then(t=>t.json()).then(t=>t)}const tt=/^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;function G({r:e,g:t,b:n,a:o}){const i=o!==void 0;if(e=Math.round(e),t=Math.round(t),n=Math.round(n),e>255||t>255||n>255||i&&o>100)throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");return o=i?(Math.round(255*o/100)|1<<8).toString(16).slice(1):"","#"+(n|t<<8|e<<16|1<<24).toString(16).slice(1)+o}function we(e){if(typeof e!="string")throw new TypeError("Expected a string");e=e.replace(/^#/,""),e.length===3?e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e.length===4&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=parseInt(e,16);return e.length>6?{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:Math.round((t&255)/2.55)}:{r:t>>16,g:t>>8&255,b:t&255}}function nt({h:e,s:t,v:n,a:o}){let i,a,l;t=t/100,n=n/100,e=e/360;const s=Math.floor(e*6),c=e*6-s,u=n*(1-t),d=n*(1-c*t),v=n*(1-(1-c)*t);switch(s%6){case 0:i=n,a=v,l=u;break;case 1:i=d,a=n,l=u;break;case 2:i=u,a=n,l=v;break;case 3:i=u,a=d,l=n;break;case 4:i=v,a=u,l=n;break;case 5:i=n,a=u,l=d;break}return{r:Math.round(i*255),g:Math.round(a*255),b:Math.round(l*255),a:o}}function ot({r:e,g:t,b:n,a:o}){const i=Math.max(e,t,n),a=Math.min(e,t,n),l=i-a,s=i===0?0:l/i,c=i/255;let u;switch(i){case a:u=0;break;case e:u=t-n+l*(t<n?6:0),u/=6*l;break;case t:u=n-e+l*2,u/=6*l;break;case n:u=e-t+l*4,u/=6*l;break}return{h:Math.round(u*360),s:Math.round(s*100),v:Math.round(c*100),a:o}}function k(e){if(typeof e!="string")throw new TypeError("Expected a string");const t=e.replace(/ /g,""),n=tt.exec(t);if(n===null)return we(t);const o={r:Math.min(255,parseInt(n[2],10)),g:Math.min(255,parseInt(n[3],10)),b:Math.min(255,parseInt(n[4],10))};if(n[1]){const i=parseFloat(n[5]);o.a=Math.min(1,isNaN(i)===!0?1:i)*100}return o}function it(e,t){if(typeof e!="string")throw new TypeError("Expected a string as color");if(typeof t!="number")throw new TypeError("Expected a numeric percent");const n=k(e),o=t<0?0:255,i=Math.abs(t)/100,a=n.r,l=n.g,s=n.b;return"#"+(16777216+(Math.round((o-a)*i)+a)*65536+(Math.round((o-l)*i)+l)*256+(Math.round((o-s)*i)+s)).toString(16).slice(1)}function lt(e){if(typeof e!="string"&&(!e||e.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const t=typeof e=="string"?k(e):e,n=t.r/255,o=t.g/255,i=t.b/255,a=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),l=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),s=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*a+.7152*l+.0722*s}function at(e){if(typeof e!="string"&&(!e||e.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const t=typeof e=="string"?k(e):e;return(t.r*299+t.g*587+t.b*114)/1e3}function rt(e,t){if(typeof e!="string"&&(!e||e.r===void 0))throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");const n=typeof e=="string"?k(e):e,o=n.r/255,i=n.g/255,a=n.b/255,l=n.a!==void 0?n.a/100:1,s=typeof t=="string"?k(t):t,c=s.r/255,u=s.g/255,d=s.b/255,v=s.a!==void 0?s.a/100:1,g=l+v*(1-l),r=Math.round((o*l+c*v*(1-l))/g*255),m=Math.round((i*l+u*v*(1-l))/g*255),E=Math.round((a*l+d*v*(1-l))/g*255),y={r,g:m,b:E,a:Math.round(g*100)};return typeof e=="string"?G(y):y}function st(e,t){if(typeof e!="string")throw new TypeError("Expected a string as color");if(t===void 0||t<-1||t>1)throw new TypeError("Expected offset to be between -1 and 1");const{r:n,g:o,b:i,a}=k(e),l=a!==void 0?a/100:0;return G({r:n,g:o,b:i,a:Math.round(Math.min(1,Math.max(0,l+t))*100)})}function ut(e){if(typeof e!="string")throw new TypeError("Expected a string as color");const t=document.createElement("div");t.className=`text-${e} invisible fixed no-pointer-events`,document.body.appendChild(t);const n=getComputedStyle(t).getPropertyValue("color");return t.remove(),G(k(n))}var ct={rgbToHex:G,hexToRgb:we,hsvToRgb:nt,rgbToHsv:ot,textToRgb:k,lighten:it,luminosity:lt,brightness:at,blend:rt,changeAlpha:st,getPaletteColor:ut};const Xt=Be("team",{state:()=>({selectedTeam:null}),actions:{setTeam(e){const{luminosity:t,lighten:n}=ct;if(this.selectedTeam=e,K("primary",`#${e.color}`),t(`#${e.alternateColor}`)>.65){const o=(1.25-t(`#${e.alternateColor}`))*100;K("secondary",`${n(e.alternateColor,-o)}`)}else K("secondary",`#${e.alternateColor}`)}}});export{Qt as A,It as B,Ht as C,Ue as D,Vt as E,Bt as F,Wt as G,Xt as H,Dt as I,St as J,$t as K,kt as L,qt as M,Ut as N,Gt as O,Kt as P,Mt as Q,Ne as R,J as S,Ot as T,bt as a,Tt as b,je as c,ge as d,ht as e,pe as f,wt as g,yt as h,Et as i,vt as j,gt as k,pt as l,Ae as m,Ct as n,_t as o,zt as p,jt as q,Rt as r,xt as s,Pt as t,mt as u,Ft as v,Lt as w,At as x,Nt as y,Ze as z};
