(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ecc2073"],{"3aff":function(t,e,a){"use strict";a("b219")},a209:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return d})),a.d(e,"d",(function(){return f}));var n=a("ed3b"),r=(a("e186"),a("7424")),c=a("b775");function o(){return i.apply(this,arguments)}function i(){return i=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(c["f"])(r["TAG_LIST"],c["a"].GET));case 1:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function s(t){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(c["f"])(r["DELETE_TAG"],c["a"].POST,e));case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(c["f"])(r["ADD_TAG"],c["a"].POST,e));case 1:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(c["f"])(r["UPDATE_TAG"],c["a"].POST,e));case 1:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}},b219:function(t,e,a){},bf9b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{attrs:{type:"primary"},on:{click:t.handleCreate}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" 添加 ")],1),a("a-table",{attrs:{bordered:"",rowKey:function(t,e){return e},"data-source":t.dataSource,columns:t.columns},scopedSlots:t._u([{key:"status",fn:function(e,n){return[t.dataSource.length?a("span",[1==n.status?a("a",{attrs:{href:"javascript:;"}},[a("a-button",{staticStyle:{"background-color":"#e6f9f4","border-color":"#ccf3e9",color:"#00c292"},attrs:{type:"dashed"}},[t._v(" 启用中 ")])],1):a("a",{attrs:{href:"javascript:;"}},[a("a-button",{staticStyle:{"background-color":"#feeef0","border-color":"#fddce2",color:"#f4516c"},attrs:{type:"dashed"}},[t._v(" 禁用中 ")])],1)]):t._e()]}},{key:"operation",fn:function(e,n){return[a("a-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:function(e){return t.handleUpdate(n)}}},[t._v(" 编辑 ")]),t.dataSource.length?a("a-popconfirm",{attrs:{title:"确定要删除吗？"},on:{confirm:function(){return t.onDelete(n._id)}}},[a("a-button",{attrs:{type:"danger"}},[t._v(" 删除 ")])],1):t._e()]}}])}),a("a-drawer",{attrs:{title:"Create a new account",width:440,visible:t.visible,"body-style":{paddingBottom:"80px"}},on:{close:t.onClose}},[a("a-form-item",{attrs:{label:"分类名称"}},[a("a-input",{attrs:{placeholder:"请输入分类名称"},model:{value:t.obj.name,callback:function(e){t.$set(t.obj,"name",e)},expression:"obj.name"}})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-switch",{attrs:{defaultChecked:"",checkedChildren:"启动中",unCheckedChildren:"禁用中"},on:{change:t.onChange},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:t.onClose}},[t._v(" 取消 ")]),a("a-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(" 确认 ")])],1)],1)],1)},r=[],c=a("efbe"),o=(a("3e22"),a("a9b6"),a("c284"),a("28fd"),a("a209")),i={data:function(){return{obj:{name:"",status:1},checked:!0,dialogStatus:"",visible:!1,dataSource:[],columns:[{title:"标签名称",dataIndex:"name",width:"20%"},{title:"文章数量",dataIndex:"articleCount",width:"20%"},{title:"创建时间",dataIndex:"created",width:"25%"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"},width:"12%"},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},width:"20%"}]}},mounted:function(){this.getCategoryList()},methods:{onChange:function(){1==this.checked?this.obj.status=1:this.obj.status=0},onClose:function(){this.visible=!1},handleCreate:function(){this.dialogStatus="create",this.visible=!0},createData:function(){var t=this;Object(o["a"])(this.obj).then((function(e){if(200===e.data.code){var a=e.data.data;t.dataSource.unshift(a),t.$message.success("添加数据成功")}else t.$message.success("添加数据失败");t.obj.name="",t.obj.status=1})),this.visible=!1},handleUpdate:function(t){this.obj=Object.assign({},t),1==this.obj.status?this.checked=!0:this.checked=!1,this.dialogStatus="update",this.visible=!0},updateData:function(){var t=this;Object(o["d"])(this.obj).then((function(e){200===e.data.code?(t.$message.success("修改数据成功"),t.dataSource.forEach((function(e){e._id===t.obj._id&&(e.name=t.obj.name,e.status=t.obj.status)}))):t.$message.success("修改数据失败"),t.visible=!1}))},getCategoryList:function(){var t=this;Object(o["c"])().then((function(e){t.dataSource=e.data.data}))},onDelete:function(t){var e=this;Object(o["b"])({id:t}).then((function(a){if(200===a.data.code){var n=Object(c["a"])(e.dataSource);e.dataSource=n.filter((function(e){return e._id!==t})),e.$message.success(a.data.msg)}}))}}},s=i,u=(a("3aff"),a("cba8")),d=Object(u["a"])(s,n,r,!1,null,null,null);e["default"]=d.exports}}]);