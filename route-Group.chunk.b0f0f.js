(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4RMJ":function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return a}));var n=r("qjhZ"),o=function(t,e){var r=void 0!==t.YouTubeSubscriber,o=void 0!==e.YouTubeSubscriber;return r||o?o?r?t.YouTubeSubscriber&&e.YouTubeSubscriber?-1*Object(n.a)(t.YouTubeSubscriber,e.YouTubeSubscriber):0:1:-1:0},u=function(t,e){var r=void 0!==t.TwitchFollower,o=void 0!==e.TwitchFollower;return r||o?o?r?t.TwitchFollower&&e.TwitchFollower?-1*Object(n.a)(t.TwitchFollower,e.TwitchFollower):0:1:-1:0},c=function(t,e){var r,o,u,c,i=(null!==(r=Object(n.b)(t.YouTubeSubscriber))&&void 0!==r?r:0)+(null!==(o=Object(n.b)(t.TwitchFollower))&&void 0!==o?o:0),a=(null!==(u=Object(n.b)(e.YouTubeSubscriber))&&void 0!==u?u:0)+(null!==(c=Object(n.b)(e.TwitchFollower))&&void 0!==c?c:0);return i>a?1:a>i?-1:0},i=function(t,e){return-1*c(t,e)},a=function(t){switch(t){case"YouTube+Twitch":return i;case"YouTube":return o;case"Twitch":return u}}},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("hosL"),o=r("OhSV"),u=r("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",a="nameFlex__WFOO9",l=function(t){return Object(n.h)("div",{class:c},Object(n.h)("div",{class:i},Object(n.h)(u.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(n.h)("span",{class:a},t.name))},s=function(){return{name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(n.h)(l,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"7DLW":function(t,e,r){"use strict";var n=r("hosL"),o=r("WbG0"),u="noWrap__BzT1O",c="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(n.h)("span",{class:"".concat(u," ").concat(c)},Object(n.h)(o.a,{countType:t}))},r=function(t){return Object(n.h)("span",{class:"".concat(u," ").concat(i)},Object(n.h)(o.a,{countType:t}))};return Object(n.h)(n.Fragment,null,Object(n.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount),Object(n.h)("span",{class:u}," + "),r(t.TwitchCount)):t.YouTubeCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(n.h)(n.Fragment,null,r(t.TwitchCount)):null}),t))}},HSXE:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),u=r("7DLW"),c=function(){return{name:Object(n.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(n.h)(u.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},JFTd:function(t,e,r){"use strict";r.r(e),function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,u,c){try{var i=t[u](c),a=i.value}catch(t){return void r(t)}i.done?e(a):Promise.resolve(a).then(n,o)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,u=[],c=!0,i=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(u.push(n.value),!e||u.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("hosL"),b=r("QRet"),f=r("OhSV"),h=r("ENxA"),d=r("L9Wd"),p=r("drLk"),O=r("LftB"),j=(r("GFNa"),r("uZiY")),v=r("HSXE"),w=r("69ZN"),y=r("sKFU"),g=r("JY+X"),m=r("fAFy"),T=r("4RMJ"),F=r("L9y4");e.default=function(e){document.title="".concat(e.groupName," | ").concat(e.dictionary.header.title);var r=[Object(w.a)(),a(a({},Object(v.a)()),{},{sortable:!0,sortFunction:T.b}),Object(y.a)(),Object(g.a)()],c=u(Object(b.k)([]),2),i=c[0],l=c[1],S=u(Object(b.k)(""),2),Y=S[0],P=S[1],L=u(Object(b.k)(!1),2),C=L[0],V=L[1],_=i.filter((function(t){return t.name&&t.name.toLowerCase().includes(Y.toLowerCase())})),x=Object(b.h)((function(){return Object(s.h)("div",{class:j.a.searchBarGroup},Object(s.h)(d.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:function(t){return P(t.target.value)},onClear:function(){Y&&(V(!C),P(""))},filterText:Y}))}),[Y,C,e.dictionary]),k=u(Object(b.k)(!0),2),D=k[0],N=k[1],U=function(){var t,r=(t=function*(){yield p.d(e.groupName).then((function(t){l(t.data.VTubers.map((function(t){return Object(m.a)(t)}))),N(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,u){function c(t){o(a,n,u,c,i,"next",t)}function i(t){o(a,n,u,c,i,"throw",t)}var a=t.apply(e,r);c(void 0)}))});return function(){return r.apply(this,arguments)}}();return Object(b.d)((function(){U()}),[]),Object(s.h)(t,null,Object(s.h)("h1",null,Object(s.h)(f.c,{id:"header.group"},"Group"),Object(s.h)("span",{class:"highlightText"}," ",e.groupName," "),Object(s.h)(f.c,{id:"header.memberList"},"members")),Object(s.h)(h.a,n({},O.a,{columns:r,data:_,conditionalRowStyles:F.a,fixedHeader:!0,progressComponent:Object(s.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:D,subHeader:!0,subHeaderComponent:x})))}}.call(this,r("hosL").Fragment)},"JY+X":function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("hosL"),o=r("OhSV"),u=function(){return{name:Object(n.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}}},L9Wd:function(t,e,r){"use strict";var n=r("hosL"),o="container__1lsi6",u="textField__bDpXR",c="button__maFzS";e.a=function(t){return Object(n.h)("div",{class:o},Object(n.h)("input",{type:"text",class:u,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:c,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},fAFy:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return c}));var u=r("sPVG"),c=function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(u.a)(t))}},qjhZ:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}));var n=function(t){if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=function(t,e){switch(t.tag){case"has":switch(e.tag){case"has":return t.count-e.count;case"hidden":case"no":return 1}break;case"hidden":switch(e.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(e.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),u=r("0yJK"),c=function(){return{name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(n.h)(u.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){var e,r,n,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-Group.chunk.b0f0f.js.map