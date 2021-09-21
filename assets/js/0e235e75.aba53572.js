"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9004],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2920:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"post",title:"Endpoint: HTTP Post",sidebar_label:"Endpoint: HTTP Post"},p=void 0,c={unversionedId:"readings/wk4/post",id:"readings/wk4/post",isDocsHomePage:!1,title:"Endpoint: HTTP Post",description:"By design, the POST request method requests that a web server accepts the data enclosed in the body of the request message, most likely for storing it. It is often used when uploading a file or when submitting a completed web form.",source:"@site/docs/readings/wk4/post.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/post",permalink:"/cs421_f21/docs/readings/wk4/post",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk4/post.md",version:"current",frontMatter:{id:"post",title:"Endpoint: HTTP Post",sidebar_label:"Endpoint: HTTP Post"},sidebar:"tutorialSidebar",previous:{title:"Endpoint: HTTP Get",permalink:"/cs421_f21/docs/readings/wk4/get"}},l=[],m={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"from ",(0,a.kt)("a",{parentName:"h5",href:"https://en.wikipedia.org/wiki/POST_(HTTP)"},"WIKIPEDIA"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"By design, the POST request method requests that a web server accepts the data enclosed in the body of the request message, most likely for storing it. It is often used when uploading a file or when submitting a completed web form."))),(0,a.kt)("p",null,"Assume in the JBApp, we want to allow the user (company profiles) to enter and save employers info into the system aside from posting jobs. These entries can be made (on a web form) and will be ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),'ed to the server for processing (i.e., getting stored in the database). Let\'s add such an "add" functionality for employers. We need a post endpoint:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' Spark.post("/employers", (req, res) -> {\n    String name = req.queryParams("name");\n    String sector = req.queryParams("sector");\n    String summary = req.queryParams("summary");\n    Employer em = new Employer(name, sector, summary);\n    getORMLiteDao().create(em);\n    res.status(201);\n    res.type("application/json");\n    return new Gson().toJson(em.toString());\n});\n')),(0,a.kt)("p",null,"Note how we first parse/read the ",(0,a.kt)("em",{parentName:"p"},"post query parameters")," ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sector")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," from the received post request. Then, we use them to create a new\n",(0,a.kt)("inlineCode",{parentName:"p"},"Employer")," object before using ",(0,a.kt)("inlineCode",{parentName:"p"},"employerDao")," to insert it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"employers")," table for us. Next, we set the response status to ",(0,a.kt)("inlineCode",{parentName:"p"},"201")," (i.e. success - item being successfully created.) Finally, we return the inserted employer as a JSON (as a confirmation back to the client)."))}d.isMDXComponent=!0}}]);