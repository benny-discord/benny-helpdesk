(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+nXQ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/example/writing-modules",function(){return n("l8ob")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,f=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"===typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},l8ob:function(e,t,n){"use strict";n.r(t),n.d(t,"info",(function(){return p})),n.d(t,"default",(function(){return d}));var r,a=n("wx14"),o=n("Ff2n"),i=n("q1tI"),c=n.n(i),l=n("7ljp"),p=(c.a.createElement,{name:"Writing Modules",description:"Modules are categories that store documentation pages of the same topic."}),b=(r="PageToolBar",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),u={info:p},s="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(s,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{title:"Writing Modules",mdxType:"PageToolBar"}),Object(l.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#getting-started"}),"Getting Started")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#module-properties"}),"Module Properties")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#id"}),Object(l.b)("inlineCode",{parentName:"a"},"id"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#name"}),Object(l.b)("inlineCode",{parentName:"a"},"name"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#description"}),Object(l.b)("inlineCode",{parentName:"a"},"description"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#setting-up"}),"Setting Up")))))),Object(l.b)("h2",{id:"getting-started"},"Getting Started"),Object(l.b)("p",null,"To create your first module, copy and paste the ",Object(l.b)("strong",{parentName:"p"},"@/pages/example")," folder. You can name it anything URL compatible. This is what will be displayed in the URL. Then, open the index.js file inside of it. "),Object(l.b)("h3",{id:"module-properties"},"Module Properties"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"index.js")," configures how your module looks and is a page itself, which automatically displays all ",Object(l.b)("inlineCode",{parentName:"p"},".md")," files in the folder. There are three properties in it."),Object(l.b)("h4",{id:"id"},Object(l.b)("inlineCode",{parentName:"h4"},"id")),Object(l.b)("p",null,"The ID should be ",Object(l.b)("strong",{parentName:"p"},"exactly")," the same as the name of the folder. This is used internally due to the problem of not being able to get the current folder automatically."),Object(l.b)("h4",{id:"name"},Object(l.b)("inlineCode",{parentName:"h4"},"name")),Object(l.b)("p",null,"This is what will be displayed as the header of the module page, and is what will be inside the module's button."),Object(l.b)("h4",{id:"description"},Object(l.b)("inlineCode",{parentName:"h4"},"description")),Object(l.b)("p",null,"Also displayed in the button and header, this can be a small description of what the module is about."),Object(l.b)("h3",{id:"setting-up"},"Setting Up"),Object(l.b)("p",null,"After you give the module its properties, you're ready to start writing!"))}d.isMDXComponent=!0},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["+nXQ",0,1]]]);