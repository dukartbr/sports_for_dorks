import{r as x,i as je,o as G,c as D,a as N,n as ke,b as re,h as S,g as X,l as O,d as ze,e as M,f,w as T,j as ae,H as Pe,k as P,s as Ue,m as pt,p as gt,q as yt,t as ee,u as he,v as Oe,x as pe,y as qe,z as ge,A as Ke,B as Ge,C as bt,D as te,E as wt,_ as Tt,F as le,G as xe,I as B,J as z,K as He,L as Ct,M as St,N as qt,O as Je,P as xt,Q as Lt,R as kt}from"./index.47f24108.js";import{h as zt,a as Me,b as ie,c as _t,Q as Et}from"./QBtn.2af2ef4d.js";import{g as Ze,a as et,h as $t,b as Qe,s as Ve,c as Bt,u as Pt,d as Ot,e as Ht,f as Mt,i as Qt,j as Vt,k as Dt,l as Rt,m as ye,n as Ft,o as Wt,Q as At,p as It,q as Nt,r as Xt,t as De,v as Yt,w as jt,C as Ut}from"./team.066fd987.js";function Kt(){const e=x(!je.value);return e.value===!1&&G(()=>{e.value=!0}),{isHydrated:e}}const tt=typeof ResizeObserver!="undefined",Re=tt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Le=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,r,t={width:-1,height:-1};function o(c){c===!0||e.debounce===0||e.debounce==="0"?i():l===null&&(l=setTimeout(i,e.debounce))}function i(){if(l!==null&&(clearTimeout(l),l=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==t.width||u!==t.height)&&(t={width:c,height:u},n("resize",t))}}const{proxy:m}=X();if(m.trigger=o,tt===!0){let c;const u=s=>{r=m.$el.parentNode,r?(c=new ResizeObserver(o),c.observe(r),i()):s!==!0&&re(()=>{u(!0)})};return G(()=>{u()}),N(()=>{l!==null&&clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),ke}else{let s=function(){l!==null&&(clearTimeout(l),l=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",o,O.passive),u=void 0)},w=function(){s(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",o,O.passive),i())};const{isHydrated:c}=Kt();let u;return G(()=>{re(()=>{r=m.$el,r&&w()})}),N(s),()=>{if(c.value===!0)return S("object",{class:"q--avoid-card-border",style:Re.style,tabindex:-1,type:"text/html",data:Re.url,"aria-hidden":"true",onLoad:w})}}}}),Gt=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=X(),t=ze(ae,M);if(t===M)return console.error("QHeader needs to be child of QLayout"),M;const o=x(parseInt(e.heightHint,10)),i=x(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||r.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return i.value===!0?o.value:0;const d=o.value-t.scroll.value.position;return d>0?d:0}),u=f(()=>e.modelValue!==!0||m.value===!0&&i.value!==!0),s=f(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=f(()=>{const d=t.rows.value.top,L={};return d[0]==="l"&&t.left.space===!0&&(L[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(L[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function v(d,L){t.update("header",d,L)}function h(d,L){d.value!==L&&(d.value=L)}function E({height:d}){h(o,d),v("size",d)}function q(d){s.value===!0&&h(i,!0),l("focusin",d)}T(()=>e.modelValue,d=>{v("space",d),h(i,!0),t.animate()}),T(c,d=>{v("offset",d)}),T(()=>e.reveal,d=>{d===!1&&h(i,e.modelValue)}),T(i,d=>{t.animate(),l("reveal",d)}),T(t.scroll,d=>{e.reveal===!0&&h(i,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&v("size",o.value),v("space",e.modelValue),v("offset",c.value),N(()=>{t.instances.header===y&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const d=zt(n.default,[]);return e.elevated===!0&&d.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(S(Le,{debounce:0,onResize:E})),S("header",{class:w.value,style:b.value,onFocusin:q},d)}}});function Jt(e,n,l){let r;function t(){r!==void 0&&(Pe.remove(r),r=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>l.value===!0,handler:n},Pe.add(r)}}}let U=0,be,we,K,Te=!1,Fe,We,Ae,W=null;function Zt(e){eo(e)&&Ue(e)}function eo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=pt(e),l=e.shiftKey&&!e.deltaX,r=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||r?e.deltaY:e.deltaX;for(let o=0;o<n.length;o++){const i=n[o];if($t(i,r))return r?t<0&&i.scrollTop===0?!0:t>0&&i.scrollTop+i.clientHeight===i.scrollHeight:t<0&&i.scrollLeft===0?!0:t>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Ie(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function oe(e){Te!==!0&&(Te=!0,requestAnimationFrame(()=>{Te=!1;const{height:n}=e.target,{clientHeight:l,scrollTop:r}=document.scrollingElement;(K===void 0||n!==window.innerHeight)&&(K=l-n,document.scrollingElement.scrollTop=r),r>K&&(document.scrollingElement.scrollTop-=Math.ceil((r-K)/8))}))}function Ne(e){const n=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(n);be=Ze(window),we=et(window),Fe=n.style.left,We=n.style.top,Ae=window.location.href,n.style.left=`-${be}px`,n.style.top=`-${we}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,P.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",oe,O.passiveCapture),window.visualViewport.addEventListener("scroll",oe,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ie,O.passiveCapture))}P.is.desktop===!0&&P.is.mac===!0&&window[`${e}EventListener`]("wheel",Zt,O.notPassive),e==="remove"&&(P.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",oe,O.passiveCapture),window.visualViewport.removeEventListener("scroll",oe,O.passiveCapture)):window.removeEventListener("scroll",Ie,O.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Fe,n.style.top=We,window.location.href===Ae&&window.scrollTo(be,we),K=void 0)}function to(e){let n="add";if(e===!0){if(U++,W!==null){clearTimeout(W),W=null;return}if(U>1)return}else{if(U===0||(U--,U>0))return;if(n="remove",P.is.ios===!0&&P.is.nativeMobile===!0){W!==null&&clearTimeout(W),W=setTimeout(()=>{Ne(n),W=null},100);return}}Ne(n)}function oo(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,to(n))}}}function Ce(e,n,l){const r=qe(e);let t,o=r.left-n.event.x,i=r.top-n.event.y,m=Math.abs(o),c=Math.abs(i);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?t=o<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=i<0?"up":"down":u.up===!0&&i<0?(t="up",m>c&&(u.left===!0&&o<0?t="left":u.right===!0&&o>0&&(t="right"))):u.down===!0&&i>0?(t="down",m>c&&(u.left===!0&&o<0?t="left":u.right===!0&&o>0&&(t="right"))):u.left===!0&&o<0?(t="left",m<c&&(u.up===!0&&i<0?t="up":u.down===!0&&i>0&&(t="down"))):u.right===!0&&o>0&&(t="right",m<c&&(u.up===!0&&i<0?t="up":u.down===!0&&i>0&&(t="down")));let s=!1;if(t===void 0&&l===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,s=!0,t==="left"||t==="right"?(r.left-=o,m=0,o=0):(r.top-=i,c=0,i=0)}return{synthetic:s,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:r,direction:t,isFirst:n.event.isFirst,isFinal:l===!0,duration:Date.now()-n.event.time,distance:{x:m,y:c},offset:{x:o,y:i},delta:{x:r.left-n.event.lastX,y:r.top-n.event.lastY}}}}let no=0;var Se=gt({name:"touch-pan",beforeMount(e,{value:n,modifiers:l}){if(l.mouse!==!0&&P.has.touch!==!0)return;function r(o,i){l.mouse===!0&&i===!0?Ue(o):(l.stop===!0&&pe(o),l.prevent===!0&&Oe(o))}const t={uid:"qvtp_"+no++,handler:n,modifiers:l,direction:Qe(l),noop:ke,mouseStart(o){Ve(o,t)&&yt(o)&&(ee(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ve(o,t)){const i=o.target;ee(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,i){if(P.is.firefox===!0&&he(e,!0),t.lastEvt=o,i===!0||l.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=o.type.indexOf("mouse")!==-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Oe(u),o.cancelBubble===!0&&pe(u),Object.assign(u,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:u}}pe(o)}const{left:m,top:c}=qe(o);t.event={x:m,y:c,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(o){if(t.event===void 0)return;const i=qe(o),m=i.left-t.event.x,c=i.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=o;const u=t.event.mouse===!0,s=()=>{r(o,u);let v;l.preserveCursor!==!0&&l.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Bt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),u===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{E(),h()},50):E()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(o,t.event.mouse);const{payload:v,synthetic:h}=Ce(o,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&s(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){s(),t.event.detected=!0,t.move(o);return}const w=Math.abs(m),b=Math.abs(c);w!==b&&(t.direction.horizontal===!0&&w>b||t.direction.vertical===!0&&w<b||t.direction.up===!0&&w<b&&c<0||t.direction.down===!0&&w<b&&c>0||t.direction.left===!0&&w>b&&m<0||t.direction.right===!0&&w>b&&m>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,i){if(t.event!==void 0){if(ge(t,"temp"),P.is.firefox===!0&&he(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(o===void 0?t.lastEvt:o,t).payload);const{payload:m}=Ce(o===void 0?t.lastEvt:o,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const o=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";ee(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}P.has.touch===!0&&ee(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchpan;l!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&l.end(),l.handler=n.value),l.direction=Qe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ge(n,"main"),ge(n,"temp"),P.is.firefox===!0&&he(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function ne(e,n,l){return l<=n?n:Math.min(l,Math.max(n,e))}const Xe=150;var lo=D({name:"QDrawer",inheritAttrs:!1,props:{...Pt,...Ot,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ht,"onLayout","miniState"],setup(e,{slots:n,emit:l,attrs:r}){const t=X(),{proxy:{$q:o}}=t,i=Mt(e,o),{preventBodyScroll:m}=oo(),{registerTimeout:c,removeTimeout:u}=Qt(),s=ze(ae,M);if(s===M)return console.error("QDrawer needs to be child of QLayout"),M;let w,b=null,v;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&s.totalWidth.value<=e.breakpoint),E=f(()=>e.mini===!0&&h.value!==!0),q=f(()=>E.value===!0?e.miniWidth:e.width),y=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=f(()=>e.persistent!==!0&&(h.value===!0||ot.value===!0));function L(a,p){if(R(),a!==!1&&s.animate(),$(0),h.value===!0){const k=s.instances[J.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),Q(1),s.isContainer.value!==!0&&m(!0)}else Q(0),a!==!1&&fe(!1);c(()=>{a!==!1&&fe(!0),p!==!0&&l("show",a)},Xe)}function g(a,p){Y(),a!==!1&&s.animate(),Q(0),$(A.value*q.value),ve(),p!==!0?c(()=>{l("hide",a)},Xe):u()}const{show:C,hide:_}=Vt({showing:y,hideOnRouteChange:d,handleShow:L,handleHide:g}),{addToHistory:R,removeFromHistory:Y}=Jt(y,_,d),F={belowBreakpoint:h,hide:_},H=f(()=>e.side==="right"),A=f(()=>(o.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),_e=x(0),I=x(!1),se=x(!1),Ee=x(q.value*A.value),J=f(()=>H.value===!0?"left":"right"),ue=f(()=>y.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),ce=f(()=>e.overlay===!0||e.miniToOverlay===!0||s.view.value.indexOf(H.value?"R":"L")!==-1||o.platform.is.ios===!0&&s.isContainer.value===!0),j=f(()=>e.overlay===!1&&y.value===!0&&h.value===!1),ot=f(()=>e.overlay===!0&&y.value===!0&&h.value===!1),nt=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&I.value===!1?" hidden":"")),lt=f(()=>({backgroundColor:`rgba(0,0,0,${_e.value*.4})`})),$e=f(()=>H.value===!0?s.rows.value.top[2]==="r":s.rows.value.top[0]==="l"),rt=f(()=>H.value===!0?s.rows.value.bottom[2]==="r":s.rows.value.bottom[0]==="l"),at=f(()=>{const a={};return s.header.space===!0&&$e.value===!1&&(ce.value===!0?a.top=`${s.header.offset}px`:s.header.space===!0&&(a.top=`${s.header.size}px`)),s.footer.space===!0&&rt.value===!1&&(ce.value===!0?a.bottom=`${s.footer.offset}px`:s.footer.space===!0&&(a.bottom=`${s.footer.size}px`)),a}),it=f(()=>{const a={width:`${q.value}px`,transform:`translateX(${Ee.value}px)`};return h.value===!0?a:Object.assign(a,at.value)}),st=f(()=>"q-drawer__content fit "+(s.isContainer.value!==!0?"scroll":"overflow-auto")),ut=f(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(ce.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+($e.value===!0?" q-drawer--top-padding":""))),ct=f(()=>{const a=o.lang.rtl===!0?e.side:J.value;return[[Se,mt,void 0,{[a]:!0,mouse:!0}]]}),dt=f(()=>{const a=o.lang.rtl===!0?J.value:e.side;return[[Se,Be,void 0,{[a]:!0,mouse:!0}]]}),ft=f(()=>{const a=o.lang.rtl===!0?J.value:e.side;return[[Se,Be,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){ht(h,e.behavior==="mobile"||e.behavior!=="desktop"&&s.totalWidth.value<=e.breakpoint)}T(h,a=>{a===!0?(w=y.value,y.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?($(0),Q(0),ve()):C(!1))}),T(()=>e.side,(a,p)=>{s.instances[p]===F&&(s.instances[p]=void 0,s[p].space=!1,s[p].offset=0),s.instances[a]=F,s[a].size=q.value,s[a].space=j.value,s[a].offset=ue.value}),T(s.totalWidth,()=>{(s.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),T(()=>e.behavior+e.breakpoint,de),T(s.isContainer,a=>{y.value===!0&&m(a!==!0),a===!0&&de()}),T(s.scrollbarWidth,()=>{$(y.value===!0?0:void 0)}),T(ue,a=>{V("offset",a)}),T(j,a=>{l("onLayout",a),V("space",a)}),T(H,()=>{$()}),T(q,a=>{$(),me(e.miniToOverlay,a)}),T(()=>e.miniToOverlay,a=>{me(a,q.value)}),T(()=>o.lang.rtl,()=>{$()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(vt(),s.animate())}),T(E,a=>{l("miniState",a)});function $(a){a===void 0?re(()=>{a=y.value===!0?0:q.value,$(A.value*a)}):(s.isContainer.value===!0&&H.value===!0&&(h.value===!0||Math.abs(a)===q.value)&&(a+=A.value*s.scrollbarWidth.value),Ee.value=a)}function Q(a){_e.value=a}function fe(a){const p=a===!0?"remove":s.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function vt(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,b=setTimeout(()=>{b=null,se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(a){if(y.value!==!1)return;const p=q.value,k=ne(a.distance.x,0,p);if(a.isFinal===!0){k>=Math.min(75,p)===!0?C():(s.animate(),Q(0),$(A.value*p)),I.value=!1;return}$((o.lang.rtl===!0?H.value!==!0:H.value)?Math.max(p-k,0):Math.min(0,k-p)),Q(ne(k/p,0,1)),a.isFirst===!0&&(I.value=!0)}function Be(a){if(y.value!==!0)return;const p=q.value,k=a.direction===e.side,Z=(o.lang.rtl===!0?k!==!0:k)?ne(a.distance.x,0,p):0;if(a.isFinal===!0){Math.abs(Z)<Math.min(75,p)===!0?(s.animate(),Q(1),$(0)):_(),I.value=!1;return}$(A.value*Z),Q(ne(1-Z/p,0,1)),a.isFirst===!0&&(I.value=!0)}function ve(){m(!1),fe(!0)}function V(a,p){s.update(e.side,a,p)}function ht(a,p){a.value!==p&&(a.value=p)}function me(a,p){V("size",a===!0?e.miniWidth:p)}return s.instances[e.side]=F,me(e.miniToOverlay,q.value),V("space",j.value),V("offset",ue.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),G(()=>{l("onLayout",j.value),l("miniState",E.value),w=e.showIfAbove===!0;const a=()=>{(y.value===!0?L:g)(!1,!0)};if(s.totalWidth.value!==0){re(a);return}v=T(s.totalWidth,()=>{v(),v=void 0,y.value===!1&&e.showIfAbove===!0&&h.value===!1?C(!1):a()})}),N(()=>{v!==void 0&&v(),b!==null&&(clearTimeout(b),b=null),y.value===!0&&ve(),s.instances[e.side]===F&&(s.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(Ke(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ct.value)),a.push(Me("div",{ref:"backdrop",class:nt.value,style:lt.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>ft.value)));const p=E.value===!0&&n.mini!==void 0,k=[S("div",{...r,key:""+p,class:[st.value,r.class]},p===!0?n.mini():ie(n.default))];return e.elevated===!0&&y.value===!0&&k.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Me("aside",{ref:"content",class:ut.value,style:it.value},k,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>dt.value)),S("div",{class:"q-drawer-container"},a)}}}),ro=D({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:l}}=X(),r=ze(ae,M);if(r===M)return console.error("QPageContainer needs to be child of QLayout"),M;Ge(bt,!0);const t=f(()=>{const o={};return r.header.space===!0&&(o.paddingTop=`${r.header.size}px`),r.right.space===!0&&(o[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(o.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(o[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),o});return()=>S("div",{class:"q-page-container",style:t.value},ie(n.default))}});const{passive:Ye}=O,ao=["both","horizontal","vertical"];var io=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ao.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Dt},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,o;T(()=>e.scrollTarget,()=>{c(),m()});function i(){r!==null&&r();const w=Math.max(0,et(t)),b=Ze(t),v={top:w-l.position.top,left:b-l.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";l.position={top:w,left:b},l.directionChanged=l.direction!==h,l.delta=v,l.directionChanged===!0&&(l.direction=h,l.inflectionPoint=l.position),n("scroll",{...l})}function m(){t=Rt(o,e.scrollTarget),t.addEventListener("scroll",u,Ye),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Ye),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")i();else if(r===null){const[b,v]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];r=()=>{v(b),r=null}}}const{proxy:s}=X();return T(()=>s.$q.lang.rtl,i),G(()=>{o=s.$el.parentNode,m()}),N(()=>{r!==null&&r(),c()}),Object.assign(s,{trigger:u,getPosition:()=>l}),ke}}),so=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=X(),t=x(null),o=x(r.screen.height),i=x(e.container===!0?0:r.screen.width),m=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),u=x(je.value===!0?0:ye()),s=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),b=f(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),v=f(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};m.value=C,e.onScroll!==void 0&&l("scroll",C)}}function E(g){const{height:C,width:_}=g;let R=!1;o.value!==C&&(R=!0,o.value=C,e.onScrollHeight!==void 0&&l("scrollHeight",C),y()),i.value!==_&&(R=!0,i.value=_),R===!0&&e.onResize!==void 0&&l("resize",g)}function q({height:g}){c.value!==g&&(c.value=g,y())}function y(){if(e.container===!0){const g=o.value>c.value?ye():0;u.value!==g&&(u.value=g)}}let d=null;const L={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:o,containerHeight:c,scrollbarWidth:u,totalWidth:f(()=>i.value+u.value),rows:f(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:m,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,C,_){L[g][C]=_}};if(Ge(ae,L),ye()>0){let _=function(){g=null,C.classList.remove("hide-scrollbar")},R=function(){if(g===null){if(C.scrollHeight>r.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(_,300)},Y=function(F){g!==null&&F==="remove"&&(clearTimeout(g),_()),window[`${F}EventListener`]("resize",R)},g=null;const C=document.body;T(()=>e.container!==!0?"add":"remove",Y),e.container!==!0&&Y("add"),wt(()=>{Y("remove")})}return()=>{const g=_t(n.default,[S(io,{onScroll:h}),S(Le,{onResize:E})]),C=S("div",{class:s.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Le,{onResize:q}),S("div",{class:"absolute-full",style:b.value},[S("div",{class:"scroll",style:v.value},[C])])]):C}}}),uo=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const l=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:l.value},ie(n.default))}}),co=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const l=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:l.value,role:"toolbar"},ie(n.default))}});const fo={setup(){const e=Ft(),n=f(()=>e.selectedTeam);return{setTeam:function(r){e.setTeam({...r})},selectedTeam:n}},props:["toggleRouterSidebar"],data(){return{teams:[]}},created(){Wt().then(({teams:e})=>this.teams={...e})},computed:{label(){return this.selectedTeam?this.selectedTeam.name:"Select a Team"}}},vo={class:"row"};function mo(e,n,l,r,t,o){return le(),xe(co,{class:"row items-center q-py-sm q-px-lg",style:{width:"100%"}},{default:B(()=>[z(Et,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l.toggleRouterSidebar},null,8,["onClick"]),z(uo,null,{default:B(()=>n[0]||(n[0]=[He("Sports4Dorks")])),_:1}),z(At),z(It,{color:"secondary",unelevated:"",label:o.label},{default:B(()=>[z(Nt,null,{default:B(()=>[(le(!0),Ct(St,null,qt(t.teams,i=>Ke((le(),xe(Xt,{key:i.id,class:"hover-bg-color",clickable:"",onClick:m=>r.setTeam(i),dense:""},{default:B(()=>[Je("div",vo,[z(De,null,{default:B(()=>[z(Yt,{src:i.logos[0].href},null,8,["src"])]),_:2},1024),z(De,null,{default:B(()=>[z(jt,null,{default:B(()=>[He(xt(i.name),1)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["onClick"])),[[Ut]])),128))]),_:1})]),_:1},8,["label"])]),_:1})}var ho=Tt(fo,[["render",mo]]);const po=Lt({name:"MainLayout",data(){return{routerIsOpen:!1}},methods:{toggleRouterSidebar:function(){this.routerIsOpen=!this.routerIsOpen}}}),To=Object.assign(po,{setup(e){return(n,l)=>{const r=kt("router-view");return le(),xe(so,{view:"hHh lpR fFf"},{default:B(()=>[z(Gt,{elevated:""},{default:B(()=>[z(ho,{toggleRouterSidebar:n.toggleRouterSidebar},null,8,["toggleRouterSidebar"])]),_:1}),z(lo,{modelValue:n.routerIsOpen,"onUpdate:modelValue":l[0]||(l[0]=t=>n.routerIsOpen=t),class:"routerDrawer bg-secondary"},{default:B(()=>l[1]||(l[1]=[Je("span",null,"Add Routes",-1)])),_:1},8,["modelValue"]),z(ro,null,{default:B(()=>[z(r)]),_:1})]),_:1})}}});export{To as default};
