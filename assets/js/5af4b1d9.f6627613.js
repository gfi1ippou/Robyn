(self.webpackChunkmmm_for_all=self.webpackChunkmmm_for_all||[]).push([[244],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,l=void 0!==i&&i,s=a.absolute,c=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(l)return t+r;var m=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+m:m}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8567:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=r(4996),l=["components"],s={id:"automated-hyperparameter-selection-optimization",title:"Automated hyperparameter selection and optimization"},c={unversionedId:"automated-hyperparameter-selection-optimization",id:"automated-hyperparameter-selection-optimization",isDocsHomePage:!1,title:"Automated hyperparameter selection and optimization",description:"MMMs are likely to contain high cardinality of parameters. ie. alphas and gammas for the diminishing returns (Hill) function, as well as, thetas for geometric ad stock transformation.",source:"@site/docs/automated-hyperparameter-selection-optimization.mdx",sourceDirName:".",slug:"/automated-hyperparameter-selection-optimization",permalink:"/Robyn/docs/automated-hyperparameter-selection-optimization",editUrl:"https://github.com/facebookexperimental/Robyn/docs/automated-hyperparameter-selection-optimization.mdx",version:"current",frontMatter:{id:"automated-hyperparameter-selection-optimization",title:"Automated hyperparameter selection and optimization"},sidebar:"someSidebar",previous:{title:"Facebook Prophet - Trend, Seasonality and Holiday Effects",permalink:"/Robyn/docs/facebook-prophet"},next:{title:"Calibration using experimental results",permalink:"/Robyn/docs/calibration"}},m=[],p={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MMMs are likely to ",(0,a.kt)("strong",{parentName:"p"},"contain high cardinality of parameters"),". ie. alphas and gammas for the diminishing returns (Hill) function, as well as, thetas for geometric ad stock transformation.\nIn addition, parameters dimensionality increases proportionally with the total number of marketing channels to be measured. Thus, it is extremely necessary to deal with a high dimensionality parameter space where, the greater the number of parameters, ",(0,a.kt)("strong",{parentName:"p"},"the greater the model complexity, its dimensionality and computational requirements.")),(0,a.kt)("p",null,"In order to achieve computational efficiency while optimizing overall model accuracy, we leverage ",(0,a.kt)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},(0,a.kt)("strong",{parentName:"a"},"Facebook\u2019s Nevergrad gradient-free optimization platform")),".  Nevergrad allows us to optimize the explore and exploit balance through the ",(0,a.kt)("strong",{parentName:"p"},"ask")," and ",(0,a.kt)("strong",{parentName:"p"},"tell")," commands, in order to perform a multi-objective optimization tha balances out the Normalized Root Mean Square Error (",(0,a.kt)("strong",{parentName:"p"},"NRMSE"),") and ",(0,a.kt)("strong",{parentName:"p"},"decomp.RSSD")," ratio (Relationship between spend share and channels coefficient decomposition share) providing a set of ",(0,a.kt)("strong",{parentName:"p"},"Pareto optimal model solutions")),(0,a.kt)("p",null,"Please find below an example of a common chart for the Pareto model solutions. Each dot in the chart represents an explored model solution, while the first three lines in the lower-left corner represent the best model solutions."),(0,a.kt)("img",{alt:"pareto chart",src:(0,i.Z)("/img/pareto1.png")}),(0,a.kt)("p",null,"The premise of an ",(0,a.kt)("strong",{parentName:"p"},"evolutionary algorithm")," is that of natural selection. In an EA you may have a set of iterations where some combinations of coefficients that will be explored by the model will survive and proliferate, while unfit models will die off and not contribute to the gene pool of further generations, much like in natural selection. In robyn, we recommend a minimum of 500 iterations where each of these will provide feedback to its upcoming generation, and therefore guide the model towards the optimal coefficient values for alphas, gammas and thetas. We also recommend a minimum of 40 trials which are a set of independent initiations of the model that will each of them have the number of iterations you set under \u2018set_iter\u2019 object. E.g. 500 iterations on set_iter x 40 trials = 20000 different iterations and possible model solutions."))}u.isMDXComponent=!0}}]);