(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={ListContactItem:"Listcontact_ListContactItem__YqGaC",buttonDeleteContact:"Listcontact_buttonDeleteContact__29Y00"}},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a,c=n(1),r=n(0),o=n.n(r),l=n(7),i=n.n(l),u=n(4),s=n(3),m=n(5),b=n(18),d=n(2),j=n(15),f=n.n(j),h={addContact:Object(s.b)("contact/add",(function(t,e){return{payload:{itemContact:{id:f()(),name:t,number:e}}}})),deleteContact:Object(s.b)("contact/delete"),filterContact:Object(s.b)("contact/filter")},C=Object(s.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(m.a)(a,h.addContact,(function(t,e){var n=e.payload,a=t.some((function(t){return t.number===n.itemContact.number}));return!a&&n.itemContact.name&&n.itemContact.number?[].concat(Object(b.a)(t),[n.itemContact]):(a&&alert("\u0442\u0430\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454"),""!==n.itemContact.name&&""!==n.itemContact.number||alert("enter data"),t)})),Object(m.a)(a,h.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),O=Object(s.c)("",Object(m.a)({},h.filterContact,(function(t,e){return e.payload}))),p=Object(d.c)({itemContacts:C,filter:O}),x=Object(s.a)({reducer:{allContacts:p}}),_=n(16),y=n(17),v=n(20),S=n(19),F=n(6),g=n.n(F),I=function(t){Object(v.a)(n,t);var e=Object(S.a)(n);function n(){var t;Object(_.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handelInputChange=function(e){e.preventDefault(),t.setState(Object(m.a)({},e.target.name,e.target.value))},t.handelSubmit=function(e){e.preventDefault(),t.props.onhandleAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(y.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(c.jsxs)("div",{className:g.a.formStyle,children:[Object(c.jsx)("h2",{className:g.a.formStyleTitle,children:"Phonebook"}),Object(c.jsxs)("form",{className:g.a.formStyleFormInput,onSubmit:this.handelSubmit,children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handelInputChange,placeholder:"Add name",autoFocus:!0}),Object(c.jsx)("br",{})]}),Object(c.jsxs)("label",{children:["Number",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handelInputChange,placeholder:"Add number",autoFocus:!0})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:g.a.formStyleFormButton,type:"submit",children:"Add contact"})]})]})}}]),n}(r.Component),N=Object(u.b)(null,(function(t){return{onhandleAddContact:function(e,n){return t(h.addContact(e,n))}}}))(I),w=n(13),A=n.n(w);n(32);var k={onDeleteContact:h.deleteContact},D=Object(u.b)((function(t){return{contact:t.allContacts.itemContacts.filter((function(e){return e.name.toLowerCase().includes(t.allContacts.filter.toLowerCase())}))}}),k)((function(t){var e=t.contact,n=t.onDeleteContact;return Object(c.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(c.jsxs)("li",{className:A.a.ListContactItem,children:[Object(c.jsxs)("span",{children:[a,":"]}),Object(c.jsx)("span",{children:r}),Object(c.jsx)("button",{className:A.a.buttonDeleteContact,onClick:function(){return n(e)}})]},e)}))})})),L=n(8),T=n.n(L);var B={onChange:h.filterContact},E=Object(u.b)((function(t){return{value:t.allContacts.filter}}),B)((function(t){var e=t.value,n=t.onChange;return Object(c.jsxs)("form",{className:T.a.filter,children:[Object(c.jsx)("h2",{className:T.a.filterTitle,children:"Find contacts by name"}),Object(c.jsx)("input",{className:T.a.filterInput,type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)}})]})}));var G=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(N,{}),Object(c.jsx)(E,{}),Object(c.jsx)(D,{})]})};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(u.a,{store:x,children:Object(c.jsx)(G,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={formStyle:"Form_formStyle__31_0C",formStyleTitle:"Form_formStyleTitle__1_suR",formStyleFormInput:"Form_formStyleFormInput__3E5yF",formStyleFormButton:"Form_formStyleFormButton__2FQje"}},8:function(t,e,n){t.exports={filter:"Filter_filter__2PwfH",filterInput:"Filter_filterInput__20Vs_",filterTitle:"Filter_filterTitle__1OGbs"}}},[[33,1,2]]]);
//# sourceMappingURL=main.7b370b5f.chunk.js.map