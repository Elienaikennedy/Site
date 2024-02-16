var sh=Object.defineProperty;var nh=Object.getOwnPropertyDescriptor;var g=(r,e,t,o)=>{for(var i=o>1?void 0:o?nh(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&sh(e,t,i),i};var xo=globalThis,gi=xo.ShadowRoot&&(xo.ShadyCSS===void 0||xo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ll=Symbol(),_l=new WeakMap,mi=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ll)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(gi&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=_l.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&_l.set(t,e))}return e}toString(){return this.cssText}},Ml=r=>new mi(typeof r=="string"?r:r+"",void 0,Ll);var fn=(r,e)=>{gi?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),i=xo.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,r.appendChild(o)})},bi=gi||xo.CSSStyleSheet===void 0?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Ml(t)})(r):r;var Bl,mn,yt=globalThis;(Bl=yt.customElements)!==null&&Bl!==void 0||(yt.customElements={define(){}});var Nl=yt.trustedTypes,ah=Nl?Nl.emptyScript:"",Hl=yt.reactiveElementPolyfillSupport,bn={toAttribute(r,e){switch(e){case Boolean:r=r?ah:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},jl=(r,e)=>e!==r&&(e==e||r==r),gn={attribute:!0,type:String,converter:bn,reflect:!1,hasChanged:jl},zl=yt.HTMLElement===void 0;zl&&(yt.HTMLElement=class{});var xt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=gn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)t.unshift(bi(i))}else e!==void 0&&t.push(bi(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=gn){var i;let s=this.constructor._$Ep(e,o);if(s!==void 0&&o.reflect===!0){let n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:bn).toAttribute(t,o.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var o;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:bn;this._$El=s,this[s]=a.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||jl)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};xt.finalized=!0,xt.elementProperties=new Map,xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},zl&&delete yt.HTMLElement,Hl?.({ReactiveElement:xt}),((mn=yt.reactiveElementVersions)!==null&&mn!==void 0?mn:yt.reactiveElementVersions=[]).push("1.4.2");var vn,wo=globalThis,Dr=wo.trustedTypes,Ul=Dr?Dr.createPolicy("lit-html",{createHTML:r=>r}):void 0,wt=`lit$${(Math.random()+"").slice(9)}$`,xn="?"+wt,lh=`<${xn}>`,Pr=wo.document===void 0?{createTreeWalker:()=>({})}:document,Co=(r="")=>Pr.createComment(r),$o=r=>r===null||typeof r!="object"&&typeof r!="function",Zl=Array.isArray,Jl=r=>Zl(r)||typeof r?.[Symbol.iterator]=="function",yo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ql=/-->/g,Gl=/>/g,sr=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wl=/'/g,Xl=/"/g,Kl=/^(?:script|style|textarea|title)$/i,ec=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),h=ec(1),Qf=ec(2),nr=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Ql=new WeakMap,Vr=Pr.createTreeWalker(Pr,129,null,!1),tc=(r,e)=>{let t=r.length-1,o=[],i,s=e===2?"<svg>":"",n=yo;for(let l=0;l<t;l++){let c=r[l],d,u,m=-1,y=0;for(;y<c.length&&(n.lastIndex=y,u=n.exec(c),u!==null);)y=n.lastIndex,n===yo?u[1]==="!--"?n=ql:u[1]!==void 0?n=Gl:u[2]!==void 0?(Kl.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=sr):u[3]!==void 0&&(n=sr):n===sr?u[0]===">"?(n=i??yo,m=-1):u[1]===void 0?m=-2:(m=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?sr:u[3]==='"'?Xl:Wl):n===Xl||n===Wl?n=sr:n===ql||n===Gl?n=yo:(n=sr,i=void 0);let w=n===sr&&r[l+1].startsWith("/>")?" ":"";s+=n===yo?c+lh:m>=0?(o.push(d),c.slice(0,m)+"$lit$"+c.slice(m)+wt+w):c+wt+(m===-2?(o.push(void 0),l):w)}let a=s+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ul!==void 0?Ul.createHTML(a):a,o]},So=class r{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,n=0,a=e.length-1,l=this.parts,[c,d]=tc(e,t);if(this.el=r.createElement(c,o),Vr.currentNode=this.el.content,t===2){let u=this.el.content,m=u.firstChild;m.remove(),u.append(...m.childNodes)}for(;(i=Vr.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let u=[];for(let m of i.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(wt)){let y=d[n++];if(u.push(m),y!==void 0){let w=i.getAttribute(y.toLowerCase()+"$lit$").split(wt),$=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:$[2],strings:w,ctor:$[1]==="."?xi:$[1]==="?"?yi:$[1]==="@"?wi:lr})}else l.push({type:6,index:s})}for(let m of u)i.removeAttribute(m)}if(Kl.test(i.tagName)){let u=i.textContent.split(wt),m=u.length-1;if(m>0){i.textContent=Dr?Dr.emptyScript:"";for(let y=0;y<m;y++)i.append(u[y],Co()),Vr.nextNode(),l.push({type:2,index:++s});i.append(u[m],Co())}}}else if(i.nodeType===8)if(i.data===xn)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(wt,u+1))!==-1;)l.push({type:7,index:s}),u+=wt.length-1}s++}}static createElement(e,t){let o=Pr.createElement("template");return o.innerHTML=e,o}};function ar(r,e,t=r,o){var i,s,n,a;if(e===nr)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl,c=$o(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,o)),o!==void 0?((n=(a=t)._$Co)!==null&&n!==void 0?n:a._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=ar(r,l._$AS(r,e.values),l,o)),e}var vi=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;let{el:{content:o},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:Pr).importNode(o,!0);Vr.currentNode=s;let n=Vr.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new _r(n,n.nextSibling,this,e):c.type===1?d=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(d=new Ci(n,this,e)),this.u.push(d),c=i[++l]}a!==c?.index&&(n=Vr.nextNode(),a++)}return s}p(e){let t=0;for(let o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},_r=class r{constructor(e,t,o,i){var s;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cm=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ar(this,e,t),$o(e)?e===Y||e==null||e===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==nr&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Jl(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==Y&&$o(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pr.createTextNode(e)),this._$AH=e}$(e){var t;let{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=So.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(o);else{let n=new vi(s,this),a=n.v(this.options);n.p(o),this.T(a),this._$AH=n}}_$AC(e){let t=Ql.get(e.strings);return t===void 0&&Ql.set(e.strings,t=new So(e)),t}k(e){Zl(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let s of e)i===t.length?t.push(o=new r(this.O(Co()),this.O(Co()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},lr=class{constructor(e,t,o,i,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){let s=this.strings,n=!1;if(s===void 0)e=ar(this,e,t,0),n=!$o(e)||e!==this._$AH&&e!==nr,n&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=ar(this,a[o+l],t,l),c===nr&&(c=this._$AH[l]),n||(n=!$o(c)||c!==this._$AH[l]),c===Y?e=Y:e!==Y&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xi=class extends lr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}},ch=Dr?Dr.emptyScript:"",yi=class extends lr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Y?this.element.setAttribute(this.name,ch):this.element.removeAttribute(this.name)}},wi=class extends lr{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){var o;if((e=(o=ar(this,e,t,0))!==null&&o!==void 0?o:Y)===nr)return;let i=this._$AH,s=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Y&&(i===Y||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},Ci=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ar(this,e)}},rc={P:"$lit$",A:wt,M:xn,C:1,L:tc,R:vi,D:Jl,V:ar,I:_r,H:lr,N:yi,U:wi,B:xi,F:Ci},Yl=wo.litHtmlPolyfillSupport;Yl?.(So,_r),((vn=wo.litHtmlVersions)!==null&&vn!==void 0?vn:wo.litHtmlVersions=[]).push("2.4.0");var oc=(r,e,t)=>{var o,i;let s=(o=t?.renderBefore)!==null&&o!==void 0?o:e,n=s._$litPart$;if(n===void 0){let a=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new _r(e.insertBefore(Co(),a),a,void 0,t??{})}return n._$AI(r),n};var yn,wn;var R=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return nr}};R.finalized=!0,R._$litElement$=!0,(yn=globalThis.litElementHydrateSupport)===null||yn===void 0||yn.call(globalThis,{LitElement:R});var ic=globalThis.litElementPolyfillSupport;ic?.({LitElement:R});((wn=globalThis.litElementVersions)!==null&&wn!==void 0?wn:globalThis.litElementVersions=[]).push("3.2.2");var V=r=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(r,e):((t,o)=>{let{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){customElements.define(t,n)}}})(r,e);var dh=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function D(r){return(e,t)=>t!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(r,e,t):dh(r,e)}function B(r){return D({...r,state:!0})}var Cn,Cm=((Cn=globalThis.HTMLSlotElement)===null||Cn===void 0?void 0:Cn.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function oe(r,e,t){return r?e():t?.()}var Lr=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o}};var Ee=class{constructor(e,t,o,i){var s;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){let n=t;this.context=n.context,this.callback=n.callback,this.subscribe=(s=n.subscribe)!==null&&s!==void 0&&s}else this.context=t,this.callback=o,this.subscribe=i!=null&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Lr(this.context,this.t,this.subscribe))}};var $i=class{constructor(e){this.callbacks=new Map,this.updateObservers=()=>{for(let[t,o]of this.callbacks)t(this.o,o)},e!==void 0&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}addCallback(e,t){t&&(this.callbacks.has(e)||this.callbacks.set(e,()=>{this.callbacks.delete(e)})),e(this.value)}clearCallbacks(){this.callbacks.clear()}};var $n=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,Object.setPrototypeOf(this,new.target.prototype)}},tt=class extends $i{constructor(e,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=i=>{i.context===this.context&&i.composedPath()[0]!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,i.subscribe))},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new $n(this.context))}};function Sn(r){return r?`${r.collectionName}:${r.generatorName}`:""}function sc(r){return r?r.generatorName.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}function Ft(r){if(r&&!(r.default===void 0||r.default===null))return Array.isArray(r.default)?r.default.map(e=>String(e)):r.type==="boolean"?!!r.default:String(r.default)??""}function ki(r,e){return!r&&!e?!0:Array.isArray(r)&&Array.isArray(e)?r.join(",")===e.join(","):r===e}function nc(r,e){let t;return function(...o){clearTimeout(t),t=setTimeout(()=>{r.apply(this,o)},e)}.bind(r)}function Vt(r){return r.items?Array.isArray(r.items)?r.items:r.items.enum:[]}var Oi=class{constructor(e){this.payload=e;this.payloadType="request-validation"}},Ai=class{constructor(e){this.payload=e;this.payloadType="copy-to-clipboard"}};var Ei=Symbol("submitted");var kn=Symbol("form-values"),Ri=class{constructor(e){this.cwdValue=void 0;this.formValues={};this.validationResults={};this.debouncedRunGenerator=nc(e=>this.runGenerator(e),500);this.validationListeners={};this.defaultValueListeners={};this.touchedListeners={};this.icc=e.icc,this.submittedContextProvider=new tt(e,{context:Ei,initialValue:!1}),new tt(e,{context:kn,initialValue:this}),window.addEventListener("option-changed",t=>{t.detail&&this.handleOptionChange(t.detail)}),window.addEventListener("cwd-changed",async t=>{if(t.detail===void 0)return;let o=this.cwdValue===void 0;this.cwdValue=t.detail,!o&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&(this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.keys(this.validationResults).length===0&&this.debouncedRunGenerator(!0))})}async handleOptionChange(e){this.formValues={...this.formValues,[e.name]:e.value},this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.entries(this.validationListeners).forEach(([t,o])=>{o?.forEach(i=>i(this.validationResults[t]))}),e.isDefaultValue||(Object.keys(this.validationResults).length===0&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&this.debouncedRunGenerator(!0),this.touchedListeners[e.name]?.forEach(t=>t(!0))),this.defaultValueListeners[e.name]&&this.defaultValueListeners[e.name]?.forEach(t=>t(e.isDefaultValue))}async validate(e,t){if(!t)return{};let o=t.options,i={};Object.entries(e).forEach(([n,a])=>{let l=o.find(c=>c.name===n);l&&(l.pattern&&(new RegExp(l.pattern).test(String(a))||(i[n]=`Value should match the pattern '${l.pattern}'`)),l.isRequired&&(!a||Array.isArray(a)&&a.length===0)&&(i[n]="This field is required"))});let s=await this.icc.getValidationResults(e,t);return{...i,...s}}runGenerator(e=!1){let t=this.getSerializedFormValues();t.push("--no-interactive"),e&&t.push("--dry-run"),this.submittedContextProvider.setValue(!0),this.icc.postMessageToIde({payloadType:"run-generator",payload:{positional:Sn(this.icc.generatorSchema),flags:t,cwd:this.cwdValue?.toString()}})}copyCommandToClipboard(){let e=this.getSerializedFormValues(),o=`nx g ${Sn(this.icc.generatorSchema)} ${e.join(" ")}`;this.icc.editor==="vscode"?navigator.clipboard.writeText(o):this.icc.postMessageToIde(new Ai(o))}getSerializedFormValues(){let e=[],t={...this.formValues,...this.icc.generatorSchema?.context?.fixedFormValues??{}};return Object.entries(t).forEach(([o,i])=>{let s=this.icc.generatorSchema?.options.find(l=>l.name===o),n=Ft(s);if(ki(i,n))return;let a=i?.toString()??"";a.includes(" ")?a.includes('"')?e.push(`--${o}='${i}'`):e.push(`--${o}="${i}"`):e.push(`--${o}=${i}`)}),e}registerValidationListener(e,t){this.validationListeners[e]||(this.validationListeners[e]=[]),this.validationListeners[e].push(t)}registerDefaultValueListener(e,t){this.defaultValueListeners[e]||(this.defaultValueListeners[e]=[]),this.defaultValueListeners[e].push(t)}registerTouchedListener(e,t){this.touchedListeners[e]||(this.touchedListeners[e]=[]),this.touchedListeners[e].push(t)}};var On=Symbol("editor"),Z=r=>{class e extends r{constructor(...i){super();new Ee(this,{context:On,callback:s=>{this.editor=s},subscribe:!0})}}return g([B()],e.prototype,"editor",2),e};var Oo=Symbol("generatorContext"),Ti=r=>{class e extends r{constructor(...i){super();new Ee(this,{context:Oo,callback:s=>this.generatorContext=s,subscribe:!0})}}return g([B()],e.prototype,"generatorContext",2),e};var Ii=class{constructor(e){this.host=e;this.pendingPluginValidationQueue=[];let t;try{t=acquireVsCodeApi()}catch{}this.editor=t?"vscode":"intellij",console.log("initializing ide communication for",this.editor),new tt(e,{context:On,initialValue:this.editor}),this.generatorContextContextProvider=new tt(e,{context:Oo,initialValue:void 0}),t?this.setupVscodeCommunication(t):this.setupIntellijCommunication(),this.postMessageToIde({payloadType:"output-init"})}hostConnected(){}postMessageToIde(e){console.log("sending message to ide",e),this.postToIde(e)}async getValidationResults(e,t){let o=new Promise(i=>{this.pendingPluginValidationQueue.push(i)});return this.postMessageToIde(new Oi({formValues:e,schema:t})),await o}setupVscodeCommunication(e){window.addEventListener("message",t=>{let o=t.data;o&&(console.log("received message from vscode",o),this.handleInputMessage(o))}),this.postToIde=t=>e.postMessage(t)}setupIntellijCommunication(){window.intellijApi?.registerPostToWebviewCallback(e=>{if(e.payloadType==="styles"){this.setIntellijStyles(e.payload);return}this.handleInputMessage(e)}),this.postToIde=e=>{let t=JSON.stringify(e);window.intellijApi?.postToIde(t)}}handleInputMessage(e){switch(e.payloadType){case"generator":{this.generatorSchema=e.payload,this.generatorContextContextProvider.setValue(this.generatorSchema.context),this.host.requestUpdate();break}case"config":{this.configuration=e.payload,this.host.requestUpdate();break}case"banner":{this.banner=e.payload,this.host.requestUpdate();break}case"validation-results":{if(this.pendingPluginValidationQueue.length>0){let t=this.pendingPluginValidationQueue.shift();if(!t)break;t(e.payload)}break}}}setIntellijStyles(e){let t=new CSSStyleSheet;t.replaceSync(`
    :root {
      --foreground-color: ${e.foregroundColor};
      --muted-foreground-color: ${e.mutedForegroundColor};
      --background-color: ${e.backgroundColor};
      --primary-color: ${e.primaryColor};
      --error-color: ${e.errorColor};
      --field-background-color: ${e.fieldBackgroundColor};
      --field-border-color: ${e.fieldBorderColor};
      --select-field-background-color: ${e.selectFieldBackgroundColor};
      --active-selection-background-color: ${e.activeSelectionBackgroundColor};
      --focus-border-color: ${e.focusBorderColor};
      --banner-warning-color: ${e.bannerWarningBackgroundColor};
      --banner-text-color: ${e.bannerTextColor};
      --badge-background-color: ${e.badgeBackgroundColor};
      --separator-color: ${e.separatorColor};
      --field-nav-hover-color: ${e.fieldNavHoverColor};
      --scrollbar-thumb-color: ${e.scrollbarThumbColor};
      font-family: ${e.fontFamily};
      font-size: ${e.fontSize};
    }
    `),document.adoptedStyleSheets=[t]}};var Ct=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ct.trustedTypes===void 0&&(Ct.trustedTypes={createPolicy:(r,e)=>e});var ac={configurable:!1,enumerable:!1,writable:!1};Ct.FAST===void 0&&Reflect.defineProperty(Ct,"FAST",Object.assign({value:Object.create(null)},ac));var cr=Ct.FAST;if(cr.getById===void 0){let r=Object.create(null);Reflect.defineProperty(cr,"getById",Object.assign({value(e,t){let o=r[e];return o===void 0&&(o=t?r[e]=t():null),o}},ac))}var Dt=Object.freeze([]);function Fi(){let r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let o=Reflect.getPrototypeOf(e);for(;t===void 0&&o!==null;)t=r.get(o),o=Reflect.getPrototypeOf(o);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}var An=Ct.FAST.getById(1,()=>{let r=[],e=[];function t(){if(e.length)throw e.shift()}function o(n){try{n.call()}catch(a){e.push(a),setTimeout(t,0)}}function i(){let a=0;for(;a<r.length;)if(o(r[a]),a++,a>1024){for(let l=0,c=r.length-a;l<c;l++)r[l]=r[l+a];r.length-=a,a=0}r.length=0}function s(n){r.length<1&&Ct.requestAnimationFrame(i),r.push(n)}return Object.freeze({enqueue:s,process:i})}),lc=Ct.trustedTypes.createPolicy("fast-html",{createHTML:r=>r}),En=lc,Ao=`fast-${Math.random().toString(36).substring(2,8)}`,Rn=`${Ao}{`,Vi=`}${Ao}`,O=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(r){if(En!==lc)throw new Error("The HTML policy can only be set once.");En=r},createHTML(r){return En.createHTML(r)},isMarker(r){return r&&r.nodeType===8&&r.data.startsWith(Ao)},extractDirectiveIndexFromMarker(r){return parseInt(r.data.replace(`${Ao}:`,""))},createInterpolationPlaceholder(r){return`${Rn}${r}${Vi}`},createCustomAttributePlaceholder(r,e){return`${r}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(r){return`<!--${Ao}:${r}-->`},queueUpdate:An.enqueue,processUpdates:An.process,nextUpdate(){return new Promise(An.enqueue)},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)},removeChildNodes(r){for(let e=r.firstChild;e!==null;e=r.firstChild)r.removeChild(e)},createTemplateWalker(r){return document.createTreeWalker(r,133,null,!1)}});var Mr=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);o!==-1&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(t===void 0){let i=this.sub1,s=this.sub2;i!==void 0&&i.handleChange(o,e),s!==void 0&&s.handleChange(o,e)}else for(let i=0,s=t.length;i<s;++i)t[i].handleChange(o,e)}},Br=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];o!==void 0&&o.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var o;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new Mr(this.source)),i.subscribe(e)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new Mr(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(e)}};var T=cr.getById(2,()=>{let r=/(:|&&|\|\||if)/,e=new WeakMap,t=O.queueUpdate,o,i=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=i(c):e.set(c,d=new Br(c))),d}let n=Fi();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return o!==void 0&&o.watch(d,this.name),d[this.field]}setValue(d,u){let m=this.field,y=d[m];if(y!==u){d[m]=u;let w=d[this.callback];typeof w=="function"&&w.call(d,y,u),s(d).notify(this.name)}}}class l extends Mr{constructor(d,u,m=!1){super(d,u),this.binding=d,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();let m=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let y=this.binding(d,u);return o=m,y}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){let m=this.last,y=s(d),w=m===null?this.first:{};if(w.propertySource=d,w.propertyName=u,w.notifier=y,y.subscribe(this,u),m!==null){if(!this.needsRefresh){let $;o=void 0,$=m.propertySource[m.propertyName],o=this,d===$&&(this.needsRefresh=!0)}m.next=w}this.last=w}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{let u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:s,track(c,d){o!==void 0&&o.watch(c,d)},trackVolatile(){o!==void 0&&(o.needsRefresh=!0)},notify(c,d){s(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),n(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:n,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return r.test(c.toString())}})});function A(r,e){T.defineProperty(r,e)}function dc(r,e,t){return Object.assign({},t,{get:function(){return T.trackVolatile(),t.get.apply(this)}})}var cc=cr.getById(3,()=>{let r=null;return{get(){return r},set(e){r=e}}}),Pt=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return cc.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){cc.set(e)}};T.defineProperty(Pt.prototype,"index");T.defineProperty(Pt.prototype,"length");var _t=Object.seal(new Pt);var Nr=class{constructor(){this.targetIndex=0}},Hr=class extends Nr{constructor(){super(...arguments),this.createPlaceholder=O.createInterpolationPlaceholder}},jr=class extends Nr{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return O.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function fh(r,e){this.source=r,this.context=e,this.bindingObserver===null&&(this.bindingObserver=T.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(r,e))}function mh(r,e){this.source=r,this.context=e,this.target.addEventListener(this.targetName,this)}function gh(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function bh(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let r=this.target.$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}function vh(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function xh(r){O.setAttribute(this.target,this.targetName,r)}function yh(r){O.setBooleanAttribute(this.target,this.targetName,r)}function wh(r){if(r==null&&(r=""),r.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=r.create():this.target.$fastTemplate!==r&&(e.isComposed&&(e.remove(),e.unbind()),e=r.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=r)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=r}}function Ch(r){this.target[this.targetName]=r}function $h(r){let e=this.classVersions||Object.create(null),t=this.target,o=this.version||0;if(r!=null&&r.length){let i=r.split(/\s+/);for(let s=0,n=i.length;s<n;++s){let a=i[s];a!==""&&(e[a]=o,t.classList.add(a))}}if(this.classVersions=e,this.version=o+1,o!==0){o-=1;for(let i in e)e[i]===o&&t.classList.remove(i)}}var dr=class extends Hr{constructor(e){super(),this.binding=e,this.bind=fh,this.unbind=gh,this.updateTarget=xh,this.isBindingVolatile=T.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Ch,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(o,i)=>O.createHTML(t(o,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=yh;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=mh,this.unbind=vh;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=$h);break}}targetAtContent(){this.updateTarget=wh,this.unbind=bh}createBehavior(e){return new Tn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},Tn=class{constructor(e,t,o,i,s,n,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=s,this.updateTarget=n,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Pt.setEvent(e);let t=this.binding(this.source,this.context);Pt.setEvent(null),t!==!0&&e.preventDefault()}};var In=null,Fn=class r{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){In=this}static borrow(e){let t=In||new r;return t.directives=e,t.reset(),In=null,t}};function Sh(r){if(r.length===1)return r[0];let e,t=r.length,o=r.map(n=>typeof n=="string"?()=>n:(e=n.targetName||e,n.binding)),i=(n,a)=>{let l="";for(let c=0;c<t;++c)l+=o[c](n,a);return l},s=new dr(i);return s.targetName=e,s}var kh=Vi.length;function hc(r,e){let t=e.split(Rn);if(t.length===1)return null;let o=[];for(let i=0,s=t.length;i<s;++i){let n=t[i],a=n.indexOf(Vi),l;if(a===-1)l=n;else{let c=parseInt(n.substring(0,a));o.push(r.directives[c]),l=n.substring(a+kh)}l!==""&&o.push(l)}return o}function uc(r,e,t=!1){let o=e.attributes;for(let i=0,s=o.length;i<s;++i){let n=o[i],a=n.value,l=hc(r,a),c=null;l===null?t&&(c=new dr(()=>a),c.targetName=n.name):c=Sh(l),c!==null&&(e.removeAttributeNode(n),i--,s--,r.addFactory(c))}}function Oh(r,e,t){let o=hc(r,e.textContent);if(o!==null){let i=e;for(let s=0,n=o.length;s<n;++s){let a=o[s],l=s===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",r.captureContentBinding(a)),i=l,r.targetIndex++,l!==e&&t.nextNode()}r.targetIndex--}}function pc(r,e){let t=r.content;document.adoptNode(t);let o=Fn.borrow(e);uc(o,r,!0);let i=o.behaviorFactories;o.reset();let s=O.createTemplateWalker(t),n;for(;n=s.nextNode();)switch(o.targetIndex++,n.nodeType){case 1:uc(o,n);break;case 3:Oh(o,n,s);break;case 8:O.isMarker(n)&&o.addFactory(e[O.extractDirectiveIndexFromMarker(n)])}let a=0;(O.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let l=o.behaviorFactories;return o.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}var Vn=document.createRange(),Di=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let o=e.parentNode,i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,o.insertBefore(i,e),i=s;o.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);let s=this.behaviors,n=this.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}bind(e,t){let o=this.behaviors;if(this.source!==e)if(this.source!==null){let i=this.source;this.source=e,this.context=t;for(let s=0,n=o.length;s<n;++s){let a=o[s];a.unbind(i),a.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i)o[i].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Vn.setStartBefore(e[0].firstChild),Vn.setEndAfter(e[e.length-1].lastChild),Vn.deleteContents();for(let t=0,o=e.length;t<o;++t){let i=e[t],s=i.behaviors,n=i.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}}}};var Pi=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c,d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=O.createHTML(d);let m=c.content.firstElementChild;m!==null&&m.tagName==="TEMPLATE"&&(c=m)}else c=d;let u=pc(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),s=O.createTemplateWalker(t),n=0,a=this.targetOffset,l=s.nextNode();for(let c=o.length;n<c;++n){let d=o[n],u=d.targetIndex;for(;l!==null;)if(a===u){i[n]=d.createBehavior(l);break}else l=s.nextNode(),a++}if(this.hasHostBehaviors){let c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++n)i[n]=c[d].createBehavior(e)}return new Di(t,i)}render(e,t,o){typeof t=="string"&&(t=document.getElementById(t)),o===void 0&&(o=t);let i=this.create(o);return i.bind(e,_t),i.appendTo(t),i}},Ah=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ie(r,...e){let t=[],o="";for(let i=0,s=r.length-1;i<s;++i){let n=r[i],a=e[i];if(o+=n,a instanceof Pi){let l=a;a=()=>l}if(typeof a=="function"&&(a=new dr(a)),a instanceof Hr){let l=Ah.exec(n);l!==null&&(a.targetName=l[2])}a instanceof Nr?(o+=a.createPlaceholder(t.length),t.push(a)):o+=a}return o+=r[r.length-1],new Pi(o,t)}var W=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};W.create=(()=>{if(O.supportsAdoptedStyleSheets){let r=new Map;return e=>new Dn(e,r)}return r=>new Pn(r)})();function _n(r){return r.map(e=>e instanceof W?_n(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function fc(r){return r.map(e=>e instanceof W?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var Dn=class extends W{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=fc(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=_n(e).map(o=>{if(o instanceof CSSStyleSheet)return o;let i=t.get(o);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(o),t.set(o,i)),i})}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){let t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter(o=>t.indexOf(o)===-1),super.removeStylesFrom(e)}},Eh=0;function Rh(){return`fast-style-class-${++Eh}`}var Pn=class extends W{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=fc(e),this.styleSheets=_n(e),this.styleClass=Rh()}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){let s=document.createElement("style");s.innerHTML=t[i],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var Eo=Object.freeze({locate:Fi()}),Ln={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}},zr={toView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e.toString()},fromView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e}},_i=class r{constructor(e,t,o=t.toLowerCase(),i="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&s===void 0&&(this.converter=Ln)}setValue(e,t){let o=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return T.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||t==="fromView"||O.queueUpdate(()=>{o.add(e);let i=e[this.fieldName];switch(t){case"reflect":let s=this.converter;O.setAttribute(e,this.attribute,s!==void 0?s.toView(i):i);break;case"boolean":O.setBooleanAttribute(e,this.attribute,i);break}o.delete(e)})}static collect(e,...t){let o=[];t.push(Eo.locate(e));for(let i=0,s=t.length;i<s;++i){let n=t[i];if(n!==void 0)for(let a=0,l=n.length;a<l;++a){let c=n[a];typeof c=="string"?o.push(new r(e,c)):o.push(new r(e,c.property,c.attribute,c.mode,c.converter))}}return o}};function x(r,e){let t;function o(i,s){arguments.length>1&&(t.property=s),Eo.locate(i.constructor).push(t)}if(arguments.length>1){t={},o(r,e);return}return t=r===void 0?{}:r,o}var mc={mode:"open"},gc={},Mn=cr.getById(4,()=>{let r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)}})}),rt=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=_i.collect(e,t.attributes),i=new Array(o.length),s={},n={};for(let a=0,l=o.length;a<l;++a){let c=o[a];i[a]=c.attribute,s[c.name]=c,n[c.attribute]=c}this.attributes=o,this.observedAttributes=i,this.propertyLookup=s,this.attributeLookup=n,this.shadowOptions=t.shadowOptions===void 0?mc:t.shadowOptions===null?void 0:Object.assign(Object.assign({},mc),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?gc:Object.assign(Object.assign({},gc),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?W.create(t.styles):t.styles instanceof W?t.styles:W.create([t.styles])}get isDefined(){return!!Mn.getByType(this.type)}define(e=customElements){let t=this.type;if(Mn.register(this)){let o=this.attributes,i=t.prototype;for(let s=0,n=o.length;s<n;++s)T.defineProperty(i,o[s]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};rt.forType=Mn.getByType;var bc=new WeakMap,Th={bubbles:!0,composed:!0,cancelable:!0};function Bn(r){return r.shadowRoot||bc.get(r)||null}var Li=class r extends Br{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(o!==void 0){let s=e.attachShadow(o);o.mode==="closed"&&bc.set(e,s)}let i=T.getAccessors(e);if(i.length>0){let s=this.boundObservables=Object.create(null);for(let n=0,a=i.length;n<a;++n){let l=i[n].name,c=e[l];c!==void 0&&(delete e[l],s[l]=c)}}}get isConnected(){return T.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,T.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=Bn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),o!==null&&this.addBehaviors(o)}}removeStyles(e){let t=Bn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),o!==null&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let s=0;s<o;++s){let n=e[s];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),i.push(n))}if(this._isConnected){let s=this.element;for(let n=0;n<i.length;++n)i[n].bind(s,_t)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(o===null)return;let i=e.length,s=[];for(let n=0;n<i;++n){let a=e[n];if(o.has(a)){let l=o.get(a)-1;l===0||t?o.delete(a)&&s.push(a):o.set(a,l)}}if(this._isConnected){let n=this.element;for(let a=0;a<s.length;++a)s[a].unbind(n)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,_t);let t=this.behaviors;if(t!==null)for(let[o]of t)o.bind(e,_t);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let o=this.element;for(let[i]of t)i.unbind(o)}}onAttributeChangedCallback(e,t,o){let i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Th),o))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let i=Object.keys(t);for(let s=0,n=i.length;s<n;++s){let a=i[s];e[a]=t[a]}this.boundObservables=null}let o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=Bn(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||O.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let o=rt.forType(e.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new r(e,o)}};function vc(r){return class extends r{constructor(){super(),Li.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}var Lt=Object.assign(vc(HTMLElement),{from(r){return vc(r)},define(r,e){return new rt(r,e).define().type}});var ur=class{createCSS(){return""}createBehavior(){}};function Ih(r,e){let t=[],o="",i=[];for(let s=0,n=r.length-1;s<n;++s){o+=r[s];let a=e[s];if(a instanceof ur){let l=a.createBehavior();a=a.createCSS(),l&&i.push(l)}a instanceof W||a instanceof CSSStyleSheet?(o.trim()!==""&&(t.push(o),o=""),t.push(a)):o+=a}return o+=r[r.length-1],o.trim()!==""&&t.push(o),{styles:t,behaviors:i}}function fe(r,...e){let{styles:t,behaviors:o}=Ih(r,e),i=W.create(t);return o.length&&i.withBehaviors(...o),i}var Nn=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function se(r){return new jr("fast-ref",Nn,r)}function xc(r,e){let t=typeof e=="function"?e:()=>e;return(o,i)=>r(o,i)?t(o,i):null}var Mi=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=T.getAccessors(e).some(o=>o.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Dt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var Hn=class extends Mi{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function ot(r){return typeof r=="string"&&(r={property:r}),new jr("fast-slotted",Hn,r)}var it=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},Mt=(r,e)=>ie`
    <span
        part="end"
        ${se("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${se("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Bt=(r,e)=>ie`
    <span
        part="start"
        ${se("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${se("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,Cv=ie`
    <span part="end" ${se("endContainer")}>
        <slot
            name="end"
            ${se("end")}
            @slotchange="${r=>r.handleEndContentChange()}"
        ></slot>
    </span>
`,$v=ie`
    <span part="start" ${se("startContainer")}>
        <slot
            name="start"
            ${se("start")}
            @slotchange="${r=>r.handleStartContentChange()}"
        ></slot>
    </span>
`;function p(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}var jn=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let o=jn.get(t);o===void 0&&jn.set(t,o=new Map),o.set(r,e)},Reflect.getOwnMetadata=function(r,e){let t=jn.get(e);if(t!==void 0)return t.get(r)});var Gn=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Tc(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:i}=this;return this.container=this.key=void 0,o.registerResolver(i,new me(i,e,t))}};function Ro(r){let e=r.slice(),t=Object.keys(r),o=t.length,i;for(let s=0;s<o;++s)i=t[s],Ic(i)||(e[i]=r[i]);return e}var Fh=Object.freeze({none(r){throw Error(`${r.toString()} not registered, did you forget to add @singleton()?`)},singleton(r){return new me(r,1,r)},transient(r){return new me(r,2,r)}}),zn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Fh.singleton})}),yc=new Map;function wc(r){return e=>Reflect.getOwnMetadata(r,e)}var Cc=null,_=Object.freeze({createContainer(r){return new To(null,Object.assign({},zn.default,r))},findResponsibleContainer(r){let e=r.$$container$$;return e&&e.responsibleForOwnerRequests?e:_.findParentContainer(r)},findParentContainer(r){let e=new CustomEvent(Rc,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return r.dispatchEvent(e),e.detail.container||_.getOrCreateDOMContainer()},getOrCreateDOMContainer(r,e){return r?r.$$container$$||new To(r,Object.assign({},zn.default,e,{parentLocator:_.findParentContainer})):Cc||(Cc=new To(null,Object.assign({},zn.default,e,{parentLocator:()=>null})))},getDesignParamtypes:wc("design:paramtypes"),getAnnotationParamtypes:wc("di:paramtypes"),getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamtypes(r);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],r),e},getDependencies(r){let e=yc.get(r);if(e===void 0){let t=r.inject;if(t===void 0){let o=_.getDesignParamtypes(r),i=_.getAnnotationParamtypes(r);if(o===void 0)if(i===void 0){let s=Object.getPrototypeOf(r);typeof s=="function"&&s!==Function.prototype?e=Ro(_.getDependencies(s)):e=[]}else e=Ro(i);else if(i===void 0)e=Ro(o);else{e=Ro(o);let s=i.length,n;for(let c=0;c<s;++c)n=i[c],n!==void 0&&(e[c]=n);let a=Object.keys(i);s=a.length;let l;for(let c=0;c<s;++c)l=a[c],Ic(l)||(e[l]=i[l])}}else e=Ro(t);yc.set(r,e)}return e},defineProperty(r,e,t,o=!1){let i=`$di_${e}`;Reflect.defineProperty(r,e,{get:function(){let s=this[i];if(s===void 0&&(s=(this instanceof HTMLElement?_.findResponsibleContainer(this):_.getOrCreateDOMContainer()).get(t),this[i]=s,o&&this instanceof Lt)){let a=this.$fastController,l=()=>{let d=_.findResponsibleContainer(this).get(t),u=this[i];d!==u&&(this[i]=s,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return s}})},createInterface(r,e){let t=typeof r=="function"?r:e,o=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||Oc,i=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,s=function(n,a,l){if(n==null||new.target!==void 0)throw new Error(`No registration for interface: '${s.friendlyName}'`);if(a)_.defineProperty(n,a,s,i);else{let c=_.getOrCreateAnnotationParamTypes(n);c[l]=s}};return s.$isInterface=!0,s.friendlyName=o??"(anonymous)",t!=null&&(s.register=function(n,a){return t(new Gn(n,a??s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject(...r){return function(e,t,o){if(typeof o=="number"){let i=_.getOrCreateAnnotationParamTypes(e),s=r[0];s!==void 0&&(i[o]=s)}else if(t)_.defineProperty(e,t,r[0]);else{let i=o?_.getOrCreateAnnotationParamTypes(o.value):_.getOrCreateAnnotationParamTypes(e),s;for(let n=0;n<r.length;++n)s=r[n],s!==void 0&&(i[n]=s)}}},transient(r){return r.register=function(t){return hr.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=Dh){return r.register=function(o){return hr.singleton(r,r).register(o)},r.registerInRequestor=e.scoped,r}}),Vh=_.createInterface("Container");function ji(r){return function(e){let t=function(o,i,s){_.inject(t)(o,i,s)};return t.$isResolver=!0,t.resolve=function(o,i){return r(e,o,i)},t}}var Av=_.inject;var Dh={scoped:!1};function Ph(r){return function(e,t){t=!!t;let o=function(i,s,n){_.inject(o)(i,s,n)};return o.$isResolver=!0,o.resolve=function(i,s){return r(e,i,s,t)},o}}var Ev=Ph((r,e,t,o)=>t.getAll(r,o)),Rv=ji((r,e,t)=>()=>t.get(r)),Tv=ji((r,e,t)=>{if(t.has(r,!0))return t.get(r)});function Xn(r,e,t){_.inject(Xn)(r,e,t)}Xn.$isResolver=!0;Xn.resolve=()=>{};var Iv=ji((r,e,t)=>{let o=Ec(r,e),i=new me(r,0,o);return t.registerResolver(r,i),o}),Fv=ji((r,e,t)=>Ec(r,e));function Ec(r,e){return e.getFactory(r).construct(e)}var me=class{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let o=e.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(o=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||o===void 0?void 0:o.call(t,e))!==null&&i!==void 0?i:null;default:return null}}};function $c(r){return this.get(r)}function _h(r,e){return e(r)}var Wn=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return t===void 0?o=new this.Type(...this.dependencies.map($c,e)):o=new this.Type(...this.dependencies.map($c,e),...t),this.transformers==null?o:this.transformers.reduce(_h,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},Lh={$isResolver:!0,resolve(r,e){return e}};function Hi(r){return typeof r.register=="function"}function Mh(r){return Hi(r)&&typeof r.registerInRequestor=="boolean"}function Sc(r){return Mh(r)&&r.registerInRequestor}function Bh(r){return r.prototype!==void 0}var Nh=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Rc="__DI_LOCATE_PARENT__",Un=new Map,To=class r{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Vh,Lh),e instanceof Node&&e.addEventListener(Rc,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,o,i,s,n,a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!Ac(t))if(Hi(t))t.register(this,a);else if(Bh(t))hr.singleton(t,t).register(this);else for(o=Object.keys(t),s=0,n=o.length;s<n;++s)i=t[o[s]],Ac(i)&&(Hi(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(e,t){Bi(e);let o=this.resolvers,i=o.get(e);return i==null?o.set(e,t):i instanceof me&&i.strategy===4?i.state.push(t):o.set(e,new me(e,4,[i,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(o==null)return!1;if(o.getFactory){let i=o.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Bi(e),e.resolve!==void 0)return e;let o=this,i;for(;o!=null;)if(i=o.resolvers.get(e),i==null){if(o.parent==null){let s=Sc(e)?this:o;return t?this.jitRegister(e,s):null}o=o.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Bi(e),e.$isResolver)return e.resolve(this,this);let t=this,o;for(;t!=null;)if(o=t.resolvers.get(e),o==null){if(t.parent==null){let i=Sc(e)?this:t;return o=this.jitRegister(e,i),o.resolve(t,this)}t=t.parent}else return o.resolve(t,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Bi(e);let o=this,i=o,s;if(t){let n=Dt;for(;i!=null;)s=i.resolvers.get(e),s!=null&&(n=n.concat(kc(s,i,o))),i=i.parent;return n}else for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i=i.parent,i==null)return Dt}else return kc(s,i,o);return Dt}getFactory(e){let t=Un.get(e);if(t===void 0){if(Hh(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Un.set(e,t=new Wn(e,_.getDependencies(e)))}return t}registerFactory(e,t){Un.set(e,t)}createChild(e){return new r(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Nh.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Hi(e)){let o=e.register(t);if(!(o instanceof Object)||o.resolve==null){let i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}},qn=new WeakMap;function Tc(r){return function(e,t,o){if(qn.has(o))return qn.get(o);let i=r(e,t,o);return qn.set(o,i),i}}var hr=Object.freeze({instance(r,e){return new me(r,0,e)},singleton(r,e){return new me(r,1,e)},transient(r,e){return new me(r,2,e)},callback(r,e){return new me(r,3,e)},cachedCallback(r,e){return new me(r,3,Tc(e))},aliasTo(r,e){return new me(e,5,r)}});function Bi(r){if(r==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function kc(r,e,t){if(r instanceof me&&r.strategy===4){let o=r.state,i=o.length,s=new Array(i);for(;i--;)s[i]=o[i].resolve(e,t);return s}return[r.resolve(e,t)]}var Oc="(anonymous)";function Ac(r){return typeof r=="object"&&r!==null||typeof r=="function"}var Hh=function(){let r=new WeakMap,e=!1,t="",o=0;return function(i){return e=r.get(i),e===void 0&&(t=i.toString(),o=t.length,e=o>=29&&o<=100&&t.charCodeAt(o-1)===125&&t.charCodeAt(o-2)<=32&&t.charCodeAt(o-3)===93&&t.charCodeAt(o-4)===101&&t.charCodeAt(o-5)===100&&t.charCodeAt(o-6)===111&&t.charCodeAt(o-7)===99&&t.charCodeAt(o-8)===32&&t.charCodeAt(o-9)===101&&t.charCodeAt(o-10)===118&&t.charCodeAt(o-11)===105&&t.charCodeAt(o-12)===116&&t.charCodeAt(o-13)===97&&t.charCodeAt(o-14)===110&&t.charCodeAt(o-15)===88,r.set(i,e)),e}}(),Ni={};function Ic(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{let e=Ni[r];if(e!==void 0)return e;let t=r.length;if(t===0)return Ni[r]=!1;let o=0;for(let i=0;i<t;++i)if(o=r.charCodeAt(i),i===0&&o===48&&t>1||o<48||o>57)return Ni[r]=!1;return Ni[r]=!0}default:return!1}}function Fc(r){return`${r.toLowerCase()}:presentation`}var zi=new Map,qi=Object.freeze({define(r,e,t){let o=Fc(r);zi.get(o)===void 0?zi.set(o,e):zi.set(o,!1),t.register(hr.instance(o,e))},forTag(r,e){let t=Fc(r),o=zi.get(t);return o===!1?_.findResponsibleContainer(e).get(t):o||null}}),Ui=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?W.create(t):t instanceof W?t:W.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var ne=class r extends Lt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=qi.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Qn(this===r?class extends r{}:this,e,t)}};p([A],ne.prototype,"template",void 0);p([A],ne.prototype,"styles",void 0);function Io(r,e,t){return typeof r=="function"?r(e,t):r}var Qn=class{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,i=this.overrideDefinition,n=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let l=new Ui(Io(o.template,a,o),Io(o.styles,a,o));a.definePresentation(l);let c=Io(o.shadowOptions,a,o);a.shadowRootMode&&(c?i.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:Io(o.elementOptions,a,o),shadowOptions:c,attributes:Io(o.attributes,a,o)})}})}};function ge(r,...e){let t=Eo.locate(r);e.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(r.prototype,s,Object.getOwnPropertyDescriptor(o.prototype,s))}),Eo.locate(o).forEach(s=>t.push(s))})}function Gi(r,e){let t=r.length;for(;t--;)if(e(r[t],t,r))return t;return-1}function Vc(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Wi(...r){return r.every(e=>e instanceof HTMLElement)}function jh(){let r=document.querySelector('meta[property="csp-nonce"]');return r?r.getAttribute("content"):null}var pr;function Xi(){if(typeof pr=="boolean")return pr;if(!Vc())return pr=!1,pr;let r=document.createElement("style"),e=jh();e!==null&&r.setAttribute("nonce",e),document.head.appendChild(r);try{r.sheet.insertRule("foo:focus-visible {color:inherit}",0),pr=!0}catch{pr=!1}finally{document.head.removeChild(r)}return pr}var Dc;(function(r){r[r.alt=18]="alt",r[r.arrowDown=40]="arrowDown",r[r.arrowLeft=37]="arrowLeft",r[r.arrowRight=39]="arrowRight",r[r.arrowUp=38]="arrowUp",r[r.back=8]="back",r[r.backSlash=220]="backSlash",r[r.break=19]="break",r[r.capsLock=20]="capsLock",r[r.closeBracket=221]="closeBracket",r[r.colon=186]="colon",r[r.colon2=59]="colon2",r[r.comma=188]="comma",r[r.ctrl=17]="ctrl",r[r.delete=46]="delete",r[r.end=35]="end",r[r.enter=13]="enter",r[r.equals=187]="equals",r[r.equals2=61]="equals2",r[r.equals3=107]="equals3",r[r.escape=27]="escape",r[r.forwardSlash=191]="forwardSlash",r[r.function1=112]="function1",r[r.function10=121]="function10",r[r.function11=122]="function11",r[r.function12=123]="function12",r[r.function2=113]="function2",r[r.function3=114]="function3",r[r.function4=115]="function4",r[r.function5=116]="function5",r[r.function6=117]="function6",r[r.function7=118]="function7",r[r.function8=119]="function8",r[r.function9=120]="function9",r[r.home=36]="home",r[r.insert=45]="insert",r[r.menu=93]="menu",r[r.minus=189]="minus",r[r.minus2=109]="minus2",r[r.numLock=144]="numLock",r[r.numPad0=96]="numPad0",r[r.numPad1=97]="numPad1",r[r.numPad2=98]="numPad2",r[r.numPad3=99]="numPad3",r[r.numPad4=100]="numPad4",r[r.numPad5=101]="numPad5",r[r.numPad6=102]="numPad6",r[r.numPad7=103]="numPad7",r[r.numPad8=104]="numPad8",r[r.numPad9=105]="numPad9",r[r.numPadDivide=111]="numPadDivide",r[r.numPadDot=110]="numPadDot",r[r.numPadMinus=109]="numPadMinus",r[r.numPadMultiply=106]="numPadMultiply",r[r.numPadPlus=107]="numPadPlus",r[r.openBracket=219]="openBracket",r[r.pageDown=34]="pageDown",r[r.pageUp=33]="pageUp",r[r.period=190]="period",r[r.print=44]="print",r[r.quote=222]="quote",r[r.scrollLock=145]="scrollLock",r[r.shift=16]="shift",r[r.space=32]="space",r[r.tab=9]="tab",r[r.tilde=192]="tilde",r[r.windowsLeft=91]="windowsLeft",r[r.windowsOpera=219]="windowsOpera",r[r.windowsRight=92]="windowsRight"})(Dc||(Dc={}));var Re="ArrowDown";var Te="ArrowUp",Ie="Enter",Fe="Escape",Ve="Home",De="End";var $e=" ",Pe="Tab";var Qi;(function(r){r.ltr="ltr",r.rtl="rtl"})(Qi||(Qi={}));function Pc(r,e,t){return Math.min(Math.max(t,r),e)}function st(r,e,t=0){return[e,t]=[e,t].sort((o,i)=>o-i),e<=r&&r<t}var zh=0;function nt(r=""){return`${r}${zh++}`}var I;(function(r){r.Canvas="Canvas",r.CanvasText="CanvasText",r.LinkText="LinkText",r.VisitedText="VisitedText",r.ActiveText="ActiveText",r.ButtonFace="ButtonFace",r.ButtonText="ButtonText",r.Field="Field",r.FieldText="FieldText",r.Highlight="Highlight",r.HighlightText="HighlightText",r.GrayText="GrayText"})(I||(I={}));var P=class{};p([x({attribute:"aria-atomic"})],P.prototype,"ariaAtomic",void 0);p([x({attribute:"aria-busy"})],P.prototype,"ariaBusy",void 0);p([x({attribute:"aria-controls"})],P.prototype,"ariaControls",void 0);p([x({attribute:"aria-current"})],P.prototype,"ariaCurrent",void 0);p([x({attribute:"aria-describedby"})],P.prototype,"ariaDescribedby",void 0);p([x({attribute:"aria-details"})],P.prototype,"ariaDetails",void 0);p([x({attribute:"aria-disabled"})],P.prototype,"ariaDisabled",void 0);p([x({attribute:"aria-errormessage"})],P.prototype,"ariaErrormessage",void 0);p([x({attribute:"aria-flowto"})],P.prototype,"ariaFlowto",void 0);p([x({attribute:"aria-haspopup"})],P.prototype,"ariaHaspopup",void 0);p([x({attribute:"aria-hidden"})],P.prototype,"ariaHidden",void 0);p([x({attribute:"aria-invalid"})],P.prototype,"ariaInvalid",void 0);p([x({attribute:"aria-keyshortcuts"})],P.prototype,"ariaKeyshortcuts",void 0);p([x({attribute:"aria-label"})],P.prototype,"ariaLabel",void 0);p([x({attribute:"aria-labelledby"})],P.prototype,"ariaLabelledby",void 0);p([x({attribute:"aria-live"})],P.prototype,"ariaLive",void 0);p([x({attribute:"aria-owns"})],P.prototype,"ariaOwns",void 0);p([x({attribute:"aria-relevant"})],P.prototype,"ariaRelevant",void 0);p([x({attribute:"aria-roledescription"})],P.prototype,"ariaRoledescription",void 0);var _c=(r,e)=>ie`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${se("control")}
    >
        ${Bt(r,e)}
        <span class="content" part="content">
            <slot ${ot("defaultSlottedContent")}></slot>
        </span>
        ${Mt(r,e)}
    </button>
`;var Lc="form-associated-proxy",Mc="ElementInternals",Bc=Mc in window&&"setFormValue"in window[Mc].prototype,Nc=new WeakMap;function fr(r){let e=class extends r{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Bc}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?o.concat(Array.from(t)):o;return Object.freeze(i)}else return Dt}valueChanged(t,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),O.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),O.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Bc)return null;let t=Nc.get(this);return t||(t=this.attachInternals(),Nc.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,o,i){this.elementInternals?this.elementInternals.setValidity(t,o,i):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Lc),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Lc)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,o){this.elementInternals&&this.elementInternals.setFormValue(t,o||t)}_keypressHandler(t){switch(t.key){case Ie:if(this.form instanceof HTMLFormElement){let o=this.form.querySelector("[type=submit]");o?.click()}break}}stopPropagation(t){t.stopPropagation()}};return x({mode:"boolean"})(e.prototype,"disabled"),x({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),x({attribute:"current-value"})(e.prototype,"currentValue"),x(e.prototype,"name"),x({mode:"boolean"})(e.prototype,"required"),A(e.prototype,"value"),e}function Hc(r){class e extends fr(r){}class t extends e{constructor(...i){super(i),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(i,s){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),i!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(i,s){this.checked=this.currentChecked}updateForm(){let i=this.checked?this.value:null;this.setFormValue(i,i)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return x({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),x({attribute:"current-checked",converter:Ln})(t.prototype,"currentChecked"),A(t.prototype,"defaultChecked"),A(t.prototype,"checked"),t}var Yn=class extends ne{},Yi=class extends fr(Yn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Se=class extends Yi{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;let e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(o=>{o.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(o=>{o.removeEventListener("click",this.handleClick)})}};p([x({mode:"boolean"})],Se.prototype,"autofocus",void 0);p([x({attribute:"form"})],Se.prototype,"formId",void 0);p([x],Se.prototype,"formaction",void 0);p([x],Se.prototype,"formenctype",void 0);p([x],Se.prototype,"formmethod",void 0);p([x({mode:"boolean"})],Se.prototype,"formnovalidate",void 0);p([x],Se.prototype,"formtarget",void 0);p([x],Se.prototype,"type",void 0);p([A],Se.prototype,"defaultSlottedContent",void 0);var Ur=class{};p([x({attribute:"aria-expanded"})],Ur.prototype,"ariaExpanded",void 0);p([x({attribute:"aria-pressed"})],Ur.prototype,"ariaPressed",void 0);ge(Ur,P);ge(Se,it,Ur);var jc=(r,e)=>ie`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,o)=>t.keypressHandler(o.event)}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ot("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var Zn=class extends ne{},Zi=class extends Hc(Zn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var mr=class extends Zi{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case $e:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};p([x({attribute:"readonly",mode:"boolean"})],mr.prototype,"readOnly",void 0);p([A],mr.prototype,"defaultSlottedNodes",void 0);p([A],mr.prototype,"indeterminate",void 0);function Jn(r){return Wi(r)&&(r.getAttribute("role")==="option"||r instanceof HTMLOptionElement)}var _e=class extends ne{constructor(e,t,o,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),T.notify(this,"value")}get value(){var e;return T.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};p([A],_e.prototype,"checked",void 0);p([A],_e.prototype,"content",void 0);p([A],_e.prototype,"defaultSelected",void 0);p([x({mode:"boolean"})],_e.prototype,"disabled",void 0);p([x({attribute:"selected",mode:"boolean"})],_e.prototype,"selectedAttribute",void 0);p([A],_e.prototype,"selected",void 0);p([x({attribute:"value",mode:"fromView"})],_e.prototype,"initialValue",void 0);var Nt=class{};p([A],Nt.prototype,"ariaChecked",void 0);p([A],Nt.prototype,"ariaPosInSet",void 0);p([A],Nt.prototype,"ariaSelected",void 0);p([A],Nt.prototype,"ariaSetSize",void 0);ge(Nt,P);ge(_e,it,Nt);var ae=class r extends ne{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return T.track(this,"options"),this._options}set options(e){this._options=e,T.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,i=e+o,s=null;switch(o){case-1:{s=this.options.reduceRight((n,a,l)=>!n&&!a.disabled&&l<i?a:n,s);break}case 1:{s=this.options.reduce((n,a,l)=>!n&&!a.disabled&&l>i?a:n,s);break}}return this.options.indexOf(s)}handleChange(e,t){switch(t){case"selected":{r.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,r.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case Ve:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Re:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Te:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case De:{e.preventDefault(),this.selectLastOption();break}case Pe:return this.focusAndScrollOptionIntoView(),!0;case Ie:case Fe:return!0;case $e:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((o=this.options[this.selectedIndex])===null||o===void 0)&&o.disabled&&typeof e=="number"){let i=this.getSelectableIndex(e,t),s=i>-1?i:e;this.selectedIndex=s,t===s&&this.selectedIndexChanged(t,s);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let i=t.filter(r.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(s=>{let n=T.getNotifier(s);n.unsubscribe(this,"selected"),s.selected=i.includes(s),n.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>!o.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Gi(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>o.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,o;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,s)=>(Jn(s)&&i.push(s),i),[]);let o=`${this.options.length}`;this.options.forEach((i,s)=>{i.id||(i.id=nt("option-")),i.ariaPosInSet=`${s+1}`,i.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let o=this.getTypeaheadMatches();if(o.length){let i=this.options.indexOf(o[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}};ae.slottedOptionFilter=r=>Jn(r)&&!r.hidden;ae.TYPE_AHEAD_TIMEOUT_MS=1e3;p([x({mode:"boolean"})],ae.prototype,"disabled",void 0);p([A],ae.prototype,"selectedIndex",void 0);p([A],ae.prototype,"selectedOptions",void 0);p([A],ae.prototype,"slottedOptions",void 0);p([A],ae.prototype,"typeaheadBuffer",void 0);var at=class{};p([A],at.prototype,"ariaActiveDescendant",void 0);p([A],at.prototype,"ariaDisabled",void 0);p([A],at.prototype,"ariaExpanded",void 0);p([A],at.prototype,"ariaMultiSelectable",void 0);ge(at,P);ge(ae,at);var Fo={above:"above",below:"below"};function Vo(r){let e=r.parentElement;if(e)return e;{let t=r.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function zc(r,e){let t=e;for(;t!==null;){if(t===r)return!0;t=Vo(t)}return!1}var lt=document.createElement("div");function Uh(r){return r instanceof Lt}var Do=class{setProperty(e,t){O.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){O.queueUpdate(()=>this.target.removeProperty(e))}},ea=class extends Do{constructor(e){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(W.create([t]))}},ta=class extends Do{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},ra=class extends Do{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},Ji=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),T.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),O.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),O.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let i=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[i].style}else this.target=null}};p([A],Ji.prototype,"target",void 0);var oa=class{constructor(e){this.target=e.style}setProperty(e,t){O.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){O.queueUpdate(()=>this.target.removeProperty(e))}},Ht=class r{setProperty(e,t){r.properties[e]=t;for(let o of r.roots.values())gr.getOrCreate(r.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete r.properties[e];for(let t of r.roots.values())gr.getOrCreate(r.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=r;if(!t.has(e)){t.add(e);let o=gr.getOrCreate(this.normalizeRoot(e));for(let i in r.properties)o.setProperty(i,r.properties[i])}}static unregisterRoot(e){let{roots:t}=r;if(t.has(e)){t.delete(e);let o=gr.getOrCreate(r.normalizeRoot(e));for(let i in r.properties)o.removeProperty(i)}}static normalizeRoot(e){return e===lt?document:e}};Ht.roots=new Set;Ht.properties={};var Kn=new WeakMap,qh=O.supportsAdoptedStyleSheets?ea:Ji,gr=Object.freeze({getOrCreate(r){if(Kn.has(r))return Kn.get(r);let e;return r===lt?e=new Ht:r instanceof Document?e=O.supportsAdoptedStyleSheets?new ta:new ra:Uh(r)?e=new qh(r):e=new oa(r),Kn.set(r,e),e}});var qe=class r extends ur{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=r.uniqueId(),r.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new r({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return r.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=be.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof r&&(t=this.alias(t)),be.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),be.existsFor(e)&&be.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(lt,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!be.existsFor(t)&&be.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(o=>o.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};qe.uniqueId=(()=>{let r=0;return()=>(r++,r.toString(16))})();qe.tokensById=new Map;var ia=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){gr.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(be.getOrCreate(t).get(e)))}remove(e,t){gr.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},sa=class{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=T.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,_t))}},na=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),T.getNotifier(this).notify(e.id))}get(e){return T.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}},Po=new WeakMap,_o=new WeakMap,be=class r{constructor(e){this.target=e,this.store=new na,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,o)=>{let i=qe.getTokenById(o);if(i&&(i.notify(this.target),qe.isCSSDesignToken(i))){let s=this.parent,n=this.isReflecting(i);if(s){let a=s.get(i),l=t.get(i);a!==l&&!n?this.reflectToCSS(i):a===l&&n&&this.stopReflectToCSS(i)}else n||this.reflectToCSS(i)}}},Po.set(e,this),T.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Lt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Po.get(e)||new r(e)}static existsFor(e){return Po.has(e)}static findParent(e){if(lt!==e.target){let t=Vo(e.target);for(;t!==null;){if(Po.has(t))return Po.get(t);t=Vo(t)}return r.getOrCreate(lt)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==lt?r.getOrCreate(lt):null}while(o!==null);return null}get parent(){return _o.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let o=this.getRaw(e);if(o!==void 0)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=r.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){qe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),qe.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=r.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&_o.get(this).removeChild(this)}appendChild(e){e.parent&&_o.get(e).removeChild(e);let t=this.children.filter(o=>e.contains(o));_o.set(e,this),this.children.push(e),t.forEach(o=>e.appendChild(o)),T.getNotifier(this.store).subscribe(e);for(let[o,i]of this.store.all())e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):i)}removeChild(e){let t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),T.getNotifier(this.store).unsubscribe(e),e.parent===this?_o.delete(e):!1}contains(e){return zc(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),r.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),r.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=qe.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);qe.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new sa(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};be.cssCustomPropertyReflector=new ia;p([A],be.prototype,"children",void 0);function Gh(r){return qe.from(r)}var Lo=Object.freeze({create:Gh,notifyConnection(r){return!r.isConnected||!be.existsFor(r)?!1:(be.getOrCreate(r).bind(),!0)},notifyDisconnection(r){return r.isConnected||!be.existsFor(r)?!1:(be.getOrCreate(r).unbind(),!0)},registerRoot(r=lt){Ht.registerRoot(r)},unregisterRoot(r=lt){Ht.unregisterRoot(r)}});var aa=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),la=new Map,Ki=new Map,qr=null,Mo=_.createInterface(r=>r.cachedCallback(e=>(qr===null&&(qr=new es(null,e)),qr))),da=Object.freeze({tagFor(r){return Ki.get(r)},responsibleFor(r){let e=r.$$designSystem$$;return e||_.findResponsibleContainer(r).get(Mo)},getOrCreate(r){if(!r)return qr===null&&(qr=_.getOrCreateDOMContainer().get(Mo)),qr;let e=r.$$designSystem$$;if(e)return e;let t=_.getOrCreateDOMContainer(r);if(t.has(Mo,!1))return t.get(Mo);{let o=new es(r,t);return t.register(hr.instance(Mo,o)),o}}});function Wh(r,e,t){return typeof r=="string"?{name:r,type:e,callback:t}:r}var es=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>aa.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],i=this.disambiguate,s=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(a,l,c){let d=Wh(a,l,c),{name:u,callback:m,baseClass:y}=d,{type:w}=d,$=u,Q=la.get($),Ue=!0;for(;Q;){let Ae=i($,w,Q);switch(Ae){case aa.ignoreDuplicate:return;case aa.definitionCallbackOnly:Ue=!1,Q=void 0;break;default:$=Ae,Q=la.get($);break}}Ue&&((Ki.has(w)||w===ne)&&(w=class extends w{}),la.set($,w),Ki.set(w,$),y&&Ki.set(y,$)),o.push(new ca(t,$,w,s,m,Ue))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Lo.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(let a of o)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},ca=class{constructor(e,t,o,i,s,n){this.container=e,this.name=t,this.type=o,this.shadowRootMode=i,this.callback=s,this.willDefine=n,this.definition=null}definePresentation(e){qi.define(this.name,e,this.container)}defineElement(e){this.definition=new rt(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return da.tagFor(e)}};var Uc=(r,e)=>ie`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Bt(r,e)}
        <span class="content" part="content">
            <slot ${ot("content")}></slot>
        </span>
        ${Mt(r,e)}
    </template>
`;var br=class extends ae{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,i;this.ariaActiveDescendant=(i=(o=this.options[t])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,o)=>{t.checked=st(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=st(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=st(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,o)=>{t.checked=st(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case Ve:{this.checkFirstOption(o);return}case Re:{this.checkNextOption(o);return}case Te:{this.checkPreviousOption(o);return}case De:{this.checkLastOption(o);return}case Pe:return this.focusAndScrollOptionIntoView(),!0;case Fe:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case $e:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,(o=this.options)===null||o===void 0||o.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let i=Math.max(0,parseInt((o=t?.toFixed())!==null&&o!==void 0?o:"",10));i!==t&&O.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(o=>!o.disabled),t=!e.every(o=>o.selected);e.forEach(o=>o.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let o=this.getTypeaheadMatches(),i=this.options.indexOf(o[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};p([A],br.prototype,"activeIndex",void 0);p([x({mode:"boolean"})],br.prototype,"multiple",void 0);p([x({converter:zr})],br.prototype,"size",void 0);var ua=class extends ne{},ts=class extends fr(ua){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var ha={email:"email",password:"password",tel:"tel",text:"text",url:"url"};var le=class extends ts{constructor(){super(...arguments),this.type=ha.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&O.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([x({attribute:"readonly",mode:"boolean"})],le.prototype,"readOnly",void 0);p([x({mode:"boolean"})],le.prototype,"autofocus",void 0);p([x],le.prototype,"placeholder",void 0);p([x],le.prototype,"type",void 0);p([x],le.prototype,"list",void 0);p([x({converter:zr})],le.prototype,"maxlength",void 0);p([x({converter:zr})],le.prototype,"minlength",void 0);p([x],le.prototype,"pattern",void 0);p([x({converter:zr})],le.prototype,"size",void 0);p([x({mode:"boolean"})],le.prototype,"spellcheck",void 0);p([A],le.prototype,"defaultSlottedNodes",void 0);var rs=class{};ge(rs,P);ge(le,it,rs);function qc(r,e,t){return r.nodeType!==Node.TEXT_NODE?!0:typeof r.nodeValue=="string"&&!!r.nodeValue.trim().length}var pa=class extends br{},os=class extends fr(pa){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var Ge=class extends os{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=nt("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,O.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return T.track(this,"value"),this._value}set value(e){var t,o,i,s,n,a,l;let c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let d=this._options.findIndex(y=>y.value===e),u=(i=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,m=(n=(s=this._options[d])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null;(d===-1||u!==m)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),T.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Fo.above:Fo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Fo.above?~~e.top:~~o}get displayValue(){var e,t;return T.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(o=>{T.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(o=>{T.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),(o=this.options)===null||o===void 0||o.forEach((i,s)=>{var n;let a=(n=this.proxy)===null||n===void 0?void 0:n.options.item(s);a&&(a.selected=i.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(ae.slottedOptionFilter),o=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case $e:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Ve:case De:{e.preventDefault();break}case Ie:{e.preventDefault(),this.open=!this.open;break}case Fe:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Pe:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Re||t===Te)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&T.notify(this,"displayValue")}};p([x({attribute:"open",mode:"boolean"})],Ge.prototype,"open",void 0);p([dc],Ge.prototype,"collapsible",null);p([A],Ge.prototype,"control",void 0);p([x({attribute:"position"})],Ge.prototype,"positionAttribute",void 0);p([A],Ge.prototype,"position",void 0);p([A],Ge.prototype,"maxHeight",void 0);var Bo=class{};p([A],Bo.prototype,"ariaControls",void 0);ge(Bo,at);ge(Ge,it,Bo);var Gc=(r,e)=>ie`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusin="${(t,o)=>t.focusinHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
        @mousedown="${(t,o)=>t.mousedownHandler(o.event)}"
    >
        ${xc(t=>t.collapsible,ie`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${se("control")}
                >
                    ${Bt(r,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Mt(r,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${se("listbox")}
        >
            <slot
                ${ot({filter:ae.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;var Wc=(r,e)=>ie`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${ot({property:"defaultSlottedNodes",filter:qc})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Bt(r,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${se("control")}
            />
            ${Mt(r,e)}
        </div>
    </template>
`;var We="not-allowed";var Xh=":host([hidden]){display:none}";function ct(r){return`${Xh}:host{display:${r}}`}var ke=Xi()?"focus-visible":"focus";function Xc(r){return da.getOrCreate(r).withPrefix("vscode")}function Yc(r){window.addEventListener("load",()=>{new MutationObserver(()=>{Qc(r)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Qc(r)})}function Qc(r){let e=getComputedStyle(document.body),t=document.querySelector("body");if(t){let o=t.getAttribute("data-vscode-theme-kind");for(let[i,s]of r){let n=e.getPropertyValue(i).toString();o==="vscode-high-contrast"?(n.length===0&&s.name.includes("background")&&(n="transparent"),s.name==="button-icon-hover-background"&&(n="transparent")):s.name==="contrast-active-border"&&(n="transparent"),s.setValueFor(t,n)}}}var Zc=new Map,Jc=!1;function v(r,e){let t=Lo.create(r);if(e){if(e.includes("--fake-vscode-token")){let o="id"+Math.random().toString(16).slice(2);e=`${e}-${o}`}Zc.set(e,t)}return Jc||(Yc(Zc),Jc=!0),t}var nw=v("background","--vscode-editor-background").withDefault("#1e1e1e"),U=v("border-width").withDefault(1),Kc=v("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),aw=v("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),vr=v("corner-radius").withDefault(0),z=v("design-unit").withDefault(4),dt=v("disabled-opacity").withDefault(.4),X=v("focus-border","--vscode-focusBorder").withDefault("#007fd4"),jt=v("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),lw=v("font-weight","--vscode-font-weight").withDefault("400"),ve=v("foreground","--vscode-foreground").withDefault("#cccccc"),Gr=v("input-height").withDefault("26"),is=v("input-min-width").withDefault("100px"),Xe=v("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Qe=v("type-ramp-base-line-height").withDefault("normal"),cw=v("type-ramp-minus1-font-size").withDefault("11px"),dw=v("type-ramp-minus1-line-height").withDefault("16px"),uw=v("type-ramp-minus2-font-size").withDefault("9px"),hw=v("type-ramp-minus2-line-height").withDefault("16px"),pw=v("type-ramp-plus1-font-size").withDefault("16px"),fw=v("type-ramp-plus1-line-height").withDefault("24px"),mw=v("scrollbarWidth").withDefault("10px"),gw=v("scrollbarHeight").withDefault("10px"),bw=v("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),vw=v("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),xw=v("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),yw=v("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),ww=v("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),ed=v("button-border","--vscode-button-border").withDefault("transparent"),fa=v("button-icon-background").withDefault("transparent"),td=v("button-icon-corner-radius").withDefault("5px"),rd=v("button-icon-outline-offset").withDefault(0),ma=v("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),od=v("button-icon-padding").withDefault("3px"),xr=v("button-primary-background","--vscode-button-background").withDefault("#0e639c"),ga=v("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),ba=v("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),ss=v("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),id=v("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),sd=v("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),nd=v("button-padding-horizontal").withDefault("11px"),ad=v("button-padding-vertical").withDefault("4px"),ns=v("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),va=v("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),ld=v("checkbox-corner-radius").withDefault(3),Cw=v("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),zt=v("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),Wr=v("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),$w=v("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Sw=v("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),No=v("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),yr=v("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),kw=v("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),cd=v("dropdown-list-max-height").withDefault("200px"),as=v("input-background","--vscode-input-background").withDefault("#3c3c3c"),dd=v("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Ow=v("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Aw=v("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Ew=v("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Rw=v("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Tw=v("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Iw=v("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Fw=v("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Vw=v("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Dw=v("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Pw=v("tag-corner-radius").withDefault("2px");var Qh=fe`
	${ct("inline-flex")} :host {
		outline: none;
		font-family: ${jt};
		font-size: ${Xe};
		line-height: ${Qe};
		color: ${ga};
		background: ${xr};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${ad} ${nd};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${U} * 1px) solid ${ed};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${ba};
	}
	:host(:active) {
		background: ${xr};
	}
	.control:${ke} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: calc(${U} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${dt};
		background: ${xr};
		cursor: ${We};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${z} * 4px);
		height: calc(${z} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Yh=fe`
	:host([appearance='primary']) {
		background: ${xr};
		color: ${ga};
	}
	:host([appearance='primary']:hover) {
		background: ${ba};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${xr};
	}
	:host([appearance='primary']) .control:${ke} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${xr};
	}
`,Zh=fe`
	:host([appearance='secondary']) {
		background: ${ss};
		color: ${id};
	}
	:host([appearance='secondary']:hover) {
		background: ${sd};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${ss};
	}
	:host([appearance='secondary']) .control:${ke} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${ss};
	}
`,Jh=fe`
	:host([appearance='icon']) {
		background: ${fa};
		border-radius: ${td};
		color: ${ve};
	}
	:host([appearance='icon']:hover) {
		background: ${ma};
		outline: 1px dotted ${Kc};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${od};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${ma};
	}
	:host([appearance='icon']) .control:${ke} {
		outline: calc(${U} * 1px) solid ${X};
		outline-offset: ${rd};
	}
	:host([appearance='icon'][disabled]) {
		background: ${fa};
	}
`,ud=(r,e)=>fe`
	${Qh}
	${Yh}
	${Zh}
	${Jh}
`;var ls=class extends Se{connectedCallback(){if(super.connectedCallback(),!this.appearance){let e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,o){e==="appearance"&&o==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=o),e==="disabled"&&(this.disabled=o!==null)}};p([x],ls.prototype,"appearance",void 0);var xa=ls.compose({baseName:"button",template:_c,styles:ud,shadowOptions:{delegatesFocus:!0}});var hd=(r,e)=>fe`
	${ct("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${z} * 1px) 0;
		user-select: none;
		font-size: ${Xe};
		line-height: ${Qe};
	}
	.control {
		position: relative;
		width: calc(${z} * 4px + 2px);
		height: calc(${z} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${ld} * 1px);
		border: calc(${U} * 1px) solid ${va};
		background: ${ns};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${jt};
		color: ${ve};
		padding-inline-start: calc(${z} * 2px + 2px);
		margin-inline-end: calc(${z} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${ve};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${ve};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${ns};
		border-color: ${va};
	}
	:host(:enabled) .control:active {
		background: ${ns};
		border-color: ${X};
	}
	:host(:${ke}) .control {
		border: calc(${U} * 1px) solid ${X};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${We};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${dt};
	}
`;var ya=class extends mr{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}},wa=ya.compose({baseName:"checkbox",template:jc,styles:hd,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`});var pd=(r,e)=>fe`
	${ct("inline-flex")} :host {
		background: ${No};
		box-sizing: border-box;
		color: ${ve};
		contain: contents;
		font-family: ${jt};
		height: calc(${Gr} * 1px);
		position: relative;
		user-select: none;
		min-width: ${is};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${U} * 1px) solid ${yr};
		border-radius: calc(${vr} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Xe};
		line-height: ${Qe};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${No};
		border: calc(${U} * 1px) solid ${X};
		border-radius: calc(${vr} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${cd};
		padding: 0 0 calc(${z} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${ke}) .control {
		border-color: ${X};
	}
	:host(:not([disabled]):hover) {
		background: ${No};
		border-color: ${yr};
	}
	:host(:${ke}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${zt};
		border: calc(${U} * 1px) solid ${X};
		color: ${Wr};
	}
	:host([disabled]) {
		cursor: ${We};
		opacity: ${dt};
	}
	:host([disabled]) .control {
		cursor: ${We};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${No};
		color: ${ve};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${X};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${X};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Gr} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Gr} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${z} * 4px);
		min-width: calc(${z} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;var Ca=class extends Ge{},$a=Ca.compose({baseName:"dropdown",template:Gc,styles:pd,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`});var fd=(r,e)=>fe`
	${ct("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${vr};
		border: calc(${U} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ve};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Xe};
		line-height: ${Qe};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${z} / 2) * 1px)
			calc((${z} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${ke}) {
		border-color: ${X};
		background: ${zt};
		color: ${ve};
	}
	:host([aria-selected='true']) {
		background: ${zt};
		border: calc(${U} * 1px) solid ${X};
		color: ${Wr};
	}
	:host(:active) {
		background: ${zt};
		color: ${Wr};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${zt};
		border: calc(${U} * 1px) solid ${X};
		color: ${Wr};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${zt};
		color: ${ve};
	}
	:host([disabled]) {
		cursor: ${We};
		opacity: ${dt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;var Sa=class extends _e{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}},ka=Sa.compose({baseName:"option",template:Uc,styles:fd});var md=(r,e)=>fe`
	${ct("inline-block")} :host {
		font-family: ${jt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${dd};
		background: ${as};
		border-radius: calc(${vr} * 1px);
		border: calc(${U} * 1px) solid ${yr};
		height: calc(${Gr} * 1px);
		min-width: ${is};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${z} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${z} * 2px + 1px);
		font-size: ${Xe};
		line-height: ${Qe};
	}
	.control:hover,
	.control:${ke},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${ve};
		cursor: pointer;
		font-size: ${Xe};
		line-height: ${Qe};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${z} * 4px);
		height: calc(${z} * 4px);
	}
	.start {
		margin-inline-start: calc(${z} * 2px);
	}
	.end {
		margin-inline-end: calc(${z} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${as};
		border-color: ${yr};
	}
	:host(:active:not([disabled])) .root {
		background: ${as};
		border-color: ${X};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${X};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${We};
	}
	:host([disabled]) {
		opacity: ${dt};
	}
	:host([disabled]) .control {
		border-color: ${yr};
	}
`;var Oa=class extends le{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}},Aa=Oa.compose({baseName:"text-field",template:Wc,styles:md,shadowOptions:{delegatesFocus:!0}});var $t=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();$t.trustedTypes===void 0&&($t.trustedTypes={createPolicy:(r,e)=>e});var gd={configurable:!1,enumerable:!1,writable:!1};$t.FAST===void 0&&Reflect.defineProperty($t,"FAST",Object.assign({value:Object.create(null)},gd));var wr=$t.FAST;if(wr.getById===void 0){let r=Object.create(null);Reflect.defineProperty(wr,"getById",Object.assign({value(e,t){let o=r[e];return o===void 0&&(o=t?r[e]=t():null),o}},gd))}var Ut=Object.freeze([]);function cs(){let r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let o=Reflect.getPrototypeOf(e);for(;t===void 0&&o!==null;)t=r.get(o),o=Reflect.getPrototypeOf(o);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}var Ea=$t.FAST.getById(1,()=>{let r=[],e=[];function t(){if(e.length)throw e.shift()}function o(n){try{n.call()}catch(a){e.push(a),setTimeout(t,0)}}function i(){let a=0;for(;a<r.length;)if(o(r[a]),a++,a>1024){for(let l=0,c=r.length-a;l<c;l++)r[l]=r[l+a];r.length-=a,a=0}r.length=0}function s(n){r.length<1&&$t.requestAnimationFrame(i),r.push(n)}return Object.freeze({enqueue:s,process:i})}),bd=$t.trustedTypes.createPolicy("fast-html",{createHTML:r=>r}),Ra=bd,Ho=`fast-${Math.random().toString(36).substring(2,8)}`,Ta=`${Ho}{`,ds=`}${Ho}`,S=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(r){if(Ra!==bd)throw new Error("The HTML policy can only be set once.");Ra=r},createHTML(r){return Ra.createHTML(r)},isMarker(r){return r&&r.nodeType===8&&r.data.startsWith(Ho)},extractDirectiveIndexFromMarker(r){return parseInt(r.data.replace(`${Ho}:`,""))},createInterpolationPlaceholder(r){return`${Ta}${r}${ds}`},createCustomAttributePlaceholder(r,e){return`${r}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(r){return`<!--${Ho}:${r}-->`},queueUpdate:Ea.enqueue,processUpdates:Ea.process,nextUpdate(){return new Promise(Ea.enqueue)},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)},removeChildNodes(r){for(let e=r.firstChild;e!==null;e=r.firstChild)r.removeChild(e)},createTemplateWalker(r){return document.createTreeWalker(r,133,null,!1)}});var Xr=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);o!==-1&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(t===void 0){let i=this.sub1,s=this.sub2;i!==void 0&&i.handleChange(o,e),s!==void 0&&s.handleChange(o,e)}else for(let i=0,s=t.length;i<s;++i)t[i].handleChange(o,e)}},Qr=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];o!==void 0&&o.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var o;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new Xr(this.source)),i.subscribe(e)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new Xr(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(e)}};var k=wr.getById(2,()=>{let r=/(:|&&|\|\||if)/,e=new WeakMap,t=S.queueUpdate,o,i=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=i(c):e.set(c,d=new Qr(c))),d}let n=cs();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return o!==void 0&&o.watch(d,this.name),d[this.field]}setValue(d,u){let m=this.field,y=d[m];if(y!==u){d[m]=u;let w=d[this.callback];typeof w=="function"&&w.call(d,y,u),s(d).notify(this.name)}}}class l extends Xr{constructor(d,u,m=!1){super(d,u),this.binding=d,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();let m=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let y=this.binding(d,u);return o=m,y}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){let m=this.last,y=s(d),w=m===null?this.first:{};if(w.propertySource=d,w.propertyName=u,w.notifier=y,y.subscribe(this,u),m!==null){if(!this.needsRefresh){let $;o=void 0,$=m.propertySource[m.propertyName],o=this,d===$&&(this.needsRefresh=!0)}m.next=w}this.last=w}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{let u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:s,track(c,d){o!==void 0&&o.watch(c,d)},trackVolatile(){o!==void 0&&(o.needsRefresh=!0)},notify(c,d){s(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),n(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:n,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return r.test(c.toString())}})});function F(r,e){k.defineProperty(r,e)}function xd(r,e,t){return Object.assign({},t,{get:function(){return k.trackVolatile(),t.get.apply(this)}})}var vd=wr.getById(3,()=>{let r=null;return{get(){return r},set(e){r=e}}}),qt=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return vd.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){vd.set(e)}};k.defineProperty(qt.prototype,"index");k.defineProperty(qt.prototype,"length");var Gt=Object.seal(new qt);var Yr=class{constructor(){this.targetIndex=0}},Zr=class extends Yr{constructor(){super(...arguments),this.createPlaceholder=S.createInterpolationPlaceholder}},Jr=class extends Yr{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return S.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function Kh(r,e){this.source=r,this.context=e,this.bindingObserver===null&&(this.bindingObserver=k.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(r,e))}function ep(r,e){this.source=r,this.context=e,this.target.addEventListener(this.targetName,this)}function tp(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function rp(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let r=this.target.$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}function op(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ip(r){S.setAttribute(this.target,this.targetName,r)}function sp(r){S.setBooleanAttribute(this.target,this.targetName,r)}function np(r){if(r==null&&(r=""),r.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=r.create():this.target.$fastTemplate!==r&&(e.isComposed&&(e.remove(),e.unbind()),e=r.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=r)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=r}}function ap(r){this.target[this.targetName]=r}function lp(r){let e=this.classVersions||Object.create(null),t=this.target,o=this.version||0;if(r!=null&&r.length){let i=r.split(/\s+/);for(let s=0,n=i.length;s<n;++s){let a=i[s];a!==""&&(e[a]=o,t.classList.add(a))}}if(this.classVersions=e,this.version=o+1,o!==0){o-=1;for(let i in e)e[i]===o&&t.classList.remove(i)}}var Cr=class extends Zr{constructor(e){super(),this.binding=e,this.bind=Kh,this.unbind=tp,this.updateTarget=ip,this.isBindingVolatile=k.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ap,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(o,i)=>S.createHTML(t(o,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=sp;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=ep,this.unbind=op;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=lp);break}}targetAtContent(){this.updateTarget=np,this.unbind=rp}createBehavior(e){return new Ia(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},Ia=class{constructor(e,t,o,i,s,n,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=s,this.updateTarget=n,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){qt.setEvent(e);let t=this.binding(this.source,this.context);qt.setEvent(null),t!==!0&&e.preventDefault()}};var Fa=null,Va=class r{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Fa=this}static borrow(e){let t=Fa||new r;return t.directives=e,t.reset(),Fa=null,t}};function cp(r){if(r.length===1)return r[0];let e,t=r.length,o=r.map(n=>typeof n=="string"?()=>n:(e=n.targetName||e,n.binding)),i=(n,a)=>{let l="";for(let c=0;c<t;++c)l+=o[c](n,a);return l},s=new Cr(i);return s.targetName=e,s}var dp=ds.length;function wd(r,e){let t=e.split(Ta);if(t.length===1)return null;let o=[];for(let i=0,s=t.length;i<s;++i){let n=t[i],a=n.indexOf(ds),l;if(a===-1)l=n;else{let c=parseInt(n.substring(0,a));o.push(r.directives[c]),l=n.substring(a+dp)}l!==""&&o.push(l)}return o}function yd(r,e,t=!1){let o=e.attributes;for(let i=0,s=o.length;i<s;++i){let n=o[i],a=n.value,l=wd(r,a),c=null;l===null?t&&(c=new Cr(()=>a),c.targetName=n.name):c=cp(l),c!==null&&(e.removeAttributeNode(n),i--,s--,r.addFactory(c))}}function up(r,e,t){let o=wd(r,e.textContent);if(o!==null){let i=e;for(let s=0,n=o.length;s<n;++s){let a=o[s],l=s===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",r.captureContentBinding(a)),i=l,r.targetIndex++,l!==e&&t.nextNode()}r.targetIndex--}}function Cd(r,e){let t=r.content;document.adoptNode(t);let o=Va.borrow(e);yd(o,r,!0);let i=o.behaviorFactories;o.reset();let s=S.createTemplateWalker(t),n;for(;n=s.nextNode();)switch(o.targetIndex++,n.nodeType){case 1:yd(o,n);break;case 3:up(o,n,s);break;case 8:S.isMarker(n)&&o.addFactory(e[S.extractDirectiveIndexFromMarker(n)])}let a=0;(S.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let l=o.behaviorFactories;return o.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}var Da=document.createRange(),us=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let o=e.parentNode,i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,o.insertBefore(i,e),i=s;o.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);let s=this.behaviors,n=this.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}bind(e,t){let o=this.behaviors;if(this.source!==e)if(this.source!==null){let i=this.source;this.source=e,this.context=t;for(let s=0,n=o.length;s<n;++s){let a=o[s];a.unbind(i),a.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i)o[i].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Da.setStartBefore(e[0].firstChild),Da.setEndAfter(e[e.length-1].lastChild),Da.deleteContents();for(let t=0,o=e.length;t<o;++t){let i=e[t],s=i.behaviors,n=i.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}}}};var hs=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c,d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=S.createHTML(d);let m=c.content.firstElementChild;m!==null&&m.tagName==="TEMPLATE"&&(c=m)}else c=d;let u=Cd(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),s=S.createTemplateWalker(t),n=0,a=this.targetOffset,l=s.nextNode();for(let c=o.length;n<c;++n){let d=o[n],u=d.targetIndex;for(;l!==null;)if(a===u){i[n]=d.createBehavior(l);break}else l=s.nextNode(),a++}if(this.hasHostBehaviors){let c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++n)i[n]=c[d].createBehavior(e)}return new us(t,i)}render(e,t,o){typeof t=="string"&&(t=document.getElementById(t)),o===void 0&&(o=t);let i=this.create(o);return i.bind(e,Gt),i.appendTo(t),i}},hp=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function St(r,...e){let t=[],o="";for(let i=0,s=r.length-1;i<s;++i){let n=r[i],a=e[i];if(o+=n,a instanceof hs){let l=a;a=()=>l}if(typeof a=="function"&&(a=new Cr(a)),a instanceof Zr){let l=hp.exec(n);l!==null&&(a.targetName=l[2])}a instanceof Yr?(o+=a.createPlaceholder(t.length),t.push(a)):o+=a}return o+=r[r.length-1],new hs(o,t)}var q=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};q.create=(()=>{if(S.supportsAdoptedStyleSheets){let r=new Map;return e=>new Pa(e,r)}return r=>new _a(r)})();function La(r){return r.map(e=>e instanceof q?La(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function $d(r){return r.map(e=>e instanceof q?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var Sd=(r,e)=>{r.adoptedStyleSheets=[...r.adoptedStyleSheets,...e]},kd=(r,e)=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(S.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Sd=(r,e)=>{r.adoptedStyleSheets.push(...e)},kd=(r,e)=>{for(let t of e){let o=r.adoptedStyleSheets.indexOf(t);o!==-1&&r.adoptedStyleSheets.splice(o,1)}}}catch{}var Pa=class extends q{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=$d(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=La(e).map(o=>{if(o instanceof CSSStyleSheet)return o;let i=t.get(o);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(o),t.set(o,i)),i})}return this._styleSheets}addStylesTo(e){Sd(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){kd(e,this.styleSheets),super.removeStylesFrom(e)}},pp=0;function fp(){return`fast-style-class-${++pp}`}var _a=class extends q{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=$d(e),this.styleSheets=La(e),this.styleClass=fp()}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){let s=document.createElement("style");s.innerHTML=t[i],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var jo=Object.freeze({locate:cs()}),Od={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}},Ad={toView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e.toString()},fromView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e}},ps=class r{constructor(e,t,o=t.toLowerCase(),i="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&s===void 0&&(this.converter=Od)}setValue(e,t){let o=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return k.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||t==="fromView"||S.queueUpdate(()=>{o.add(e);let i=e[this.fieldName];switch(t){case"reflect":let s=this.converter;S.setAttribute(e,this.attribute,s!==void 0?s.toView(i):i);break;case"boolean":S.setBooleanAttribute(e,this.attribute,i);break}o.delete(e)})}static collect(e,...t){let o=[];t.push(jo.locate(e));for(let i=0,s=t.length;i<s;++i){let n=t[i];if(n!==void 0)for(let a=0,l=n.length;a<l;++a){let c=n[a];typeof c=="string"?o.push(new r(e,c)):o.push(new r(e,c.property,c.attribute,c.mode,c.converter))}}return o}};function E(r,e){let t;function o(i,s){arguments.length>1&&(t.property=s),jo.locate(i.constructor).push(t)}if(arguments.length>1){t={},o(r,e);return}return t=r===void 0?{}:r,o}var Ed={mode:"open"},Rd={},Ma=wr.getById(4,()=>{let r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)}})}),ut=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=ps.collect(e,t.attributes),i=new Array(o.length),s={},n={};for(let a=0,l=o.length;a<l;++a){let c=o[a];i[a]=c.attribute,s[c.name]=c,n[c.attribute]=c}this.attributes=o,this.observedAttributes=i,this.propertyLookup=s,this.attributeLookup=n,this.shadowOptions=t.shadowOptions===void 0?Ed:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Ed),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Rd:Object.assign(Object.assign({},Rd),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?q.create(t.styles):t.styles instanceof q?t.styles:q.create([t.styles])}get isDefined(){return!!Ma.getByType(this.type)}define(e=customElements){let t=this.type;if(Ma.register(this)){let o=this.attributes,i=t.prototype;for(let s=0,n=o.length;s<n;++s)k.defineProperty(i,o[s]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};ut.forType=Ma.getByType;var Td=new WeakMap,mp={bubbles:!0,composed:!0,cancelable:!0};function Ba(r){return r.shadowRoot||Td.get(r)||null}var fs=class r extends Qr{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(o!==void 0){let s=e.attachShadow(o);o.mode==="closed"&&Td.set(e,s)}let i=k.getAccessors(e);if(i.length>0){let s=this.boundObservables=Object.create(null);for(let n=0,a=i.length;n<a;++n){let l=i[n].name,c=e[l];c!==void 0&&(delete e[l],s[l]=c)}}}get isConnected(){return k.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,k.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=Ba(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),o!==null&&this.addBehaviors(o)}}removeStyles(e){let t=Ba(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),o!==null&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let s=0;s<o;++s){let n=e[s];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),i.push(n))}if(this._isConnected){let s=this.element;for(let n=0;n<i.length;++n)i[n].bind(s,Gt)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(o===null)return;let i=e.length,s=[];for(let n=0;n<i;++n){let a=e[n];if(o.has(a)){let l=o.get(a)-1;l===0||t?o.delete(a)&&s.push(a):o.set(a,l)}}if(this._isConnected){let n=this.element;for(let a=0;a<s.length;++a)s[a].unbind(n)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Gt);let t=this.behaviors;if(t!==null)for(let[o]of t)o.bind(e,Gt);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let o=this.element;for(let[i]of t)i.unbind(o)}}onAttributeChangedCallback(e,t,o){let i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},mp),o))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let i=Object.keys(t);for(let s=0,n=i.length;s<n;++s){let a=i[s];e[a]=t[a]}this.boundObservables=null}let o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=Ba(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||S.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let o=ut.forType(e.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new r(e,o)}};function Id(r){return class extends r{constructor(){super(),fs.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}var Wt=Object.assign(Id(HTMLElement),{from(r){return Id(r)},define(r,e){return new ut(r,e).define().type}});var Xt=class{createCSS(){return""}createBehavior(){}};function Fd(r,e){let t=[],o="",i=[];for(let s=0,n=r.length-1;s<n;++s){o+=r[s];let a=e[s];if(a instanceof Xt){let l=a.createBehavior();a=a.createCSS(),l&&i.push(l)}a instanceof q||a instanceof CSSStyleSheet?(o.trim()!==""&&(t.push(o),o=""),t.push(a)):o+=a}return o+=r[r.length-1],o.trim()!==""&&t.push(o),{styles:t,behaviors:i}}function G(r,...e){let{styles:t,behaviors:o}=Fd(r,e),i=q.create(t);return o.length&&i.withBehaviors(...o),i}var Na=class extends Xt{constructor(e,t){super(),this.behaviors=t,this.css="";let o=e.reduce((i,s)=>(typeof s=="string"?this.css+=s:i.push(s),i),[]);o.length&&(this.styles=q.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}};function Ha(r,...e){let{styles:t,behaviors:o}=Fd(r,e);return new Na(t,o)}var ja=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function Le(r){return new Jr("fast-ref",ja,r)}var ms=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=k.getAccessors(e).some(o=>o.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Ut),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var za=class extends ms{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function gs(r){return typeof r=="string"&&(r={property:r}),new Jr("fast-slotted",za,r)}var Qt=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},bs=(r,e)=>St`
    <span
        part="end"
        ${Le("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Le("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,vs=(r,e)=>St`
    <span
        part="start"
        ${Le("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Le("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,J$=St`
    <span part="end" ${Le("endContainer")}>
        <slot
            name="end"
            ${Le("end")}
            @slotchange="${r=>r.handleEndContentChange()}"
        ></slot>
    </span>
`,K$=St`
    <span part="start" ${Le("startContainer")}>
        <slot
            name="start"
            ${Le("start")}
            @slotchange="${r=>r.handleStartContentChange()}"
        ></slot>
    </span>
`;function b(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}var Ua=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let o=Ua.get(t);o===void 0&&Ua.set(t,o=new Map),o.set(r,e)},Reflect.getOwnMetadata=function(r,e){let t=Ua.get(e);if(t!==void 0)return t.get(r)});var Xa=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,zd(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:i}=this;return this.container=this.key=void 0,o.registerResolver(i,new xe(i,e,t))}};function zo(r){let e=r.slice(),t=Object.keys(r),o=t.length,i;for(let s=0;s<o;++s)i=t[s],Ud(i)||(e[i]=r[i]);return e}var gp=Object.freeze({none(r){throw Error(`${r.toString()} not registered, did you forget to add @singleton()?`)},singleton(r){return new xe(r,1,r)},transient(r){return new xe(r,2,r)}}),qa=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:gp.singleton})}),Vd=new Map;function Dd(r){return e=>Reflect.getOwnMetadata(r,e)}var Pd=null,L=Object.freeze({createContainer(r){return new Uo(null,Object.assign({},qa.default,r))},findResponsibleContainer(r){let e=r.$$container$$;return e&&e.responsibleForOwnerRequests?e:L.findParentContainer(r)},findParentContainer(r){let e=new CustomEvent(jd,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return r.dispatchEvent(e),e.detail.container||L.getOrCreateDOMContainer()},getOrCreateDOMContainer(r,e){return r?r.$$container$$||new Uo(r,Object.assign({},qa.default,e,{parentLocator:L.findParentContainer})):Pd||(Pd=new Uo(null,Object.assign({},qa.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Dd("design:paramtypes"),getAnnotationParamtypes:Dd("di:paramtypes"),getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamtypes(r);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],r),e},getDependencies(r){let e=Vd.get(r);if(e===void 0){let t=r.inject;if(t===void 0){let o=L.getDesignParamtypes(r),i=L.getAnnotationParamtypes(r);if(o===void 0)if(i===void 0){let s=Object.getPrototypeOf(r);typeof s=="function"&&s!==Function.prototype?e=zo(L.getDependencies(s)):e=[]}else e=zo(i);else if(i===void 0)e=zo(o);else{e=zo(o);let s=i.length,n;for(let c=0;c<s;++c)n=i[c],n!==void 0&&(e[c]=n);let a=Object.keys(i);s=a.length;let l;for(let c=0;c<s;++c)l=a[c],Ud(l)||(e[l]=i[l])}}else e=zo(t);Vd.set(r,e)}return e},defineProperty(r,e,t,o=!1){let i=`$di_${e}`;Reflect.defineProperty(r,e,{get:function(){let s=this[i];if(s===void 0&&(s=(this instanceof HTMLElement?L.findResponsibleContainer(this):L.getOrCreateDOMContainer()).get(t),this[i]=s,o&&this instanceof Wt)){let a=this.$fastController,l=()=>{let d=L.findResponsibleContainer(this).get(t),u=this[i];d!==u&&(this[i]=s,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return s}})},createInterface(r,e){let t=typeof r=="function"?r:e,o=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||Bd,i=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,s=function(n,a,l){if(n==null||new.target!==void 0)throw new Error(`No registration for interface: '${s.friendlyName}'`);if(a)L.defineProperty(n,a,s,i);else{let c=L.getOrCreateAnnotationParamTypes(n);c[l]=s}};return s.$isInterface=!0,s.friendlyName=o??"(anonymous)",t!=null&&(s.register=function(n,a){return t(new Xa(n,a??s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject(...r){return function(e,t,o){if(typeof o=="number"){let i=L.getOrCreateAnnotationParamTypes(e),s=r[0];s!==void 0&&(i[o]=s)}else if(t)L.defineProperty(e,t,r[0]);else{let i=o?L.getOrCreateAnnotationParamTypes(o.value):L.getOrCreateAnnotationParamTypes(e),s;for(let n=0;n<r.length;++n)s=r[n],s!==void 0&&(i[n]=s)}}},transient(r){return r.register=function(t){return $r.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=vp){return r.register=function(o){return $r.singleton(r,r).register(o)},r.registerInRequestor=e.scoped,r}}),bp=L.createInterface("Container");function Cs(r){return function(e){let t=function(o,i,s){L.inject(t)(o,i,s)};return t.$isResolver=!0,t.resolve=function(o,i){return r(e,o,i)},t}}var oS=L.inject;var vp={scoped:!1};function xp(r){return function(e,t){t=!!t;let o=function(i,s,n){L.inject(o)(i,s,n)};return o.$isResolver=!0,o.resolve=function(i,s){return r(e,i,s,t)},o}}var iS=xp((r,e,t,o)=>t.getAll(r,o)),sS=Cs((r,e,t)=>()=>t.get(r)),nS=Cs((r,e,t)=>{if(t.has(r,!0))return t.get(r)});function Ya(r,e,t){L.inject(Ya)(r,e,t)}Ya.$isResolver=!0;Ya.resolve=()=>{};var aS=Cs((r,e,t)=>{let o=Hd(r,e),i=new xe(r,0,o);return t.registerResolver(r,i),o}),lS=Cs((r,e,t)=>Hd(r,e));function Hd(r,e){return e.getFactory(r).construct(e)}var xe=class{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let o=e.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(o=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||o===void 0?void 0:o.call(t,e))!==null&&i!==void 0?i:null;default:return null}}};function _d(r){return this.get(r)}function yp(r,e){return e(r)}var Qa=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return t===void 0?o=new this.Type(...this.dependencies.map(_d,e)):o=new this.Type(...this.dependencies.map(_d,e),...t),this.transformers==null?o:this.transformers.reduce(yp,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},wp={$isResolver:!0,resolve(r,e){return e}};function ws(r){return typeof r.register=="function"}function Cp(r){return ws(r)&&typeof r.registerInRequestor=="boolean"}function Ld(r){return Cp(r)&&r.registerInRequestor}function $p(r){return r.prototype!==void 0}var Sp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),jd="__DI_LOCATE_PARENT__",Ga=new Map,Uo=class r{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(bp,wp),e instanceof Node&&e.addEventListener(jd,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,o,i,s,n,a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!Nd(t))if(ws(t))t.register(this,a);else if($p(t))$r.singleton(t,t).register(this);else for(o=Object.keys(t),s=0,n=o.length;s<n;++s)i=t[o[s]],Nd(i)&&(ws(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(e,t){xs(e);let o=this.resolvers,i=o.get(e);return i==null?o.set(e,t):i instanceof xe&&i.strategy===4?i.state.push(t):o.set(e,new xe(e,4,[i,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(o==null)return!1;if(o.getFactory){let i=o.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(xs(e),e.resolve!==void 0)return e;let o=this,i;for(;o!=null;)if(i=o.resolvers.get(e),i==null){if(o.parent==null){let s=Ld(e)?this:o;return t?this.jitRegister(e,s):null}o=o.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(xs(e),e.$isResolver)return e.resolve(this,this);let t=this,o;for(;t!=null;)if(o=t.resolvers.get(e),o==null){if(t.parent==null){let i=Ld(e)?this:t;return o=this.jitRegister(e,i),o.resolve(t,this)}t=t.parent}else return o.resolve(t,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){xs(e);let o=this,i=o,s;if(t){let n=Ut;for(;i!=null;)s=i.resolvers.get(e),s!=null&&(n=n.concat(Md(s,i,o))),i=i.parent;return n}else for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i=i.parent,i==null)return Ut}else return Md(s,i,o);return Ut}getFactory(e){let t=Ga.get(e);if(t===void 0){if(kp(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ga.set(e,t=new Qa(e,L.getDependencies(e)))}return t}registerFactory(e,t){Ga.set(e,t)}createChild(e){return new r(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Sp.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(ws(e)){let o=e.register(t);if(!(o instanceof Object)||o.resolve==null){let i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}},Wa=new WeakMap;function zd(r){return function(e,t,o){if(Wa.has(o))return Wa.get(o);let i=r(e,t,o);return Wa.set(o,i),i}}var $r=Object.freeze({instance(r,e){return new xe(r,0,e)},singleton(r,e){return new xe(r,1,e)},transient(r,e){return new xe(r,2,e)},callback(r,e){return new xe(r,3,e)},cachedCallback(r,e){return new xe(r,3,zd(e))},aliasTo(r,e){return new xe(e,5,r)}});function xs(r){if(r==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Md(r,e,t){if(r instanceof xe&&r.strategy===4){let o=r.state,i=o.length,s=new Array(i);for(;i--;)s[i]=o[i].resolve(e,t);return s}return[r.resolve(e,t)]}var Bd="(anonymous)";function Nd(r){return typeof r=="object"&&r!==null||typeof r=="function"}var kp=function(){let r=new WeakMap,e=!1,t="",o=0;return function(i){return e=r.get(i),e===void 0&&(t=i.toString(),o=t.length,e=o>=29&&o<=100&&t.charCodeAt(o-1)===125&&t.charCodeAt(o-2)<=32&&t.charCodeAt(o-3)===93&&t.charCodeAt(o-4)===101&&t.charCodeAt(o-5)===100&&t.charCodeAt(o-6)===111&&t.charCodeAt(o-7)===99&&t.charCodeAt(o-8)===32&&t.charCodeAt(o-9)===101&&t.charCodeAt(o-10)===118&&t.charCodeAt(o-11)===105&&t.charCodeAt(o-12)===116&&t.charCodeAt(o-13)===97&&t.charCodeAt(o-14)===110&&t.charCodeAt(o-15)===88,r.set(i,e)),e}}(),ys={};function Ud(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{let e=ys[r];if(e!==void 0)return e;let t=r.length;if(t===0)return ys[r]=!1;let o=0;for(let i=0;i<t;++i)if(o=r.charCodeAt(i),i===0&&o===48&&t>1||o<48||o>57)return ys[r]=!1;return ys[r]=!0}default:return!1}}function qd(r){return`${r.toLowerCase()}:presentation`}var $s=new Map,ks=Object.freeze({define(r,e,t){let o=qd(r);$s.get(o)===void 0?$s.set(o,e):$s.set(o,!1),t.register($r.instance(o,e))},forTag(r,e){let t=qd(r),o=$s.get(t);return o===!1?L.findResponsibleContainer(e).get(t):o||null}}),Ss=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?q.create(t):t instanceof q?t:q.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var ht=class r extends Wt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=ks.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Za(this===r?class extends r{}:this,e,t)}};b([F],ht.prototype,"template",void 0);b([F],ht.prototype,"styles",void 0);function qo(r,e,t){return typeof r=="function"?r(e,t):r}var Za=class{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,i=this.overrideDefinition,n=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let l=new Ss(qo(o.template,a,o),qo(o.styles,a,o));a.definePresentation(l);let c=qo(o.shadowOptions,a,o);a.shadowRootMode&&(c?i.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:qo(o.elementOptions,a,o),shadowOptions:c,attributes:qo(o.attributes,a,o)})}})}};function Me(r,...e){let t=jo.locate(r);e.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(r.prototype,s,Object.getOwnPropertyDescriptor(o.prototype,s))}),jo.locate(o).forEach(s=>t.push(s))})}var N=class{};b([E({attribute:"aria-atomic"})],N.prototype,"ariaAtomic",void 0);b([E({attribute:"aria-busy"})],N.prototype,"ariaBusy",void 0);b([E({attribute:"aria-controls"})],N.prototype,"ariaControls",void 0);b([E({attribute:"aria-current"})],N.prototype,"ariaCurrent",void 0);b([E({attribute:"aria-describedby"})],N.prototype,"ariaDescribedby",void 0);b([E({attribute:"aria-details"})],N.prototype,"ariaDetails",void 0);b([E({attribute:"aria-disabled"})],N.prototype,"ariaDisabled",void 0);b([E({attribute:"aria-errormessage"})],N.prototype,"ariaErrormessage",void 0);b([E({attribute:"aria-flowto"})],N.prototype,"ariaFlowto",void 0);b([E({attribute:"aria-haspopup"})],N.prototype,"ariaHaspopup",void 0);b([E({attribute:"aria-hidden"})],N.prototype,"ariaHidden",void 0);b([E({attribute:"aria-invalid"})],N.prototype,"ariaInvalid",void 0);b([E({attribute:"aria-keyshortcuts"})],N.prototype,"ariaKeyshortcuts",void 0);b([E({attribute:"aria-label"})],N.prototype,"ariaLabel",void 0);b([E({attribute:"aria-labelledby"})],N.prototype,"ariaLabelledby",void 0);b([E({attribute:"aria-live"})],N.prototype,"ariaLive",void 0);b([E({attribute:"aria-owns"})],N.prototype,"ariaOwns",void 0);b([E({attribute:"aria-relevant"})],N.prototype,"ariaRelevant",void 0);b([E({attribute:"aria-roledescription"})],N.prototype,"ariaRoledescription",void 0);var Gd="form-associated-proxy",Wd="ElementInternals",Xd=Wd in window&&"setFormValue"in window[Wd].prototype,Qd=new WeakMap;function Os(r){let e=class extends r{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Xd}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?o.concat(Array.from(t)):o;return Object.freeze(i)}else return Ut}valueChanged(t,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),S.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),S.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Xd)return null;let t=Qd.get(this);return t||(t=this.attachInternals(),Qd.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,o,i){this.elementInternals?this.elementInternals.setValidity(t,o,i):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Gd),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Gd)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,o){this.elementInternals&&this.elementInternals.setFormValue(t,o||t)}_keypressHandler(t){switch(t.key){case Ie:if(this.form instanceof HTMLFormElement){let o=this.form.querySelector("[type=submit]");o?.click()}break}}stopPropagation(t){t.stopPropagation()}};return E({mode:"boolean"})(e.prototype,"disabled"),E({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),E({attribute:"current-value"})(e.prototype,"currentValue"),E(e.prototype,"name"),E({mode:"boolean"})(e.prototype,"required"),F(e.prototype,"value"),e}function Ja(r){return Wi(r)&&(r.getAttribute("role")==="option"||r instanceof HTMLOptionElement)}var ce=class extends ht{constructor(e,t,o,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),k.notify(this,"value")}get value(){var e;return k.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};b([F],ce.prototype,"checked",void 0);b([F],ce.prototype,"content",void 0);b([F],ce.prototype,"defaultSelected",void 0);b([E({mode:"boolean"})],ce.prototype,"disabled",void 0);b([E({attribute:"selected",mode:"boolean"})],ce.prototype,"selectedAttribute",void 0);b([F],ce.prototype,"selected",void 0);b([E({attribute:"value",mode:"fromView"})],ce.prototype,"initialValue",void 0);var Yt=class{};b([F],Yt.prototype,"ariaChecked",void 0);b([F],Yt.prototype,"ariaPosInSet",void 0);b([F],Yt.prototype,"ariaSelected",void 0);b([F],Yt.prototype,"ariaSetSize",void 0);Me(Yt,N);Me(ce,Qt,Yt);var J=class r extends ht{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return k.track(this,"options"),this._options}set options(e){this._options=e,k.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,i=e+o,s=null;switch(o){case-1:{s=this.options.reduceRight((n,a,l)=>!n&&!a.disabled&&l<i?a:n,s);break}case 1:{s=this.options.reduce((n,a,l)=>!n&&!a.disabled&&l>i?a:n,s);break}}return this.options.indexOf(s)}handleChange(e,t){switch(t){case"selected":{r.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,r.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case Ve:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Re:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Te:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case De:{e.preventDefault(),this.selectLastOption();break}case Pe:return this.focusAndScrollOptionIntoView(),!0;case Ie:case Fe:return!0;case $e:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((o=this.options[this.selectedIndex])===null||o===void 0)&&o.disabled&&typeof e=="number"){let i=this.getSelectableIndex(e,t),s=i>-1?i:e;this.selectedIndex=s,t===s&&this.selectedIndexChanged(t,s);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let i=t.filter(r.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(s=>{let n=k.getNotifier(s);n.unsubscribe(this,"selected"),s.selected=i.includes(s),n.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>!o.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Gi(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>o.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,o;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,s)=>(Ja(s)&&i.push(s),i),[]);let o=`${this.options.length}`;this.options.forEach((i,s)=>{i.id||(i.id=nt("option-")),i.ariaPosInSet=`${s+1}`,i.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let o=this.getTypeaheadMatches();if(o.length){let i=this.options.indexOf(o[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}};J.slottedOptionFilter=r=>Ja(r)&&!r.hidden;J.TYPE_AHEAD_TIMEOUT_MS=1e3;b([E({mode:"boolean"})],J.prototype,"disabled",void 0);b([F],J.prototype,"selectedIndex",void 0);b([F],J.prototype,"selectedOptions",void 0);b([F],J.prototype,"slottedOptions",void 0);b([F],J.prototype,"typeaheadBuffer",void 0);var Be=class{};b([F],Be.prototype,"ariaActiveDescendant",void 0);b([F],Be.prototype,"ariaDisabled",void 0);b([F],Be.prototype,"ariaExpanded",void 0);b([F],Be.prototype,"ariaMultiSelectable",void 0);Me(Be,N);Me(J,Be);var Zt={above:"above",below:"below"};var Ka=class extends J{},As=class extends Os(Ka){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Sr={inline:"inline",list:"list",both:"both",none:"none"};var Ne=class extends As{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=nt("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Sr.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Sr.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Sr.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),S.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return k.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,k.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return k.track(this,"value"),this._value}set value(e){var t,o,i;let s=`${this._value}`;if(this.$fastController.isConnected&&this.options){let n=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(t=this.options[this.selectedIndex])===null||t===void 0?void 0:t.text,l=(o=this.options[n])===null||o===void 0?void 0:o.text;this.selectedIndex=a!==l?n:this.selectedIndex,e=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||e}s!==e&&(this._value=e,super.valueChanged(s,e),k.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Sr.none)&&(this.filter="");let e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;let t=e.relatedTarget;if(this.isSameNode(t)){this.focus();return}(!this.options||!this.options.includes(t))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(t=>t.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){let t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(t=Pc(-1,this.options.length-1,t),t!==this.selectedIndex){this.selectedIndex=t;return}super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let e=this.options.findIndex(t=>t.getAttribute("selected")!==null||t.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;let t=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Zt.above:Zt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Zt.above?~~e.top:~~o}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=t.includes(o)})}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=((t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){let e=this.control.value.length;this.control.setSelectionRange(e,e)}};b([E({attribute:"autocomplete",mode:"fromView"})],Ne.prototype,"autocomplete",void 0);b([F],Ne.prototype,"maxHeight",void 0);b([E({attribute:"open",mode:"boolean"})],Ne.prototype,"open",void 0);b([E],Ne.prototype,"placeholder",void 0);b([E({attribute:"position"})],Ne.prototype,"positionAttribute",void 0);b([F],Ne.prototype,"position",void 0);var Kr=class{};b([F],Kr.prototype,"ariaAutoComplete",void 0);b([F],Kr.prototype,"ariaControls",void 0);Me(Kr,Be);Me(Ne,Qt,Kr);var Yd=(r,e)=>St`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
    >
        <div class="control" part="control">
            ${vs(r,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,o)=>t.inputHandler(o.event)}"
                    @keyup="${(t,o)=>t.keyupHandler(o.event)}"
                    ${Le("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${bs(r,e)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${Le("listbox")}
        >
            <slot
                ${gs({filter:J.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Go(r){let e=r.parentElement;if(e)return e;{let t=r.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Zd(r,e){let t=e;for(;t!==null;){if(t===r)return!0;t=Go(t)}return!1}var pt=document.createElement("div");function Op(r){return r instanceof Wt}var Wo=class{setProperty(e,t){S.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){S.queueUpdate(()=>this.target.removeProperty(e))}},tl=class extends Wo{constructor(e){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(q.create([t]))}},rl=class extends Wo{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},ol=class extends Wo{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},Es=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),k.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),S.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),S.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let i=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[i].style}else this.target=null}};b([F],Es.prototype,"target",void 0);var il=class{constructor(e){this.target=e.style}setProperty(e,t){S.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){S.queueUpdate(()=>this.target.removeProperty(e))}},Jt=class r{setProperty(e,t){r.properties[e]=t;for(let o of r.roots.values())kr.getOrCreate(r.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete r.properties[e];for(let t of r.roots.values())kr.getOrCreate(r.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=r;if(!t.has(e)){t.add(e);let o=kr.getOrCreate(this.normalizeRoot(e));for(let i in r.properties)o.setProperty(i,r.properties[i])}}static unregisterRoot(e){let{roots:t}=r;if(t.has(e)){t.delete(e);let o=kr.getOrCreate(r.normalizeRoot(e));for(let i in r.properties)o.removeProperty(i)}}static normalizeRoot(e){return e===pt?document:e}};Jt.roots=new Set;Jt.properties={};var el=new WeakMap,Ap=S.supportsAdoptedStyleSheets?tl:Es,kr=Object.freeze({getOrCreate(r){if(el.has(r))return el.get(r);let e;return r===pt?e=new Jt:r instanceof Document?e=S.supportsAdoptedStyleSheets?new rl:new ol:Op(r)?e=new Ap(r):e=new il(r),el.set(r,e),e}});var Ye=class r extends Xt{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=r.uniqueId(),r.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new r({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return r.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=ye.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof r&&(t=this.alias(t)),ye.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),ye.existsFor(e)&&ye.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(pt,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!ye.existsFor(t)&&ye.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(o=>o.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};Ye.uniqueId=(()=>{let r=0;return()=>(r++,r.toString(16))})();Ye.tokensById=new Map;var sl=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){kr.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(ye.getOrCreate(t).get(e)))}remove(e,t){kr.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},nl=class{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=k.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Gt))}},al=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),k.getNotifier(this).notify(e.id))}get(e){return k.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}},Xo=new WeakMap,Qo=new WeakMap,ye=class r{constructor(e){this.target=e,this.store=new al,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,o)=>{let i=Ye.getTokenById(o);if(i&&(i.notify(this.target),Ye.isCSSDesignToken(i))){let s=this.parent,n=this.isReflecting(i);if(s){let a=s.get(i),l=t.get(i);a!==l&&!n?this.reflectToCSS(i):a===l&&n&&this.stopReflectToCSS(i)}else n||this.reflectToCSS(i)}}},Xo.set(e,this),k.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Wt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Xo.get(e)||new r(e)}static existsFor(e){return Xo.has(e)}static findParent(e){if(pt!==e.target){let t=Go(e.target);for(;t!==null;){if(Xo.has(t))return Xo.get(t);t=Go(t)}return r.getOrCreate(pt)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==pt?r.getOrCreate(pt):null}while(o!==null);return null}get parent(){return Qo.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let o=this.getRaw(e);if(o!==void 0)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=r.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){Ye.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Ye.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=r.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Qo.get(this).removeChild(this)}appendChild(e){e.parent&&Qo.get(e).removeChild(e);let t=this.children.filter(o=>e.contains(o));Qo.set(e,this),this.children.push(e),t.forEach(o=>e.appendChild(o)),k.getNotifier(this.store).subscribe(e);for(let[o,i]of this.store.all())e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):i)}removeChild(e){let t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),k.getNotifier(this.store).unsubscribe(e),e.parent===this?Qo.delete(e):!1}contains(e){return Zd(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),r.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),r.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=Ye.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);Ye.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new nl(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};ye.cssCustomPropertyReflector=new sl;b([F],ye.prototype,"children",void 0);function Ep(r){return Ye.from(r)}var Or=Object.freeze({create:Ep,notifyConnection(r){return!r.isConnected||!ye.existsFor(r)?!1:(ye.getOrCreate(r).bind(),!0)},notifyDisconnection(r){return r.isConnected||!ye.existsFor(r)?!1:(ye.getOrCreate(r).unbind(),!0)},registerRoot(r=pt){Jt.registerRoot(r)},unregisterRoot(r=pt){Jt.unregisterRoot(r)}});var ll=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),cl=new Map,Rs=new Map,eo=null,Yo=L.createInterface(r=>r.cachedCallback(e=>(eo===null&&(eo=new Ts(null,e)),eo))),ul=Object.freeze({tagFor(r){return Rs.get(r)},responsibleFor(r){let e=r.$$designSystem$$;return e||L.findResponsibleContainer(r).get(Yo)},getOrCreate(r){if(!r)return eo===null&&(eo=L.getOrCreateDOMContainer().get(Yo)),eo;let e=r.$$designSystem$$;if(e)return e;let t=L.getOrCreateDOMContainer(r);if(t.has(Yo,!1))return t.get(Yo);{let o=new Ts(r,t);return t.register($r.instance(Yo,o)),o}}});function Rp(r,e,t){return typeof r=="string"?{name:r,type:e,callback:t}:r}var Ts=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>ll.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],i=this.disambiguate,s=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(a,l,c){let d=Rp(a,l,c),{name:u,callback:m,baseClass:y}=d,{type:w}=d,$=u,Q=cl.get($),Ue=!0;for(;Q;){let Ae=i($,w,Q);switch(Ae){case ll.ignoreDuplicate:return;case ll.definitionCallbackOnly:Ue=!1,Q=void 0;break;default:$=Ae,Q=cl.get($);break}}Ue&&((Rs.has(w)||w===ht)&&(w=class extends w{}),cl.set($,w),Rs.set(w,$),y&&Rs.set(y,$)),o.push(new dl(t,$,w,s,m,Ue))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Or.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(let a of o)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},dl=class{constructor(e,t,o,i,s,n){this.container=e,this.name=t,this.type=o,this.shadowRootMode=i,this.callback=s,this.willDefine=n,this.definition=null}definePresentation(e){ks.define(this.name,e,this.container)}defineElement(e){this.definition=new ut(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ul.tagFor(e)}};var Jd=(r,e)=>St`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${vs(r,e)}
        <span class="content" part="content">
            <slot ${gs("content")}></slot>
        </span>
        ${bs(r,e)}
    </template>
`;var kt=class extends J{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,i;this.ariaActiveDescendant=(i=(o=this.options[t])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,o)=>{t.checked=st(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=st(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=st(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,o)=>{t.checked=st(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case Ve:{this.checkFirstOption(o);return}case Re:{this.checkNextOption(o);return}case Te:{this.checkPreviousOption(o);return}case De:{this.checkLastOption(o);return}case Pe:return this.focusAndScrollOptionIntoView(),!0;case Fe:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case $e:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,(o=this.options)===null||o===void 0||o.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let i=Math.max(0,parseInt((o=t?.toFixed())!==null&&o!==void 0?o:"",10));i!==t&&S.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(o=>!o.disabled),t=!e.every(o=>o.selected);e.forEach(o=>o.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let o=this.getTypeaheadMatches(),i=this.options.indexOf(o[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};b([F],kt.prototype,"activeIndex",void 0);b([E({mode:"boolean"})],kt.prototype,"multiple",void 0);b([E({converter:Ad})],kt.prototype,"size",void 0);var hl=class extends kt{},Is=class extends Os(hl){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var Ze=class extends Is{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=nt("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,S.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return k.track(this,"value"),this._value}set value(e){var t,o,i,s,n,a,l;let c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let d=this._options.findIndex(y=>y.value===e),u=(i=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,m=(n=(s=this._options[d])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null;(d===-1||u!==m)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),k.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Zt.above:Zt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Zt.above?~~e.top:~~o}get displayValue(){var e,t;return k.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(o=>{k.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(o=>{k.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),(o=this.options)===null||o===void 0||o.forEach((i,s)=>{var n;let a=(n=this.proxy)===null||n===void 0?void 0:n.options.item(s);a&&(a.selected=i.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(J.slottedOptionFilter),o=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case $e:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Ve:case De:{e.preventDefault();break}case Ie:{e.preventDefault(),this.open=!this.open;break}case Fe:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Pe:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Re||t===Te)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&k.notify(this,"displayValue")}};b([E({attribute:"open",mode:"boolean"})],Ze.prototype,"open",void 0);b([xd],Ze.prototype,"collapsible",null);b([F],Ze.prototype,"control",void 0);b([E({attribute:"position"})],Ze.prototype,"positionAttribute",void 0);b([F],Ze.prototype,"position",void 0);b([F],Ze.prototype,"maxHeight",void 0);var Zo=class{};b([F],Zo.prototype,"ariaControls",void 0);Me(Zo,Be);Me(Ze,Qt,Zo);var pl=class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){let{query:t}=this,o=this.constructListener(e);o.bind(t)(),t.addListener(o),this.listenerCache.set(e,o)}unbind(e){let t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}},Jo=class r extends pl{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new r(e,t)}constructListener(e){let t=!1,o=this.styles;return function(){let{matches:s}=this;s&&!t?(e.$fastController.addStyles(o),t=s):!s&&t&&(e.$fastController.removeStyles(o),t=s)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}},to=Jo.with(window.matchMedia("(forced-colors)")),Xk=Jo.with(window.matchMedia("(prefers-color-scheme: dark)")),Qk=Jo.with(window.matchMedia("(prefers-color-scheme: light)"));var de="not-allowed";var Tp=":host([hidden]){display:none}";function Je(r){return`${Tp}:host{display:${r}}`}var j=Xi()?"focus-visible":"focus";var fl="26",Ip="100px",ml="1",Kd="0",gl="4",eu=()=>G`
  ${Je("inline-flex")} :host {
    background: var(--vscode-dropdown-background);
    box-sizing: border-box;
    color: var(--vscode-foreground);
    contain: contents;
    font-family: var(--vscode-font-family);
    height: calc(${fl} * 1px);
    position: relative;
    user-select: none;
    min-width: ${Ip};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${ml} * 1px) solid var(--vscode-dropdown-border);
    border-radius: calc(${Kd} * 1px);
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: var(--vscode-font-size);
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
  }
  .listbox {
    background: var(--vscode-dropdown-background);
    border: calc(${ml} * 1px) solid var(--vscode-focusBorder);
    border-radius: calc(${Kd} * 1px);
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${gl} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${j}) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host(:not([disabled]):hover) {
    background: var(--vscode-dropdown-background);
    border-color: var(--vscode-dropdown-border);
  }
  :host(:${j}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--vscode-list-activeSelectionBackground);
    border: calc(${ml} * 1px) solid var(--vscode-focusBorder);
    color: var(--vscode-list-activeSelectionForeground);
  }
  :host([disabled]) {
    cursor: ${de};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${de};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--vscode-dropdown-background);
    color: var(--vscode-foreground);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    border-color: var(--vscode-focusBorder);
  }
  :host(:focus-within) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: calc(${fl} * 1px);
  }
  :host([open][position='below']) .listbox {
    top: calc(${fl} * 1px);
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${gl} * 4px);
    min-width: calc(${gl} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`;function He(r,e,t){return isNaN(r)||r<=e?e:r>=t?t:r}function Fs(r,e,t){return isNaN(r)||r<=e?0:r>=t?1:r/(t-e)}function Kt(r,e,t){return isNaN(r)?e:e+r*(t-e)}function bl(r){return r*(Math.PI/180)}function tu(r){return r*(180/Math.PI)}function ru(r){let e=Math.round(He(r,0,255)).toString(16);return e.length===1?"0"+e:e}function te(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:e+r*(t-e)}function Vs(r,e,t){if(r<=0)return e%360;if(r>=1)return t%360;let o=(e-t+360)%360,i=(t-e+360)%360;return o<=i?(e-o*r+360)%360:(e+o*r+360)%360}var rO=Math.PI*2;function H(r,e){let t=Math.pow(10,e);return Math.round(r*t)/t}var Ot=class r{constructor(e,t,o){this.h=e,this.s=t,this.l=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new r(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new r(H(this.h,e),H(this.s,e),H(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}};var ro=class r{constructor(e,t,o){this.h=e,this.s=t,this.v=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.v)?new r(e.h,e.s,e.v):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new r(H(this.h,e),H(this.s,e),H(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}};var K=class r{constructor(e,t,o){this.l=e,this.a=t,this.b=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new r(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new r(H(this.l,e),H(this.a,e),H(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}};K.epsilon=216/24389;K.kappa=24389/27;var er=class r{constructor(e,t,o){this.l=e,this.c=t,this.h=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.c)&&!isNaN(e.h)?new r(e.l,e.c,e.h):null}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new r(H(this.l,e),H(this.c,e),H(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}};var M=class r{constructor(e,t,o,i){this.r=e,this.g=t,this.b=o,this.a=typeof i=="number"&&!isNaN(i)?i:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new r(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Kt(this.r,0,255))},${Math.round(Kt(this.g,0,255))},${Math.round(Kt(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Kt(this.r,0,255))},${Math.round(Kt(this.g,0,255))},${Math.round(Kt(this.b,0,255))},${He(this.a,0,1)})`}roundToPrecision(e){return new r(H(this.r,e),H(this.g,e),H(this.b,e),H(this.a,e))}clamp(){return new r(He(this.r,0,1),He(this.g,0,1),He(this.b,0,1),He(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return ru(Kt(e,0,255))}};var we=class r{constructor(e,t,o){this.x=e,this.y=t,this.z=o}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new r(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new r(H(this.x,e),H(this.y,e),H(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}};we.whitePoint=new we(.95047,1,1.08883);function Ps(r){return r.r*.2126+r.g*.7152+r.b*.0722}function Ds(r){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return Ps(new M(e(r.r),e(r.g),e(r.b),1))}var ou=(r,e)=>(r+.05)/(e+.05);function vl(r,e){let t=Ds(r),o=Ds(e);return t>o?ou(t,o):ou(o,t)}function At(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let s=(e+t)/2,n=0;return o!==0&&(n=o/(1-Math.abs(2*s-1))),new Ot(i,n,s)}function oo(r,e=1){let t=(1-Math.abs(2*r.l-1))*r.s,o=t*(1-Math.abs(r.h/60%2-1)),i=r.l-t/2,s=0,n=0,a=0;return r.h<60?(s=t,n=o,a=0):r.h<120?(s=o,n=t,a=0):r.h<180?(s=0,n=t,a=o):r.h<240?(s=0,n=o,a=t):r.h<300?(s=o,n=0,a=t):r.h<360&&(s=t,n=0,a=o),new M(s+i,n+i,a+i,e)}function xl(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let s=0;return e!==0&&(s=o/e),new ro(i,s,e)}function iu(r,e=1){let t=r.s*r.v,o=t*(1-Math.abs(r.h/60%2-1)),i=r.v-t,s=0,n=0,a=0;return r.h<60?(s=t,n=o,a=0):r.h<120?(s=o,n=t,a=0):r.h<180?(s=0,n=t,a=o):r.h<240?(s=0,n=o,a=t):r.h<300?(s=o,n=0,a=t):r.h<360&&(s=t,n=0,a=o),new M(s+i,n+i,a+i,e)}function Fp(r){let e=0,t=0;return r.h!==0&&(e=Math.cos(bl(r.h))*r.c,t=Math.sin(bl(r.h))*r.c),new K(r.l,e,t)}function Vp(r){let e=0;(Math.abs(r.b)>.001||Math.abs(r.a)>.001)&&(e=tu(Math.atan2(r.b,r.a))),e<0&&(e+=360);let t=Math.sqrt(r.a*r.a+r.b*r.b);return new er(r.l,t,e)}function Dp(r){let e=(r.l+16)/116,t=e+r.a/500,o=e-r.b/200,i=Math.pow(t,3),s=Math.pow(e,3),n=Math.pow(o,3),a=0;i>K.epsilon?a=i:a=(116*t-16)/K.kappa;let l=0;r.l>K.epsilon*K.kappa?l=s:l=r.l/K.kappa;let c=0;return n>K.epsilon?c=n:c=(116*o-16)/K.kappa,a=we.whitePoint.x*a,l=we.whitePoint.y*l,c=we.whitePoint.z*c,new we(a,l,c)}function Pp(r){function e(l){return l>K.epsilon?Math.pow(l,1/3):(K.kappa*l+16)/116}let t=e(r.x/we.whitePoint.x),o=e(r.y/we.whitePoint.y),i=e(r.z/we.whitePoint.z),s=116*o-16,n=500*(t-o),a=200*(o-i);return new K(s,n,a)}function _s(r){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}let t=e(r.r),o=e(r.g),i=e(r.b),s=t*.4124564+o*.3575761+i*.1804375,n=t*.2126729+o*.7151522+i*.072175,a=t*.0193339+o*.119192+i*.9503041;return new we(s,n,a)}function yl(r,e=1){function t(n){return n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055}let o=t(r.x*3.2404542-r.y*1.5371385-r.z*.4985314),i=t(r.x*-.969266+r.y*1.8760108+r.z*.041556),s=t(r.x*.0556434-r.y*.2040259+r.z*1.0572252);return new M(o,i,s,e)}function Ko(r){return Pp(_s(r))}function Ls(r,e=1){return yl(Dp(r),e)}function ei(r){return Vp(Ko(r))}function Ms(r,e=1){return Ls(Fp(r),e)}function $l(r,e,t=18){let o=ei(r),i=o.c+e*t;return i<0&&(i=0),Ms(new er(o.l,i,o.h))}function wl(r,e){return r*e}function Sl(r,e){return new M(wl(r.r,e.r),wl(r.g,e.g),wl(r.b,e.b),1)}function Cl(r,e){return r<.5?He(2*e*r,0,1):He(1-2*(1-e)*(1-r),0,1)}function kl(r,e){return new M(Cl(r.r,e.r),Cl(r.g,e.g),Cl(r.b,e.b),1)}var su;(function(r){r[r.Burn=0]="Burn",r[r.Color=1]="Color",r[r.Darken=2]="Darken",r[r.Dodge=3]="Dodge",r[r.Lighten=4]="Lighten",r[r.Multiply=5]="Multiply",r[r.Overlay=6]="Overlay",r[r.Screen=7]="Screen"})(su||(su={}));function _p(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new M(te(r,e.r,t.r),te(r,e.g,t.g),te(r,e.b,t.b),te(r,e.a,t.a))}function Lp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Ot(Vs(r,e.h,t.h),te(r,e.s,t.s),te(r,e.l,t.l))}function Mp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new ro(Vs(r,e.h,t.h),te(r,e.s,t.s),te(r,e.v,t.v))}function Bp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new we(te(r,e.x,t.x),te(r,e.y,t.y),te(r,e.z,t.z))}function Np(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new K(te(r,e.l,t.l),te(r,e.a,t.a),te(r,e.b,t.b))}function Hp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new er(te(r,e.l,t.l),te(r,e.c,t.c),Vs(r,e.h,t.h))}var ue;(function(r){r[r.RGB=0]="RGB",r[r.HSL=1]="HSL",r[r.HSV=2]="HSV",r[r.XYZ=3]="XYZ",r[r.LAB=4]="LAB",r[r.LCH=5]="LCH"})(ue||(ue={}));function Ar(r,e,t,o){if(isNaN(r)||r<=0)return t;if(r>=1)return o;switch(e){case ue.HSL:return oo(Lp(r,At(t),At(o)));case ue.HSV:return iu(Mp(r,xl(t),xl(o)));case ue.XYZ:return yl(Bp(r,_s(t),_s(o)));case ue.LAB:return Ls(Np(r,Ko(t),Ko(o)));case ue.LCH:return Ms(Hp(r,ei(t),ei(o)));default:return _p(r,t,o)}}var ft=class r{constructor(e){if(e==null||e.length===0)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(e==null||e.length===0)throw new Error("The colors argument must be non-empty");let t=new Array(e.length);for(let o=0;o<e.length;o++)o===0?t[o]={color:e[o],position:0}:o===e.length-1?t[o]={color:e[o],position:1}:t[o]={color:e[o],position:o*(1/(e.length-1))};return new r(t)}getColor(e,t=ue.RGB){if(this.stops.length===1)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let o=0;for(let n=0;n<this.stops.length;n++)this.stops[n].position<=e&&(o=n);let i=o+1;i>=this.stops.length&&(i=this.stops.length-1);let s=(e-this.stops[o].position)*(1/(this.stops[i].position-this.stops[o].position));return Ar(s,t,this.stops[o].color,this.stops[i].color)}trim(e,t,o=ue.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new r([{color:this.getColor(e,o),position:0}]);let i=[];for(let a=0;a<this.stops.length;a++)this.stops[a].position>=e&&this.stops[a].position<=t&&i.push(this.stops[a]);if(i.length===0)return new r([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);i[0].position!==e&&i.unshift({color:this.getColor(e),position:e}),i[i.length-1].position!==t&&i.push({color:this.getColor(t),position:t});let s=t-e,n=new Array(i.length);for(let a=0;a<i.length;a++)n[a]={color:i[a].color,position:(i[a].position-e)/s};return new r(n)}findNextColor(e,t,o=!1,i=ue.RGB,s=.005,n=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);let a=this.getColor(e,i),l=o?0:1,c=this.getColor(l,i);if(vl(a,c)<=t)return l;let u=o?0:e,m=o?e:0,y=l,w=0;for(;w<=n;){y=Math.abs(m-u)/2+u;let $=this.getColor(y,i),Q=vl(a,$);if(Math.abs(Q-t)<=s)return y;Q>t?o?u=y:m=y:o?m=y:u=y,w++}return y}clone(){let e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new r(e)}sortColorScaleStops(e){return e.sort((t,o)=>{let i=t.position,s=o.position;return i<s?-1:i>s?1:0})}};var jp=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function mt(r){let e=jp.exec(r);if(e===null)return null;let t=e[1];if(t.length===3){let i=t.charAt(0),s=t.charAt(1),n=t.charAt(2);t=i.concat(i,s,s,n,n)}let o=parseInt(t,16);return isNaN(o)?null:new M(Fs((o&16711680)>>>16,0,255),Fs((o&65280)>>>8,0,255),Fs(o&255,0,255),1)}var Et=class r{constructor(e){this.config=Object.assign({},r.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(let o in e)this.config[o]&&(this.config[o].equalValue?this.config[o].equalValue(e[o])||(this.config[o]=e[o],t=!0):e[o]!==this.config[o]&&(this.config[o]=e[o],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){let e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){let e=At(this.config.baseColor),o=new ft([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark),i=o.getColor(0),s=o.getColor(1),n=i,a=s;if(e.s>=this.config.saturationAdjustmentCutoff&&(n=$l(n,this.config.saturationLight),a=$l(a,this.config.saturationDark)),this.config.multiplyLight!==0){let l=Sl(this.config.baseColor,n);n=Ar(this.config.multiplyLight,this.config.interpolationMode,n,l)}if(this.config.multiplyDark!==0){let l=Sl(this.config.baseColor,a);a=Ar(this.config.multiplyDark,this.config.interpolationMode,a,l)}if(this.config.overlayLight!==0){let l=kl(this.config.baseColor,n);n=Ar(this.config.overlayLight,this.config.interpolationMode,n,l)}if(this.config.overlayDark!==0){let l=kl(this.config.baseColor,a);a=Ar(this.config.overlayDark,this.config.interpolationMode,a,l)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new ft([{position:0,color:this.config.baseColor},{position:1,color:a.clamp()}]):this.config.baseScalePosition>=1?new ft([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new ft([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:a.clamp()}]):new ft([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:a.clamp()}])}};Et.defaultPaletteConfig={baseColor:mt("#808080"),steps:11,interpolationMode:ue.RGB,scaleColorLight:new M(1,1,1,1),scaleColorDark:new M(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};Et.greyscalePaletteConfig={baseColor:mt("#808080"),steps:11,interpolationMode:ue.RGB,scaleColorLight:new M(1,1,1,1),scaleColorDark:new M(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};var YO={targetSize:63,spacing:4,scaleColorLight:Et.defaultPaletteConfig.scaleColorLight,scaleColorDark:Et.defaultPaletteConfig.scaleColorDark};var ti=class r{constructor(e){this.palette=[],this.config=Object.assign({},r.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);let t=.14,o=.06,i=new M(t,t,t,1),s=94,a=new Et(Object.assign(Object.assign({},Et.greyscalePaletteConfig),{baseColor:i,baseScalePosition:(1-t)*100/s,steps:e})).palette,l=Ps(this.config.baseColor),c=At(this.config.baseColor).l,d=(l+c)/2,m=this.matchRelativeLuminanceIndex(d,a)/(e-1),w=this.matchRelativeLuminanceIndex(t,a)/(e-1),$=At(this.config.baseColor),Q=oo(Ot.fromObject({h:$.h,s:$.s,l:t})),Ue=oo(Ot.fromObject({h:$.h,s:$.s,l:o})),Ae=new Array(5);Ae[0]={position:0,color:new M(1,1,1,1)},Ae[1]={position:m,color:this.config.baseColor},Ae[2]={position:w,color:Q},Ae[3]={position:.99,color:Ue},Ae[4]={position:1,color:new M(0,0,0,1)};let oh=new ft(Ae);this.palette=new Array(e);for(let fi=0;fi<e;fi++){let ih=oh.getColor(fi/(e-1),ue.RGB);this.palette[fi]=ih}}matchRelativeLuminanceIndex(e,t){let o=Number.MAX_VALUE,i=0,s=0,n=t.length;for(;s<n;s++){let a=Math.abs(Ps(t[s])-e);a<o&&(o=a,i=s)}return i}};ti.defaultPaletteConfig={baseColor:mt("#808080"),steps:94};function Bs(r,e){let t=r.relativeLuminance>e.relativeLuminance?r:e,o=r.relativeLuminance>e.relativeLuminance?e:r;return(t.relativeLuminance+.05)/(o.relativeLuminance+.05)}var Ke=Object.freeze({create(r,e,t){return new Ns(r,e,t)},from(r){return new Ns(r.r,r.g,r.b)}});function nu(r){let e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(let t in e)if(typeof e[t]!=typeof r[t])return!1;return!0}var Ns=class r extends M{constructor(e,t,o){super(e,t,o,1),this.toColorString=this.toStringHexRGB,this.contrast=Bs.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Ds(this)}static fromObject(e){return new r(e.r,e.g,e.b)}};function Hs(r,e,t=0,o=r.length-1){if(o===t)return r[t];let i=Math.floor((o-t)/2)+t;return e(r[i])?Hs(r,e,t,i):Hs(r,e,i+1,o)}var zp=(-.1+Math.sqrt(.21))/2;function au(r){return r.relativeLuminance<=zp}function Oe(r){return au(r)?-1:1}function Up(r,e,t){return typeof r=="number"?ri.from(Ke.create(r,e,t)):ri.from(r)}function qp(r){return nu(r)?js.from(r):js.from(Ke.create(r.r,r.g,r.b))}var ri=Object.freeze({create:Up,from:qp}),js=class r{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,o,i){o===void 0&&(o=this.closestIndexOf(e));let s=this.swatches,n=this.lastIndex,a=o;i===void 0&&(i=Oe(e));let l=c=>Bs(e,c)>=t;return i===-1&&(s=this.reversedSwatches,a=n-a),Hs(s,l,a,n)}get(e){return this.swatches[e]||this.swatches[He(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(t!==-1)return this.closestIndexCache.set(e.relativeLuminance,t),t;let o=this.swatches.reduce((i,s)=>Math.abs(s.relativeLuminance-e.relativeLuminance)<Math.abs(i.relativeLuminance-e.relativeLuminance)?s:i);return t=this.swatches.indexOf(o),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new r(e,Object.freeze(new ti({baseColor:M.fromObject(e)}).palette.map(t=>{let o=mt(t.toStringHexRGB());return Ke.create(o.r,o.g,o.b)})))}};function lu(r,e,t,o,i,s,n,a,l){let c=r.source,d=e.closestIndexOf(t),u=Math.max(n,a,l),m=d>=u?-1:1,w=r.closestIndexOf(c),$=w+m*-1*o,Q=$+m*i,Ue=$+m*s;return{rest:r.get($),hover:r.get(w),active:r.get(Q),focus:r.get(Ue)}}function cu(r,e,t,o,i,s,n){let a=r.source,l=r.closestIndexOf(a),c=Oe(e),d=l+(c===1?Math.min(o,i):Math.max(c*o,c*i)),u=r.colorContrast(e,t,d,c),m=r.closestIndexOf(u),y=m+c*Math.abs(o-i),w=c===1?o<i:c*o>c*i,$,Q;return w?($=m,Q=y):($=y,Q=m),{rest:r.get($),hover:r.get(Q),active:r.get($+c*s),focus:r.get($+c*n)}}var Ol=Ke.create(1,1,1),du=Ke.create(0,0,0),uu=Ke.from(mt("#808080")),hu=Ke.from(mt("#DA1A5F"));function pu(r,e){return r.contrast(Ol)>=e?Ol:du}function fu(r,e,t,o,i,s){let n=r.closestIndexOf(e),a=Math.max(t,o,i,s),l=n>=a?-1:1;return{rest:r.get(n+l*t),hover:r.get(n+l*o),active:r.get(n+l*i),focus:r.get(n+l*s)}}function mu(r,e,t,o,i,s){let n=Oe(e),a=r.closestIndexOf(e);return{rest:r.get(a-n*t),hover:r.get(a-n*o),active:r.get(a-n*i),focus:r.get(a-n*s)}}function gu(r,e,t){let o=r.closestIndexOf(e);return r.get(o-(o<t?t*-1:t))}function bu(r,e,t,o,i,s,n,a,l,c){let d=Math.max(t,o,i,s,n,a,l,c),u=r.closestIndexOf(e),m=u>=d?-1:1;return{rest:r.get(u+m*t),hover:r.get(u+m*o),active:r.get(u+m*i),focus:r.get(u+m*s)}}function vu(r,e,t,o,i,s){let n=Oe(e),a=r.closestIndexOf(r.colorContrast(e,4.5)),l=a+n*Math.abs(t-o),c=n===1?t<o:n*t>n*o,d,u;return c?(d=a,u=l):(d=l,u=a),{rest:r.get(d),hover:r.get(u),active:r.get(d+n*i),focus:r.get(d+n*s)}}function xu(r,e){return r.colorContrast(e,3.5)}function yu(r,e,t){return r.colorContrast(t,3.5,r.closestIndexOf(r.source),Oe(e)*-1)}function wu(r,e){return r.colorContrast(e,14)}function Cu(r,e){return r.colorContrast(e,4.5)}function tr(r){return Ke.create(r,r,r)}var $u={LightMode:1,DarkMode:.23};function Su(r,e,t){return r.get(r.closestIndexOf(tr(e))+t)}function ku(r,e,t){let o=r.closestIndexOf(tr(e))-t;return r.get(o-t)}function Ou(r,e){return r.get(r.closestIndexOf(tr(e)))}function oi(r,e,t,o,i,s){return Math.max(r.closestIndexOf(tr(e))+t,o,i,s)}function Au(r,e,t,o,i,s){return r.get(oi(r,e,t,o,i,s))}function Eu(r,e,t,o,i,s){return r.get(oi(r,e,t,o,i,s)+t)}function Ru(r,e,t,o,i,s){return r.get(oi(r,e,t,o,i,s)+t*2)}function Tu(r,e,t,o,i,s){let n=r.closestIndexOf(e),a=Oe(e),l=n+a*t,c=l+a*(o-t),d=l+a*(i-t),u=l+a*(s-t);return{rest:r.get(l),hover:r.get(c),active:r.get(d),focus:r.get(u)}}function Iu(r,e,t){return r.get(r.closestIndexOf(e)+Oe(e)*t)}var{create:f}=Or;function C(r){return Or.create({name:r,cssCustomPropertyName:null})}var zs=f("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),Al=f("base-height-multiplier").withDefault(10),AE=f("base-horizontal-spacing-multiplier").withDefault(3),io=f("base-layer-luminance").withDefault($u.DarkMode),Er=f("control-corner-radius").withDefault(4),El=f("density").withDefault(0),he=f("design-unit").withDefault(4),EE=f("direction").withDefault(Qi.ltr),so=f("disabled-opacity").withDefault(.3),Rt=f("stroke-width").withDefault(1),je=f("focus-stroke-width").withDefault(2),no=f("type-ramp-base-font-size").withDefault("14px"),ao=f("type-ramp-base-line-height").withDefault("20px"),RE=f("type-ramp-minus-1-font-size").withDefault("12px"),TE=f("type-ramp-minus-1-line-height").withDefault("16px"),IE=f("type-ramp-minus-2-font-size").withDefault("10px"),FE=f("type-ramp-minus-2-line-height").withDefault("16px"),VE=f("type-ramp-plus-1-font-size").withDefault("16px"),DE=f("type-ramp-plus-1-line-height").withDefault("24px"),PE=f("type-ramp-plus-2-font-size").withDefault("20px"),_E=f("type-ramp-plus-2-line-height").withDefault("28px"),LE=f("type-ramp-plus-3-font-size").withDefault("28px"),ME=f("type-ramp-plus-3-line-height").withDefault("36px"),BE=f("type-ramp-plus-4-font-size").withDefault("34px"),NE=f("type-ramp-plus-4-line-height").withDefault("44px"),HE=f("type-ramp-plus-5-font-size").withDefault("46px"),jE=f("type-ramp-plus-5-line-height").withDefault("56px"),zE=f("type-ramp-plus-6-font-size").withDefault("60px"),UE=f("type-ramp-plus-6-line-height").withDefault("72px"),qE=C("accent-fill-rest-delta").withDefault(0),Gp=C("accent-fill-hover-delta").withDefault(4),Wp=C("accent-fill-active-delta").withDefault(-5),Xp=C("accent-fill-focus-delta").withDefault(0),Qp=C("accent-foreground-rest-delta").withDefault(0),Yp=C("accent-foreground-hover-delta").withDefault(6),Zp=C("accent-foreground-active-delta").withDefault(-4),Jp=C("accent-foreground-focus-delta").withDefault(0),lo=C("neutral-fill-rest-delta").withDefault(7),co=C("neutral-fill-hover-delta").withDefault(10),uo=C("neutral-fill-active-delta").withDefault(5),Fu=C("neutral-fill-focus-delta").withDefault(0),Kp=C("neutral-fill-input-rest-delta").withDefault(0),ef=C("neutral-fill-input-hover-delta").withDefault(0),tf=C("neutral-fill-input-active-delta").withDefault(0),rf=C("neutral-fill-input-focus-delta").withDefault(0),of=C("neutral-fill-stealth-rest-delta").withDefault(0),sf=C("neutral-fill-stealth-hover-delta").withDefault(5),nf=C("neutral-fill-stealth-active-delta").withDefault(3),af=C("neutral-fill-stealth-focus-delta").withDefault(0),lf=C("neutral-fill-strong-rest-delta").withDefault(0),cf=C("neutral-fill-strong-hover-delta").withDefault(8),df=C("neutral-fill-strong-active-delta").withDefault(-5),uf=C("neutral-fill-strong-focus-delta").withDefault(0),ho=C("neutral-fill-layer-rest-delta").withDefault(3),hf=C("neutral-stroke-rest-delta").withDefault(25),pf=C("neutral-stroke-hover-delta").withDefault(40),ff=C("neutral-stroke-active-delta").withDefault(16),mf=C("neutral-stroke-focus-delta").withDefault(25),gf=C("neutral-stroke-divider-rest-delta").withDefault(8),bf=f("neutral-color").withDefault(uu),re=C("neutral-palette").withDefault(r=>ri.from(bf.getValueFor(r))),vf=f("accent-color").withDefault(hu),Rl=C("accent-palette").withDefault(r=>ri.from(vf.getValueFor(r))),xf=C("neutral-layer-card-container-recipe").withDefault({evaluate:r=>Su(re.getValueFor(r),io.getValueFor(r),ho.getValueFor(r))}),GE=f("neutral-layer-card-container").withDefault(r=>xf.getValueFor(r).evaluate(r)),yf=C("neutral-layer-floating-recipe").withDefault({evaluate:r=>ku(re.getValueFor(r),io.getValueFor(r),ho.getValueFor(r))}),WE=f("neutral-layer-floating").withDefault(r=>yf.getValueFor(r).evaluate(r)),wf=C("neutral-layer-1-recipe").withDefault({evaluate:r=>Ou(re.getValueFor(r),io.getValueFor(r))}),Cf=f("neutral-layer-1").withDefault(r=>wf.getValueFor(r).evaluate(r)),$f=C("neutral-layer-2-recipe").withDefault({evaluate:r=>Au(re.getValueFor(r),io.getValueFor(r),ho.getValueFor(r),lo.getValueFor(r),co.getValueFor(r),uo.getValueFor(r))}),XE=f("neutral-layer-2").withDefault(r=>$f.getValueFor(r).evaluate(r)),Sf=C("neutral-layer-3-recipe").withDefault({evaluate:r=>Eu(re.getValueFor(r),io.getValueFor(r),ho.getValueFor(r),lo.getValueFor(r),co.getValueFor(r),uo.getValueFor(r))}),QE=f("neutral-layer-3").withDefault(r=>Sf.getValueFor(r).evaluate(r)),kf=C("neutral-layer-4-recipe").withDefault({evaluate:r=>Ru(re.getValueFor(r),io.getValueFor(r),ho.getValueFor(r),lo.getValueFor(r),co.getValueFor(r),uo.getValueFor(r))}),YE=f("neutral-layer-4").withDefault(r=>kf.getValueFor(r).evaluate(r)),Ce=f("fill-color").withDefault(r=>Cf.getValueFor(r)),ii;(function(r){r[r.normal=4.5]="normal",r[r.large=7]="large"})(ii||(ii={}));var Us=f({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>lu(Rl.getValueFor(r),re.getValueFor(r),e||Ce.getValueFor(r),Gp.getValueFor(r),Wp.getValueFor(r),Xp.getValueFor(r),lo.getValueFor(r),co.getValueFor(r),uo.getValueFor(r))}),Rr=f("accent-fill-rest").withDefault(r=>Us.getValueFor(r).evaluate(r).rest),po=f("accent-fill-hover").withDefault(r=>Us.getValueFor(r).evaluate(r).hover),fo=f("accent-fill-active").withDefault(r=>Us.getValueFor(r).evaluate(r).active),qs=f("accent-fill-focus").withDefault(r=>Us.getValueFor(r).evaluate(r).focus),Vu=r=>(e,t)=>pu(t||Rr.getValueFor(e),r),Gs=C("foreground-on-accent-recipe").withDefault({evaluate:(r,e)=>Vu(ii.normal)(r,e)}),Du=f("foreground-on-accent-rest").withDefault(r=>Gs.getValueFor(r).evaluate(r,Rr.getValueFor(r))),Pu=f("foreground-on-accent-hover").withDefault(r=>Gs.getValueFor(r).evaluate(r,po.getValueFor(r))),_u=f("foreground-on-accent-active").withDefault(r=>Gs.getValueFor(r).evaluate(r,fo.getValueFor(r))),Lu=f("foreground-on-accent-focus").withDefault(r=>Gs.getValueFor(r).evaluate(r,qs.getValueFor(r))),Ws=C("foreground-on-accent-large-recipe").withDefault({evaluate:(r,e)=>Vu(ii.large)(r,e)}),ZE=f("foreground-on-accent-rest-large").withDefault(r=>Ws.getValueFor(r).evaluate(r,Rr.getValueFor(r))),JE=f("foreground-on-accent-hover-large").withDefault(r=>Ws.getValueFor(r).evaluate(r,po.getValueFor(r))),KE=f("foreground-on-accent-active-large").withDefault(r=>Ws.getValueFor(r).evaluate(r,fo.getValueFor(r))),eR=f("foreground-on-accent-focus-large").withDefault(r=>Ws.getValueFor(r).evaluate(r,qs.getValueFor(r))),Of=r=>(e,t)=>cu(Rl.getValueFor(e),t||Ce.getValueFor(e),r,Qp.getValueFor(e),Yp.getValueFor(e),Zp.getValueFor(e),Jp.getValueFor(e)),Xs=f({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>Of(ii.normal)(r,e)}),tR=f("accent-foreground-rest").withDefault(r=>Xs.getValueFor(r).evaluate(r).rest),rR=f("accent-foreground-hover").withDefault(r=>Xs.getValueFor(r).evaluate(r).hover),oR=f("accent-foreground-active").withDefault(r=>Xs.getValueFor(r).evaluate(r).active),iR=f("accent-foreground-focus").withDefault(r=>Xs.getValueFor(r).evaluate(r).focus),Qs=f({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>fu(re.getValueFor(r),e||Ce.getValueFor(r),lo.getValueFor(r),co.getValueFor(r),uo.getValueFor(r),Fu.getValueFor(r))}),sR=f("neutral-fill-rest").withDefault(r=>Qs.getValueFor(r).evaluate(r).rest),nR=f("neutral-fill-hover").withDefault(r=>Qs.getValueFor(r).evaluate(r).hover),aR=f("neutral-fill-active").withDefault(r=>Qs.getValueFor(r).evaluate(r).active),lR=f("neutral-fill-focus").withDefault(r=>Qs.getValueFor(r).evaluate(r).focus),Ys=f({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>mu(re.getValueFor(r),e||Ce.getValueFor(r),Kp.getValueFor(r),ef.getValueFor(r),tf.getValueFor(r),rf.getValueFor(r))}),Mu=f("neutral-fill-input-rest").withDefault(r=>Ys.getValueFor(r).evaluate(r).rest),Bu=f("neutral-fill-input-hover").withDefault(r=>Ys.getValueFor(r).evaluate(r).hover),Nu=f("neutral-fill-input-active").withDefault(r=>Ys.getValueFor(r).evaluate(r).active),cR=f("neutral-fill-input-focus").withDefault(r=>Ys.getValueFor(r).evaluate(r).focus),Zs=f({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>bu(re.getValueFor(r),e||Ce.getValueFor(r),of.getValueFor(r),sf.getValueFor(r),nf.getValueFor(r),af.getValueFor(r),lo.getValueFor(r),co.getValueFor(r),uo.getValueFor(r),Fu.getValueFor(r))}),Js=f("neutral-fill-stealth-rest").withDefault(r=>Zs.getValueFor(r).evaluate(r).rest),Hu=f("neutral-fill-stealth-hover").withDefault(r=>Zs.getValueFor(r).evaluate(r).hover),ju=f("neutral-fill-stealth-active").withDefault(r=>Zs.getValueFor(r).evaluate(r).active),dR=f("neutral-fill-stealth-focus").withDefault(r=>Zs.getValueFor(r).evaluate(r).focus),Ks=f({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>vu(re.getValueFor(r),e||Ce.getValueFor(r),lf.getValueFor(r),cf.getValueFor(r),df.getValueFor(r),uf.getValueFor(r))}),uR=f("neutral-fill-strong-rest").withDefault(r=>Ks.getValueFor(r).evaluate(r).rest),hR=f("neutral-fill-strong-hover").withDefault(r=>Ks.getValueFor(r).evaluate(r).hover),pR=f("neutral-fill-strong-active").withDefault(r=>Ks.getValueFor(r).evaluate(r).active),fR=f("neutral-fill-strong-focus").withDefault(r=>Ks.getValueFor(r).evaluate(r).focus),Af=C("neutral-fill-layer-recipe").withDefault({evaluate:(r,e)=>gu(re.getValueFor(r),e||Ce.getValueFor(r),ho.getValueFor(r))}),mR=f("neutral-fill-layer-rest").withDefault(r=>Af.getValueFor(r).evaluate(r)),Ef=C("focus-stroke-outer-recipe").withDefault({evaluate:r=>xu(re.getValueFor(r),Ce.getValueFor(r))}),et=f("focus-stroke-outer").withDefault(r=>Ef.getValueFor(r).evaluate(r)),Rf=C("focus-stroke-inner-recipe").withDefault({evaluate:r=>yu(Rl.getValueFor(r),Ce.getValueFor(r),et.getValueFor(r))}),en=f("focus-stroke-inner").withDefault(r=>Rf.getValueFor(r).evaluate(r)),Tf=C("neutral-foreground-hint-recipe").withDefault({evaluate:r=>Cu(re.getValueFor(r),Ce.getValueFor(r))}),gR=f("neutral-foreground-hint").withDefault(r=>Tf.getValueFor(r).evaluate(r)),If=C("neutral-foreground-recipe").withDefault({evaluate:r=>wu(re.getValueFor(r),Ce.getValueFor(r))}),si=f("neutral-foreground-rest").withDefault(r=>If.getValueFor(r).evaluate(r)),tn=f({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:r=>Tu(re.getValueFor(r),Ce.getValueFor(r),hf.getValueFor(r),pf.getValueFor(r),ff.getValueFor(r),mf.getValueFor(r))}),zu=f("neutral-stroke-rest").withDefault(r=>tn.getValueFor(r).evaluate(r).rest),bR=f("neutral-stroke-hover").withDefault(r=>tn.getValueFor(r).evaluate(r).hover),vR=f("neutral-stroke-active").withDefault(r=>tn.getValueFor(r).evaluate(r).active),xR=f("neutral-stroke-focus").withDefault(r=>tn.getValueFor(r).evaluate(r).focus),Ff=C("neutral-stroke-divider-recipe").withDefault({evaluate:(r,e)=>Iu(re.getValueFor(r),e||Ce.getValueFor(r),gf.getValueFor(r))}),yR=f("neutral-stroke-divider-rest").withDefault(r=>Ff.getValueFor(r).evaluate(r)),Uu=Or.create({name:"height-number",cssCustomPropertyName:null}).withDefault(r=>(Al.getValueFor(r)+El.getValueFor(r))*he.getValueFor(r));var Tt=Ha`(${Al} + ${El}) * ${he}`;var Vf="0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))",Df="0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))",Tl=`box-shadow: ${Vf}, ${Df};`;var qu=(r,e)=>{let t=r.tagFor(ce),o=r.name===r.tagFor(kt)?"":".listbox";return G`
        ${o?"":Je("inline-flex")}

        :host ${o} {
            background: ${Ce};
            border: calc(${Rt} * 1px) solid ${zu};
            border-radius: calc(${Er} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${he} * 1px) 0;
        }

        ${o?"":G`
            :host(:focus-within:not([disabled])) {
                border-color: ${et};
                box-shadow: 0 0 0
                    calc((${je} - ${Rt}) * 1px)
                    ${et} inset;
            }

            :host([disabled]) ::slotted(*) {
                cursor: ${de};
                opacity: ${so};
                pointer-events: none;
            }
        `}

        ${o||":host([size])"} {
            max-height: calc(
                (var(--size) * ${Tt} + (${he} * ${Rt} * 2)) * 1px
            );
            overflow-y: auto;
        }

        :host([size="0"]) ${o} {
            max-height: none;
        }
    `.withBehaviors(to(G`
                :host(:not([multiple]):${j}) ::slotted(${t}[aria-selected="true"]),
                :host([multiple]:${j}) ::slotted(${t}[aria-checked="true"]) {
                    border-color: ${I.ButtonText};
                    box-shadow: 0 0 0 calc(${je} * 1px) inset ${I.HighlightText};
                }

                :host(:not([multiple]):${j}) ::slotted(${t}[aria-selected="true"]) {
                    background: ${I.Highlight};
                    color: ${I.HighlightText};
                    fill: currentcolor;
                }

                ::slotted(${t}[aria-selected="true"]:not([aria-checked="true"])) {
                    background: ${I.Highlight};
                    border-color: ${I.HighlightText};
                    color: ${I.HighlightText};
                }
            `))};var Gu=(r,e)=>{let t=r.name===r.tagFor(Ze);return G`
        ${Je("inline-flex")}

        :host {
            --elevation: 14;
            background: ${Mu};
            border-radius: calc(${Er} * 1px);
            border: calc(${Rt} * 1px) solid ${Rr};
            box-sizing: border-box;
            color: ${si};
            font-family: ${zs};
            height: calc(${Tt} * 1px);
            position: relative;
            user-select: none;
            min-width: 250px;
            outline: none;
            vertical-align: top;
        }

        ${t?G`
            :host(:not([aria-haspopup])) {
                --elevation: 0;
                border: 0;
                height: auto;
                min-width: 0;
            }
        `:""}

        ${qu(r,e)}

        :host .listbox {
            ${Tl}
            border: none;
            display: flex;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: 1;
        }

        .control + .listbox {
            --stroke-size: calc(${he} * ${Rt} * 2);
            max-height: calc(
                (var(--listbox-max-height) * ${Tt} + var(--stroke-size)) * 1px
            );
        }

        ${t?G`
            :host(:not([aria-haspopup])) .listbox {
                left: auto;
                position: static;
                z-index: auto;
            }
        `:""}

        .listbox[hidden] {
            display: none;
        }

        .control {
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            font-size: ${no};
            font-family: inherit;
            line-height: ${ao};
            min-height: 100%;
            padding: 0 calc(${he} * 2.25px);
            width: 100%;
        }

        :host(:not([disabled]):hover) {
            background: ${Bu};
            border-color: ${po};
        }

        :host(:${j}) {
            border-color: ${et};
        }

        :host(:not([size]):not([multiple]):not([open]):${j}),
        :host([multiple]:${j}),
        :host([size]:${j}) {
            box-shadow: 0 0 0 calc(${je} * 1px) ${et};
        }

        :host(:not([multiple]):not([size]):${j}) ::slotted(${r.tagFor(ce)}[aria-selected="true"]:not([disabled])) {
            box-shadow: 0 0 0 calc(${je} * 1px) inset ${en};
            border-color: ${et};
            background: ${qs};
            color: ${Lu};
        }

        :host([disabled]) {
            cursor: ${de};
            opacity: ${so};
        }

        :host([disabled]) .control {
            cursor: ${de};
            user-select: none;
        }

        :host([disabled]:hover) {
            background: ${Js};
            color: ${si};
            fill: currentcolor;
        }

        :host(:not([disabled])) .control:active {
            background: ${Nu};
            border-color: ${fo};
            border-radius: calc(${Er} * 1px);
        }

        :host([open][position="above"]) .listbox {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 0;
            bottom: calc(${Tt} * 1px);
        }

        :host([open][position="below"]) .listbox {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: 0;
            top: calc(${Tt} * 1px);
        }

        .selected-value {
            flex: 1 1 auto;
            font-family: inherit;
            min-width: calc(var(--listbox-scroll-width, 0) - (${he} * 4) * 1px);
            overflow: hidden;
            text-align: start;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .indicator {
            flex: 0 0 auto;
            margin-inline-start: 1em;
        }

        slot[name="listbox"] {
            display: none;
            width: 100%;
        }

        :host([open]) slot[name="listbox"] {
            display: flex;
            position: absolute;
            ${Tl}
        }

        .end {
            margin-inline-start: auto;
        }

        .start,
        .end,
        .indicator,
        .select-indicator,
        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            fill: currentcolor;
            height: 1em;
            min-height: calc(${he} * 4px);
            min-width: calc(${he} * 4px);
            width: 1em;
        }

        ::slotted([role="option"]),
        ::slotted(option) {
            flex: 0 0 auto;
        }
    `.withBehaviors(to(G`
                :host(:not([disabled]):hover),
                :host(:not([disabled]):active) {
                    border-color: ${I.Highlight};
                }

                :host(:not([disabled]):${j}) {
                    background-color: ${I.ButtonFace};
                    box-shadow: 0 0 0 calc(${je} * 1px) ${I.Highlight};
                    color: ${I.ButtonText};
                    fill: currentcolor;
                    forced-color-adjust: none;
                }

                :host(:not([disabled]):${j}) .listbox {
                    background: ${I.ButtonFace};
                }

                :host([disabled]) {
                    border-color: ${I.GrayText};
                    background-color: ${I.ButtonFace};
                    color: ${I.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                    forced-color-adjust: none;
                }

                :host([disabled]:hover) {
                    background: ${I.ButtonFace};
                }

                :host([disabled]) .control {
                    color: ${I.GrayText};
                    border-color: ${I.GrayText};
                }

                :host([disabled]) .control .select-indicator {
                    fill: ${I.GrayText};
                }

                :host(:${j}) ::slotted([aria-selected="true"][role="option"]),
                :host(:${j}) ::slotted(option[aria-selected="true"]),
                :host(:${j}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                    background: ${I.Highlight};
                    border-color: ${I.ButtonText};
                    box-shadow: 0 0 0 calc(${je} * 1px) inset ${I.HighlightText};
                    color: ${I.HighlightText};
                    fill: currentcolor;
                }

                .start,
                .end,
                .indicator,
                .select-indicator,
                ::slotted(svg) {
                    color: ${I.ButtonText};
                    fill: currentcolor;
                }
            `))};var Wu=(r,e)=>G`
    ${Gu(r,e)}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${de};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${no};
        line-height: ${ao};
        height: calc(100% - (${Rt} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${j},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`;var Il=class extends Ne{maxHeightChanged(e,t){this.updateComputedStylesheet()}updateComputedStylesheet(){this.computedStylesheet&&this.$fastController.removeStyles(this.computedStylesheet);let e=Math.floor(this.maxHeight/Uu.getValueFor(this)).toString();this.computedStylesheet=G`
            :host {
                --listbox-max-height: ${e};
            }
        `,this.$fastController.addStyles(this.computedStylesheet)}},rn=Il.compose({baseName:"combobox",baseClass:Ne,template:Yd,styles:Wu,shadowOptions:{delegatesFocus:!0},indicator:`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `});var Xu=(r,e)=>G`
        ${Je("inline-flex")} :host {
            align-items: center;
            font-family: ${zs};
            border-radius: calc(${Er} * 1px);
            border: calc(${je} * 1px) solid transparent;
            box-sizing: border-box;
            background: ${Js};
            color: ${si};
            cursor: pointer;
            flex: 0 0 auto;
            fill: currentcolor;
            font-size: ${no};
            height: calc(${Tt} * 1px);
            line-height: ${ao};
            margin: 0 calc((${he} - ${je}) * 1px);
            outline: none;
            overflow: hidden;
            padding: 0 1ch;
            user-select: none;
            white-space: nowrap;
        }

        :host(:not([disabled]):not([aria-selected="true"]):hover) {
            background: ${Hu};
        }

        :host(:not([disabled]):not([aria-selected="true"]):active) {
            background: ${ju};
        }

        :host([aria-selected="true"]) {
            background: ${Rr};
            color: ${Du};
        }

        :host(:not([disabled])[aria-selected="true"]:hover) {
            background: ${po};
            color: ${Pu};
        }

        :host(:not([disabled])[aria-selected="true"]:active) {
            background: ${fo};
            color: ${_u};
        }

        :host([disabled]) {
            cursor: ${de};
            opacity: ${so};
        }

        .content {
            grid-column-start: 2;
            justify-self: start;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .start,
        .end,
        ::slotted(svg) {
            display: flex;
        }

        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            height: calc(${he} * 4px);
            width: calc(${he} * 4px);
        }

        ::slotted([slot="end"]) {
            margin-inline-start: 1ch;
        }

        ::slotted([slot="start"]) {
            margin-inline-end: 1ch;
        }

        :host([aria-checked="true"][aria-selected="false"]) {
            border-color: ${et};
        }

        :host([aria-checked="true"][aria-selected="true"]) {
            border-color: ${et};
            box-shadow: 0 0 0 calc(${je} * 2 * 1px) inset
                ${en};
        }
    `.withBehaviors(to(G`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${I.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${I.Highlight};
                    color: ${I.HighlightText};
                }

                :host([disabled]),
                :host([disabled][aria-selected="false"]:hover) {
                    background: ${I.Canvas};
                    color: ${I.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }

                :host([aria-checked="true"][aria-selected="false"]) {
                    background: ${I.ButtonFace};
                    color: ${I.ButtonText};
                    border-color: ${I.ButtonText};
                }

                :host([aria-checked="true"][aria-selected="true"]),
                :host([aria-checked="true"][aria-selected="true"]:hover) {
                    background: ${I.Highlight};
                    color: ${I.HighlightText};
                    border-color: ${I.ButtonText};
                }
            `));var Fl=ce.compose({baseName:"option",template:Jd,styles:Xu});function Qu(r){return ul.getOrCreate(r).withPrefix("fast")}var Yu="2.3rem",Pf="100px",ni="1",Zu="0.25rem",_f="1rem",Vl="4",Ju=()=>G`
  ${Je("inline-flex")} :host {
    background: var(--select-field-background-color);
    box-sizing: border-box;
    color: var(--foreground-color);
    contain: contents;
    font-family: inherit;
    position: relative;
    user-select: none;
    min-width: ${Pf};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${ni} * 1px) solid var(--field-border-color);
    border-radius: ${Zu};
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
  .listbox {
    background: var(--background-color);
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    border-radius: ${_f};
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${Vl} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${j}) .control {
    border-color: var(--focus-border-color);
  }
  :host(:not([disabled]):hover) {
    background: var(--select-field-background-color);
    border-color: var(--field-border-color);
  }
  :host(:${j}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--active-selection-background-color);
    border: calc(${ni} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${de};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${de};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--select-field-background-color);
    color: var(--foreground-color);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:focus-within) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: ${Yu};
  }
  :host([open][position='below']) .listbox {
    top: ${Yu};
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${Vl} * 4px);
    min-width: calc(${Vl} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`,Ku=()=>G`
  ${Je("inline-flex")} :host {
    font-family: inherit;
    border-radius: ${Zu};
    border: calc(${ni} * 1px) solid transparent;
    box-sizing: border-box;
    color: var(--foreground-color);
    cursor: pointer;
    fill: currentcolor;
    font-size: inherit;
    line-height: normal;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0.125rem 0.5rem 0.5rem;
    user-select: none;
    white-space: nowrap;
  }
  :host(:${j}) {
    border-color: var(--focus-border-color);
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([aria-selected='true']) {
    background: var(--active-selection-background-color);
    border: calc(${ni} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):hover) {
    background: var(--active-selection-background-color);
    border: calc(${ni} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${de};
    opacity: 0.4;
  }
  :host([disabled]:hover) {
    background-color: inherit;
  }
  .content {
    grid-column-start: 2;
    justify-self: start;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;var on=r=>{class e extends r{constructor(...i){super();this.touched=!1;this.isDefaultValue=!0;this.submitted=!1;new Ee(this,{context:kn,callback:s=>{s.registerValidationListener(this.option.name,n=>this.validation=n),s.registerTouchedListener(this.option.name,n=>this.touched=n),s.registerDefaultValueListener(this.option.name,n=>this.isDefaultValue=n)},subscribe:!1}),new Ee(this,{context:Ei,callback:s=>this.submitted=s,subscribe:!0}),new Ee(this,{context:Oo,callback:s=>this.generatorContext=s,subscribe:!0})}shouldRenderError(){return this.validation!==void 0&&this.validation!==!0&&(this.touched||this.submitted)}shouldRenderChanged(){return this.touched&&!this.isDefaultValue}createRenderRoot(){return this}}return g([B()],e.prototype,"validation",2),g([B()],e.prototype,"touched",2),g([B()],e.prototype,"isDefaultValue",2),g([B()],e.prototype,"submitted",2),g([B()],e.prototype,"generatorContext",2),e};var ze=r=>{class e extends on(Z(r)){dispatchValue(i){let s=Ft(this.option),n=ki(i,s);this.dispatchEvent(new CustomEvent("option-changed",{bubbles:!0,composed:!0,detail:{name:this.option.name,value:i,isDefaultValue:n}}))}firstUpdated(i){if(super.updated(i),this.generatorContext){let n=this.generatorContext.prefillValues?.[this.option.name];if(n){this.setFieldValue(n),this.dispatchValue(n);return}}let s=Ft(this.option);if(s){this.setFieldValue(s),this.dispatchValue(s);return}this.dispatchValue(void 0)}get fieldId(){return`${this.option.name}-field`}get ariaAttributes(){return{id:this.fieldId,"aria-invalid":`${this.shouldRenderError()}`,"aria-describedby":`${this.fieldId}-error`}}createRenderRoot(){return this}setFieldValue(i){throw new Error("Not implemented")}renderField(){throw new Error("Not implemented")}}return g([D()],e.prototype,"option",2),e};var Dl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},li=r=>(...e)=>({_$litDirective$:r,values:e}),ai=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:DT}=rc;var eh=r=>r.strings===void 0;var ci=(r,e)=>{var t,o;let i=r._$AN;if(i===void 0)return!1;for(let s of i)(o=(t=s)._$AO)===null||o===void 0||o.call(t,e,!1),ci(s,e);return!0},sn=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},th=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Bf(e)}};function Lf(r){this._$AN!==void 0?(sn(this),this._$AM=r,th(this)):this._$AM=r}function Mf(r,e=!1,t=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let s=t;s<o.length;s++)ci(o[s],!1),sn(o[s]);else o!=null&&(ci(o,!1),sn(o));else ci(this,r)}var Bf=r=>{var e,t,o,i;r.type==Dl.CHILD&&((e=(o=r)._$AP)!==null&&e!==void 0||(o._$AP=Mf),(t=(i=r)._$AQ)!==null&&t!==void 0||(i._$AQ=Lf))},nn=class extends ai{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),th(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(ci(this,e),sn(this))}setValue(e){if(eh(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var an=class extends nn{constructor(){super(...arguments),this.prevData={}}render(e){return Y}update(e,[t]){var o;this.element!==e.element&&(this.element=e.element),this.host=((o=e.options)===null||o===void 0?void 0:o.host)||this.element,this.apply(t),this.groom(t),this.prevData={...t}}apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let s=e[i];s!==t[i]&&(o[i]=s)}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&(o[i]=void 0)}},qT=li(an),ln=class extends an{constructor(){super(...arguments),this.eventData={}}apply(e){if(e)for(let t in e){let o=e[t];o!==this.eventData[t]&&this.applyEvent(t,o)}}applyEvent(e,t){let{prevData:o,element:i}=this;this.eventData[e]=t,o[e]&&i.removeEventListener(e,this,t),i.addEventListener(e,this,t)}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&this.groomEvent(i,t[i])}groomEvent(e,t){let{element:o}=this;delete this.eventData[e],o.removeEventListener(e,this,t)}handleEvent(e){let t=this.eventData[e.type];typeof t=="function"?t.call(this.host,e):t.handleEvent(e)}disconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),s=e[o];t.removeEventListener(i,this,s)}}reconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),s=e[o];t.addEventListener(i,this,s)}}},GT=li(ln),Pl=class extends ln{apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let s=e[i];if(s===t[i])continue;let n=i.slice(1);switch(i[0]){case"@":this.eventData[n]=s,this.applyEvent(n,s);break;case".":o[n]=s;break;case"?":s?o.setAttribute(n,""):o.removeAttribute(n);break;default:s!=null?o.setAttribute(i,String(s)):o.removeAttribute(i);break}}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t){let s=i.slice(1);if(!e||!(i in e)&&o[s]===t[i])switch(i[0]){case"@":this.groomEvent(s,t[i]);break;case".":o[s]=void 0;break;case"?":o.removeAttribute(s);break;default:o.removeAttribute(i);break}}}},ee=li(Pl);var pe="focus:ring-2 focus:ring-focusBorder focus:outline-none",gt="bg-fieldBackground border border-fieldBorder",bt="px-2 py-1.5",rr=r=>r?"!ring-2 !ring-error focus:!ring-error":"",or=r=>r?"--border-width: 1; --dropdown-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":"";var rh=r=>class extends r{render(){return h`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <label for="${this.fieldId}"
            >${this.option.name}${this.option.isRequired?"*":""}</label
          >
          <div class="mt-2 flex flex-row items-start gap-2">
            ${this.renderField()}
            <p class="text-mutedForeground self-center">
              ${this.option.description}
            </p>
            ${oe(this.shouldRenderError()&&typeof this.validation=="string",()=>h`<p
                class="text-sm text-error ${oe(this.editor==="intellij",()=>"mt-1")}"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>
              </div>`)}
          </div>
        </div>
      `}};var cn=class extends rh(ze(R)){renderField(){return this.editor==="intellij"?h`<input
        type="checkbox"
        class="form-checkbox ${gt} checked:bg-primary ${pe} h-5 w-5 rounded checked:border-transparent focus:ring-offset-0"
        @input="${this.handleChange}"
        ${ee(this.ariaAttributes)}
      />`:h`<vscode-checkbox
        @change="${this.handleChange}"
        style="${this.shouldRenderError()?"--border-width: 1; --checkbox-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":""}"
        ${ee(this.ariaAttributes)}
      ></vscode-checkbox>`}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-checkbox");t&&(t.checked=!!e)}handleChange(e){let t=e.target.checked;this.dispatchValue(t)}};cn=g([V("checkbox-field")],cn);var vt=r=>class extends r{render(){return h`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <div class="flex items-center gap-3">
            <label for="${this.fieldId}"
              >${this.option.name}${this.option.isRequired?"*":""}</label
            >
            ${oe(this.option["x-hint"],()=>h`
                  <popover-element
                    class="flex items-start"
                    .content="${this.option["x-hint"]}"
                  >
                    <icon-element class="flex items-start" icon="question">
                    </icon-element>
                  </popover-element>
                `)}
          </div>
          <p class="text-mutedForeground mb-2">${this.option.description}</p>
          ${this.renderField()}
          ${oe(this.shouldRenderError()&&typeof this.validation=="string",()=>h`<p
                class="text-error ${oe(this.editor==="intellij",()=>"mt-1")} text-sm"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>`)}
        </div>
      `}};var di=class extends vt(ze(R)){constructor(){super(...arguments);this.elements=[]}renderField(){return h`<div>
      <div class="flex flex-row gap-2">
        ${this.renderInputField()}
        <button-element
          text="Add"
          appearance="secondary"
          @click="${this.addValue}"
          data-cy="${this.fieldId}-add-button"
          class="self-center"
          style="${this.shouldRenderError()?"--field-border-color: var(--error-color); --focus-border-color: var(--error-color);":""}"
        ></button-element>
      </div>
      <div class="mt-2">
        <p>${this.elements.length} items</p>
        <div class="mt-2 flex flex-row gap-4">
          ${this.elements.map((t,o)=>h`<badge-element
                text="${t}"
                fieldId="${this.fieldId}"
                @remove="${()=>this.removeValue(o)}"
              ></badge-element>`)}
        </div>
      </div>
    </div>`}renderInputField(){return this.editor==="intellij"?h` <input
        class="${gt} ${pe} ${bt} ${rr(this.shouldRenderError())})} grow rounded"
        type="text"
        @keydown="${this.handleEnterKeyAdd}"
        ${ee(this.ariaAttributes)}
      />`:h`<vscode-text-field
        type="text"
        class="grow"
        @keydown="${this.handleEnterKeyAdd}"
        style="${or(this.shouldRenderError())}"
        ${ee(this.ariaAttributes)}
      ></vscode-text-field>`}get inputFieldSelector(){return this.editor==="intellij"?"input":"vscode-text-field"}handleEnterKeyAdd(t){t.key==="Enter"&&this.addValue()}addValue(){let t=this.querySelector(this.inputFieldSelector),o=t?.value;o&&(this.elements=[...this.elements,o],t.value="",this.dispatchValue(this.elements))}removeValue(t){let o=[...this.elements];o.splice(t,1),this.elements=o,this.dispatchValue(this.elements)}setFieldValue(t){typeof t=="string"?this.elements=t.split(","):Array.isArray(t)&&(this.elements=t)}};g([B()],di.prototype,"elements",2),di=g([V("array-field")],di);var dn=class extends vt(ze(R)){renderField(){let e=this.shouldRenderError();return this.editor==="intellij"?h`
        <input
          class="${gt} ${pe} ${bt} ${rr(e)} rounded"
          type="text"
          @input="${this.handleChange}"
          ${ee(this.ariaAttributes)}
        />
      `:h`
        <vscode-text-field
          type="text"
          @input="${this.handleChange}"
          style="${or(this.shouldRenderError())}"
          ${ee(this.ariaAttributes)}
        >
        </vscode-text-field>
      `}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-text-field");t&&(t.value=`${e}`)}};dn=g([V("input-field")],dn);function*It(r,e){if(r!==void 0){let t=0;for(let o of r)yield e(o,t++)}}var ui=class extends vt(ze(R)){constructor(){super(...arguments);this.selectedElements=[]}renderField(){return h`
      <div class="flex flex-col">
        ${this.renderSelectField()}
        <div class="mt-2">
          ${oe(this.selectedElements.length>0,()=>h`<p>Selected:</p>`)}
          <div class="mt-2 flex flex-row gap-4">
            ${this.selectedElements.map((t,o)=>h`<badge-element
                  text="${t}"
                  fieldId="${this.fieldId}"
                  @remove="${()=>this.removeValue(o)}"
                ></badge-element>`)}
          </div>
        </div>
      </div>
    `}renderSelectField(){return this.editor==="intellij"?h`<select
        @change="${this.addValue}"
        class="bg-selectFieldBackground border-fieldBorder ${pe} ${bt} ${rr(this.shouldRenderError())})} grow rounded border"
        ${ee(this.ariaAttributes)}
      >
        <option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </option>
        ${It(this.extractItemOptions(this.option),t=>h`<option value="${t}" title="${t}">${t}</option>`)}
      </select>`:h` <vscode-dropdown
        @change="${this.addValue}"
        style="${or(this.shouldRenderError())}"
        ${ee(this.ariaAttributes)}
      >
        <vscode-option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </vscode-option>
        ${It(this.extractItemOptions(this.option),t=>h`<vscode-option value="${t}" title="${t}"
              >${t}</vscode-option
            >`)}
      </vscode-dropdown>`}removeValue(t){let o=[...this.selectedElements];o.splice(t,1),this.selectedElements=o,this.dispatchValue(this.selectedElements)}addValue(t){let o=t.target,i=o.value;i&&(this.selectedElements=[...this.selectedElements,i],o.value="",this.dispatchValue(this.selectedElements))}setFieldValue(t){let o=[];typeof t=="string"?o=t.split(","):Array.isArray(t)&&(o=t);let i=this.extractItemOptions(this.option);this.selectedElements=o.filter(s=>i.includes(s)),this.dispatchValue(this.selectedElements)}extractItemOptions(t){if(!t.items)return[];let o;return Array.isArray(t.items)?o=t.items:o=t.items.enum,o.filter(i=>!this.selectedElements.includes(i))}};g([B()],ui.prototype,"selectedElements",2),ui=g([V("multiselect-field")],ui);var un=class extends vt(ze(R)){renderField(){return this.editor==="intellij"?this.renderIntellij():this.renderVscode()}renderIntellij(){return h`
      <select
        @change="${this.handleChange}"
        class="form-select bg-selectFieldBackground border-fieldBorder ${pe} ${bt} ${rr(this.shouldRenderError())} rounded border"
        ${ee(this.ariaAttributes)}
      >
        ${oe(Ft(this.option)===void 0,()=>h`<option value="">--</option>`)}
        ${It(Vt(this.option),e=>h`<option value="${e}" title="${e}">${e}</option>`)}
      </select>
    `}renderVscode(){return h`
      <vscode-dropdown
        @change="${this.handleChange}"
        style="${or(this.shouldRenderError())}"
        ${ee(this.ariaAttributes)}
      >
        ${oe(Ft(this.option)===void 0,()=>h`<vscode-option value="">--</vscode-option>`)}
        ${It(Vt(this.option),e=>h`<vscode-option value="${e}" title="${e}"
              >${e}</vscode-option
            >`)}
      </vscode-dropdown>
    `}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"select":"vscode-dropdown");t&&(t.value=e?`${e}`:"")}handleChange(e){let t=e.target.value;this.dispatchValue(t)}};un=g([V("select-field")],un);var hn=class extends vt(ze(R)){renderField(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return h`
      <vscode-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        @input="${this.handleInput}"
        ${ee(this.ariaAttributes)}
      >
        ${It(Vt(this.option),e=>h`<vscode-option value="${e}">${e}</vscode-option>`)}
      </vscode-combobox>
    `}renderIntellij(){return h`
      <intellij-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        ${ee(this.ariaAttributes)}
      >
        ${It(Vt(this.option),e=>h`<intellij-option value="${e}">${e}</intellij-option>`)}
      </intellij-combobox>
    `}updated(){let e=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",t=this.renderRoot.querySelector(e);t&&(t.filterOptions=function(){(!this.autocomplete||this.autocomplete===Sr.none)&&(this.filter="");let o=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().includes(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!o&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))})}handleInput(e){let t=e.target}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",o=this.renderRoot.querySelector(t);o&&customElements.whenDefined(t).then(()=>{o.value=e?`${e}`:""})}};hn=g([V("autocomplete-field")],hn);var mo=class extends Ti(Z(R)){constructor(){super(...arguments);this._path="";this.isEditable=!1}set path(t){this._path=t.startsWith("/")?t.substring(1):t}get path(){return this._path}toggleEdit(){this.isEditable=!this.isEditable,this.isEditable&&setTimeout(()=>{this.renderRoot.querySelector(this.editor==="vscode"?"vscode-text-field":"input")?.focus()},0)}confirmEdit(){this.path=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-text-field":"input")?.value||"",this.isEditable=!1,this.dispatchValue()}editToSegment(t){let o=this.path.split("/");this.path=o.slice(0,t+1).join("/"),this.dispatchValue()}resetPath(){this.path="",this.isEditable=!1,this.dispatchValue()}render(){let t=this.path.split("/"),o=t.filter(i=>!!i).length>0;return h`
      <div
        data-cy="cwd-breadcrumb"
        class="text-mutedForeground flex flex-wrap items-center rounded py-2 text-sm leading-none"
      >
        <span class="pr-2"> Working Directory: </span>
        <span
          @click="${o?this.resetPath:()=>{}}"
          class="${o?"hover:text-primary cursor-pointer underline":""}"
        >
          {workspaceRoot}
        </span>
        <span class="mx-2">/</span>
        ${this.isEditable?h`
              ${this.renderInlineEdit()}
              <icon-element
                @click="${this.toggleEdit}"
                icon="close"
                data-cy="inline-edit-cancel"
              ></icon-element>
              <icon-element
                @click="${this.confirmEdit}"
                icon="check"
                data-cy="inline-edit-confirm"
              ></icon-element>
            `:h`
              ${t.map((i,s)=>h`
                  <span
                    data-cy="cwd-breadcrumb-segment-${s}"
                    class="${s!==t.length-1?"underline cursor-pointer hover:text-primary":""}"
                    @click="${()=>this.editToSegment(s)}"
                    >${i}</span
                  >
                  ${s<t.length-1?h`<span class="mx-2">/</span>`:""}
                `)}
              <button-element
                @click="${this.toggleEdit}"
                color="var(--muted-foreground-color)"
                ?applyFillColor="false"
                appearance="icon"
                text="edit"
                class="self-center"
                data-cy="inline-edit-button"
              ></button-element>
            `}
      </div>
    `}renderInlineEdit(){return this.editor==="vscode"?h` <vscode-text-field
        type="text"
        .value="${this.path}"
        @keydown="${this.handleInlineEditKeydown}"
        data-cy="inline-edit-field"
      >
      </vscode-text-field>`:h`
        <input
          class="${gt} ${pe} ${bt} cursor-pointer rounded"
          type="text"
          .value="${this.path}"
          @keydown="${this.handleInlineEditKeydown}"
          data-cy="inline-edit-field"
        />
      `}handleInlineEditKeydown(t){t.key==="Enter"&&this.confirmEdit(),t.key==="Escape"&&this.toggleEdit()}updated(t){if(super.updated(t),t.has("generatorContext")){let o=this.generatorContext?.prefillValues?.cwd;o&&(this.path=o,this.dispatchValue())}}dispatchValue(){this.dispatchEvent(new CustomEvent("cwd-changed",{bubbles:!0,composed:!0,detail:this.path}))}createRenderRoot(){return this}};g([B()],mo.prototype,"_path",2),g([B()],mo.prototype,"isEditable",2),mo=g([V("cwd-breadcrumb")],mo);var ir=class extends Z(R){constructor(){super(...arguments);this.appearance="primary";this.applyFillColor=!1}render(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return this.appearance==="icon"?h`
        <vscode-button appearance="icon">
          <icon-element
            class="flex items-start"
            icon="${this.text}"
            color="${this.color}"
            ?applyFillColor=${this.applyFillColor}
          ></icon-element>
        </vscode-button>
      `:h`<vscode-button appearance="${this.appearance}"
      >${this.text}</vscode-button
    >`}renderIntellij(){return this.appearance==="icon"?h`<div
        class="hover:bg-fieldNavHoverBackground cursor-pointer rounded p-1"
      >
        <icon-element
          icon="${this.text}"
          color="${this.color}"
          ?applyFillColor="${this.applyFillColor}"
        ></icon-element>
      </div>`:h`<button
      class="${pe} ${this.appearance==="primary"?"bg-primary focus:!ring-offset-1 focus:!ring-offset-background":'border !border-fieldBorder focus:!border-focusBorder"}'} whitespace-nowrap rounded px-4 py-1"
    >
      ${this.text}
    </button>`}createRenderRoot(){return this}};g([D()],ir.prototype,"text",2),g([D()],ir.prototype,"appearance",2),g([D()],ir.prototype,"color",2),g([D({type:Boolean})],ir.prototype,"applyFillColor",2),ir=g([V("button-element")],ir);var Tr=class extends Ti(Z(R)){constructor(){super(...arguments);this.showMore=!1}toggleShowMore(){this.showMore=!this.showMore}render(){let{optionsWithMetadata:t,numOfImportantOptions:o,numOfOtherOptions:i}=Hf(this.options,this.searchValue),s=this.showMore||!!this.searchValue||o===0,n=!!this.searchValue||i===0||o===0;return h`
      <div class="flex h-full w-full">
        <div
          class="border-separator ${this.editor==="intellij"?"hidden md:block":"max-sm:hidden md:w-64"} fixed h-full w-52 overflow-y-auto border-r-2  p-6"
        >
          ${this.renderOptionNav(t,s)}
        </div>
        <div
          class="${this.editor==="intellij"?"md:ml-52 md:p-6":"sm:ml-52 sm:p-6 md:ml-64"} w-full pt-6"
        >
          ${this.renderOptionsWithDivider(t,s,n)}
        </div>
      </div>
    `}renderOptionNav(t,o){return h`
      <ul>
        ${t.map(i=>{let s=this.searchValue&&!i.isInSearchResults,n=!o&&!i.isImportant;return h`<field-nav-item
            class="${s?"hidden":""}"
            .option="${i.option}"
            .greyedOut="${n}"
            @click=${a=>this.handleTreeClickEvent(a,n)}
          ></field-nav-item>`})}
      </ul>
    `}renderOptionsWithDivider(t,o,i){let s=(l,c=!1)=>{let d=Nf(l.option);return h` <div
        class="${c?"hidden":""} mb-4"
        id="option-${l.option.name}"
      >
        ${d}
      </div>`};if(this.searchValue&&t.every(l=>!l.isInSearchResults))return h` <div class="flex flex-col">
        <div class="m-auto">
          Couldn't find any options matching "${this.searchValue}"
        </div>
        <button-element
          appearance="secondary"
          text="Clear Search"
          class="m-auto pt-2"
          @click=${()=>this.clearSearch()}
        ></button-element>

        <div></div>
      </div>`;if(this.searchValue)return h`<div>
        ${t.map(l=>s(l,!l.isInSearchResults))}
      </div>`;let n=t.filter(l=>l.isImportant),a=t.filter(l=>!l.isImportant);return h`
      ${n.map(l=>s(l,!1))}
      <show-more-divider
        .showMore=${this.showMore}
        @show-more=${this.toggleShowMore}
        class="${i?"hidden":""}"
      ></show-more-divider>
      ${a.map(l=>s(l,!o))}
    `}firstUpdated(){this.updateComplete.then(()=>{let t=Array.from(this.renderRoot.querySelectorAll("*")).find(o=>o.id.toLowerCase().endsWith("-field")&&o instanceof HTMLElement);t&&t.focus()})}handleTreeClickEvent(t,o){let i=t.target.innerText;o&&(this.showMore=!0),setTimeout(()=>{let s=this.querySelector(`#option-${i}`);if(!s)return;s.scrollIntoView({behavior:"smooth",block:"start"});let n=this.querySelector(`#${i}-field`);if(!n)return;let a=new IntersectionObserver(l=>{l[0].isIntersecting&&(n.focus(),a.disconnect())},{rootMargin:"0px",threshold:1});a.observe(s)},100)}clearSearch(){let t=new CustomEvent("clear-search",{});this.dispatchEvent(t)}createRenderRoot(){return this}};g([D()],Tr.prototype,"options",2),g([D()],Tr.prototype,"searchValue",2),g([B()],Tr.prototype,"showMore",2),Tr=g([V("field-list")],Tr);var Nf=r=>r.type==="boolean"?h` <checkbox-field .option=${r}></checkbox-field>`:r.type==="array"?r.items?h` <multiselect-field .option=${r}></multiselect-field> `:h` <array-field .option=${r}></array-field>`:r.items?Vt(r).length>10?h`<autocomplete-field .option=${r}></autocomplete-field>`:h` <select-field .option=${r}></select-field>`:h` <input-field .option=${r}></input-field>`,Hf=(r,e)=>{let t=r.map(o=>({option:o,isInSearchResults:!e||o.name.includes(e),isImportant:o.isRequired||o["x-priority"]==="important"}));return{optionsWithMetadata:t,numOfImportantOptions:t.filter(o=>o.isImportant).length,numOfOtherOptions:t.filter(o=>!o.isImportant).length}};var pn=class extends Z(R){render(){return this.editor==="intellij"?h`
        <div class="relative inline-block w-full">
          <input
            class="${gt} ${pe} text-foreground w-full rounded px-2 py-2 pl-8 text-black"
            type="text"
            placeholder="Search..."
            @input="${this.handleInput}"
            id="search-bar"
          />
          <icon-element
            icon="search"
            class="absolute left-2 top-[0.7rem]"
          ></icon-element>
          <div class="absolute right-2 top-2.5">
            <kbd
              class="border-fieldBorder bg-selectFieldBackground whitespace-nowrap rounded-md border p-1 shadow"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </div>
      `:h`
        <vscode-text-field
          class="w-full"
          placeholder="Search..."
          type="text"
          @input="${this.handleInput}"
          id="search-bar"
        >
          <span slot="start">
            <icon-element icon="search"></icon-element>
          </span>
          <div slot="end">
            <kbd class="bg-background whitespace-nowrap"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </vscode-text-field>
      `}clearSearch(){let e=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-text-field":"input");e&&(e.value="",e.dispatchEvent(new Event("input")))}getKeyboardShortcutSymbol(){return window.navigator.platform.toLowerCase().includes("mac")?"\u2318":"Ctrl "}createRenderRoot(){return this}handleInput(e){let t=new CustomEvent("search-input",{detail:e.target.value});this.dispatchEvent(t)}};pn=g([V("search-bar")],pn);var Ir=class extends Z(R){constructor(){super(...arguments);this.message="";this.type="warning";this.dismissed=!1}dismiss(){this.dismissed=!0}render(){let t=this.type==="error"?"bg-bannerError":"bg-bannerWarning";return this.dismissed?h``:h`
      <div
        class="${t} text-bannerText mt-2 flex w-full flex-row rounded p-2 text-left opacity-80"
      >
        <p class="grow">${this.message}</p>
        <div @click="${this.dismiss}" class="px-2 py-1">
          ${this.editor==="intellij"?h`<icon-element
                icon="close"
                color="${getComputedStyle(this).getPropertyValue("--banner-text-color")}"
              ></icon-element>`:h`<icon-element icon="close"></icon-element>`}
        </div>
      </div>
    `}createRenderRoot(){return this}};g([D()],Ir.prototype,"message",2),g([D()],Ir.prototype,"type",2),g([B()],Ir.prototype,"dismissed",2),Ir=g([V("banner-element")],Ir);var Fr=class extends Z(R){constructor(){super(...arguments);this.color="";this.applyFillColor=!1}render(){return this.editor==="intellij"?h`<img
        src="./icons/${this.icon}.svg"
        class="h-[1.25rem]"
        @load="${this.applyColorToSVG}"
      ></img>`:h`<span
        class="codicon codicon-${this.icon}"
        style="text-align: center; font-size: 0.9rem; color: ${this.color}"
      ></span>`}async applyColorToSVG(){if(!this.color)return;let o=await(await fetch(`./icons/${this.icon}.svg`)).text(),s=new DOMParser().parseFromString(o,"image/svg+xml");s.querySelectorAll("path").forEach(l=>{this.applyFillColor&&l.setAttribute("fill",this.color),l.setAttribute("stroke",this.color)});let a=this.querySelector("img");a&&a.remove(),s.documentElement.classList.add("h-[1.25rem]"),this.appendChild(s.documentElement)}createRenderRoot(){return this}};g([D()],Fr.prototype,"icon",2),g([D()],Fr.prototype,"color",2),g([D({type:Boolean})],Fr.prototype,"applyFillColor",2),Fr=g([V("icon-element")],Fr);var go=class extends on(R){constructor(){super(...arguments);this.greyedOut=!1}render(){return h`
      <li
        data-cy="field-nav-item-${this.option.name}"
        @click="${this.handleTreeClickEvent}"
        class="${this.shouldRenderError()?"text-error":this.shouldRenderChanged()?"text-primary":this.greyedOut?"text-mutedForeground":"text-foreground"} hover:bg-fieldNavHoverBackground  cursor-pointer overflow-hidden 
          text-ellipsis"
      >
        ${this.option.name}
      </li>
    `}handleTreeClickEvent(){let t=new CustomEvent("click",{detail:this.option.name});this.dispatchEvent(t)}createRenderRoot(){return this}};g([D()],go.prototype,"option",2),g([D()],go.prototype,"greyedOut",2),go=g([V("field-nav-item")],go);var hi=class extends Z(R){constructor(){super(...arguments);this.showMore=!1}render(){return h`
      <div
        class="flex flex-row items-center space-x-4 pl-4"
        @click=${this.toggleShowMore}
        data-cy="show-more"
      >
        <hr
          class="grow h-0 ${this.editor==="intellij"?"border-separator":""}"
          style="${this.editor==="vscode"?"border-top: calc(var(--border-width) * 1px) solid var(--divider-background);":""}"
        />

        <div tabindex="0" aria-role="button" class="flex flex-row gap-2 leading-none focus:ring-1 focus:ring-focusBorder focus:outline-none" @keydown="${this.handleKeyEvent}">${this.showMore?"Show fewer options":"Show all options"} <icon-element icon="${this.showMore?"chevron-up":"chevron-down"}" class="self-center"></div>
      </div>
    `}handleKeyEvent(t){(t.key==="Enter"||t.key===" ")&&this.toggleShowMore(),t.key==="Tab"&&!t.shiftKey&&!this.showMore&&this.toggleShowMore()}toggleShowMore(){this.showMore=!this.showMore,this.dispatchEvent(new CustomEvent("show-more",{detail:this.showMore}))}createRenderRoot(){return this}};g([D()],hi.prototype,"showMore",2),hi=g([V("show-more-divider")],hi);var bo=class extends Z(R){render(){return h`
      <div
        tabindex="0"
        class="bg-badgeBackground text-badgeForeground focus:ring-focusBorder ${this.editorSpecificStyles()} flex flex-row gap-1 rounded p-2 pb-0 focus:outline-none"
        @keydown="${this.handleEnterKeyRemove}"
        data-cy="${this.fieldId}-item"
      >
        <p class="leading-none">${this.text}</p>
        <icon-element
          @click="${this.handleClickRemove}"
          icon="close"
          data-cy="${this.fieldId}-remove-button"
        ></icon-element>
      </div>
    `}editorSpecificStyles(){return this.editor==="intellij"?"border border-fieldBorder focus:ring-2":"focus:ring-1 focus:!ring-offset-1 focus:!ring-offset-background"}handleEnterKeyRemove(t){(t.key==="Enter"||t.key===" ")&&this.dispatchEvent(new CustomEvent("remove"))}handleClickRemove(){this.dispatchEvent(new CustomEvent("remove"))}createRenderRoot(){return this}};g([D()],bo.prototype,"text",2),g([D()],bo.prototype,"fieldId",2),bo=g([V("badge-element")],bo);var vo=class extends R{constructor(){super();this.content="";this.isPopoverVisible=!1;this.addEventListener("mouseover",this.showTooltip),this.addEventListener("mouseout",this.hideTooltip)}showTooltip(){this.isPopoverVisible=!0}hideTooltip(){this.isPopoverVisible=!1}render(){return h`
      <div class="relative inline-block">
        <slot></slot>
        <div
          class="${this.isPopoverVisible?"block":"hidden"}  tooltip-content border-fieldBorder bg-badgeBackground text-foreground absolute left-0 z-10 w-max max-w-md whitespace-normal border p-1 shadow-md"
          data-cy="popover-content"
        >
          ${this.content}
        </div>
      </div>
    `}createRenderRoot(){return this}};g([D({type:String})],vo.prototype,"content",2),g([B()],vo.prototype,"isPopoverVisible",2),vo=g([V("popover-element")],vo);Qu().register(rn({prefix:"vscode",styles:eu,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),rn({prefix:"intellij",styles:Ju,indicator:`<img
        src="./icons/chevron-down.svg"
        class="h-[1.25rem]"
      ></img>`}),Fl({prefix:"intellij",styles:Ku}));Xc().register(xa(),Aa(),wa(),$a(),ka());var pi=class extends R{constructor(){super();this.searchValue="";this.icc=new Ii(this),this.formValuesService=new Ri(this),window.addEventListener("keydown",t=>this.handleGlobalKeyboardShortcuts(t))}render(){let t=this.icc.generatorSchema?.options;return h` <div
      class="text-foreground m-auto flex h-screen max-w-screen-xl flex-col p-6"
    >
      <div
        class="bg-background border-separator sticky top-0 z-50 w-full border-b-2 pb-3"
      >
        ${this.renderHeader()}
      </div>
      <div class="grow overflow-auto">
        ${!t||t.length===0?h`<p>No options</p>`:h` <field-list
              class="h-full"
              .options="${t}"
              .searchValue="${this.searchValue}"
              @clear-search="${()=>this.clearSearch()}"
            ></field-list>`}
      </div>
    </div>`}renderHeader(){let t=this.icc.generatorSchema?.collectionName?.includes("@nx")||this.icc.generatorSchema?.collectionName?.includes("@nrwl"),o=`https://nx.dev/packages/${this.icc.generatorSchema?.collectionName?.replace("@nrwl/","")?.replace("@nx/","")}/generators/${this.icc.generatorSchema?.generatorName}`;return h`
      <div>
        <header class="flex items-center justify-between">
          <div class="flex flex-col flex-wrap items-start gap-2">
            <h1 class="text-xl font-bold leading-none" data-cy="title">
              ${sc(this.icc.generatorSchema)}
            </h1>
            <h2
              class="inline-flex text-lg font-medium leading-none"
              data-cy="subtitle"
            >
              ${this.icc.generatorSchema?.collectionName}
              <popover-element
                class="flex items-center pl-2 text-base"
                .content="${this.icc.generatorSchema?.description}"
              >
                <icon-element class="flex items-start" icon="info">
                </icon-element>
              </popover-element>
            </h2>
          </div>

          <div class="flex shrink-0">
            ${oe(t&&this.icc.editor==="vscode",()=>h`
                  <button-element
                    @click="${()=>this.openNxDev(o)}"
                    title="Open generator documentation on nx.dev"
                    appearance="icon"
                    text="link-external"
                    class="focus:ring-focusBorder flex items-center py-2 pl-3 focus:outline-none focus:ring-1"
                  >
                  </button-element>
                `)}
            <button-element
              class="flex items-center py-2 pl-3"
              appearance="icon"
              text="copy"
              title="Copy generate command to clipboard"
              @click="${()=>this.formValuesService.copyCommandToClipboard()}"
              data-cy="copy-button"
            >
            </button-element>
            ${oe(!this.icc.configuration?.enableTaskExecutionDryRunOnChange,()=>h`<button-element
                    class="py-2 pl-3 sm:hidden"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="debug"
                    appearance="icon"
                    title="Dry Run"
                  >
                  </button-element>
                  <button-element
                    class="hidden py-2 pl-3 sm:block"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="Dry Run"
                    appearance="secondary"
                  >
                  </button-element> `)}

            <button-element
              class="py-2 pl-3"
              @click="${()=>this.formValuesService.runGenerator()}"
              text="Generate"
              data-cy="generate-button"
            >
            </button-element>
          </div>
        </header>
        ${oe(this.icc.banner,()=>h` <banner-element
              message="${this.icc.banner?.message}"
              type="${this.icc.banner?.type}"
            ></banner-element>`)}
        <div class="mt-5">
          <search-bar
            @search-input="${this.handleSearchValueChange}"
          ></search-bar>
          <cwd-breadcrumb></cwd-breadcrumb>
        </div>
      </div>
    `}handleSearchValueChange(t){this.searchValue=t.detail}clearSearch(){let t=this.renderRoot.querySelector("search-bar");t&&t.clearSearch()}handleGlobalKeyboardShortcuts(t){if(t.key==="Enter"&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),t.shiftKey?this.formValuesService.runGenerator(!0):this.formValuesService.runGenerator()),t.key==="s"&&(t.metaKey||t.ctrlKey)){t.preventDefault();let o=this.renderRoot.querySelector('[id="search-bar"]');o&&o.focus()}}openNxDev(t){let o=document.createElement("a");o.href=t,o.target="_blank",o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}createRenderRoot(){return this}};g([B()],pi.prototype,"searchValue",2),pi=g([V("root-element")],pi);export{pi as Root};
/*! Bundled license information:

@lit/reactive-element/node/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

lit-html/node/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/