(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Ox3":function(t,e,a){"use strict";var o=a("hosL"),i="profileImg__DvgtD";e.a=t=>{var e;return Object(o.h)("img",{class:i,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"4BB4":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));const o={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},Dy4S:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));const o=t=>t>0?`+${t}`:t<0?`${t}`:"0",i=t=>(100*t).toFixed(2),n=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${o(t.diff)} (${i(t.percentage)}%)`;case"full":return`${o(t.diff)} (${i(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${o(t.diff)}`;case"full":return`${o(t.diff)}`}}},HP4b:function(t,e,a){"use strict";var o=a("hosL"),i="tipText__4DHD3",n="dropDown__6WU99";e.a=function(t){return Object(o.h)("div",null,Object(o.h)("span",{class:i},t.tipText),Object(o.h)("select",{class:n,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((t=>Object(o.h)("option",{key:t.value,value:t.value},t.option))):null))}},L9Wd:function(t,e,a){"use strict";var o=a("hosL"),i="container__1lsi6",n="textField__bDpXR",r="button__maFzS";e.a=t=>Object(o.h)("div",{class:i},Object(o.h)("input",{type:"text",class:n,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(o.h)("button",{type:"button",class:r,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,a){"use strict";var o=a("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},OSfN:function(t,e,a){"use strict";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},o.apply(this,arguments)}a.r(e);var i=a("hosL"),n=a("QRet"),r=a("OhSV"),c=a("ENxA"),l=a("jUMG"),u=a("L9Wd"),s=a("drLk"),d=a("LftB"),h=(a("GFNa"),a("uZiY")),p=a("L9y4"),b=a("Dy4S"),w=a("Ud9u"),y=a("sviv"),g=a("4BB4"),f=a("HP4b");e.default=t=>{document.title=`${t.dictionary.header.VTubersViewCount} | ${t.dictionary.header.title}`;const e=[{name:"#",compact:!0,width:"30px",wrap:!1,selector:t=>t.ranking,sortable:!0},{name:Object(i.h)(r.c,{id:"table.displayName"},"Name"),compact:!0,minWidth:"25%",cell:t=>Object(i.h)(y.a,t)},{name:Object(i.h)(r.c,{id:"table.YouTubeTotalViewCount"},"YouTube Total View Count"),compact:!0,right:!0,selector:t=>t.totalViewCount,sortable:!0},{name:Object(i.h)(r.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),compact:!0,right:!0,cell:e=>Object(b.a)(e._7DaysGrowth,t.dictionary.table)},{name:Object(i.h)(r.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),compact:!0,right:!0,cell:e=>Object(b.a)(e._30DaysGrowth,t.dictionary.table)},{name:Object(i.h)(r.c,{id:"table.popularVideo"},"Popular Video"),width:"100px",cell:e=>void 0!==e.popularVideo?Object(i.h)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:()=>Object(w.a)(e.popularVideo)}):null},{name:Object(i.h)(r.c,{id:"table.group"},"Group"),maxWidth:"150px",cell:t=>""!==t.group?Object(i.h)("a",{class:h.a.groupLink,href:`${l.a}/group/${t.group}`},t.group):null},{name:Object(i.h)(r.c,{id:"table.nationality"},"Nationality"),minWidth:"40px",maxWidth:"100px",selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}],[a,v]=Object(n.k)([]),[O,m]=Object(n.k)(""),[j,_]=Object(n.k)(""),[T,x]=Object(n.k)(!1),D=a.filter((t=>t.name&&t.name.toLowerCase().includes(O.toLowerCase()))).filter((t=>void 0===t.group||t.group.toLowerCase().includes(j.toLowerCase()))),C=Object(n.h)((()=>{const e=[{option:Object(i.h)(r.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),value:"7-days"},{option:Object(i.h)(r.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),value:"30-days"}];return Object(i.h)("div",{class:h.a.searchBarGroup},Object(i.h)(f.a,{tipText:t.dictionary.table.sortingMethod,value:t.modifier,optionValue:e,onChange:t=>{window.location.href=`${l.a}/vtubers-view-count/${t.target.value}`}}),Object(i.h)(u.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>m(t.target.value),onClear:()=>{O&&(x(!T),m(""))},filterText:O}),Object(i.h)(u.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:t=>_(t.target.value),onClear:()=>{j&&(x(!T),_(""))},filterText:j}))}),[O,j,T,t.modifier,t.dictionary]),[A,V]=Object(n.k)(!0),L=(t,e)=>e.YouTube._7DaysGrowth.diff-t.YouTube._7DaysGrowth.diff,G=(t,e)=>e.YouTube._30DaysGrowth.diff-t.YouTube._30DaysGrowth.diff,k=async()=>{await s.k({sortBy:t.modifier,count:"100"}).then((e=>{v(e.data.VTubers.map((t=>t)).map((t=>t)).sort((t=>{switch(t){case"7-days":return L;case"30-days":return G}})(t.modifier)).map(((t,e)=>((t,e)=>{var a,o;return{id:t.id,name:t.name,imgUrl:t.imgUrl,YouTubeId:t.YouTube.id,TwitchId:null===(a=t.Twitch)||void 0===a?void 0:a.id,totalViewCount:t.YouTube.totalViewCount,_7DaysGrowth:t.YouTube._7DaysGrowth,_30DaysGrowth:t.YouTube._30DaysGrowth,popularVideo:t.popularVideo,group:null!==(o=t.group)&&void 0!==o?o:"",nationality:t.nationality,activity:t.activity,ranking:e}})(t,e+1)))),V(!1)}))};return Object(n.d)((()=>{k()}),[]),Object(i.h)(i.Fragment,null,Object(i.h)("h1",null,Object(i.h)(r.c,{id:"header.VTubersViewCount"},"VTubers View Count Change")),Object(i.h)(c.a,o({},d.a,{columns:e,data:D,conditionalRowStyles:p.a,customStyles:g.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(i.h)(r.c,{id:"table.loading"},"Loading..."),progressPending:A,subHeader:!0,subHeaderComponent:C})))}},sviv:function(t,e,a){"use strict";var o=a("hosL"),i="container__ajzPI",n="YouTubeImg__LvwUa",r="TwitchImg__ckBvR";var c=t=>{const e=(t,e,a)=>void 0===a?null:Object(o.h)("a",{href:e+a,target:"_blank",rel:"noopener noreferrer"},Object(o.h)("img",{class:t}));return Object(o.h)("div",{class:i},e(n,"https://www.youtube.com/channel/",t.YouTubeId),e(r,"https://www.twitch.tv/",t.TwitchId))},l=a("+Ox3"),u="container__VQnrV",s="profileImageFlex__NQP5p",d="nameFlex__DDBDq",h="channelLinksFlex__AtHrx";e.a=t=>Object(o.h)("div",{class:u},Object(o.h)("div",{class:s},Object(o.h)(l.a,t)),Object(o.h)("span",{class:d},t.name),Object(o.h)("div",{class:h},Object(o.h)(c,t)))},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-VTubersViewCount.chunk.0055f.esm.js.map