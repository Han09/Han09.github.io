(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec1830f6"],{"279c":function(t,e,s){},"573f":function(t,e,s){"use strict";var o=s("64f0"),i=s.n(o);i.a},"5e85":function(t,e,s){"use strict";var o=s("279c"),i=s.n(o);i.a},"64f0":function(t,e,s){},a3fd:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-list",{attrs:{finished:t.finished,"finished-text":"休息~休息一下"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e,o){return s("van-cell",{key:o},[s("div",{staticClass:"itemView"},[s("img",{staticClass:"userHeader",attrs:{src:e.header,onerror:"console.log('图片加载错误')",alt:"头像"}}),s("div",{staticClass:"contextView"},[s("p",{staticClass:"userName"},[t._v(t._s(e.name))]),s("p",{staticClass:"videoText"},[t._v(t._s(e.text))]),s("video",{ref:"videos",refInFor:!0,staticClass:"videoClass",attrs:{controls:"",poster:e.thumbnail},on:{touchend:function(e){return e.stopPropagation(),t.videoPlay(e)}}},[s("source",{attrs:{src:e.video}}),s("source",{attrs:{src:"https://www.sony.com.cn/newscenter/images/site-movie_710x400.mp4"}})]),s("videos-comment",{attrs:{comment:e.comment,up:e.up,down:e.down,sid:e.sid}})],1)])])}),1),s("div",{staticStyle:{height:"2.9rem"}})],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"commentView"},[s("span",{on:{click:t.getComment}},[t._v("💬 "+t._s(t.comment))]),s("span",{on:{click:t.Toasts}},[t._v("👍 "+t._s(t.up))]),s("span",{on:{click:t.Toasts}},[t._v("👎 "+t._s(t.down))]),t.ViewShow?s("div",{staticClass:"comments"},[s("p",{staticClass:"hotBar"},[t._v("当前热评：")]),t.onloading?s("van-loading",{staticStyle:{margin:"0 auto"},attrs:{type:"spinner",color:"red"}}):t._e(),t._l(t.hotComment,function(e,o){return t.hotComment.length>0?s("div",{key:o,staticClass:"commentsView"},[s("img",{staticClass:"userPhoto",attrs:{src:e.user.profile_image}}),s("div",{staticClass:"textView"},[s("p",{staticClass:"username"},[t._v(t._s(e.user.username))]),s("p",{staticClass:"commentsText"},[t._v(t._s(e.content))])])]):t._e()}),s("div",[t.errorShow?s("p",[t._v("抱歉 热评走丢啦~")]):t._e()])],2):t._e(),t.ViewShow?s("div",{on:{click:function(e){t.ViewShow=!t.ViewShow}}},[t._v("👁 收起")]):t._e()])},a=[],c={name:"VideosComment",props:{comment:String,up:String,down:String,sid:String},data:function(){return{hotComment:"",Comments:"",ViewShow:!1,onloading:!0,errorShow:!1}},methods:{getComment:function(){var t=this;this.ViewShow=!this.ViewShow,this.hotComment||this.$axios.get("https://www.apiopen.top/satinCommentApi?id="+this.sid+"&page=1").then(function(e){t.hotComment=e.data.data.hot.list,t.comments=e.data.data.normal.list,t.onloading=!1,0==t.hotComment.length&&(t.errorShow=!0)}).catch(function(t){console.log(t)})},Toasts:function(){this.$toast("暂无后续逻辑")}}},r=c,l=(s("5e85"),s("2877")),d=Object(l["a"])(r,n,a,!1,null,"3c2c2d28",null),m=d.exports,u={name:"Videos",components:{VideosComment:m},data:function(){return{list:[],loading:!1,finished:!1,page:0}},methods:{onLoad:function(){var t=this;this.page++,this.$axios.get("https://api.apiopen.top/getJoke?page="+this.page+"&count=10&type=video").then(function(e){t.list=t.list.concat(e.data.result),t.loading=!1,t.list.length>=t.$store.state.MaxLoadingValue&&(t.finished=!0),console.log(t.list)}).catch(function(t){console.log(t)})},videoPlay:function(){event.target.paused?(this.videoPause(),event.target.play()):event.target.pause()},videoPause:function(){for(var t=0;t<this.$refs.videos.length;t++)this.$refs.videos[t].pause()},scroll:function(){for(var t=0;t<this.$refs.videos.length;t++)this.$refs.videos[t].getBoundingClientRect().y<-.8*this.$refs.videos[t].clientHeight&&this.$refs.videos[t].pause()}},mounted:function(){window.addEventListener("scroll",this.scroll),this.$store.commit("RemoveKEEPList","Videos"),sessionStorage.setItem("STATE",JSON.stringify(this.$store.state))}},h=u,v=(s("573f"),Object(l["a"])(h,o,i,!1,null,"30fcb878",null));e["default"]=v.exports}}]);