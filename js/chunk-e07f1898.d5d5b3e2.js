(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e07f1898"],{1e3:function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{attrs:{id:"detail"}},[s("van-overlay",{staticClass:"loadBox",attrs:{show:t.load,"z-index":1e4,"lock-scroll":!0}},[t.load?s("van-loading",{staticClass:"load",attrs:{type:"spinner",color:"#1989fa",vertical:!0}}):t._e()],1),s("div",{staticClass:"content"},[s("div",{staticClass:"imgBox"},[s("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3}},t._l(t.data.acImages,(function(t,o){return s("van-swipe-item",{key:o},[s("img",{attrs:{src:t,alt:""}})])})),1)],1),s("div",{staticClass:"videoBaseInfo"},[s("div",{staticClass:"videoTitle"},[s("p",{staticClass:"videoName"},[t._v(t._s(t.data.name))]),s("p",{staticClass:"videoSort"},t._l(t.data.tags,(function(o,e){return s("span",{key:e},[0!==e?s("span",[t._v("/")]):t._e(),t._v(" "+t._s(o)+" ")])})),0)]),s("div",{staticClass:"videoBrief"},[s("div",{class:{shrink:t.showToggleBtn&&t.showVideoBrief}},[s("div",{ref:"videoBriefText",staticClass:"videoBriefText",domProps:{innerHTML:t._s(t.introduction)}}),t.showToggleBtn&&t.showVideoBrief?s("div",{staticClass:"ellipsis"},[t._v("...")]):t._e()]),t.showToggleBtn?s("p",{staticClass:"changeBrief",on:{click:t.changeBrief}},[t._v(t._s(t.showVideoBrief?"展开":"收起"))]):t._e()]),s("div",{staticClass:"videoCom"},[s("div",{staticClass:"comLogo"},[s("img",{attrs:{src:t.data.logo,alt:""}})]),s("p",[t._v(t._s(t.data.studio_name))])]),s("div",{staticClass:"videoDetail",domProps:{innerHTML:t._s(t.data.intro)}}),s("div",{staticClass:"videoBuy"},[s("div",{staticClass:"toUser",on:{click:t.toUser}},[s("i",{staticClass:"iconfont icon-wode"}),s("span",[t._v("个人中心")])]),s("div",{staticClass:"buyBtn",on:{click:t.WXPay}},[t._v(" 抢购价￥ "),s("span",[t._v(t._s(t.data.price))])])]),s("div",{staticClass:"shareBtn",on:{click:t.toShare}},[t._v(" 分享赚￥ "),s("span",[t._v(t._s(t.data.price*t.data.rate/100))])])])])],1)},i=[],a=(s("ac1f"),s("5319"),s("841c"),s("1276"),s("0a14")),n={data:function(){return{introduction:"",showToggleBtn:!1,showVideoBrief:!0,load:!1,getDataFlag:!0,data:{}}},created:function(){var t=this,o=this.getUrlParam("ac_id"),s=this.getUrlParam("from_user_id");console.log(o),console.log(s),o&&s&&this.$store.commit("setDistributionInfo",{ac_id:o,from_user_id:s}),console.log(this.$store),this.$store.state.distributionInfo.ac_id&&this.$store.state.distributionInfo.from_user_id?this.getData():this.$router.push("/errorPage");var e={jsapis:"onMenuShareTimeline,onMenuShareAppMessage,onMenuShareQQ,onMenuShareWeibo",url:window.location.href.replace(window.location.hash,"")};console.log(e),Object(a["g"])(e).then((function(o){console.log(o),t.$store.commit("setWXConfig",o),t.$shareConfig()}))},methods:{getUrlParam:function(t){console.log(window.location);for(var o=window.location.search.substr(1).split("&"),s=0;s<o.length;s++)if(o[s].split("=")[0]==t)return o[s].split("=")[1];return!1},getData:function(){var t=this;if(this.load=!0,this.getDataFlag){this.getDataFlag=!1;var o={ac_id:this.$store.state.distributionInfo.ac_id,user_id:this.$store.state.WXUserInfo.id?this.$store.state.WXUserInfo.id:""};Object(a["c"])(o).then((function(o){console.log(o),t.data=o,t.introduction=o.introduction,t.load=!1,t.getDataFlag=!0}))}},WXPay:function(){var t=this;if(this.$store.state.WXUserInfo.id&&this.$store.state.appUserInfo.token){var o={jsapis:"chooseWXPay",url:window.location.href.replace(window.location.hash,"")};console.log(o),Object(a["g"])(o).then((function(o){console.log(o),t.$store.commit("setWXConfig",o);var s={ac_id:t.$store.state.distributionInfo.ac_id,from_user_id:t.$store.state.WXUserInfo.id,user_id:t.$store.state.WXUserInfo.id,openid:t.$store.state.WXUserInfo.open_id};Object(a["h"])(s).then((function(o){console.log(o),t.$payConfig(o.timeStamp,o.nonceStr,o.package,o.signType,o.paySign,(function(){console.log("支付成功")}))}))}))}else this.$router.push("/login")},toUser:function(){this.$router.push({name:"personalCenter"})},toShare:function(){this.$router.push({name:"share"})},changeBrief:function(){this.showVideoBrief=!this.showVideoBrief}},watch:{introduction:function(){this.$nextTick((function(){var t=parseFloat(window.getComputedStyle(this.$refs.videoBriefText).height),o=parseFloat(window.getComputedStyle(this.$refs.videoBriefText).lineHeight);console.log(t,o),t>3*o?(console.log(1),this.showToggleBtn=!0):(console.log(2),this.showToggleBtn=!1)}))}}},r=n,c=(s("e076"),s("2877")),l=Object(c["a"])(r,e,i,!1,null,"649476e5",null);o["default"]=l.exports},"38d3":function(t,o,s){},e076:function(t,o,s){"use strict";var e=s("38d3"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-e07f1898.d5d5b3e2.js.map