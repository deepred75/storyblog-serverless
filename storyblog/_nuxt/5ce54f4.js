(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6],{487:function(t,e,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("1b483374",content,!0,{sourceMap:!1})},488:function(t,e,r){"use strict";r(487)},489:function(t,e,r){var n=r(30)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.card-title[data-v-2606d6bf]{\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n  width:webkit-fit-content;\n  width:intrinsic\n}\n.limit-lines[data-v-2606d6bf]{\n  display:-webkit-box;\n  -webkit-box-orient:vertical;\n  box-orient:vertical;\n  overflow:hidden\n}\n.limit-lines.l-1[data-v-2606d6bf]{\n  -webkit-line-clamp:1\n}\n.limit-lines.l-2[data-v-2606d6bf]{\n  -webkit-line-clamp:2\n}\n.limit-lines.l-3[data-v-2606d6bf]{\n  -webkit-line-clamp:3\n}\n.author:hover span[data-v-2606d6bf]{\n  --tw-translate-x:0.25rem\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},490:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(1);r(28),r(106),r(53),r(68),r(42),r(23),r(38),r(54),r(24),r(55);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{likeLoading:!1,user:this.userP,post:this.postP}},methods:{likePost:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.authUser){e.next=19;break}if(t.likeLoading){e.next=16;break}if(t.likeLoading=!0,r={ownerId:t.user.uid,slug:t.post.slug,uid:t.authUser.uid},!t.hasAlreadyLiked){e.next=10;break}return e.next=7,t.$store.dispatch("post/dislikePost",r);case 7:t.post.likes.splice(t.post.likes.indexOf(t.authUser.uid),1),e.next=13;break;case 10:return e.next=12,t.$store.dispatch("post/likePost",r);case 12:t.post.likes.push(t.authUser.uid);case 13:t.likeLoading=!1,e.next=17;break;case 16:t.$message.warning("Slow Down !!!");case 17:e.next=20;break;case 19:t.$message.warning("You have to login to like a post.");case 20:case"end":return e.stop()}}),e)})))()}},computed:{hasAlreadyLiked:function(){var t=!1;return this.authUser&&(t=this.post.likes.includes(this.authUser.uid)),t},authUser:function(){return this.$store.getters["user/getUser"]}},props:{userP:Object,postP:Object,showAuthor:Boolean},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("comment/fetchCommentCount",{postOwnerId:t.userP.uid,slug:t.postP.slug});case 2:r=e.sent,t.post=c(c({},t.postP),{},{commentCount:r});case 4:case"end":return e.stop()}}),e)})))()}},f=(r(488),r(29)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{clasS:"flex flex-col mt-4 mb-12 ml-4"}},[n("div",{staticClass:"w-full flex "},[n("div",{staticClass:"flex-1 flex flex-col pr-8"},[t.showAuthor?n("NuxtLink",{staticClass:"mb-1 author flex w-max items-center space-x-2",attrs:{to:"/"+t.user.username,title:"@"+t.user.username}},[n("img",{staticClass:"rounded-full shadow h-7 w-7 overflow-hidden",attrs:{src:t.user.photoURL||r(276),alt:t.user.displayName}}),t._v(" "),n("span",{staticClass:"text-xs font-semibold text-gray-700 transition duration-300 transform"},[t._v(t._s(t.user.displayName)+" ")])]):t._e(),t._v(" "),n("NuxtLink",{staticClass:"card-title capitalize transition duration-300 transform hover:translate-x-1 hover:text-gray-500 limit-lines l-1 font-bold mb-2",staticStyle:{"letter-spacing":"-1px"},attrs:{title:t.post.title,to:"/"+t.user.username+"/"+t.post.slug}},[n("h3",[t._v(t._s(t.post.title))])]),t._v(" "),n("p",{staticClass:"limit-lines",class:{"l-2":t.showAuthor,"l-3":!t.showAuthor},staticStyle:{"font-size":"15px"}},[t._v(t._s(t.post.description))])],1),t._v(" "),n("NuxtLink",{staticClass:"w-48 h-32 shadow rounded-md overflow-hidden",attrs:{title:t.post.title,to:"/"+t.user.username+"/"+t.post.slug}},[n("div",{staticClass:"postImageAnimation w-full h-full bg-cover",style:"background-image: url("+t.post.postImageURL+")"})])],1),t._v(" "),n("div",{staticClass:"flex mt-2"},[n("ul",{staticClass:"flex space-x-2 items-center flex-1 pr-8"},t._l(t.post.tags,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{staticClass:"tag",attrs:{to:"/tag/"+e.slug}},[t._v(t._s(e.name))])],1)})),0),t._v(" "),n("div",{staticClass:"w-50 flex space-x-1 items-center text-sm text-gray-600 px-1"},[n("div",{staticClass:"flex justify-end flex-1 items-center space-x-1",class:{"text-red-700":t.hasAlreadyLiked}},[t.likeLoading?n("Loading"):n("span",[t._v(t._s(t.post.likes.length))]),n("span",{staticClass:"text-xl p-2 rounded-full cursor-pointer transition duration-300 hover:bg-red-50 hover:text-red-700 isax-heart",class:{"bg-red-50":t.hasAlreadyLiked},on:{click:function(e){return t.likePost()}}})],1),t._v(" "),n("NuxtLink",{staticClass:"flex justify-end flex-1 items-center space-x-1 space-x-reverse flex-row-reverse",attrs:{to:"/"+t.user.username+"/"+t.post.slug+"#comments"}},[n("span",[t._v(t._s(t.post.commentCount))]),n("span",{staticClass:"text-xl p-2 rounded-full cursor-pointer transition duration-300 hover:bg-blue-50 hover:text-blue-700 isax-messages-3"})])],1)])])}),[],!1,null,"2606d6bf",null);e.default=component.exports;installComponents(component,{Loading:r(275).default})},491:function(t,e,r){"use strict";var n=r(20),o=r(8),l=r(138),c=r(32),d=r(22),f=r(278),h=r(137),m=r(277),v=r(9),x=r(107).f,w=r(57).f,k=r(33).f,y=r(492),_=r(280).trim,L="Number",O=o.Number,P=O.prototype,C=function(t){var e=m(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,n,o,l,c,d,code,f=m(t,"number");if(h(f))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(43===(e=(f=_(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(l(L,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var j,N=function(t){var e=arguments.length<1?0:O(C(t)),r=this;return r instanceof N&&v((function(){y(r)}))?f(Object(e),r,N):e},I=n?x(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;I.length>E;E++)d(O,j=I[E])&&!d(N,j)&&k(N,j,w(O,j));N.prototype=P,P.constructor=N,c(o,L,N)}},492:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},493:function(t,e,r){"use strict";r.r(e);var n=r(1),o=(r(28),r(42),r(56),r(491),{data:function(){return{timeOptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},endOfThePosts:!1,moreLoading:!1,users:this.usersP,posts:this.postsP}},methods:{getLocale:function(time){return new Date(time).toLocaleDateString("id-ID",this.timeOptions)},getDate:function(t){var e=this.getLocale(t.createdAt),r=this.getLocale(t.updatedAt),n="Published : ".concat(e);return t.createdAt!=t.updatedAt&&(n="Last Update: ".concat(r)),n},fetchMore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.moreLoading){e.next=15;break}return t.moreLoading=!0,r=t.uid?t.posts[t.posts.length-1].updatedAt:t.bookmarks?t.posts.length:t.posts[t.posts.length-1].createdAt,n={last:r,limit:t.limit,cacheUsers:Object.keys(t.users),followedList:t.followedList,tag:t.tag,uid:t.uid,bookmarks:t.bookmarks},e.next=6,t.$store.dispatch(t.moreDispatchPath,n);case 6:o=e.sent,l=o.posts,c=o.users,t.users=Object.assign(t.users,c),t.posts=t.posts.concat(l),l.length<t.limit&&(t.endOfThePosts=!0),t.moreLoading=!1,e.next=16;break;case 15:t.$message.warning("Slow Down !!!");case 16:case"end":return e.stop()}}),e)})))()}},props:{postsP:Array,usersP:Object,showAuthor:{type:Boolean,default:!0},moreDispatchPath:String,followedList:Array,tag:String,limit:Number,uid:String,bookmarks:Array}}),l=r(29),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-timeline",[t._l(t.posts,(function(e){return r("el-timeline-item",{key:e.slug,class:{updated:e.createdAt!=e.updatedAt},attrs:{timestamp:t.getDate(e),placement:"top"}},[r("PostCard",{attrs:{userP:t.users[e.uid],postP:e,showAuthor:t.showAuthor}})],1)})),t._v(" "),0!=t.posts.length?r("div",{staticClass:"flex flex-col items-center select-none font-semibold text-gray-400"},[t.moreLoading?r("div",{staticClass:"h-24 w-full flex items-center justify-center"},[r("Loading")],1):t._e(),t._v(" "),!t.endOfThePosts&&t.posts.length>=t.limit?r("el-button",{attrs:{type:"info",size:"medium",round:"",plain:""},on:{click:function(e){return t.fetchMore()}}},[t._v("See More")]):t.posts.length>=t.limit?r("div",{staticClass:"text-lg"},[t._v("You have reached the end!")]):t._e()],1):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostCard:r(490).default,Loading:r(275).default})},527:function(t,e,r){"use strict";r.r(e);var n=r(103),o=r(1),l=(r(28),{head:function(){return{title:"Your Feed"}},data:function(){return{limit:3}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.getters["user/getUser"];case 2:if(r=e.sent,0==(o=Object(n.a)(r.followed)).length){e.next=13;break}return e.next=7,t.store.dispatch("post/fetchFollowedUsersPosts",{followedList:o,cacheUsers:[],limit:3});case 7:return l=e.sent,c=l.posts,d=l.users,e.abrupt("return",{posts:c,users:d,followedList:o});case 13:return e.abrupt("return",{posts:[],users:{},followedList:o});case 14:case"end":return e.stop()}}),e)})))()}}),c=r(29),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-5"},[r("div",{staticClass:"w-3/3 mx-auto px-1"},[t._m(0),t._v(" "),r("hr",{staticClass:"my-8"}),t._v(" "),t.posts.length?r("ListPosts",{attrs:{usersP:t.users,postsP:t.posts,limit:t.limit,moreDispatchPath:"post/fetchFollowedUsersPostsMore",followedList:t.followedList}}):r("el-empty",{attrs:{description:"You are not following anyone or the ones you follow has not shared a post yet.","image-size":100}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"font-semibold relative"},[r("span",{staticClass:"absolute top-1/2 -left-4 transform -translate-y-1/2 -translate-x-full p-4 rounded-full isax-people text-pink-700 bg-pink-50"}),t._v("\n      Timeline\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ListPosts:r(493).default})}}]);