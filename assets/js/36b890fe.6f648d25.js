"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6529],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},965:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"js2",title:"Accomplishing more with JS",sidebar_label:"Accomplishing more with JS"},s=void 0,p={unversionedId:"readings/wk6/js2",id:"readings/wk6/js2",isDocsHomePage:!1,title:"Accomplishing more with JS",description:"The power of JS and the myriad of things you can do with it in front-end development goes well beyond a simple form validation. To get a better taste of JS, let's do a more interesting task.",source:"@site/docs/readings/wk6/js2.md",sourceDirName:"readings/wk6",slug:"/readings/wk6/js2",permalink:"/cs421_f21/docs/readings/wk6/js2",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk6/js2.md",version:"current",frontMatter:{id:"js2",title:"Accomplishing more with JS",sidebar_label:"Accomplishing more with JS"},sidebar:"tutorialSidebar",previous:{title:"Adding Logic using JavaScript",permalink:"/cs421_f21/docs/readings/wk6/js"}},m=[{value:"How does it all work?",id:"how-does-it-all-work",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The power of JS and the myriad of things you can do with it in front-end development goes well beyond a simple form validation. To get a better taste of JS, let's do a more interesting task. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TASK")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The goal here is to enhance the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," view by adding a little button labled ",(0,r.kt)("strong",{parentName:"p"},"X")," next to each emloyer. When the user clicks that button, a post request with employer's name is sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"delemployers")," route on the server to remove that employer from the database, before the page is reloaded to show updated content."))),(0,r.kt)("p",null,"Let's make it happen! First, make sure you have an active HTTP DELETE ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," API endpoint in your server to accept post requests and delete the employer from the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table based on ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," query param i.e., employer's name; recall that an employer name is ",(0,r.kt)("em",{parentName:"p"},"unique")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// delete an employer\nSpark.delete("/employers", (req, res) -> {\n    String name = req.queryParams("name");\n    Dao emDao = getEmployerORMLiteDao();\n    List<Employer> ems = emDao.queryForEq("name", name);\n    int del = 0;\n    if (ems != null  && !ems.isEmpty()) {\n        del = emDao.deleteById(ems.get(0).getId());\n    }\n    res.status(200);\n    res.type("application/json");\n    if (del > 0) {\n        return new Gson().toJson(ems.get(0).toString());\n    }\n    return new Gson().toJson("{}");\n});\n')),(0,r.kt)("p",null,"Then, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"employers.vm")," and insert the following at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"li")," tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button type="button" id="$em.name">X</button>\n')),(0,r.kt)("p",null,"So, it should now be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<li>\n    <i>$em.name</i> is a ($em.sector) company: $em.summary.\n    <button type="button" id="$em.name">X</button>\n</li>\n')),(0,r.kt)("p",null,"This will add a little ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," button next to each employer. "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note how we use the employer's name to set ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute of each button. This info makes it easy on the front-end side to delete the employer whenever a delete button is clicked.    "))),(0,r.kt)("p",null,"After that, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"employers.js")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/resources/public/js")," folder with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function deleteEmployer(employerName) {\n    fetch('http://localhost:7000/employers?name=' + employerName, {\n            method: 'Delete',\n        }\n    ).then(res => window.location.reload = window.location.reload(true));\n}\n\nlet delButtons = document.querySelectorAll(\"li > button\")\nArray.prototype.forEach.call(delButtons, function(button) {\n    button.addEventListener('click', deleteEmployer.bind(null, button.id));\n});\n")),(0,r.kt)("p",null,"And finally add ",(0,r.kt)("inlineCode",{parentName:"p"},'<script src="js/employers.js"><\/script>')," to ",(0,r.kt)("inlineCode",{parentName:"p"},"employers.vm")," before ",(0,r.kt)("inlineCode",{parentName:"p"},"</body>")," (i.e. before ",(0,r.kt)("inlineCode",{parentName:"p"},'#parse("public/bottom.vm")'),")."),(0,r.kt)("h3",{id:"how-does-it-all-work"},"How does it all work?"),(0,r.kt)("p",null,"In the JS code, we first get all the little buttons using ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelectorAll")," by selecting all ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," tags nested inside ",(0,r.kt)("inlineCode",{parentName:"p"},"li")," tags. Then, we add an event listener for the ",(0,r.kt)("inlineCode",{parentName:"p"},"click")," event of each of the buttons so that whenever a delete button is clicked the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteEmployer")," function is invoked and the corresponding employer name is passed to it. Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteEmployer")," function above, we send a post request, using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API")," to the HTTP DELETE ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," route supplying the employer name as a query param resulting in removal of the employer with that name. Since the sending and processing of the post request can take a bit of time, once the response is ready we reload the page using ",(0,r.kt)("inlineCode",{parentName:"p"},"window.location.reload(true)")," to have the updated content displayed!"))}c.isMDXComponent=!0}}]);