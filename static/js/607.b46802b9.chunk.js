"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{7941:function(n,e,r){r.d(e,{II:function(){return c},l0:function(){return d},zr:function(){return s}});var t,o,a,i=r(168),u=r(7686),d=u.Z.form(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 360px;\n  margin: 0 auto;\n"]))),s=u.Z.h1(o||(o=(0,i.Z)(["\n  font-size: 42px;\n  color: #555;\n  margin-bottom: 24px;\n"]))),c=u.Z.input(a||(a=(0,i.Z)(["\n  padding: 14px;\n  border: 2px solid #aaa;\n  border-radius: 6px;\n  font-size: 16px;\n  outline: none;\n  margin-bottom: 16px;\n  transition: border-color 0.2s ease-in-out; \n\n  &:focus {\n    border-color: #007bff; \n    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a subtle box-shadow when focused */\n  }\n\n  ::placeholder {\n    color: #888;\n  }\n"])))},4607:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,o,a,i=r(9439),u=r(168),d=r(7686),s=d.Z.ul(t||(t=(0,u.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 16px;\n"]))),c=d.Z.li(o||(o=(0,u.Z)(["\n  padding: 12px;\n  border-radius: 6px;\n  background-color: #f0f0f0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),l=r(49),x=r(5048),p=r(4571),f=r(184),m=function(){var n=(0,p.wY)(),e=n.data,r=n.isLoading,t=n.error,o=(0,x.v9)((function(n){return n.filter})).filter,a=(0,p.Nt)(),u=(0,i.Z)(a,1)[0],d=(e||[]).filter((function(n){return n.name.toLowerCase().includes(o)}));return(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)("div",{children:"Loading..."}),!r&&(0,f.jsx)(s,{children:(d||[]).length>0?d.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,f.jsxs)(c,{children:[r,": ",t,(0,f.jsx)(l.u,{onClick:function(){return function(n){u(n)}(e)},children:"Delete"})]},e)})):(0,f.jsx)("div",{children:"No contacts found"})}),t&&console.log(t.message)]})},h=d.Z.input(a||(a=(0,u.Z)(["\n  padding: 10px;\n  border: 2px solid #d1d1d1;\n  border-radius: 6px;\n  font-size: 14px;\n  outline: none;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);\n"]))),b=r(2724),g=r(6755);var v=function(){var n=(0,x.v9)((function(n){return n.filter})).filter,e=(0,x.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b.x,{children:"Find Contact by Name"}),(0,f.jsx)(h,{value:n,onChange:function(n){var r=n.target.value.toLowerCase().trim();e((0,g.M)(r))}})]})},Z=r(2791),j=r(7941);function w(){var n=(0,Z.useState)(""),e=(0,i.Z)(n,2),r=e[0],t=e[1],o=(0,Z.useState)(""),a=(0,i.Z)(o,2),u=a[0],d=a[1],s=(0,p.Tn)(),c=(0,i.Z)(s,1)[0],x=(0,p.wY)().data,m=(x||[]).some((function(n){return n.name===r})),h=(x||[]).some((function(n){return n.number===u})),b=function(n){var e=n.target,r=e.name,o=e.value;"name"===r?t(o):"number"===r&&d(o)},g=function(){t(""),d("")};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(j.l0,{onSubmit:function(n){n.preventDefault(),m||h?alert(m?"This name already exists in your contacts.":"This number already exists in your contacts."):(c({name:r,number:u}),g())},children:[(0,f.jsx)(j.zr,{children:"Phone Book"}),(0,f.jsx)(j.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,value:r,onChange:b,placeholder:"Name"}),(0,f.jsx)(j.zr,{children:"Number"}),(0,f.jsx)(j.II,{type:"tel",name:"number",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",required:!0,value:u,onChange:b,placeholder:"000-000-0000"}),(0,f.jsx)(l.u,{type:"submit",children:"Add contact"})]})})}var y=r(7954);var k=function(){return(0,f.jsxs)(y.W,{children:[(0,f.jsx)(w,{}),(0,f.jsx)(v,{}),(0,f.jsx)(m,{})]})}},7954:function(n,e,r){r.d(e,{W:function(){return a}});var t,o=r(168),a=r(7686).Z.div(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  max-width: 380px;\n  margin: 0 auto;\n"])))},2724:function(n,e,r){r.d(e,{x:function(){return a}});var t,o=r(168),a=r(7686).Z.p(t||(t=(0,o.Z)(["\n  font-size: 20px;\n  color: #666;\n  margin-bottom: 18px;\n"])))}}]);
//# sourceMappingURL=607.b46802b9.chunk.js.map