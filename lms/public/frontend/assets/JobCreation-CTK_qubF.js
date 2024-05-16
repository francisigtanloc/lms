var I=Object.defineProperty;var V=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var w=(r,m,n)=>m in r?I(r,m,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[m]=n,c=(r,m)=>{for(var n in m||(m={}))L.call(m,n)&&w(r,n,m[n]);if(V)for(var n of V(m))R.call(m,n)&&w(r,n,m[n]);return r};import{k as b,a as A,s as M,j as _,x as g,y as j,B as a,N as i,A as t,H as y,C as d,G,d as H,a9 as W,aa as C,I as x,ai as u,ar as X,aw as q,S as K}from"./frappe-ui-CgFK8870.js";import{d as k,i as Q}from"./index-GARLdoCV.js";import{F as Y}from"./file-text-DHp4eWlu.js";import{X as Z}from"./x-KQP2i48Y.js";const ee={class:""},oe={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-white px-3 py-2.5 sm:px-5"},le={class:"py-5"},ae={class:"container border-b mb-4 pb-4"},se={class:"text-lg font-semibold mb-4"},te={class:"grid grid-cols-2 gap-4"},ne={class:"mt-4"},ie={class:"block text-gray-600 text-xs mb-1"},me={class:"container mb-4 pb-4"},re={class:"text-lg font-semibold mb-4"},de={class:"grid grid-cols-2 gap-4"},ue={class:"block text-gray-600 text-xs mb-1 mt-4"},pe={class:"mb-4"},be={key:1,class:""},ce={class:"flex items-center"},_e={class:"border rounded-md p-2 mr-2"},ge={class:"flex flex-col"},ye={class:"text-sm text-gray-500 mt-1"},Ce={__name:"JobCreation",props:{jobName:{type:String,default:"new"}},setup(r){const m=H("$user"),n=K(),p=r,J=b({url:"frappe.client.insert",makeParams(e){return{doc:c({doctype:"Job Opportunity",company_logo:l.image.file_url},l)}}}),T=b({url:"frappe.client.set_value",makeParams(e){return{doctype:"Job Opportunity",name:p.jobName,fieldname:c({company_logo:l.image.file_url},l)}}}),f=b({url:"frappe.client.get",makeParams(e){return{doctype:"Job Opportunity",name:p.jobName}},onSuccess(e){Object.keys(e).forEach(o=>{Object.hasOwn(l,o)&&(l[o]=e[o])}),e.company_logo&&N.reload({image:e.company_logo})}}),N=b({url:"lms.lms.api.get_file_info",makeParams(e){return{file_url:e.image}},auto:!1,onSuccess(e){l.image=e}}),l=A({job_title:"",location:"",type:"Full Time",status:"Open",company_name:"",company_website:"",image:null,description:"",company_email_address:""});M(()=>{m.data||(window.location.href="/login"),p.jobName!="new"&&f.reload()});const S=()=>{f.data?h():F()},F=()=>{J.submit({},{onSuccess(e){n.push({name:"JobDetail",params:{job:e.name}})},onError(e){var o;k("Error",((o=e.messages)==null?void 0:o[0])||e,"x")}})},h=()=>{T.submit({},{onSuccess(e){n.push({name:"JobDetail",params:{job:e.name}})},onError(e){var o;k("Error",((o=e.messages)==null?void 0:o[0])||e,"x")}})},O=e=>{l.image=e},U=()=>{l.image=null},E=e=>{let o=e.name.split(".").pop().toLowerCase();if(!["jpg","jpeg","png"].includes(o))return"Only image file is allowed."},D=_(()=>[{label:"Full Time",value:"Full Time"},{label:"Part Time",value:"Part Time"},{label:"Contract",value:"Contract"},{label:"Freelance",value:"Freelance"}]),$=_(()=>[{label:"Open",value:"Open"},{label:"Closed",value:"Closed"}]),P=_(()=>[{label:"Jobs",route:{name:"Jobs"}},{label:p.jobName=="new"?"New Job":"Edit Job",route:{name:"JobCreation"}}]);return(e,o)=>(g(),j("div",ee,[a("header",oe,[i(t(W),{items:P.value},null,8,["items"]),i(t(x),{variant:"solid",onClick:o[0]||(o[0]=s=>S())},{default:y(()=>[C(d(e.__("Save")),1)]),_:1})]),a("div",le,[a("div",ae,[a("div",se,d(e.__("Job Details")),1),a("div",te,[a("div",null,[i(t(u),{modelValue:l.job_title,"onUpdate:modelValue":o[1]||(o[1]=s=>l.job_title=s),label:e.__("Title"),class:"mb-4"},null,8,["modelValue","label"]),i(t(u),{modelValue:l.location,"onUpdate:modelValue":o[2]||(o[2]=s=>l.location=s),label:e.__("Location")},null,8,["modelValue","label"])]),a("div",null,[i(t(u),{modelValue:l.type,"onUpdate:modelValue":o[3]||(o[3]=s=>l.type=s),label:e.__("Type"),type:"select",options:D.value,class:"mb-4"},null,8,["modelValue","label","options"]),i(t(u),{modelValue:l.status,"onUpdate:modelValue":o[4]||(o[4]=s=>l.status=s),label:e.__("Status"),type:"select",options:$.value},null,8,["modelValue","label","options"])])]),a("div",ne,[a("label",ie,d(e.__("Description")),1),i(t(X),{content:l.description,onChange:o[5]||(o[5]=s=>l.description=s),editable:!0,fixedMenu:!0,editorClass:"prose-sm max-w-none border-b border-x bg-gray-100 rounded-b-md py-1 px-2 min-h-[7rem] mb-4"},null,8,["content"])])]),a("div",me,[a("div",re,d(e.__("Company Details")),1),a("div",de,[a("div",null,[i(t(u),{modelValue:l.company_name,"onUpdate:modelValue":o[6]||(o[6]=s=>l.company_name=s),label:e.__("Company Name"),class:"mb-4"},null,8,["modelValue","label"]),i(t(u),{modelValue:l.company_website,"onUpdate:modelValue":o[7]||(o[7]=s=>l.company_website=s),label:e.__("Company Website")},null,8,["modelValue","label"])]),a("div",null,[i(t(u),{modelValue:l.company_email_address,"onUpdate:modelValue":o[8]||(o[8]=s=>l.company_email_address=s),label:e.__("Company Email Address"),class:"mb-4"},null,8,["modelValue","label"]),a("label",ue,d(e.__("Company Logo")),1),l.image?(g(),j("div",be,[a("div",ce,[a("div",_e,[i(t(Y),{class:"h-5 w-5 stroke-1.5 text-gray-700"})]),a("div",ge,[a("span",null,d(l.image.file_name),1),a("span",ye,d(t(Q)(l.image.file_size)),1)]),i(t(Z),{onClick:o[10]||(o[10]=s=>U()),class:"bg-gray-200 rounded-md cursor-pointer stroke-1.5 w-5 h-5 p-1 ml-4"})])])):(g(),G(t(q),{key:0,fileTypes:["image/*"],validateFile:E,onSuccess:o[9]||(o[9]=s=>O(s))},{default:y(({file:s,progress:B,uploading:v,openFileSelector:z})=>[a("div",pe,[i(t(x),{onClick:z,loading:v},{default:y(()=>[C(d(v?`Uploading ${B}%`:"Upload an image"),1)]),_:2},1032,["onClick","loading"])])]),_:1}))])])])])]))}};export{Ce as default};
//# sourceMappingURL=JobCreation-CTK_qubF.js.map