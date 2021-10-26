"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[421],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"db",title:"Database in the cloud",sidebar_label:"Database in the Cloud"},l=void 0,d={unversionedId:"readings/wk7/db",id:"readings/wk7/db",isDocsHomePage:!1,title:"Database in the cloud",description:"Heroku does not play well with SQLite",source:"@site/docs/readings/wk7/db.md",sourceDirName:"readings/wk7",slug:"/readings/wk7/db",permalink:"/cs421_f21/docs/readings/wk7/db",editUrl:"https://jhu-oose.github.io/cs421_f21/docs/readings/wk7/db.md",version:"current",frontMatter:{id:"db",title:"Database in the cloud",sidebar_label:"Database in the Cloud"}},p=[{value:"Heroku does not play well with SQLite",id:"heroku-does-not-play-well-with-sqlite",children:[]},{value:"PostgreSQL database",id:"postgresql-database",children:[]},{value:"PostgreSQL Add-on",id:"postgresql-add-on",children:[]},{value:"Deploy",id:"deploy",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"heroku-does-not-play-well-with-sqlite"},"Heroku does not play well with SQLite"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"SQLite is serverless, runs in memory, and backs up its data in small files on disk that are easily created and moved around. While easy to use, SQLite is not intended as a ",(0,r.kt)("em",{parentName:"p"},"production grade")," database. In particular, SQLite will not play well with Heroku because Heroku uses ",(0,r.kt)("em",{parentName:"p"},"an ephemeral filesystem"),"; you can write to it, and you can read from it, but the contents will be cleared periodically. If you were to use SQLite on Heroku, you would lose your entire database at least once every 24 hours!"))),(0,r.kt)("h2",{id:"postgresql-database"},"PostgreSQL database"),(0,r.kt)("p",null,"Heroku provides production grade ",(0,r.kt)("a",{parentName:"p",href:"https://www.heroku.com/postgres"},"PostgreSQL")," databases as a service. PostgreSQL database can be used by any language and framework, and it is very easy to connect your Java App to it;\nyou'll need to change your JDBC driver but probably not much else."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even though SQL is the standard language to use with SQL-based relational databases such as SQLite, PostgreSQL, MySQL etc., each of these DBMSs may have its own ",(0,r.kt)("em",{parentName:"p"},"dialect")," of SQL. This at times may affect how you would need to write/set up your SQL queries. "))),(0,r.kt)("p",null,"First, add the JDBC driver for PostgreSQL to your project dependencies: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'org.postgresql:postgresql:42.2.17'\n")),(0,r.kt)("p",null,"Also, add ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLite")," as follows (in case the app is run locally):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'org.xerial:sqlite-jdbc:3.32.3.2'\n")),(0,r.kt)("p",null,"Let's write a sample code to demonstrate the process of connecting to Heroku Postgres. Here is the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," method from last reading; I added a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"workWithDatabase()")," at the end:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    port(getHerokuAssignedPort());\n    get("/", (req, res) -> "Hi Heroku!");\n    workWithDatabase();\n}\n')),(0,r.kt)("p",null,"Here is the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"workWithDatabase()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static void workWithDatabase(){\n    try (Connection conn = getConnection()) {\n        String sql = "";\n\n        if ("SQLite".equalsIgnoreCase(conn.getMetaData().getDatabaseProductName())) { // running locally\n            sql = "CREATE TABLE IF NOT EXISTS employers (id INTEGER PRIMARY KEY, " +\n                    "name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));";\n        }\n        else {\n            sql = "CREATE TABLE IF NOT EXISTS employers (id serial PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE," +\n                    " sector VARCHAR(100), summary VARCHAR(10000));";\n        }\n\n        Statement st = conn.createStatement();\n        st.execute(sql);\n\n        sql = "INSERT INTO employers(name, sector, summary) VALUES (\'Boeing\', \'Aerospace\', \'\');";\n        st.execute(sql);\n\n    } catch (URISyntaxException | SQLException e) {\n        e.printStackTrace();\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"workWithDatabase")," is a very simple example of using JDBC to (1) establish a ",(0,r.kt)("em",{parentName:"p"},"Connection")," to a SQL database and (2) execute two SQL statements to create a table and insert a record into it. "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In the above code, note how we first decide which DBMS we are working with (SQLite or PostgreSQL) to set up our table creation accordingly; ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/datatype-numeric.html"},(0,r.kt)("inlineCode",{parentName:"a"},"serial"))," is Postgres way of creating an ",(0,r.kt)("em",{parentName:"p"},"autoincrement")," integer column."))),(0,r.kt)("p",null,"Note the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"getConnection()")," method; here is the implementation for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static Connection getConnection() throws URISyntaxException, SQLException {\n    String databaseUrl = System.getenv("DATABASE_URL");\n    if (databaseUrl == null) {\n        // Not on Heroku, so use SQLite\n        return DriverManager.getConnection("jdbc:sqlite:./JBApp.db");\n    }\n\n    URI dbUri = new URI(databaseUrl);\n\n    String username = dbUri.getUserInfo().split(":")[0];\n    String password = dbUri.getUserInfo().split(":")[1];\n    String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + \':\'\n            + dbUri.getPort() + dbUri.getPath() + "?sslmode=require";\n\n    return DriverManager.getConnection(dbUrl, username, password);\n}\n')),(0,r.kt)("p",null,"When we were working with SQLite, we used a URI like ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc:sqlite:./JBApp.db")," to instantiate a JDBC connection in your code. Heroku puts the URI of the PostgreSQL database in a ",(0,r.kt)("em",{parentName:"p"},"environment variable")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),". We can directly get the ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in code.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," for the Heroku Postgres follows the below convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"postgres://<username>:<password>@<host>:<port>/<dbname>\n")),(0,r.kt)("p",null,"However, the Postgres JDBC driver uses the following convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"jdbc:postgresql://<host>:<port>/<dbname>?user=<username>&password=<password>\n")),(0,r.kt)("p",null,"The code in ",(0,r.kt)("inlineCode",{parentName:"p"},"getConnection()")," converts the Heroku ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," into a JDBC URI."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The example above uses SQLite when you are not on Heroku and PostgreSQL database when you are on Heroku. This is only for demonstration purposes. ",(0,r.kt)("strong",{parentName:"p"},"It is important that you use the same database in production as in development.")," So, if you are going to deploy your app on Heroku, you will need to install the PostgreSQL database locally. You can download and learn about Postgres ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"here"),"."))),(0,r.kt)("h2",{id:"postgresql-add-on"},"PostgreSQL Add-on"),(0,r.kt)("p",null,"Before you deploy your app to Heroku, you need to create the Heroku Postgres add-on for your app using the Heroku CLI; open the terminal at the root directory of your Java project and type the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ heroku addons:create heroku-postgresql\n")),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Finally, run the following command to deploy your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./gradlew build deployHeroku\n")),(0,r.kt)("p",null,"To checkout the Postgres database provisioned for your app (and its content) you can use Heroku CLI. Learn more on this ",(0,r.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/heroku-postgresql#using-the-cli"},"here"),". Alternatively, install PostgreSQL locally and connect it to Heroku Postgres following the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/heroku-postgresql#local-setup"},"here"),". Finally, if you only want to have a GUI-based front-end to your Heroku's database, I would suggest ",(0,r.kt)("a",{parentName:"p",href:"http://sosedoff.github.io/pgweb/"},"pgweb"),"."))}u.isMDXComponent=!0}}]);