"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7678],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4151:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var r=n(5900),i=n(4750),a=(n(9496),n(9613)),o=["components"],l={id:"limitations",title:"K\u0131s\u0131tlar/S\u0131n\u0131rlamalar"},s=void 0,p={unversionedId:"limitations",id:"version-5.x/limitations",isDocsHomePage:!1,title:"K\u0131s\u0131tlar/S\u0131n\u0131rlamalar",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm can install the same name@version multiple times and with different sets of dependencies. npm's lockfile is designed to reflect the flat node_modules layout, however, as pnpm cannot create a similar layout, it cannot respect npm's lockfile format. See pnpm import if you wish to convert a lockfile to pnpm's format, though.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/tr/5.x/limitations",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"limitations",title:"K\u0131s\u0131tlar/S\u0131n\u0131rlamalar"},sidebar:"version-5.x/docs",previous:{title:"Benchmark",permalink:"/tr/5.x/benchmark"},next:{title:"`node_modules`'da sembolik ba\u011f (symlink) yap\u0131s\u0131",permalink:"/tr/5.x/symlinked-node-modules-structure"}},c=[],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm can install the same ",(0,a.kt)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of dependencies. npm's lockfile is designed to reflect the flat ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," layout, however, as pnpm cannot create a similar layout, it cannot respect npm's lockfile format. See ",(0,a.kt)("a",{parentName:"li",href:"/tr/5.x/cli/import"},"pnpm import")," if you wish to convert a lockfile to pnpm's format, though."),(0,a.kt)("li",{parentName:"ol"},"pnpm can't publish npm packages with ",(0,a.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),". Currently, there are no plans to add support for ",(0,a.kt)("inlineCode",{parentName:"li"},"bundledDependencies")," either, as they do not work very consistently in publishing, even on npm. Instead, we recommend you use an actual package bundler, like webpack, rollup, or ESBuild."),(0,a.kt)("li",{parentName:"ol"},"Binstubs (files in ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not symlinks to JS files. The shell files are created to help pluggable CLI apps in finding their plugins in the unusual ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very rarely an issue and if you expect the file to be a JS file, reference the original file directly instead, as described in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),(0,a.kt)("li",{parentName:"ol"},"Node's ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag does not work when executed in a project that uses pnpm.")),(0,a.kt)("p",null,"Got an idea for workarounds for these issues? ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}u.isMDXComponent=!0}}]);