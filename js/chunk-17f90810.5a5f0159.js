(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17f90810"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function a(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||a(t)||s()}},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),f=r("35a1");t.exports=function(t){var e,r,u,l,d,p,g=i(t),h="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,y=void 0!==b,m=f(g),S=0;if(y&&(b=n(b,v>2?arguments[2]:void 0,2)),void 0==m||h==Array&&a(m))for(e=s(g.length),r=new h(e);e>S;S++)p=y?b(g[S],S):g[S],c(r,S,p);else for(l=m.call(g),d=l.next,r=new h;!(u=d.call(l)).done;S++)p=y?o(l,b,[u.value,S],!0):u.value,c(r,S,p);return r.length=S,r}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"7b1f":function(t,e,r){},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),g=r("825a"),h=r("7b0b"),v=r("fc6a"),b=r("c04e"),y=r("5c6c"),m=r("7c73"),S=r("df75"),L=r("241c"),w=r("057f"),O=r("7418"),C=r("06cf"),x=r("9bf2"),A=r("d1e7"),P=r("9112"),T=r("6eeb"),j=r("5692"),M=r("f772"),D=r("d012"),_=r("90e3"),k=r("b622"),E=r("e538"),R=r("746f"),F=r("d44e"),N=r("69f3"),I=r("b727").forEach,V=M("hidden"),G="Symbol",$="prototype",H=k("toPrimitive"),J=N.set,B=N.getterFor(G),q=Object[$],z=i.Symbol,Q=o("JSON","stringify"),U=C.f,W=x.f,K=w.f,X=A.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),rt=j("wks"),nt=i.QObject,it=!nt||!nt[$]||!nt[$].findChild,ot=s&&u((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=U(q,e);n&&delete q[e],W(t,e,r),n&&t!==q&&W(q,e,n)}:W,at=function(t,e){var r=Y[t]=m(z[$]);return J(r,{type:G,tag:t,description:e}),s||(r.description=e),r},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,r){t===q&&ct(Z,e,r),g(t);var n=b(e,!0);return g(r),l(Y,n)?(r.enumerable?(l(t,V)&&t[V][n]&&(t[V][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,V)||W(t,V,y(1,{})),t[V][n]=!0),ot(t,n,r)):W(t,n,r)},ft=function(t,e){g(t);var r=v(e),n=S(r).concat(gt(r));return I(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?m(t):ft(m(t),e)},lt=function(t){var e=b(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||r)},dt=function(t,e){var r=v(t),n=b(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var i=U(r,n);return!i||!l(Y,n)||l(r,V)&&r[V][n]||(i.enumerable=!0),i}},pt=function(t){var e=K(v(t)),r=[];return I(e,(function(t){l(Y,t)||l(D,t)||r.push(t)})),r},gt=function(t){var e=t===q,r=K(e?Z:v(t)),n=[];return I(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),r=function(t){this===q&&r.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(q,e,{configurable:!0,set:r}),at(e,t)},T(z[$],"toString",(function(){return B(this).tag})),T(z,"withoutSetter",(function(t){return at(_(t),t)})),A.f=lt,x.f=ct,C.f=dt,L.f=w.f=pt,O.f=gt,E.f=function(t){return at(k(t),t)},s&&(W(z[$],"description",{configurable:!0,get:function(){return B(this).description}}),a||T(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),I(S(rt),(function(t){R(t)})),n({target:G,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),Q){var ht=!c||u((function(){var t=z();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,Q.apply(null,i)}})}z[$][H]||P(z[$],H,z[$].valueOf),F(z,G),D[V]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b725:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"orderRecord"}},[r("van-overlay",{staticClass:"loadBox",attrs:{show:t.load,"z-index":1e4,"lock-scroll":!0}},[t.load?r("van-loading",{staticClass:"load",attrs:{type:"spinner",color:"#1989fa",vertical:!0}}):t._e()],1),r("van-pull-refresh",{attrs:{"success-text":t.successMessage,disabled:t.disablePullRefresh},on:{refresh:t.pullRefresh},model:{value:t.pullLoading,callback:function(e){t.pullLoading=e},expression:"pullLoading"}},[r("van-list",{attrs:{"immediate-check":!1,finished:t.finished,"finished-text":"没有更多了",error:t.pushError,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(e){t.pushError=e}},model:{value:t.pushLoading,callback:function(e){t.pushLoading=e},expression:"pushLoading"}},[r("div",{staticClass:"orderList"},t._l(t.dataList,(function(e,n){return r("div",{key:n,staticClass:"order"},[r("div",{staticClass:"videoInfo"},[r("div",{staticClass:"videoName"},[t._v("购买《"+t._s(e.program.name)+"》")]),r("div",{staticClass:"orderInfo"},[r("p",{staticClass:"time"},[t._v(t._s(t._f("submitTimeFormatType")(e.paid_at)))])])]),r("div",{staticClass:"videoPrice"},[t._v("-"+t._s(e.amount)+"元")])])})),0)])],1)],1)},i=[],o=r("2909"),a=r("0a14"),s={data:function(){return{pullLoading:!1,disablePullRefresh:!1,getDataFlag:!0,pushLoading:!1,finished:!1,dataList:[],page:1,pushError:!1,successMessage:"",load:!0}},created:function(){this.load=!0,this.getData(),this.$shareConfig()},methods:{getData:function(t){var e=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.getDataFlag){this.getDataFlag=!1,this.disablePullRefresh=!0;var n={page:t||1};Object(a["f"])(n).then((function(t){var n;console.log(t),r&&(e.dataList=[],e.load=!1),(n=e.dataList).push.apply(n,Object(o["a"])(t.data)),e.page=t.meta.current_page,e.getDataFlag=!0,r?(e.successMessage="刷新成功",e.pullLoading=!1,e.disablePullRefresh=!1):e.pushLoading=!1,t.meta.current_page>=t.meta.last_page&&(e.finished=!0)})).catch((function(t){e.getDataFlag=!0,r?(e.successMessage="刷新失败，请重新刷新",e.pullLoading=!1,e.disablePullRefresh=!1):(e.pushLoading=!1,e.pushError=!0)}))}},pullRefresh:function(){this.getData()},onLoad:function(){this.page=this.page+1,this.getData(this.page,!1)}}},c=s,f=(r("e361"),r("2877")),u=Object(f["a"])(c,n,i,!1,null,"128956c3",null);e["default"]=u.exports},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),f=s("toStringTag"),u=o.values;for(var l in i){var d=n[l],p=d&&d.prototype;if(p){if(p[c]!==u)try{a(p,c,u)}catch(h){p[c]=u}if(p[f]||a(p,f,l),i[l])for(var g in o)if(p[g]!==o[g])try{a(p,g,o[g])}catch(h){p[g]=o[g]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,f=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};f(d,u);var p=d.prototype=u.prototype;p.constructor=d;var g=p.toString,h="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=g.call(t);if(a(l,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e361:function(t,e,r){"use strict";var n=r("7b1f"),i=r.n(n);i.a},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),f=r("8418"),u=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),g=d("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),v=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var r,n,u,l=c(this),d=s(l.length),p=a(t,d),g=a(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,p,g);for(n=new(void 0===r?Array:r)(b(g-p,0)),u=0;p<g;p++,u++)p in l&&f(n,u,l[p]);return n.length=u,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-17f90810.5a5f0159.js.map