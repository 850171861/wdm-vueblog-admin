(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65e89ea2"],{1326:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"16a4":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return h}));var a=n("ed3b"),r=(n("e186"),n("7424")),i=n("b775");function o(){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["f"])(r["CATEGORY"],i["a"].GET));case 1:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function c(t){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["f"])(r["DELETE_CATEGORY"],i["a"].POST,e));case 1:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function u(t){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["f"])(r["ADD_CATEGORY"],i["a"].POST,e));case 1:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i["f"])(r["UPDATE_CATEGORY"],i["a"].POST,e));case 1:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}},4960:function(t,e,n){},"4fa5":function(t,e,n){"use strict";n("fb63")},"5f4e":function(t,e,n){},"6af7":function(t,e,n){(function(t,n){var a=200,r="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",s="[object Array]",c="[object Boolean]",l="[object Date]",u="[object Error]",f="[object Function]",h="[object GeneratorFunction]",d="[object Map]",p="[object Number]",v="[object Object]",m="[object Promise]",b="[object RegExp]",g="[object Set]",_="[object String]",y="[object Symbol]",C="[object WeakMap]",k="[object ArrayBuffer]",w="[object DataView]",S="[object Float32Array]",x="[object Float64Array]",A="[object Int8Array]",O="[object Int16Array]",j="[object Int32Array]",E="[object Uint8Array]",$="[object Uint8ClampedArray]",R="[object Uint16Array]",T="[object Uint32Array]",z=/[\\^$.*+?()[\]{}|]/g,L=/\w*$/,I=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,P={};P[o]=P[s]=P[k]=P[w]=P[c]=P[l]=P[S]=P[x]=P[A]=P[O]=P[j]=P[d]=P[p]=P[v]=P[b]=P[g]=P[_]=P[y]=P[E]=P[$]=P[R]=P[T]=!0,P[u]=P[f]=P[C]=!1;var D="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,G=D||M||Function("return this")(),Y=e&&!e.nodeType&&e,B=Y&&"object"==typeof n&&n&&!n.nodeType&&n,q=B&&B.exports===Y;function V(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function U(t,e){var n=-1,a=t?t.length:0;while(++n<a)if(!1===e(t[n],n,t))break;return t}function N(t,e){var n=-1,a=e.length,r=t.length;while(++n<a)t[r+n]=e[n];return t}function K(t,e,n,a){var r=-1,i=t?t.length:0;a&&i&&(n=t[++r]);while(++r<i)n=e(n,t[r],r,t);return n}function J(t,e){var n=-1,a=Array(t);while(++n<t)a[n]=e(n);return a}function W(t,e){return null==t?void 0:t[e]}function Q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function X(t){var e=-1,n=Array(t.size);return t.forEach((function(t,a){n[++e]=[a,t]})),n}function Z(t,e){return function(n){return t(e(n))}}function tt(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var et=Array.prototype,nt=Function.prototype,at=Object.prototype,rt=G["__core-js_shared__"],it=function(){var t=/[^.]+$/.exec(rt&&rt.keys&&rt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ot=nt.toString,st=at.hasOwnProperty,ct=at.toString,lt=RegExp("^"+ot.call(st).replace(z,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ut=q?G.Buffer:void 0,ft=G.Symbol,ht=G.Uint8Array,dt=Z(Object.getPrototypeOf,Object),pt=Object.create,vt=at.propertyIsEnumerable,mt=et.splice,bt=Object.getOwnPropertySymbols,gt=ut?ut.isBuffer:void 0,_t=Z(Object.keys,Object),yt=Ae(G,"DataView"),Ct=Ae(G,"Map"),kt=Ae(G,"Promise"),wt=Ae(G,"Set"),St=Ae(G,"WeakMap"),xt=Ae(Object,"create"),At=Fe(yt),Ot=Fe(Ct),jt=Fe(kt),Et=Fe(wt),$t=Fe(St),Rt=ft?ft.prototype:void 0,Tt=Rt?Rt.valueOf:void 0;function zt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var a=t[e];this.set(a[0],a[1])}}function Lt(){this.__data__=xt?xt(null):{}}function It(t){return this.has(t)&&delete this.__data__[t]}function Ft(t){var e=this.__data__;if(xt){var n=e[t];return n===r?void 0:n}return st.call(e,t)?e[t]:void 0}function Pt(t){var e=this.__data__;return xt?void 0!==e[t]:st.call(e,t)}function Dt(t,e){var n=this.__data__;return n[t]=xt&&void 0===e?r:e,this}function Mt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var a=t[e];this.set(a[0],a[1])}}function Gt(){this.__data__=[]}function Yt(t){var e=this.__data__,n=ie(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():mt.call(e,n,1),!0}function Bt(t){var e=this.__data__,n=ie(e,t);return n<0?void 0:e[n][1]}function qt(t){return ie(this.__data__,t)>-1}function Vt(t,e){var n=this.__data__,a=ie(n,t);return a<0?n.push([t,e]):n[a][1]=e,this}function Ht(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var a=t[e];this.set(a[0],a[1])}}function Ut(){this.__data__={hash:new zt,map:new(Ct||Mt),string:new zt}}function Nt(t){return xe(this,t)["delete"](t)}function Kt(t){return xe(this,t).get(t)}function Jt(t){return xe(this,t).has(t)}function Wt(t,e){return xe(this,t).set(t,e),this}function Qt(t){this.__data__=new Mt(t)}function Xt(){this.__data__=new Mt}function Zt(t){return this.__data__["delete"](t)}function te(t){return this.__data__.get(t)}function ee(t){return this.__data__.has(t)}function ne(t,e){var n=this.__data__;if(n instanceof Mt){var r=n.__data__;if(!Ct||r.length<a-1)return r.push([t,e]),this;n=this.__data__=new Ht(r)}return n.set(t,e),this}function ae(t,e){var n=Ge(t)||Me(t)?J(t.length,String):[],a=n.length,r=!!a;for(var i in t)!e&&!st.call(t,i)||r&&("length"==i||Te(i,a))||n.push(i);return n}function re(t,e,n){var a=t[e];st.call(t,e)&&De(a,n)&&(void 0!==n||e in t)||(t[e]=n)}function ie(t,e){var n=t.length;while(n--)if(De(t[n][0],e))return n;return-1}function oe(t,e){return t&&ke(e,Ke(e),t)}function se(t,e,n,a,r,i,s){var c;if(a&&(c=i?a(t,r,i,s):a(t)),void 0!==c)return c;if(!Ue(t))return t;var l=Ge(t);if(l){if(c=Ee(t),!e)return Ce(t,c)}else{var u=je(t),d=u==f||u==h;if(qe(t))return de(t,e);if(u==v||u==o||d&&!i){if(Q(t))return i?t:{};if(c=$e(d?{}:t),!e)return we(t,oe(c,t))}else{if(!P[u])return i?t:{};c=Re(t,u,se,e)}}s||(s=new Qt);var p=s.get(t);if(p)return p;if(s.set(t,c),!l)var m=n?Se(t):Ke(t);return U(m||t,(function(r,i){m&&(i=r,r=t[i]),re(c,i,se(r,e,n,a,i,t,s))})),c}function ce(t){return Ue(t)?pt(t):{}}function le(t,e,n){var a=e(t);return Ge(t)?a:N(a,n(t))}function ue(t){return ct.call(t)}function fe(t){if(!Ue(t)||Le(t))return!1;var e=Ve(t)||Q(t)?lt:I;return e.test(Fe(t))}function he(t){if(!Ie(t))return _t(t);var e=[];for(var n in Object(t))st.call(t,n)&&"constructor"!=n&&e.push(n);return e}function de(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function pe(t){var e=new t.constructor(t.byteLength);return new ht(e).set(new ht(t)),e}function ve(t,e){var n=e?pe(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function me(t,e,n){var a=e?n(X(t),!0):X(t);return K(a,V,new t.constructor)}function be(t){var e=new t.constructor(t.source,L.exec(t));return e.lastIndex=t.lastIndex,e}function ge(t,e,n){var a=e?n(tt(t),!0):tt(t);return K(a,H,new t.constructor)}function _e(t){return Tt?Object(Tt.call(t)):{}}function ye(t,e){var n=e?pe(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Ce(t,e){var n=-1,a=t.length;e||(e=Array(a));while(++n<a)e[n]=t[n];return e}function ke(t,e,n,a){n||(n={});var r=-1,i=e.length;while(++r<i){var o=e[r],s=a?a(n[o],t[o],o,n,t):void 0;re(n,o,void 0===s?t[o]:s)}return n}function we(t,e){return ke(t,Oe(t),e)}function Se(t){return le(t,Ke,Oe)}function xe(t,e){var n=t.__data__;return ze(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ae(t,e){var n=W(t,e);return fe(n)?n:void 0}zt.prototype.clear=Lt,zt.prototype["delete"]=It,zt.prototype.get=Ft,zt.prototype.has=Pt,zt.prototype.set=Dt,Mt.prototype.clear=Gt,Mt.prototype["delete"]=Yt,Mt.prototype.get=Bt,Mt.prototype.has=qt,Mt.prototype.set=Vt,Ht.prototype.clear=Ut,Ht.prototype["delete"]=Nt,Ht.prototype.get=Kt,Ht.prototype.has=Jt,Ht.prototype.set=Wt,Qt.prototype.clear=Xt,Qt.prototype["delete"]=Zt,Qt.prototype.get=te,Qt.prototype.has=ee,Qt.prototype.set=ne;var Oe=bt?Z(bt,Object):Je,je=ue;function Ee(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&st.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function $e(t){return"function"!=typeof t.constructor||Ie(t)?{}:ce(dt(t))}function Re(t,e,n,a){var r=t.constructor;switch(e){case k:return pe(t);case c:case l:return new r(+t);case w:return ve(t,a);case S:case x:case A:case O:case j:case E:case $:case R:case T:return ye(t,a);case d:return me(t,a,n);case p:case _:return new r(t);case b:return be(t);case g:return ge(t,a,n);case y:return _e(t)}}function Te(t,e){return e=null==e?i:e,!!e&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function ze(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Le(t){return!!it&&it in t}function Ie(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||at;return t===n}function Fe(t){if(null!=t){try{return ot.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Pe(t){return se(t,!0,!0)}function De(t,e){return t===e||t!==t&&e!==e}function Me(t){return Be(t)&&st.call(t,"callee")&&(!vt.call(t,"callee")||ct.call(t)==o)}(yt&&je(new yt(new ArrayBuffer(1)))!=w||Ct&&je(new Ct)!=d||kt&&je(kt.resolve())!=m||wt&&je(new wt)!=g||St&&je(new St)!=C)&&(je=function(t){var e=ct.call(t),n=e==v?t.constructor:void 0,a=n?Fe(n):void 0;if(a)switch(a){case At:return w;case Ot:return d;case jt:return m;case Et:return g;case $t:return C}return e});var Ge=Array.isArray;function Ye(t){return null!=t&&He(t.length)&&!Ve(t)}function Be(t){return Ne(t)&&Ye(t)}var qe=gt||We;function Ve(t){var e=Ue(t)?ct.call(t):"";return e==f||e==h}function He(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function Ue(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ne(t){return!!t&&"object"==typeof t}function Ke(t){return Ye(t)?ae(t):he(t)}function Je(){return[]}function We(){return!1}n.exports=Pe}).call(this,n("2409"),n("adb6")(t))},"814e":function(t,e,n){"use strict";var a=n("7faf"),r=n("7314"),i=n("16bc"),o=n("41be"),s=n("1326"),c=n("78f8"),l=n("0e65"),u=n("c64f");r("search",(function(t,e,n){return[function(e){var n=o(this),r=void 0==e?void 0:l(e,t);return r?a(r,e,n):new RegExp(e)[t](c(n))},function(t){var a=i(this),r=c(t),o=n(e,a,r);if(o.done)return o.value;var l=a.lastIndex;s(l,0)||(a.lastIndex=0);var f=u(a,r);return s(a.lastIndex,l)||(a.lastIndex=l),null===f?-1:f.index}]}))},"95ea":function(t,e,n){},c0e6:function(t,e,n){"use strict";n("c156")},c156:function(t,e,n){},cbd8:function(t,e,n){"use strict";n("5f4e")},d166:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("advance-table",{attrs:{columns:t.columns,"data-source":t.dataSource,title:"高级表格-Beta",loading:t.loading,rowKey:"id","format-conditions":!0,pagination:{current:t.page,pageSize:t.pageSize,total:t.total,showSizeChanger:!0,showLessItems:!0,showQuickJumper:!0,showTotal:function(t,e){return"第 "+e[0]+"-"+e[1]+" 条，总计 "+t+" 条"},onChange:t.onPageChange,onShowSizeChange:t.onSizeChange}},on:{search:t.onSearch,refresh:t.onRefresh,reset:t.onReset},scopedSlots:t._u([{key:"send",fn:function(e){var n=e.text;return[t._v(" "+t._s(n?"是":"否")+" ")]}},{key:"status",fn:function(e){var n=e.text;return[t._v(" "+t._s(t._f("statusStr")(n))+" ")]}}])},[n("template",{slot:"statusTitle"},[t._v(" 状态"),n("a-icon",{staticStyle:{margin:"0 4px"},attrs:{type:"info-circle"}})],1)],2),n("api")],1)},r=[],i=n("fd6a"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"table",staticClass:"advanced-table",attrs:{id:t.id}},[n("a-spin",{attrs:{spinning:t.loading}},[n("div",{class:["header-bar",t.size]},[n("div",{staticClass:"title"},[t.title?[t._v(t._s(t.title))]:t.$slots.title?t._t("title"):[t._v("高级表格")]],2),n("div",{staticClass:"search"},[n("search-area",{attrs:{"format-conditions":t.formatConditions,columns:t.columns},on:{change:t.onSearchChange}},[t._l(t.slots,(function(e){return n("template",{slot:e},[t._t(e)],2)}))],2)],1),n("div",{staticClass:"actions"},[n("a-tooltip",{attrs:{title:"刷新"}},[n("a-icon",{staticClass:"action",attrs:{type:t.loading?"loading":"reload"},on:{click:t.refresh}})],1),n("action-size",{staticClass:"action",model:{value:t.sSize,callback:function(e){t.sSize=e},expression:"sSize"}}),n("a-tooltip",{attrs:{title:"列配置"}},[n("action-columns",{staticClass:"action",attrs:{columns:t.columns},on:{reset:t.onColumnsReset}},[t._l(t.slots,(function(e){return n("template",{slot:e},[t._t(e)],2)}))],2)],1),n("a-tooltip",{attrs:{title:"全屏"}},[n("a-icon",{staticClass:"action",attrs:{type:t.fullScreen?"fullscreen-exit":"fullscreen"},on:{click:t.toggleScreen}})],1)],1)]),n("a-table",t._b({attrs:{size:t.sSize},on:{expandedRowsChange:t.onExpandedRowsChange,change:t.onChange,expand:t.onExpand},scopedSlots:t._u([t._l(t.scopedSlots,(function(e){return{key:e,fn:function(n,a,r){return[t._t(e,null,null,{text:n,record:a,index:r})]}}})),{key:t.$scopedSlots.expandedRowRender?"expandedRowRender":"",fn:function(e,n,a,r){return[t._t(t.$scopedSlots.expandedRowRender?"expandedRowRender":"",null,null,{record:e,index:n,indent:a,expanded:r})]}}],null,!0)},"a-table",Object.assign({},t.$props,{columns:t.visibleColumns,title:void 0,loading:!1}),!1),[t._l(t.slots,(function(e){return n("template",{slot:e},[t._t(e)],2)}))],2)],1)],1)},s=[],c=(n("8372"),n("44ad"),n("28fd"),n("a9b6"),n("9d16"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"action-size"},[n("a-tooltip",{attrs:{title:"密度"}},[n("a-dropdown",{attrs:{placement:"bottomCenter",trigger:["click"],"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{staticClass:"action",attrs:{type:"column-height"}}),n("a-menu",{attrs:{slot:"overlay","selected-keys":[t.value]},on:{click:t.onClick},slot:"overlay"},[n("a-menu-item",{key:"default"},[t._v(" 默认 ")]),n("a-menu-item",{key:"middle"},[t._v(" 中等 ")]),n("a-menu-item",{key:"small"},[t._v(" 紧密 ")])],1)],1)],1)],1)}),l=[],u={name:"ActionSize",props:["value"],inject:["table"],data:function(){return{selectedKeys:["middle"]}},methods:{onClick:function(t){var e=t.key;this.$emit("input",e)}}},f=u,h=(n("dc71"),n("cba8")),d=Object(h["a"])(f,c,l,!1,null,"14609956",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"action-columns"},[n("a-popover",{attrs:{placement:"bottomRight",trigger:"click","get-popup-container":function(){return t.$refs.root}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("a-checkbox",{staticClass:"check-all",attrs:{indeterminate:t.indeterminate,checked:t.checkAll},on:{change:t.onCheckAllChange}}),t._v("列展示 "),n("a-button",{staticStyle:{float:"right"},attrs:{type:"link",size:"small"},on:{click:t.resetColumns}},[t._v("重置")])],1),t._l(t.columns,(function(e,a){return n("a-list",{key:a,staticStyle:{width:"100%"},attrs:{slot:"content",size:"small"},slot:"content"},[n("a-list-item",[n("a-checkbox",{on:{change:function(n){return t.onCheckChange(n,e)}},model:{value:e.visible,callback:function(n){t.$set(e,"visible",n)},expression:"col.visible"}}),e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("template",{slot:"actions"},[n("a-tooltip",{attrs:{title:"固定在列头",mouseEnterDelay:.5,"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{class:["left",{active:"left"===e.fixed}],attrs:{type:"vertical-align-top"},on:{click:function(n){return t.fixColumn("left",e)}}})],1),n("a-tooltip",{attrs:{title:"固定在列尾",mouseEnterDelay:.5,"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{class:["right",{active:"right"===e.fixed}],attrs:{type:"vertical-align-bottom"},on:{click:function(n){return t.fixColumn("right",e)}}})],1),n("a-tooltip",{attrs:{title:"添加搜索",mouseEnterDelay:.5,"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{class:{active:e.searchAble},attrs:{type:"search"},on:{click:function(n){return t.setSearch(e)}}})],1)],1)],2)],1)})),n("a-icon",{staticClass:"action",attrs:{type:"setting"}})],2)],1)},m=[],b=n("e43c"),g=(n("d3b6"),n("3fab"),n("814e"),n("c284"),n("6af7")),_=n.n(g),y={name:"ActionColumns",props:["columns","visibleColumns"],data:function(){return{visible:!1,indeterminate:!1,checkAll:!0,checkedCounts:this.columns.length,backColumns:_()(this.columns)}},watch:{checkedCounts:function(t){this.checkAll=t===this.columns.length,this.indeterminate=t>0&&t<this.columns.length},columns:function(t,e){t!=e&&(this.checkedCounts=t.length,this.formatColumns(t))}},created:function(){this.formatColumns(this.columns)},methods:{onCheckChange:function(t,e){e.visible?this.checkedCounts+=1:this.checkedCounts-=1},fixColumn:function(t,e){t!==e.fixed?this.$set(e,"fixed",t):this.$set(e,"fixed",void 0)},setSearch:function(t){this.$set(t,"searchAble",!t.searchAble),!t.searchAble&&t.search&&this.resetSearch(t)},resetSearch:function(t){t.search.value=void 0,t.search.backup=void 0},resetColumns:function(){var t=this,e=this.columns,n=this.backColumns,a=e.length;n.forEach((function(n,r){var i=e[r];i.visible=void 0===n.visible||n.visible,i.visible||(a-=1),void 0!==n.fixed?i.fixed=n.fixed:t.$set(i,"fixed",void 0),t.$set(i,"searchAble",n.searchAble),t.resetSearch(i)})),this.checkedCounts=a,this.visible=!1,this.$emit("reset",this.getConditions(e))},onCheckAllChange:function(t){t.target.checked?(this.checkedCounts=this.columns.length,this.columns.forEach((function(t){return t.visible=!0}))):(this.checkedCounts=0,this.columns.forEach((function(t){return t.visible=!1})))},getConditions:function(t){var e={};return t.filter((function(t){return void 0!==t.search.value&&""!==t.search.value&&null!==t.search.value})).forEach((function(t){e[t.dataIndex]=t.search.value})),e},formatColumns:function(t){var e,n=Object(b["a"])(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;void 0===a.visible&&this.$set(a,"visible",!0),a.visible||(this.checkedCounts-=1)}}catch(r){n.e(r)}finally{n.f()}}}},C=y,k=(n("4fa5"),Object(h["a"])(C,v,m,!1,null,"05c987a8",null)),w=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"search-area"},[n("div",{ref:"selectRoot",staticClass:"select-root"}),t._l(t.searchCols,(function(e,a){return n("div",{key:a,staticClass:"search-item"},["boolean"===e.dataType?n("div",{class:["title",{active:void 0!==e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-switch",{staticClass:"switch",attrs:{size:"small","checked-children":e.search.switchOptions&&e.search.switchOptions.checkedText||"是","un-checked-children":e.search.switchOptions&&e.search.switchOptions.uncheckedText||"否"},on:{change:function(n){return t.onSwitchChange(e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}}),void 0!==e.search.value?n("a-icon",{staticClass:"close",attrs:{type:"close-circle",theme:"filled"},on:{click:function(n){return t.onCloseClick(n,e)}}}):t._e()],2):"time"===e.dataType?n("div",{class:["title",{active:e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-time-picker",{staticClass:"time-picker",attrs:{format:e.search.format,placeholder:"选择时间",size:"small","get-popup-container":function(){return t.$refs.root}},on:{change:function(n,a){return t.onCalendarChange(n,a,e)},openChange:function(n){return t.onCalendarOpenChange(n,e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):"date"===e.dataType?n("div",{class:["title",{active:e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-date-picker",{staticClass:"date-picker",attrs:{format:e.search.format,size:"small",getCalendarContainer:function(){return t.$refs.root}},on:{change:function(n){return t.onDateChange(e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):"datetime"===e.dataType?n("div",{staticClass:"title datetime active"},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-date-picker",{staticClass:"datetime-picker",attrs:{format:e.search.format,size:"small","show-time":"",getCalendarContainer:function(){return t.$refs.root}},on:{change:function(n,a){return t.onCalendarChange(n,a,e)},openChange:function(n){return t.onCalendarOpenChange(n,e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):"select"===e.dataType?n("div",{class:["title",{active:void 0!==e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-select",{staticClass:"select",attrs:{slot:"content",allowClear:!0,options:e.search.selectOptions,placeholder:"请选择...",size:"small","get-popup-container":function(){return t.$refs.selectRoot}},on:{change:function(n){return t.onSelectChange(e)}},slot:"content",model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):n("div",{class:["title",{active:e.search.value}]},[n("a-popover",{attrs:{placement:"bottom",trigger:["click"],"get-popup-container":function(){return t.$refs.root}},on:{visibleChange:function(n){return t.onVisibleChange(e,a)}},model:{value:e.search.visible,callback:function(n){t.$set(e.search,"visible",n)},expression:"col.search.visible"}},[e.title?[t._v(" "+t._s(e.title)+" ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),e.search.value?n("div",{staticClass:"value "},[t._v(":  "+t._s(e.search.format&&"function"===typeof e.search.format?e.search.format(e.search.value):e.search.value))]):t._e(),e.search.value?t._e():n("a-icon",{staticClass:"icon-down",attrs:{type:"down"}}),n("div",{staticClass:"operations",attrs:{slot:"content"},slot:"content"},[n("a-button",{staticClass:"btn",attrs:{size:"small",type:"link"},on:{click:function(n){return t.onCancel(e)}}},[t._v("取消")]),n("a-button",{staticClass:"btn",attrs:{size:"small",type:"primary"},on:{click:function(n){return t.onConfirm(e)}}},[t._v("确认")])],1),n("div",{staticClass:"search-overlay",attrs:{slot:"title"},slot:"title"},[n("a-input",{attrs:{id:""+t.searchIdPrefix+a,"allow-clear":!0,size:"small"},on:{keyup:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.onCancel(e)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.onConfirm(e)}]},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],1)],2),e.search.value?n("a-icon",{staticClass:"close",attrs:{type:"close-circle",theme:"filled"},on:{click:function(n){return t.onCloseClick(n,e)}}}):t._e()],1)])}))],2)},x=[],A=(n("3e22"),n("59d7"),n("0e26")),O=n.n(A),j=n("caaf"),E=n.n(j),$={name:"SearchArea",props:["columns","formatConditions"],inject:["table"],created:function(){this.formatColumns(this.columns)},watch:{columns:function(t,e){t!=e&&this.formatColumns(t)},searchCols:function(t,e){if(t.length!=e.length){var n=this.getConditions(t),a=this.getSearchOptions(t);O()(n,this.conditions)||(this.conditions=n,this.searchOptions=a,this.$emit("change",this.conditions,this.searchOptions))}}},data:function(){return{conditions:{},searchOptions:[]}},computed:{searchCols:function(){return this.columns.filter((function(t){return t.searchAble}))},searchIdPrefix:function(){return this.table.id+"-ipt-"}},methods:{onCloseClick:function(t,e){t.preventDefault(),t.stopPropagation(),e.search.value=void 0;var n=e.search,a=n.backup,r=n.value;a!==r&&this.backupAndEmitChange(e)},onCancel:function(t){t.search.value=t.search.backup,t.search.visible=!1},onConfirm:function(t){var e=t.search,n=e.backup,a=e.value;t.search.visible=!1,n!==a&&this.backupAndEmitChange(t)},onSwitchChange:function(t){var e=t.search,n=e.backup,a=e.value;n!==a&&this.backupAndEmitChange(t)},onSelectChange:function(t){this.backupAndEmitChange(t)},onCalendarOpenChange:function(t,e){e.search.visible=t;var n=this.momentEqual,a=this.backupAndEmitChange,r=e.search,i=r.value,o=r.backup,s=r.format;t||n(i,o,s)||a(e,E()(i))},onCalendarChange:function(t,e,n){var a=this.momentEqual,r=this.backupAndEmitChange,i=n.search,o=i.value,s=i.backup,c=i.format;n.search.visible||a(o,s,c)||r(n,E()(o))},onDateChange:function(t){var e=this.momentEqual,n=this.backupAndEmitChange,a=t.search,r=a.value,i=a.backup,o=a.format;e(r,i,o)||n(t,E()(r))},getFormat:function(t){if(t.search&&t.search.format)return t.search.format;var e=t.dataType;switch(e){case"time":return"HH:mm:ss";case"date":return"YYYY-MM-DD";case"datetime":return"YYYY-MM-DD HH:mm:ss";default:return}},backupAndEmitChange:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.search.value,n=this.getConditions,a=this.getSearchOptions;t.search.backup=e,this.conditions=n(this.searchCols),this.searchOptions=a(this.searchCols),this.$emit("change",this.conditions,this.searchOptions)},getConditions:function(t){var e=this,n={};return t.filter((function(t){return void 0!==t.search.value&&""!==t.search.value&&null!==t.search.value})).forEach((function(t){var a=t.search,r=a.value,i=a.format;e.formatConditions&&i?"function"===typeof i?n[t.dataIndex]=i(t.search.value):"string"===typeof i&&"Moment"===r.constructor.name?n[t.dataIndex]=r.format(i):n[t.dataIndex]=r:n[t.dataIndex]=r})),n},getSearchOptions:function(t){return t.filter((function(t){return void 0!==t.search.value&&""!==t.search.value&&null!==t.search.value})).map((function(t){var e=t.dataIndex,n=t.search;return{field:e,value:n.value,format:n.format}}))},onVisibleChange:function(t,e){var n=this;if(t.search.visible){var a=document.getElementById("".concat(this.searchIdPrefix).concat(e));a?setTimeout((function(){a.focus()}),0):this.$nextTick((function(){a=document.getElementById("".concat(n.searchIdPrefix).concat(e)),a.focus()}))}else t.search.value=t.search.backup},momentEqual:function(t,e,n){return t===e||!(!t||!e||t.format(n)!==e.format(n))},formatColumns:function(t){var e=this;t.forEach((function(t){e.$set(t,"search",Object(i["a"])(Object(i["a"])({},t.search),{},{visible:!1,value:void 0,format:e.getFormat(t)}))}))}}},R=$,T=(n("cbd8"),Object(h["a"])(R,S,x,!1,null,"7ba4b68e",null)),z=T.exports,L={name:"AdvanceTable",components:{SearchArea:z,ActionColumns:w,ActionSize:p},props:{tableLayout:String,bordered:Boolean,childrenColumnName:{type:String,default:"children"},columns:Array,components:Object,dataSource:Array,defaultExpandAllRows:Array[String],expandedRowKeys:Array[String],expandedRowRender:Function,expandIcon:Function,expandRowByClick:Boolean,expandIconColumnIndex:Number,footer:Function,indentSize:Number,loading:Boolean,locale:Object,pagination:Object,rowClassName:Function,rowKey:[String,Function],rowSelection:Object,scroll:Object,showHeader:{type:Boolean,default:!0},size:String,title:String,customHeaderRow:Function,customRow:Function,getPopupContainer:Function,transformCellText:Function,formatConditions:Boolean},provide:function(){return{table:this}},data:function(){return{id:"".concat((new Date).getTime(),"-").concat(Math.floor(10*Math.random())),sSize:this.size||"default",fullScreen:!1,conditions:{}}},computed:{slots:function(){return Object.keys(this.$slots).filter((function(t){return"title"!==t}))},scopedSlots:function(){return Object.keys(this.$scopedSlots).filter((function(t){return"expandedRowRender"!==t&&"title"!==t}))},visibleColumns:function(){return this.columns.filter((function(t){return t.visible}))}},created:function(){this.addListener()},beforeDestroy:function(){this.removeListener()},methods:{refresh:function(){this.$emit("refresh",this.conditions)},onSearchChange:function(t,e){this.conditions=t,this.$emit("search",t,e)},toggleScreen:function(){this.fullScreen?this.outFullScreen():this.inFullScreen()},inFullScreen:function(){var t=this.$refs.table;return t.classList.add("beauty-scroll"),t.requestFullscreen?(t.requestFullscreen(),!0):t.webkitRequestFullScreen?(t.webkitRequestFullScreen(),!0):t.mozRequestFullScreen?(t.mozRequestFullScreen(),!0):t.msRequestFullscreen?(t.msRequestFullscreen(),!0):(this.$message.warn("对不起，您的浏览器不支持全屏模式"),t.classList.remove("beauty-scroll"),!1)},outFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),this.$refs.table.classList.remove("beauty-scroll")},onColumnsReset:function(t){this.$emit("reset",t)},onExpandedRowsChange:function(t){this.$emit("expandedRowsChange",t)},onChange:function(t,e,n,a){this.$emit("change",t,e,n,a)},onExpand:function(t,e){this.$emit("expand",t,e)},addListener:function(){document.addEventListener("fullscreenchange",this.fullScreenListener),document.addEventListener("webkitfullscreenchange",this.fullScreenListener),document.addEventListener("mozfullscreenchange",this.fullScreenListener),document.addEventListener("msfullscreenchange",this.fullScreenListener)},removeListener:function(){document.removeEventListener("fullscreenchange",this.fullScreenListener),document.removeEventListener("webkitfullscreenchange",this.fullScreenListener),document.removeEventListener("mozfullscreenchange",this.fullScreenListener),document.removeEventListener("msfullscreenchange",this.fullScreenListener)},fullScreenListener:function(t){t.target.id===this.id&&(this.fullScreen=!this.fullScreen)}}},I=L,F=(n("c0e6"),Object(h["a"])(I,o,s,!1,null,"322c1f22",null)),P=F.exports,D=(n("93d6"),n("ed3b")),M=(n("e186"),n("7424")),G=n("b775");function Y(t){return B.apply(this,arguments)}function B(){return B=Object(D["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(G["f"])(M["GOODS"],G["a"].GET,e));case 1:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function q(){return V.apply(this,arguments)}function V(){return V=Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(G["f"])(M["GOODS_COLUMNS"],G["a"].GET));case 1:case"end":return t.stop()}}),t)}))),V.apply(this,arguments)}var H={goodsList:Y,goodsColumns:q},U=(n("16a4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api"},[t._m(0),n("api-table",{attrs:{"api-source":t.apiSource}}),n("api-table",{attrs:{type:"event",title:"事件","api-source":t.events}}),n("api-table",{attrs:{title:"Column","api-source":t.columnApi}}),n("api-table",{attrs:{title:"Search","api-source":t.searchApi}})],1)}),N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduce"},[n("h2",{staticClass:"title"},[t._v("说明")]),n("p",{staticClass:"content"},[t._v(" AdvanceTable 是基于 Ant Design Vue Table 组件封装，支持其所有 API。"),n("br"),t._v(" 主要添加了"),n("em",[t._v("列设置")]),t._v("及"),n("em",[t._v("搜索控件配置")]),t._v("的功能，可用于一些需要动态配置表格展示、动态配置搜索条件的场景。"),n("br"),t._v(" 使用方式 与 antd table 基本无异。添加了部分API，如下： ")])])}],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-table",{attrs:{"data-source":t.apiSource,pagination:!1}},[t.title?n("h2",{staticStyle:{margin:"0 16px 0"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))]):t._e(),n("a-table-column",{attrs:{width:"20%","data-index":"param",title:"参数"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}])}),n("a-table-column",{attrs:{width:"50%","data-index":"desc",title:"说明"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}])}),t.isApi?n("a-table-column",{attrs:{width:"15%","data-index":"type",title:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}],null,!1,102549752)}):t._e(),t.isApi?n("a-table-column",{attrs:{width:"15%","data-index":"default",title:"默认值"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}],null,!1,102549752)}):t._e(),t.isApi?t._e():n("a-table-column",{attrs:{width:"30%","data-index":"callback",title:"回调函数"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}],null,!1,102549752)})],1)},J=[],W=(n("688d"),{name:"ApiTable",props:{title:{type:String,default:"API"},type:{type:String,default:"api",validator:function(t){return["api","event"].includes(t)}},apiSource:Array},computed:{isApi:function(){return"api"===this.type}}}),Q=W,X=Object(h["a"])(Q,K,J,!1,null,"029d00aa",null),Z=X.exports,tt={name:"Api",components:{ApiTable:Z},data:function(){return{apiSource:[{key:0,param:'<a href="https://www.antdv.com/components/table-cn/#API" target="_blank">Ant Design Vue Table API</a>',desc:"支持 Ant Design Vue Table 组件 所有 api",type:"--",default:"--"},{key:1,param:"title",desc:"表格标题",type:"string | slot",default:"'高级表格'"},{key:2,param:"formatConditions",desc:"是否格式化搜索条件的值，格式化规则参考 <a>Search 配置</a>。\n                 <br/>false：取搜索输入控件的原值 <br/>true：取搜索输入控件格式化后的值",type:"boolean",default:"false"},{key:3,param:"columns",desc:"表格列配置，参考 <a>Column 配置</a>",type:"array",default:"--"}],events:[{key:0,param:'<a href="https://www.antdv.com/components/table-cn/#API" target="_blank">Ant Design Vue Table Events API</a>',desc:"支持 Ant Design Vue Table 所有事件",callback:"--"},{key:1,param:"search",desc:"搜索条件变化时触发",callback:"Function(conditions, searchOptions: [{field, value, format}])"},{key:2,param:"refresh",desc:"表头刷新图标点击时触发",callback:"Function(conditions, searchOptions: [{field, value, format}])"},{key:3,param:"reset",desc:"列配置重置按钮点击时触发",callback:"Function(conditions, searchOptions: [{field, value, format}])"}],columnApi:[{key:0,param:'<a href="https://www.antdv.com/components/table-cn/#API" target="_blank">Ant Design Vue Table Column API</a>',desc:"支持 Ant Design Vue Table 组件 Column 配置所有 api",type:"--",default:"--"},{key:1,param:"searchAble",desc:"是否启用列搜索",type:"boolean",default:"false"},{key:2,param:"dataType",desc:"数据类型，该配置将决定列搜索输入控件的类型，与列搜索输入控件对应关系如下：<br/>\n                 string: 输入框组件<br/>\n                 boolean: 开关组件<br/>\n                 select: 下拉输入框组件<br/>\n                 date: 日期选择器<br/>\n                 time: 时间选择器<br/>\n                 datetime: 带时间选择器的日期选择器",type:"'string' | 'boolean' | 'select' | 'date' | 'time' | 'datetime'",default:"'string'"},{key:3,param:"search",desc:"列搜索配置，参考 <a>Search 配置</a>",type:"object",default:"--"}],searchApi:[{key:0,param:"format",desc:"列搜索输入控件值的格式化配置。<br/>如果输入控件支持格式化，则可设置该值为字符串，如日期输入组件，可设为为 'YYYY-MM-DD'。\n                 <br/>不支持格式化的输入控件，可设置为一个接收控件的输入值作为参数的函数，如 (value) => {return `prefix${value}`}。",type:"string | Function(value)",default:"取输入控件默认的格式化配置"},{key:1,param:"selectOptions",desc:'select 数据类型的下拉输入组件的选项配置，可参考 <a href="https://www.antdv.com/components/select-cn/#API" target="_blank">Ant Design Vue Select Option props Api</a>',type:"array",default:"--"}]}}},et=tt,nt=(n("f817"),Object(h["a"])(et,U,N,!1,null,"6bba9377",null)),at=nt.exports,rt={name:"Table",components:{Api:at,AdvanceTable:P},filters:{statusStr:function(t){switch(t){case 1:return"已下单";case 2:return"已付款";case 3:return"已审核";case 4:return"已发货"}}},data:function(){return{loading:!1,page:1,pageSize:10,total:0,columns:[{title:"商品名称",dataIndex:"name",searchAble:!0},{title:"订单号",dataIndex:"orderId"},{searchAble:!0,dataIndex:"status",dataType:"select",slots:{title:"statusTitle"},scopedSlots:{customRender:"status"},search:{selectOptions:[{title:"已下单",value:1},{title:"已付款",value:2},{title:"已审核",value:3},{title:"已发货",value:4}]}},{title:"发货",searchAble:!0,dataIndex:"send",dataType:"boolean",scopedSlots:{customRender:"send"},search:{switchOptions:{checkedText:"开",uncheckedText:"关"}}},{title:"审核时间",dataIndex:"auditTime",dataType:"time"}],dataSource:[],conditions:{}}},created:function(){this.getGoodList(),this.getColumns()},methods:{getGoodList:function(){var t=this;this.loading=!0;var e=this.page,n=this.pageSize,a=this.conditions;H.goodsList(Object(i["a"])({page:e,pageSize:n},a)).then((function(e){var n=e.data.data,a=n.list,r=n.page,i=n.pageSize,o=n.total;t.dataSource=a,t.page=r,t.total=o,t.pageSize=i,t.loading=!1}))},getColumns:function(){var t=this;H.goodsColumns().then((function(e){t.columns=e.data}))},onSearch:function(t,e){this.page=1,this.conditions=t,this.getGoodList()},onSizeChange:function(t,e){this.page=1,this.pageSize=e,this.getGoodList()},onRefresh:function(t){this.conditions=t,this.getGoodList()},onReset:function(t){this.conditions=t,this.getGoodList()},onPageChange:function(t,e){this.page=t,this.pageSize=e,this.getGoodList()}}},it=rt,ot=(n("f94f"),Object(h["a"])(it,a,r,!1,null,"5c6a0979",null)),st=ot.exports;e["default"]=st},d3b6:function(t,e,n){"use strict";var a=n("a5ba"),r=n("4be3"),i=n("44e1");a({target:"String",proto:!0,forced:i("fixed")},{fixed:function(){return r(this,"tt","","")}})},dc71:function(t,e,n){"use strict";n("f407")},f407:function(t,e,n){},f817:function(t,e,n){"use strict";n("4960")},f94f:function(t,e,n){"use strict";n("95ea")},fb63:function(t,e,n){}}]);