"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7811],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8628:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),s=["components"],r={id:"identify_classes",title:"Extract classes from problem description",sidebar_label:"Identify Classes"},l=void 0,c={unversionedId:"readings/wk2/identify_classes",id:"readings/wk2/identify_classes",isDocsHomePage:!1,title:"Extract classes from problem description",description:"Assume you have selected a few User Stories to implement for the next iteration. Now you need to extract classes from the problem description (User Stories).",source:"@site/docs/readings/wk2/identify_classes.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/identify_classes",permalink:"/cs421_f21/docs/readings/wk2/identify_classes",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk2/identify_classes.md",version:"current",frontMatter:{id:"identify_classes",title:"Extract classes from problem description",sidebar_label:"Identify Classes"},sidebar:"tutorialSidebar",previous:{title:"Get Started with OOAD of your Project",permalink:"/cs421_f21/docs/readings/wk2/model"},next:{title:"Good Enough Design",permalink:"/cs421_f21/docs/readings/wk2/good_design"}},d=[{value:"The verb/noun method",id:"the-verbnoun-method",children:[]},{value:"The CRC Model",id:"the-crc-model",children:[{value:"CRC Session",id:"crc-session",children:[]}]}],m={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Assume you have selected a few User Stories to implement for the next iteration. Now you need to extract classes from the problem description (User Stories).\nWe will use a fairly simple method to address this task, which serves well for most software problems. It involves:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"using the verb/noun method to discover initial classes"),(0,i.kt)("li",{parentName:"ul"},"using CRC cards to discover responsibilities (behaviors) of each class and the collaboration (relationships) between them.")),(0,i.kt)("h2",{id:"the-verbnoun-method"},"The verb/noun method"),(0,i.kt)("p",null,"Read through a User Story, looking for ",(0,i.kt)("strong",{parentName:"p"},"nouns")," that represent ",(0,i.kt)("strong",{parentName:"p"},"objects")," in the problem domain. These nouns represent the simplest candidates to be classes. Moreover,\nactions that determine classes' behavior often reveal themselves as ",(0,i.kt)("strong",{parentName:"p"},"verbs")," in a User Story. "),(0,i.kt)("p",null,"For example, consider the following User Story (from ",(0,i.kt)("a",{parentName:"p",href:"../wk1/jbapp"},"JBApp"),") "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"User Story #1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"As a")," user, I want to view a complete list of all posted jobs ",(0,i.kt)("em",{parentName:"p"},"so that")," I can learn about existing vacancies."))),(0,i.kt)("p",null,'The nouns "User" and "Job" are candidate for a class. The verbs "view" (jobs) and "learn" (about vacancies) are candidates for methods i.e., behavior shared among (the nominal) classes. '),(0,i.kt)("p",null,"The verb/noun method is a gateway to your design but don't follow it religiously! Not all nouns nor all verbs correspond to classes/behaviors.\nYou might find later that you need a few additional classes or that some of the classes extracted at this stage are not needed. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Conventionally, the names of classes are singular rather than plural. This is because the multiplicity is achieved by creating multiple instances of a class."))),(0,i.kt)("h2",{id:"the-crc-model"},"The CRC Model"),(0,i.kt)("p",null,"A Class Responsibility Collaborator (CRC) model",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is a collection of ",(0,i.kt)("strong",{parentName:"p"},"standard index cards")," that have been divided into three sections, as depicted below. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2316).Z})),(0,i.kt)("p",null,"Here is an example of a CRC card for the aforementioned User Story."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6952).Z})),(0,i.kt)("p",null,"A responsibility is something that a class ",(0,i.kt)("strong",{parentName:"p"},"knows")," or ",(0,i.kt)("strong",{parentName:"p"},"does"),". Often a class has to ",(0,i.kt)("em",{parentName:"p"},"collaborate")," with other classes to fulfill a responsibility.\nCollaboration usually takes one of two forms: a request for information or a request to do something. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"CRC model was originally used as a teaching technique but found its way to agile software development arsenal as an effective modeling tool."))),(0,i.kt)("h3",{id:"crc-session"},"CRC Session"),(0,i.kt)("p",null,"The goal of a CRC session is to discover classes and convert them to CRC cards. It is recommended to do this in a group setting to foster and facilitate brainstorming of good solutions. "),(0,i.kt)("p",null,"The session involves ",(0,i.kt)("em",{parentName:"p"},"iteratively")," performing the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extract classes."),(0,i.kt)("li",{parentName:"ul"},"Find responsibilities."),(0,i.kt)("li",{parentName:"ul"},"Define collaborators."),(0,i.kt)("li",{parentName:"ul"},"Role-play to refine responsibilities/collaborators!")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"CRC Role-play")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Each User Story describes a "scenario" for using the software. A common practice is to "execute a scenario" where each participant plays ',(0,i.kt)("em",{parentName:"p"},"the role of a class")," and the group collectively simulates the user story. "))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"A software requirement specification document (SRS) is the initial input to the process. The document should include User Stories. A project that cannot provide SRS is not ready to begin modeling."),(0,i.kt)("li",{parentName:"ul"},"Participants should have read and familiarized themselves with SRS that will be used in the session. "),(0,i.kt)("li",{parentName:"ul"},"A session should focus on a fairly small and manageable portion of the system at a time. Best is to focus on the subset of User Stories that will be implemented in the next iteration. ")))),(0,i.kt)("p",null,"The outcome of a CRC session, like that of the verb/noun method, is not carved in stone. When you get to implement the model, new classes will be introduced, responsibilities will be reorganized, existing classes will disappear, and so on."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},'Beck K., Cunningham W., "A Laboratory For Teaching Object-Oriented Thinking", available at ',(0,i.kt)("a",{parentName:"li",href:"http://c2.com/doc/oopsla89/paper.html"},"http://c2.com/doc/oopsla89/paper.html")," (1989).",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},2316:function(e,t,a){t.Z=a.p+"assets/images/crcCardLayout-5003a759c5f6486b36e2b09f91f00e5f.png"},6952:function(e,t,a){t.Z=a.p+"assets/images/crcExample-8d05a5782b901dfb1ef8ec352c92dbf7.png"}}]);