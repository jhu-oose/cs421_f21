"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2647],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),h=i,g=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2461:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={id:"dp",title:"Design principles",sidebar_label:"Design Principles"},l=void 0,p={unversionedId:"readings/wk2/dp",id:"readings/wk2/dp",isDocsHomePage:!1,title:"Design principles",description:"State of flux is like tossing pebbles into water. Each change has ripples. And software always changes like an evolving organism. Ideally the changes are confined and have no adverse consequence.",source:"@site/docs/readings/wk2/dp.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/dp",permalink:"/cs421_f21/docs/readings/wk2/dp",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk2/dp.md",version:"current",frontMatter:{id:"dp",title:"Design principles",sidebar_label:"Design Principles"},sidebar:"tutorialSidebar",previous:{title:"Low Coupling",permalink:"/cs421_f21/docs/readings/wk2/coupling"},next:{title:"Single Responsibility Principle",permalink:"/cs421_f21/docs/readings/wk2/srp"}},d=[{value:"The SOLID design principles",id:"the-solid-design-principles",children:[]}],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Software is always in a state of flux.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"State of flux is like tossing pebbles into water. Each change has ripples. And software always changes like an evolving organism. Ideally the changes are confined and have no adverse consequence. "))),(0,o.kt)("p",null,'A good software design organizes the code in a way that it is "easy to understand, change, maintain and reuse."'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Design Principle")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Design principles are practical pieces of advice that are applied to designing or writing code to make the code more maintainable, flexible, and/or extensible."))),(0,o.kt)("p",null,"In a small application, poor design is survivable. The problem with poorly designed small applications is that if they are successful, they grow up to be poorly designed big applications."),(0,o.kt)("p",null,"In this and several next readings, we will set out to learn more about good practices when it comes to software design."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is often said that design cannot be taught but has to be learned through experience. That said, there is always the opportunity to learn from the experience of others. "))),(0,o.kt)("p",null,"Over the years, programmers noticed that some code arrangements made their lives easier while others made them harder. These experiences led them to develop ",(0,o.kt)("em",{parentName:"p"},"opinions")," about how to write good code."),(0,o.kt)("p",null,"Design principles are (often opinionated) guidelines derived from experience of programmers about software design that usually take the form of do's and don'ts. They are the Commandments of OO Programming. "),(0,o.kt)("p",null,"We have already explored two principles:",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"High cohesion")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"High cohesion means that the responsibilities of a given element are strongly related and highly focused."))),(0,o.kt)("p",null,"High cohesion is generally used in support of low coupling. "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Low coupling")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Coupling is a measure of how strongly one element is connected to, has knowledge of, or relies on other elements. Low coupling means lower dependency between the classes."))),(0,o.kt)("p",null,"In the section on ",(0,o.kt)("a",{parentName:"p",href:"good_design"},"Good Enough Design"),", we noted:"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The path to changeable and maintainable object-oriented software begins with classes that are highly cohesive and loosely coupled."))),(0,o.kt)("p",null,"We now pick up that discussion by introducing a catalogue of design guidelines known as the SOLID principles."),(0,o.kt)("h2",{id:"the-solid-design-principles"},"The SOLID design principles"),(0,o.kt)("p",null,"The SOLID design principles were promoted by ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robert_C._Martin"},"Robert C. Martin")," and are some of the best-known design principles in object-oriented software development. SOLID is a mnemonic acronym for the following five principles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single Responsibility Principle"),(0,o.kt)("li",{parentName:"ul"},"Open/Closed Principle"),(0,o.kt)("li",{parentName:"ul"},"Liskov Substitution Principle"),(0,o.kt)("li",{parentName:"ul"},"Interface Segregation Principle"),(0,o.kt)("li",{parentName:"ul"},"Dependency Inversion Principle")),(0,o.kt)("p",null,"In the following readings, we explore these principles one by one."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"See the readings on ",(0,o.kt)("a",{parentName:"li",href:"good_design"},"Good Enough Design"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);