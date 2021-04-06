(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(89)),i=a(88),s={id:"quick-start",title:"Quick Start"},l={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Once you have loaded all scripts, we will focus on the \u2018fb_robyn.exec.R\u2019 one to quickly start testing the code with the included simulated data and understand how to use it. Below you will find the steps to follow:",source:"@site/docs/quick-start.md",slug:"/quick-start",permalink:"/Robyn/docs/quick-start",editUrl:"https://github.com/facebookexperimental/Robyn/docs/quick-start.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/Robyn/docs/"},next:{title:"Step-by-step guide",permalink:"/Robyn/docs/step-by-step-guide"}},c=[{value:"Load packages",id:"load-packages",children:[]},{value:"Create, install and use conda environment for Nevergrad",id:"create-install-and-use-conda-environment-for-nevergrad",children:[]},{value:"Load data",id:"load-data",children:[]},{value:"Set model input variables",id:"set-model-input-variables",children:[]},{value:"Set cores for parallel computing",id:"set-cores-for-parallel-computing",children:[]},{value:"Set model training size",id:"set-model-training-size",children:[]},{value:"Set model core features",id:"set-model-core-features",children:[]},{value:"Set hyperparameters bounds",id:"set-hyperparameters-bounds",children:[]},{value:"Define ground-truth calibration",id:"define-ground-truth-calibration",children:[]},{value:"Prepare the input data and run the models",id:"prepare-the-input-data-and-run-the-models",children:[]},{value:"Access plotted results",id:"access-plotted-results",children:[]}],d={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Once you have loaded all scripts, we will focus on the \u2018fb_robyn.exec.R\u2019 one to quickly start testing the code with the included simulated data and understand how to use it. Below you will find the steps to follow:")),Object(o.b)("h2",{id:"load-packages"},"Load packages"),Object(o.b)("p",null,"First, install and load all packages before running the code. You will utilize several open source packages to run it. You will find several packages related to working with data tables, loops, parallel computing and plotting results. However, the main package for the core regression process is ",Object(o.b)("a",{parentName:"p",href:"https://cran.r-project.org/web/packages/glmnet/index.html"},"\u2018glmnet\u2019")," from which the ridge regression will execute . Another important package is ",Object(o.b)("a",{parentName:"p",href:"https://rstudio.github.io/reticulate/"},"\u2018reticulate\u2019")," which provides a comprehensive set of tools for interoperability between Python and R and will be key to be able to work with ",Object(o.b)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad\u2019s")," algorithms."),Object(o.b)("h4",{id:"please-make-sure-to-install-all-libraries-before-running-the-scripts"},"Please make sure to install all libraries before running the scripts"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"library(glmnet)\nlibrary(reticulate)\n...\n...\n")),Object(o.b)("h2",{id:"create-install-and-use-conda-environment-for-nevergrad"},"Create, install and use conda environment for Nevergrad"),Object(o.b)("p",null,"Once you have installed and loaded all packages you will need to execute the following commands in order to create, install and use conda environments on reticulate. This is required to be able to use Nevergrad algorithms which use Python:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'conda_create("r-reticulate") #must run this line once only\nconda_install("r-reticulate", "nevergrad", pip=TRUE) #must install nevergrad in conda before running Robyn\nuse_condaenv("r-reticulate")\n')),Object(o.b)("h2",{id:"load-data"},"Load data"),Object(o.b)("p",null,"First you will load the included simulated data and create the outcome variable.\nAs in any MMM, this is a dataframe with a minimum set of columns ds and y, containing the date and numeric value respectively. You may also want to add explanatory variables to account for different marketing channels and their investment, impressions or any other metric to determine the size and impact of marketing campaigns.\nPlease have in mind that this automated file reading solution requires that you are using RStudio and that it will set your working directory as the source file location in Rstudio:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### load data & scripts\n\nscript_path <- str_sub(rstudioapi::getActiveDocumentContext()$path, start = 1, end = max(unlist(str_locate_all(rstudioapi::getActiveDocumentContext()$path, "/"))))\ndt_input <- fread(paste0(script_path,\'de_simulated_data.csv\')) # input time series should be daily, weekly or monthly\ndt_holidays <- fread(paste0(script_path,\'holidays.csv\')) # when using own holidays, please keep the header c("ds", "holiday", "country", "year")\n\nsource(paste(script_path, "fb_robyn.func.R", sep=""))\nsource(paste(script_path, "fb_robyn.optm.R", sep=""))\n')),Object(o.b)("h2",{id:"set-model-input-variables"},"Set model input variables"),Object(o.b)("p",null,"The next step is to define the variables you will be working with from the previously uploaded data. There are different types of variables, the main three ones are: dependent (set_depVarName), date (set_dateVarName) and media variable names (set_mediaVarName)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### set model input variables\nset_dateVarName <- c("DATE") # date format must be "2020-01-01"\nset_depVarName <- c("revenue") # there should be only one dependent variable\nset_mediaVarName <- c("tv_S"    ,"ooh_S",   "print_S"   ,"facebook_I"   ,"search_clicks_P")\n')),Object(o.b)("p",null,"The following set of variables are related to ",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/prophet/"},"Prophet"),', the open source procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality. "trend","season", "weekday", "holiday" are provided and case-sensitive. We recommend at least to keep trend and holidays if you decide to use it.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'set_prophet <- c("trend", "season", "holiday")\n')),Object(o.b)("p",null,"Moreover, you will have to define which base variables (set_baseVarName) typically competitors, price, promotion, temperature, unemployment rate, etc. you own to use. In the example simulated data we use competitor_sales_B as one of the baseline variables:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'set_baseVarName <- c("competitor_sales_B")\n')),Object(o.b)("p",null,"Finally, you will find sign controls for variables, these will control for constrained variables that theoretically have to be greater than zero (positive), lower than zero (negative), or can take just any coefficient values (default).You will see there are media and base variables sign control so you will have to define them on separate variables:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'set_mediaVarSign <- c("positive", "positive", "positive", "positive", "positive")\n\nset_prophetVarSign <- c("default","default", "default")\n\nset_baseVarSign <- c("negative")\n')),Object(o.b)("h2",{id:"set-cores-for-parallel-computing"},"Set cores for parallel computing"),Object(o.b)("p",null,"Next we will define the amount of cores to allocate for computing to the overall process. Please have in mind to always leave one or two cores out of the total number of cores your machine has to prevent your OS from crashing. Use detectCores() to find out the number of cores in your machine."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"## set cores for parallel computing\nregisterDoSEQ(); detectCores()\nset_cores <- 6 # Use detectCores() to find out cores\n")),Object(o.b)("h2",{id:"set-model-training-size"},"Set model training size"),Object(o.b)("p",null,"The next variable to set is the training size. If we set set_modTrainSize to 0.74 it means we will leave 74% of the data for training and 26% for validation. Use f.plotTrainSize to get a split estimation. Please balance between a higher Bhattacharyya coefficient and a sufficient training size. If you use the simulated data you may just leave it as it is (0.74)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"## set training size\nf.plotTrainSize(F)\nset_modTrainSize <- 0.74\n")),Object(o.b)("h2",{id:"set-model-core-features"},"Set model core features"),Object(o.b)("p",null,"The following step is crucial, this is where you will define if you will be using weibull or geometric adstock functions. Weibull is more flexible, yet has one more parameter and thus takes longer. (Please refer to the variables transformation section within this documentation for more information).\nYou will also need to define the number of iterations per trial for the algorithm to find optimal hyperparameter values. 500 is recommended, but just to test it on provided simulated data and reduce total computing time you may reduce this number."),Object(o.b)("p",null,'After that, you will find set_hyperOptimAlgo <- "DiscreteOnePlusOne" which is the selected algorithm for ',Object(o.b)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/index.html"},"Nevergrad"),", the gradient-free optimization library. There is no need to change the algorithm, however there are several to choose from if you wanted to.\nFinally, under \u2018set_trial\u2019 you will have to define the number of trials. 40 is recommended without calibration, 100 with calibration. If set_iter <- 500 and set_trial <- 40, this means that we will have 40 different initialization trials, each of them with 500 iterations."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### set model core features\nadstock <- "geometric" # geometric or weibull.\nset_iter <- 500\nset_hyperOptimAlgo <- "DiscreteOnePlusOne"\nset_trial <- 40\n')),Object(o.b)("h2",{id:"set-hyperparameters-bounds"},"Set hyperparameters bounds"),Object(o.b)("p",null,"This is an optional step, we recommend you leave it as it is at the beginning, as there is absolutely no need to change it. You may edit bounds in case you already found optimal ranges for parameters after obtaining first results. For geometric adstock, use theta, alpha and gamma. For weibull adstock, use shape, scale, alpha and gamma."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### set hyperparameters\n\nset_hyperBoundLocal <- list(\n  facebook_I_alphas = c(0.5, 3) # example bounds for alpha\n ,facebook_I_gammas = c(0.3, 1) # example bounds for gamma\n ,facebook_I_thetas = c(0, 0.3) # example bounds for theta\n #,facebook_I_shapes = c(0.0001, 2) # example bounds for shape\n #,facebook_I_scales = c(0, 0.1) # example bounds for scale\n\n  ,ooh_S_alphas = c(0.5, 3)\n  ,ooh_S_gammas = c(0.3, 1)\n  ,ooh_S_thetas = c(0.1, 0.4)\n #,ooh_S_shapes = c(0.0001, 2)\n #,ooh_S_scales = c(0, 0.1)\n\n  ,print_S_alphas = c(0.5, 3)\n  ,print_S_gammas = c(0.3, 1)\n ,print_S_thetas = c(0.1, 0.4)\n #,print_S_shapes = c(0.0001, 2)\n #,print_S_scales = c(0, 0.1)\n\n  ,tv_S_alphas = c(0.5, 3)\n  ,tv_S_gammas = c(0.3, 1)\n  ,tv_S_thetas = c(0.3, 0.8)\n #,tv_S_shapes = c(0.0001, 2)\n #,tv_S_scales= c(0, 0.1)\n\n  ,search_clicks_P_alphas = c(0.5, 3)  \n  ,search_clicks_P_gammas = c(0.3, 1)\n  ,search_clicks_P_thetas = c(0, 0.3)\n #,search_clicks_P_shapes = c(0.0001, 2)\n #,search_clicks_P_scales = c(0, 0.1)\n)\n\n")),Object(o.b)("h2",{id:"define-ground-truth-calibration"},"Define ground-truth calibration"),Object(o.b)("p",null,"The last step in variable definition is to add ground-truth data such as incremental studies, like conversion lift data from Facebook, geo tests or Multi-touch attribution. You will need to first define activate_calibration <- T to include calibration in your model. Consequently, you will need to define which channels you want to define certain incremental values for, as well as, the start date, end date and incremental absolute values (liftAbs) from the studies."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### define ground truth\nactivate_calibration <- F # Switch to TRUE to calibrate model.\n# set_lift <- data.table(channel = c("facebook_I",  "tv_S", "facebook_I"),\n#                        liftStartDate = as.Date(c("2018-05-01", "2017-11-27", "2018-07-01")),\n#                        liftEndDate = as.Date(c("2018-06-10", "2017-12-03", "2018-07-20")),\n#                        liftAbs = c(400000, 300000, 200000))\n')),Object(o.b)("h2",{id:"prepare-the-input-data-and-run-the-models"},"Prepare the input data and run the models"),Object(o.b)("p",null,'Once you have defined all the variables from previous steps, you will need to first prepare the input data within the \u2018dt_mod\u2019 object. Finally, you will have to execute the \u2018f.robyn\u2019 function in order to run the model.  Please set your preferred folder path (If the default "~/Documents/GitHub/plots" does not work out well for you) to save plots. Please notice the path has to end without a "/".'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### Prepare input data\ndt_mod <- f.inputWrangling()\n\n#### Run models\nmodel_output_collect <- f.robyn(set_hyperBoundLocal\n                                ,optimizer_name = set_hyperOptimAlgo\n                                ,set_trial = set_trial\n                                ,set_cores = set_cores\n                                ,plot_folder = "~/Documents/GitHub/plots")\n')),Object(o.b)("h2",{id:"access-plotted-results"},"Access plotted results"),Object(o.b)("p",null,"Once all trials and iterations are finished, the model will proceed to plot different charts that will help you assess best models based on NRMSE and a media variables decomposition quality score for contribution of marketing channels. You may find all model plots like below example within the plot_folder you have set on the \u2018run models\u2019 step."),Object(o.b)("img",{alt:"Model results",src:Object(i.a)("/img/ModelResults1.png")}))}u.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(22),r=a(91);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,b=u["".concat(i,".").concat(h)]||u[h]||p[h]||o;return a?r.a.createElement(b,s(s({ref:t},c),{},{components:a})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);