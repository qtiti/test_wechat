webpackJsonp([1],[,,,,,function(e,t,i){"use strict";var s=i(4),n=i(104);s.a.use(n.a);var a=new n.a({routes:[{path:"/chat",component:i(50)},{path:"/friend",component:i(51)},{path:"/my",component:i(52)}],linkActiveClass:"active"});a.push({path:"/chat"}),t.a=a},,,,,,,,,,,,function(e,t,i){i(67);var s=i(1)(i(114),i(55),"data-v-3cb894a8",null);e.exports=s.exports},,,,,,function(e,t,i){i(69);var s=i(1)(i(108),i(57),"data-v-6724880a",null);e.exports=s.exports},function(e,t,i){"use strict";var s=i(106),n=i.n(s),a=i(4),c=i(2),r=i(5);a.a.use(c.b);var o=new Date,l={searchText:"",user:{name:"ratel",img:"static/images/UserAvatar.jpg"},chatlist:[{id:1,user:{name:"妈咪",img:"static/images/mother.jpg"},messages:[{content:"么么哒，妈咪爱你",date:o},{content:"按回车可以发送信息，还可以给我发送表情哟",date:o}],index:1},{id:2,user:{name:"father",img:"static/images/father.jpg"},messages:[{content:"Are you kidding me?",date:o}],index:2},{id:3,user:{name:"机器人",img:"static/images/vue.jpg"},messages:[{content:"我会跟你聊聊天的哟",date:o}],index:3}],friendlist:[{id:0,wxid:"",initial:"新的朋友",img:"static/images/newfriend.jpg",signature:"",nickname:"新的朋友",sex:0,remark:"新的朋友",area:""},{id:1,wxid:"AmorAres-",initial:"A",img:"static/images/小姨妈.jpg",signature:"每天我就萌萌哒",nickname:"Amor",sex:0,remark:"Amor",area:"浙江 宁波"},{id:2,wxid:"Big-fly",initial:"B",img:"static/images/大飞哥.jpg",signature:"你不知道的js",nickname:"fly",sex:1,remark:"大飞哥",area:"奥地利 布尔根兰"},{id:3,wxid:"microzz",initial:"D",img:"static/images/microzz.jpg",signature:"学习让我快乐让我成长",nickname:"microzz",sex:1,remark:"大佬",area:"江西 赣州"},{id:4,wxid:"hwn0366",initial:"F",img:"static/images/father.jpg",signature:"学习让我快乐让我成长",nickname:"丢",sex:1,remark:"father",area:"江西 抚州"},{id:5,wxid:"orange66",initial:"J",img:"static/images/orange.jpg",signature:"你可以笑的很阳光！",nickname:"orange",sex:1,remark:"橘子",area:"江西 赣州"},{id:6,wxid:"Seto_L",img:"static/images/加菲猫.jpg",signature:"自强不息",nickname:"21",sex:1,remark:"加菲",area:"北京 海淀"},{id:7,wxid:"wxid_itjz73t1ajt722",initial:"M",img:"static/images/mother.jpg",signature:"开开心心就好",nickname:"娄娄",sex:0,remark:"妈咪",area:"江西 抚州"},{id:8,wxid:"hj960503",img:"static/images/萌萌俊.jpg",signature:"原谅我有点蠢。。",nickname:"。。。。。",sex:1,remark:"萌萌均",area:"江西 萍乡"}],emojis:[{file:"100.gif",code:"/::)",title:"微笑",reg:/\/::\)/g},{file:"101.gif",code:"/::~",title:"伤心",reg:/\/::~/g},{file:"102.gif",code:"/::B",title:"美女",reg:/\/::B/g},{file:"103.gif",code:"/::|",title:"发呆",reg:/\/::\|/g},{file:"104.gif",code:"/:8-)",title:"墨镜",reg:/\/:8-\)/g},{file:"105.gif",code:"/::<",title:"哭",reg:/\/::</g},{file:"106.gif",code:"/::$",title:"羞",reg:/\/::\$/g},{file:"107.gif",code:"/::X",title:"哑",reg:/\/::X/g},{file:"108.gif",code:"/::Z",title:"睡",reg:/\/::Z/g},{file:"109.gif",code:"/::'(",title:"哭",reg:/\/::'\(/g},{file:"110.gif",code:"/::-|",title:"囧",reg:/\/::-\|/g},{file:"111.gif",code:"/::@",title:"怒",reg:/\/::@/g},{file:"112.gif",code:"/::P",title:"调皮",reg:/\/::P/g},{file:"113.gif",code:"/::D",title:"笑",reg:/\/::D/g},{file:"114.gif",code:"/::O",title:"惊讶",reg:/\/::O/g},{file:"115.gif",code:"/::(",title:"难过",reg:/\/::\(/g},{file:"116.gif",code:"/::+",title:"酷",reg:/\/::\+/g},{file:"117.gif",code:"/:--b",title:"汗",reg:/\/:--b/g},{file:"118.gif",code:"/::Q",title:"抓狂",reg:/\/::Q/g},{file:"119.gif",code:"/::T",title:"吐",reg:/\/::T/g},{file:"120.gif",code:"/:,@P",title:"笑",reg:/\/:,@P/g},{file:"121.gif",code:"/:,@-D",title:"快乐",reg:/\/:,@-D/g},{file:"122.gif",code:"/::d",title:"奇",reg:/\/::d/g},{file:"123.gif",code:"/:,@o",title:"傲",reg:/\/:,@o/g},{file:"124.gif",code:"/::g",title:"饿",reg:/\/::g/g},{file:"125.gif",code:"/:|-)",title:"累",reg:/\/:\|-\)/g},{file:"126.gif",code:"/::!",title:"吓",reg:/\/::!/g},{file:"127.gif",code:"/::L",title:"汗",reg:/\/::L/g},{file:"128.gif",code:"/::>",title:"高兴",reg:/\/::>/g},{file:"129.gif",code:"/::,@",title:"闲",reg:/\/::,@/g},{file:"130.gif",code:"/:,@f",title:"努力",reg:/\/:,@f/g},{file:"131.gif",code:"/::-S",title:"骂",reg:/\/::-S/g},{file:"133.gif",code:"/:,@x",title:"秘密",reg:/\/:,@x/g},{file:"134.gif",code:"/:,@@",title:"乱",reg:/\/:,@@/g},{file:"135.gif",code:"/::8",title:"疯",reg:/\/::8/g},{file:"136.gif",code:"/:,@!",title:"哀",reg:/\/:,@!/g},{file:"137.gif",code:"/:!!!",title:"鬼",reg:/\/:!!!/g},{file:"138.gif",code:"/:xx",title:"打击",reg:/\/:xx/g},{file:"139.gif",code:"/:bye",title:"bye",reg:/\/:bye/g},{file:"142.gif",code:"/:handclap",title:"鼓掌",reg:/\/:handclap/g},{file:"145.gif",code:"/:<@",title:"什么",reg:/\/:<@/g},{file:"147.gif",code:"/::-O",title:"累",reg:/\/::-O/g},{file:"153.gif",code:"/:@x",title:"吓",reg:/\/:@x/g},{file:"155.gif",code:"/:pd",title:"刀",reg:/\/:pd/g},{file:"156.gif",code:"/:<W>",title:"水果",reg:/\/:<W>/g},{file:"157.gif",code:"/:beer",title:"酒",reg:/\/:beer/g},{file:"158.gif",code:"/:basketb",title:"篮球",reg:/\/:basketb/g},{file:"159.gif",code:"/:oo",title:"乒乓",reg:/\/:oo/g},{file:"195.gif",code:"/:circle",title:"跳舞",reg:/\/:circle/g},{file:"160.gif",code:"/:coffee",title:"咖啡",reg:/\/:coffee/g}],selectId:1,selectFriendId:0},d={initData:function(e){var t=localStorage.getItem("vue-chat");t&&(e.chatlist=JSON.parse(t))},search:function(e,t){e.searchText=t},selectSession:function(e,t){e.selectId=t},selectFriend:function(e,t){e.selectFriendId=t},sendMessage:function(e,t){var i=e.chatlist.find(function(t){return t.id===e.selectId});i.messages.push({content:t.content,date:new Date,self:!0}),"机器人"===i.user.name&&setTimeout(function(){i.messages.push({content:t.reply,date:new Date,self:!1})},500)},send:function(e){var t=e.friendlist.find(function(t){return t.id===e.selectFriendId}),i=e.chatlist.find(function(e){return e.user.name===t.remark});if(i)e.selectId=i.index,r.a.push({path:"/chat"});else{e.selectId=1;for(var s=0;s<e.chatlist.length;s++)e.chatlist[s].id++,e.chatlist[s].index++;e.chatlist.unshift({id:1,user:{name:t.remark,img:t.img},messages:[{content:"已经置顶聊天，可以给我发信息啦！",date:new Date}],index:1})}}},f={searchedChatlist:function(e){return e.chatlist.filter(function(t){return t.user.name.includes(e.searchText)})},searchedFriendlist:function(e){return e.friendlist.filter(function(t){return t.remark.includes(e.searchText)})},selectedChat:function(e){return e.chatlist.find(function(t){return t.id===e.selectId})},selectedFriend:function(e){return e.friendlist.find(function(t){return t.id===e.selectFriendId})},messages:function(e){return e.chatlist.find(function(t){return t.id===e.selectId}).messages}},u={search:function(e,t){var i=e.commit;setTimeout(function(){i("search",t)},100)},selectSession:function(e,t){return(0,e.commit)("selectSession",t)},selectFriend:function(e,t){return(0,e.commit)("selectFriend",t)},sendMessage:function(e,t){return(0,e.commit)("sendMessage",t)},send:function(e){return(0,e.commit)("send")},initData:function(e){return(0,e.commit)("initData")}},g=new c.b.Store({state:l,mutations:d,getters:f,actions:u});g.watch(function(e){return e.chatlist},function(e){localStorage.setItem("vue-chat",n()(e))},{deep:!0}),t.a=g},,,,,,,,,,,,,,,,,,,,function(e,t,i){i(73);var s=i(1)(i(109),i(61),"data-v-93a1c5a8",null);e.exports=s.exports},function(e,t,i){i(65);var s=i(1)(i(110),i(53),"data-v-2916bea8",null);e.exports=s.exports},function(e,t,i){i(74);var s=i(1)(i(111),i(62),"data-v-f8912ca8",null);e.exports=s.exports},function(e,t,i){i(66);var s=i(1)(i(112),i(54),"data-v-2b06ab08",null);e.exports=s.exports},function(e,t,i){i(70);var s=i(1)(i(113),i(58),"data-v-6d69d72c",null);e.exports=s.exports},function(e,t,i){i(71);var s=i(1)(i(115),i(59),"data-v-7530310c",null);e.exports=s.exports},function(e,t,i){i(75);var s=i(1)(i(116),i(63),"data-v-fe8a4bb6",null);e.exports=s.exports},function(e,t,i){i(72);var s=i(1)(i(117),i(60),"data-v-7bf0e6a5",null);e.exports=s.exports},function(e,t,i){i(68);var s=i(1)(i(118),i(56),"data-v-5ec67076",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"friendlist"},[i("ul",e._l(e.searchedFriendlist,function(t){return i("li",{staticClass:"frienditem",class:{noborder:!t.initial}},[t.initial?i("div",{staticClass:"list_title"},[e._v(e._s(t.initial))]):e._e(),e._v(" "),i("div",{staticClass:"friend-info",class:{active:t.id===e.selectFriendId},on:{click:function(i){e.selectFriend(t.id)}}},[i("img",{staticClass:"avatar",attrs:{width:"36",height:"36",src:t.img}}),e._v(" "),i("div",{staticClass:"remark"},[e._v(e._s(t.remark))])])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"message"},[i("header",{staticClass:"header"},[i("div",{staticClass:"friendname"},[e._v(e._s(e.selectedChat.user.name))])]),e._v(" "),i("div",{ref:"list",staticClass:"message-wrapper"},[e.selectedChat?i("ul",e._l(e.selectedChat.messages,function(t){return i("li",{staticClass:"message-item"},[i("div",{staticClass:"time"},[i("span",[e._v(e._s(e._f("time")(t.date)))])]),e._v(" "),i("div",{staticClass:"main",class:{self:t.self}},[i("img",{staticClass:"avatar",attrs:{width:"36",height:"36",src:t.self?e.user.img:e.selectedChat.user.img}}),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"text",domProps:{innerHTML:e._s(e.replaceFace(t.content))}})])])])})):e._e()])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"search-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"searchInput",attrs:{type:"text",placeholder:"搜索"},domProps:{value:e.search},on:{keyup:e.change,input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.noText,expression:"noText"}],staticClass:"icon iconfont icon-search"}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.haveText,expression:"haveText"}],staticClass:"searchInput-delete",on:{click:e.del}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"resume"},[i("div",{staticClass:"about"},[i("h1",{staticClass:"name"},[e._v("韩超男")]),e._v(" "),i("div",{staticClass:"intention"},[e._v("求职意向："),i("br"),i("span",[e._v("web前端工程师")])]),e._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"info-title"},[e._v("个人信息：")]),e._v(" "),i("div",{staticClass:"info-item"},[i("i",{staticClass:"icon school"}),e._v(" "),i("span",[e._v("东华理工大学(本科)")])]),e._v(" "),i("div",{staticClass:"info-item"},[i("i",{staticClass:"icon major"}),e._v(" "),i("span",[e._v("软件工程(2018毕业)")])]),e._v(" "),i("div",{staticClass:"info-item"},[i("i",{staticClass:"icon phone"}),e._v(" "),i("span",[e._v("18174019297")])]),e._v(" "),i("div",{staticClass:"info-item"},[i("i",{staticClass:"icon email"}),e._v(" "),i("span",[e._v("1062384845@qq.com")])])])]),e._v(" "),i("div",{staticClass:"power"},[i("div",{staticClass:"power-item"},[i("div",{staticClass:"title"},[i("i",{staticClass:"icon technology"}),e._v(" "),i("span",{staticClass:"name"},[e._v("技术栈")])]),e._v(" "),i("div",{staticClass:"technology-item"},[i("span",[e._v("【前端】")]),e._v("HTML/HTML5   CSS/CSS3   JavaScript(ES6,ES5)   SASS   Stylus   Vue.JS   AJAX   jQuery   微信小程序   Babel\n                ")]),e._v(" "),i("div",{staticClass:"technology-item"},[i("span",[e._v("【后端】")]),e._v("Node.js (express)\n                ")]),e._v(" "),i("div",{staticClass:"technology-item"},[i("span",[e._v("【数据库】")]),e._v("MongoDB\n                ")]),e._v(" "),i("div",{staticClass:"technology-item"},[i("span",[e._v("【自动化构建】")]),e._v("Webpack\n                ")]),e._v(" "),i("div",{staticClass:"technology-item"},[i("span",[e._v("【版本管理】")]),e._v("git\n                ")])]),e._v(" "),i("div",{staticClass:"power-item"},[i("div",{staticClass:"title"},[i("i",{staticClass:"icon evaluation"}),e._v(" "),i("span",{staticClass:"name"},[e._v("个人评价")])]),e._v(" "),i("div",{staticClass:"myevaluation"},[e._v("本人是软件学院的学生，在校学习了多门编程语言，有良好的编程思想。除了学校课程\n                   以外自学能力较强，能独立思考，独立解决问题，也会经常逛技术社区，学习好的分享技术.技术发展太快，我会以更开发的心态去接受新技术，不断扩展自己。我相信自己可以做好本职工作。我相信自己可以很快的融入公司的技术团队。\n                ")])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"sidebar"},[i("mycard")],1),e._v(" "),i("div",{staticClass:"main"},[i("router-view")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mycard"},[i("header",[i("img",{staticClass:"avatar",attrs:{src:e.user.img}})]),e._v(" "),i("div",{staticClass:"navbar",on:{click:e.clearSearch}},[i("router-link",{staticClass:"icon iconfont icon-msg",attrs:{to:"/chat"}}),e._v(" "),i("router-link",{staticClass:"icon iconfont icon-friend",attrs:{to:"/friend"}}),e._v(" "),i("router-link",{staticClass:"icon iconfont icon-collection",attrs:{to:"/my"}})],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("i",{staticClass:"icon iconfont icon-more"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text"},[i("div",{staticClass:"emoji"},[i("i",{staticClass:"icon iconfont icon-look",on:{click:function(t){e.showEmoji=!e.showEmoji}}}),e._v(" "),i("transition",{attrs:{name:"showbox"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showEmoji,expression:"showEmoji"}],staticClass:"emojiBox"},e._l(e.emojis,function(t,s){return i("li",[i("img",{attrs:{src:"static/emoji/"+t.file,data:t.code},on:{click:function(i){e.content+=t.code}}})])}))])],1),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],ref:"text",domProps:{value:e.content},on:{keyup:e.onKeyup,click:function(t){e.showEmoji=!1},input:function(t){t.target.composing||(e.content=t.target.value)}}}),e._v(" "),i("div",{staticClass:"send",on:{click:e.send}},[i("span",[e._v("发送(ent)")])]),e._v(" "),i("transition",{attrs:{name:"appear"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.warn,expression:"warn"}],staticClass:"warn"},[i("div",{staticClass:"description"},[e._v("不能发送空白信息")])])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("div",{staticClass:"friend-wrapper"},[i("search"),e._v(" "),i("friendlist")],1),e._v(" "),i("div",{staticClass:"friendinfo"},[i("info")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"msglist"},[i("ul",e._l(e.searchedChatlist,function(t){return i("li",{staticClass:"sessionlist",class:{active:t.id===e.selectId},on:{click:function(i){e.selectSession(t.id)}}},[i("div",{staticClass:"list-left"},[i("img",{staticClass:"avatar",attrs:{width:"42",height:"42",alt:t.user.name,src:t.user.img}})]),e._v(" "),i("div",{staticClass:"list-right"},[i("p",{staticClass:"name"},[e._v(e._s(t.user.name))]),e._v(" "),i("span",{staticClass:"time"},[e._v(e._s(e._f("time")(t.messages[t.messages.length-1].date)))]),e._v(" "),i("p",{staticClass:"lastmsg"},[e._v(e._s(t.messages[t.messages.length-1].content))])])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Info-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.selectedFriend.id,expression:"selectedFriend.id === 0"}],staticClass:"newfriend"},[i("div",{staticClass:"nickname"},[e._v(e._s(e.selectedFriend.nickname))])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedFriend.id>0,expression:"selectedFriend.id > 0"}],staticClass:"friendInfo"},[i("div",{staticClass:"esInfo"},[i("div",{staticClass:"left"},[i("div",{staticClass:"people"},[i("div",{staticClass:"nickname"},[e._v(e._s(e.selectedFriend.nickname))]),e._v(" "),i("div",{class:[1===e.selectedFriend.sex?"gender-male":"gender-female"]})]),e._v(" "),i("div",{staticClass:"signature"},[e._v(e._s(e.selectedFriend.signature))])]),e._v(" "),i("div",{staticClass:"right"},[i("img",{staticClass:"avatar",attrs:{width:"60",height:"60",src:e.selectedFriend.img}})])]),e._v(" "),i("div",{staticClass:"detInfo"},[i("div",{staticClass:"remark"},[i("span",[e._v("备   注")]),e._v(e._s(e.selectedFriend.remark))]),e._v(" "),i("div",{staticClass:"area"},[i("span",[e._v("地   区")]),e._v(e._s(e.selectedFriend.area))]),e._v(" "),i("div",{staticClass:"wxid"},[i("span",[e._v("微信号")]),e._v(e._s(e.selectedFriend.wxid))])]),e._v(" "),i("div",{staticClass:"send",on:{click:e.send}},[i("span",[e._v("发消息")])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("div",{staticClass:"msglist"},[i("search"),e._v(" "),i("chatlist")],1),e._v(" "),i("div",{staticClass:"chatbox"},[i("message"),e._v(" "),i("v-text")],1)])},staticRenderFns:[]}},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(48),n=i.n(s);i(2);t.default={components:{mycard:n.a},created:function(){this.$store.dispatch("initData")}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=i.n(s),a=i(2);t.default={computed:n()({},i.i(a.a)(["selectId","searchText"]),i.i(a.c)(["searchedChatlist"])),methods:n()({},i.i(a.d)(["selectSession"])),filters:{time:function(e){return"string"==typeof e&&(e=new Date(e)),e.getMinutes()<10?e.getHours()+":0"+e.getMinutes():e.getHours()+":"+e.getMinutes()}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=i.n(s),a=i(2);t.default={computed:n()({},i.i(a.a)(["selectFriendId","searchText"]),i.i(a.c)(["searchedFriendlist"])),methods:n()({},i.i(a.d)(["selectFriend"]))}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=i.n(s),a=(i(5),i(2));t.default={computed:n()({},i.i(a.c)(["selectedFriend"])),methods:{send:function(){this.$store.dispatch("send"),this.$store.dispatch("search","")}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=i.n(s),a=i(2);t.default={computed:n()({},i.i(a.c)(["selectedChat","messages"]),i.i(a.a)(["user","emojis"])),mounted:function(){var e=this;setTimeout(function(){return e.$refs.list.scrollTop=e.$refs.list.scrollHeight},0)},watch:{messages:function(){var e=this;setTimeout(function(){return e.$refs.list.scrollTop=e.$refs.list.scrollHeight},0)}},methods:{replaceFace:function(e){if(e.includes("/:")){for(var t=this.emojis,i=0;i<t.length;i++)e=e.replace(t[i].reg,'<img src="static/emoji/'+t[i].file+'"  alt="" style="vertical-align: middle; width: 24px; height: 24px" />');return e}return e}},filters:{time:function(e){return"string"==typeof e&&(e=new Date(e)),e.getMinutes()<10?e.getHours()+":0"+e.getMinutes():e.getHours()+":"+e.getMinutes()}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=i.n(s),a=i(2);t.default={computed:n()({},i.i(a.a)(["user"])),methods:{clearSearch:function(){this.$store.dispatch("search","")}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{change:function(){this.$store.dispatch("search",this.search)},del:function(){this.search="",this.change()}},data:function(){return{search:"",active:!1}},computed:{noText:function(){return""===this.search},haveText:function(){return""!==this.search}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),n=i.n(s),a=i(2);t.default={data:function(){return{content:"",reply:"未找到",frequency:0,warn:!1,showEmoji:!1}},computed:n()({},i.i(a.a)(["selectId","emojis"]),i.i(a.c)(["selectedChat"])),methods:{onKeyup:function(e){13===e.keyCode&&this.send()},send:function(){var e=this;if(this.content.length<=1)this.warn=!0,this.content="",setTimeout(function(){e.warn=!1},1e3);else if("机器人"===this.selectedChat.user.name)this.$http.get("https://zhaoplus.com/api/AI?search="+this.content).then(function(t){e.reply=t.data.result.text,e.content.includes("/:")&&(e.reply="嘻嘻");var i={content:e.content,reply:e.reply};e.$store.dispatch("sendMessage",i),e.content=""});else{var t={content:this.content};this.$store.dispatch("sendMessage",t),this.content=""}}},mounted:function(){this.$refs.text.focus()},watch:{selectId:function(){var e=this;setTimeout(function(){e.$refs.text.focus()},0)},content:function(){var e=this;""===this.content&&0===this.frequency&&(this.warn=!0,this.frequency++,setTimeout(function(){e.warn=!1},1e3))}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(17),n=i.n(s),a=i(44),c=i.n(a),r=i(47),o=i.n(r),l=i(49),d=i.n(l);t.default={components:{search:n.a,chatlist:c.a,message:o.a,vText:d.a}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(17),n=i.n(s),a=i(45),c=i.n(a),r=i(46),o=i.n(r);t.default={components:{search:n.a,friendlist:c.a,info:o.a}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(4),n=i(23),a=i.n(n),c=i(5),r=i(22),o=i.n(r),l=i(24);s.a.config.productionTip=!1,s.a.prototype.$http=o.a;new s.a({el:"#app",router:c.a,store:l.a,template:"<App/>",components:{App:a.a}})}],[119]);
//# sourceMappingURL=app.86cf114dfa7e95a29c7f.js.map