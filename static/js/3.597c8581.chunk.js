(this["webpackJsonpsocial-network-react-redux"]=this["webpackJsonpsocial-network-react-redux"]||[]).push([[3],{316:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",messages:"Dialogs_messages__1w_Up"}},317:function(e,a,t){e.exports={dialog:"DialogItem_dialog__3tDA2"}},318:function(e,a,t){e.exports={message:"Message_message__1MOXo"}},323:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(131),r=t(316),o=t.n(r),c=t(317),l=t.n(c),m=t(15),u=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:l.a.dialog},s.a.createElement(m.b,{to:a},s.a.createElement("img",{src:e.img,alt:"avatar"})," ",e.name," "))},g=t(318),d=t.n(g),b=function(e){return s.a.createElement("div",{className:d.a.message},e.message)},f=t(132),p=t(133),E=t(69),h=t(70),_=Object(h.a)(50),v=Object(p.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(f.a,{component:E.b,validate:[h.b,_],name:"newMessageBody",placeholder:"Enter your message"}),s.a.createElement("button",null,"Send")))})),O=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(u,{name:e.name,key:e.id,id:e.id,img:e.img})})),n=a.messages.map((function(e){return s.a.createElement(b,{key:e.id,message:e.message})}));return s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",{className:o.a.messages},s.a.createElement("div",null,n),s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))},j=t(16),A=t(37),k=t(38),w=t(40),y=t(39),M=t(10),x=t(8);a.default=Object(x.d)((function(e){var a=function(a){Object(w.a)(n,a);var t=Object(y.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(M.a,{to:"/login"})}}]),n}(s.a.Component);return Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}))(a)}),Object(j.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})))(O)}}]);
//# sourceMappingURL=3.597c8581.chunk.js.map