(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+Ox3":function(t,e,a){"use strict";var o=a("hosL"),i="profileImg__DvgtD";e.a=t=>{var e;return Object(o.h)("img",{class:i,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,e,a){"use strict";var o=a("hosL"),i="YouTubeImg__LvwUa",r="TwitchImg__ckBvR";e.a=t=>{const e=(t,e,a)=>void 0===a?null:Object(o.h)("a",{href:e+a,target:"_blank",rel:"noopener noreferrer"},Object(o.h)("img",{class:t}));return Object(o.h)("div",null,e(i,"https://www.youtube.com/channel/",t.YouTubeId),e(r,"https://www.twitch.tv/",t.TwitchId))}},DS9q:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));const o=(t,e)=>{const a=t.hasYouTube,o=e.hasYouTube;if(!a&&!o)return 0;if(!o)return 1;if(!a)return-1;const i=t.YouTubeSubscriberCount,r=e.YouTubeSubscriberCount;return void 0===i&&void 0===r?0:void 0===r?1:void 0===i?-1:i>r?1:r>i?-1:0}},L9Wd:function(t,e,a){"use strict";var o=a("hosL"),i="textField__bDpXR",r="button__maFzS";e.a=t=>Object(o.h)("div",null,Object(o.h)("input",{type:"text",class:i,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(o.h)("button",{type:"button",class:r,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,a){"use strict";var o=a("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},TToT:function(t,e){"use strict";e.a=[{when:t=>t.isToday,style:{color:"mediumblue"}}]},qO1o:function(t,e,a){"use strict";var o=a("hosL"),i="tooltip__vtGmz",r="tooltipText__pA-zc";e.a=t=>Object(o.h)("div",{class:i},t.children,Object(o.h)("span",{class:r,style:{width:t.width,fontSize:t.fontSize}},t.text))},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},ueNj:function(t,e,a){"use strict";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},o.apply(this,arguments)}a.r(e);var i=a("hosL"),r=a("QRet"),n=a("OhSV"),c=a("ENxA"),l=a("jUMG"),u=a("2G8U"),s=a("+Ox3"),d=a("L9Wd"),b=a("drLk"),h=a("LftB"),p=a("DS9q"),g=(a("GFNa"),a("uZiY")),v=a("L9y4"),w=a("8r9F"),O=a("TToT"),T=a("y7vS"),j=a("Ud9u");e.default=t=>{document.title=`${t.dictionary.header.graduateVTubers} | ${t.dictionary.header.title}`;const e=[{name:Object(i.h)(n.c,{id:"table.graduateDate"},"Graduation Date"),selector:t=>t.graduateDate,sortable:!0},{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(i.h)(n.c,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(i.h)(n.c,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks},{name:Object(i.h)(n.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),cell:t=>{var e;return t.hasYouTube?null!==(e=t.YouTubeSubscriberCount)&&void 0!==e?e:Object(i.h)(n.c,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:p.a},{name:Object(i.h)(n.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),selector:t=>t.hasTwitch?t.TwitchFollowerCount:"",right:!0,sortable:!0},{name:Object(i.h)(n.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(i.h)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:()=>Object(j.a)(e.popularVideo)}):null},{name:Object(i.h)(n.c,{id:"table.group"},"Group"),cell:t=>""!==t.group?Object(i.h)("a",{class:g.a.groupLink,href:`${l.a}/group/${t.group}`},t.group):null},{name:Object(i.h)(n.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}],[a,m]=Object(r.k)([]),[y,f]=Object(r.k)(""),[x,A]=Object(r.k)(""),[C,L]=Object(r.k)(""),[k,D]=Object(r.k)(!1),S=a.filter((t=>t.graduateDate&&t.graduateDate.toLowerCase().includes(y.toLowerCase()))).filter((t=>t.name&&t.name.toLowerCase().includes(x.toLowerCase()))).filter((t=>void 0===t.group||t.group.toLowerCase().includes(C.toLowerCase()))),Y=Object(r.h)((()=>Object(i.h)("div",{class:g.a.searchBarGroup},Object(i.h)(d.a,{placeholderText:t.dictionary.table.searchByDate,onFilter:t=>f(t.target.value),onClear:()=>{y&&(D(!k),f(""))},filterText:y}),Object(i.h)(d.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>A(t.target.value),onClear:()=>{x&&(D(!k),A(""))},filterText:x}),Object(i.h)(d.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:t=>L(t.target.value),onClear:()=>{C&&(D(!k),L(""))},filterText:C}))),[y,x,C,k,t.dictionary]),[_,F]=Object(r.k)(!0),B=async()=>{const t=Object(w.b)(new Date,8);await b.b("recent").then((e=>{m(e.data.VTubers.map((t=>t)).sort(((t,e)=>e.graduateDate.localeCompare(t.graduateDate))).map((e=>((t,e)=>{var a,o,i,r,n,c;return{id:t.id,isToday:t.graduateDate===e,graduateDate:t.graduateDate,profileImg:Object(s.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(u.a)({YouTubeId:null===(a=t.YouTube)||void 0===a?void 0:a.id,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(i=t.YouTube)||void 0===i?void 0:i.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(r=null===(n=t.Twitch)||void 0===n?void 0:n.followerCount)&&void 0!==r?r:0,group:null!==(c=t.group)&&void 0!==c?c:"",nationality:t.nationality,activity:t.activity}})(e,t)))),F(!1)}))};return Object(r.d)((()=>{B()}),[]),Object(i.h)(i.Fragment,null,Object(i.h)("h1",null,Object(i.h)(n.c,{id:"header.graduateVTubers"},"Graduate VTubers"),Object(i.h)(T.a,{width:"300px",fontSize:"13px",text:Object(i.h)(n.c,{id:"toolTip.graduateVTubers"},"tooltip text")})),Object(i.h)(c.a,o({},h.a,{columns:e,data:S,conditionalRowStyles:v.a.concat(O.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(i.h)(n.c,{id:"table.loading"},"Loading..."),progressPending:_,subHeader:!0,subHeaderComponent:Y})))}},y7vS:function(t,e,a){"use strict";var o=a("hosL"),i=a("qO1o"),r="questionMark__RT3wD";e.a=t=>Object(o.h)(i.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(o.h)("img",{class:r}))}}]);
//# sourceMappingURL=route-GraduateVTubers.chunk.ab0d4.esm.js.map