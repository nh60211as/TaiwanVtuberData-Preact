(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0kGK":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}));var u=n("sPVG"),i=function(t,e){return o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},a=function(t){return o(o({},Object(u.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:i(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:i(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})}},"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("hosL"),o=n("OhSV"),c=n("+Ox3"),u="container__vr1DG",i="profileImageFlex__4VERG",a="nameFlex__WFOO9",l=function(t){return Object(r.h)("div",{class:u},Object(r.h)("div",{class:i},Object(r.h)(c.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(r.h)("span",{class:a},t.name))},s=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(l,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"6i5z":function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,u){try{var i=t[c](u),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=n("drLk"),a=n("hosL"),l=n("OhSV"),s=n("QRet"),f=n("ENxA"),b=n("L9y4"),h=n("4BB4"),p=n("69ZN"),d=n("sKFU"),O=n("U2b0"),y=n("76Fs"),j=n("LftB"),v=n("0kGK"),g=n("y7vS");e.a=function(e){var n=[Object(p.a)(),Object(O.a)(),Object(y.a)(e.dictionary.table),Object(d.a)()],u=c(Object(s.k)([]),2),w=u[0],m=u[1],T=c(Object(s.k)(!0),2),P=T[0],S=T[1],D=function(){var t,e=(t=function*(){yield i.f("10").then((function(t){m(t.data.VTubers.map((function(t){return t})).map((function(t){return Object(v.a)(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),S(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function u(t){o(a,r,c,u,i,"next",t)}function i(t){o(a,r,c,u,i,"throw",t)}var a=t.apply(e,n);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){D()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)(l.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(a.h)(t,null," "),Object(a.h)(l.c,{id:"header.top10"},"Top 10"),Object(a.h)(g.a,{width:"300px",fontSize:"13px",text:Object(a.h)(l.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(a.h)(f.a,r({},j.a,{columns:n,data:w,conditionalRowStyles:b.a,customStyles:h.a,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:P})))}}).call(this,n("hosL").Fragment)},"76Fs":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("Dy4S"),u=function(t){return{name:Object(r.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(c.a)(e._7DaysGrowth,t)}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),c="noWrap__BzT1O",u="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(c," ").concat(u)},Object(r.h)(o.a,{countType:t}))},n=function(t){return Object(r.h)("span",{class:"".concat(c," ").concat(i)},Object(r.h)(o.a,{countType:t}))};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:c}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null}),t))}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},c=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}}},FDtd:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=n("OhSV"),c=n("paJy"),u=n("6i5z"),i=n("shcR"),a=n("NF43"),l=(n("GFNa"),n("MJ1U")),s="tableGrid__Ju0u9",f="tableItem__iikA+";e.default=function(t){return"undefined"!=typeof window&&(document.title="".concat(t.dictionary.header.title)),Object(r.h)(r.Fragment,null,Object(r.h)("h1",null,Object(r.h)(o.c,{id:"header.title"},"Taiwan VTuber Data"),Object(l.a)()),Object(r.h)("div",{class:s},Object(r.h)("div",{class:f},Object(r.h)(a.a,null)),Object(r.h)("div",{class:f},Object(r.h)(c.a,null)),Object(r.h)("div",{class:f},Object(r.h)(u.a,{dictionary:t.dictionary})),Object(r.h)("div",{class:f},Object(r.h)(i.a,null))))}},GHZf:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW"),u=function(t){if(t)return{tag:"has",count:t}},i=function(){return{name:Object(r.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(r.h)(c.a,{YouTubeCount:u(t.YouTubePopularity),TwitchCount:u(t.TwitchPopularity)})}}}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW"),u=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(c.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("GKGp"),u=function(){var e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},NF43:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,u){try{var i=t[c](u),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("drLk"),f=n("hosL"),b=n("OhSV"),h=n("QRet"),p=n("ENxA"),d=n("4BB4"),O=n("69ZN"),y=n("GHZf"),j=n("HSXE"),v=n("LftB"),g=n("PzPG"),w=n("enE3"),m=n("y7vS"),T=n("sKFU"),P=n("pmH6"),S=n("L9y4");e.a=function(){var e=[a(a({},Object(P.a)()),{},{width:"30px"}),Object(O.a)(),Object(y.a)(),Object(j.a)(),Object(T.a)()],n=c(Object(h.k)([]),2),u=n[0],i=n[1],l=c(Object(h.k)(!0),2),D=l[0],L=l[1],V=function(){var t,e=(t=function*(){yield s.g("10").then((function(t){i(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(w.a)(t,e+1)})).sort(g.b).map((function(t,e){return a(a({},t),{},{ranking:e+1})}))),L(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function u(t){o(a,r,c,u,i,"next",t)}function i(t){o(a,r,c,u,i,"throw",t)}var a=t.apply(e,n);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){V()}),[]),Object(f.h)(t,null,Object(f.h)("h3",null,Object(f.h)(b.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(f.h)(t,null," "),Object(f.h)(b.c,{id:"header.top10"},"Top 10"),Object(f.h)(m.a,{width:"300px",fontSize:"13px",text:Object(f.h)(b.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(f.h)(p.a,r({},v.a,{columns:e,data:u,conditionalRowStyles:S.a,customStyles:d.a,progressComponent:Object(f.h)(b.c,{id:"text.loading"},"Loading..."),progressPending:D})))}}).call(this,n("hosL").Fragment)},PzPG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t,e){var n,r,o,c,u=(null!==(n=t.YouTubePopularity)&&void 0!==n?n:0)+(null!==(r=t.TwitchPopularity)&&void 0!==r?r:0),i=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(c=e.TwitchPopularity)&&void 0!==c?c:0);return u>i?1:i>u?-1:0},o=function(t,e){return-1*r(t,e)}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return t.isToday},style:{color:"mediumblue"}}]},U2b0:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),c=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriber.count}}}},enE3:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}));var u=n("sPVG"),i=function(t,e){var n,r;return o(o({},Object(u.a)(t)),{},{YouTubePopularity:null===(n=t.YouTube)||void 0===n?void 0:n.popularity,TwitchPopularity:null===(r=t.Twitch)||void 0===r?void 0:r.popularity,ranking:e})}},paJy:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,u){try{var i=t[c](u),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=n("drLk"),a=n("hosL"),l=n("OhSV"),s=n("QRet"),f=n("ENxA"),b=n("L9y4"),h=n("4BB4"),p=n("TToT"),d=n("69ZN"),O=n("sKFU"),y=n("HSXE"),j=n("8r9F"),v=n("LftB"),g=n("qM+f");e.a=function(){var e=[{name:Object(a.h)(l.c,{id:"table.debutDate"},"Debut Date"),selector:function(t){return t.debutDate},width:"100px"},Object(d.a)(),Object(y.a)(),Object(O.a)()],n=c(Object(s.k)([]),2),u=n[0],w=n[1],m=c(Object(s.k)(!0),2),T=m[0],P=m[1],S=function(){var t,e=(t=function*(){var t=Object(j.b)(new Date,8);yield i.b("next-7-days").then((function(e){w(e.data.VTubers.map((function(t){return t})).sort((function(t,e){return t.debutDate.localeCompare(e.debutDate)})).map((function(e){return Object(g.a)(e,t)}))),P(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function u(t){o(a,r,c,u,i,"next",t)}function i(t){o(a,r,c,u,i,"throw",t)}var a=t.apply(e,n);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){S()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)(l.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days")),Object(a.h)(f.a,r({},v.a,{columns:e,data:u,conditionalRowStyles:b.a.concat(p.a),customStyles:h.a,progressPending:T,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading...")})))}}).call(this,n("hosL").Fragment)},pmH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},"qM+f":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}));var u=n("sPVG"),i=function(t,e){return o(o({},Object(u.a)(t)),{},{debutDate:t.debutDate,isToday:t.debutDate===e})}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("0yJK"),u=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(c.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e,n,r,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},shcR:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,u){try{var i=t[c](u),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=n("drLk"),a=n("hosL"),l=n("OhSV"),s=n("QRet"),f=n("ENxA"),b=n("L9y4"),h=n("4BB4"),p=n("69ZN"),d=n("sKFU"),O=n("HSXE"),y=n("LftB"),j=n("sPVG");e.a=function(){var e=[Object(p.a)(),Object(O.a)(),Object(d.a)()],n=c(Object(s.k)([]),2),u=n[0],v=n[1],g=c(Object(s.k)(!0),2),w=g[0],m=g[1],T=function(){var t,e=(t=function*(){yield i.k("10").then((function(t){v(t.data.VTubers.map((function(t){return Object(j.a)(t)}))),m(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function u(t){o(a,r,c,u,i,"next",t)}function i(t){o(a,r,c,u,i,"throw",t)}var a=t.apply(e,n);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){T()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)(l.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(a.h)(t,null," "),Object(a.h)(l.c,{id:"header.top10"},"Top 10")),Object(a.h)(f.a,r({},y.a,{columns:e,data:u,conditionalRowStyles:b.a,customStyles:h.a,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:w})))}}).call(this,n("hosL").Fragment)},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),c="questionMark__RT3wD";e.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:c}))}}}]);
//# sourceMappingURL=route-home.chunk.baefe.js.map