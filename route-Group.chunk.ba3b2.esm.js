(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+Ox3":function(t,e,n){"use strict";var a=n("hosL"),o="profileImg__DvgtD";e.a=t=>{var e;return Object(a.h)("img",{class:o,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,e,n){"use strict";var a=n("hosL"),o="YouTubeImg__LvwUa",r="TwitchImg__ckBvR";e.a=t=>{const e=(t,e,n)=>void 0===n?null:Object(a.h)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(a.h)("img",{class:t}));return Object(a.h)("div",null,e(o,"https://www.youtube.com/channel/",t.YouTubeId),e(r,"https://www.twitch.tv/",t.TwitchId))}},DS9q:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));const a=(t,e)=>{const n=t.hasYouTube,a=e.hasYouTube;if(!n&&!a)return 0;if(!a)return 1;if(!n)return-1;const o=t.YouTubeSubscriberCount,r=e.YouTubeSubscriberCount;return void 0===o&&void 0===r?0:void 0===r?1:void 0===o?-1:o>r?1:r>o?-1:0}},JFTd:function(t,e,n){"use strict";function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},a.apply(this,arguments)}n.r(e);var o=n("hosL"),r=n("QRet"),i=n("OhSV"),u=n("ENxA"),c=n("2G8U"),s=n("+Ox3"),l=n("L9Wd"),d=n("drLk"),h=n("LftB"),b=n("DS9q"),v=(n("GFNa"),n("uZiY"),n("L9y4"));e.default=t=>{document.title=`${t.groupName} | ${t.dictionary.header.title}`;const e=[{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(o.h)(i.c,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(o.h)(i.c,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks},{name:Object(o.h)(i.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),cell:t=>{var e;return t.hasYouTube?null!==(e=t.YouTubeSubscriberCount)&&void 0!==e?e:Object(o.h)(i.c,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:b.a},{name:Object(o.h)(i.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),selector:t=>t.hasTwitch?t.TwitchFollowerCount:"",right:!0,sortable:!0},{name:Object(o.h)(i.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}],[n,g]=Object(r.k)([]),[p,m]=Object(r.k)(""),[w,f]=Object(r.k)(!1),j=n.filter((t=>t.name&&t.name.toLowerCase().includes(p.toLowerCase()))),T=Object(r.h)((()=>Object(o.h)(o.Fragment,null,Object(o.h)(l.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>m(t.target.value),onClear:()=>{p&&(f(!w),m(""))},filterText:p}))),[p,w,t.dictionary]),[O,y]=Object(r.k)(!0),A=async()=>{await d.c(t.groupName).then((t=>{g(t.data.VTubers.map((t=>(t=>{var e,n,a,o,r;return{id:t.id,profileImg:Object(s.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(c.a)({YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(a=t.YouTube)||void 0===a?void 0:a.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(o=null===(r=t.Twitch)||void 0===r?void 0:r.followerCount)&&void 0!==o?o:0,nationality:t.nationality,activity:t.activity}})(t)))),y(!1)}))};return Object(r.d)((()=>{A()}),[]),Object(o.h)(o.Fragment,null,Object(o.h)("h1",null,Object(o.h)(i.c,{id:"header.group"},"Group"),Object(o.h)("span",{class:"highlightText"}," ",t.groupName," "),Object(o.h)(i.c,{id:"header.memberList"},"members")),Object(o.h)(u.a,a({},h.a,{columns:e,data:j,fixedHeader:!0,conditionalRowStyles:v.a,progressComponent:Object(o.h)(i.c,{id:"table.loading"},"Loading..."),progressPending:O,subHeader:!0,subHeaderComponent:T})))}},L9Wd:function(t,e,n){"use strict";var a=n("hosL"),o="textField__bDpXR",r="button__maFzS";e.a=t=>Object(a.h)("div",null,Object(a.h)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(a.h)("button",{type:"button",class:r,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var a=n("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:a.a})},drLk:function(t,e,n){"use strict";n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return b})),n.d(e,"g",(function(){return v}));var a=n("czhI"),o=n.n(a);let r;const i=async t=>(void 0===r&&await(async()=>{await o.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((t=>{r={sha:t.data.sha,date:t.data.commit.author.date}})).catch((()=>{r={sha:"master"}})),o.a.defaults.baseURL=`https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/${r.sha}/api/v0`})(),o.a.get(t)),u=t=>i(`/vtubers/${t}.json`),c=t=>i(`/groups/${t}/vtubers.json`),s=()=>i("/groups.json"),l=t=>i(`/trending-vtubers/${t}.json`),d=t=>i(`/growing-vtubers/${t}.json`),h=t=>i(`/debut-vtubers/${t}.json`),b=t=>i(`/graduate-vtubers/${t}.json`),v=t=>i(`/trending-videos/${t}.json`)},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-Group.chunk.ba3b2.esm.js.map