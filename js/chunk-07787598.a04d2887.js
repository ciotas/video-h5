(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07787598"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function a(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||a(t)||s()}},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,p,g=i(t),h="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,y=void 0!==b,m=u(g),S=0;if(y&&(b=n(b,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&a(m))for(e=s(g.length),r=new h(e);e>S;S++)p=y?b(g[S],S):g[S],c(r,S,p);else for(l=m.call(g),d=l.next,r=new h;!(f=d.call(l)).done;S++)p=y?o(l,b,[f.value,S],!0):f.value,c(r,S,p);return r.length=S,r}},"5a16":function(t,e,r){"use strict";var n=r("703d"),i=r.n(n);i.a},"703d":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},9669:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"distributionRecord"}},[r("van-overlay",{staticClass:"loadBox",attrs:{show:t.load,"z-index":1e4,"lock-scroll":!0}},[t.load?r("van-loading",{staticClass:"load",attrs:{type:"spinner",color:"#1989fa",vertical:!0}}):t._e()],1),r("div",{staticClass:"content"},[r("header",[t._v(" 累计收益：￥ "),t.totalLoad?r("van-loading",{attrs:{type:"spinner",color:"#c9c9c9",size:"18"}}):r("span",[t._v(t._s(t.total_income))])],1),r("van-pull-refresh",{attrs:{"success-text":t.successMessage,disabled:t.disablePullRefresh},on:{refresh:t.pullRefresh},model:{value:t.pullLoading,callback:function(e){t.pullLoading=e},expression:"pullLoading"}},[r("van-list",{attrs:{"immediate-check":!1,finished:t.finished,"finished-text":"没有更多了",error:t.pushError,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(e){t.pushError=e}},model:{value:t.pushLoading,callback:function(e){t.pushLoading=e},expression:"pushLoading"}},[r("div",{staticClass:"distributionList"},t._l(t.dataList,(function(e,n){return r("div",{key:n,staticClass:"distributionBox"},[r("p",[r("span",[t._v("订单编号")]),r("span",[t._v(t._s(e.no))])]),r("p",[r("span",[t._v("订单时间")]),r("span",[t._v(t._s(t._f("submitTimeFormatType")(e.paid_at)))])]),r("p",[r("span",[t._v("商品")]),r("span",[t._v("《"+t._s(e.program.name)+"》")])]),r("p",[r("span",[t._v("订购人")]),r("span",[t._v(t._s(e.extra.from_user_name))])]),r("p",[r("span",[t._v("成单价格")]),r("span",[t._v("￥"+t._s(e.amount))])]),r("p",[r("span",[t._v("邀请奖励")]),r("span",[t._v("50%（￥50.00）")])])])})),0)])],1)],1)],1)},i=[],o=r("2909"),a=r("0a14"),s={data:function(){return{pullLoading:!1,disablePullRefresh:!1,getDataFlag:!0,pushLoading:!1,finished:!1,dataList:[],page:1,pushError:!1,successMessage:"",load:!1,total_income:"",totalLoad:!0}},created:function(){this.load=!0,this.getData(),this.$shareConfig()},methods:{getData:function(t){var e=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.getDataFlag){this.getDataFlag=!1,this.disablePullRefresh=!0;r&&(this.totalLoad=!0),Object(a["m"])().then((function(t){var n;console.log(t),r&&(e.dataList=[]),(n=e.dataList).push.apply(n,Object(o["a"])(t.orders.data)),e.page=t.orders.current_page,e.total_income=t.total_income,e.getDataFlag=!0,r?(e.successMessage="刷新成功",e.pullLoading=!1,e.disablePullRefresh=!1,e.totalLoad=!1):e.pushLoading=!1,t.orders.current_page>=t.orders.last_page&&(e.finished=!0),e.load=!1})).catch((function(t){console.log(t),e.getDataFlag=!0,e.load=!1,e.totalLoad=!1,r?(e.successMessage="刷新失败，请重新刷新",e.pullLoading=!1,e.disablePullRefresh=!1):(e.pushLoading=!1,e.pushError=!0)}))}},pullRefresh:function(){this.getData()},onLoad:function(){this.page=this.page+1,this.getData(this.page,!1)}}},c=s,u=(r("5a16"),r("2877")),f=Object(u["a"])(c,n,i,!1,null,"55f603d8",null);e["default"]=f.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),g=r("825a"),h=r("7b0b"),v=r("fc6a"),b=r("c04e"),y=r("5c6c"),m=r("7c73"),S=r("df75"),L=r("241c"),_=r("057f"),w=r("7418"),O=r("06cf"),x=r("9bf2"),A=r("d1e7"),P=r("9112"),T=r("6eeb"),j=r("5692"),C=r("f772"),M=r("d012"),D=r("90e3"),k=r("b622"),E=r("e538"),R=r("746f"),F=r("d44e"),N=r("69f3"),V=r("b727").forEach,G=C("hidden"),I="Symbol",$="prototype",H=k("toPrimitive"),J=N.set,B=N.getterFor(I),z=Object[$],q=i.Symbol,Q=o("JSON","stringify"),U=O.f,W=x.f,K=_.f,X=A.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),rt=j("wks"),nt=i.QObject,it=!nt||!nt[$]||!nt[$].findChild,ot=s&&f((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=U(z,e);n&&delete z[e],W(t,e,r),n&&t!==z&&W(z,e,n)}:W,at=function(t,e){var r=Y[t]=m(q[$]);return J(r,{type:I,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,r){t===z&&ct(Z,e,r),g(t);var n=b(e,!0);return g(r),l(Y,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,G)||W(t,G,y(1,{})),t[G][n]=!0),ot(t,n,r)):W(t,n,r)},ut=function(t,e){g(t);var r=v(e),n=S(r).concat(gt(r));return V(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=b(t,!0),r=X.call(this,e);return!(this===z&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,G)&&this[G][e])||r)},dt=function(t,e){var r=v(t),n=b(e,!0);if(r!==z||!l(Y,n)||l(Z,n)){var i=U(r,n);return!i||!l(Y,n)||l(r,G)&&r[G][n]||(i.enumerable=!0),i}},pt=function(t){var e=K(v(t)),r=[];return V(e,(function(t){l(Y,t)||l(M,t)||r.push(t)})),r},gt=function(t){var e=t===z,r=K(e?Z:v(t)),n=[];return V(r,(function(t){!l(Y,t)||e&&!l(z,t)||n.push(Y[t])})),n};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===z&&r.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(z,e,{configurable:!0,set:r}),at(e,t)},T(q[$],"toString",(function(){return B(this).tag})),T(q,"withoutSetter",(function(t){return at(D(t),t)})),A.f=lt,x.f=ct,O.f=dt,L.f=_.f=pt,w.f=gt,E.f=function(t){return at(k(t),t)},s&&(W(q[$],"description",{configurable:!0,get:function(){return B(this).description}}),a||T(z,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),V(S(rt),(function(t){R(t)})),n({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),Q){var ht=!c||f((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,Q.apply(null,i)}})}q[$][H]||P(q[$],H,q[$].valueOf),F(q,I),M[G]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),f=o.values;for(var l in i){var d=n[l],p=d&&d.prototype;if(p){if(p[c]!==f)try{a(p,c,f)}catch(h){p[c]=f}if(p[u]||a(p,u,l),i[l])for(var g in o)if(p[g]!==o[g])try{a(p,g,o[g])}catch(h){p[g]=o[g]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var g=p.toString,h="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=g.call(t);if(a(l,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),g=d("slice",{ACCESSORS:!0,0:0,1:2}),h=f("species"),v=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),p=a(t,d),g=a(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,p,g);for(n=new(void 0===r?Array:r)(b(g-p,0)),f=0;p<g;p++,f++)p in l&&u(n,f,l[p]);return n.length=f,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-07787598.a04d2887.js.map