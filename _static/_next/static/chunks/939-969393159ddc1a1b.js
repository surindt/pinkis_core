(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6495).Z,i=r(2648).Z,n=r(1598).Z,o=r(7273).Z,l=n(r(7294)),s=i(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=i(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,i,n){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:n,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:h,loading:p,srcString:v,config:b,unoptimized:w,loader:y,onLoadRef:C,onLoadingCompleteRef:E,onLoad:_,onError:S}=e,x=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,r,{width:n,height:i,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:p,style:a({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,C,E,w))},[v,C,E,S,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,C,E,w)},onError:e=>{let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===h&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),S&&S(e)}})))}),b=l.forwardRef((e,t)=>{let r,i;var n,{src:m,sizes:b,unoptimized:w=!1,priority:y=!1,loading:C,className:E,quality:_,width:S,height:x,fill:j,style:k,onLoad:z,onLoadingComplete:R,placeholder:O="empty",blurDataURL:P,layout:I,objectFit:M,objectPosition:N,lazyBoundary:A,lazyRoot:L}=e,W=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(d.ImageConfigContext),B=l.useMemo(()=>{let e=g||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:r})},[D]),T=W,H=T.loader||f.default;if(delete T.loader,"__next_img_default"in H){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=H;H=e=>{let{config:t}=e,r=o(e,["config"]);return F(r)}}if(I){"fill"===I&&(j=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];q&&(k=a({},k,q));let G={responsive:"100vw",fill:"100vw"}[I];G&&!b&&(b=G)}let Z="",$=p(S),U=p(x);if("object"==typeof(n=m)&&(h(n)||void 0!==n.src)){let V=h(m)?m.default:m;if(!V.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(!V.height||!V.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)));if(r=V.blurWidth,i=V.blurHeight,P=P||V.blurDataURL,Z=V.src,!j){if($||U){if($&&!U){let J=$/V.width;U=Math.round(V.height*J)}else if(!$&&U){let K=U/V.height;$=Math.round(V.width*K)}}else $=V.width,U=V.height}}let Q=!y&&("lazy"===C||void 0===C);((m="string"==typeof m?m:Z).startsWith("data:")||m.startsWith("blob:"))&&(w=!0,Q=!1),B.unoptimized&&(w=!0);let X=p(_),Y=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:N}:{},{color:"transparent"},k),ee="blur"===O&&P?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:$,heightInt:U,blurWidth:r,blurHeight:i,blurDataURL:P}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:a,width:i,quality:n,sizes:o,loader:l}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:i}=e;if(r){let n=/(^|\s)(1?\d?\d)vw/g,o=[];for(let l;l=n.exec(r);l)o.push(parseInt(l[2]));if(o.length){let s=.01*Math.min(...o);return{widths:i.filter(e=>e>=a[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,o),u=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,a)=>"".concat(l({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:l({config:t,src:r,quality:n,width:s[u]})}}({config:B,src:m,unoptimized:w,width:$,quality:X,sizes:b,loader:H}),er=m,ea={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:T.crossOrigin},ei=l.useRef(z);l.useEffect(()=>{ei.current=z},[z]);let en=l.useRef(R);l.useEffect(()=>{en.current=R},[R]);let eo=a({isLazy:Q,imgAttributes:et,heightInt:U,widthInt:$,qualityInt:X,className:E,imgStyle:Y,blurStyle:ee,loading:C,config:B,fill:j,unoptimized:w,placeholder:O,loader:H,srcString:er,onLoadRef:ei,onLoadingCompleteRef:en},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eo,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},ea))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:i,blurDataURL:n}=e,o=a||t,l=i||r,s=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(a,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},6991:function(e){(()=>{"use strict";var t={695:e=>{/*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */var t=/(?:^|,)\s*?no-cache\s*?(?:,|$)/;function r(e){var t=e&&Date.parse(e);return"number"==typeof t?t:NaN}e.exports=function(e,a){var i=e["if-modified-since"],n=e["if-none-match"];if(!i&&!n)return!1;var o=e["cache-control"];if(o&&t.test(o))return!1;if(n&&"*"!==n){var l=a.etag;if(!l)return!1;for(var s=!0,c=function(e){for(var t=0,r=[],a=0,i=0,n=e.length;i<n;i++)switch(e.charCodeAt(i)){case 32:a===t&&(a=t=i+1);break;case 44:r.push(e.substring(a,t)),a=t=i+1;break;default:t=i+1}return r.push(e.substring(a,t)),r}(n),u=0;u<c.length;u++){var d=c[u];if(d===l||d==="W/"+l||"W/"+d===l){s=!1;break}}if(s)return!1}if(i){var f=a["last-modified"];if(!f||!(r(f)<=r(i)))return!1}return!0}}},r={};function a(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}},o=!0;try{t[e](n,n.exports,a),o=!1}finally{o&&delete r[e]}return n.exports}a.ab="//";var i=a(695);e.exports=i})()},5577:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateETag=t.fnv1a52=void 0;let r=e=>{let t=e.length,r=0,a=0,i=8997,n=0,o=33826,l=0,s=40164,c=0,u=52210;for(;r<t;)i^=e.charCodeAt(r++),a=435*i,n=435*o,l=435*s,c=435*u,l+=i<<8,c+=o<<8,n+=a>>>16,i=65535&a,l+=n>>>16,o=65535&n,u=c+(l>>>16)&65535,s=65535&l;return(15&u)*281474976710656+4294967296*s+65536*o+(i^u>>4)};t.fnv1a52=r;let a=(e,t=!1)=>(t?'W/"':'"')+r(e).toString(36)+e.length.toString(36)+'"';t.generateETag=a},2752:function(e,t,r){"use strict";var a;r(1876).Buffer,r(670),r(5577),(a=r(6991))&&a.__esModule,r(2973)},2973:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setRevalidateHeaders=function(e,t){if(t.private||t.stateful)(t.private||!e.hasHeader("Cache-Control"))&&e.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");else if("number"==typeof t.revalidate){if(t.revalidate<1)throw Error(`invariant: invalid Cache-Control duration provided: ${t.revalidate} < 1`);e.setHeader("Cache-Control",`s-maxage=${t.revalidate}, stale-while-revalidate`)}else!1===t.revalidate&&e.setHeader("Cache-Control","s-maxage=31536000, stale-while-revalidate")}},5675:function(e,t,r){r(9749)}}]);