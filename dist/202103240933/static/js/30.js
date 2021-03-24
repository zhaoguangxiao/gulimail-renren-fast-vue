webpackJsonp([30,57],{TqMj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,name:"",growthPoint:0,defaultStatus:0,freeFreightPoint:0,commentGrowthPoint:0,priviledgeFreeFreight:0,priviledgeMemberPrice:0,priviledgeBirthday:0,remark:""},dataRule:{name:[{required:!0,message:"等级名称不能为空",trigger:"blur"}],growthPoint:[{required:!0,message:"等级需要的成长值不能为空",trigger:"blur"}],defaultStatus:[{required:!0,message:"是否为默认等级[0->不是；1->是]不能为空",trigger:"blur"}],freeFreightPoint:[{required:!0,message:"免运费标准不能为空",trigger:"blur"}],commentGrowthPoint:[{required:!0,message:"每次评价获取的成长值不能为空",trigger:"blur"}],priviledgeFreeFreight:[{required:!0,message:"是否有免邮特权不能为空",trigger:"blur"}],priviledgeMemberPrice:[{required:!0,message:"是否有会员价格特权不能为空",trigger:"blur"}],priviledgeBirthday:[{required:!0,message:"是否有生日特权不能为空",trigger:"blur"}],remark:[{required:!0,message:"备注不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/member/memberlevel/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(console.log("数据查询成功 :>> ",a),t.dataForm.name=a.userLevel.name,t.dataForm.growthPoint=a.userLevel.growthPoint||0,t.dataForm.defaultStatus=a.userLevel.defaultStatus||0,t.dataForm.freeFreightPoint=a.userLevel.freeFreightPoint||0,t.dataForm.commentGrowthPoint=a.userLevel.commentGrowthPoint||0,t.dataForm.priviledgeFreeFreight=a.userLevel.priviledgeFreeFreight||0,t.dataForm.priviledgeMemberPrice=a.userLevel.priviledgeMemberPrice||0,t.dataForm.priviledgeBirthday=a.userLevel.priviledgeBirthday||0,t.dataForm.remark=a.userLevel.remark)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/member/memberlevel/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,name:e.dataForm.name,growthPoint:e.dataForm.growthPoint,defaultStatus:e.dataForm.defaultStatus,freeFreightPoint:e.dataForm.freeFreightPoint,commentGrowthPoint:e.dataForm.commentGrowthPoint,priviledgeFreeFreight:e.dataForm.priviledgeFreeFreight,priviledgeMemberPrice:e.dataForm.priviledgeMemberPrice,priviledgeBirthday:e.dataForm.priviledgeBirthday,remark:e.dataForm.remark})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"等级名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"等级名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所需成长值",prop:"growthPoint"}},[a("el-input-number",{attrs:{min:0},model:{value:e.dataForm.growthPoint,callback:function(t){e.$set(e.dataForm,"growthPoint",t)},expression:"dataForm.growthPoint"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"默认等级",prop:"defaultStatus"}},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dataForm.defaultStatus,callback:function(t){e.$set(e.dataForm,"defaultStatus",t)},expression:"dataForm.defaultStatus"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"免运费标准",prop:"freeFreightPoint"}},[a("el-input-number",{attrs:{min:0},model:{value:e.dataForm.freeFreightPoint,callback:function(t){e.$set(e.dataForm,"freeFreightPoint",t)},expression:"dataForm.freeFreightPoint"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"每次评价获取的成长值",prop:"commentGrowthPoint"}},[a("el-input-number",{attrs:{min:0},model:{value:e.dataForm.commentGrowthPoint,callback:function(t){e.$set(e.dataForm,"commentGrowthPoint",t)},expression:"dataForm.commentGrowthPoint"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否有免邮特权",prop:"priviledgeFreeFreight"}},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dataForm.priviledgeFreeFreight,callback:function(t){e.$set(e.dataForm,"priviledgeFreeFreight",t)},expression:"dataForm.priviledgeFreeFreight"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否有会员价格特权",prop:"priviledgeMemberPrice"}},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dataForm.priviledgeMemberPrice,callback:function(t){e.$set(e.dataForm,"priviledgeMemberPrice",t)},expression:"dataForm.priviledgeMemberPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否有生日特权",prop:"priviledgeBirthday"}},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dataForm.priviledgeBirthday,callback:function(t){e.$set(e.dataForm,"priviledgeBirthday",t)},expression:"dataForm.priviledgeBirthday"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.remark,callback:function(t){e.$set(e.dataForm,"remark",t)},expression:"dataForm.remark"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=a("VU/8")(r,i,!1,null,null,null);t.default=l.exports},"f/nM":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("TqMj").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/member/memberlevel/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/member/memberlevel/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("member:memberlevel:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("member:memberlevel:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"等级名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"growthPoint","header-align":"center",align:"center",label:"所需成长值"}}),e._v(" "),a("el-table-column",{attrs:{prop:"defaultStatus","header-align":"center",align:"center",label:"默认等级"},scopedSlots:e._u([{key:"default",fn:function(e){return[1==e.row.defaultStatus?a("i",{staticClass:"el-icon-success"}):a("i",{staticClass:"el-icon-error"})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"freeFreightPoint","header-align":"center",align:"center",label:"免运费标准"}}),e._v(" "),a("el-table-column",{attrs:{prop:"commentGrowthPoint","header-align":"center",align:"center",label:"每次评价获取的成长值"}}),e._v(" "),a("el-table-column",{attrs:{label:"特权"}},[a("el-table-column",{attrs:{prop:"priviledgeFreeFreight","header-align":"center",align:"center",label:"免邮特权"},scopedSlots:e._u([{key:"default",fn:function(e){return[1==e.row.priviledgeFreeFreight?a("i",{staticClass:"el-icon-success"}):a("i",{staticClass:"el-icon-error"})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"priviledgeMemberPrice","header-align":"center",align:"center",label:"会员价格特权"},scopedSlots:e._u([{key:"default",fn:function(e){return[1==e.row.priviledgeMemberPrice?a("i",{staticClass:"el-icon-success"}):a("i",{staticClass:"el-icon-error"})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"priviledgeBirthday","header-align":"center",align:"center",label:"生日特权"},scopedSlots:e._u([{key:"default",fn:function(e){return[1==e.row.priviledgeBirthday?a("i",{staticClass:"el-icon-success"}):a("i",{staticClass:"el-icon-error"})]}}])})],1),e._v(" "),a("el-table-column",{attrs:{prop:"remark","header-align":"center",align:"center",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},l=a("VU/8")(r,i,!1,null,null,null);t.default=l.exports}});