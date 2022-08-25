"use strict";(self.webpackChunkcs_421_source=self.webpackChunkcs_421_source||[]).push([[2933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,f=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={id:"gitignore",title:".gitignore",sidebar_label:".gitignore"},a=void 0,l={unversionedId:"readings/wk1/gitignore",id:"readings/wk1/gitignore",title:".gitignore",description:"A .gitignore file specifies intentionally untracked files that Git should ignore.",source:"@site/docs/readings/wk1/gitignore.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/gitignore",permalink:"/cs421/docs/readings/wk1/gitignore",draft:!1,editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk1/gitignore.md",tags:[],version:"current",frontMatter:{id:"gitignore",title:".gitignore",sidebar_label:".gitignore"},sidebar:"tutorialSidebar",previous:{title:"Github Survey",permalink:"/cs421/docs/readings/wk1/github_survey"},next:{title:"Gradle",permalink:"/cs421/docs/readings/wk1/gradle"}},s={},d=[],p={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file specifies intentionally untracked files that Git should ignore."),(0,i.kt)("p",null,"For example, a gradle project uses a folder called .gradle to store all the files associated to the dependencies that you add to your project. (The folder may be hidden in your computer.) These files are system dependent and should not be added to a Git repository."),(0,i.kt)("p",null,"As another example, IntelliJ by default creates a build folder to store all the compiled Java (",(0,i.kt)("inlineCode",{parentName:"p"},".class"),") files. These files should not be added to the Git repository."),(0,i.kt)("p",null,"Generally speaking, you should not add these four types of files into your Git repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Files that don't belong to the project like ",(0,i.kt)("inlineCode",{parentName:"li"},".DS_Store")," (for Mac OS), ",(0,i.kt)("inlineCode",{parentName:"li"},"Thumds.db")," (for Windows)."),(0,i.kt)("li",{parentName:"ul"},"Files that are automatically generated like those in build folder."),(0,i.kt)("li",{parentName:"ul"},"Libraries (depends on the situation) like those in .gradle folder."),(0,i.kt)("li",{parentName:"ul"},"Credentials and secretes ")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can manually create a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file (notice the leading dot) in the root of your Git repository and list the files and folders to be ignored in separate lines.")),(0,i.kt)("p",null,"For instance, a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file may look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".gradle\nbuild\n.DS_Store\n__MACOSX\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.toptal.com/developers/gitignore"},"this")," online tool to generate .gitignore for different operating systems, project environments, etc.")),(0,i.kt)("p",null,"Lucky us, someone has created a plugin for IntelliJ that uses the API for the online tool noted above. The plugin is called ",(0,i.kt)("inlineCode",{parentName:"p"},".ignore"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"IntelliJ Plugins extend the functionality of the IDE. The general process to manage and install plugins are describe ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html"},"here"),".")),(0,i.kt)("p",null,"After installing the plugins, restart the IDE. Then open IntelliJ again. Right click on the root of a project and select New -> ",(0,i.kt)("inlineCode",{parentName:"p"},".ignore")," File -> gitignore File (Git)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9186).Z,width:"824",height:"669"})),(0,i.kt)("p",null,"From the prompt, elect Gradle, JetBrains, Java, and macOS (or Windows or Linux, if you are using those operating systems)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8268).Z,width:"824",height:"578"})),(0,i.kt)("p",null,"Now an elaborate ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),' file has been added to the root of the Git repository. (If IntelliJ asked you "Add file to Git", say "Yes".)'))}c.isMDXComponent=!0},9186:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gitignore1-52d021b23104d612df09224eecb952d5.jpg"},8268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gitignore2-48c863e09a77d66a739cbb435d18d3d6.jpg"}}]);