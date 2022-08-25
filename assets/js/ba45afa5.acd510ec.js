"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1645],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},316:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"sissearchapp",title:"SIS Search App",sidebar_label:"SIS Search App"},p=void 0,c={unversionedId:"readings/wk1/sissearchapp",id:"readings/wk1/sissearchapp",isDocsHomePage:!1,title:"SIS Search App",description:"We already discussed how to create a new Gradle Java project named sis-search-app here. Inside the project, create a new Java file named Main.java as follows:",source:"@site/docs/readings/wk1/sissearchapp.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/sissearchapp",permalink:"/cs421_f21/docs/readings/wk1/sissearchapp",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk1/sissearchapp.md",version:"current",frontMatter:{id:"sissearchapp",title:"SIS Search App",sidebar_label:"SIS Search App"},sidebar:"tutorialSidebar",previous:{title:"OkHttp",permalink:"/cs421_f21/docs/readings/wk1/okhttp"},next:{title:"Git",permalink:"/cs421_f21/docs/readings/wk1/sissearchappgit"}},l=[],u={toc:l};function d(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We already discussed how to create a new Gradle Java project named ",(0,i.kt)("inlineCode",{parentName:"p"},"sis-search-app")," ",(0,i.kt)("a",{parentName:"p",href:"Intellij"},"here"),". Inside the project, create a new Java file named ",(0,i.kt)("inlineCode",{parentName:"p"},"Main.java")," as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(342).Z})),(0,i.kt)("p",null,"Type the following in ",(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.Response;\n\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        final String BASE_URL = "https://sis.jhu.edu/api/classes";\n        final String KEY = "YOUR_API_KEY_HERE";\n\n        String endpoint = BASE_URL + "/codes/schools?Key=" + KEY;\n\n        OkHttpClient client = new OkHttpClient();\n        Request request = new Request.Builder()\n                .url(endpoint)\n                .build();\n        Response response = client.newCall(request).execute();\n        System.out.println(response.body().string());\n    }\n}\n')),(0,i.kt)("p",null,"Make sure to replace ",(0,i.kt)("inlineCode",{parentName:"p"},'"YOUR_API_KEY_HERE"')," part with your actual API key. Note how we we instantiate a ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"OkHttpClient")," class. We typically do this only once! Then we compose a ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and send it via the instantiated client. Once we compose a request, we ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," it and collect the response. The response, as discussed, is in JSON format in this case, which we simply print to standard output here."),(0,i.kt)("p",null,"Next, build and run your code:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9996).Z})),(0,i.kt)("p",null,"If the code runs successfully, it should produce the following output:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4892).Z})))}d.isMDXComponent=!0},342:function(e,t,n){t.Z=n.p+"assets/images/sissearchapp-ec229e240ddadb92907d8d17deb17363.png"},9996:function(e,t,n){t.Z=n.p+"assets/images/sissearchapp2-55897ffa45163264a3a9b7f43fd44416.png"},4892:function(e,t,n){t.Z=n.p+"assets/images/sissearchapp3-a35582f92aa06a02045c49c36cab9916.png"}}]);