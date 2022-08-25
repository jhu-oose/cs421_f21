"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2933],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2780:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"gitignore",title:".gitignore",sidebar_label:".gitignore"},s=void 0,d={unversionedId:"readings/wk1/gitignore",id:"readings/wk1/gitignore",isDocsHomePage:!1,title:".gitignore",description:"A .gitignore file specifies intentionally untracked files that Git should ignore.",source:"@site/docs/readings/wk1/gitignore.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/gitignore",permalink:"/cs421_f21/docs/readings/wk1/gitignore",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk1/gitignore.md",version:"current",frontMatter:{id:"gitignore",title:".gitignore",sidebar_label:".gitignore"},sidebar:"tutorialSidebar",previous:{title:"Git for Version Control",permalink:"/cs421_f21/docs/readings/wk1/git"},next:{title:"GitHub for Project Management",permalink:"/cs421_f21/docs/readings/wk1/github"}},p=[],c={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file specifies intentionally untracked files that Git should ignore."),(0,a.kt)("p",null,"For example, a gradle project uses a folder called .gradle to store all the files associated to the dependencies that you add to your project. (The folder may be hidden in your computer.) These files are system dependent and should not be added to a Git repository."),(0,a.kt)("p",null,"As another example, IntelliJ by default creates a build folder to store all the compiled Java (",(0,a.kt)("inlineCode",{parentName:"p"},".class"),") files. These files should not be added to the Git repository."),(0,a.kt)("p",null,"Generally speaking, you should not add these four types of files into your Git repository:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Files that don't belong to the project like ",(0,a.kt)("inlineCode",{parentName:"li"},".DS_Store")," (for Mac OS), ",(0,a.kt)("inlineCode",{parentName:"li"},"Thumds.db")," (for Windows)."),(0,a.kt)("li",{parentName:"ul"},"Files that are automatically generated like those in build folder."),(0,a.kt)("li",{parentName:"ul"},"Libraries (depends on the situation) like those in .gradle folder."),(0,a.kt)("li",{parentName:"ul"},"Credentials and secretes ")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can manually create a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file (notice the leading dot) in the root of your Git repository and list the files and folders to be ignored in separate lines."))),(0,a.kt)("p",null,"For instance, a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".gradle\nbuild\n.DS_Store\n__MACOSX\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://www.toptal.com/developers/gitignore"},"this")," online tool to generate .gitignore for different operating systems, project environments, etc."))),(0,a.kt)("p",null,"Lucky us, someone has created a plugin for IntelliJ that uses the API for the online tool noted above. The plugin is called ",(0,a.kt)("inlineCode",{parentName:"p"},".ignore"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"IntelliJ Plugins extend the functionality of the IDE. The general process to manage and install plugins are describe ",(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html"},"here"),"."))),(0,a.kt)("p",null,"After installing the plugins, restart the IDE. Then open IntelliJ again. Right click on the root of a project and select New -> ",(0,a.kt)("inlineCode",{parentName:"p"},".ignore")," File -> gitignore File (Git)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8786).Z})),(0,a.kt)("p",null,"From the prompt, elect Gradle, JetBrains, Java, and macOS (or Windows or Linux, if you are using those operating systems)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9596).Z})),(0,a.kt)("p",null,"Now an elaborate ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),' file has been added to the root of the Git repository. (If IntelliJ asked you "Add file to Git", say "Yes".)'))}u.isMDXComponent=!0},8786:function(e,t,n){t.Z=n.p+"assets/images/gitignore1-52d021b23104d612df09224eecb952d5.jpg"},9596:function(e,t,n){t.Z=n.p+"assets/images/gitignore2-48c863e09a77d66a739cbb435d18d3d6.jpg"}}]);