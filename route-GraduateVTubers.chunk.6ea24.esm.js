(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+IGI":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.graduateDate"},"Graduation Date"),selector:e=>e.graduateDate})},"4RMJ":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return u}));var n=r("qjhZ");const o=(e,t)=>{const r=void 0!==e.YouTubeSubscriber,o=void 0!==t.YouTubeSubscriber;return r||o?o?r?e.YouTubeSubscriber&&t.YouTubeSubscriber?-1*Object(n.a)(e.YouTubeSubscriber,t.YouTubeSubscriber):0:1:-1:0},c=(e,t)=>{const r=void 0!==e.TwitchFollower,o=void 0!==t.TwitchFollower;return r||o?o?r?e.TwitchFollower&&t.TwitchFollower?-1*Object(n.a)(e.TwitchFollower,t.TwitchFollower):0:1:-1:0},a=(e,t)=>{var r,o,c,a;const i=(null!==(r=Object(n.b)(e.YouTubeSubscriber))&&void 0!==r?r:0)+(null!==(o=Object(n.b)(e.TwitchFollower))&&void 0!==o?o:0),u=(null!==(c=Object(n.b)(t.YouTubeSubscriber))&&void 0!==c?c:0)+(null!==(a=Object(n.b)(t.TwitchFollower))&&void 0!==a?a:0);return i>u?1:u>i?-1:0},i=(e,t)=>-1*a(e,t),u=e=>{switch(e){case"YouTube+Twitch":return i;case"YouTube":return o;case"Twitch":return c}}},"69ZN":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("hosL"),o=r("OhSV"),c=r("+Ox3"),a="container__vr1DG",i="profileImageFlex__4VERG",u="nameFlex__WFOO9";var s=e=>Object(n.h)("div",{class:a},Object(n.h)("div",{class:i},Object(n.h)(c.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl})),Object(n.h)("span",{class:u},e.name));const l=()=>({name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:e=>Object(n.h)(s,{VTuberId:e.id,imgUrl:e.imgUrl,name:e.name})})},"7Asn":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("Wcfx"),a=r("uZiY");const i=()=>({name:Object(n.h)(o.c,{id:"table.group"},"Group"),cell:e=>void 0!==e.group?Object(n.h)("a",{class:a.a.groupLink,href:Object(c.b)({type:"group",name:e.group})},e.group):null})},"7DLW":function(e,t,r){"use strict";var n=r("hosL"),o=r("WbG0"),c="noWrap__BzT1O",a="YouTubeRed__1JOkf",i="TwitchPurple__qQQlw";t.a=e=>{const t=e=>Object(n.h)("span",{class:`${c} ${a}`},Object(n.h)(o.a,{countType:e})),r=e=>Object(n.h)("span",{class:`${c} ${i}`},Object(n.h)(o.a,{countType:e}));return Object(n.h)(n.Fragment,null,Object(n.h)((e=>e.YouTubeCount&&e.TwitchCount?Object(n.h)(n.Fragment,null,t(e.YouTubeCount),Object(n.h)("span",{class:c}," + "),r(e.TwitchCount)):e.YouTubeCount?Object(n.h)(n.Fragment,null,t(e.YouTubeCount)):e.TwitchCount?Object(n.h)(n.Fragment,null,r(e.TwitchCount)):null),e))}},"8et+":function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return i}));var a=r("sPVG");const i=(e,t)=>o(o({},Object(a.a)(e)),{},{graduateDate:e.graduateDate,isToday:e.graduateDate===t})},HSXE:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("hosL"),o=r("OhSV"),c=r("7DLW");const a=()=>({name:Object(n.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:e=>Object(n.h)(c.a,{YouTubeCount:e.YouTubeSubscriber,TwitchCount:e.TwitchFollower})})},"JY+X":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.nationality"},"Nationality"),selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}})},L9Wd:function(e,t,r){"use strict";var n=r("hosL"),o="container__1lsi6",c="textField__bDpXR",a="button__maFzS";t.a=e=>Object(n.h)("div",{class:o},Object(n.h)("input",{type:"text",class:c,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(n.h)("button",{type:"button",class:a,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var n=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},MJ1U:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var n=r("hosL"),o=r("OhSV"),c=r("GKGp");const a=()=>{const t=Object(c.a)();switch(t){case"TW":case"HK":case"MY":return Object(n.h)(e,null," ","(",Object(n.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(o.c,{id:`nationalityTitle.${t}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},TToT:function(e,t){"use strict";t.a=[{when:e=>e.isToday,style:{color:"mediumblue"}}]},qO1o:function(e,t,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";t.a=e=>Object(n.h)("div",{class:o},e.children,Object(n.h)("span",{class:c,style:{width:e.width,fontSize:e.fontSize}},e.text))},qjhZ:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const n=e=>{if(void 0===e)return null;switch(e.tag){case"has":return e.count;case"hidden":case"no":return null}},o=(e,t)=>{switch(e.tag){case"has":switch(t.tag){case"has":return e.count-t.count;case"hidden":case"no":return 1}break;case"hidden":switch(t.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(t.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("hosL"),o=r("OhSV"),c=r("0yJK");const a=()=>({name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(n.h)(c.a,{popularVideo:e.popularVideo}):null})},sPVG:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>{var t,r,n,o;return{id:e.id,activity:e.activity,name:e.name,imgUrl:e.imgUrl,YouTubeId:null===(t=e.YouTube)||void 0===t?void 0:t.id,YouTubeSubscriber:null===(r=e.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(n=e.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(o=e.Twitch)||void 0===o?void 0:o.follower,popularVideo:e.popularVideo,group:e.group,nationality:e.nationality}}},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},ueNj:function(e,t,r){"use strict";r.r(t),function(e){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=r("drLk"),u=r("hosL"),s=r("OhSV"),l=r("QRet"),b=r("ENxA"),h=r("y7vS"),d=r("L9Wd"),O=r("L9y4"),p=r("TToT"),j=r("+IGI"),f=r("7Asn"),w=r("69ZN"),g=r("JY+X"),T=r("sKFU"),v=r("HSXE"),y=r("8r9F"),m=r("LftB"),S=r("MJ1U"),L=r("4RMJ"),F=r("8et+"),x=r("uZiY");t.default=t=>{document.title=`${t.dictionary.header.graduateVTubers} | ${t.dictionary.header.title}`;const r=[c(c({},Object(j.a)()),{},{sortable:!0,width:"100px"}),Object(w.a)(),c(c({},Object(v.a)()),{},{sortable:!0,sortFunction:L.b}),Object(T.a)(),Object(f.a)(),Object(g.a)()],[o,a]=Object(l.k)([]),[C,Y]=Object(l.k)(""),[D,V]=Object(l.k)(""),[P,_]=Object(l.k)(""),[k,G]=Object(l.k)(!1),U=o.filter((e=>e.graduateDate&&e.graduateDate.toLowerCase().includes(C.toLowerCase()))).filter((e=>e.name&&e.name.toLowerCase().includes(D.toLowerCase()))).filter((e=>""===P||void 0!==e.group&&e.group.toLowerCase().includes(P.toLowerCase()))),I=Object(l.h)((()=>Object(u.h)("div",{class:x.a.searchBarGroup},Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByDate,onFilter:e=>Y(e.target.value),onClear:()=>{C&&(G(!k),Y(""))},filterText:C}),Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:e=>V(e.target.value),onClear:()=>{D&&(G(!k),V(""))},filterText:D}),Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:e=>_(e.target.value),onClear:()=>{P&&(G(!k),_(""))},filterText:P}))),[C,D,P,k,t.dictionary]),[R,z]=Object(l.k)(!0);return Object(l.d)((()=>{(async()=>{const e=Object(y.b)(new Date,8);await i.c("recent").then((t=>{a(t.data.VTubers.map((e=>e)).sort(((e,t)=>t.graduateDate.localeCompare(e.graduateDate))).map((t=>Object(F.a)(t,e)))),z(!1)}))})()}),[]),Object(u.h)(e,null,Object(u.h)("h1",null,Object(u.h)(s.c,{id:"header.graduateVTubers"},"Graduate VTubers"),Object(S.a)(),Object(u.h)(h.a,{width:"300px",fontSize:"13px",text:Object(u.h)(s.c,{id:"toolTip.graduateVTubers"},"tooltip text")})),Object(u.h)(b.a,n({},m.a,{columns:r,data:U,conditionalRowStyles:O.a.concat(p.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(u.h)(s.c,{id:"text.loading"},"Loading..."),progressPending:R,subHeader:!0,subHeaderComponent:I})))}}.call(this,r("hosL").Fragment)},y7vS:function(e,t,r){"use strict";var n=r("hosL"),o=r("qO1o"),c="questionMark__RT3wD";t.a=e=>Object(n.h)(o.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(n.h)("img",{class:c}))}}]);
//# sourceMappingURL=route-GraduateVTubers.chunk.6ea24.esm.js.map