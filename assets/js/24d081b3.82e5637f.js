"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9296],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},404:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"gradle",title:"Gradle",sidebar_label:"Gradle"},s=void 0,p={unversionedId:"readings/wk1/gradle",id:"readings/wk1/gradle",isDocsHomePage:!1,title:"Gradle",description:"We're going to be doing a quick drive-by of a popular build automation tool called Gradle.",source:"@site/docs/readings/wk1/gradle.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/gradle",permalink:"/cs421_f21/docs/readings/wk1/gradle",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk1/gradle.md",version:"current",frontMatter:{id:"gradle",title:"Gradle",sidebar_label:"Gradle"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/cs421_f21/docs/readings/wk1/java"},next:{title:"OkHttp",permalink:"/cs421_f21/docs/readings/wk1/okhttp"}},d=[],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're going to be doing a quick drive-by of a popular ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_build_automation_software"},"build automation tool")," called ",(0,o.kt)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle"),".\nBuild tools are used to automate the process of packaging up and\nshipping your code to your users.\nWhen working with teams, it is essential to have a standardized build tool. We are, however, going to narrow our focus on ",(0,o.kt)("em",{parentName:"p"},"managing dependencies"),". "),(0,o.kt)("p",null,"When building software applications, often you use tools and libraries written by other developers. These software programs are your application's ",(0,o.kt)("em",{parentName:"p"},"dependencies")," since your software (or development flow) depends on it. For example, you have used ",(0,o.kt)("a",{parentName:"p",href:"https://junit.org/junit5/"},"JUnit")," in Data Structures for writing unit tests. JUnit is an open-source program written to facilitate test-driven development in Java. JUnit is a dependency for most homework in the Data Structures course. "),(0,o.kt)("p",null,"When a dependency that you are using requires another library,\nthe required library becomes a ",(0,o.kt)("em",{parentName:"p"},"transitive dependency"),".\nEssentially, what this means to you is that you also rely on that\nother dependency.\nAs your project becomes larger and the code more complex, you will need a tool to manage all the dependencies. Enters Gradle!\nNow remember that Gradle is first and foremost, a build tool. It does also a great job of managing dependencies. Adding a dependency with Gradle is as easy as adding a line to your ",(0,o.kt)("em",{parentName:"p"},"build script"),"."),(0,o.kt)("p",null,'The easiest way to create a new project that is all Gradle ready is by using the IntelliJ Gradle template. Follow these instruction on  "',(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/getting-started-with-gradle.html"},"Getting Started with Gradle"),'" to get a Gradle project up and running. If you have not already installed IntelliJ, please follow the instructions on "',(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/installation-guide.html"},"Install IntelliJ IDEA"),'" and "',(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-for-the-first-time.html"},"Run IntelliJ IDEA for the first time"),'."'),(0,o.kt)("p",null,"Once done, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file in IntelliJ and find the following section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.6.0'\n    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine'\n}\n")),(0,o.kt)("p",null,"As you have guessed, that two lines inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," ",(0,o.kt)("em",{parentName:"p"},"block")," are all it takes to add JUnit to your project. When we later work with ",(0,o.kt)("a",{parentName:"p",href:"http://sparkjava.com/"},"SparkJava"),", for example, to build a RESTful API, we will add the following line to the build script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.sparkjava:spark-core:2.9.3'\n")),(0,o.kt)("p",null,"You might be wondering about the syntax",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," of Gradle and, for instance, what ",(0,o.kt)("inlineCode",{parentName:"p"},"testImplementation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"testRuntimeOnly")," mean. We will not cover these in OOSE; if you want to learn more about Gradle, please consult its ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/userguide.html"},"documentation"),"."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Gradle is a domain-specific language, or DSL, that is based heavily on the Groovy programming language. Groovy is a dynamic scripting language that runs on the Java Virtual Machine.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);