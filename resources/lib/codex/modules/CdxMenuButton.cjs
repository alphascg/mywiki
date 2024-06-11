"use strict";const t=require("vue"),q=require("./CdxToggleButton.cjs"),C=require("./CdxMenu.cjs"),v=require("./useFieldData.cjs"),I=require("./useFloatingMenu.cjs"),m=require("./useGeneratedId.cjs"),B=require("./useModelWrapper.cjs"),V=require("./useSplitAttributes.cjs"),w=require("./_plugin-vue_export-helper.js"),x=t.defineComponent({name:"CdxMenuButton",components:{CdxToggleButton:q,CdxMenu:C},inheritAttrs:!1,props:{selected:{type:[String,Number,null],required:!0},menuItems:{type:Array,required:!0},menuConfig:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1}},emits:["update:selected"],setup(e,{emit:n,attrs:u}){const d=t.ref(),r=t.ref(),a=t.toRef(e,"selected"),s=B(a,n,"update:selected"),l=t.ref(!1),o=m("menuToggle"),g=m("menu"),{computedDisabled:i}=v(t.toRef(e,"disabled")),{rootClasses:c,rootStyle:f,otherAttrs:b}=V(u);function y(p){!d.value||i.value||e.menuItems.length===0||p.key===" "||d.value.delegateKeyNavigation(p)}return I(r,d,{useAvailableWidth:!0,placement:"bottom-start",offset:4}),{computedDisabled:i,expanded:l,menu:d,menuId:g,modelWrapper:s,onKeydown:y,toggle:r,toggleId:o,rootClasses:c,rootStyle:f,otherAttrs:b}}}),A={class:"cdx-menu-button__menu-wrapper"};function S(e,n,u,d,r,a){const s=t.resolveComponent("cdx-toggle-button"),l=t.resolveComponent("cdx-menu");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-menu-button",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.createVNode(s,t.mergeProps({id:e.toggleId,ref:"toggle"},e.otherAttrs,{modelValue:e.expanded,"onUpdate:modelValue":n[0]||(n[0]=o=>e.expanded=o),disabled:e.computedDisabled,quiet:"","aria-haspopup":"menu","aria-controls":e.menuId,"aria-expanded":e.expanded,onBlur:n[1]||(n[1]=o=>e.expanded=!1),onKeydown:e.onKeydown}),{default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:3},16,["id","modelValue","disabled","aria-controls","aria-expanded","onKeydown"]),t.createElementVNode("div",A,[t.createVNode(l,t.mergeProps({id:e.menuId,ref:"menu",selected:e.modelWrapper,"onUpdate:selected":n[2]||(n[2]=o=>e.modelWrapper=o),expanded:e.expanded,"onUpdate:expanded":n[3]||(n[3]=o=>e.expanded=o),"menu-items":e.menuItems},e.menuConfig,{role:"menu","aria-labelledby":e.toggleId}),null,16,["id","selected","expanded","menu-items","aria-labelledby"])])],6)}const $=w._export_sfc(x,[["render",S]]);module.exports=$;
