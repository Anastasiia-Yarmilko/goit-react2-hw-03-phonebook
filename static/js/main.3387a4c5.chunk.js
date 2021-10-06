(this["webpackJsonpgoit-react2-hw-03-phonebook"]=this["webpackJsonpgoit-react2-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),s=(n(17),n(12)),i=n(4),l=n(5),u=n(7),m=n(6),b=(n(18),n(11)),d=n(2),h=n.n(d),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={number:"",name:""},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.onHandleSubmit=function(e){e.preventDefault(),(0,t.props.addContact)({id:t.state.id,name:t.state.name,number:t.state.number}),t.setState({number:"",name:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:h.a.form,onSubmit:this.onHandleSubmit,children:[Object(j.jsxs)("label",{className:h.a.label,children:["Name",Object(j.jsx)("input",{className:h.a.input,value:e,onChange:this.onHandleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432",required:!0})]}),Object(j.jsxs)("label",{className:h.a.label,children:["Contact",Object(j.jsx)("input",{className:h.a.input,value:n,onChange:this.onHandleChange,type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("input",{className:h.a.button,type:"submit",value:"Add contact"})]})}}]),n}(a.Component),p=f,C=n(9),O=n.n(C),_=function(t){var e=t.searchContact,n=t.filter;return Object(j.jsxs)("label",{className:O.a.label,children:[" ","Find contacts by name",Object(j.jsx)("input",{className:O.a.input,onChange:function(t){return e(t.target.value)},placeholder:"Enter your search request",value:n})]})},v=n(3),x=n.n(v),g=function(t){var e=t.searchContact,n=t.deleteContact;return Object(j.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(j.jsxs)("li",{className:x.a.item,children:[Object(j.jsxs)("p",{className:x.a.contact,children:[" ",e,":",a]}),Object(j.jsx)("button",{type:"button",className:x.a.btn,onClick:function(){return n(c)},children:"Delete"})]},e)}))})},y=n(22),N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onHandleNewContact=function(e){var n=e.name,a=e.number,c=t.state.contacts.find((function(t){return t.name===n}));if(c)alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!");else{var o={name:n,number:a,id:Object(y.a)()};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[o])}}))}},t.onHandleFilter=function(e){t.setState({filter:e})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.searchContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{addContact:this.onHandleNewContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(_,{searchContact:this.onHandleFilter,value:t}),Object(j.jsx)(g,{deleteContact:this.deleteContact,searchContact:this.searchContact()})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",contact:"ContactList_contact__3ZIyH",btn:"ContactList_btn__1Xk4q"}},9:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}}},[[20,1,2]]]);
//# sourceMappingURL=main.3387a4c5.chunk.js.map