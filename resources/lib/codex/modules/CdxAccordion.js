"use strict";const e=require("vue"),r=require("./Icon.js"),p=require("./CdxButton.js"),s=require("./useGeneratedId.js"),_=require("./_plugin-vue_export-helper.js");require("./constants.js");require("./useIconOnlyButton.js");require("./useSlotContents.js");require("./useWarnOnce.js");const m=e.defineComponent({name:"CdxAccordion",components:{CdxButton:p,CdxIcon:r.CdxIcon},props:{actionAlwaysVisible:{type:Boolean,default:!1},actionIcon:{type:[String,Object],default:null},actionButtonLabel:{type:String,default:""},headingLevel:{type:String,default:"h3"}},emits:["action-button-click"],setup(o,{emit:i}){const n=e.ref(!1),a=s.useGeneratedId("accordion"),d=s.useGeneratedId("accordion-panel"),l=()=>{n.value=!n.value},c=()=>{i("action-button-click")},t=e.computed(()=>o.actionIcon&&(n.value||o.actionAlwaysVisible)),u=e.computed(()=>({"cdx-accordion--has-icon":t}));return{cdxIconExpand:r.z3,emitActionButtonClick:c,isExpanded:n,rootClasses:u,shouldShowActionButton:t,toggle:l,accordionId:a,accordionPanelId:d}}});const g={class:"cdx-accordion__toggle__title"},h={class:"cdx-accordion__toggle__title-text"},C={class:"cdx-accordion__toggle__description"},b=["id","aria-labelledby","aria-hidden"];function x(o,i,n,a,d,l){const c=e.resolveComponent("cdx-icon"),t=e.resolveComponent("cdx-button");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["cdx-accordion",o.rootClasses])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.headingLevel),{class:"cdx-accordion__header"},{default:e.withCtx(()=>[e.createVNode(t,{id:o.accordionId,"aria-expanded":o.isExpanded,"aria-controls":o.accordionPanelId,class:"cdx-accordion__toggle",type:"button",weight:"quiet",onClick:o.toggle},{default:e.withCtx(()=>[e.createElementVNode("span",g,[e.createVNode(c,{class:"cdx-accordion__toggle__title-icon",icon:o.cdxIconExpand,size:"small"},null,8,["icon"]),e.createElementVNode("span",h,[e.renderSlot(o.$slots,"title")])]),e.createElementVNode("span",C,[e.renderSlot(o.$slots,"description")])]),_:3},8,["id","aria-expanded","aria-controls","onClick"]),o.shouldShowActionButton?(e.openBlock(),e.createBlock(t,{key:0,class:"cdx-accordion__action","aria-label":o.actionButtonLabel,type:"button",weight:"quiet",onClick:o.emitActionButtonClick},{default:e.withCtx(()=>[e.createVNode(c,{icon:o.actionIcon,"icon-label":o.actionButtonLabel,size:"medium"},null,8,["icon","icon-label"])]),_:1},8,["aria-label","onClick"])):e.createCommentVNode("",!0)]),_:3})),e.withDirectives(e.createElementVNode("div",{id:o.accordionPanelId,"aria-labelledby":o.accordionId,"aria-hidden":o.isExpanded?void 0:!0,class:"cdx-accordion__content",role:"region"},[e.renderSlot(o.$slots,"default")],8,b),[[e.vShow,o.isExpanded]])],2)}const I=_._export_sfc(m,[["render",x]]);module.exports=I;
