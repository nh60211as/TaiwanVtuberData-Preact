(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+IGI":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV");const c=()=>({name:Object(r.h)(o.c,{id:"table.graduateDate"},"Graduation Date"),selector:t=>t.graduateDate})},"49Dv":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var r=n("5Sdp"),o=n("8r9F");const c=t=>null==t?{hasDebutInfo:!1}:a(t),a=t=>({hasDebutInfo:!0,debutDate:t,isToday:t===r.c,isRecentlyDebut:Object(o.a)(Object(o.b)(t,r.a),r.b)<30})},"4RMJ":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u}));var r=n("qjhZ");const o=(t,e)=>{const n=void 0!==t.YouTubeSubscriber,o=void 0!==e.YouTubeSubscriber;return n||o?o?n?t.YouTubeSubscriber&&e.YouTubeSubscriber?-1*Object(r.a)(t.YouTubeSubscriber,e.YouTubeSubscriber):0:1:-1:0},c=(t,e)=>{const n=void 0!==t.TwitchFollower,o=void 0!==e.TwitchFollower;return n||o?o?n?t.TwitchFollower&&e.TwitchFollower?-1*Object(r.a)(t.TwitchFollower,e.TwitchFollower):0:1:-1:0},a=(t,e)=>{var n,o,c,a;const i=(null!==(n=Object(r.b)(t.YouTubeSubscriber))&&void 0!==n?n:0)+(null!==(o=Object(r.b)(t.TwitchFollower))&&void 0!==o?o:0),u=(null!==(c=Object(r.b)(e.YouTubeSubscriber))&&void 0!==c?c:0)+(null!==(a=Object(r.b)(e.TwitchFollower))&&void 0!==a?a:0);return i>u?1:u>i?-1:0},i=(t,e)=>-1*a(t,e),u=t=>{switch(t){case"YouTube+Twitch":return i;case"YouTube":return o;case"Twitch":return c}}},"5Sdp":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i}));var r=n("8r9F"),o=n("Dy4S");const c=Object(o.b)(void 0,8),a=Object(r.d)(new Date,c),i=Object(r.g)(a,c)},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),c=n("CGiE");const a=()=>({name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:t=>Object(r.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),c=n("Wcfx");const a=()=>({name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:t=>void 0!==t.group?Object(r.h)("a",{href:Object(c.b)({type:"group",name:t.group})},t.group):null})},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),c="noWrap__BzT1O",a="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";e.a=t=>{const e=t=>Object(r.h)("span",{class:`${c} ${a}`},Object(r.h)(o.a,{countType:t})),n=t=>Object(r.h)("span",{class:`${c} ${i}`},Object(r.h)(o.a,{countType:t}));return Object(r.h)(r.Fragment,null,Object(r.h)((t=>t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:c}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null),t))}},"8et+":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return u}));var a=n("5Sdp"),i=n("sPVG");const u=t=>o(o({},Object(i.a)(t)),{},{graduateDate:t.graduateDate,isToday:t.graduateDate===a.c})},AafO:function(t,e,n){"use strict";n.r(e),function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n("drLk"),u=n("hosL"),l=n("OhSV"),s=n("QRet"),b=n("ENxA"),d=n("y7vS"),h=n("L9y4"),f=n("TToT"),p=n("+IGI"),O=n("7Asn"),j=n("69ZN"),y=n("JY+X"),w=n("sKFU"),g=n("HSXE"),v=n("LftB"),T=n("MJ1U"),m=n("4RMJ"),S=n("8et+"),D=n("uZiY"),P=n("L4T+"),L=n("Wfbs");e.default=e=>{document.title=`${e.dictionary.header.graduateVTubers} | ${e.dictionary.header.title}`;const n=[c(c({},Object(p.a)()),{},{sortable:!0}),Object(j.a)(),c(c({},Object(g.a)()),{},{sortable:!0,sortFunction:m.b}),Object(w.a)(),Object(O.a)(),Object(y.a)()],[o,a]=Object(s.l)([]),[Y,F]=Object(s.l)({name:null,YouTubeId:null,TwitchId:null,group:null,nationality:null,graduateDate:null}),x=o.filter((t=>Object(P.a)(t,Y))),C=Object(s.i)((()=>{const t=new Map([["name",e.dictionary.table.searchByDisplayName],["YouTubeId",e.dictionary.table.searchByYouTubeId],["TwitchId",e.dictionary.table.searchByTwitchId],["group",e.dictionary.table.searchByGroup],["nationality",e.dictionary.table.searchByNationality],["graduateDate",e.dictionary.table.searchByDate]]);return Object(u.h)("div",{class:D.a.searchBarGroup},Object(u.h)(L.a,{filterModel:Y,fieldPlaceHolderMappings:t,openSearchText:e.dictionary.text.openSearch,closeSearchText:e.dictionary.text.closeSearch,onChange:t=>{F(t)}}))}),[Y,e.dictionary]),[_,V]=Object(s.l)(!0);return Object(s.d)((()=>{(async()=>{await i.c("recent").then((t=>{a(t.data.VTubers.map((t=>t)).sort(((t,e)=>e.graduateDate.localeCompare(t.graduateDate))).map((t=>Object(S.a)(t)))),V(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h1",null,Object(u.h)(l.c,{id:"header.graduateVTubers"},"Graduate VTubers"),Object(T.a)(),Object(u.h)(d.a,{width:"300px",fontSize:"13px",text:Object(u.h)(l.c,{id:"toolTip.graduateVTubers"},"tooltip text")})),Object(u.h)(b.b,r({},v.a,{columns:n,data:x,conditionalRowStyles:h.a.concat(f.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:_,subHeader:!0,subHeaderComponent:C})))}}.call(this,n("hosL").Fragment)},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),c="container__vr1DG",a="profileImageFlex__4VERG",i="nameFlex__WFOO9";e.a=t=>Object(r.h)("div",{class:c},Object(r.h)("div",{class:a},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:i},t.name))},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));const r=t=>t>0?`+${t}`:t<0?`${t}`:"0",o=t=>(100*t).toFixed(2),c=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${r(t.diff)} (${o(t.percentage)}%)`;case"full":return`${r(t.diff)} (${o(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${r(t.diff)}`;case"full":return`${r(t.diff)}`}},a=(t,e)=>{if(void 0!==t){const e=parseInt(t,10);if(!1===isNaN(e))return e}return e}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW");const a=()=>({name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:t=>Object(r.h)(c.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})})},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV");const c=()=>({name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}})},"L4T+":function(t,e,n){"use strict";function r(t,e){return!Object.entries(e).map((e=>{const n=t[e[0]],r=e[1];return null===r||null!=n&&""!==n&&n.toLowerCase().includes(r.toLowerCase())})).some((t=>!1===t))}n.d(e,"a",(function(){return r}))},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",c="textField__bDpXR",a="button__maFzS";e.a=t=>{var e;return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:c,placeholder:t.placeholderText,value:null!==(e=t.filterText)&&void 0!==e?e:"",onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:a,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut,style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:r.a})},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),c=n("GKGp");const a=()=>{const e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},TToT:function(t,e){"use strict";e.a=[{when:t=>!0===t.debutInfo.hasDebutInfo&&t.debutInfo.isToday,style:{color:"mediumblue"}}]},Wfbs:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n("hosL"),i=n("QRet"),u=n("L9Wd"),l="floating__uhu4Y",s="floatingHidden__mvSUQ",b="floatingShowing__nwzm5";e.a=function(t){const[e,n]=Object(i.l)(!1),[r,c]=Object(i.l)(t.filterModel),d=e=>{{const n=e,i=e=>{const a=function(t){if(null==t)return null;const e=t.trim();return""===e?null:e}(e);c(o(o({},r),{},{[n]:a})),function(e){null!=t.onChange&&t.onChange(e)}(o(o({},r),{},{[n]:a}))};return Object(a.h)(u.a,{key:e,placeholderText:t.fieldPlaceHolderMappings.get(n),filterText:r[n],onFilter:t=>i(t.target.value),onClear:()=>i(null)})}},h=Object.keys(t.filterModel).map((t=>d(t)));return Object(a.h)("div",null,Object(a.h)((()=>Object(a.h)("input",{type:"button",value:!0===e?t.closeSearchText:t.openSearchText,onClick:()=>n(!e)})),null),!0===e?Object(a.h)("div",{class:e?`${l} ${b}`:`${l} ${s}`},h):null)}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=t=>Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))},qjhZ:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));const r=t=>{if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=(t,e)=>{switch(t.tag){case"has":switch(e.tag){case"has":return t.count-e.count;case"hidden":case"no":return 1}case"hidden":switch(e.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}case"no":switch(e.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),c=n("0yJK");const a=()=>({name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(r.h)(c.a,{popularVideo:t.popularVideo}):null})},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("49Dv");const o=t=>{var e,n,o,c;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollower:null===(c=t.Twitch)||void 0===c?void 0:c.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,debutInfo:Object(r.b)(t.debutDate)}}},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),c="questionMark__RT3wD";e.a=t=>Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:c}))}}]);
//# sourceMappingURL=route-GraduateVTubers.chunk.62fc1.esm.js.map