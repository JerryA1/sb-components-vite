import{j as v}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const x=({label:o,size:b="normal",allCaps:C=!1,color:h,fontColor:T})=>v.jsx("span",{className:`${b} ${h} label`,style:{color:T},children:C?o.toUpperCase():o});x.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"The text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"The size of the text",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"The color of the text"},fontColor:{required:!1,tsType:{name:"string"},description:"The font color of the text"}}};const w={title:"UI/labels/MyLabel",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Hello, world!"}},a={args:{label:"All caps",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom color",fontColor:"purple"}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Hello, world!"
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,p,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "All caps",
    allCaps: true
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    color: "text-secondary"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,f,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Custom color",
    fontColor: "purple"
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const z=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,z as __namedExportsOrder,w as default};
