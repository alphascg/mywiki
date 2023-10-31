"use strict";const o=require("vue"),x=require("./Icon.js"),S=require("./CdxButton.js"),$=require("./CdxMenu.js"),k=require("./CdxTextInput.js"),W=require("./useModelWrapper.js"),F=require("./useGeneratedId.js"),N=require("./useSplitAttributes.js"),A=require("./useFieldData.js"),D=require("./useFloatingMenu.js"),v=require("./constants.js"),K=require("./_plugin-vue_export-helper.js");require("./useIconOnlyButton.js");require("./useSlotContents.js");require("./useWarnOnce.js");require("./CdxMenuItem.js");require("./CdxThumbnail.js");require("./CdxSearchResultTitle.js");require("./CdxProgressBar.js");require("./useIntersectionObserver.js");const E=v.makeStringTypeValidator(v.ValidationStatusTypes),z=o.defineComponent({name:"CdxCombobox",components:{CdxButton:S,CdxIcon:x.CdxIcon,CdxMenu:$,CdxTextInput:k},inheritAttrs:!1,props:{menuItems:{type:Array,required:!0},selected:{type:[String,Number],required:!0},disabled:{type:Boolean,default:!1},menuConfig:{type:Object,default:()=>({})},status:{type:String,default:"default",validator:E}},emits:["update:selected","load-more","input","change","focus","blur"],setup(e,{emit:t,attrs:c,slots:m}){const s=o.ref(),b=o.ref(),r=o.ref(),l=F.useGeneratedId("combobox"),i=o.toRef(e,"selected"),p=W.useModelWrapper(i,t,"update:selected"),n=o.ref(!1),a=o.ref(!1),C=o.computed(()=>{var u,f;return(f=(u=r.value)==null?void 0:u.getHighlightedMenuItem())==null?void 0:f.id}),{computedDisabled:d}=A.useFieldData(o.toRef(e,"disabled")),g=o.computed(()=>({"cdx-combobox--expanded":n.value,"cdx-combobox--disabled":d.value})),{rootClasses:I,rootStyle:q,otherAttrs:y}=N.useSplitAttributes(c,g);function w(u){a.value&&n.value?n.value=!1:(e.menuItems.length>0||m["no-results"])&&(n.value=!0),t("focus",u)}function B(u){n.value=a.value&&n.value,t("blur",u)}function V(){d.value||(a.value=!0)}function h(){var u;d.value||(u=s.value)==null||u.focus()}function M(u){!r.value||d.value||e.menuItems.length===0||u.key===" "||r.value.delegateKeyNavigation(u)}return D.useFloatingMenu(s,r),o.watch(n,()=>{a.value=!1}),{input:s,inputWrapper:b,menu:r,menuId:l,modelWrapper:p,expanded:n,highlightedId:C,computedDisabled:d,onInputFocus:w,onInputBlur:B,onKeydown:M,onButtonClick:h,onButtonMousedown:V,cdxIconExpand:x.z3,rootClasses:I,rootStyle:q,otherAttrs:y}}});const P={ref:"inputWrapper",class:"cdx-combobox__input-wrapper"};function T(e,t,c,m,s,b){const r=o.resolveComponent("cdx-text-input"),l=o.resolveComponent("cdx-icon"),i=o.resolveComponent("cdx-button"),p=o.resolveComponent("cdx-menu");return o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass(["cdx-combobox",e.rootClasses]),style:o.normalizeStyle(e.rootStyle)},[o.createElementVNode("div",P,[o.createVNode(r,o.mergeProps({ref:"input",modelValue:e.modelWrapper,"onUpdate:modelValue":t[0]||(t[0]=n=>e.modelWrapper=n)},e.otherAttrs,{class:"cdx-combobox__input","aria-activedescendant":e.highlightedId,"aria-expanded":e.expanded,"aria-controls":e.menuId,disabled:e.computedDisabled,status:e.status,autocomplete:"off",role:"combobox",onKeydown:e.onKeydown,onInput:t[1]||(t[1]=n=>e.$emit("input",n)),onChange:t[2]||(t[2]=n=>e.$emit("change",n)),onFocus:e.onInputFocus,onBlur:e.onInputBlur}),null,16,["modelValue","aria-activedescendant","aria-expanded","aria-controls","disabled","status","onKeydown","onFocus","onBlur"]),o.createVNode(i,{class:"cdx-combobox__expand-button","aria-hidden":"true",disabled:e.computedDisabled,tabindex:"-1",type:"button",onMousedown:e.onButtonMousedown,onClick:e.onButtonClick},{default:o.withCtx(()=>[o.createVNode(l,{class:"cdx-combobox__expand-icon",icon:e.cdxIconExpand},null,8,["icon"])]),_:1},8,["disabled","onMousedown","onClick"])],512),o.createVNode(p,o.mergeProps({id:e.menuId,ref:"menu",selected:e.modelWrapper,"onUpdate:selected":t[3]||(t[3]=n=>e.modelWrapper=n),expanded:e.expanded,"onUpdate:expanded":t[4]||(t[4]=n=>e.expanded=n),"menu-items":e.menuItems},e.menuConfig,{onLoadMore:t[5]||(t[5]=n=>e.$emit("load-more"))}),{default:o.withCtx(({menuItem:n})=>[o.renderSlot(e.$slots,"menu-item",{menuItem:n})]),"no-results":o.withCtx(()=>[o.renderSlot(e.$slots,"no-results")]),_:3},16,["id","selected","expanded","menu-items"])],6)}const U=K._export_sfc(z,[["render",T]]);module.exports=U;
