"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4235],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2917:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"sql",title:"Creating Content Using JDBC and SQL",sidebar_label:"Structured Query Language"},l=void 0,c={unversionedId:"readings/wk4/sql",id:"readings/wk4/sql",isDocsHomePage:!1,title:"Creating Content Using JDBC and SQL",description:'We will interact with relational databases using JDBC and the Structured Query Language (SQL). SQL is a domain specific language designed for updating and retrieving data in table-based databases. We will not cover it in class but you will likely need to use it. SQL is very easy and descriptive. In most cases, a simple Google search will be sufficient to find "how to" do something with SQL. My go-to place to lookup SQL syntax is https://www.w3schools.com/sql/.',source:"@site/docs/readings/wk4/sql.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/sql",permalink:"/cs421_f21/docs/readings/wk4/sql",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk4/sql.md",version:"current",frontMatter:{id:"sql",title:"Creating Content Using JDBC and SQL",sidebar_label:"Structured Query Language"},sidebar:"tutorialSidebar",previous:{title:"The Java Database Connectivity (JDBC) API",permalink:"/cs421_f21/docs/readings/wk4/jdbc"},next:{title:"Persist Objects in Databases",permalink:"/cs421_f21/docs/readings/wk4/persist_objects_in_db"}},u=[{value:"Create a table",id:"create-a-table",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'We will interact with relational databases using JDBC and the Structured Query Language (SQL). SQL is a domain specific language designed for updating and retrieving data in table-based databases. We will not cover it in class but you will likely need to use it. SQL is very easy and descriptive. In most cases, a simple Google search will be sufficient to find "how to" do something with SQL. My go-to place to lookup SQL syntax is ',(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/"},"https://www.w3schools.com/sql/"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are interested in learning more, ",(0,i.kt)("a",{parentName:"p",href:"http://sqlzoo.net/"},"SQLZoo")," is one of the best and popular website for learning SQL online. For general knowledge, checkout ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL on Wikipedia"),"."))),(0,i.kt)("p",null,"Recall, from previous section, that we have created a connection to our SQLite database through JDBC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final String URI = "jdbc:sqlite:./JBApps.db"; \nConnection conn = DriverManager.getConnection(URI);\n')),(0,i.kt)("h2",{id:"create-a-table"},"Create a table"),(0,i.kt)("p",null,"To create a table, we can execute the following SQL statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS Employers (id INTEGER PRIMARY KEY, \n       name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));\n")),(0,i.kt)("p",null,"Notice SQL reads like English! There is really no need to explain it; is there?!"),(0,i.kt)("p",null,"We can execute a SQL statement by (1) creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Statement")," object and (2) invoking its ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method, passing the SQL statement as an argument to it. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Statement st = conn.createStatement();\nString sql = "CREATE TABLE IF NOT EXISTS Employers (id INTEGER PRIMARY KEY, \n       name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));";\nst.execute(sql);\n')))}d.isMDXComponent=!0}}]);