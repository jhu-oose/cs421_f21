"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[206],{3905:function(A,e,t){t.d(e,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var o=n.createContext({}),d=function(A){var e=n.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},p=function(A){var e=d(A.components);return n.createElement(o.Provider,{value:e},A.children)},s={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,o=A.parentName,p=l(A,["components","mdxType","originalType","parentName"]),c=d(t),u=a,f=c["".concat(o,".").concat(u)]||c[u]||s[u]||r;return t?n.createElement(f,i(i({ref:e},p),{},{components:t})):n.createElement(f,i({ref:e},p))}));function u(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=A,l.mdxType="string"==typeof A?A:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1504:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={id:"ocp",title:"Open-Closed principle",sidebar_label:"Open-Closed Principle"},o=void 0,d={unversionedId:"readings/wk2/ocp",id:"readings/wk2/ocp",isDocsHomePage:!1,title:"Open-Closed principle",description:"Classes should be open for extension but closed for modification.",source:"@site/docs/readings/wk2/ocp.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/ocp",permalink:"/cs421_f21/docs/readings/wk2/ocp",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk2/ocp.md",version:"current",frontMatter:{id:"ocp",title:"Open-Closed principle",sidebar_label:"Open-Closed Principle"},sidebar:"tutorialSidebar",previous:{title:"Single Responsibility Principle",permalink:"/cs421_f21/docs/readings/wk2/srp"},next:{title:"Liskov Substitution Principle",permalink:"/cs421_f21/docs/readings/wk2/lsp"}},p=[],s={toc:p};function c(A){var e=A.components,l=(0,a.Z)(A,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Principle")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Classes should be ",(0,r.kt)("strong",{parentName:"p"},"open")," for ",(0,r.kt)("em",{parentName:"p"},"extension")," but ",(0,r.kt)("strong",{parentName:"p"},"closed")," for ",(0,r.kt)("em",{parentName:"p"},"modification"),"."))),(0,r.kt)("p",null,"What does that mean?! It essentially means ",(0,r.kt)("strong",{parentName:"p"},"design your application in a way to keep existing code from breaking when you implement new features."),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open to extension")," means you can add new features. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Closed to modification")," means the existing code (before adding a new feature) does not have to be modified when you added the new features. ")),(0,r.kt)("p",null,"In other words, ",(0,r.kt)("strong",{parentName:"p"},"new functionality does not require a rewrite of existing code.")," If you aren't modifying the existing code, you know you aren't breaking any of it.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Let's be real for a moment: of course you will be modifying your code when you add new feature to your software. The principle says, design the code in a way that any future addition will require small modification of the existing code (so the risk of breaking existing features is minimized). "),(0,r.kt)("p",null,"Okay! how? Well, one possibility is that all (the bulk of) the new functionality is contained in the newly added class(es). Here is a simple example: suppose you are building an application that involves online shopping with the following partial UML diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8870).Z})),(0,r.kt)("p",null,"Moreover, assume the methods in ",(0,r.kt)("inlineCode",{parentName:"p"},"Shipping")," are implemented for ",(0,r.kt)("em",{parentName:"p"},"ground shipping"),". Now your business expands to overseas and you want to add a new method of shipping (e.g. Air Shipping). How would you go about updating the software? "),(0,r.kt)("p",null,"Well, one approach would involve updating the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Shipping")," class to accommodate the new shipping method. For instance, a ",(0,r.kt)("inlineCode",{parentName:"p"},"getShippingCost()")," cost method would be updated as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public double getShippingCost(Order order, String shipping) {\n    if ("ground".equals(shipping)) {\n        // calculate the total cost for Ground shipping\n    } else if ("air".equals(shipping)) {\n        // calculate the total cost for Air shipping\n    }\n}\n')),(0,r.kt)("p",null,"This makes for bloated methods, increased complexity and higher risk to break the current functionality of ",(0,r.kt)("inlineCode",{parentName:"p"},"Shipping")," class. The Open/Closed principle suggests to keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shipping")," class closed to modification but open to extension. A design that adheres to this principle could use inheritance:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3133).Z})),(0,r.kt)("p",null,"In the above design, the ",(0,r.kt)("inlineCode",{parentName:"p"},"AirShipping")," would ",(0,r.kt)("em",{parentName:"p"},"override")," the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"getShippingCost")," accordingly. Since you are not changing anything in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shipping"),' class, you will not be breaking any of the features before the "Air shipping" was introduced. '),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Aside")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A yet better design would look like this:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:t(274).Z})))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"As with the ",(0,r.kt)("a",{parentName:"li",href:"srp"},"Single Responsibility Principle"),", this principle is applied to all software entities (classes, modules, functions, etc.)",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0},8870:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAABOCAYAAAC9ghXMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAQgdEVYdG14ZmlsZQAlM0NteGZpbGUlMjBob3N0JTNEJTIyYXBwLmRpYWdyYW1zLm5ldCUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMC0wMy0yM1QwMCUzQTEzJTNBMzUuOTg2WiUyMiUyMGFnZW50JTNEJTIyTW96aWxsYSUyRjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwQ2hyb21lJTJGODAuMC4zOTg3LjE0OSUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMHZlcnNpb24lM0QlMjIxMi44LjglMjIlMjBldGFnJTNEJTIyMjdGUmV2UXNFVktnV1lpNkdnRlUlMjIlMjB0eXBlJTNEJTIyZ29vZ2xlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyRVhqT0p5Qi03bmtYV2l3amdRWVQlMjIlM0V4VlJOYjRNd0RQMDFYQ2NnMFBhNmZtMlhhWk02YWQweEloNUVBb0pDMnNKJTJCJTJGVUxqUUNpdDFzdTBFJTJGR0xuJTJCMW5PM2hrVlRSUGtsYlppMkNRZTZIUEdvJTJCc3ZUQU1vbkNtUHgzU0dtUWV4UVpJSldmb05BQTclMkZnMEklMkJvZ2VPSU42NUtpRXlCV3Z4bUFpeWhJU05jS29sT0kwZHZzUyUyQlRoclJWT1lBTHVFNWxQMGd6T1ZHWFFSJTJCd1AlMkJERHpOYk9iQXg1dUNXbWNFNm93eWNYSWdzdkhJU2dxaHpLbG9WcEIzemJOOU1ienRqZHUlMkJNQW1sdW9jUUdzS1I1Z2ZVOWlvWlNDeE90Vlp4cG9wY253S1BMSkVCVWtGek0ydlFhOUZMQUtJQUpWdnRZZ2x6bEklMkZ6anlLQ3dHbG9aMkNublRtdHRDMm1PTUcwanoySTFBZlVlVjB6bVdqZVpieXFlSm4lMkJzZXpJRCUyRjlSZGpTUlBaRUxKWHZzbm9lMkdLZUZLTmw3eGtzdFhsOXNlUmQ1N1JzTDM2UU9TcFpPazNRalpMdDNqYyUyQk84eEJiYzkzME1UcXJ0VmJEMWQ0NU95eHREYVRPc0p4YVVhbHN1YUtDMG1KT3BXY2JhdzJHS1FLN2VOJTJCMU9NZ0VSdXVobVNtbzBTdTVZOUx1SUdjNE5BazVWZnc0em5odGtoanVUWENkcGQlMkJhZnZoMmElMkJMRnhUYVk2cEhtUHZhTFNGSHdXeVFqZWhMcHZGcTl5bXZicHMzaHAyWGNoMTglMkYyZndBJTNDJTJGZGlhZ3JhbSUzRSUzQyUyRm14ZmlsZSUzRWA0FOYAAA8eSURBVHhe7d0JsFZjHMfx52aYsYYay4gSyr5F1mQdrpQ9jMIUskWGsYzlXmTJLlGWCBnZSTQkjL1ELiKyRSmiBS2ojvP73/Pczn3ve2/vXeLe83w/M6dz3nOee96l8z7n/6xvUSxyQCNTUlJiC5AlzZo1S7aAxkN5bVG8jkpLS8v3AI2ArkctBAPImrjwZdc20Fj4/LYiGCDjRWPhM0yuSWQN1zYaG39NUmcFAEDgCAYAAAgcwQAAAIEjGAAAIHAEAwAABI5gAACAwBEMAAAQOIIBAAACRzAAAEDgCAYAAAgcwQAAAIEjGAAAIHAEAwAABI5gAACAwBEMAAAQOIIBAAACRzAAAEDgCAYAAAgcwQAAAIEjGAAAIHAEAwAABI5gAACAwBEMAAAQOIIBZN6DDz7ohg8fnjwCAOQiGEBmvfvuu+6ggw5yvXr1cj179nTFxcVu/PjxyVEAgEcwgMz59ddf3dlnn+322msvN2nSJHfvvfe6u+++23344Ydut912c/369XPz5s1LUgM1+/jjj5MtILsIBpApAwcOdFtssYXd/C+44AI3ZcoUd9ppp7kzzzzTts877zx3xx13WJrBgwcnfwXkN3fuXLfffvu5TTfd1D300EPJXiB7CAaQCS+//LLbfffd7WbfqVMn99FHH7mbb77Zrb766kkK55o3b+5uv/12ayro0KGDO+uss9zee+/txo4dm6QAKlt77bXds88+61q3bu1OOeUUggJkFsFAbMGCBW7cuHHulVdecVOnTnVRFCVH6mfx4sV27oY6H6r67rvv3EknneQOOeQQN2fOHPfYY4+5kSNHup122ilJUdWuu+7qRo8e7R555BE3Y8YMd+CBB7revXu7adOmJSmAZfbdd1/3xhtvuNdff52gIMfPP/9sfXNeffVV9+WXX1qel+vvv/+2fBCNW9DBQFlZmevYsaOVHlWqPPjgg12bNm2sBKlSY30v4P79+9u5v/jii2QPClVIAHXttddadb9u6qWlpZYZHX/88cnR5evRo4c1HVx++eXugQcecJtvvrm78cYbk6NAZQQFyyhw7t69u9tggw2sb4466m655Zb2eQwdOjRJVU6dd5UPzpo1K9mT33HHHeeKiorcTz/9lOxpWCv6/E1dsMGAqv523HFH98EHH1i18lVXXWXtzOpctuqqq1p78h577GElz/qiZqBhPfXUU27rrbe2m7i+4Lqhl5SUJEdrp1mzZu6aa66xgO3www93F198sdthhx3cc889l6QAKgs9KPjzzz/dAQcc4J588kl37LHHWl55zz33WN6pIOHUU091d955Z5K6cOuuu65bb7317Du5Iqzo82dBFJeq4vtVOOIbvO7OtsSlymTvMrNnz466du1qx4uLi5O9tRffoOwcn332WbIHhdBnps8uV1lZWXTEEUfY8Q4dOkSjRo1KjjScOAiI4mDAniPO6KLPP/88OQLkFwcFUefOne2aadOmTTRs2LDkSFVK09Tz2xEjRtj7UB6Za9y4cXYsvukme6Koe/futu+XX35J9qAx8ddkkCHSgAEDbH3GGWdYVXGuddZZx9133322rbZlPzZd0W63bt2sX8Fll13mNt54Yzd9+nQ7ptKpeqyrVHnooYe6u+66yy1ZssSOpanpQVXa6ri22WabuRNPPNGeI62m5wnRX3/95S655BL7bNU2eeutt7oJEya4Ll26JCkajmoHNJRM18gLL7xQUQOxdOnSJAVQWWg1BWqOk2233dbWaWp2VbNA+/bt3e+//57sLffNN9+4c889145ts802rm/fvpWaYpXvKT9U3x+54oorLE/95JNPbK18UOe/5ZZbKuWthabLPb+aBOPChYuDFBuKrNekRdt//PGHpfGUF6vGQ3nQMccc4x5++GHLH04//XT322+/JamavuBqBhS16n1Pnjw52ZNffGFZuiFDhtjjXr162eN27drZWssPP/wQffrpp9Gaa65ZcWz77bevOK7F1wzMnTu30rFOnTpVbMc3OEsj1T1PKPR+fc3A0KFDo1atWtm+Pn36RDNnzrT9/4Vp06ZFvXv3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"},3133:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAADyCAYAAADQisbCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAASSdEVYdG14ZmlsZQAlM0NteGZpbGUlMjBob3N0JTNEJTIyYXBwLmRpYWdyYW1zLm5ldCUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMC0wMy0yM1QwMCUzQTI0JTNBNTIuNjU0WiUyMiUyMGFnZW50JTNEJTIyTW96aWxsYSUyRjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwQ2hyb21lJTJGODAuMC4zOTg3LjE0OSUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMHZlcnNpb24lM0QlMjIxMi44LjglMjIlMjBldGFnJTNEJTIyb1JBZmFsbWwwMXBrT0hRSGRkdVUlMjIlMjB0eXBlJTNEJTIyZ29vZ2xlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyUlJWU2Q1SU1IVFluaGd2NXBKWDIlMjIlM0V4VlpSYjVzd0VQNDF2RTRZRzVyWE5rbTdsMm1UTW1uTm80ZHZZQlV3TWs0RCUyQiUyRlV6dFEwbVR0YW8wcGFuJTJCRDdmbmUlMkI3dTA4a3d1dTZmNUswTGI4SUJsV1V4S3lQOENaS0VrU1NUUCUyQk15R0NRTzVJYW9KQ2NXYWNaMlBIZllNSFlvZ2ZPb0ZzNEtpRXF4ZHNsbUl1bWdWd3RNQ3FsT0M3ZGZvbHElMkJXcExDd2lBWFU2ckVQM0JtU29OdWtyakdmOE12Q2pkeXlpMk56VjF6aGJvU3NyRTBZUHdOc0pyS1lReXA3cGZRelUyeiUyRlhGeEQxZXVKMEtrOUNvYXdJU0UlMkZCS3E0UGw5bFV5a0xZNE5UakdwYW9yZlVJUmZyQVJJQlgwRjE5RkV4ZTlCQ0JxVUhMUUxpN2d6dEszOHljRVclMkJBNHR4TzVhWmRlSzEyTHFaMWdNZVdlU2VxRDVYbWVNdzQ0NzByZXRyd3AlMkZqRnRFaWMzcEUwQzJnRmRhTmo5S0E5dE1VNXIwYkR2Slc4MGVYM3h5TWZNbTloWVZwTTZLWDd3bXFRYklZZG4zOWlQTVo5U1oyNzZLY2RvRGM3cXVYcjJ6bDZVdHVhZzBYQXhuYUpTdVhKRkM0M0R2RXJmYkZzcm1xY0k3RVRmblRqSUhCYnJvU01MVUF1VlhERnBmNUNaSFpxRWlpciUyQnVuengzQ1J0dW0lMkJDNjFlbXJabUc3N1ltWFoxc2c2bmVodmxpUDhsRTBIdVpET2tnMDl0cVRTeXYyclkwMkxaN0xtJTJCbHM1VDhSNTFsQWZOdHI3Umt1ciUyRko3V2NsOHBlRnRGQVc2TTRYbWhQTUpKSzlyNUd6Z3BuRTZlbHg3MnYxZ2ppdjBFd2FhZ2JmVWpOa2RiTHBHZnFnWmpMeVhxWVBhMGFiODRmZXVNOSUyRmwlMkZEMkR3JTNEJTNEJTNDJTJGZGlhZ3JhbSUzRSUzQyUyRm14ZmlsZSUzRQWuXuAAACAVSURBVHhe7d0JvJVzHsfx/7WNkK1EhMooCZkaWVOWJqEUyjSEV2UvwgxjyL1tRNZqlCVLWVIZSzW9yDaMtUiNlDXRRrRqkerM8/3d53+de7r3du5Szj3/z/v1ejzb/z7n3Jz7PN/n//z//5PjnEtEE5BRcnNzXV5eXrwGZIecHJ1ygcyic62FAZ14gUzRu3dvwgCyksIA51tkEp1vC8KAFviAIlP4EyZhANlGn23Ot8gk/jO5VbwOAAACRRgAACBwhAEAAAJHGAAAIHCEAQAAAkcYAAAgcIQBAAACRxgAACBwhAEAAAJHGAAAIHCEAQAAAkcYAAAgcIQBAAACRxgAACBwhAEAAAJHGAAAIHCEAQAAAkcYAAAgcIQBAAACRxgAACBwhAEAAAJHGAAAIHCEAQAAAkcYQNZ75JFH3OOPPx6vAQBSEQaQtd5++23XsmVL16VLF9e5c2fXunVr9/7778d7AQAeYQBZ54cffnBXXHGFO/bYY92MGTPcAw884O677z73wQcfuCOPPNL17NnTLVu2LC4NlOyjjz6Kl4DsRRhAVhk0aJA78MAD7eJ/7bXXus8//9xddNFF7rLLLrPlq666yt17771WZujQofFPAUVbunSpO+GEE1ydOnXcY489Fm8Fsg9hAFnhxRdfdEcddZRd7Js1a+Y+/PBDd8cdd7gdd9wxLuHcLrvs4u655x57VNCkSRN3+eWXu+OOO8698sorcQmgsF133dU9++yzbv/993cXXnghoQBZizAQWbVqlXvvvffcSy+95ObMmeMSiUS8p3zWrVtnx66o42Fjs2fPdueff7475ZRT3JIlS9xTTz3lXnjhBfeHP/whLrGxI444wk2cONGNHDnSLViwwJ188smua9eubu7cuXEJ4FctWrRwr7/+unvttdcIBSm+++47a5vz8ssvu08//dTOeanWrl1r50FktqDDwLRp01zTpk3t7lF3la1atXK1a9e2O0jdNZb3A9yvXz879syZM+MtqEj9+/e36n5d1PPy8uxk9Oc//zneu2nnnXeePTq46aab3MMPP+x+//vfu9tvvz3eCxRGKPiVgnPHjh3dXnvtZW1z1FD3oIMOsn+P4cOHx6XyqfGuzoOLFi2KtxTtnHPOcTk5OW7+/Pnxloq1uY9f2QUbBlT1d/jhh7vJkydbtXLv3r3tObMal1WpUsWeJx999NF251le1AxUrLFjx7qDDz7YLuL6A9cFPTc3N95bOltttZXr27evBbYzzjjDXX/99a5Ro0buueeei0sAhYUeCn766Sd30kknuTFjxrgOHTrYufL++++3c6dCQrdu3dzgwYPj0unbfffdXY0aNexvcnPY3MfPBonoriq6XoUjusDr6mxTdFcZb/3V4sWLE23atLH9rVu3jreWXnSBsmN8/PHH8RakQ/9m+rdLNW3atES7du1sf5MmTRLjx4+P91ScKAQkojBgrxGd6BKffPJJvAcoWhQKEs2bN7fPTO3atROPPvpovGdjKlPZz7ejRo2y30PnyFTvvfee7YsuuvGWRKJjx4627fvvv4+3IJP4z2SQEem2226z+aWXXmpVxal222039+CDD9qyni37vulKu23btrV2BTfeeKPbd9993bx582yf7k7VYl13laeeeqr75z//6davX2/7kunRg6q01XDtgAMOcOeee669RrKSXidEP//8s/v73/9u/7Z6NnnXXXe5KVOmuNNOOy0uUXFUO6CuZPqMjBs3rqAGYsOGDXEJoLDQagr0OE4OOeQQmyfTY1c9Fqhfv75bvnx5vDXfl19+6a688krb17BhQ9ejR49Cj2J13tP5UG1/pFevXnZOnT59us11HtTx77zzzkLn1nTLpR5fjwSjmwsXhRTriqz3pEnLK1assDKezsWq8dA56Oyzz3YjRoyw88PFF1/sfvzxx7hU5RdczYBSq37vWbNmxVuKFn2wrNywYcNsvUuXLrZer149m2v65ptvEv/73/8SVatWLdh32GGHFezX5GsGli5dWmhfs2bNCpajC5yVkeJeJxT6fX3NwPDhwxO1atWybZdcckli4cKFtn1LmDt3bqJr16722tHJPRGdAOI9QPFKqinQtsp+vh09erT9HpqiC2Ji9erV8Z6i+ZoBP0UBu2BZtW+eL6e/O2ncuLGt69yqKQpdBT8XBS4rI+mWSz2+X/fnF/2cP49HNwVWRlQ76Lfr2pF8XtakmubKTL+DPpM58UKZn7lWNkqivruZ7ji32247Wy6K+qPrOZieIw8YMMBanKuhWfTBsG5rnTp1smXdxSsl6o716quvtp8dNWqU7ZcoDFji1F3+LbfcYjUSt956q3VbUuJUilU6VctcPdMq7nVCoUY+GjVQ/zbq9qc7rz59+ljbjt/Cq6++an8f//3vf90f//hH66mwzz77xHuBon399ddWY6C5GibrPKtag8p+vtU5VG0G3n333XiLs8bX+vs8/vjjrdZTf8Oe2vVEAcJ68Wiuf4voAmuNtnUHrrt3Pcf35dTuQH9f6v6rLsJqoKhal2233dbOkdENlZ0vVWOrY6ZbLvX4fl3lxo8fbzUKKq+GxHpf6hmx9dZbu9NPP91NmDDBahZUa6DfTednnadF7cr0O1VW+n30mZSgagZ0h63fOfmZVnF0V6qyPXr0sHV/xx5d0G1d5s2bZ9uUdjds2BBvzecTqmoGtE/LmvQzyfr162fbow+YrRf1OiHR7x6FJ5sfeuihiX/961/xnt9OdNJINGjQwN4TE1NppurVq9t8//33t3k2nG+ji2ViyJAhhe7C/aQ75ygExSV/vQOfOHFivCXfaaedZtu/+uorWy+uZiAKHbbuDR061Lbfdttttp5uueJqBiZNmmTrnmoFtF3va9GiRbas83uqKGDYvmypGQiuzYC6wogSYFF9YpN9++23Ntez/WRt2rSJl5yLPjA2191rchoWDX3rqT+7p5oB1Sb4SelUkstI8uuERs/l1KJfdwxnnnmmtVrW3cSWpueQeq4YnTjcDjvsYHcI+vthYipp0h2qzgmimkh9WZZqCLLFTjvtZHfJ+j1Xrlzp3njjDRvxUzWYn332mZ27Uts5qRtwMn8u3lQXbnVZTBbdINg8tadXuuVSpb6vmjVr2lzvS7WTotqHVKrZyBb6zAYXBlSFVLduXVve1MXFj0zny3v6Q/AWL15s86IamKmLoufLyZo1awpNe+65p/XT9X8cXvLrhCi5MZ+q8fSoRY35imqYWdH0/8V3M9TnwDdaVONQoDh6LKDhizXpIuRDgB4PZAt9A+gTTzwRrzkLyXpEoEea+l4QnS9Vza5/i2Q777xzvFQ6GvclmT8v6m80WbrlUun9F0U3dxqOWqpVq2bzZHrMnE2C7E2g0erk7rvvtnlRpk6d6t58801LuvrDLo6eM4meK6dS61lvv/32s7mO9+9//9tGO/ST+uvqvbRv397KoLDrrrvOffHFF/aMTgMN6ZmeWvNuLnoeqLsFtTa+5JJL7LV9WxCgKCGEAE/jcqgXlq85TaY2WOpNIKp9rQgLFy6Ml/L5O/3Um7R0y6VLd8u1atWy5aLO77pGZJMgw8ANN9xg80cffdQNGTLElpPpj1jV1KKGPiXdoderV6+gaiy5GlAfTI2M5ykVq6wSs4Y+TqbHBuqmw7ejFU8Nfh566CG7S9cf6AUXXGChLvXfsjzeeustaxil0KHAoarPYcOGWc0NUJSQQoDnH3/qez5Sa0RXr15t3X9F57uK8Mwzz8RL+RdoDQ4nzZs3t7mXbrnS8DdxelyYPHKhwoEGrMsmQYYBXUx0khf1dVXrV1UJq5pLf8RqXaq2ALrg6LlYSfQ8UP1cRRcSBQyNj1/UB1BVzaJn4DppqAeCxtVXzwO1hP2tWstXJieeeKLV2GjUM7Ug9l9O5KvzykJVm/5Li2bNmmVjTOhZKP8/UJwQQ4Cn0VpF5zMFctVq6hymnlIa1VWhunXr1tbDoCJ0797d3XzzzfYaZ511lps0aZKdL4855pi4RL50y5WGHvVqvALR+WDgwIF2zVA7omwUVG+CZO+8885GfUY1RXf6iegDHpf6VXTHaPvnzJkTb8n3yy+/JKIwUegYauEa/dHYcvIodtFJo1A5TRrlMLmHQXGvEwr97n6cgZIsW7Ys0bNnTytfrVo1a91cWtHdTWKXXXaxY/z1r39NrFq1Kt4DbCwKiQUt6NU7QH/PpaGfy4bz7ZQpUxLRhdZ+n9RJ5y+NqeL5VvtqmZ/Mn+f8+dGX8+dC30vAj/fip+gGoKBHgKRbLvX4xb0vfxz/vtatW5cYNGhQwfg0uj5EoS/RuXNnW49uJqxcZaXfQefbaB5uGPD0YYiSvg1vW57BfRYsWGDdVD7//PONuhkmW7lypXWDUVnfrQa/8h/OdL3//vsWqPRz0V3ARl2FiqJuTk2bNrWfadu2bWLq1KnxHmBj5Q0BXjadb3WO0/nrlVdese6/OqctWbIk3lt+/iIvChf6fzBjxoyNzq3plisrDaq0Zs0aW9ZQ9evXr7dldY1Mp4t6ptO/HWEAGcl/OEvr8ccfT9StW9d+Xsm9qGCnk9d5551nZerXr2/jrAPF0cXNjyZYnhDgcb5NX/JFviTplisr1QTo+Mk1AKoZ0bbkkQorK/0eOt8G2WYA2Unjjqvlv9pwqO2GGgFq5EhPXymtbeoapeeeah+gUciA4miUUI0uF1KbABSmUWilevXqdo7RmCNqK6KG4xpVNlsQBpBV1DdYQxfrK4nVyEc9R9QgVF84pJCgoZ0VGNTQCEiHgiUhYMtTw790Bl5Lt1xZRXfN1jNMXSbVU2LatGkWCNSjQMMcZwvCALKSRiN7+umn3fPPP2/ji6vXh0YPVK1A6oiSADKPvgvghRdeiNeKl265stL5Q+MqaGwTfeeBvrVR3Zz1PSXZhDCArKbhnjU4iPoEM3ogABSNMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAAQuJ5oS+YtA5sjNzXV5eXnxGpAdcnJ0ygUyi863OdF/CAPISIQBZJtNfaYVFhKJij8lV9Rx/XFS5+VV2uMtWrTIvfvuu65t27bxFpSH/dtH/yEMAAAqjW7durnhw4e7Tz75xDVo0CDeivKgzQAAoNJQAFAQUC3CXXfdFW9FeREGAACVhgKAgsA111zjHnroITdz5sx4D8qDMAAAqBR8rYCCgCZqByoOYQAAUCkk1wrsvffe1A5UIMIAACDjJdcKKAgItQMVhzAAAMh4ybUCHrUDFYcwAADIaEXVCnjUDlQMwgAAIKMVVSvgUTtQMQgDAICMVVKtgEftQPkRBgAAGaukWgGP2oHyIwwAADJSOrUCHrUD5UMYAABkpHRqBTxqB8qHMAAAyDilqRXwqB0oO8IAACDjlKZWwKN2oOwIAwCAjFKWWgGP2oGyIQwAADJKWWoFPGoHyoYwAADIGOWpFfCoHSg9wgAAIGOUp1bAo3ag9AgDAICMUBG1Ah61A6VDGAAAZARfK3DttdfGW8qO2oHSIQwAAH5zybUCNWvWjLeWD7UD6SMMAAB+cxVZK+BRO5A+wgAA4DflawUUBCqqVsBTGBBqB0pGGAAA/KZ8rYC/cFck1Q4oZFA7ULKcRCReBgBgi1KtQMOGDV2jRo3iLZu2fv16m2+99dY2T8e0adNct27d3IMPPhhvQTLCAADgN6ML9OLFi+O19OgOf9asWa59+/bxlvT179/fNWjQIF6DRxgAAFQqeXl5rnfv3o7LV8WhzQAAAIEjDAAAEDjCAAAAgSMMAAAQOMIAAACBIwwAABA4uhYCABA4agYAAAgcNQMAgHL75Zdf4qWibbXVVqUaPnhLWr16tVu3bp2rWrVqvCU81AwAAMpF3y+w3XbblTh17949Lr1pH3zwgZs9e3a8tvn16NHD7bPPPvFamKgZAACUi/+yocMOO8wdf/zx8dbCjjnmGNepU6d4rWT6BsPOnTu7ESNGxFs2L30/wujRo93y5cvjLeEhDAAAysWHgeuvv94NGDAg3lp2mRIG9Ohgm222ideyG48JAABbxFdffeWaNm3q/vSnP7lVq1bFW527/PLL3dFHH+1eeOEF16RJE9v23HPP2fLPP/9s61OnTnWnnHKK23nnnd2+++7rLr74YvfDDz/YPtFXE6u8yun4ChQHHHCA69u3b1wi3/fff+/OP/98O4YCzD/+8Q+3du3aeG++l156ycpsu+229npnnnmmmz9/frw3OxEGAABbRN26dV2LFi3cpEmT7FsHZezYsW7o0KH2zP64446zC77UrFnTnXrqqdbo8O2333aNGzd2L774ojv33HNdu3bt7OJ/5JFHFgSCBQsWuA8//NDKrV+/3vXq1cu233zzze7ZZ5+1ZQUQhY6RI0fa+9BjjVtvvdXWvXfffde1atXKff75527gwIGudevW9vNt2rSJS2QpPSYAAKCsZsyYocfNJU7RHbmVjS7IiXr16tm2cePGJapWrZqoUaNGYtGiRbZftK9z587xWiJxxBFH2LbZs2fHWxKJUaNG2bbBgwfbehQubL179+6JDRs22Lbp06fbtuju39aHDBli67fccouty0cffWTb9D6kb9++th4FFluXYcOG2XueN29evCX7UDMAAKgQuiu/7rrripyqVKliZTR/6qmnbFl32ytWrHCPPfaYq169um1LpTv/yZMn27F/+ukn9/HHH9tUp04d2//666/b3NPjAz0ikAYNGthcjydk4sSJNlfNgteoUSO7+/f2228/m19yySXuvvvuczNnzrTlTz/91O299962LyvFoQAAgDLxNQPXX399vGXT2rdvbz+ju/5U2u5rBt5//31bL25q0aKFlfM1A6l379rWsWNHW9bdva8BSNa1a9eC7evXr0/06dPHaiv8a9SqVSsxaNAg25+tqBkAAGxRei7vn+Prrn/ChAm2XBQ14BPVInz55ZcbTU8++aTt93ytQFF23313q4lYtmxZvCXfO++8Ey/lD46k9gZRqHBvvfWWtW1QA8Mrr7zSGhZmK8IAAGCLWblypTUCFDUklC5duhTqGZAs+XFA7dq1rRGipg0bNrjmzZu7hx9+2PanQw0GRQ0SPTU8VNdITz0b1CtBDRc1NoIaID700EO277PPPrN5NiIMAAAqhJ7JX3311UVOev4uN9xwgz3Dv/POO93JJ5/shg0bZt39dBH2atSo4V577TXraqh+/n369LE7+pYtW9q2e++9151wwglu7ty57owzzoh/atN69uxpc7UrGD9+vIWCCy64wLZ5aj+gXgm5ubnWTkC1GIMHD7Z9areQteLHBQAAlEl0Z13wfL24qVWrVono7t6Wo4tq4pdffrGf1TN6PffX9jFjxti2/v37F/zcypUrE2vWrElEgaJgmyY90x87dqyVF99mYOHChfGWfNrm2wyIfib5OGqzcNFFFxW0GVi7dm2iTZs2hcpouvXWW21/tmIEQgBAxlFNgJ7VV6tWLd6S37NArfvVI0FV/vrOg7JQr4Tp06dbDYQGJiqqncEXX3zh5syZ47bffntXr149t8cee8R7shNhAACAwNFmAACAwBEGAAAIHGEAAFCpqJuh/24DVAzCAACgUlEYyMvLi9dQEQgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAAQuJxGJlwEAm1FOTk68BGSO3NxcwgAAbCkKA3l5efEa8NvT55EwAABbkA8DOvkCmUCfSX0eaTMAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAADY7L777jv39ttvu5dfftl9+umnbt26dfGeX61du9atWrUqXsOWRBgAABTQRXrPPfd0OTk5rlu3bvHWws455xzbP3/+/HhL8ebOnes6duzo9tprL3fssce6li1buoMOOsjVqVPHDR8+PC6Vr3Pnzm7HHXd0ixYtircUrTSvXxab+/iZiDAAACjw6quvuu+//96WdbEu6k599913dzVq1HBbbVXyJeSnn35yJ510khszZozr0KGDGzp0qLv//vtdz549LSQobAwePDgunb50X7+sNvfxMxFhAABQ4LHHHrN5vXr1bD5u3DibJ9NFXdX+utsvyYQJE9xnn33m2rRp40aPHu0uvfRSd/HFF7u7777bvffee1amX79+Ni+NdF+/rDb38TMRYQAAYBYvXuyefPJJd/DBBxfcsftwkEz7zj33XLdkyZKC9bZt27o5c+a4G2+80e27775u3rx51jZADjnkEJsna9q0qT0WqF+/vlu+fHm8Nd+XX37prrzyStvXsGFD16NHj0I1FKmv36tXL3fZZZe56dOn21yvr+Pfeeedbv369VZG0i2Xevzbb7/dtWvXzmpMrrjiCntPmrS8YsUKK+Pp30A1Ho0aNXJnn322GzFihAUqhaAff/wxLpWBEgCALUKn3Ly8vHgt8wwbNszeY3Tnnli7dm2iatWqtj5//vy4RL6OHTva9rlz59p6ly5dbL1evXo21/TNN98kRo8eXbAeXRATq1evtvLF8cf1UxRKCpY7dOgQl9r49Rs3bmzrer+aWrRoUfBzF154oZWRdMulHt+v16pVy+b6Of9vc8YZZ1gZ+eSTTwq216hRo9C/h6bZs2fHJTOH3ldubm6CmgEAgHnggQdsHl383LbbbuuiC6Stq4o/HQsWLLA2AbrT1133aaed5o466ijbp0cFVapUcaeccorr37+/e/PNN3UzavtSHXHEES66cLoZM2bYFF1grd3Bhg0b4hJFO+yww+zu+7XXXnMLFy605/6PPvqomzx5clwiX7rlUqktQRRy7Oe++OILe1/PP/98Qa3C3/72N6spUM2CjquakdRGkpmKMAAAsKrzDz/80C7ge++9t21Tq3p5+OGHbb4pN9xwg1WH6yIpO+ywg5s0aZIbMmSIi+6mbduLL77obrrpJnf88cdbr4L//Oc/tj1Znz59XO3atW1ZjyxUVlQFXxJV9yvEiHpE9O7d25Z18U6WbrlU+jmFHFGAOPHEE21ZAeGHH36wNhJ6v927d7feCNKlSxcLN5mOMAAAcI8//rjNdVev5/6axo8fb9sUFDRtiu7+U+200072bF0X2pUrV7o33njDXXvttRYYfONCtS9IduCBB8ZL+XxDvk2NQaBwkezQQw+1uWoZkqVbLlXq+6pZs6bN9b58UGnSpInNk/nakUxGGACAwGmwn2HDhtmyqu9vueUWmwYMGGDbRA0LN0UX/mQKGE888US8ll9T0KxZM3fHHXfYnXTdunWtWv3111+PS+Tbeeed46XS2WWXXeKlfP79rFmzxuZeuuVS6f0XRbUAS5cuteVq1arZPNnPP/8cL2UuwgAABG7ixIl2Uf7LX/5iLeaTpylTpliZRx55pMhRA0vSt29fd95557lvv/023vKr7bbbznoTiF6nIug5fTJ/p6/QkSzdculS24datWrZssZpSDV16tR4KXMRBgAgcLrQywUXXOD22GOPQpOqvRs3bmwX7NQ7+E058sgjbX7PPfds1Phv9erVNjSx+DENyuuZZ56Jl/Iv0Pfdd58tN2/e3OZeuuVKY7/99rO5Hqckj1yocLCphomZgDAAAAFTDwC1iNczfN8gLpVqDER95kvDN8y76667rBeBBhsaNWqUPYI4/PDD3VtvveVat27tWrVqZeXKSw33br75ZnuNs846yxovagjkY445Ji6RL91ypaGeEmpgKHoUMnDgQBsfQeMTVAaEAQAImL9L1kA522yzjS2n8he0kSNHFmrE51vM+3nq8L36/gE9ZtCFVhfca665xnXq1MkaJ6rxYNeuXd1TTz210ev646VKPX5qOQ0kpEcTeo1nn33WGu49/fTTGx0/3XKpxy9u3b+vq666yg0aNMiGYb7uuutswCaFDf84xPeyyEQ5ieI6egIAKpQuHnl5eS43NzfeEgZdZr7++mt7Nr9s2TLruqjRBXfddde4RPnoUYa6Rep1dHw9o1fXvwYNGhS6gKdbrqzUAFHH+d3vfmejF6qhooLC6aefbo8KNMRxptH71eeRmgEAwGalC45qCfQYon379taWoKKCQCpdgDWmgfr7l3SBT7dcaShYbL/99jag0W677WZB4IMPPrDxB44++ui4VGYiDAAAUAH0bYxSvXp1+24DjeR4wgkn2OMBPRrJZIQBAEClpoZ/RQ14lCrdcmWl6na1q1AbAfWUmDZtmgUC9SjI9FEIaTMAAFuIqqNDbDOAzEWbAQAAYAgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4AgDAAAEjjAAAEDgCAMAAASOMAAAQOAIAwAABI4wAABA4HISkXgZALAZ5eTkxEtA5sjNzSUMAMCWkpeXFy8VTWEhW0/Jm/rd/P7SlEPFSCQS7v97p8BmAUf/cQAAAABJRU5ErkJggg=="},274:function(A,e,t){e.Z=t.p+"assets/images/ocp03-8cdb38473cfdf4d55e33a67891871a30.png"}}]);