(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o="profileImg__DvgtD";e.a=function(t){var e;return Object(r.g)("img",{class:o,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("OhSV"),i=(n("GFNa"),"noWrap__BzT1O");e.a=function(t){var e=function(t){return Object(r.g)("span",{class:"".concat(i," YouTubeRed")},null!=t?t:Object(r.g)(o.c,{id:"table.hiddenCount"},"hidden"))},n=function(t){return Object(r.g)("span",{class:"".concat(i," TwitchPurple")},t)};return Object(r.g)(r.b,null,Object(r.g)((function(t){return t.hasYouTube&&t.hasTwitch?Object(r.g)(r.b,null,e(t.YouTubeSubscriberCount),Object(r.g)("span",{class:i}," + "),n(t.TwitchFollowerCount)):t.hasYouTube?Object(r.g)(r.b,null,e(t.YouTubeSubscriberCount)):t.hasTwitch?Object(r.g)(r.b,null,n(t.TwitchFollowerCount)):null}),t))}},"8i/u":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){var n,r,o,i,u,c,a,l,b,d;return{id:t.id,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(n=t.YouTube)||void 0===n?void 0:n.id,YouTubeSubscriberCount:null===(r=t.YouTube)||void 0===r?void 0:r.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollowerCount:null!==(i=null===(u=t.Twitch)||void 0===u?void 0:u.followerCount)&&void 0!==i?i:0,popularVideo:t.popularVideo,group:null!==(c=t.group)&&void 0!==c?c:"",nationality:t.nationality,activity:t.activity,YouTubePopularity:null!==(a=null===(l=t.YouTube)||void 0===l?void 0:l.popularity)&&void 0!==a?a:0,TwitchPopularity:null!==(b=null===(d=t.Twitch)||void 0===d?void 0:d.popularity)&&void 0!==b?b:0,ranking:e}}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},i=function(t,e){switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}}},FDtd:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function a(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}function g(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v.apply(this,arguments)}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var x=n("hosL"),A=n("OhSV"),P=n("QRet"),Y=n("ENxA"),V=n("drLk"),C=n("LftB"),D=(n("GFNa"),n("L9y4")),_=n("8r9F"),I=n("TToT"),k=n("lRrp"),L=n("4BB4"),F=n("Ud9u"),R=n("sviv"),G=n("7DLW"),U=function(t){var e=[{name:Object(x.g)(A.c,{id:"table.debutDate"},"Debut Date"),width:"100px",selector:function(t){return t.debutDate},sortable:!0},{name:Object(x.g)(A.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(x.g)(R.a,t)}},{name:Object(x.g)(A.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),maxWidth:"250px",cell:function(t){return Object(x.g)(G.a,t)}},{name:Object(x.g)(A.c,{id:"table.popularVideo"},"Popular Video"),width:"100px",cell:function(e){return void 0!==e.popularVideo?Object(x.g)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(F.a)(e.popularVideo)}}):null}}],n=i(Object(P.k)([]),2),u=n[0],c=n[1],a=i(Object(P.k)(!0),2),l=a[0],b=a[1],d=function(){var t,e=(t=function*(){var t=Object(_.b)(new Date,8);yield V.b("next-7-days").then((function(e){c(e.data.VTubers.map((function(t){return t})).sort((function(t,e){return t.debutDate.localeCompare(e.debutDate)})).map((function(e){return Object(k.a)(e,t)}))),b(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,i){function u(t){o(a,r,i,u,c,"next",t)}function c(t){o(a,r,i,u,c,"throw",t)}var a=t.apply(e,n);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(P.d)((function(){d()}),[]),Object(x.g)(x.b,null,Object(x.g)("h3",null,Object(x.g)(A.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days")),Object(x.g)(Y.a,r({},C.a,{columns:e,data:u,conditionalRowStyles:D.a.concat(I.a),customStyles:L.a,fixedHeader:!0,progressPending:l,progressComponent:Object(x.g)(A.c,{id:"table.loading"},"Loading...")})))},N=n("Dy4S"),z=n("y7vS"),B=function(t){var e=[{name:Object(x.g)(A.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(x.g)(R.a,t)}},{name:Object(x.g)(A.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),maxWidth:"250px",selector:function(t){return t.YouTubeSubscriberCount}},{name:Object(x.g)(A.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),maxWidth:"250px",cell:function(e){return Object(N.a)(e._7DaysGrowth,t.dictionary.table)}},{name:Object(x.g)(A.c,{id:"table.popularVideo"},"Popular Video"),width:"100px",cell:function(e){return void 0!==e.popularVideo?Object(x.g)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(F.a)(e.popularVideo)}}):null}}],n=s(Object(P.k)([]),2),r=n[0],o=n[1],i=function(t,e){return b(b({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},u=s(Object(P.k)(!0),2),l=u[0],d=u[1],f=function(){var t,e=(t=function*(){yield V.f("10").then((function(t){o(t.data.VTubers.map((function(t){return t})).map((function(t){return function(t){var e,n,r;return{id:t.id,name:t.name,imgUrl:t.imgUrl,YouTubeId:t.YouTube.id,TwitchId:null===(e=t.Twitch)||void 0===e?void 0:e.id,YouTubeSubscriberCount:null!==(n=t.YouTube.subscriberCount)&&void 0!==n?n:0,_7DaysGrowth:i(t.YouTube._7DaysGrowth,t.YouTube.subscriberCount),_30DaysGrowth:i(t.YouTube._30DaysGrowth,t.YouTube.subscriberCount),popularVideo:t.popularVideo,group:null!==(r=t.group)&&void 0!==r?r:"",nationality:t.nationality,activity:t.activity}}(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),d(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,o){function i(t){a(c,r,o,i,u,"next",t)}function u(t){a(c,r,o,i,u,"throw",t)}var c=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(P.d)((function(){f()}),[]),Object(x.g)(x.b,null,Object(x.g)("h3",null,Object(x.g)(A.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(x.g)(x.b,null," "),Object(x.g)(A.c,{id:"header.top10"},"Top 10"),Object(x.g)(z.a,{width:"300px",fontSize:"13px",text:Object(x.g)(A.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(x.g)(Y.a,c({},C.a,{columns:e,data:r,conditionalRowStyles:D.a,customStyles:L.a,fixedHeader:!0,progressComponent:Object(x.g)(A.c,{id:"table.loading"},"Loading..."),progressPending:l})))},E=n("gJSz"),W=function(t){var e=[{name:Object(x.g)(A.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(x.g)(R.a,t)}},{name:Object(x.g)(A.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),maxWidth:"250px",cell:function(t){return Object(x.g)(G.a,t)}},{name:Object(x.g)(A.c,{id:"table.popularVideo"},"Popular Video"),width:"100px",cell:function(e){return void 0!==e.popularVideo?Object(x.g)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(F.a)(e.popularVideo)}}):null}}],n=y(Object(P.k)([]),2),r=n[0],o=n[1],i=y(Object(P.k)(!0),2),u=i[0],c=i[1],a=function(){var t,e=(t=function*(){yield V.j("10").then((function(t){o(t.data.VTubers.map((function(t){return Object(E.a)(t)}))),c(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,o){function i(t){g(c,r,o,i,u,"next",t)}function u(t){g(c,r,o,i,u,"throw",t)}var c=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(P.d)((function(){a()}),[]),Object(x.g)(x.b,null,Object(x.g)("h3",null,Object(x.g)(A.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(x.g)(x.b,null," "),Object(x.g)(A.c,{id:"header.top10"},"Top 10")),Object(x.g)(Y.a,p({},C.a,{columns:e,data:r,conditionalRowStyles:D.a,customStyles:L.a,fixedHeader:!0,progressComponent:Object(x.g)(A.c,{id:"table.loading"},"Loading..."),progressPending:u})))},H=n("8i/u"),J=n("iN8o"),M=function(t){var e=[{name:"#",width:"30px",wrap:!1,selector:function(t){return t.ranking}},{name:Object(x.g)(A.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(x.g)(R.a,t)}},{name:Object(x.g)(A.c,{id:"table.popularity"},"Popularity"),maxWidth:"250px",cell:function(t){return Object(x.g)(G.a,{hasYouTube:t.hasYouTube,YouTubeSubscriberCount:t.YouTubePopularity,hasTwitch:t.hasTwitch,TwitchFollowerCount:t.TwitchPopularity})}},{name:Object(x.g)(A.c,{id:"table.popularVideo"},"Popular Video"),width:"100px",cell:function(e){return void 0!==e.popularVideo?Object(x.g)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(F.a)(e.popularVideo)}}):null}}],n=T(Object(P.k)([]),2),r=n[0],o=n[1],i=T(Object(P.k)(!0),2),u=i[0],c=i[1],a=function(){var t,e=(t=function*(){yield V.g("10").then((function(t){o(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(H.a)(t,e+1)})).sort(J.b).map((function(t,e){return w(w({},t),{},{ranking:e+1})}))),c(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,o){function i(t){m(c,r,o,i,u,"next",t)}function u(t){m(c,r,o,i,u,"throw",t)}var c=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(P.d)((function(){a()}),[]),Object(x.g)(x.b,null,Object(x.g)("h3",null,Object(x.g)(A.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(x.g)(x.b,null," "),Object(x.g)(A.c,{id:"header.top10"},"Top 10"),Object(x.g)(z.a,{width:"300px",fontSize:"13px",text:Object(x.g)(A.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(x.g)(Y.a,v({},C.a,{columns:e,data:r,conditionalRowStyles:D.a,customStyles:L.a,fixedHeader:!0,progressComponent:Object(x.g)(A.c,{id:"table.loading"},"Loading..."),progressPending:u})))},q="tableGrid__Ju0u9",Q="tableItem__iikA+";e.default=function(t){return"undefined"!=typeof window&&(document.title="".concat(t.dictionary.header.title)),Object(x.g)(x.b,null,Object(x.g)("h1",null,Object(x.g)(A.c,{id:"header.title"},"Taiwan VTuber Data")),Object(x.g)("div",{class:q},Object(x.g)("div",{class:Q},Object(x.g)(M,{dictionary:t.dictionary})),Object(x.g)("div",{class:Q},Object(x.g)(U,{dictionary:t.dictionary})),Object(x.g)("div",{class:Q},Object(x.g)(B,{dictionary:t.dictionary})),Object(x.g)("div",{class:Q},Object(x.g)(W,{dictionary:t.dictionary}))))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return t.isToday},style:{color:"mediumblue"}}]},gJSz:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e,n,r,o,i,u;return{id:t.id,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriberCount:null===(n=t.YouTube)||void 0===n?void 0:n.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollowerCount:null!==(o=null===(i=t.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==o?o:0,popularVideo:t.popularVideo,group:null!==(u=t.group)&&void 0!==u?u:"",nationality:t.nationality,activity:t.activity}}},iN8o:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t,e){var n=t.YouTubePopularity+t.TwitchPopularity,r=e.YouTubePopularity+e.TwitchPopularity;return n>r?-1:r>n?1:0},o=function(t,e){var n=t.YouTubePopularity+t.TwitchPopularity,r=e.YouTubePopularity+e.TwitchPopularity;return n>r?1:r>n?-1:0}},lRrp:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){var n,r,o,i,u,c;return{id:t.id,isToday:t.debutDate===e,debutDate:t.debutDate,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(n=t.YouTube)||void 0===n?void 0:n.id,YouTubeSubscriberCount:null===(r=t.YouTube)||void 0===r?void 0:r.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollowerCount:null!==(i=null===(u=t.Twitch)||void 0===u?void 0:u.followerCount)&&void 0!==i?i:0,popularVideo:t.popularVideo,group:null!==(c=t.group)&&void 0!==c?c:"",nationality:t.nationality,activity:t.activity}}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";e.a=function(t){return Object(r.g)("div",{class:o},t.children,Object(r.g)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sviv:function(t,e,n){"use strict";var r=n("hosL"),o="container__ajzPI",i="YouTubeImg__LvwUa",u="TwitchImg__ckBvR",c=function(t){var e=function(t,e,n){return void 0===n?null:Object(r.g)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.g)("img",{class:t}))};return Object(r.g)("div",{class:o},e(i,"https://www.youtube.com/channel/",t.YouTubeId),e(u,"https://www.twitch.tv/",t.TwitchId))},a=n("+Ox3"),l="container__VQnrV",b="profileImageFlex__NQP5p",d="nameFlex__DDBDq",s="channelLinksFlex__AtHrx";e.a=function(t){return Object(r.g)("div",{class:l},Object(r.g)("div",{class:b},Object(r.g)(a.a,t)),Object(r.g)("span",{class:d},t.name),Object(r.g)("div",{class:s},Object(r.g)(c,t)))}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),i="questionMark__RT3wD";e.a=function(t){return Object(r.g)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.g)("img",{class:i}))}}}]);
//# sourceMappingURL=route-home.chunk.77f6e.js.map