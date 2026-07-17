import{i as J,B as Q,G as A,j as ie,o as l,a as s,k as h,m as r,t as w,f as T,n as I,q as Y,e as b,ap as V,Z as R,aq as k,J as O,ar as oe,a0 as ne,ai as ae,D as re,a1 as le,a2 as se,l as ue,as as B,z as de,a3 as pe,at as ce,R as fe,Y as x,H as he,an as me,F as j,r as N,b as z,w as C,d as L,a5 as ye,au as ge,Q as G,p as ve}from"./index-Ddzo0E9G.js";import{O as be,C as Oe,s as we,b as Ie}from"./api-CAmJdpFC.js";import{c as Se,b as ke,a as xe}from"./index-CfL5CxFX.js";var Ce=J`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,Le={root:function(e){var i=e.props;return["p-avatar p-component",{"p-avatar-image":i.image!=null,"p-avatar-circle":i.shape==="circle","p-avatar-lg":i.size==="large","p-avatar-xl":i.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Me=Q.extend({name:"avatar",style:Ce,classes:Le}),Ke={name:"BaseAvatar",extends:ie,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Me,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function H(t,e,i){return(e=De(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function De(t){var e=Pe(t,"string");return M(e)=="symbol"?e:e+""}function Pe(t,e){if(M(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(M(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ze={name:"Avatar",extends:Ke,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return A(H(H({},this.shape,this.shape),this.size,this.size))}}},Ae=["aria-labelledby","aria-label","data-p"],Te=["data-p"],Ve=["data-p"],Ee=["src","alt","data-p"];function Fe(t,e,i,n,a,o){return l(),s("div",r({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":o.dataP}),[h(t.$slots,"default",{},function(){return[t.label?(l(),s("span",r({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":o.dataP}),w(t.label),17,Te)):t.$slots.icon?(l(),T(Y(t.$slots.icon),{key:1,class:I(t.cx("icon"))},null,8,["class"])):t.icon?(l(),s("span",r({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":o.dataP}),null,16,Ve)):t.image?(l(),s("img",r({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image"),{"data-p":o.dataP}),null,16,Ee)):b("",!0)]})],16,Ae)}ze.render=Fe;var Re=J`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete .p-autocomplete-overlay {
        min-width: 100%;
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete.p-disabled .p-autocomplete-input-multiple {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }
`,Be={root:{position:"relative"}},je={root:function(e){var i=e.instance,n=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":n.disabled,"p-invalid":i.$invalid,"p-focus":i.focused,"p-inputwrapper-filled":i.$filled||V(i.inputValue),"p-inputwrapper-focus":i.focused,"p-autocomplete-open":i.overlayVisible,"p-autocomplete-fluid":i.$fluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){var i=e.instance;return["p-autocomplete-input-multiple",{"p-variant-filled":i.$variant==="filled"}]},chipItem:function(e){var i=e.instance,n=e.i;return["p-autocomplete-chip-item",{"p-focus":i.focusedMultipleOptionIndex===n}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var i=e.instance,n=e.option,a=e.i,o=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":i.isSelected(n),"p-focus":i.focusedOptionIndex===i.getOptionIndex(a,o),"p-disabled":i.isOptionDisabled(n)}]},emptyMessage:"p-autocomplete-empty-message"},Ge=Q.extend({name:"autocomplete",style:Re,classes:je,inlineStyles:Be}),$e={name:"BaseAutoComplete",extends:Ie,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ge,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function U(t,e,i){return(e=Ne(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ne(t){var e=He(t,"string");return S(e)=="symbol"?e:e+""}function He(t,e){if(S(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(S(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function q(t){return Ze(t)||We(t)||qe(t)||Ue()}function Ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qe(t,e){if(t){if(typeof t=="string")return $(t,e);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?$(t,e):void 0}}function We(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ze(t){if(Array.isArray(t))return $(t)}function $(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}var Je={name:"AutoComplete",extends:$e,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,startRangeIndex:-1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(R.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?k(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,i){return(this.dataKey?k(e,this.dataKey):this.getOptionLabel(e))+"_"+i},getPTOptions:function(e,i,n,a){return this.ptm(a,{context:{option:e,index:n,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(n,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?k(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return k(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return k(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(n){return i.isOptionGroup(n)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&O(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var i=this,n=function(){var o;i.$emit("before-hide"),i.dirty=e,i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,e&&O(i.multiple?i.$refs.focusInput:(o=i.$refs.focusInput)===null||o===void 0?void 0:o.$el)};setTimeout(function(){n()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var i,n;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e),(i=(n=this.formField).onBlur)===null||i===void 0||i.call(n)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var i=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var n=e.target.value;this.multiple||this.updateModel(e,n),n.length===0?(this.hide(),this.$emit("clear")):n.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){i.search(e,n,"input")},this.delay)):this.hide()}},onChange:function(e){var i=this;if(this.forceSelection){var n=!1;if(this.visibleOptions&&!this.multiple){var a,o=this.multiple?this.$refs.focusInput.value:(a=this.$refs.focusInput)===null||a===void 0||(a=a.$el)===null||a===void 0?void 0:a.value,c=this.visibleOptions.find(function(E){return i.isOptionMatched(E,o||"")});c!==void 0&&(n=!0,!this.isSelected(c)&&this.onOptionSelect(e,c))}if(!n){if(this.multiple)this.$refs.focusInput.value="";else{var m,v=(m=this.$refs.focusInput)===null||m===void 0?void 0:m.$el;v&&(v.value="")}this.$emit("clear"),!this.multiple&&this.updateModel(e,null)}}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&O(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var i=void 0;if(this.overlayVisible)this.hide(!0);else{var n=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;O(n),i=n.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:i})},onOptionSelect:function(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=this.getOptionValue(i);this.multiple?(this.$refs.focusInput.value="",this.isSelected(i)||this.updateModel(e,[].concat(q(this.d_value||[]),[a]))):this.updateModel(e,a),this.$emit("item-select",{originalEvent:e,value:i}),this.$emit("option-select",{originalEvent:e,value:i}),n&&this.hide(!0)},onOptionMouseMove:function(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)},onOptionSelectRange:function(e){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(n===-1&&(n=this.findNearestSelectedOptionIndex(a,!0)),a===-1&&(a=this.findNearestSelectedOptionIndex(n)),n!==-1&&a!==-1){var o=Math.min(n,a),c=Math.max(n,a),m=this.visibleOptions.slice(o,c+1).filter(function(v){return i.isValidOption(v)}).map(function(v){return i.getOptionValue(v)});this.updateModel(e,m)}},onOverlayClick:function(e){be.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,i),this.changeFocusedOptionIndex(e,i),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var i=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex),this.changeFocusedOptionIndex(e,i),e.preventDefault()}},onArrowLeftKey:function(e){var i=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(oe(i.value)&&this.$filled?(O(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var i=e.currentTarget,n=i.value.length,a=e.metaKey||e.ctrlKey,o=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&a&&this.onOptionSelectRange(e,o,this.startRangeIndex),i.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var i=e.currentTarget,n=i.value.length,a=e.metaKey||e.ctrlKey,o=this.findLastOptionIndex();this.multiple&&e.shiftKey&&a&&this.onOptionSelectRange(e,this.startRangeIndex,o),i.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?(this.onOptionSelectRange(e,this.focusedOptionIndex),e.preventDefault()):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&e.target.value.trim()&&(this.updateModel(e,[].concat(q(this.d_value||[]),[e.target.value.trim()])),this.$refs.focusInput.value="")},onSpaceKey:function(e){this.focusedOptionIndex!==-1&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onBackspaceKey:function(e){if(this.multiple){if(V(this.d_value)&&!this.$refs.focusInput.value){var i=this.d_value[this.d_value.length-1],n=this.d_value.slice(0,-1);this.writeValue(n,e),this.$emit("item-unselect",{originalEvent:e,value:i}),this.$emit("option-unselect",{originalEvent:e,value:i})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,O(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){R.set("overlay",e,this.$primevue.config.zIndex.overlay),ne(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.$attrSelector&&e.setAttribute(this.$attrSelector,"")},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){R.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?ae(this.overlay,e):(this.overlay.style.minWidth=re(e)+"px",le(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){e.overlayVisible&&e.overlay&&e.isOutsideClicked(i)&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Oe(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!se()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,i){var n;return this.isValidOption(e)&&((n=this.getOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale))===i.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return V(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,i){return ue(e,i,this.equalityKey)},isSelected:function(e){var i=this,n=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(a){return i.isEquals(a,n)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return B(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,n=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(a){return i.isValidOption(a)}):-1;return n>-1?n+e+1:e},findPrevOptionIndex:function(e){var i=this,n=e>0?B(this.visibleOptions.slice(0,e),function(a){return i.isValidOption(a)}):-1;return n>-1?n:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,i,n){i!=null&&(n==="input"&&i.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:i})))},removeOption:function(e,i){var n=this,a=this.d_value[i],o=this.d_value.filter(function(c,m){return m!==i}).map(function(c){return n.getOptionValue(c)});this.updateModel(e,o),this.$emit("item-unselect",{originalEvent:e,value:a}),this.$emit("option-unselect",{originalEvent:e,value:a}),this.dirty=!0,O(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[i],!1))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var n=i!==-1?"".concat(e.$id,"_").concat(i):e.focusedOptionId,a=de(e.list,'li[id="'.concat(n,'"]'));a?a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,i){this.writeValue(i,e),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(n,a,o){n.push({optionGroup:a,group:!0,index:o});var c=i.getOptionGroupChildren(a);return c&&c.forEach(function(m){return n.push(m)}),n},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e},findNextSelectedOptionIndex:function(e){var i=this,n=this.$filled&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(a){return i.isValidSelectedOption(a)}):-1;return n>-1?n+e+1:-1},findPrevSelectedOptionIndex:function(e){var i=this,n=this.$filled&&e>0?B(this.visibleOptions.slice(0,e),function(a){return i.isValidSelectedOption(a)}):-1;return n>-1?n:-1},findNearestSelectedOptionIndex:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=-1;return this.$filled&&(i?(n=this.findPrevSelectedOptionIndex(e),n=n===-1?this.findNextSelectedOptionIndex(e):n):(n=this.findNextSelectedOptionIndex(e),n=n===-1?this.findPrevSelectedOptionIndex(e):n)),n>-1?n:e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(S(this.d_value)==="object"){var e=this.getOptionLabel(this.d_value);return e??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return V(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.$id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.$id+"_panel"},containerDataP:function(){return A({fluid:this.$fluid})},overlayDataP:function(){return A(U({},"portal-"+this.appendTo,"portal-"+this.appendTo))},inputMultipleDataP:function(){return A(U({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant==="filled",empty:!this.$filled},this.size,this.size))}},components:{InputText:we,VirtualScroller:Se,Portal:pe,ChevronDownIcon:ke,SpinnerIcon:ce,Chip:xe},directives:{ripple:fe}};function K(t){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(t)}function W(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,n)}return i}function Z(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?W(Object(i),!0).forEach(function(n){Qe(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Qe(t,e,i){return(e=Ye(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ye(t){var e=Xe(t,"string");return K(e)=="symbol"?e:e+""}function Xe(t,e){if(K(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(K(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var _e=["data-p"],et=["aria-activedescendant","data-p-has-dropdown","data-p"],tt=["id","aria-label","aria-setsize","aria-posinset"],it=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],ot=["data-p-has-dropdown"],nt=["disabled","aria-expanded","aria-controls"],at=["id","data-p"],rt=["id","aria-label"],lt=["id"],st=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function ut(t,e,i,n,a,o){var c=x("InputText"),m=x("Chip"),v=x("SpinnerIcon"),E=x("VirtualScroller"),X=x("Portal"),_=he("ripple");return l(),s("div",r({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return o.onContainerClick&&o.onContainerClick.apply(o,arguments)}),"data-p":o.containerDataP},t.ptmi("root")),[t.multiple?b("",!0):(l(),T(c,{key:0,ref:"focusInput",id:t.inputId,type:"text",name:t.$formName,class:I([t.cx("pcInputText"),t.inputClass]),style:me(t.inputStyle),defaultValue:o.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:t.$fluid,disabled:t.disabled,size:t.size,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":o.panelId,"aria-activedescendant":a.focused?o.focusedOptionId:void 0,onFocus:o.onFocus,onBlur:o.onBlur,onKeydown:o.onKeyDown,onInput:o.onInput,onChange:o.onChange,unstyled:t.unstyled,"data-p-has-dropdown":t.dropdown,pt:t.ptm("pcInputText")},null,8,["id","name","class","style","defaultValue","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","data-p-has-dropdown","pt"])),t.multiple?(l(),s("ul",r({key:1,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":a.focused?o.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return o.onMultipleContainerFocus&&o.onMultipleContainerFocus.apply(o,arguments)}),onBlur:e[6]||(e[6]=function(){return o.onMultipleContainerBlur&&o.onMultipleContainerBlur.apply(o,arguments)}),onKeydown:e[7]||(e[7]=function(){return o.onMultipleContainerKeyDown&&o.onMultipleContainerKeyDown.apply(o,arguments)}),"data-p-has-dropdown":t.dropdown,"data-p":o.inputMultipleDataP},t.ptm("inputMultiple")),[(l(!0),s(j,null,N(t.d_value,function(p,u){return l(),s("li",r({key:"".concat(u,"_").concat(o.getOptionLabel(p)),id:t.$id+"_multiple_option_"+u,class:t.cx("chipItem",{i:u}),role:"option","aria-label":o.getOptionLabel(p),"aria-selected":!0,"aria-setsize":t.d_value.length,"aria-posinset":u+1,ref_for:!0},t.ptm("chipItem")),[h(t.$slots,"chip",r({class:t.cx("pcChip"),value:p,index:u,removeCallback:function(y){return o.removeOption(y,u)},ref_for:!0},t.ptm("pcChip")),function(){return[z(m,{class:I(t.cx("pcChip")),label:o.getOptionLabel(p),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(y){return o.removeOption(y,u)},"data-p-focused":a.focusedMultipleOptionIndex===u,pt:t.ptm("pcChip")},{removeicon:C(function(){return[h(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:I(t.cx("chipIcon")),index:u,removeCallback:function(y){return o.removeOption(y,u)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","data-p-focused","pt"])]})],16,tt)}),128)),L("li",r({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[L("input",r({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":t.$id+"_list","aria-activedescendant":a.focused?o.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),onInput:e[3]||(e[3]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onChange:e[4]||(e[4]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},t.ptm("input")),null,16,it)],16)],16,et)):b("",!0),a.searching||t.loading?h(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:2,class:I(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(l(),s("i",r({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true","data-p-has-dropdown":t.dropdown},t.ptm("loader")),null,16,ot)):(l(),T(v,r({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true","data-p-has-dropdown":t.dropdown},t.ptm("loader")),null,16,["class","data-p-has-dropdown"]))]}):b("",!0),h(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(u){return o.onDropdownClick(u)}},function(){return[t.dropdown?(l(),s("button",r({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":a.overlayVisible,"aria-controls":o.panelId,onClick:e[8]||(e[8]=function(){return o.onDropdownClick&&o.onDropdownClick.apply(o,arguments)})},t.ptm("dropdown")),[h(t.$slots,"dropdownicon",{class:I(t.dropdownIcon)},function(){return[(l(),T(Y(t.dropdownIcon?"span":"ChevronDownIcon"),r({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,nt)):b("",!0)]}),t.typeahead?(l(),s("span",r({key:3,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),w(o.searchResultMessageText),17)):b("",!0),z(X,{appendTo:t.appendTo},{default:C(function(){return[z(ye,r({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:C(function(){return[a.overlayVisible?(l(),s("div",r({key:0,ref:o.overlayRef,id:o.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:Z(Z({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[10]||(e[10]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)}),"data-p":o.overlayDataP},t.ptm("overlay")),[h(t.$slots,"header",{value:t.d_value,suggestions:o.visibleOptions}),L("div",r({class:t.cx("listContainer"),style:{"max-height":o.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[z(E,r({ref:o.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:o.visibleOptions,tabindex:-1,disabled:o.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),ge({content:C(function(p){var u=p.styleClass,D=p.contentRef,y=p.items,g=p.getItemOptions,ee=p.contentStyle,P=p.itemSize;return[L("ul",r({ref:function(f){return o.listRef(f,D)},id:t.$id+"_list",class:[t.cx("list"),u],style:ee,role:"listbox","aria-label":o.listAriaLabel},t.ptm("list")),[(l(!0),s(j,null,N(y,function(d,f){return l(),s(j,{key:o.getOptionRenderKey(d,o.getOptionIndex(f,g))},[o.isOptionGroup(d)?(l(),s("li",r({key:0,id:t.$id+"_"+o.getOptionIndex(f,g),style:{height:P?P+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[h(t.$slots,"optiongroup",{option:d.optionGroup,index:o.getOptionIndex(f,g)},function(){return[G(w(o.getOptionGroupLabel(d.optionGroup)),1)]})],16,lt)):ve((l(),s("li",r({key:1,id:t.$id+"_"+o.getOptionIndex(f,g),style:{height:P?P+"px":void 0},class:t.cx("option",{option:d,i:f,getItemOptions:g}),role:"option","aria-label":o.getOptionLabel(d),"aria-selected":o.isSelected(d),"aria-disabled":o.isOptionDisabled(d),"aria-setsize":o.ariaSetSize,"aria-posinset":o.getAriaPosInset(o.getOptionIndex(f,g)),onClick:function(F){return o.onOptionSelect(F,d)},onMousemove:function(F){return o.onOptionMouseMove(F,o.getOptionIndex(f,g))},"data-p-selected":o.isSelected(d),"data-p-focused":a.focusedOptionIndex===o.getOptionIndex(f,g),"data-p-disabled":o.isOptionDisabled(d),ref_for:!0},o.getPTOptions(d,g,f,"option")),[h(t.$slots,"option",{option:d,index:o.getOptionIndex(f,g)},function(){return[G(w(o.getOptionLabel(d)),1)]})],16,st)),[[_]])],64)}),128)),t.showEmptyMessage&&(!y||y&&y.length===0)?(l(),s("li",r({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[h(t.$slots,"empty",{},function(){return[G(w(o.searchResultMessageText),1)]})],16)):b("",!0)],16,rt)]}),_:2},[t.$slots.loader?{name:"loader",fn:C(function(p){var u=p.options;return[h(t.$slots,"loader",{options:u})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),h(t.$slots,"footer",{value:t.d_value,suggestions:o.visibleOptions}),L("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),w(o.selectedMessageText),17)],16,at)):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,_e)}Je.render=ut;export{Je as a,ze as s};
