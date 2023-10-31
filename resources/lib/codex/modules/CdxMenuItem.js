"use strict";const e=require("vue"),y=require("./Icon.js"),f=require("./CdxThumbnail.js"),b=require("./CdxSearchResultTitle.js"),k=require("./_plugin-vue_export-helper.js");require("./constants.js");const B=e.defineComponent({name:"CdxMenuItem",components:{CdxIcon:y.CdxIcon,CdxThumbnail:f,CdxSearchResultTitle:b},props:{id:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},active:{type:Boolean,default:!1},highlighted:{type:Boolean,default:!1},label:{type:String,default:""},match:{type:String,default:""},supportingText:{type:String,default:""},url:{type:String,default:""},icon:{type:[String,Object],default:""},showThumbnail:{type:Boolean,default:!1},thumbnail:{type:[Object,null],default:null},description:{type:[String,null],default:""},searchQuery:{type:String,default:""},boldLabel:{type:Boolean,default:!1},hideDescriptionOverflow:{type:Boolean,default:!1},language:{type:Object,default:()=>({})}},emits:["change"],setup:(t,{emit:n})=>{const u=()=>{t.highlighted||n("change","highlighted",!0)},r=()=>{n("change","highlighted",!1)},d=i=>{i.button===0&&n("change","active",!0)},c=()=>{n("change","selected",!0)},o=e.computed(()=>t.searchQuery.length>0),s=e.computed(()=>({"cdx-menu-item--selected":t.selected,"cdx-menu-item--active":t.active&&t.highlighted,"cdx-menu-item--highlighted":t.highlighted,"cdx-menu-item--enabled":!t.disabled,"cdx-menu-item--disabled":t.disabled,"cdx-menu-item--highlight-query":o.value,"cdx-menu-item--bold-label":t.boldLabel,"cdx-menu-item--has-description":!!t.description,"cdx-menu-item--hide-description-overflow":t.hideDescriptionOverflow})),a=e.computed(()=>t.url?"a":"span"),l=e.computed(()=>t.label||String(t.value));return{onMouseMove:u,onMouseLeave:r,onMouseDown:d,onClick:c,highlightQuery:o,rootClasses:s,contentTag:a,title:l}}});const v=["id","aria-disabled","aria-selected"],C={class:"cdx-menu-item__text"},M=["lang"],S=["lang"],_=["lang"],q=["lang"];function N(t,n,u,r,d,c){const o=e.resolveComponent("cdx-thumbnail"),s=e.resolveComponent("cdx-icon"),a=e.resolveComponent("cdx-search-result-title");return e.openBlock(),e.createElementBlock("li",{id:t.id,role:"option",class:e.normalizeClass(["cdx-menu-item",t.rootClasses]),"aria-disabled":t.disabled,"aria-selected":t.selected,onMousemove:n[0]||(n[0]=(...l)=>t.onMouseMove&&t.onMouseMove(...l)),onMouseleave:n[1]||(n[1]=(...l)=>t.onMouseLeave&&t.onMouseLeave(...l)),onMousedown:n[2]||(n[2]=e.withModifiers((...l)=>t.onMouseDown&&t.onMouseDown(...l),["prevent"])),onClick:n[3]||(n[3]=(...l)=>t.onClick&&t.onClick(...l))},[e.renderSlot(t.$slots,"default",{},()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.contentTag),{href:t.url?t.url:void 0,class:"cdx-menu-item__content"},{default:e.withCtx(()=>{var l,i,m,g,h,p;return[t.showThumbnail?(e.openBlock(),e.createBlock(o,{key:0,thumbnail:t.thumbnail,class:"cdx-menu-item__thumbnail"},null,8,["thumbnail"])):t.icon?(e.openBlock(),e.createBlock(s,{key:1,icon:t.icon,class:"cdx-menu-item__icon"},null,8,["icon"])):e.createCommentVNode("",!0),e.createElementVNode("span",C,[t.highlightQuery?(e.openBlock(),e.createBlock(a,{key:0,title:t.title,"search-query":t.searchQuery,lang:(l=t.language)==null?void 0:l.label},null,8,["title","search-query","lang"])):(e.openBlock(),e.createElementBlock("span",{key:1,class:"cdx-menu-item__text__label",lang:(i=t.language)==null?void 0:i.label},[e.createElementVNode("bdi",null,e.toDisplayString(t.title),1)],8,M)),t.match?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[e.createTextVNode(e.toDisplayString(" ")+" "),t.highlightQuery?(e.openBlock(),e.createBlock(a,{key:0,title:t.match,"search-query":t.searchQuery,lang:(m=t.language)==null?void 0:m.match},null,8,["title","search-query","lang"])):(e.openBlock(),e.createElementBlock("span",{key:1,class:"cdx-menu-item__text__match",lang:(g=t.language)==null?void 0:g.match},[e.createElementVNode("bdi",null,e.toDisplayString(t.match),1)],8,S))],64)):e.createCommentVNode("",!0),t.supportingText?(e.openBlock(),e.createElementBlock(e.Fragment,{key:3},[e.createTextVNode(e.toDisplayString(" ")+" "),e.createElementVNode("span",{class:"cdx-menu-item__text__supporting-text",lang:(h=t.language)==null?void 0:h.supportingText},[e.createElementVNode("bdi",null,e.toDisplayString(t.supportingText),1)],8,_)],64)):e.createCommentVNode("",!0),t.description?(e.openBlock(),e.createElementBlock("span",{key:4,class:"cdx-menu-item__text__description",lang:(p=t.language)==null?void 0:p.description},[e.createElementVNode("bdi",null,e.toDisplayString(t.description),1)],8,q)):e.createCommentVNode("",!0)])]}),_:1},8,["href"]))])],42,v)}const V=k._export_sfc(B,[["render",N]]);module.exports=V;
