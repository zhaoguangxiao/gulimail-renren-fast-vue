webpackJsonp([29,58],{SjHk:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:t("l3Go").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/member/member/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(a){var t=a.data;t&&0===t.code?(e.dataList=t.page.list,e.totalPage=t.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var a=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){a.$refs.addOrUpdate.init(e)})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mod-config"},[t("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.getDataList()}}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(a){e.$set(e.dataForm,"key",a)},expression:"dataForm.key"}})],1),e._v(" "),t("el-form-item",[t("el-button",{on:{click:function(a){e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[t("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),e._v(" "),t("el-table-column",{attrs:{prop:"levelId","header-align":"center",align:"center",label:"会员等级"}}),e._v(" "),t("el-table-column",{attrs:{prop:"username","header-align":"center",align:"center",label:"用户名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"nickname","header-align":"center",align:"center",label:"昵称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"mobile","header-align":"center",align:"center",label:"手机号码"}}),e._v(" "),t("el-table-column",{attrs:{prop:"email","header-align":"center",align:"center",label:"邮箱"}}),e._v(" "),t("el-table-column",{attrs:{prop:"header","header-align":"center",align:"center",label:"头像"}}),e._v(" "),t("el-table-column",{attrs:{prop:"gender","header-align":"center",align:"center",label:"性别"}}),e._v(" "),t("el-table-column",{attrs:{prop:"birth","header-align":"center",align:"center",label:"生日"}}),e._v(" "),t("el-table-column",{attrs:{prop:"city","header-align":"center",align:"center",label:"所在城市"}}),e._v(" "),t("el-table-column",{attrs:{prop:"job","header-align":"center",align:"center",label:"职业"}}),e._v(" "),t("el-table-column",{attrs:{prop:"sign","header-align":"center",align:"center",label:"个性签名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"sourceType","header-align":"center",align:"center",label:"用户来源"}}),e._v(" "),t("el-table-column",{attrs:{prop:"integration","header-align":"center",align:"center",label:"积分"}}),e._v(" "),t("el-table-column",{attrs:{prop:"growth","header-align":"center",align:"center",label:"成长值"}}),e._v(" "),t("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"启用状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},model:{value:a.row.status,callback:function(t){e.$set(a.row,"status",t)},expression:"scope.row.status"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"注册时间"}}),e._v(" "),t("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"}},[e._v("送券")]),e._v(" "),t("el-button",{attrs:{type:"text",size:"small"}},[e._v("查订单")])]}}])})],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?t("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},o=t("VU/8")(r,l,!1,null,null,null);a.default=o.exports},l3Go:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,levelId:"",username:"",password:"",nickname:"",mobile:"",email:"",header:"",gender:"",birth:"",city:"",job:"",sign:"",sourceType:"",integration:"",growth:"",status:"",createTime:""},dataRule:{levelId:[{required:!0,message:"会员等级id不能为空",trigger:"blur"}],username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],nickname:[{required:!0,message:"昵称不能为空",trigger:"blur"}],mobile:[{required:!0,message:"手机号码不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"}],header:[{required:!0,message:"头像不能为空",trigger:"blur"}],gender:[{required:!0,message:"性别不能为空",trigger:"blur"}],birth:[{required:!0,message:"生日不能为空",trigger:"blur"}],city:[{required:!0,message:"所在城市不能为空",trigger:"blur"}],job:[{required:!0,message:"职业不能为空",trigger:"blur"}],sign:[{required:!0,message:"个性签名不能为空",trigger:"blur"}],sourceType:[{required:!0,message:"用户来源不能为空",trigger:"blur"}],integration:[{required:!0,message:"积分不能为空",trigger:"blur"}],growth:[{required:!0,message:"成长值不能为空",trigger:"blur"}],status:[{required:!0,message:"启用状态不能为空",trigger:"blur"}],createTime:[{required:!0,message:"注册时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:a.$http.adornUrl("/member/member/info/"+a.dataForm.id),method:"get",params:a.$http.adornParams()}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.levelId=t.member.levelId,a.dataForm.username=t.member.username,a.dataForm.password=t.member.password,a.dataForm.nickname=t.member.nickname,a.dataForm.mobile=t.member.mobile,a.dataForm.email=t.member.email,a.dataForm.header=t.member.header,a.dataForm.gender=t.member.gender,a.dataForm.birth=t.member.birth,a.dataForm.city=t.member.city,a.dataForm.job=t.member.job,a.dataForm.sign=t.member.sign,a.dataForm.sourceType=t.member.sourceType,a.dataForm.integration=t.member.integration,a.dataForm.growth=t.member.growth,a.dataForm.status=t.member.status,a.dataForm.createTime=t.member.createTime)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/member/member/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,levelId:e.dataForm.levelId,username:e.dataForm.username,password:e.dataForm.password,nickname:e.dataForm.nickname,mobile:e.dataForm.mobile,email:e.dataForm.email,header:e.dataForm.header,gender:e.dataForm.gender,birth:e.dataForm.birth,city:e.dataForm.city,job:e.dataForm.job,sign:e.dataForm.sign,sourceType:e.dataForm.sourceType,integration:e.dataForm.integration,growth:e.dataForm.growth,status:e.dataForm.status,createTime:e.dataForm.createTime})}).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"会员等级id",prop:"levelId"}},[t("el-input",{attrs:{placeholder:"会员等级id"},model:{value:e.dataForm.levelId,callback:function(a){e.$set(e.dataForm,"levelId",a)},expression:"dataForm.levelId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.dataForm.username,callback:function(a){e.$set(e.dataForm,"username",a)},expression:"dataForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"密码"},model:{value:e.dataForm.password,callback:function(a){e.$set(e.dataForm,"password",a)},expression:"dataForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[t("el-input",{attrs:{placeholder:"昵称"},model:{value:e.dataForm.nickname,callback:function(a){e.$set(e.dataForm,"nickname",a)},expression:"dataForm.nickname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[t("el-input",{attrs:{placeholder:"手机号码"},model:{value:e.dataForm.mobile,callback:function(a){e.$set(e.dataForm,"mobile",a)},expression:"dataForm.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.dataForm.email,callback:function(a){e.$set(e.dataForm,"email",a)},expression:"dataForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"头像",prop:"header"}},[t("el-input",{attrs:{placeholder:"头像"},model:{value:e.dataForm.header,callback:function(a){e.$set(e.dataForm,"header",a)},expression:"dataForm.header"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"gender"}},[t("el-input",{attrs:{placeholder:"性别"},model:{value:e.dataForm.gender,callback:function(a){e.$set(e.dataForm,"gender",a)},expression:"dataForm.gender"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"生日",prop:"birth"}},[t("el-input",{attrs:{placeholder:"生日"},model:{value:e.dataForm.birth,callback:function(a){e.$set(e.dataForm,"birth",a)},expression:"dataForm.birth"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"所在城市",prop:"city"}},[t("el-input",{attrs:{placeholder:"所在城市"},model:{value:e.dataForm.city,callback:function(a){e.$set(e.dataForm,"city",a)},expression:"dataForm.city"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"职业",prop:"job"}},[t("el-input",{attrs:{placeholder:"职业"},model:{value:e.dataForm.job,callback:function(a){e.$set(e.dataForm,"job",a)},expression:"dataForm.job"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"个性签名",prop:"sign"}},[t("el-input",{attrs:{placeholder:"个性签名"},model:{value:e.dataForm.sign,callback:function(a){e.$set(e.dataForm,"sign",a)},expression:"dataForm.sign"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"用户来源",prop:"sourceType"}},[t("el-input",{attrs:{placeholder:"用户来源"},model:{value:e.dataForm.sourceType,callback:function(a){e.$set(e.dataForm,"sourceType",a)},expression:"dataForm.sourceType"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"积分",prop:"integration"}},[t("el-input",{attrs:{placeholder:"积分"},model:{value:e.dataForm.integration,callback:function(a){e.$set(e.dataForm,"integration",a)},expression:"dataForm.integration"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"成长值",prop:"growth"}},[t("el-input",{attrs:{placeholder:"成长值"},model:{value:e.dataForm.growth,callback:function(a){e.$set(e.dataForm,"growth",a)},expression:"dataForm.growth"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"启用状态",prop:"status"}},[t("el-input",{attrs:{placeholder:"启用状态"},model:{value:e.dataForm.status,callback:function(a){e.$set(e.dataForm,"status",a)},expression:"dataForm.status"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"注册时间",prop:"createTime"}},[t("el-input",{attrs:{placeholder:"注册时间"},model:{value:e.dataForm.createTime,callback:function(a){e.$set(e.dataForm,"createTime",a)},expression:"dataForm.createTime"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=t("VU/8")(r,l,!1,null,null,null);a.default=o.exports}});