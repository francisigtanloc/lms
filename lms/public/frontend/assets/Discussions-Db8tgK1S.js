import{ad as B,ae as E,r as R,d as S,s as N,k,x as i,y as u,N as d,H as _,A as t,I as x,B as s,C as c,F as w,J as M,K as j,G as V,U as A,aa as D,ar as P,T as I,a as F,aq as G,D as J,b as K}from"./frappe-ui-CgFK8870.js";import{_ as U}from"./UserAvatar-CMVzFlfz.js";import{b as q,t as H,c as O,d as Q}from"./index-GARLdoCV.js";/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=q("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=q("MessageSquareIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=q("MoreHorizontalIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),Z={class:"mt-6"},ee={key:0,class:"flex items-center mb-5"},te={class:"text-lg font-semibold ml-2"},se={class:"flex items-center justify-between mb-2"},oe={class:"flex items-center"},ae={class:"text-sm ml-2"},re={key:1},ne={class:"flex justify-between mt-2"},le=s("span",null,null,-1),z={__name:"DiscussionReplies",props:B({topic:{type:Object,required:!0},singleThread:{type:Boolean,default:!1}},{showTopics:{},showTopicsModifiers:{}}),emits:["update:showTopics"],setup(r){const g=E(r,"showTopics"),p=R(""),l=S("$socket"),T=S("$user"),b=r;N(()=>{l.on("publish_message",e=>{n.reload()}),l.on("update_message",e=>{n.reload()}),l.on("delete_message",e=>{n.reload()})});const n=k({url:"lms.lms.utils.get_discussion_replies",cache:["replies",b.topic],makeParams(e){return{topic:b.topic.name}},auto:!0}),o=k({url:"frappe.client.insert",makeParams(e){return{doc:{doctype:"Discussion Reply",reply:p.value,topic:b.topic.name}}}}),m=()=>{o.submit({},{validate(){if(!p.value)return"Reply cannot be empty"},onSuccess(){p.value="",n.reload()},onError(e){var y;O({title:"Error",text:((y=e.messages)==null?void 0:y[0])||e,icon:"x",iconClasses:"bg-red-600 text-white rounded-md p-px",position:"top-center",timeout:10})}})},v=k({url:"frappe.client.set_value",makeParams(e){return{doctype:"Discussion Reply",name:e.name,fieldname:"reply",value:e.reply}}}),f=e=>{v.submit({name:e.name,reply:e.reply},{validate(){if(!e.reply)return"Reply cannot be empty"},onSuccess(){e.editable=!1,n.reload()}})},h=k({url:"frappe.client.delete",makeParams(e){return{doctype:"Discussion Reply",name:e.name}}}),C=e=>{h.submit({name:e.name},{onSuccess(){n.reload()}})};return(e,y)=>(i(),u("div",Z,[r.singleThread?w("",!0):(i(),u("div",ee,[d(t(x),{variant:"outline",onClick:y[0]||(y[0]=a=>g.value=!0)},{icon:_(()=>[d(t(W),{class:"w-5 h-5 stroke-1.5 text-gray-700"})]),_:1}),s("span",te,c(r.topic.title),1)])),(i(!0),u(M,null,j(t(n).data,(a,L)=>(i(),u("div",null,[s("div",{class:I(["py-3",{"border-b":L+1!=t(n).data.length}])},[s("div",se,[s("div",oe,[d(U,{user:a.user,class:"mr-2"},null,8,["user"]),s("span",null,c(a.user.full_name),1),s("span",ae,c(t(H)(a.creation)),1)]),t(T).data.name==a.owner&&!a.editable?(i(),V(t(A),{key:0,options:[{label:"Edit",onClick(){a.editable=!0}},{label:"Delete",onClick(){C(a)}}]},{default:_(({open:$})=>[d(t(Y),{class:"w-4 h-4 stroke-1.5 cursor-pointer"})]),_:2},1032,["options"])):w("",!0),a.editable?(i(),u("div",re,[d(t(x),{variant:"ghost",onClick:$=>f(a)},{default:_(()=>[D(c(e.__("Post")),1)]),_:2},1032,["onClick"]),d(t(x),{variant:"ghost",onClick:$=>a.editable=!1},{default:_(()=>[D(c(e.__("Discard")),1)]),_:2},1032,["onClick"])])):w("",!0)]),d(t(P),{content:a.reply,onChange:$=>a.reply=$,editable:a.editable||!1,fixedMenu:a.editable||!1,editorClass:a.editable?"ProseMirror prose prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-gray-300 prose-th:border-gray-300 prose-td:relative prose-th:relative prose-th:bg-gray-100 prose-sm max-w-none":"prose-sm"},null,8,["content","onChange","editable","fixedMenu","editorClass"])],2)]))),256)),d(t(P),{class:"mt-5",content:p.value,onChange:y[1]||(y[1]=a=>p.value=a),placeholder:"Type your reply here...",fixedMenu:!0,editorClass:"ProseMirror prose prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-gray-300 prose-th:border-gray-300 prose-td:relative prose-th:relative prose-th:bg-gray-100 prose-sm max-w-none border border-gray-300 rounded-b-md min-h-[7rem] py-1 px-2"},null,8,["content"]),s("div",ne,[le,d(t(x),{onClick:y[2]||(y[2]=a=>m())},{default:_(()=>[s("span",null,c(e.__("Post")),1)]),_:1})])]))}},ie={class:"flex flex-col gap-4"},de={class:"mb-1.5 text-sm text-gray-600"},ce={class:"mb-1.5 text-sm text-gray-600"},ue={__name:"DiscussionModal",props:B({title:{type:String,required:!0},doctype:{type:String,required:!0},docname:{type:String,required:!0}},{reloadTopics:{},reloadTopicsModifiers:{}}),emits:["update:reloadTopics"],setup(r){const g=E(r,"reloadTopics"),p=r,l=F({title:"",reply:""}),T=k({url:"frappe.client.insert",makeParams(o){return{doc:{doctype:"Discussion Topic",reference_doctype:p.doctype,reference_docname:p.docname,title:l.title}}}}),b=k({url:"frappe.client.insert",makeParams(o){return{doc:{doctype:"Discussion Reply",topic:o.topic,reply:l.reply}}}}),n=o=>{T.submit({},{validate(){if(!l.title)return"Title cannot be empty.";if(!l.reply)return"Reply cannot be empty."},onSuccess(m){b.submit({topic:m.name},{onSuccess(){l.title="",l.reply="",g.value.reload(),o()}})},onError(m){Q("Error",m.message,"x")}})};return(o,m)=>(i(),V(t(J),{options:{title:p.title,size:"2xl",actions:[{label:"Submit",variant:"solid",onClick:v=>n(v)}]}},{"body-content":_(()=>[s("div",ie,[s("div",null,[s("div",de,c(o.__("Title")),1),d(t(G),{type:"text",modelValue:l.title,"onUpdate:modelValue":m[0]||(m[0]=v=>l.title=v)},null,8,["modelValue"])]),s("div",null,[s("div",ce,c(o.__("Details")),1),d(t(P),{content:l.reply,onChange:m[1]||(m[1]=v=>l.reply=v),editable:!0,fixedMenu:!0,editorClass:"prose-sm max-w-none border-b border-x bg-gray-100 rounded-b-md py-1 px-2 min-h-[7rem]"},null,8,["content"])])])]),_:1},8,["options"]))}},pe={class:"text-xl font-semibold"},me={key:0},ye=["onClick"],fe={class:"text-lg font-semibold mb-1"},he={class:"flex items-center"},be={class:"text-sm ml-3"},ve={key:1},ge={key:1},_e={key:2,class:"flex items-center justify-center border mt-5 p-5 rounded-md"},ke={key:0,class:"font-medium mb-2"},Te={class:""},$e={__name:"Discussions",props:{title:{type:String,required:!0},doctype:{type:String,required:!0},docname:{type:String,required:!0},emptyStateTitle:{type:String,default:""},emptyStateText:{type:String,default:"Be the first to start a discussion"},singleThread:{type:Boolean,default:!1}},setup(r){const g=R(!0),p=R(null),l=S("$socket"),T=S("$user"),b=R(!1),n=r;N(()=>{T.data&&o.reload(),l.on("new_discussion_topic",f=>{o.refresh()})});const o=k({url:"lms.lms.utils.get_discussion_topics",cache:["topics",n.doctype,n.docname],makeParams(){return{doctype:n.doctype,docname:n.docname,single_thread:n.singleThread}}}),m=f=>{g.value=!1,p.value=f},v=()=>{b.value=!0};return(f,h)=>{var C;return i(),u(M,null,[s("div",null,[r.singleThread?w("",!0):(i(),V(t(x),{key:0,class:"float-right",onClick:h[0]||(h[0]=e=>v())},{default:_(()=>[D(c(f.__("New {0}").format(r.title)),1)]),_:1})),s("div",pe,c(f.__(r.title)),1)]),(C=t(o).data)!=null&&C.length&&!r.singleThread?(i(),u("div",me,[g.value?(i(!0),u(M,{key:0},j(t(o).data,(e,y)=>(i(),u("div",null,[s("div",{onClick:a=>m(e),class:I(["flex items-center cursor-pointer py-5 w-full",{"border-b":y+1!=t(o).data.length}])},[d(U,{user:e.user,size:"2xl",class:"mr-4"},null,8,["user"]),s("div",null,[s("div",fe,c(e.title),1),s("div",he,[s("span",null,c(e.user.full_name),1),s("span",be,c(t(H)(e.creation)),1)])])],10,ye)]))),256)):(i(),u("div",ve,[d(z,{topic:p.value,showTopics:g.value,"onUpdate:showTopics":h[1]||(h[1]=e=>g.value=e)},null,8,["topic","showTopics"])]))])):r.singleThread&&t(o).data?(i(),u("div",ge,[d(z,{topic:t(o).data,singleThread:r.singleThread},null,8,["topic","singleThread"])])):(i(),u("div",_e,[d(t(X),{class:"w-5 h-5 stroke-1.5 mr-2"}),s("div",null,[r.emptyStateTitle?(i(),u("div",ke,c(f.__(r.emptyStateTitle)),1)):w("",!0),s("div",Te,c(f.__(r.emptyStateText)),1)])])),d(ue,{modelValue:b.value,"onUpdate:modelValue":h[2]||(h[2]=e=>b.value=e),title:f.__("New {0}").format(r.title),doctype:n.doctype,docname:n.docname,reloadTopics:t(o),"onUpdate:reloadTopics":h[3]||(h[3]=e=>K(o)?o.value=e:null)},null,8,["modelValue","title","doctype","docname","reloadTopics"])],64)}}};export{W as C,$e as _};
//# sourceMappingURL=Discussions-Db8tgK1S.js.map