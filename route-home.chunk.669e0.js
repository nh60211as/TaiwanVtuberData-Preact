(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0kGK":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}));var i=r("sPVG"),u=function(t,e){return o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},a=function(t){return o(o({},Object(i.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:u(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:u(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})}},"4BB4":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("CGiE"),i=function(){return{name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(n.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"6i5z":function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,c=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),b=r("hosL"),f=r("OhSV"),h=r("QRet"),d=r("ENxA"),p=r("L9y4"),O=r("4BB4"),y=r("69ZN"),j=r("sKFU"),v=r("U2b0"),m=r("76Fs"),g=r("LftB"),w=r("0kGK"),T=r("y7vS"),P=r("Wcfx");e.a=function(e){var r=[Object(y.a)(),Object(v.a)(),Object(m.a)(e.dictionary.table),a(a({},Object(j.a)()),{},{hide:d.a.SM})],i=c(Object(h.k)([]),2),u=i[0],l=i[1],S=c(Object(h.k)(!0),2),x=S[0],D=S[1],L=function(){var t,e=(t=function*(){yield s.f("10").then((function(t){l(t.data.VTubers.map((function(t){return t})).map((function(t){return Object(w.a)(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),D(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,c){function i(t){o(a,n,c,i,u,"next",t)}function u(t){o(a,n,c,i,u,"throw",t)}var a=t.apply(e,r);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){L()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(P.b)({type:"growing-vtubers"})},Object(b.h)(f.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(b.h)(t,null," "),Object(b.h)(f.c,{id:"header.top10"},"Top 10")),Object(b.h)(T.a,{width:"300px",fontSize:"13px",text:Object(b.h)(f.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(b.h)(d.b,n({},g.a,{columns:r,data:u,conditionalRowStyles:p.a,customStyles:O.a,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:x})))}}).call(this,r("hosL").Fragment)},"76Fs":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("Dy4S"),i=function(t){return{name:Object(n.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(c.a)(e._7DaysGrowth,t)}}}},"7DLW":function(t,e,r){"use strict";var n=r("hosL"),o=r("WbG0"),c="noWrap__BzT1O",i="YouTubeRed__1JOkf",u="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(n.h)("span",{class:"".concat(c," ").concat(i)},Object(n.h)(o.a,{countType:t}))},r=function(t){return Object(n.h)("span",{class:"".concat(c," ").concat(u)},Object(n.h)(o.a,{countType:t}))};return Object(n.h)(n.Fragment,null,Object(n.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount),Object(n.h)("span",{class:c}," + "),r(t.TwitchCount)):t.YouTubeCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(n.h)(n.Fragment,null,r(t.TwitchCount)):null}),t))}},CGiE:function(t,e,r){"use strict";var n=r("hosL"),o=r("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",u="nameFlex__WFOO9";e.a=function(t){return Object(n.h)("div",{class:c},Object(n.h)("div",{class:i},Object(n.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:u},t.name))}},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},c=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(n(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff));case"full":return"".concat(n(t.diff))}}},FDtd:function(t,e,r){"use strict";function n(t,e,r,n,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,c=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);var i=r("hosL"),u=r("OhSV"),a=r("paJy"),l=r("6i5z"),s=r("drLk"),b=r("QRet"),f=r("8r9F"),h=r("v6a3"),d=r("LUqa"),p="horizontalFlex__qr4MR",O=function(t){var e=o(Object(b.k)(),2),r=e[0],c=e[1],a=o(Object(b.k)(!0),2),l=a[0],O=a[1],y=Object(b.j)(null),j=function(){var e,r=(e=function*(){yield s.g(t.modifier).then((function(e){var r=e.data.livestreams.map((function(t){return t})).map((function(t,e){return Object(h.a)(t,e)})).sort((function(t,e){return t.startTime.getTime()-e.startTime.getTime()}));c(r),O(!1),setTimeout((function(){var e,n,o,c,i=new Date(t.now);i.setHours(i.getHours()-1);var u=Object(f.a)(r,i),a=document.getElementById("".concat(t.divPrefix,"-").concat(Math.min(r.length-1,u))),l=(null!==(e=null==a?void 0:a.offsetLeft)&&void 0!==e?e:0)-(null!==(n=null===(o=y.current)||void 0===o?void 0:o.offsetLeft)&&void 0!==n?n:0);null===(c=y.current)||void 0===c||c.scrollTo({left:l,behavior:"smooth"})}),t.delayMs)}))},function(){var t=this,r=arguments;return new Promise((function(o,c){function i(t){n(a,o,c,i,u,"next",t)}function u(t){n(a,o,c,i,u,"throw",t)}var a=e.apply(t,r);i(void 0)}))});return function(){return r.apply(this,arguments)}}();Object(b.d)((function(){j()}),[]);return Object(i.h)((function(){return l?Object(i.h)("div",{style:{textAlign:"center"}},Object(i.h)("span",null,Object(i.h)(u.c,{id:"text.loading"},"Loading..."))):void 0===r||0===r.length?Object(i.h)("div",{style:{textAlign:"center"}},Object(i.h)("span",null,Object(i.h)(u.c,{id:"text.noData"},"No Data"))):Object(i.h)("div",{ref:y,class:p},Object(i.h)(d.a,{divPrefix:t.divPrefix,data:r,now:t.now}))}),null)},y=r("shcR"),j=r("NF43"),v=(r("GFNa"),r("MJ1U")),m=r("Wcfx"),g="tableGrid__Ju0u9",w="tableItem__iikA+",T="streamingSection__unwHH";e.default=function(t){"undefined"!=typeof window&&(document.title="".concat(t.dictionary.header.title));return Object(i.h)(i.Fragment,null,Object(i.h)("h1",null,Object(i.h)(u.c,{id:"header.title"},"Taiwan VTuber Data"),Object(v.a)()),Object(i.h)((function(){var t=new Date;return Object(i.h)("div",{class:T},Object(i.h)("div",null,Object(i.h)("h3",null,Object(i.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(i.h)(u.c,{id:"header.debutToday"},"Debut Today"))),Object(i.h)(O,{divPrefix:"debut",delayMs:200,modifier:"debut-no-title",now:t})),Object(i.h)("div",null,Object(i.h)("h3",null,Object(i.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(i.h)(u.c,{id:"header.livestreaming"},"Streaming Now"))),Object(i.h)(O,{divPrefix:"all",delayMs:200,modifier:"all-no-title",now:t})))}),null),Object(i.h)("div",{class:g},Object(i.h)("div",{class:w},Object(i.h)(j.a,null)),Object(i.h)("div",{class:w},Object(i.h)(a.a,null)),Object(i.h)("div",{class:w},Object(i.h)(l.a,{dictionary:t.dictionary})),Object(i.h)("div",{class:w},Object(i.h)(y.a,null))))}},GHZf:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("hosL"),o=r("OhSV"),c=r("7DLW"),i=function(t){if(t)return{tag:"has",count:t}},u=function(){return{name:Object(n.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(n.h)(c.a,{YouTubeCount:i(t.YouTubePopularity),TwitchCount:i(t.TwitchPopularity)})}}}},HSXE:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("7DLW"),i=function(){return{name:Object(n.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(n.h)(c.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LUqa:function(t,e,r){"use strict";(function(t){var n=r("hosL"),o=r("oeP6");e.a=function(e){return Object(n.h)(t,null,e.data.map((function(t,r){return Object(n.h)(o.a,{divPrefix:e.divPrefix,id:r,key:r,VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:t.startTime,now:e.now})})))}}).call(this,r("hosL").Fragment)},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("GKGp"),i=function(){var e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},NF43:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,c=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),b=r("hosL"),f=r("OhSV"),h=r("QRet"),d=r("ENxA"),p=r("4BB4"),O=r("69ZN"),y=r("GHZf"),j=r("HSXE"),v=r("LftB"),m=r("PzPG"),g=r("enE3"),w=r("y7vS"),T=r("sKFU"),P=r("pmH6"),S=r("L9y4"),x=r("Wcfx");e.a=function(){var e=[a(a({},Object(P.a)()),{},{width:"30px"}),Object(O.a)(),Object(y.a)(),Object(j.a)(),a(a({},Object(T.a)()),{},{hide:d.a.SM})],r=c(Object(h.k)([]),2),i=r[0],u=r[1],l=c(Object(h.k)(!0),2),D=l[0],L=l[1],V=function(){var t,e=(t=function*(){yield s.h("10").then((function(t){u(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(g.a)(t,e+1)})).sort(m.b).map((function(t,e){return a(a({},t),{},{ranking:e+1})}))),L(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,c){function i(t){o(a,n,c,i,u,"next",t)}function u(t){o(a,n,c,i,u,"throw",t)}var a=t.apply(e,r);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){V()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(x.b)({type:"trending-vtubers"})},Object(b.h)(f.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(b.h)(t,null," "),Object(b.h)(f.c,{id:"header.top10"},"Top 10")),Object(b.h)(w.a,{width:"300px",fontSize:"13px",text:Object(b.h)(f.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(b.h)(d.b,n({},v.a,{columns:e,data:i,conditionalRowStyles:S.a,customStyles:p.a,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:D})))}}).call(this,r("hosL").Fragment)},PzPG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(t,e){var r,n,o,c,i=(null!==(r=t.YouTubePopularity)&&void 0!==r?r:0)+(null!==(n=t.TwitchPopularity)&&void 0!==n?n:0),u=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(c=e.TwitchPopularity)&&void 0!==c?c:0);return i>u?1:u>i?-1:0},o=function(t,e){return-1*n(t,e)}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return t.isToday},style:{color:"mediumblue"}}]},U2b0:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),c=function(){return{name:Object(n.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriber.count}}}},YRVu:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),c=function(){return{name:Object(n.h)(o.c,{id:"table.debutDate"},"Debut Date"),selector:function(t){return t.debutDate}}}},enE3:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var i=r("sPVG"),u=function(t,e){var r,n;return o(o({},Object(i.a)(t)),{},{YouTubePopularity:null===(r=t.YouTube)||void 0===r?void 0:r.popularity,TwitchPopularity:null===(n=t.Twitch)||void 0===n?void 0:n.popularity,ranking:e})}},oeP6:function(t,e,r){"use strict";var n=r("hosL"),o=r("8r9F"),c=r("CGiE"),i=r("wnwi"),u="verticalFlex__i3ZgG";e.a=function(t){return Object(n.h)("div",{id:"".concat(t.divPrefix,"-").concat(t.id),class:u},Object(n.h)(c.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name}),Object(n.h)(i.a,{thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),Object(n.h)("div",null,Object(n.h)("span",null,Object(o.c)(t.startTime,t.now))))}},paJy:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,c=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),b=r("hosL"),f=r("OhSV"),h=r("QRet"),d=r("ENxA"),p=r("L9y4"),O=r("4BB4"),y=r("TToT"),j=r("69ZN"),v=r("sKFU"),m=r("HSXE"),g=r("8r9F"),w=r("LftB"),T=r("qM+f"),P=r("YRVu"),S=r("Wcfx");e.a=function(){var e=[Object(P.a)(),Object(j.a)(),Object(m.a)(),a(a({},Object(v.a)()),{},{hide:d.a.SM})],r=c(Object(h.k)([]),2),i=r[0],u=r[1],l=c(Object(h.k)(!0),2),x=l[0],D=l[1],L=function(){var t,e=(t=function*(){var t=Object(g.d)(new Date,8);yield s.b("next-7-days").then((function(e){u(e.data.VTubers.map((function(t){return t})).sort((function(t,e){return t.debutDate.localeCompare(e.debutDate)})).map((function(e){return Object(T.a)(e,t)}))),D(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,c){function i(t){o(a,n,c,i,u,"next",t)}function u(t){o(a,n,c,i,u,"throw",t)}var a=t.apply(e,r);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){L()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(S.b)({type:"debut-vtubers"})},Object(b.h)(f.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days"))),Object(b.h)(d.b,n({},w.a,{columns:e,data:i,conditionalRowStyles:p.a.concat(y.a),customStyles:O.a,progressPending:x,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading...")})))}}).call(this,r("hosL").Fragment)},pmH6:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},"qM+f":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var i=r("sPVG"),u=function(t,e){return o(o({},Object(i.a)(t)),{},{debutDate:t.debutDate,isToday:t.debutDate===e})}},qO1o:function(t,e,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=function(t){return Object(n.h)("div",{class:o},t.children,Object(n.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("0yJK"),i=function(){return{name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(n.h)(c.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){var e,r,n,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},shcR:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,c=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=r("drLk"),a=r("hosL"),l=r("OhSV"),s=r("QRet"),b=r("ENxA"),f=r("L9y4"),h=r("4BB4"),d=r("69ZN"),p=r("sKFU"),O=r("HSXE"),y=r("LftB"),j=r("sPVG"),v=r("Wcfx");e.a=function(){var e=[Object(d.a)(),Object(O.a)(),Object(p.a)()],r=c(Object(s.k)([]),2),i=r[0],m=r[1],g=c(Object(s.k)(!0),2),w=g[0],T=g[1],P=function(){var t,e=(t=function*(){yield u.l("10").then((function(t){m(t.data.VTubers.map((function(t){return Object(j.a)(t)}))),T(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,c){function i(t){o(a,n,c,i,u,"next",t)}function u(t){o(a,n,c,i,u,"throw",t)}var a=t.apply(e,r);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){P()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)("a",{href:Object(v.b)({type:"all-vtubers"})},Object(a.h)(l.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(a.h)(t,null," "),Object(a.h)(l.c,{id:"header.top10"},"Top 10"))),Object(a.h)(b.b,n({},y.a,{columns:e,data:i,conditionalRowStyles:f.a,customStyles:h.a,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:w})))}}).call(this,r("hosL").Fragment)},v6a3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e){return{id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)}}},y7vS:function(t,e,r){"use strict";var n=r("hosL"),o=r("qO1o"),c="questionMark__RT3wD";e.a=function(t){return Object(n.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:c}))}}}]);
//# sourceMappingURL=route-home.chunk.669e0.js.map