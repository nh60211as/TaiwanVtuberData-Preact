(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0kGK":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}));var c=r("sPVG"),u=function(t,e){return o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},a=function(t){return o(o({},Object(c.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:u(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:u(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})}},"4BB4":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),i=r("CGiE"),c=function(){return{name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(n.h)(i.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"6i5z":function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),b=r("hosL"),f=r("OhSV"),h=r("QRet"),d=r("ENxA"),p=r("L9y4"),O=r("4BB4"),y=r("69ZN"),j=r("sKFU"),v=r("U2b0"),m=r("76Fs"),g=r("LftB"),w=r("0kGK"),T=r("y7vS"),P=r("Wcfx");e.a=function(e){var r=[Object(y.a)(),Object(v.a)(),Object(m.a)(e.dictionary.table),a(a({},Object(j.a)()),{},{hide:d.a.SM})],c=i(Object(h.k)([]),2),u=c[0],l=c[1],S=i(Object(h.k)(!0),2),x=S[0],D=S[1],L=function(){var t,e=(t=function*(){yield s.f("10").then((function(t){l(t.data.VTubers.map((function(t){return t})).map((function(t){return Object(w.a)(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),D(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,i){function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}var a=t.apply(e,r);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){L()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(P.b)({type:"growing-vtubers"})},Object(b.h)(f.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(b.h)(t,null," "),Object(b.h)(f.c,{id:"header.top10"},"Top 10")),Object(b.h)(T.a,{width:"300px",fontSize:"13px",text:Object(b.h)(f.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(b.h)(d.b,n({},g.a,{columns:r,data:u,conditionalRowStyles:p.a,customStyles:O.a,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:x})))}}).call(this,r("hosL").Fragment)},"76Fs":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),i=r("Dy4S"),c=function(t){return{name:Object(n.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(i.a)(e._7DaysGrowth,t)}}}},"7DLW":function(t,e,r){"use strict";var n=r("hosL"),o=r("WbG0"),i="noWrap__BzT1O",c="YouTubeRed__1JOkf",u="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(n.h)("span",{class:"".concat(i," ").concat(c)},Object(n.h)(o.a,{countType:t}))},r=function(t){return Object(n.h)("span",{class:"".concat(i," ").concat(u)},Object(n.h)(o.a,{countType:t}))};return Object(n.h)(n.Fragment,null,Object(n.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount),Object(n.h)("span",{class:i}," + "),r(t.TwitchCount)):t.YouTubeCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(n.h)(n.Fragment,null,r(t.TwitchCount)):null}),t))}},CGiE:function(t,e,r){"use strict";var n=r("hosL"),o=r("+Ox3"),i="container__vr1DG",c="profileImageFlex__4VERG",u="nameFlex__WFOO9";e.a=function(t){return Object(n.h)("div",{class:i},Object(n.h)("div",{class:c},Object(n.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:u},t.name))}},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},i=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(n(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff));case"full":return"".concat(n(t.diff))}}},FDtd:function(t,e,r){"use strict";function n(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);var c=r("hosL"),u=r("OhSV"),a=r("paJy"),l=r("6i5z"),s=r("drLk"),b=r("QRet"),f=r("8r9F"),h=r("v6a3"),d=r("LUqa"),p="horizontalFlex__qr4MR",O=function(t){var e=o(Object(b.k)(),2),r=e[0],i=e[1],a=o(Object(b.k)(!0),2),l=a[0],O=a[1],y=Object(b.j)(null),j=function(){var e,r=(e=function*(){yield s.g(t.modifier).then((function(e){var r=e.data.livestreams.map((function(t){return t})).map((function(t,e){return Object(h.a)(t,e)})).sort((function(t,e){return t.startTime.getTime()-e.startTime.getTime()}));i(r),O(!1),setTimeout((function(){var e,n,o,i,c=new Date(t.now);c.setHours(c.getHours()-1);var u=Object(f.a)(r,c),a=document.getElementById("".concat(t.divPrefix,"-").concat(Math.min(r.length-1,u))),l=(null!==(e=null==a?void 0:a.offsetLeft)&&void 0!==e?e:0)-(null!==(n=null===(o=y.current)||void 0===o?void 0:o.offsetLeft)&&void 0!==n?n:0);null===(i=y.current)||void 0===i||i.scrollTo({left:l,behavior:"smooth"})}),t.delayMs)}))},function(){var t=this,r=arguments;return new Promise((function(o,i){function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}var a=e.apply(t,r);c(void 0)}))});return function(){return r.apply(this,arguments)}}();Object(b.d)((function(){j()}),[]);return Object(c.h)("div",{ref:y,class:p},Object(c.h)((function(){return l?Object(c.h)("div",{style:{textAlign:"center"}},Object(c.h)("span",null,Object(c.h)(u.c,{id:"text.loading"},"Loading..."))):void 0===r||0===r.length?Object(c.h)("div",{style:{textAlign:"center"}},Object(c.h)("span",null,Object(c.h)(u.c,{id:"text.noData"},"No Data"))):Object(c.h)(d.a,{divPrefix:t.divPrefix,data:r,now:t.now})}),null))},y=r("shcR"),j=r("NF43"),v=(r("GFNa"),r("MJ1U")),m=r("Wcfx"),g="tableGrid__Ju0u9",w="tableItem__iikA+",T="streamingSection__unwHH";e.default=function(t){"undefined"!=typeof window&&(document.title="".concat(t.dictionary.header.title));return Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(u.c,{id:"header.title"},"Taiwan VTuber Data"),Object(v.a)()),Object(c.h)((function(){var t=new Date;return Object(c.h)("div",{class:T},Object(c.h)("div",null,Object(c.h)("h3",null,Object(c.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(c.h)(u.c,{id:"header.debutToday"},"Debut Today"))),Object(c.h)(O,{divPrefix:"debut",delayMs:200,modifier:"debut-no-title",now:t})),Object(c.h)("div",null,Object(c.h)("h3",null,Object(c.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(c.h)(u.c,{id:"header.livestreaming"},"Streaming Now"))),Object(c.h)(O,{divPrefix:"all",delayMs:200,modifier:"all-no-title",now:t})))}),null),Object(c.h)("div",{class:g},Object(c.h)("div",{class:w},Object(c.h)(j.a,null)),Object(c.h)("div",{class:w},Object(c.h)(a.a,null)),Object(c.h)("div",{class:w},Object(c.h)(l.a,{dictionary:t.dictionary})),Object(c.h)("div",{class:w},Object(c.h)(y.a,null))))}},GHZf:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("hosL"),o=r("OhSV"),i=r("7DLW"),c=function(t){if(t)return{tag:"has",count:t}},u=function(){return{name:Object(n.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(n.h)(i.a,{YouTubeCount:c(t.YouTubePopularity),TwitchCount:c(t.TwitchPopularity)})}}}},HSXE:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),i=r("7DLW"),c=function(){return{name:Object(n.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(n.h)(i.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LUqa:function(t,e,r){"use strict";(function(t){var n=r("hosL"),o=r("oeP6");e.a=function(e){return Object(n.h)(t,null,e.data.map((function(t,r){return Object(n.h)(o.a,{divPrefix:e.divPrefix,id:r,key:r,VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:t.startTime,now:e.now})})))}}).call(this,r("hosL").Fragment)},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),i=r("GKGp"),c=function(){var e=Object(i.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},NF43:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),b=r("hosL"),f=r("OhSV"),h=r("QRet"),d=r("ENxA"),p=r("4BB4"),O=r("69ZN"),y=r("GHZf"),j=r("HSXE"),v=r("LftB"),m=r("PzPG"),g=r("enE3"),w=r("y7vS"),T=r("sKFU"),P=r("pmH6"),S=r("L9y4"),x=r("Wcfx");e.a=function(){var e=[a(a({},Object(P.a)()),{},{width:"30px"}),Object(O.a)(),Object(y.a)(),Object(j.a)(),a(a({},Object(T.a)()),{},{hide:d.a.SM})],r=i(Object(h.k)([]),2),c=r[0],u=r[1],l=i(Object(h.k)(!0),2),D=l[0],L=l[1],V=function(){var t,e=(t=function*(){yield s.h("10").then((function(t){u(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(g.a)(t,e+1)})).sort(m.b).map((function(t,e){return a(a({},t),{},{ranking:e+1})}))),L(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,i){function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}var a=t.apply(e,r);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){V()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(x.b)({type:"trending-vtubers"})},Object(b.h)(f.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(b.h)(t,null," "),Object(b.h)(f.c,{id:"header.top10"},"Top 10")),Object(b.h)(w.a,{width:"300px",fontSize:"13px",text:Object(b.h)(f.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(b.h)(d.b,n({},v.a,{columns:e,data:c,conditionalRowStyles:S.a,customStyles:p.a,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:D})))}}).call(this,r("hosL").Fragment)},PzPG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(t,e){var r,n,o,i,c=(null!==(r=t.YouTubePopularity)&&void 0!==r?r:0)+(null!==(n=t.TwitchPopularity)&&void 0!==n?n:0),u=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(i=e.TwitchPopularity)&&void 0!==i?i:0);return c>u?1:u>c?-1:0},o=function(t,e){return-1*n(t,e)}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return t.isToday},style:{color:"mediumblue"}}]},U2b0:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),i=function(){return{name:Object(n.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriber.count}}}},YRVu:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),i=function(){return{name:Object(n.h)(o.c,{id:"table.debutDate"},"Debut Date"),selector:function(t){return t.debutDate}}}},enE3:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var c=r("sPVG"),u=function(t,e){var r,n;return o(o({},Object(c.a)(t)),{},{YouTubePopularity:null===(r=t.YouTube)||void 0===r?void 0:r.popularity,TwitchPopularity:null===(n=t.Twitch)||void 0===n?void 0:n.popularity,ranking:e})}},oeP6:function(t,e,r){"use strict";var n=r("hosL"),o=r("8r9F"),i=r("CGiE"),c=r("wnwi"),u="verticalFlex__i3ZgG";e.a=function(t){return Object(n.h)("div",{id:"".concat(t.divPrefix,"-").concat(t.id),class:u},Object(n.h)(i.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name}),Object(n.h)(c.a,{thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),Object(n.h)("div",null,Object(n.h)("span",null,Object(o.c)(t.startTime,t.now))))}},paJy:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),b=r("hosL"),f=r("OhSV"),h=r("QRet"),d=r("ENxA"),p=r("L9y4"),O=r("4BB4"),y=r("TToT"),j=r("69ZN"),v=r("sKFU"),m=r("HSXE"),g=r("8r9F"),w=r("LftB"),T=r("qM+f"),P=r("YRVu"),S=r("Wcfx");e.a=function(){var e=[Object(P.a)(),Object(j.a)(),Object(m.a)(),a(a({},Object(v.a)()),{},{hide:d.a.SM})],r=i(Object(h.k)([]),2),c=r[0],u=r[1],l=i(Object(h.k)(!0),2),x=l[0],D=l[1],L=function(){var t,e=(t=function*(){var t=Object(g.d)(new Date,8);yield s.b("next-7-days").then((function(e){u(e.data.VTubers.map((function(t){return t})).sort((function(t,e){return t.debutDate.localeCompare(e.debutDate)})).map((function(e){return Object(T.a)(e,t)}))),D(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,i){function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}var a=t.apply(e,r);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){L()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(S.b)({type:"debut-vtubers"})},Object(b.h)(f.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days"))),Object(b.h)(d.b,n({},w.a,{columns:e,data:c,conditionalRowStyles:p.a.concat(y.a),customStyles:O.a,progressPending:x,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading...")})))}}).call(this,r("hosL").Fragment)},pmH6:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},"qM+f":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var c=r("sPVG"),u=function(t,e){return o(o({},Object(c.a)(t)),{},{debutDate:t.debutDate,isToday:t.debutDate===e})}},qO1o:function(t,e,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";e.a=function(t){return Object(n.h)("div",{class:o},t.children,Object(n.h)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),i=r("0yJK"),c=function(){return{name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(n.h)(i.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){var e,r,n,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},shcR:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=r("drLk"),a=r("hosL"),l=r("OhSV"),s=r("QRet"),b=r("ENxA"),f=r("L9y4"),h=r("4BB4"),d=r("69ZN"),p=r("sKFU"),O=r("HSXE"),y=r("LftB"),j=r("sPVG"),v=r("Wcfx");e.a=function(){var e=[Object(d.a)(),Object(O.a)(),Object(p.a)()],r=i(Object(s.k)([]),2),c=r[0],m=r[1],g=i(Object(s.k)(!0),2),w=g[0],T=g[1],P=function(){var t,e=(t=function*(){yield u.l("10").then((function(t){m(t.data.VTubers.map((function(t){return Object(j.a)(t)}))),T(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,i){function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}var a=t.apply(e,r);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){P()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)("a",{href:Object(v.b)({type:"all-vtubers"})},Object(a.h)(l.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(a.h)(t,null," "),Object(a.h)(l.c,{id:"header.top10"},"Top 10"))),Object(a.h)(b.b,n({},y.a,{columns:e,data:c,conditionalRowStyles:f.a,customStyles:h.a,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:w})))}}).call(this,r("hosL").Fragment)},v6a3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e){return{id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)}}},wnwi:function(t,e,r){"use strict";var n=r("hosL"),o="thumbnail__BdvoG",i="placeholder__1JmTb";e.a=function(t){return Object(n.h)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},void 0===t.thumbnailUrl?Object(n.h)("img",{class:i,src:t.thumbnailUrl,loading:"lazy"}):Object(n.h)("img",{class:o,src:t.thumbnailUrl,loading:"lazy"}))}},y7vS:function(t,e,r){"use strict";var n=r("hosL"),o=r("qO1o"),i="questionMark__RT3wD";e.a=function(t){return Object(n.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:i}))}}}]);
//# sourceMappingURL=route-home.chunk.c4f11.js.map