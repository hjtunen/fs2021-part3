(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var c=t(16),o=t.n(c),u=t(3),r=t(1),a=t(0),i=function(e){var n=e.person,t=e.onClick;return Object(a.jsxs)("div",{children:[n.name," ",n.number,Object(a.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},l=function(e){var n=e.persons,t=e.onClick;return n.map((function(e){return Object(a.jsx)(i,{person:e,onClick:t},e.name)}))},s=function(e){var n=e.value,t=e.onChange;return Object(a.jsx)("input",{value:n,onChange:t})},d=function(e){return Object(a.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(a.jsxs)("div",{children:["name:",Object(a.jsx)("input",{value:e.nameValue,onChange:e.nameChange})]}),Object(a.jsxs)("div",{children:["number:",Object(a.jsx)("input",{value:e.numberValue,onChange:e.numberChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},f=t(4),b=t.n(f),j="/api/persons",h={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},create:function(e){return b.a.post(j,e).then((function(e){return e.data}))},update:function(e,n){return b.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},delet:function(e){return b.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))}},m=function(e){var n=e.message,t=e.success;if(null===n)return null;var c={};return c=t?{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},Object(a.jsx)("div",{style:c,children:n})},g=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),f=i[0],b=i[1],j=Object(r.useState)(""),g=Object(u.a)(j,2),O=g[0],p=g[1],v=Object(r.useState)(""),x=Object(u.a)(v,2),C=x[0],w=x[1],S=Object(r.useState)(null),k=Object(u.a)(S,2),y=k[0],A=k[1],T=Object(r.useState)(!0),V=Object(u.a)(T,2),B=V[0],D=V[1];Object(r.useEffect)((function(){console.log("effect"),h.getAll().then((function(e){console.log("promise fulfilled"),c(e)}))}),[]);var z=t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(m,{message:y,success:B}),"filter shown with",Object(a.jsx)(s,{value:C,onChange:function(e){w(e.target.value)}}),Object(a.jsx)("h2",{children:"add a new"}),Object(a.jsx)(d,{onSubmit:function(e){e.preventDefault();var n={name:f,number:O};if(t.find((function(e){return e.name===f}))){var o=t.find((function(e){return e.name===f}));window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&h.update(o.id,n).then((function(e){h.getAll().then((function(e){c(e),A("Number of ".concat(f," updated to ").concat(O)),D(!0),b(""),p(""),setTimeout((function(){A(null)}),5e3)}))})).catch((function(e){A("Informatioon of ".concat(f," not found")),D(!1),c(t.filter((function(e){return e.name!==f}))),setTimeout((function(){A(null)}),5e3)}))}else h.create(n).then((function(e){c(t.concat(e)),A("Added ".concat(f)),D(!0),b(""),p(""),setTimeout((function(){A(null)}),5e3)}))},nameValue:f,numberValue:O,nameChange:function(e){b(e.target.value)},numberChange:function(e){p(e.target.value)}}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(l,{persons:z,onClick:function(e){console.log("delet id ".concat(e));var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&h.delet(e).then((function(e){h.getAll().then((function(e){c(e),A("Deleted ".concat(n.name)),D(!0),setTimeout((function(){A(null)}),5e3)}))}))}})]})};o.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0b5e43b1.chunk.js.map