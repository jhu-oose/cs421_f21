"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8458],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6171:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"addemployer",title:"Add an employer",sidebar_label:"Add an employer"},p=void 0,d={unversionedId:"readings/wk5/addemployer",id:"readings/wk5/addemployer",isDocsHomePage:!1,title:"Add an employer",description:"Now, let's implement a new view to facilitate adding employers. Add the following route to Main.main:",source:"@site/docs/readings/wk5/addemployer.md",sourceDirName:"readings/wk5",slug:"/readings/wk5/addemployer",permalink:"/cs421_f21/docs/readings/wk5/addemployer",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk5/addemployer.md",version:"current",frontMatter:{id:"addemployer",title:"Add an employer",sidebar_label:"Add an employer"},sidebar:"tutorialSidebar",previous:{title:"Template Reuse",permalink:"/cs421_f21/docs/readings/wk5/reuse"},next:{title:"HTTP Cookies",permalink:"/cs421_f21/docs/readings/wk5/cookies"}},m=[],s={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now, let's implement a new view to facilitate adding employers. Add the following route to ",(0,o.kt)("inlineCode",{parentName:"p"},"Main.main"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'get("/addemployer", (req, res) -> {\n    Map<String, Object> model = new HashMap<String, Object>();\n    return new ModelAndView(model, "public/addemployer.vm");\n}, new VelocityTemplateEngine());\n')),(0,o.kt)("p",null,"Note we already implemented a ",(0,o.kt)("a",{parentName:"p",href:"../wk4/post"},"HTTP post ",(0,o.kt)("inlineCode",{parentName:"a"},"employers")," endpoint")," to add new employers. The following is the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"addemployer.vm")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'#set($title = "Add employer")\n#parse("public/top.vm")\n\n<h2>Add a new employer</h2>\n<form action="/employers" method="post" >\n    <div>\n        <label for="name">Name: </label>\n        <input type="text" name="name" placeholder="name" id="name" required>\n    </div>\n    <div>\n        <label for="sector">Sector: </label>\n        <input type="text" name="sector" placeholder="sector" id="sector" />\n    </div>\n    <div>\n        <label for="summary">Summary: </label>\n        <input type="text" name="summary" placeholder="summary" id="summary" />\n    </div>\n    <br />\n    <input type="submit" value="Submit" id="submitAddEmployer" />\n</form>\n\n#parse("public/bottom.vm")\n')),(0,o.kt)("p",null,"Now, point your browser to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:7000/"},(0,o.kt)("inlineCode",{parentName:"a"},"http://localhost:7000/")),' and click on "Add an employer". Fill the form and hit ',(0,o.kt)("inlineCode",{parentName:"p"},"Submit"),". If things work, you should receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," reponse back which is a confirmation that the new employer was added successfully to the ",(0,o.kt)("inlineCode",{parentName:"p"},"employers")," table."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Controller Code")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might have noticed our ",(0,o.kt)("inlineCode",{parentName:"p"},"Main.main()")," is getting very long. In general, ",(0,o.kt)("inlineCode",{parentName:"p"},"Main.main()"),' is not the best place to list and process all API requests. It would be sensible to move the "controller" code somewhere else. One viable approach is to introduce a new Java package named ',(0,o.kt)("inlineCode",{parentName:"p"},"controller")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java")," and create class(es) that contain controller code. Then, we just receive http requests in ",(0,o.kt)("inlineCode",{parentName:"p"},"Main"),", but then we ",(0,o.kt)("em",{parentName:"p"},"route")," each request to a suitable controller class for actual processing. Finally, you may want to rename the ",(0,o.kt)("inlineCode",{parentName:"p"},"Main")," class to something more meaningful like ",(0,o.kt)("inlineCode",{parentName:"p"},"Server"),"!"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To get more details on Apache Velocity, refer to its ",(0,o.kt)("a",{parentName:"p",href:"http://velocity.apache.org/engine/1.7/user-guide"},"user guide"),"."))))}c.isMDXComponent=!0}}]);