(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4RMJ":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var r=n("qjhZ"),o=function(t,e){var n=void 0!==t.YouTubeSubscriber,o=void 0!==e.YouTubeSubscriber;return n||o?o?n?t.YouTubeSubscriber&&e.YouTubeSubscriber?-1*Object(r.a)(t.YouTubeSubscriber,e.YouTubeSubscriber):0:1:-1:0},u=function(t,e){var n=void 0!==t.TwitchFollower,o=void 0!==e.TwitchFollower;return n||o?o?n?t.TwitchFollower&&e.TwitchFollower?-1*Object(r.a)(t.TwitchFollower,e.TwitchFollower):0:1:-1:0},c=function(t,e){var n,o,u,c,i=(null!==(n=Object(r.b)(t.YouTubeSubscriber))&&void 0!==n?n:0)+(null!==(o=Object(r.b)(t.TwitchFollower))&&void 0!==o?o:0),a=(null!==(u=Object(r.b)(e.YouTubeSubscriber))&&void 0!==u?u:0)+(null!==(c=Object(r.b)(e.TwitchFollower))&&void 0!==c?c:0);return i>a?1:a>i?-1:0},i=function(t,e){return-1*c(t,e)},a=function(t){switch(t){case"YouTube+Twitch":return i;case"YouTube":return o;case"Twitch":return u}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("CGiE"),c=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(u.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("Wcfx"),c=function(){return{name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:function(t){return void 0!==t.group?Object(r.h)("a",{href:Object(u.b)({type:"group",name:t.group})},t.group):null}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),u="noWrap__BzT1O",c="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(u," ").concat(c)},Object(r.h)(o.a,{countType:t}))},n=function(t){return Object(r.h)("span",{class:"".concat(u," ").concat(i)},Object(r.h)(o.a,{countType:t}))};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:u}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null}),t))}},"9JN+":function(t,e,n){"use strict";n.r(e),function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,u,c){try{var i=t[u](c),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,u=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=n("drLk"),a=n("hosL"),l=n("OhSV"),s=n("QRet"),b=n("ENxA"),h=n("HP4b"),f=n("7Asn"),d=n("69ZN"),p=n("JY+X"),O=n("sKFU"),v=n("HSXE"),y=n("LftB"),j=n("MJ1U"),w=n("4RMJ"),T=n("sPVG"),g=n("uZiY"),m=n("L9y4"),S=n("Wfbs"),Y=n("L4T+");e.default=function(e){document.title="".concat(e.dictionary.header.allVTubers," | ").concat(e.dictionary.header.title);var n=u(Object(s.l)("YouTube+Twitch"),2),c=n[0],C=n[1],F=[Object(d.a)(),Object(v.a)(),Object(O.a)(),Object(f.a)(),Object(p.a)()],L=u(Object(s.l)([]),2),V=L[0],x=L[1],_=u(Object(s.l)({name:null,YouTubeId:null,TwitchId:null,group:null,nationality:null}),2),P=_[0],I=_[1],A=V.filter((function(t){return Object(Y.a)(t,P)})).sort(Object(w.a)(c)),k=Object(s.i)((function(){var t=[{option:Object(a.h)(l.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),value:"YouTube+Twitch"},{option:Object(a.h)(l.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),value:"YouTube"},{option:Object(a.h)(l.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),value:"Twitch"}],n=new Map([["name",e.dictionary.table.searchByDisplayName],["YouTubeId",e.dictionary.table.searchByYouTubeId],["TwitchId",e.dictionary.table.searchByTwitchId],["group",e.dictionary.table.searchByGroup],["nationality",e.dictionary.table.searchByNationality]]);return Object(a.h)("div",{class:g.a.searchBarGroup},Object(a.h)(h.a,{tipText:e.dictionary.table.sortingMethod,value:c,optionValue:t,onChange:function(t){return C(t.target.value)}}),Object(a.h)(S.a,{filterModel:P,fieldPlaceHolderMappings:n,openSearchText:e.dictionary.text.openSearch,closeSearchText:e.dictionary.text.closeSearch,onChange:function(t){I(t)}}))}),[P,e.dictionary]),G=u(Object(s.l)(!0),2),M=G[0],U=G[1],H=function(){var t,e=(t=function*(){yield i.l("all").then((function(t){x(t.data.VTubers.map((function(t){return Object(T.a)(t)}))),U(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,u){function c(t){o(a,r,u,c,i,"next",t)}function i(t){o(a,r,u,c,i,"throw",t)}var a=t.apply(e,n);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){H()}),[]),Object(a.h)(t,null,Object(a.h)("h1",null,Object(a.h)(l.c,{id:"header.allVTubers"},"All VTubers"),Object(j.a)()),Object(a.h)(b.b,r({},y.a,{columns:F,data:A,conditionalRowStyles:m.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:M,subHeader:!0,subHeaderComponent:k})))}}.call(this,n("hosL").Fragment)},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),u="container__vr1DG",c="profileImageFlex__4VERG",i="nameFlex__WFOO9";e.a=function(t){return Object(r.h)("div",{class:u},Object(r.h)("div",{class:c},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:i},t.name))}},HP4b:function(t,e,n){"use strict";var r=n("hosL"),o="tipText__4DHD3",u=n("otXJ");e.a=function(t){return Object(r.h)("div",null,Object(r.h)("span",{class:o},t.tipText),Object(r.h)("select",{class:u.a.dropDown,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((function(t){return Object(r.h)("option",{key:t.value,value:t.value},t.option)})):null))}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("7DLW"),c=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(u.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),u=function(){return{name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}}},"L4T+":function(t,e,n){"use strict";function r(t,e){return!Object.entries(e).map((function(e){var n=t[e[0]],r=e[1];return null===r||null!=n&&""!==n&&n.toLowerCase().includes(r.toLowerCase())})).some((function(t){return!1===t}))}n.d(e,"a",(function(){return r}))},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",u="textField__bDpXR",c="button__maFzS";e.a=function(t){var e;return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:u,placeholder:t.placeholderText,value:null!==(e=t.filterText)&&void 0!==e?e:"",onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:c,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("GKGp"),c=function(){var e=Object(u.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},Wfbs:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,u=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=n("hosL"),l=n("QRet"),s=n("L9Wd"),b="floating__uhu4Y",h="floatingHidden__mvSUQ",f="floatingShowing__nwzm5";e.a=function(t){var e=c(Object(l.l)(!1),2),n=e[0],r=e[1],i=c(Object(l.l)(t.filterModel),2),d=i[0],p=i[1],O=function(e){var n=e,r=function(e){var r=function(t){if(null==t)return null;var e=t.trim();return""===e?null:e}(e);p(o(o({},d),{},u({},n,r))),function(e){null!=t.onChange&&t.onChange(e)}(o(o({},d),{},u({},n,r)))};return Object(a.h)(s.a,{key:e,placeholderText:t.fieldPlaceHolderMappings.get(n),filterText:d[n],onFilter:function(t){return r(t.target.value)},onClear:function(){return r(null)}})},v=Object.keys(t.filterModel).map((function(t){return O(t)}));return Object(a.h)("div",null,Object(a.h)((function(){return Object(a.h)("input",{type:"button",value:!0===n?t.closeSearchText:t.openSearchText,onClick:function(){return r(!n)}})}),null),!0===n?Object(a.h)("div",{class:n?"".concat(b," ").concat(f):"".concat(b," ").concat(h)},v):null)}},qjhZ:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t){if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=function(t,e){switch(t.tag){case"has":switch(e.tag){case"has":return t.count-e.count;case"hidden":case"no":return 1}break;case"hidden":switch(e.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(e.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("0yJK"),c=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(u.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e,n,r,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-AllVTubers.chunk.fb445.js.map