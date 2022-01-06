"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3899],{9613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(9496);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=a,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(v,i(i({ref:t},c),{},{components:o})):n.createElement(v,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4944:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>l,toc:()=>c,default:()=>u});var n=o(9518),a=o(7344),r=(o(9496),o(9613)),i=["components"],s={id:"motivation",title:"Motiva\xe7\xe3o"},d=void 0,l={unversionedId:"motivation",id:"version-6.x/motivation",title:"Motiva\xe7\xe3o",description:"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/pt/motivation",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"6.x",frontMatter:{id:"motivation",title:"Motiva\xe7\xe3o"},sidebar:"version-6.x/docs",next:{title:"Instala\xe7\xe3o",permalink:"/pt/installation"}},c=[{value:"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o",id:"economizando-espa\xe7o-em-disco-e-aumentando-a-velocidade-de-instala\xe7\xe3o",children:[],level:2},{value:"Cria\xe7\xe3o de um diret\xf3rio node_modules non-flat",id:"cria\xe7\xe3o-de-um-diret\xf3rio-node_modules-non-flat",children:[],level:2}],p={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"economizando-espa\xe7o-em-disco-e-aumentando-a-velocidade-de-instala\xe7\xe3o"},"Economizando espa\xe7o em disco e aumentando a velocidade de instala\xe7\xe3o"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,r.kt)("img",{src:o(5179).Z}))),(0,r.kt)("p",null,"When using npm or Yarn, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. With pnpm, the dependency will be stored in a content-addressable store, so:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Se voc\xea depende de diferentes vers\xf5es da depend\xeancia, apenas os arquivos que diferem s\xe3o adicionados \xe0 store. Por exemplo, se ele tiver 100 arquivos, e uma nova vers\xe3o tiver uma altera\xe7\xe3o em apenas um desses arquivos, o ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm update")," adicionar\xe1 apenas 1 novo arquivo \xe0 store, em vez de clonar toda a depend\xeancia por causa de uma simples mudan\xe7a."),(0,r.kt)("li",{parentName:"ol"},"Todos os arquivos s\xe3o salvos em um \xfanico lugar no disco. Quando os pacotes s\xe3o instalados, seus arquivos s\xe3o vinculados a partir desse \xfanico local, n\xe3o consumindo espa\xe7o adicional em disco. Isso permite que voc\xea compartilhe depend\xeancias da mesma vers\xe3o entre projetos.")),(0,r.kt)("p",null,"As a result, you save a lot of space on your disk proportional to the number of projects and dependencies, and you have a lot faster installations!"),(0,r.kt)("h2",{id:"cria\xe7\xe3o-de-um-diret\xf3rio-node_modules-non-flat"},"Cria\xe7\xe3o de um diret\xf3rio node_modules non-flat"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,r.kt)("img",{src:o(5851).Z}))),(0,r.kt)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project."),(0,r.kt)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory. If you'd like more details about the unique ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and why it works fine with the Node.js ecosystem, read:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat Node_modules n\xe3o \xe9 a \xfanica maneira")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pt/symlinked-node-modules-structure"},"Estrutura node_modules symlinked"))))}u.isMDXComponent=!0},5179:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},5851:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);