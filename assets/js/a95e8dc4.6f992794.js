"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7682],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7287:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"coupling",title:"Low Coupling",sidebar_label:"Low Coupling"},l=void 0,p={unversionedId:"readings/wk2/coupling",id:"readings/wk2/coupling",isDocsHomePage:!1,title:"Low Coupling",description:"Ensure that classes are loosely coupled to one another.",source:"@site/docs/readings/wk2/coupling.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/coupling",permalink:"/cs421_f21/docs/readings/wk2/coupling",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk2/coupling.md",version:"current",frontMatter:{id:"coupling",title:"Low Coupling",sidebar_label:"Low Coupling"}},c=[{value:"Example Design",id:"example-design",children:[]}],d={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Principle")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ensure that classes are loosely coupled to one another."))),(0,r.kt)("p",null,"Object-Oriented designers use the word ",(0,r.kt)("strong",{parentName:"p"},"coupling")," to describe the dependency between classes.\nWhen a class ",(0,r.kt)("em",{parentName:"p"},"collaborates")," with another class, there is some sort of ",(0,r.kt)("em",{parentName:"p"},"dependency")," between them and therefore they are ",(0,r.kt)("em",{parentName:"p"},"coupled")," to each other."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Classes should not interact (collaborate) with too many other classes. Moreover, if a class ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," interacts with another class ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", this interaction should be ",(0,r.kt)("strong",{parentName:"p"},"loose"),", which means that ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," should ",(0,r.kt)("strong",{parentName:"p"},"not")," ",(0,r.kt)("em",{parentName:"p"},"know too much")," (or ",(0,r.kt)("em",{parentName:"p"},"make too many assumptions"),") about ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"."))),(0,r.kt)("p",null,"Why does this matter?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications that are easy to change consist of classes that are ",(0,r.kt)("strong",{parentName:"li"},"loosely coupled"),"."),(0,r.kt)("li",{parentName:"ul"},"A class that is ",(0,r.kt)("em",{parentName:"li"},"tightly coupled")," to other classes, may need to change if those classes change. "),(0,r.kt)("li",{parentName:"ul"},"In a system that is strongly coupled, when a class changes, there's a greater risk of breaking several other classes (that depend on the changed one).")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"How to figure out if coupling is high?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'When you look at the UML Class diagram of your design, every "relationship" is an indication of coupling. The more relationships you have (and the stronger the relationships are)',(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", the higher is the coupling."))),(0,r.kt)("p",null,"Sometimes, coupling does not manifest itself in a UML diagram. This is when, for instance, a class depends on the inner working of another class. This is the strongest (and nastiest) form of coupling."),(0,r.kt)("p",null,"For example, consider the implementation of getScore inside the Student class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Student {\n    private String name;\n    private String email;\n    private GradeBook grades;\n\n\n    public double getScore() {\n        double quiz = grades.quiz();\n\n        double project = 0;\n        for (Double iteration: grades.project()) {\n            project += iteration;\n        }\n\n        double homework = 0;\n        for (Double grade: grades.homework()) {\n            homework += grade;\n        }\n\n        return 0.1 * quiz + 0.3 * homework + 0.6 * project;\n    }\n}\n")),(0,r.kt)("p",null,"The getScore method knows a lot about the GradeBook class! If we change anything in the GradeBook class, this method may break down. The Student and the GradeBook are tightly coupled. To reduce the coupling, you can let the GradeBook class to calculate the score:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Student {\n    private String name;\n    private String email;\n    private GradeBook grades;\n\n    public double getScore() {\n        return grades.totalScore();\n    }\n}\n")),(0,r.kt)("p",null,"Now the Student class does not need to know anything about what is in the GradeBook class other than it has a totalScore method that it can call to get the student's score!"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Take home message")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It may be impossible to eliminate coupling but you should strive to minimize it."))),(0,r.kt)("h2",{id:"example-design"},"Example Design"),(0,r.kt)("p",null,"The examples are (partial) designs for the ",(0,r.kt)("a",{parentName:"p",href:"../wk1/jbapp"},"JBApp"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"bidirectional")," association between ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," below is an example of tight coupling; both the ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," need to know about one another. If we change one, we may have to change the other one."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5931).Z})),(0,r.kt)("p",null,"On the other hand, the example below represents less (tightly) coupled classes. Here, there is still a dependency between ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," but only ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," knows about ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2343).Z})),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Association, for instance, is a stronger indication of coupling than dependency relationship. Within association, composition is stronger compared to aggregation. ",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},2343:function(e,t,n){t.Z=n.p+"assets/images/cohesionExample2-fe45df5140a48667137d5b02eefd94b6.png"},5931:function(e,t,n){t.Z=n.p+"assets/images/couplingExample1-a4775bea785a40aa40ef1f79df448224.png"}}]);