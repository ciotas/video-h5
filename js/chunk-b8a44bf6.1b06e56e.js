(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8a44bf6"],{1e3:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"detail"}},[e("van-overlay",{staticClass:"loadBox",attrs:{show:t.load,"z-index":1e4,"lock-scroll":!0}},[t.load?e("van-loading",{staticClass:"load",attrs:{type:"spinner",color:"#1989fa",vertical:!0}}):t._e()],1),e("div",{staticClass:"content"},[e("div",{staticClass:"imgBox"},[e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3}},t._l(t.data.acImages,(function(t,o){return e("van-swipe-item",{key:o},[e("img",{attrs:{src:t,alt:""}})])})),1)],1),e("div",{staticClass:"videoBaseInfo"},[e("div",{staticClass:"videoTitle"},[e("p",{staticClass:"videoName"},[t._v(t._s(t.data.name))]),e("p",{staticClass:"videoSort"},t._l(t.data.tags,(function(o,s){return e("span",{key:s},[0!==s?e("span",[t._v("/")]):t._e(),t._v(" "+t._s(o)+" ")])})),0)]),e("div",{staticClass:"videoBrief"},[e("div",{class:{shrink:t.showToggleBtn&&t.showVideoBrief}},[e("div",{ref:"videoBriefText",staticClass:"videoBriefText",domProps:{innerHTML:t._s(t.introduction)}}),t.showToggleBtn&&t.showVideoBrief?e("div",{staticClass:"ellipsis"},[t._v("...")]):t._e()]),t.showToggleBtn?e("p",{staticClass:"changeBrief",on:{click:t.changeBrief}},[t._v(t._s(t.showVideoBrief?"展开":"收起"))]):t._e()]),e("div",{staticClass:"videoCom"},[e("div",{staticClass:"comLogo"},[e("img",{attrs:{src:t.data.logo,alt:""}})]),e("p",[t._v(t._s(t.data.studio_name))])]),e("div",{staticClass:"videoDetail",domProps:{innerHTML:t._s(t.data.intro)}}),e("div",{staticClass:"videoBuy"},[e("div",{staticClass:"toUser",on:{click:t.toUser}},[e("i",{staticClass:"iconfont icon-wode"}),e("span",[t._v("个人中心")])]),e("div",{staticClass:"buyBtn",on:{click:t.WXPay}},[t._v(" 抢购价￥ "),e("span",[t._v(t._s(t._f("moneyFormatType")(t.data.price,t.data.price)))])])]),e("div",{staticClass:"shareBtn",on:{click:t.toShare}},[t._v(" 分享赚￥ "),e("span",[t._v(t._s(t._f("moneyFormatType")(t.data.price*t.data.rate/100,t.data.price*t.data.rate/100)))])])])])],1)},i=[],a=(e("ac1f"),e("5319"),e("841c"),e("1276"),e("0a14")),n={data:function(){return{introduction:"",showToggleBtn:!1,showVideoBrief:!0,load:!1,getDataFlag:!0,data:{}}},created:function(){var t=this,o=this.getUrlParam("ac_id"),e=this.getUrlParam("from_user_id");console.log(o),console.log(e),o&&e&&this.$store.commit("setDistributionInfo",{ac_id:o,from_user_id:e}),console.log(this.$store),this.$store.state.distributionInfo.ac_id&&this.$store.state.distributionInfo.from_user_id?this.getData():this.$router.push("/errorPage");var s={jsapis:"onMenuShareTimeline,onMenuShareAppMessage,onMenuShareQQ,onMenuShareWeibo",url:window.location.href.replace(window.location.hash,"")};console.log(s),Object(a["g"])(s).then((function(o){console.log(o),t.$store.commit("setWXConfig",o),t.$shareConfig()}))},methods:{getUrlParam:function(t){console.log(window.location);for(var o=window.location.search.substr(1).split("&"),e=0;e<o.length;e++)if(o[e].split("=")[0]==t)return o[e].split("=")[1];return!1},getData:function(){var t=this;if(this.load=!0,this.getDataFlag){this.getDataFlag=!1;var o={ac_id:this.$store.state.distributionInfo.ac_id,user_id:this.$store.state.WXUserInfo.id?this.$store.state.WXUserInfo.id:""};Object(a["c"])(o).then((function(o){console.log(o),t.data=o,t.introduction=o.introduction,t.load=!1,t.getDataFlag=!0}))}},WXPay:function(){var t=this;if(this.$store.state.WXUserInfo.id&&this.$store.state.appUserInfo.token){var o={jsapis:"chooseWXPay",url:window.location.href.replace(window.location.hash,"")};console.log(o),Object(a["g"])(o).then((function(o){console.log(o),t.$store.commit("setWXConfig",o);var e={ac_id:t.$store.state.distributionInfo.ac_id,from_user_id:t.$store.state.WXUserInfo.id,user_id:t.$store.state.WXUserInfo.id,openid:t.$store.state.WXUserInfo.open_id};Object(a["h"])(e).then((function(o){console.log(o),t.$payConfig(o.timeStamp,o.nonceStr,o.package,o.signType,o.paySign,(function(){console.log("支付成功")}))}))}))}else this.$router.push("/login")},toUser:function(){this.$router.push({name:"personalCenter"})},toShare:function(){this.$router.push({name:"share"})},changeBrief:function(){this.showVideoBrief=!this.showVideoBrief}},watch:{introduction:function(){this.$nextTick((function(){var t=parseFloat(window.getComputedStyle(this.$refs.videoBriefText).height),o=parseFloat(window.getComputedStyle(this.$refs.videoBriefText).lineHeight);console.log(t,o),t>3*o?(console.log(1),this.showToggleBtn=!0):(console.log(2),this.showToggleBtn=!1)}))}}},r=n,c=(e("b400"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,"21de7f2b",null);o["default"]=l.exports},"33c0":function(t,o,e){},b400:function(t,o,e){"use strict";var s=e("33c0"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-b8a44bf6.1b06e56e.js.map