(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb88f178"],{8012:function(e,t,o){},c710:function(e,t,o){"use strict";var a=o("8012"),s=o.n(a);s.a},dd7b:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login"}},[o("header",[e._v("验证手机号")]),o("van-form",{ref:"formRef",staticClass:"formBox",on:{submit:e.login}},[o("van-cell-group",{staticClass:"formCell telBox"},[o("van-field",{attrs:{placeholder:"请输入手机号",rules:e.formRule.tel,error:!1,name:"tel",type:"number"},model:{value:e.formData.tel,callback:function(t){e.$set(e.formData,"tel",t)},expression:"formData.tel"}})],1),o("van-cell-group",{staticClass:"formCell codeBox"},[o("van-field",{attrs:{placeholder:"请输入验证码",rules:e.formRule.code,error:!1,name:"code",type:"number",maxlength:4},scopedSlots:e._u([{key:"button",fn:function(){return[o("van-button",{staticClass:"getCodeBtn",class:{notClick:!e.getCodeFlag},attrs:{round:"",block:"",type:"info","native-type":"button",disabled:!e.getCodeFlag},on:{click:e.getCode}},[e.intervalFlag?o("span",[e._v("("+e._s(e.times)+")")]):e._e(),e._v(" 获取验证码 ")])]},proxy:!0}]),model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),o("van-cell-group",{staticClass:"formCell submitBox"},[o("van-button",{staticClass:"submitBtn",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("确定")])],1)],1)],1)},s=[],n=o("0a14"),i={data:function(){var e=function(e,t){var o=/^\d+$|^\d+[.]?\d+$/;return o.test(e)&&4==e.length};return{getCodeFlag:!0,loginFlag:!0,intervalFlag:!1,times:60,formData:{tel:"",code:"",codeKey:""},formRule:{tel:[{required:!0,message:"手机号不可为空",trigger:"onChange"},{pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,message:"请输入正确格式的手机号",trigger:"onChange"}],code:[{required:!0,message:"验证码不可为空",trigger:"onChange"},{validator:e,message:"验证码为长度为4的数字",trigger:"onChange"}]}}},created:function(){},methods:{getCode:function(){var e=this;this.$refs.formRef.validate("tel").then((function(t){if(e.getCodeFlag){e.getCodeFlag=!1;var o={mobile:e.formData.tel};Object(n["f"])(o).then((function(t){if(e.$toast({position:"top",message:"发送验证码成功!"}),1e3==t.code){e.times=60,e.intervalFlag=!0;var o=e,a=setInterval((function(){o.times<=0&&(o.getCodeFlag=!0,o.intervalFlag=!1,clearInterval(a)),o.times--}),1e3);e.formData.codeKey=t.key}else e.$toast({position:"top",message:t.message})}))}})).catch((function(e){console.log(e)}))},login:function(e){var t=this;if(this.formData.codeKey){if(!this.loginFlag)return;this.loginFlag=!1;var o={mobile:this.formData.tel,user_id:this.$store.state.WXUserInfo.id,verification_key:this.formData.codeKey,verification_code:this.formData.code,openid:this.$store.state.WXUserInfo.open_id};Object(n["b"])(o).then((function(e){t.loginFlag=!0,"success"==e.status?(t.$toast({position:"top",message:"登录成功"}),t.$store.commit("setAppUserInfo",{token:e.token,expired_at:e.expired_at}),t.$store.commit("setId",e.data.id),t.$router.push("/detail")):t.$toast({position:"top",message:e.message})}))}else this.$toast({position:"top",message:"请先获取验证码"})}}},r=i,l=(o("c710"),o("2877")),c=Object(l["a"])(r,a,s,!1,null,"52c03095",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-cb88f178.74c1ec46.js.map