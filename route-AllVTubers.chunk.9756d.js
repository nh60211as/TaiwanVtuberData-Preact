(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4RMJ":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var r=n("qjhZ"),o=function(t,e){var n=void 0!==t.YouTubeSubscriber,o=void 0!==e.YouTubeSubscriber;return n||o?o?n?t.YouTubeSubscriber&&e.YouTubeSubscriber?-1*Object(r.a)(t.YouTubeSubscriber,e.YouTubeSubscriber):0:1:-1:0},u=function(t,e){var n=void 0!==t.TwitchFollower,o=void 0!==e.TwitchFollower;return n||o?o?n?t.TwitchFollower&&e.TwitchFollower?-1*Object(r.a)(t.TwitchFollower,e.TwitchFollower):0:1:-1:0},c=function(t,e){var n,o,u,c,i=(null!==(n=Object(r.b)(t.YouTubeSubscriber))&&void 0!==n?n:0)+(null!==(o=Object(r.b)(t.TwitchFollower))&&void 0!==o?o:0),a=(null!==(u=Object(r.b)(e.YouTubeSubscriber))&&void 0!==u?u:0)+(null!==(c=Object(r.b)(e.TwitchFollower))&&void 0!==c?c:0);return i>a?1:a>i?-1:0},i=function(t,e){return-1*c(t,e)},a=function(t){switch(t){case"YouTube+Twitch":return i;case"YouTube":return o;case"Twitch":return u}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("hosL"),o=n("OhSV"),u=n("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",a="nameFlex__WFOO9",l=function(t){return Object(r.h)("div",{class:c},Object(r.h)("div",{class:i},Object(r.h)(u.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(r.h)("span",{class:a},t.name))},s=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(l,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),u=n("Wcfx"),c=n("uZiY"),i=function(){return{name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:function(t){return void 0!==t.group?Object(r.h)("a",{class:c.a.groupLink,href:Object(u.b)({type:"group",name:t.group})},t.group):null}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),u="noWrap__BzT1O",c="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(u," ").concat(c)},Object(r.h)(o.a,{countType:t}))},n=function(t){return Object(r.h)("span",{class:"".concat(u," ").concat(i)},Object(r.h)(o.a,{countType:t}))};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:u}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null}),t))}},"9JN+":function(t,e,n){"use strict";n.r(e),function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,u,c){try{var i=t[u](c),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,u=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=n("drLk"),a=n("hosL"),l=n("OhSV"),s=n("QRet"),b=n("ENxA"),h=n("HP4b"),d=n("L9Wd"),f=n("7Asn"),p=n("69ZN"),v=n("JY+X"),O=n("sKFU"),T=n("HSXE"),w=n("LftB"),j=n("MJ1U"),g=n("4RMJ"),y=n("sPVG"),m=n("uZiY"),Y=n("L9y4");e.default=function(e){document.title="".concat(e.dictionary.header.allVTubers," | ").concat(e.dictionary.header.title);var n=u(Object(s.k)("YouTube+Twitch"),2),c=n[0],C=n[1],F=[Object(p.a)(),Object(T.a)(),Object(O.a)(),Object(f.a)(),Object(v.a)()],S=u(Object(s.k)([]),2),L=S[0],V=S[1],x=u(Object(s.k)(""),2),_=x[0],k=x[1],U=u(Object(s.k)(""),2),G=U[0],J=U[1],A=u(Object(s.k)(!1),2),D=A[0],H=A[1],I=L.filter((function(t){return t.name&&t.name.toLowerCase().includes(_.toLowerCase())})).filter((function(t){return""===G||void 0!==t.group&&t.group.toLowerCase().includes(G.toLowerCase())})).sort(Object(g.a)(c)),P=Object(s.h)((function(){var t=[{option:Object(a.h)(l.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),value:"YouTube+Twitch"},{option:Object(a.h)(l.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),value:"YouTube"},{option:Object(a.h)(l.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),value:"Twitch"}];return Object(a.h)("div",{class:m.a.searchBarGroup},Object(a.h)(h.a,{tipText:e.dictionary.table.sortingMethod,value:c,optionValue:t,onChange:function(t){return C(t.target.value)}}),Object(a.h)(d.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:function(t){return k(t.target.value)},onClear:function(){_&&(H(!D),k(""))},filterText:_}),Object(a.h)(d.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:function(t){return J(t.target.value)},onClear:function(){G&&(H(!D),J(""))},filterText:G}))}),[_,G,D,e.dictionary]),R=u(Object(s.k)(!0),2),B=R[0],W=R[1],N=function(){var t,e=(t=function*(){yield i.k("all").then((function(t){V(t.data.VTubers.map((function(t){return Object(y.a)(t)}))),W(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,u){function c(t){o(a,r,u,c,i,"next",t)}function i(t){o(a,r,u,c,i,"throw",t)}var a=t.apply(e,n);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){N()}),[]),Object(a.h)(t,null,Object(a.h)("h1",null,Object(a.h)(l.c,{id:"header.allVTubers"},"All VTubers"),Object(j.a)()),Object(a.h)(b.a,r({},w.a,{columns:F,data:I,conditionalRowStyles:Y.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:B,subHeader:!0,subHeaderComponent:P})))}}.call(this,n("hosL").Fragment)},HP4b:function(t,e,n){"use strict";var r=n("hosL"),o="tipText__4DHD3",u=n("otXJ");e.a=function(t){return Object(r.h)("div",null,Object(r.h)("span",{class:o},t.tipText),Object(r.h)("select",{class:u.a.dropDown,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((function(t){return Object(r.h)("option",{key:t.value,value:t.value},t.option)})):null))}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("7DLW"),c=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(u.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),u=function(){return{name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",u="textField__bDpXR",c="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:u,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:c,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("GKGp"),c=function(){var e=Object(u.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},qjhZ:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t){if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=function(t,e){switch(t.tag){case"has":switch(e.tag){case"has":return t.count-e.count;case"hidden":case"no":return 1}break;case"hidden":switch(e.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(e.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),u=n("0yJK"),c=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(u.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e,n,r,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-AllVTubers.chunk.9756d.js.map