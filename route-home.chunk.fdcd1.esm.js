(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0kGK":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var i=r("sPVG");const a=(t,e)=>c(c({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0}),u=t=>c(c({},Object(i.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:a(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:a(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})},"4BB4":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),c=r("OhSV"),o=r("CGiE");const i=()=>({name:Object(n.h)(c.c,{id:"table.displayName"},"Name"),cell:t=>Object(n.h)(o.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"6i5z":function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),l=r("OhSV"),s=r("QRet"),b=r("ENxA"),O=r("L9y4"),h=r("4BB4"),d=r("69ZN"),p=r("sKFU"),j=r("U2b0"),f=r("76Fs"),y=r("LftB"),g=r("0kGK"),v=r("y7vS"),w=r("Wcfx");e.a=e=>{const r=[Object(d.a)(),Object(j.a)(),Object(f.a)(e.dictionary.table),o(o({},Object(p.a)()),{},{hide:b.a.SM})],[c,i]=Object(s.k)([]),[m,T]=Object(s.k)(!0);return Object(s.d)((()=>{(async()=>{await a.f("10").then((t=>{i(t.data.VTubers.map((t=>t)).map((t=>Object(g.a)(t))).sort(((t,e)=>e._7DaysGrowth.percentage-t._7DaysGrowth.percentage))),T(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(w.b)({type:"growing-vtubers"})},Object(u.h)(l.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(u.h)(t,null," "),Object(u.h)(l.c,{id:"header.top10"},"Top 10")),Object(u.h)(v.a,{width:"300px",fontSize:"13px",text:Object(u.h)(l.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(u.h)(b.b,n({},y.a,{columns:r,data:c,conditionalRowStyles:O.a,customStyles:h.a,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:m})))}}).call(this,r("hosL").Fragment)},"76Fs":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),c=r("OhSV"),o=r("Dy4S");const i=t=>({name:Object(n.h)(c.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:e=>Object(o.a)(e._7DaysGrowth,t)})},"7DLW":function(t,e,r){"use strict";var n=r("hosL"),c=r("WbG0"),o="noWrap__BzT1O",i="YouTubeRed__1JOkf",a="TwitchPurple__qQQlw";e.a=t=>{const e=t=>Object(n.h)("span",{class:`${o} ${i}`},Object(n.h)(c.a,{countType:t})),r=t=>Object(n.h)("span",{class:`${o} ${a}`},Object(n.h)(c.a,{countType:t}));return Object(n.h)(n.Fragment,null,Object(n.h)((t=>t.YouTubeCount&&t.TwitchCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount),Object(n.h)("span",{class:o}," + "),r(t.TwitchCount)):t.YouTubeCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(n.h)(n.Fragment,null,r(t.TwitchCount)):null),t))}},CGiE:function(t,e,r){"use strict";var n=r("hosL"),c=r("+Ox3"),o="container__vr1DG",i="profileImageFlex__4VERG",a="nameFlex__WFOO9";e.a=t=>Object(n.h)("div",{class:o},Object(n.h)("div",{class:i},Object(n.h)(c.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:a},t.name))},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));const n=t=>t>0?`+${t}`:t<0?`${t}`:"0",c=t=>(100*t).toFixed(2),o=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)} (${c(t.percentage)}%)`;case"full":return`${n(t.diff)} (${c(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)}`;case"full":return`${n(t.diff)}`}}},FDtd:function(t,e,r){"use strict";r.r(e);var n=r("hosL"),c=r("OhSV"),o=r("paJy"),i=r("6i5z"),a=r("drLk"),u=r("QRet"),l=r("8r9F"),s=r("v6a3"),b=r("LUqa"),O="horizontalFlex__qr4MR";var h=t=>{const[e,r]=Object(u.k)(),[o,i]=Object(u.k)(!0),h=Object(u.j)(null);Object(u.d)((()=>{(async()=>{await a.g(t.modifier).then((e=>{const n=e.data.livestreams.map((t=>t)).map(((t,e)=>Object(s.a)(t,e))).sort(((t,e)=>t.startTime.getTime()-e.startTime.getTime()));r(n),i(!1),setTimeout((()=>{var e,r,c,o;const i=new Date(t.now);i.setHours(i.getHours()-1);const a=Object(l.a)(n,i),u=document.getElementById(`${t.divPrefix}-${Math.min(n.length-1,a)}`),s=(null!==(e=null==u?void 0:u.offsetLeft)&&void 0!==e?e:0)-(null!==(r=null===(c=h.current)||void 0===c?void 0:c.offsetLeft)&&void 0!==r?r:0);null===(o=h.current)||void 0===o||o.scrollTo({left:s,behavior:"smooth"})}),t.delayMs)}))})()}),[]);return Object(n.h)("div",{ref:h,class:O},Object(n.h)((()=>o?Object(n.h)("div",{style:{textAlign:"center"}},Object(n.h)("span",null,Object(n.h)(c.c,{id:"text.loading"},"Loading..."))):void 0===e||0===e.length?Object(n.h)("div",{style:{textAlign:"center"}},Object(n.h)("span",null,Object(n.h)(c.c,{id:"text.noData"},"No Data"))):Object(n.h)(b.a,{divPrefix:t.divPrefix,data:e,now:t.now})),null))},d=r("shcR"),p=r("NF43"),j=(r("GFNa"),r("MJ1U")),f=r("Wcfx"),y="tableGrid__Ju0u9",g="tableItem__iikA+",v="streamingSection__unwHH";e.default=t=>{"undefined"!=typeof window&&(document.title=`${t.dictionary.header.title}`);return Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)(c.c,{id:"header.title"},"Taiwan VTuber Data"),Object(j.a)()),Object(n.h)((()=>{const t=new Date;return Object(n.h)("div",{class:v},Object(n.h)("div",null,Object(n.h)("h3",null,Object(n.h)("a",{href:Object(f.b)({type:"livestreams"})},Object(n.h)(c.c,{id:"header.debutToday"},"Debut Today"))),Object(n.h)(h,{divPrefix:"debut",delayMs:200,modifier:"debut-no-title",now:t})),Object(n.h)("div",null,Object(n.h)("h3",null,Object(n.h)("a",{href:Object(f.b)({type:"livestreams"})},Object(n.h)(c.c,{id:"header.livestreaming"},"Streaming Now"))),Object(n.h)(h,{divPrefix:"all",delayMs:200,modifier:"all-no-title",now:t})))}),null),Object(n.h)("div",{class:y},Object(n.h)("div",{class:g},Object(n.h)(p.a,null)),Object(n.h)("div",{class:g},Object(n.h)(o.a,null)),Object(n.h)("div",{class:g},Object(n.h)(i.a,{dictionary:t.dictionary})),Object(n.h)("div",{class:g},Object(n.h)(d.a,null))))}},GHZf:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("hosL"),c=r("OhSV"),o=r("7DLW");const i=t=>{if(t)return{tag:"has",count:t}},a=()=>({name:Object(n.h)(c.c,{id:"table.popularity"},"Popularity"),cell:t=>Object(n.h)(o.a,{YouTubeCount:i(t.YouTubePopularity),TwitchCount:i(t.TwitchPopularity)})})},HSXE:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),c=r("OhSV"),o=r("7DLW");const i=()=>({name:Object(n.h)(c.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:t=>Object(n.h)(o.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})})},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LUqa:function(t,e,r){"use strict";(function(t){var n=r("hosL"),c=r("oeP6");e.a=e=>Object(n.h)(t,null,e.data.map(((t,r)=>Object(n.h)(c.a,{divPrefix:e.divPrefix,id:r,key:r,VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:t.startTime,now:e.now}))))}).call(this,r("hosL").Fragment)},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return i}));var n=r("hosL"),c=r("OhSV"),o=r("GKGp");const i=()=>{const e=Object(o.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(c.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(c.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},NF43:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),l=r("OhSV"),s=r("QRet"),b=r("ENxA"),O=r("4BB4"),h=r("69ZN"),d=r("GHZf"),p=r("HSXE"),j=r("LftB"),f=r("PzPG"),y=r("enE3"),g=r("y7vS"),v=r("sKFU"),w=r("pmH6"),m=r("L9y4"),T=r("Wcfx");e.a=()=>{const e=[o(o({},Object(w.a)()),{},{width:"30px"}),Object(h.a)(),Object(d.a)(),Object(p.a)(),o(o({},Object(v.a)()),{},{hide:b.a.SM})],[r,c]=Object(s.k)([]),[i,P]=Object(s.k)(!0);return Object(s.d)((()=>{(async()=>{await a.h("10").then((t=>{c(t.data.VTubers.map((t=>t)).map(((t,e)=>Object(y.a)(t,e+1))).sort(f.b).map(((t,e)=>o(o({},t),{},{ranking:e+1})))),P(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(T.b)({type:"trending-vtubers"})},Object(u.h)(l.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(u.h)(t,null," "),Object(u.h)(l.c,{id:"header.top10"},"Top 10")),Object(u.h)(g.a,{width:"300px",fontSize:"13px",text:Object(u.h)(l.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(u.h)(b.b,n({},j.a,{columns:e,data:r,conditionalRowStyles:m.a,customStyles:O.a,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:i})))}}).call(this,r("hosL").Fragment)},PzPG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return c}));const n=(t,e)=>{var r,n,c,o;const i=(null!==(r=t.YouTubePopularity)&&void 0!==r?r:0)+(null!==(n=t.TwitchPopularity)&&void 0!==n?n:0),a=(null!==(c=e.YouTubePopularity)&&void 0!==c?c:0)+(null!==(o=e.TwitchPopularity)&&void 0!==o?o:0);return i>a?1:a>i?-1:0},c=(t,e)=>-1*n(t,e)},TToT:function(t,e){"use strict";e.a=[{when:t=>t.isToday,style:{color:"mediumblue"}}]},U2b0:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("hosL"),c=r("OhSV");const o=()=>({name:Object(n.h)(c.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:t=>t.YouTubeSubscriber.count})},YRVu:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("hosL"),c=r("OhSV");const o=()=>({name:Object(n.h)(c.c,{id:"table.debutDate"},"Debut Date"),selector:t=>t.debutDate})},enE3:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}));var i=r("sPVG");const a=(t,e)=>{var r,n;return c(c({},Object(i.a)(t)),{},{YouTubePopularity:null===(r=t.YouTube)||void 0===r?void 0:r.popularity,TwitchPopularity:null===(n=t.Twitch)||void 0===n?void 0:n.popularity,ranking:e})}},oeP6:function(t,e,r){"use strict";var n=r("hosL"),c=r("8r9F"),o=r("CGiE"),i=r("wnwi"),a="verticalFlex__i3ZgG";e.a=t=>Object(n.h)("div",{id:`${t.divPrefix}-${t.id}`,class:a},Object(n.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name}),Object(n.h)(i.a,{thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),Object(n.h)("div",null,Object(n.h)("span",null,Object(c.c)(t.startTime,t.now))))},paJy:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),l=r("OhSV"),s=r("QRet"),b=r("ENxA"),O=r("L9y4"),h=r("4BB4"),d=r("TToT"),p=r("69ZN"),j=r("sKFU"),f=r("HSXE"),y=r("8r9F"),g=r("LftB"),v=r("qM+f"),w=r("YRVu"),m=r("Wcfx");e.a=()=>{const e=[Object(w.a)(),Object(p.a)(),Object(f.a)(),o(o({},Object(j.a)()),{},{hide:b.a.SM})],[r,c]=Object(s.k)([]),[i,T]=Object(s.k)(!0);return Object(s.d)((()=>{(async()=>{const t=Object(y.d)(new Date,8);await a.b("next-7-days").then((e=>{c(e.data.VTubers.map((t=>t)).sort(((t,e)=>t.debutDate.localeCompare(e.debutDate))).map((e=>Object(v.a)(e,t)))),T(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(m.b)({type:"debut-vtubers"})},Object(u.h)(l.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days"))),Object(u.h)(b.b,n({},g.a,{columns:e,data:r,conditionalRowStyles:O.a.concat(d.a),customStyles:h.a,progressPending:i,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading...")})))}}).call(this,r("hosL").Fragment)},pmH6:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=()=>({name:"#",selector:t=>t.ranking,wrap:!1})},"qM+f":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}));var i=r("sPVG");const a=(t,e)=>c(c({},Object(i.a)(t)),{},{debutDate:t.debutDate,isToday:t.debutDate===e})},qO1o:function(t,e,r){"use strict";var n=r("hosL"),c="tooltip__vtGmz",o="tooltipText__pA-zc";e.a=t=>Object(n.h)("div",{class:c},t.children,Object(n.h)("span",{class:o,style:{width:t.width,fontSize:t.fontSize}},t.text))},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),c=r("OhSV"),o=r("0yJK");const i=()=>({name:Object(n.h)(c.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(n.h)(o.a,{popularVideo:t.popularVideo}):null})},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=t=>{var e,r,n,c;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(c=t.Twitch)||void 0===c?void 0:c.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},shcR:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}var c=r("drLk"),o=r("hosL"),i=r("OhSV"),a=r("QRet"),u=r("ENxA"),l=r("L9y4"),s=r("4BB4"),b=r("69ZN"),O=r("sKFU"),h=r("HSXE"),d=r("LftB"),p=r("sPVG"),j=r("Wcfx");e.a=()=>{const e=[Object(b.a)(),Object(h.a)(),Object(O.a)()],[r,f]=Object(a.k)([]),[y,g]=Object(a.k)(!0);return Object(a.d)((()=>{(async()=>{await c.l("10").then((t=>{f(t.data.VTubers.map((t=>Object(p.a)(t)))),g(!1)}))})()}),[]),Object(o.h)(t,null,Object(o.h)("h3",null,Object(o.h)("a",{href:Object(j.b)({type:"all-vtubers"})},Object(o.h)(i.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(o.h)(t,null," "),Object(o.h)(i.c,{id:"header.top10"},"Top 10"))),Object(o.h)(u.b,n({},d.a,{columns:e,data:r,conditionalRowStyles:l.a,customStyles:s.a,progressComponent:Object(o.h)(i.c,{id:"text.loading"},"Loading..."),progressPending:y})))}}).call(this,r("hosL").Fragment)},v6a3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=(t,e)=>({id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)})},wnwi:function(t,e,r){"use strict";var n=r("hosL"),c="thumbnail__BdvoG",o="placeholder__1JmTb";e.a=t=>Object(n.h)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},void 0===t.thumbnailUrl?Object(n.h)("img",{class:o,src:t.thumbnailUrl,loading:"lazy"}):Object(n.h)("img",{class:c,src:t.thumbnailUrl,loading:"lazy"}))},y7vS:function(t,e,r){"use strict";var n=r("hosL"),c=r("qO1o"),o="questionMark__RT3wD";e.a=t=>Object(n.h)(c.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:o}))}}]);
//# sourceMappingURL=route-home.chunk.fdcd1.esm.js.map