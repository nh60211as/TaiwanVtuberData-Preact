(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ox3":function(e,t,r){"use strict";var o=r("hosL"),a="profileImg__DvgtD";t.a=e=>{var t;return Object(o.h)("img",{class:a,src:null!==(t=e.imgUrl)&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},Dy4S:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const o=e=>e>0?`+${e}`:e<0?`${e}`:"0",a=e=>(100*e).toFixed(2),n=(e,t)=>{switch(e.recordType){case"none":return t.noRecord;case"partial":return`${t.atLeast} ${o(e.diff)} (${a(e.percentage)}%)`;case"full":return`${o(e.diff)} (${a(e.percentage)}%)`}}},L9Wd:function(e,t,r){"use strict";var o=r("hosL"),a="container__1lsi6",n="textField__bDpXR",i="button__maFzS";t.a=e=>Object(o.h)("div",{class:a},Object(o.h)("input",{type:"text",class:n,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(o.h)("button",{type:"button",class:i,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var o=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},UBrP:function(e,t,r){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var c=r("hosL"),s=r("QRet"),l=r("OhSV"),u=r("ENxA"),b=r("jUMG"),h=r("L9Wd"),d=r("drLk"),p=r("LftB"),O=(r("GFNa"),r("uZiY")),g=r("L9y4");const y=(e,t)=>{const r=e._7DaysGrowth.percentage,o=t._7DaysGrowth.percentage;return r>o?1:o>r?-1:0},w=(e,t)=>{const r=e._30DaysGrowth.percentage,o=t._30DaysGrowth.percentage;return r>o?1:o>r?-1:0};var j=r("Dy4S"),v=r("y7vS"),f=r("Ud9u"),m=r("sviv");t.default=e=>{document.title=`${e.dictionary.header.growingVTubers} | ${e.dictionary.header.title}`;const t=[{name:Object(c.h)(l.c,{id:"table.displayName"},"Name"),width:"300px",maxWidth:"500px",cell:e=>Object(c.h)(m.a,e)},{name:Object(c.h)(l.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:e=>e.YouTubeSubscriberCount,right:!0,sortable:!0},{name:Object(c.h)(l.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:t=>Object(j.a)(t._7DaysGrowth,e.dictionary.table),right:!0,sortable:!0,sortFunction:y},{name:Object(c.h)(l.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:t=>Object(j.a)(t._30DaysGrowth,e.dictionary.table),right:!0,sortable:!0,sortFunction:w},{name:Object(c.h)(l.c,{id:"table.popularVideo"},"Popular Video"),width:"100px",cell:t=>void 0!==t.popularVideo?Object(c.h)("input",{type:"button",value:e.dictionary.text.showVideo,onClick:()=>Object(f.a)(t.popularVideo)}):null},{name:Object(c.h)(l.c,{id:"table.group"},"Group"),maxWidth:"150px",cell:e=>""!==e.group?Object(c.h)("a",{class:O.a.groupLink,href:`${b.a}/group/${e.group}`},e.group):null},{name:Object(c.h)(l.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}}],[r,a]=Object(s.k)([]),[i,_]=Object(s.k)(""),[x,D]=Object(s.k)(""),[T,A]=Object(s.k)(!1),G=r.filter((e=>e.name&&e.name.toLowerCase().includes(i.toLowerCase()))).filter((e=>void 0===e.group||e.group.toLowerCase().includes(x.toLowerCase()))),L=Object(s.h)((()=>Object(c.h)("div",{class:O.a.searchBarGroup},Object(c.h)(h.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:e=>_(e.target.value),onClear:()=>{i&&(A(!T),_(""))},filterText:i}),Object(c.h)(h.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:e=>D(e.target.value),onClear:()=>{x&&(A(!T),D(""))},filterText:x}))),[i,x,T,e.dictionary]),C=(e,t)=>n(n({},e),{},{percentage:void 0!==t&&0!==t?e.diff/t:0}),[k,S]=Object(s.k)(!0),P=async()=>{await d.f("100").then((e=>{a(e.data.VTubers.map((e=>e)).map((e=>(e=>{var t,r,o;return{id:e.id,name:e.name,imgUrl:e.imgUrl,YouTubeId:e.YouTube.id,TwitchId:null===(t=e.Twitch)||void 0===t?void 0:t.id,YouTubeSubscriberCount:null!==(r=e.YouTube.subscriberCount)&&void 0!==r?r:0,_7DaysGrowth:C(e.YouTube._7DaysGrowth,e.YouTube.subscriberCount),_30DaysGrowth:C(e.YouTube._30DaysGrowth,e.YouTube.subscriberCount),popularVideo:e.popularVideo,group:null!==(o=e.group)&&void 0!==o?o:"",nationality:e.nationality,activity:e.activity}})(e))).sort(((e,t)=>t._7DaysGrowth.percentage-e._7DaysGrowth.percentage))),S(!1)}))};return Object(s.d)((()=>{P()}),[]),Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(l.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(c.h)(v.a,{width:"300px",fontSize:"13px",text:Object(c.h)(l.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(c.h)(u.a,o({},p.a,{columns:t,data:G,conditionalRowStyles:g.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(c.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:k,subHeader:!0,subHeaderComponent:L})))}},qO1o:function(e,t,r){"use strict";var o=r("hosL"),a="tooltip__vtGmz",n="tooltipText__pA-zc";t.a=e=>Object(o.h)("div",{class:a},e.children,Object(o.h)("span",{class:n,style:{width:e.width,fontSize:e.fontSize}},e.text))},sviv:function(e,t,r){"use strict";var o=r("hosL"),a="container__ajzPI",n="YouTubeImg__LvwUa",i="TwitchImg__ckBvR";var c=e=>{const t=(e,t,r)=>void 0===r?null:Object(o.h)("a",{href:t+r,target:"_blank",rel:"noopener noreferrer"},Object(o.h)("img",{class:e}));return Object(o.h)("div",{class:a},t(n,"https://www.youtube.com/channel/",e.YouTubeId),t(i,"https://www.twitch.tv/",e.TwitchId))},s=r("+Ox3"),l="container__VQnrV",u="profileImageFlex__NQP5p",b="nameFlex__DDBDq",h="channelLinksFlex__AtHrx";t.a=e=>Object(o.h)("div",{class:l},Object(o.h)("div",{class:u},Object(o.h)(s.a,e)),Object(o.h)("span",{class:b},e.name),Object(o.h)("div",{class:h},Object(o.h)(c,e)))},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(e,t,r){"use strict";var o=r("hosL"),a=r("qO1o"),n="questionMark__RT3wD";t.a=e=>Object(o.h)(a.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(o.h)("img",{class:n}))}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.e52f8.esm.js.map