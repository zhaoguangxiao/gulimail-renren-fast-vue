webpackJsonp([10],{cFZF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("0xDb"),n=a("Q7M0"),o={data:function(){var e=this;return{visible:!1,dataForm:{id:0,type:1,typeList:["目录","菜单","按钮"],name:"",parentId:0,parentName:"",url:"",perms:"",orderNum:0,icon:"",iconList:[]},dataRule:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级菜单不能为空",trigger:"change"}],url:[{validator:function(t,a,r){1!==e.dataForm.type||/\S/.test(a)?r():r(new Error("菜单URL不能为空"))},trigger:"blur"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){this.iconList=n.a.getNameList()},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.$http({url:this.$http.adornUrl("/sys/menu/select"),method:"get",params:this.$http.adornParams()}).then(function(e){var a=e.data;t.menuList=Object(r.d)(a.menuList,"menuId")}).then(function(){t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields()})}).then(function(){t.dataForm.id?t.$http({url:t.$http.adornUrl("/sys/menu/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;t.dataForm.id=a.menu.menuId,t.dataForm.type=a.menu.type,t.dataForm.name=a.menu.name,t.dataForm.parentId=a.menu.parentId,t.dataForm.url=a.menu.url,t.dataForm.perms=a.menu.perms,t.dataForm.orderNum=a.menu.orderNum,t.dataForm.icon=a.menu.icon,t.menuListTreeSetCurrentNode()}):t.menuListTreeSetCurrentNode()})},menuListTreeCurrentChangeHandle:function(e,t){this.dataForm.parentId=e.menuId,this.dataForm.parentName=e.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},iconActiveHandle:function(e){this.dataForm.icon=e},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/sys/menu/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({menuId:e.dataForm.id||void 0,type:e.dataForm.type,name:e.dataForm.name,parentId:e.dataForm.parentId,url:e.dataForm.url,perms:e.dataForm.perms,orderNum:e.dataForm.orderNum,icon:e.dataForm.icon})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},e._l(e.dataForm.typeList,function(t,r){return a("el-radio",{key:r,attrs:{label:r}},[e._v(e._s(t))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.dataForm.typeList[e.dataForm.type]+"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:e.dataForm.typeList[e.dataForm.type]+"名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"menuId","default-expand-all":!0,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.menuListTreeCurrentChangeHandle}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),1===e.dataForm.type?a("el-form-item",{attrs:{label:"菜单路由",prop:"url"}},[a("el-input",{attrs:{placeholder:"菜单路由"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1):e._e(),e._v(" "),0!==e.dataForm.type?a("el-form-item",{attrs:{label:"授权标识",prop:"perms"}},[a("el-input",{attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create"},model:{value:e.dataForm.perms,callback:function(t){e.$set(e.dataForm,"perms",t)},expression:"dataForm.perms"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"排序号",prop:"orderNum"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:e.dataForm.orderNum,callback:function(t){e.$set(e.dataForm,"orderNum",t)},expression:"dataForm.orderNum"}})],1):e._e(),e._v(" "),2!==e.dataForm.type?a("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-popover",{ref:"iconListPopover",attrs:{placement:"bottom-start",trigger:"click","popper-class":"mod-menu__icon-popover"}},[a("div",{staticClass:"mod-menu__icon-inner"},[a("div",{staticClass:"mod-menu__icon-list"},e._l(e.iconList,function(t,r){return a("el-button",{key:r,class:{"is-active":t===e.dataForm.icon},on:{click:function(a){e.iconActiveHandle(t)}}},[a("icon-svg",{attrs:{name:t}})],1)}))])]),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:iconListPopover",arg:"iconListPopover"}],staticClass:"icon-list__input",attrs:{readonly:!0,placeholder:"菜单图标名称"},model:{value:e.dataForm.icon,callback:function(t){e.$set(e.dataForm,"icon",t)},expression:"dataForm.icon"}})],1),e._v(" "),a("el-col",{staticClass:"icon-list__tips",attrs:{span:2}},[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v("全站推荐使用SVG Sprite, 详细请参考:"),a("a",{attrs:{href:"//github.com/daxiongYang/renren-fast-vue/blob/master/src/icons/index.js",target:"_blank"}},[e._v("icons/index.js")]),e._v("描述")]),e._v(" "),a("i",{staticClass:"el-icon-warning"})])],1)],1)],1):e._e()],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,i,!1,function(e){a("w6ZM")},null,null);t.default=s.exports},ciUr:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.mod-menu .menu-list__input > .el-input__inner,\n.mod-menu .icon-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu__icon-popover {\n  width: 458px;\n  overflow: hidden;\n}\n.mod-menu__icon-inner {\n  width: 478px;\n  max-height: 258px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.mod-menu__icon-list {\n  width: 458px;\n  padding: 0;\n  margin: -8px 0 0 -8px;\n}\n.mod-menu__icon-list > .el-button {\n    padding: 8px;\n    margin: 8px 0 0 8px;\n}\n.mod-menu__icon-list > .el-button > span {\n      display: inline-block;\n      vertical-align: middle;\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n}\n.mod-menu .icon-list__tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n",""])},w6ZM:function(e,t,a){var r=a("ciUr");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("0fab9de1",r,!0)}});