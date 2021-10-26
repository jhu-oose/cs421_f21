"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8946],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},141:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"http",title:"HTTP",sidebar_label:"HTTP"},c=void 0,u={unversionedId:"readings/wk1/http",id:"readings/wk1/http",isDocsHomePage:!1,title:"HTTP",description:"HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet.",source:"@site/docs/readings/wk1/http.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/http",permalink:"/cs421_f21/docs/readings/wk1/http",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk1/http.md",version:"current",frontMatter:{id:"http",title:"HTTP",sidebar_label:"HTTP"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/cs421_f21/docs/readings/wk1/api"},next:{title:"CRUD",permalink:"/cs421_f21/docs/readings/wk1/crud"}},p=[],l={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet."),(0,i.kt)("p",null,"There are 4 basic HTTP verbs (operation) we use in requests to interact with server:"),(0,i.kt)("p",null,"GET \u2014 retrieve a specific resource (by id) or a collection of resources\nPOST \u2014 create a new resource\nPUT \u2014 update a specific resource (by id)\nDELETE \u2014 remove a specific resource by id"),(0,i.kt)("p",null,"A HTTP request, in addition to an HTTP verb, typically consists of:"),(0,i.kt)("p",null,"a header, which allows the client to pass along information about the request\na path to a resource\nan optional message body containing data"),(0,i.kt)("p",null,"Here is an example of HTTP request and response taken from MDN Docs:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4351).Z})))}d.isMDXComponent=!0},4351:function(e,t,r){t.Z=r.p+"assets/images/httpreqres-47b9523f183d068bdc53dda0d2543e39.jpg"}}]);