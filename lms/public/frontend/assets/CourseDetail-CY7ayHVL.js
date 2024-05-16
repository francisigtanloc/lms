var W=Object.defineProperty;var B=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var T=(a,i,e)=>i in a?W(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e,U=(a,i)=>{for(var e in i||(i={}))G.call(i,e)&&T(a,e,i[e]);if(B)for(var e of B(i))I.call(i,e)&&T(a,e,i[e]);return a};import{j as S,$ as O,x as r,y as _,F as b,B as s,C as o,G as y,H as p,N as n,A as t,I as $,S as J,d as q,k,r as P,J as x,K as R,T as z,ad as K,ae as V,a as X,af as Q,D as Y,aa as M,b as j,a9 as Z,X as D,ab as ee}from"./frappe-ui-CgFK8870.js";import{B as te,U as A,c as L,u as se}from"./index-GARLdoCV.js";import{S as N}from"./star-Bm-2xHYM.js";import{_ as ae}from"./CourseOutline-k6WN1oWr.js";import{_ as H}from"./UserAvatar-CMVzFlfz.js";import{_ as le}from"./CourseInstructors-B4HCEx2w.js";import"./chevron-right-jcxn7em3.js";import"./file-text-DHp4eWlu.js";import"./check-t5WR0f1n.js";const oe={class:"shadow rounded-md min-w-80"},re=["src"],ne={class:"p-5"},ie={key:0,class:"text-2xl font-semibold mb-3"},ue={key:3,class:"bg-blue-100 text-blue-900 text-sm rounded-md py-1 px-3"},de={class:"mt-8 mb-4 font-medium"},ce={class:"flex items-center mb-3"},me={class:"ml-2"},_e={class:"flex items-center mb-3"},ve={class:"ml-2"},fe={class:"flex items-center"},ge={class:"ml-2"},E={__name:"CourseCardOverlay",props:{course:{type:Object,default:null}},setup(a){const i=J(),e=q("$user"),v=a,u=S(()=>v.course.data.video_link?"https://www.youtube.com/embed/"+v.course.data.video_link:null);function c(){if(!e.data)L({title:"Please Login",icon:"alert-circle",iconClasses:"text-yellow-600 bg-yellow-100"}),setTimeout(()=>{window.location.href=`/login?redirect-to=${window.location.pathname}`},3e3);else{const l=k({url:"lms.lms.doctype.lms_enrollment.lms_enrollment.create_membership"});console.log(v.course),l.submit({course:v.course.data.name}).then(()=>{L({title:"Enrolled Successfully",icon:"check",iconClasses:"text-green-600 bg-green-100"}),setTimeout(()=>{i.push({name:"Lesson",params:{courseName:v.course.data.name,chapterNumber:1,lessonNumber:1}})},3e3)})}}const g=()=>{};return(l,h)=>{var m,w;const d=O("router-link");return r(),_("div",oe,[a.course.data.video_link?(r(),_("iframe",{key:0,src:u.value,class:"rounded-t-md min-h-56 w-full"},null,8,re)):b("",!0),s("div",ne,[a.course.data.price?(r(),_("div",ie,o(a.course.data.price),1)):b("",!0),a.course.data.membership?(r(),y(d,{key:1,to:{name:"Lesson",params:{courseName:a.course.name,chapterNumber:a.course.data.current_lesson?a.course.data.current_lesson.split(".")[0]:1,lessonNumber:a.course.data.current_lesson?a.course.data.current_lesson.split(".")[1]:1}}},{default:p(()=>[n(t($),{variant:"solid",size:"md",class:"w-full"},{default:p(()=>[s("span",null,o(l.__("Continue Learning")),1)]),_:1})]),_:1},8,["to"])):a.course.data.paid_course?(r(),y(d,{key:2,to:{name:"Billing",params:{type:"course",name:a.course.data.name}}},{default:p(()=>[n(t($),{variant:"solid",size:"md",class:"w-full"},{default:p(()=>[s("span",null,o(l.__("Buy this course")),1)]),_:1})]),_:1},8,["to"])):a.course.data.disable_self_learning?(r(),_("div",ue,o(l.__("Contact the Administrator to enroll for this course.")),1)):(r(),y(t($),{key:4,onClick:h[0]||(h[0]=C=>c()),variant:"solid",class:"w-full",size:"md"},{default:p(()=>[s("span",null,o(l.__("Start Learning")),1)]),_:1})),(w=(m=t(e))==null?void 0:m.data)!=null&&w.is_moderator||g()?(r(),y(d,{key:5,to:{name:"CreateCourse",params:{courseName:a.course.data.name}}},{default:p(()=>[n(t($),{variant:"subtle",class:"w-full mt-2",size:"md"},{default:p(()=>[s("span",null,o(l.__("Edit")),1)]),_:1})]),_:1},8,["to"])):b("",!0),s("div",de,o(l.__("This course has:")),1),s("div",ce,[n(t(te),{class:"h-5 w-5 stroke-1.5 text-gray-600"}),s("span",me,o(a.course.data.lesson_count)+" "+o(l.__("Lessons")),1)]),s("div",_e,[n(t(A),{class:"h-5 w-5 stroke-1.5 text-gray-600"}),s("span",ve,o(a.course.data.enrollment_count_formatted)+" "+o(l.__("Enrolled Students")),1)]),s("div",fe,[n(t(N),{class:"h-5 w-5 stroke-1.5 fill-orange-500 text-gray-50"}),s("span",ge,o(a.course.data.avg_rating)+" "+o(l.__("Rating")),1)])])])}}},he={class:"flex text-center"},pe={__name:"Rating",props:{id:{type:String,default:""},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(a,{emit:i}){const e=a,v=i;let u=P(e.modelValue),c=l=>{v("update:modelValue",l)};function g(l){c(l),u.value=l}return(l,h)=>(r(),_("div",he,[(r(),_(x,null,R(5,d=>s("div",null,[n(t(N),{class:z([d<=t(u)?"fill-orange-500":"","h-6 w-6 fill-gray-400 text-gray-50 mr-1 cursor-pointer"]),onClick:m=>g(d)},null,8,["class","onClick"])])),64))]))}},we={class:"flex flex-col gap-4"},be={class:"mb-1.5 text-sm text-gray-600"},ye={class:"mb-1.5 text-sm text-gray-600"},xe={__name:"ReviewModal",props:K({courseName:{type:String,required:!0}},{modelValue:{},modelModifiers:{},reloadReviews:{},reloadReviewsModifiers:{},hasReviewed:{},hasReviewedModifiers:{}}),emits:["update:modelValue","update:reloadReviews","update:hasReviewed"],setup(a){const i=V(a,"modelValue"),e=V(a,"reloadReviews"),v=V(a,"hasReviewed");let u=X({review:"",rating:0});const c=a,g=k({url:"frappe.client.insert",makeParams(h){return{doc:U({doctype:"LMS Course Review",course:c.courseName},h)}}});function l(h){u.rating=u.rating/5,g.submit(u,{validate(){if(!u.rating)return"Please enter a rating."},onSuccess(){e.value.reload(),v.value.reload()},onError(d){var m;L({text:((m=d.messages)==null?void 0:m[0])||d,icon:"x",iconClasses:"text-red-600 bg-red-300"})}}),h()}return(h,d)=>(r(),y(t(Y),{modelValue:i.value,"onUpdate:modelValue":d[2]||(d[2]=m=>i.value=m),options:{title:h.__("Write a Review"),size:"xl",actions:[{label:"Submit",variant:"solid",onClick:m=>l(m)}]}},{"body-content":p(()=>[s("div",we,[s("div",null,[s("div",be,o(h.__("Rating")),1),n(pe,{modelValue:t(u).rating,"onUpdate:modelValue":d[0]||(d[0]=m=>t(u).rating=m)},null,8,["modelValue"])]),s("div",null,[s("div",ye,o(h.__("Review")),1),n(t(Q),{type:"text",size:"md",rows:"5",modelValue:t(u).review,"onUpdate:modelValue":d[1]||(d[1]=m=>t(u).review=m)},null,8,["modelValue"])])])]),_:1},8,["modelValue","options"]))}},$e={key:0,class:"mt-20 mb-10"},ke={class:"flex items-center font-semibold text-2xl"},Re={class:"grid gap-8 mt-10"},Ne={class:"flex items-center"},Ce={class:"mx-4"},Ve={class:"text-lg font-medium mr-4"},Se={class:"flex mt-2"},Me={key:0,class:"mt-4 leading-5"},Le={__name:"CourseReviews",props:{courseName:{type:String,required:!0},avg_rating:{type:Number,required:!0},membership:{type:Object,required:!1}},setup(a){var l,h,d;const i=q("$user"),e=a,v=k({url:"frappe.client.get_count",cache:["eligible_to_review",e.courseName,(l=e.membership)==null?void 0:l.member],params:{doctype:"LMS Course Review",filters:{course:e.courseName,owner:(h=e.membership)==null?void 0:h.member}},auto:!!((d=i.data)!=null&&d.name)}),u=k({url:"lms.lms.utils.get_reviews",cache:["course_reviews",e.courseName],params:{course:e.courseName},auto:!0}),c=P(!1);function g(){c.value=!0}return(m,w)=>{const C=O("router-link");return r(),_(x,null,[t(u).data?(r(),_("div",$e,[a.membership&&!t(v).data?(r(),y(t($),{key:0,onClick:w[0]||(w[0]=f=>g()),class:"float-right"},{default:p(()=>[M(o(m.__("Write a Review")),1)]),_:1})):b("",!0),s("div",ke,[n(t(N),{class:"h-6 w-6 stroke-1 text-gray-50 fill-orange-500 mr-1"}),M(" "+o(a.avg_rating)+" "+o(m.__("ratings and "))+" "+o(t(u).data.length)+" "+o(m.__("reviews")),1)]),s("div",Re,[(r(!0),_(x,null,R(t(u).data,(f,Ke)=>(r(),_("div",null,[s("div",Ne,[n(C,{to:{name:"Profile",params:{username:f.owner_details.username}}},{default:p(()=>[n(H,{user:f.owner_details,size:"2xl"},null,8,["user"])]),_:2},1032,["to"]),s("div",Ce,[n(C,{to:{name:"Profile",params:{username:f.owner_details.username}}},{default:p(()=>[s("span",Ve,o(f.owner_details.full_name),1)]),_:2},1032,["to"]),s("span",null,o(f.creation),1),s("div",Se,[(r(),_(x,null,R(5,F=>n(t(N),{class:z(["h-5 w-5 text-gray-100 bg-gray-200 rounded-sm mr-2",F<=Math.ceil(f.rating)?"fill-orange-500":"fill-gray-600"])},null,8,["class"])),64))])])]),f.review?(r(),_("div",Me,o(f.review),1)):b("",!0)]))),256))])])):b("",!0),n(xe,{modelValue:c.value,"onUpdate:modelValue":w[1]||(w[1]=f=>c.value=f),reloadReviews:t(u),"onUpdate:reloadReviews":w[2]||(w[2]=f=>j(u)?u.value=f:null),hasReviewed:t(v),"onUpdate:hasReviewed":w[3]||(w[3]=f=>j(v)?v.value=f:null),courseName:a.courseName},null,8,["modelValue","reloadReviews","hasReviewed","courseName"])],64)}}},ze={key:0},Be={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-white px-3 py-2.5 sm:px-5"},Te={class:"m-5"},Ue={class:"flex justify-between w-full"},je={class:"md:w-2/3"},De={class:"text-3xl font-semibold"},Ee={class:"my-3 leading-6"},Oe={class:"flex items-center"},qe={class:"ml-1"},Pe={key:1,class:"mx-3"},Ae={class:"ml-1"},He={key:3,class:"mx-3"},Fe={class:"flex items-center"},We={class:"flex mt-3 mb-4 w-fit"},Ge=["innerHTML"],Ie={class:"mt-10"},Je={class:"hidden md:block"},rt={__name:"CourseDetail",props:{courseName:{type:String,required:!0}},setup(a){const i=a,e=k({url:"lms.lms.utils.get_course_details",cache:["course",i.courseName],params:{course:i.courseName},auto:!0}),v=S(()=>{var g,l;let c=[{label:"All Courses",route:{name:"Courses"}}];return c.push({label:(g=e==null?void 0:e.data)==null?void 0:g.title,route:{name:"CourseDetail",params:{course:(l=e==null?void 0:e.data)==null?void 0:l.name}}}),c}),u=S(()=>{var c,g;return{title:(c=e==null?void 0:e.data)==null?void 0:c.title,description:(g=e==null?void 0:e.data)==null?void 0:g.short_introduction}});return se(u),(c,g)=>t(e).data?(r(),_("div",ze,[s("header",Be,[n(t(Z),{class:"h-7",items:v.value},null,8,["items"])]),s("div",Te,[s("div",Ue,[s("div",je,[s("div",De,o(t(e).data.title),1),s("div",Ee,o(t(e).data.short_introduction),1),s("div",Oe,[t(e).data.avg_rating?(r(),y(t(D),{key:0,text:c.__("Average Rating"),class:"flex items-center"},{default:p(()=>[n(t(N),{class:"h-5 w-5 text-gray-100 fill-orange-500"}),s("span",qe,o(t(e).data.avg_rating),1)]),_:1},8,["text"])):b("",!0),t(e).data.avg_rating?(r(),_("span",Pe,"·")):b("",!0),t(e).data.enrollment_count?(r(),y(t(D),{key:2,text:c.__("Enrolled Students"),class:"flex items-center"},{default:p(()=>[n(t(A),{class:"h-4 w-4 text-gray-700"}),s("span",Ae,o(t(e).data.enrollment_count_formatted),1)]),_:1},8,["text"])):b("",!0),t(e).data.enrollment_count?(r(),_("span",He,"·")):b("",!0),s("div",Fe,[s("span",{class:z(["mr-1",{"avatar-group overlap":t(e).data.instructors.length>1}])},[(r(!0),_(x,null,R(t(e).data.instructors,l=>(r(),y(H,{user:l},null,8,["user"]))),256))],2),n(le,{instructors:t(e).data.instructors},null,8,["instructors"])])]),s("div",We,[(r(!0),_(x,null,R(t(e).data.tags,l=>(r(),y(t(ee),{theme:"gray",size:"lg",class:"mr-2"},{default:p(()=>[M(o(l),1)]),_:2},1024))),256))]),n(E,{course:t(e),class:"md:hidden mb-4"},null,8,["course"]),s("div",{innerHTML:t(e).data.description,class:"course-description"},null,8,Ge),s("div",Ie,[n(ae,{courseName:t(e).data.name,showOutline:!0,title:"Course Outline"},null,8,["courseName"])]),n(Le,{courseName:t(e).data.name,avg_rating:t(e).data.avg_rating,membership:t(e).data.membership},null,8,["courseName","avg_rating","membership"])]),s("div",Je,[n(E,{course:t(e)},null,8,["course"])])])])])):b("",!0)}};export{rt as default};
//# sourceMappingURL=CourseDetail-CY7ayHVL.js.map