(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0KPN":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),i=n("OhSV"),o=n("wnwi"),a=function(){return{name:Object(r.h)(i.c,{id:"table.video"},"Video"),cell:function(t){return Object(o.a)({thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl})}}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),i=n("OhSV"),o=n("CGiE"),a=function(){return{name:Object(r.h)(i.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(o.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},CGiE:function(t,e,n){"use strict";var r=n("hosL"),i=n("+Ox3"),o="container__vr1DG",a="profileImageFlex__4VERG",c="nameFlex__WFOO9";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("div",{class:a},Object(r.h)(i.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(r.h)("span",{class:c},t.name))}},HP4b:function(t,e,n){"use strict";var r=n("hosL"),i="tipText__4DHD3",o=n("otXJ");e.a=function(t){return Object(r.h)("div",null,Object(r.h)("span",{class:i},t.tipText),Object(r.h)("select",{class:o.a.dropDown,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((function(t){return Object(r.h)("option",{key:t.value,value:t.value},t.option)})):null))}},J3ca:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){return{id:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,viewCount:t.viewCount,uploadTime:new Date(t.uploadTime),ranking:e}}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),i="container__1lsi6",o="textField__bDpXR",a="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:i},Object(r.h)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:a,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n("hosL"),i=n("OhSV"),o=n("GKGp"),a=function(){var e=Object(o.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(i.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(i.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},pmH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},wnwi:function(t,e,n){"use strict";var r=n("hosL"),i="thumbnail__BdvoG",o="placeholder__1JmTb";e.a=function(t){return Object(r.h)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},void 0===t.thumbnailUrl?Object(r.h)("img",{class:o,src:t.thumbnailUrl,loading:"lazy"}):Object(r.h)("img",{class:i,src:t.thumbnailUrl,loading:"lazy"}))}},zKu3:function(t,e,n){"use strict";n.r(e),function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function i(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,i)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){c=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("drLk"),d=n("hosL"),b=n("OhSV"),h=n("QRet"),f=n("ENxA"),p=n("HP4b"),O=n("L9Wd"),v=n("69ZN"),m=n("0KPN"),g=n("8r9F"),y=n("LftB"),j=n("MJ1U"),w=n("J3ca"),x=n("Wcfx"),C=n("uZiY"),T=n("pmH6");e.default=function(e){document.title="".concat(e.dictionary.header.trendingVideos," | ").concat(e.dictionary.header.title);var n=[u(u({},Object(T.a)()),{},{sortable:!0,width:"40px"}),u(u({},Object(v.a)()),{},{width:"200px"}),{name:Object(d.h)(b.c,{id:"table.title"},"Title"),selector:function(t){return t.title},wrap:!0},u(u({},Object(m.a)()),{},{width:"200px"}),{name:Object(d.h)(b.c,{id:"table.viewCount"},"View Count"),selector:function(t){return t.viewCount},right:!0,sortable:!0,width:"80px"},{name:Object(d.h)(b.c,{id:"table.uploadTime"},"Upload Time"),selector:function(t){return Object(g.b)(t.uploadTime)},sortable:!0,width:"175px"}],a=o(Object(h.k)([]),2),c=a[0],l=a[1],L=o(Object(h.k)(""),2),U=L[0],V=L[1],_=o(Object(h.k)(""),2),P=_[0],k=_[1],S=o(Object(h.k)(!1),2),D=S[0],F=S[1],H=c.filter((function(t){return t.name&&t.name.toLowerCase().includes(U.toLowerCase())})).filter((function(t){return void 0===t.title||t.title.toLowerCase().includes(P.toLowerCase())})),G=Object(h.h)((function(){var t=[{option:Object(d.h)(b.c,{id:"table.noDuplicate"},"One video per VTuber"),value:"no-duplicate"},{option:Object(d.h)(b.c,{id:"table.allVideos"},"All videos"),value:"all"}];return Object(d.h)("div",{class:C.a.searchBarGroup},Object(d.h)(p.a,{tipText:e.dictionary.table.options,value:e.modifier,optionValue:t,onChange:function(t){return Object(x.c)({type:"trending-videos",viewCountSortOrder:t.target.value})}}),Object(d.h)(O.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:function(t){return V(t.target.value)},onClear:function(){U&&(F(!D),V(""))},filterText:U}),Object(d.h)(O.a,{placeholderText:e.dictionary.table.searchByTitle,onFilter:function(t){return k(t.target.value)},onClear:function(){P&&(F(!D),k(""))},filterText:P}))}),[U,P,D,e.modifier,e.dictionary]),A=o(Object(h.k)(!0),2),B=A[0],J=A[1],N=function(){var t,n=(t=function*(){yield s.i(e.modifier).then((function(t){l(t.data.videos.map((function(t){return t})).sort((function(t,e){return e.viewCount-t.viewCount})).map((function(t,e){return Object(w.a)(t,e+1)}))),J(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,o){function a(t){i(u,r,o,a,c,"next",t)}function c(t){i(u,r,o,a,c,"throw",t)}var u=t.apply(e,n);a(void 0)}))});return function(){return n.apply(this,arguments)}}();Object(h.d)((function(){N()}),[e.modifier]);return Object(d.h)(t,null,Object(d.h)("h1",null,Object(d.h)(b.c,{id:"header.trendingVideos"},"Trending Videos"),Object(j.a)()),Object(d.h)(f.b,r({},y.a,{columns:n,data:H,customStyles:{table:{style:{maxHeight:"80vh"}},rows:{style:{minHeight:"36px"}},headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}},fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(d.h)(b.c,{id:"text.loading"},"Loading..."),progressPending:B,subHeader:!0,subHeaderComponent:G})))}}.call(this,n("hosL").Fragment)}}]);
//# sourceMappingURL=route-TrendingVideos.chunk.4ed30.js.map