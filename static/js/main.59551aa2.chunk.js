(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),r=n.n(c),o=n(36),u=n(15),i=n(32),m=n.n(i);var s=function(){return l.a.createElement("header",null,l.a.createElement(m.a,{style:{fontSize:"1.8em",color:"#fce4ec",margin:"0px 3px"}}),l.a.createElement("span",null,"Keeper"))},E=n(34),f=n.n(E),p=n(68),v=n(69);var b=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement(v.a,{in:!0,timeout:{enter:"400ms"}},l.a.createElement(p.a,{onClick:function(){e.onDelete(e.id)},color:"inherit",size:"medium"},l.a.createElement(f.a,{style:{color:"#e91e63",fontSize:"1.82em"}}))))},d=n(35),g=n.n(d);var h=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),m=i[0],s=i[1],E=Object(a.useState)(!1),f=Object(u.a)(E,2),b=f[0],d=f[1];return l.a.createElement("center",null,l.a.createElement("form",{className:"create-note"},b?l.a.createElement("input",{name:"title",placeholder:"Title",onChange:function(e){var t=e.target.value;r(t)},value:c}):null,l.a.createElement("textarea",{onClick:function(){d(!0)},onChange:function(e){var t=e.target.value;s(t)},name:"content",placeholder:"Take a note...",rows:b?3:1,value:m}),l.a.createElement(v.a,{in:b,timeout:{enter:"800ms"}},l.a.createElement(p.a,{onClick:function(t){t.preventDefault(),e.onDone(c,m),r(""),s("")},color:"secondary"},l.a.createElement(g.a,null)))))};var j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return t.filter((function(t,n){return e!==n}))}))};return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(h,{onDone:function(e,t){console.log(e),console.log(t),c((function(n){return[].concat(Object(o.a)(n),[{title:[e],content:[t]}])})),console.log(n)}}),l.a.createElement("div",null,n.map((function(e,t){return l.a.createElement(b,{key:t,id:t,title:e.title,content:e.content,onDelete:r})}))))};r.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.59551aa2.chunk.js.map