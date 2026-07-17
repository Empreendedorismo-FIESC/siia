import{a9 as ot,o as g,a as S,d as it,m as y,i as q,B as G,aX as Q,x as j,E as W,z as at,at as lt,j as Y,Y as ht,k as L,F as Z,r as U,e as R,b as ct,G as st,b0 as ut,f as _,q as x,t as dt}from"./index-Ddzo0E9G.js";var mt={name:"ChevronDownIcon",extends:ot};function ft(e,t,i,n,r,s){return g(),S("svg",y({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[it("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}mt.render=ft;var pt=q`
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`,vt=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

.p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    inset-block-start: 0;
    inset-inline-start: 0;
}
`,tt=G.extend({name:"virtualscroller",css:vt,style:pt}),gt={name:"BaseVirtualScroller",extends:Y,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:tt,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var t;tt.loadCSS({nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce})}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function et(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,n)}return i}function M(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?et(Object(i),!0).forEach(function(n){nt(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):et(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function nt(e,t,i){return(t=yt(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function yt(e){var t=bt(e,"string");return E(t)=="symbol"?t:t+""}function bt(e,t){if(E(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(E(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var St={name:"VirtualScroller",extends:gt,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var t=this.isBoth();return{first:t?{rows:0,cols:0}:0,last:t?{rows:0,cols:0}:0,page:t?{rows:0,cols:0}:0,numItemsInViewport:t?{rows:0,cols:0}:0,lastScrollPos:t?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,resizeObserver:null,initialized:!1,watch:{numToleratedItems:function(t){this.d_numToleratedItems=t},loading:function(t,i){this.lazy&&t!==i&&t!==this.d_loading&&(this.d_loading=t)},items:{handler:function(t,i){(!i||i.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},deep:!0},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){Q(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.bindResizeListener(),this.defaultWidth=j(this.element),this.defaultHeight=W(this.element),this.defaultContentWidth=j(this.content),this.defaultContentHeight=W(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(t){this.element&&this.element.scrollTo(t)},scrollToIndex:function(t){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",r=this.isBoth(),s=this.isHorizontal(),a=r?t.every(function(B){return B>-1}):t>-1;if(a){var l=this.first,h=this.element,c=h.scrollTop,o=c===void 0?0:c,u=h.scrollLeft,d=u===void 0?0:u,b=this.calculateNumItems(),p=b.numToleratedItems,v=this.getContentPosition(),z=this.itemSize,P=function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,V=arguments.length>1?arguments[1]:void 0;return C<=V?0:C},I=function(C,V,A){return C*V+A},O=function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.scrollTo({left:C,top:V,behavior:n})},m=r?{rows:0,cols:0}:0,$=!1,T=!1;r?(m={rows:P(t[0],p[0]),cols:P(t[1],p[1])},O(I(m.cols,z[1],v.left),I(m.rows,z[0],v.top)),T=this.lastScrollPos.top!==o||this.lastScrollPos.left!==d,$=m.rows!==l.rows||m.cols!==l.cols):(m=P(t,p),s?O(I(m,z,v.left),o):O(d,I(m,z,v.top)),T=this.lastScrollPos!==(s?d:o),$=m!==l),this.isRangeChanged=$,T&&(this.first=m)}},scrollInView:function(t,i){var n=this,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(i){var s=this.isBoth(),a=this.isHorizontal(),l=s?t.every(function(z){return z>-1}):t>-1;if(l){var h=this.getRenderedRange(),c=h.first,o=h.viewport,u=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:P,top:I,behavior:r})},d=i==="to-start",b=i==="to-end";if(d){if(s)o.first.rows-c.rows>t[0]?u(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-c.cols>t[1]&&u((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-c>t){var p=(o.first-1)*this.itemSize;a?u(p,0):u(0,p)}}else if(b){if(s)o.last.rows-c.rows<=t[0]+1?u(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-c.cols<=t[1]+1&&u((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-c<=t+1){var v=(o.first+1)*this.itemSize;a?u(v,0):u(0,v)}}}}else this.scrollToIndex(t,r)},getRenderedRange:function(){var t=function(u,d){return Math.floor(u/(d||u))},i=this.first,n=0;if(this.element){var r=this.isBoth(),s=this.isHorizontal(),a=this.element,l=a.scrollTop,h=a.scrollLeft;if(r)i={rows:t(l,this.itemSize[0]),cols:t(h,this.itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{var c=s?h:l;i=t(c,this.itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}},calculateNumItems:function(){var t=this.isBoth(),i=this.isHorizontal(),n=this.itemSize,r=this.getContentPosition(),s=this.element?this.element.offsetWidth-r.left:0,a=this.element?this.element.offsetHeight-r.top:0,l=function(d,b){return Math.ceil(d/(b||d))},h=function(d){return Math.ceil(d/2)},c=t?{rows:l(a,n[0]),cols:l(s,n[1])}:l(i?s:a,n),o=this.d_numToleratedItems||(t?[h(c.rows),h(c.cols)]:h(c));return{numItemsInViewport:c,numToleratedItems:o}},calculateOptions:function(){var t=this,i=this.isBoth(),n=this.first,r=this.calculateNumItems(),s=r.numItemsInViewport,a=r.numToleratedItems,l=function(o,u,d){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.getLast(o+u+(o<d?2:3)*d,b)},h=i?{rows:l(n.rows,s.rows,a[0]),cols:l(n.cols,s.cols,a[1],!0)}:l(n,s,a);this.last=h,this.numItemsInViewport=s,this.d_numToleratedItems=a,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=i?Array.from({length:s.rows}).map(function(){return Array.from({length:s.cols})}):Array.from({length:s})),this.lazy&&Promise.resolve().then(function(){var c;t.lazyLoadState={first:t.step?i?{rows:0,cols:n.cols}:0:n,last:Math.min(t.step?t.step:h,((c=t.items)===null||c===void 0?void 0:c.length)||0)},t.$emit("lazy-load",t.lazyLoadState)})},calculateAutoSize:function(){var t=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(t.content){var i=t.isBoth(),n=t.isHorizontal(),r=t.isVertical();t.content.style.minHeight=t.content.style.minWidth="auto",t.content.style.position="relative",t.element.style.contain="none";var s=[j(t.element),W(t.element)],a=s[0],l=s[1];(i||n)&&(t.element.style.width=a<t.defaultWidth?a+"px":t.scrollWidth||t.defaultWidth+"px"),(i||r)&&(t.element.style.height=l<t.defaultHeight?l+"px":t.scrollHeight||t.defaultHeight+"px"),t.content.style.minHeight=t.content.style.minWidth="",t.content.style.position="",t.element.style.contain=""}})},getLast:function(){var t,i,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(r?((t=this.columns||this.items[0])===null||t===void 0?void 0:t.length)||0:((i=this.items)===null||i===void 0?void 0:i.length)||0,n):0},getContentPosition:function(){if(this.content){var t=getComputedStyle(this.content),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),n=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),r=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),s=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:n,top:r,bottom:s,x:i+n,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var t=this;if(this.element){var i=this.isBoth(),n=this.isHorizontal(),r=this.element.parentElement,s=this.scrollWidth||"".concat(this.element.offsetWidth||r.offsetWidth,"px"),a=this.scrollHeight||"".concat(this.element.offsetHeight||r.offsetHeight,"px"),l=function(c,o){return t.element.style[c]=o};i||n?(l("height",a),l("width",s)):l("height",a)}},setSpacerSize:function(){var t=this,i=this.items;if(i){var n=this.isBoth(),r=this.isHorizontal(),s=this.getContentPosition(),a=function(h,c,o){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return t.spacerStyle=M(M({},t.spacerStyle),nt({},"".concat(h),(c||[]).length*o+u+"px"))};n?(a("height",i,this.itemSize[0],s.y),a("width",this.columns||i[1],this.itemSize[1],s.x)):r?a("width",this.columns||i,this.itemSize,s.x):a("height",i,this.itemSize,s.y)}},setContentPosition:function(t){var i=this;if(this.content&&!this.appendOnly){var n=this.isBoth(),r=this.isHorizontal(),s=t?t.first:this.first,a=function(o,u){return o*u},l=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.contentStyle=M(M({},i.contentStyle),{transform:"translate3d(".concat(o,"px, ").concat(u,"px, 0)")})};if(n)l(a(s.cols,this.itemSize[1]),a(s.rows,this.itemSize[0]));else{var h=a(s,this.itemSize);r?l(h,0):l(0,h)}}},onScrollPositionChange:function(t){var i=this,n=t.target,r=this.isBoth(),s=this.isHorizontal(),a=this.getContentPosition(),l=function(f,w){return f?f>w?f-w:f:0},h=function(f,w){return Math.floor(f/(w||f))},c=function(f,w,N,K,k,H){return f<=k?k:H?N-K-k:w+k-1},o=function(f,w,N,K,k,H,D,rt){if(f<=H)return 0;var X=Math.max(0,D?f<w?N:f-H:f>w?N:f-2*H),J=i.getLast(X,rt);return X>J?J-k:X},u=function(f,w,N,K,k,H){var D=w+K+2*k;return f>=k&&(D+=k+1),i.getLast(D,H)},d=l(n.scrollTop,a.top),b=l(n.scrollLeft,a.left),p=r?{rows:0,cols:0}:0,v=this.last,z=!1,P=this.lastScrollPos;if(r){var I=this.lastScrollPos.top<=d,O=this.lastScrollPos.left<=b;if(!this.appendOnly||this.appendOnly&&(I||O)){var m={rows:h(d,this.itemSize[0]),cols:h(b,this.itemSize[1])},$={rows:c(m.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],I),cols:c(m.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],O)};p={rows:o(m.rows,$.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],I),cols:o(m.cols,$.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],O,!0)},v={rows:u(m.rows,p.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u(m.cols,p.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},z=p.rows!==this.first.rows||v.rows!==this.last.rows||p.cols!==this.first.cols||v.cols!==this.last.cols||this.isRangeChanged,P={top:d,left:b}}}else{var T=s?b:d,B=this.lastScrollPos<=T;if(!this.appendOnly||this.appendOnly&&B){var C=h(T,this.itemSize),V=c(C,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,B);p=o(C,V,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,B),v=u(C,p,this.last,this.numItemsInViewport,this.d_numToleratedItems),z=p!==this.first||v!==this.last||this.isRangeChanged,P=T}}return{first:p,last:v,isRangeChanged:z,scrollPos:P}},onScrollChange:function(t){var i=this.onScrollPositionChange(t),n=i.first,r=i.last,s=i.isRangeChanged,a=i.scrollPos;if(s){var l={first:n,last:r};if(this.setContentPosition(l),this.first=n,this.last=r,this.lastScrollPos=a,this.$emit("scroll-index-change",l),this.lazy&&this.isPageChanged(n)){var h,c,o={first:this.step?Math.min(this.getPageByFirst(n)*this.step,(((h=this.items)===null||h===void 0?void 0:h.length)||0)-this.step):n,last:Math.min(this.step?(this.getPageByFirst(n)+1)*this.step:r,((c=this.items)===null||c===void 0?void 0:c.length)||0)},u=this.lazyLoadState.first!==o.first||this.lazyLoadState.last!==o.last;u&&this.$emit("lazy-load",o),this.lazyLoadState=o}}},onScroll:function(t){var i=this;if(this.$emit("scroll",t),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var n=this.onScrollPositionChange(t),r=n.isRangeChanged,s=r||(this.step?this.isPageChanged():!1);s&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){i.onScrollChange(t),i.d_loading&&i.showLoader&&(!i.lazy||i.loading===void 0)&&(i.d_loading=!1,i.page=i.getPageByFirst())},this.delay)}}else this.onScrollChange(t)},onResize:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(Q(t.element)){var i=t.isBoth(),n=t.isVertical(),r=t.isHorizontal(),s=[j(t.element),W(t.element)],a=s[0],l=s[1],h=a!==t.defaultWidth,c=l!==t.defaultHeight,o=i?h||c:r?h:n?c:!1;o&&(t.d_numToleratedItems=t.numToleratedItems,t.defaultWidth=a,t.defaultHeight=l,t.defaultContentWidth=j(t.content),t.defaultContentHeight=W(t.content),t.init())}},this.resizeDelay)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener),this.resizeObserver=new ResizeObserver(function(){t.onResize()}),this.resizeObserver.observe(this.element))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},getOptions:function(t){var i=(this.items||[]).length,n=this.isBoth()?this.first.rows+t:this.first+t;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions:function(t,i){var n=this.loaderArr.length;return M({index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0},i)},getPageByFirst:function(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(t){return this.step&&!this.lazy?this.page!==this.getPageByFirst(t??this.first):!0},setContentEl:function(t){this.content=t||this.content||at(this.element,'[data-pc-section="content"]')},elementRef:function(t){this.element=t},contentRef:function(t){this.content=t}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var t=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(i){return t.columns?i:i.slice(t.appendOnly?0:t.first.cols,t.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var t=this.isBoth(),i=this.isHorizontal();if(t||i)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:lt}},zt=["tabindex"];function wt(e,t,i,n,r,s){var a=ht("SpinnerIcon");return e.disabled?(g(),S(Z,{key:1},[L(e.$slots,"default"),L(e.$slots,"content",{items:e.items,rows:e.items,columns:s.loadedColumns})],64)):(g(),S("div",y({key:0,ref:s.elementRef,class:s.containerClass,tabindex:e.tabindex,style:e.style,onScroll:t[0]||(t[0]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},e.ptmi("root")),[L(e.$slots,"content",{styleClass:s.contentClass,items:s.loadedItems,getItemOptions:s.getOptions,loading:r.d_loading,getLoaderOptions:s.getLoaderOptions,itemSize:e.itemSize,rows:s.loadedRows,columns:s.loadedColumns,contentRef:s.contentRef,spacerStyle:r.spacerStyle,contentStyle:r.contentStyle,vertical:s.isVertical(),horizontal:s.isHorizontal(),both:s.isBoth()},function(){return[it("div",y({ref:s.contentRef,class:s.contentClass,style:r.contentStyle},e.ptm("content")),[(g(!0),S(Z,null,U(s.loadedItems,function(l,h){return L(e.$slots,"item",{key:h,item:l,options:s.getOptions(h)})}),128))],16)]}),e.showSpacer?(g(),S("div",y({key:0,class:"p-virtualscroller-spacer",style:r.spacerStyle},e.ptm("spacer")),null,16)):R("",!0),!e.loaderDisabled&&e.showLoader&&r.d_loading?(g(),S("div",y({key:1,class:s.loaderClass},e.ptm("loader")),[e.$slots&&e.$slots.loader?(g(!0),S(Z,{key:0},U(r.loaderArr,function(l,h){return L(e.$slots,"loader",{key:h,options:s.getLoaderOptions(h,s.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})}),128)):R("",!0),L(e.$slots,"loadingicon",{},function(){return[ct(a,y({spin:"",class:"p-virtualscroller-loading-icon"},e.ptm("loadingIcon")),null,16)]})],16)):R("",!0)],16,zt))}St.render=wt;var It=q`
    .p-skeleton {
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,Ct={root:{position:"relative"}},kt={root:function(t){var i=t.props;return["p-skeleton p-component",{"p-skeleton-circle":i.shape==="circle","p-skeleton-animation-none":i.animation==="none"}]}},Pt=G.extend({name:"skeleton",style:It,classes:kt,inlineStyles:Ct}),Bt={name:"BaseSkeleton",extends:Y,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Pt,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function F(e){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(e)}function Lt(e,t,i){return(t=Ot(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ot(e){var t=Tt(e,"string");return F(t)=="symbol"?t:t+""}function Tt(e,t){if(F(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(F(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Vt={name:"Skeleton",extends:Bt,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return st(Lt({},this.shape,this.shape))}}},Ht=["data-p"];function Rt(e,t,i,n,r,s){return g(),S("div",y({class:e.cx("root"),style:[e.sx("root"),s.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":s.dataP}),null,16,Ht)}Vt.render=Rt;var $t=q`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,At={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Nt=G.extend({name:"chip",style:$t,classes:At}),jt={name:"BaseChip",extends:Y,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Nt,provide:function(){return{$pcChip:this,$parentInstance:this}}},Wt={name:"Chip",extends:jt,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},computed:{dataP:function(){return st({removable:this.removable})}},components:{TimesCircleIcon:ut}},Mt=["aria-label","data-p"],Et=["src"];function Ft(e,t,i,n,r,s){return r.visible?(g(),S("div",y({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":s.dataP}),[L(e.$slots,"default",{},function(){return[e.image?(g(),S("img",y({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Et)):e.$slots.icon?(g(),_(x(e.$slots.icon),y({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(g(),S("span",y({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):R("",!0),e.label?(g(),S("div",y({key:3,class:e.cx("label")},e.ptm("label")),dt(e.label),17)):R("",!0)]}),e.removable?L(e.$slots,"removeicon",{key:0,removeCallback:s.close,keydownCallback:s.onKeydown},function(){return[(g(),_(x(e.removeIcon?"span":"TimesCircleIcon"),y({class:[e.cx("removeIcon"),e.removeIcon],onClick:s.close,onKeydown:s.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):R("",!0)],16,Mt)):R("",!0)}Wt.render=Ft;export{Wt as a,mt as b,St as c,Vt as s};
