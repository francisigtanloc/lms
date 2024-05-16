import{r as N,aI as H,aJ as X,j as x,w as U,n as W,x as n,G as F,H as d,N as w,A as s,aA as Y,V as g,ax as B,ay as O,B as b,T as D,y as p,C as L,L as I,aK as Z,aL as ee,J,K,F as j,aM as te,aN as R,aa as se,M as E,aO as ae,aP as G,k as le,aQ as re,I as oe}from"./frappe-ui-CgFK8870.js";import{C as ue}from"./index-GARLdoCV.js";import{X as ne}from"./x-KQP2i48Y.js";import{P as ie}from"./plus-CsLQFB36.js";const de={class:"w-full"},ce=["onClick"],pe={class:"flex items-center"},fe={key:0,class:"overflow-hidden text-ellipsis whitespace-nowrap text-base leading-5"},me={key:1,class:"text-base leading-5 text-gray-500"},ye={class:"mt-1 rounded-lg bg-white py-1 text-base shadow-2xl"},ve={class:"relative px-1.5 pt-0.5"},be={key:0,class:"px-2.5 py-1.5 text-sm font-medium text-gray-500"},ge={key:0,class:"mt-1.5 rounded-md px-2.5 py-1.5 text-base text-gray-600"},he={key:0,class:"border-t p-1.5 pb-0.5"},xe={__name:"Autocomplete",props:{modelValue:{type:String,default:""},options:{type:Array,default:()=>[]},size:{type:String,default:"md"},variant:{type:String,default:"subtle"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0}},emits:["update:modelValue","update:query","change"],setup(T,{expose:q,emit:f}){const r=T,u=f,c=N(""),h=N(!1),C=N(null),k=H(),S=X(),$=x(()=>"value"in k),_=x({get(){return $.value?k.value:r.modelValue},set(t){c.value="",t&&(h.value=!1),u($.value?"change":"update:modelValue",t)}});function e(){h.value=!1}const m=x(()=>{var a;return!r.options||r.options.length==0?[]:((a=r.options[0])!=null&&a.group?r.options:[{group:"",items:r.options}]).map((l,o)=>({key:o,group:l.group,hideLabel:l.hideLabel||!1,items:r.filterable?i(l.items):l.items})).filter(l=>l.items.length>0)});function i(t){return c.value?t.filter(a=>[a.label,a.value].some(o=>(o||"").toString().toLowerCase().includes(c.value.toLowerCase()))):t}function y(t){if(typeof t=="string"){let l=m.value.flatMap(o=>o.items).find(o=>o.value===t);return(l==null?void 0:l.label)||t}return t==null?void 0:t.label}U(c,t=>{u("update:query",t)}),U(h,t=>{t&&W(()=>{C.value.el.focus()})});const V=x(()=>r.disabled?"text-gray-600":"text-gray-800"),Q=x(()=>{let t={sm:"text-base rounded h-7",md:"text-base rounded h-8",lg:"text-lg rounded-md h-10",xl:"text-xl rounded-md h-10"}[r.size],a={sm:"py-1.5 px-2",md:"py-1.5 px-2.5",lg:"py-1.5 px-3",xl:"py-1.5 px-3"}[r.size],l=r.disabled?"disabled":r.variant,o={subtle:"border border-gray-100 bg-gray-100 placeholder-gray-500 hover:border-gray-200 hover:bg-gray-200 focus:bg-white focus:border-gray-500 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400",outline:"border border-gray-300 bg-white placeholder-gray-500 hover:border-gray-400 hover:shadow-sm focus:bg-white focus:border-gray-500 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400",disabled:["border bg-gray-50 placeholder-gray-400",r.variant==="outline"?"border-gray-300":"border-transparent"]}[l];return[t,a,o,V.value,"transition-colors w-full"]});return q({query:c}),(t,a)=>(n(),F(s(ae),{modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=l=>_.value=l),nullable:""},{default:d(({open:l})=>[w(s(Y),{class:"w-full",show:h.value,"onUpdate:show":a[2]||(a[2]=o=>h.value=o)},{target:d(({open:o,togglePopover:P})=>[g(t.$slots,"target",B(O({open:o,togglePopover:P})),()=>[b("div",de,[b("button",{class:D(["flex w-full items-center justify-between focus:outline-none",Q.value]),onClick:()=>P()},[b("div",pe,[g(t.$slots,"prefix"),_.value?(n(),p("span",fe,L(y(_.value)),1)):(n(),p("span",me,L(T.placeholder||""),1))]),w(s(ue),{class:"h-4 w-4 stroke-1.5"})],10,ce)])])]),body:d(({isOpen:o})=>{var P;return[I(b("div",null,[b("div",ye,[b("div",ve,[w(s(Z),{ref_key:"search",ref:C,class:"form-input w-full",type:"text",onChange:a[0]||(a[0]=v=>{c.value=v.target.value}),value:c.value,autocomplete:"off",placeholder:"Search"},null,8,["value"]),b("button",{class:"absolute right-1.5 inline-flex h-7 w-7 items-center justify-center",onClick:a[1]||(a[1]=v=>_.value=null)},[w(s(ne),{class:"h-4 w-4 stroke-1.5"})])]),w(s(ee),{class:"my-1 max-h-[12rem] overflow-y-auto px-1.5",static:""},{default:d(()=>[(n(!0),p(J,null,K(m.value,v=>I((n(),p("div",{class:"mt-1.5",key:v.key},[v.group&&!v.hideLabel?(n(),p("div",be,L(v.group),1)):j("",!0),(n(!0),p(J,null,K(v.items,z=>(n(),F(s(te),{as:"template",key:z.value,value:z},{default:d(({active:A,selected:M})=>[b("li",{class:D(["flex items-center rounded px-2.5 py-1.5 text-base",{"bg-gray-100":A}])},[g(t.$slots,"item-prefix",R({ref_for:!0},{active:A,selected:M,option:z})),g(t.$slots,"item-label",R({ref_for:!0},{active:A,selected:M,option:z}),()=>[se(L(z.label),1)])],2)]),_:2},1032,["value"]))),128))])),[[E,v.items.length>0]])),128)),m.value.length==0?(n(),p("li",ge," No results found ")):j("",!0)]),_:3}),s(S).footer?(n(),p("div",he,[g(t.$slots,"footer",B(O({value:(P=C.value)==null?void 0:P.el._value,close:e})))])):j("",!0)])],512),[[E,o]])]}),_:3},8,["show"])]),_:3},8,["modelValue"]))}},we={class:"space-y-1.5"},Se={__name:"Link",props:{doctype:{type:String,required:!0},filters:{type:Object,default:()=>({})},modelValue:{type:String,default:""}},emits:["update:modelValue","change"],setup(T,{emit:q}){const f=T,r=q,u=H(),c=x(()=>"value"in u),h=x({get:()=>c.value?u.value:f.modelValue,set:e=>(e==null?void 0:e.value)&&r(c.value?"change":"update:modelValue",e==null?void 0:e.value)}),C=N(null),k=N("");G(()=>{var e;return(e=C.value)==null?void 0:e.query},e=>{e=e||"",k.value!==e&&(k.value=e,$(e))},{debounce:300,immediate:!0}),G(()=>f.doctype,()=>$(""),{debounce:300,immediate:!0});const S=le({url:"frappe.desk.search.search_link",cache:[f.doctype,k.value],method:"POST",params:{txt:k.value,doctype:f.doctype,filters:f.filters},transform:e=>e.map(m=>({label:m.value,value:m.value}))});function $(e){S.update({params:{txt:e,doctype:f.doctype,filters:f.filters}}),S.reload()}const _=x(()=>[{sm:"text-xs",md:"text-base"}[u.size||"sm"],"text-gray-600"]);return(e,m)=>(n(),p("div",we,[s(u).label?(n(),p("label",{key:0,class:D(["block",_.value])},L(s(u).label),3)):j("",!0),w(xe,{ref_key:"autocomplete",ref:C,options:s(S).data,modelValue:h.value,"onUpdate:modelValue":m[0]||(m[0]=i=>h.value=i),size:s(u).size||"sm",variant:s(u).variant,placeholder:s(u).placeholder,filterable:!1},re({target:d(({open:i,togglePopover:y})=>[g(e.$slots,"target",B(O({open:i,togglePopover:y})))]),prefix:d(()=>[g(e.$slots,"prefix")]),"item-prefix":d(({active:i,selected:y,option:V})=>[g(e.$slots,"item-prefix",B(O({active:i,selected:y,option:V})))]),"item-label":d(({active:i,selected:y,option:V})=>[g(e.$slots,"item-label",B(O({active:i,selected:y,option:V})))]),_:2},[s(u).onCreate?{name:"footer",fn:d(({value:i,close:y})=>[b("div",null,[w(s(oe),{variant:"ghost",class:"w-full !justify-start",label:"Create New",onClick:V=>s(u).onCreate(i,y)},{prefix:d(()=>[w(s(ie),{class:"h-4 w-4 stroke-1.5"})]),_:2},1032,["onClick"])])]),key:"0"}:void 0]),1032,["options","modelValue","size","variant","placeholder"])]))}};export{Se as _};
//# sourceMappingURL=Link-IMATFM6Y.js.map
