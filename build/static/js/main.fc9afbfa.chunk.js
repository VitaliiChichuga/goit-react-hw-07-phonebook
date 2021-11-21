(this["webpackJsonpgoit-react-hw-07-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-07-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){t.exports={div:"ContactList_div__19yVi",items:"ContactList_items__2ndrv",button:"ContactList_button__2-EmS"}},20:function(t,e,n){t.exports={text:"Filter_text__34Ts5",label:"Filter_label__2aSr1",input:"Filter_input__2Kfgs"}},31:function(t,e,n){t.exports={container:"Container_container__isMtp"}},63:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),i=n(3),u=n(5),s=n(6),l=n(2),b=n(32),d=n(7),j=n.n(d),f=n(17),O=n(11),p=n.n(O);p.a.defaults.baseURL="https://619a7ea4278276001744527b.mockapi.io";var m,h,x=Object(u.c)("contacts/fetchContacts",Object(f.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))),v=Object(u.c)("contacts/addContact",function(){var t=Object(f.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("/contacts",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_=Object(u.c)("contacts/deleteContact",function(){var t=Object(f.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.delete("/contacts/".concat(e));case 2:return n=t.sent,a=n.data.id,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C=Object(u.d)([],(m={},Object(l.a)(m,x.fulfilled,(function(t,e){return e.payload})),Object(l.a)(m,v.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(l.a)(m,_.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),m)),g=Object(u.d)(!1,(h={},Object(l.a)(h,x.pending,(function(){return!0})),Object(l.a)(h,x.fulfilled,(function(){return!1})),Object(l.a)(h,x.rejected,(function(){return!1})),Object(l.a)(h,v.pending,(function(){return!0})),Object(l.a)(h,v.fulfilled,(function(){return!1})),Object(l.a)(h,v.rejected,(function(){return!1})),Object(l.a)(h,_.pending,(function(){return!0})),Object(l.a)(h,_.fulfilled,(function(){return!1})),Object(l.a)(h,_.rejected,(function(){return!1})),h)),y=Object(u.b)("contacts/changeFilter"),N=Object(u.d)("",Object(l.a)({},y,(function(t,e){return e.payload}))),w=Object(s.b)({items:C,filter:N,loading:g}),k=Object(u.a)({reducer:{contacts:w}}),A=n(31),L=n.n(A),z=n(1),F=function(t){var e=t.children;return Object(z.jsx)("div",{className:L.a.container,children:e})};F.defaultProps={children:[]};var Z=F,S=n(21),M=function(t){return t.contacts.filter},J=function(t){return t.contacts.items},q=function(t){var e=J(t),n=M(t);return e.filter((function(t){var e=t.name,a=t.phone;return e.toLowerCase().includes(n.toLowerCase())||a.includes(n)}))},B=n(8),D=n.n(B);var E=function(){var t=Object(a.useState)(""),e=Object(S.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(S.a)(r,2),u=o[0],s=o[1],l=Object(i.c)(J),b=Object(i.b)(),d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":s(a);break;default:return}},j=function(){c(""),s("")};return Object(z.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===n&&""===u)return alert("".concat(n," is already in contacts"));l.some((function(t){return t.name.toLowerCase()===n.toLowerCase()||t.phone===u}))?alert("".concat(n," is already in contacts.")):b(v({name:n,number:u})),j()},className:D.a.form,children:[Object(z.jsxs)("label",{className:D.a.label,children:["Name",Object(z.jsx)("input",{type:"text",name:"name",value:n,onChange:d,className:D.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(z.jsxs)("label",{children:["Number",Object(z.jsx)("input",{type:"tel",name:"number",value:u,onChange:d,className:D.a.input,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(z.jsx)("div",{children:Object(z.jsx)("button",{type:"submit",className:D.a.button,children:"Add contact"})})]})},P=n(20),T=n.n(P),$=function(){var t=Object(i.c)(M),e=Object(i.b)();return Object(z.jsxs)("label",{className:T.a.label,children:["Find contacts by name",Object(z.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){var n=t.target.value;return e(y(n))},className:T.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz deCastelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},G=n(12),I=n.n(G),K=function(){var t=Object(i.c)(q),e=Object(i.b)();return Object(z.jsx)("div",{className:I.a.div,children:Object(z.jsx)("ul",{children:t.map((function(t){var n=t.id,a=t.name,c=t.phone;return Object(z.jsxs)("li",{className:I.a.items,children:[a,":",Object(z.jsx)("span",{className:I.a.number,children:c}),Object(z.jsx)("button",{className:I.a.button,type:"button",onClick:function(){return function(t){return e(_(t))}(n)},children:"Delete"})]},n)}))})})},R=n(10),U=n.n(R);var V=function(){var t=Object(i.c)((function(t){return t.contacts.loading})),e=Object(i.b)();return Object(a.useEffect)((function(){e(x())}),[e]),Object(z.jsxs)(Z,{children:[Object(z.jsx)("h2",{className:U.a.title,children:"Phone book"}),Object(z.jsx)(E,{}),Object(z.jsx)("h2",{className:U.a.title,children:"Contacts"}),Object(z.jsx)($,{}),t&&Object(z.jsx)("h2",{className:U.a.title,children:"Loading..."}),Object(z.jsx)(K,{})]})};o.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(i.a,{store:k,children:Object(z.jsx)(V,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__1rDoP",label:"ContactForm_label__1TyMp",button:"ContactForm_button__1Z7YG"}}},[[63,1,2]]]);
//# sourceMappingURL=main.fc9afbfa.chunk.js.map