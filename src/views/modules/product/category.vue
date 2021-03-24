<template>
  <div>
    <el-switch
      v-model="draggable"
      active-color="#13ce66"
      active-text="开启拖拽"
      inactive-text="关闭拖拽"
    >
    </el-switch>
    <el-button @click="batchdel" type="danger">批量删除</el-button>
    <el-tree
      :data="menus"
      :props="defaultProps"
      node-key="catId"
      show-checkbox
      :draggable="draggable"
      highlight-current
      :allow-drop="allowDrop"
      :default-expanded-keys="expandenKeys"
      @node-click="handleNodeClick"
      :expand-on-click-node="false"
      @node-drop="handleDrop"
      ref="tree"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            v-if="data.catLevel <= 2"
            type="text"
            size="mini"
            @click="() => append(data)"
          >
            Append
          </el-button>

          <el-button type="text" size="mini" @click="() => edit(node, data)">
            Edit
          </el-button>

          <el-button
            v-if="data.catLevel == 3 || data.subcategoryList == 0"
            type="text"
            size="mini"
            @click="() => remove(node, data)"
          >
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>

    <el-dialog
      :title="titlemsg"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form :model="category">
        <el-form-item label="分类名称">
          <el-input v-model="category.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图标">
          <el-input v-model="category.icon" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="计量单位">
          <el-input
            v-model="category.productUnit"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitCategory">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      draggable: false, //默认不支持拖拽
      updateNodes: [],
      maximumDrag: 0, //最大拖拽节点
      titlemsg: "", //定义弹出框title
      submitType: "", //edit add
      category: {
        catId: null,
        name: "",
        parentCid: 0,
        catLevel: 0,
        showStatus: 1,
        sort: 0,
        icon: "",
        productUnit: "",
      },
      menus: [],
      dialogVisible: false,
      expandenKeys: [],
      defaultProps: {
        children: "subcategoryList",
        label: "name",
      },
    };
  },
  methods: {
    //批量删除选中
    batchdel() {
      let catIds = [];
      let checkNodes = this.$refs.tree.getCheckedNodes();
      if (checkNodes.length > 0) {
        for (let i = 0; i < checkNodes.length; i++) {
          catIds.push(checkNodes[i].catId);
          this.$confirm(`是否批量删除${catIds}菜单?`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then(() => {
              this.$http({
                url: this.$http.adornUrl("/product/category/delete"),
                method: "post",
                data: this.$http.adornData(catIds, false),
              }).then(({ data }) => {
                //刷新菜单
                this.getMethodsTree();
                this.$message({
                  type: "success",
                  message: "菜单批量删除成功!",
                });
                //重新赋值为null
                catIds = [];
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除",
              });
            });
        }
      }
      this.$message({
        message: "请选中你要批量删除的分类名称",
        type: "warning",
      });
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("handleDrop: ", draggingNode, dropNode, dropType, ev);
      //获取当前最新的父节点
      let pcid = 0;
      let siblings = null;
      if (dropType == "before" || dropType == "after") {
        pcid =
          dropNode.parent.data.catId == undefined
            ? 0
            : dropNode.parent.data.catId;
        siblings = dropNode.parent.childNodes;
      } else {
        pcid = dropNode.data.catId;
        siblings = dropNode.childNodes;
      }

      //2 当前拖拽节点的最新顺序
      for (let i = 0; i < siblings.length; i++) {
        //判断是否为拖拽的节点
        if (siblings[i].data.catId == draggingNode.data.catId) {
          //定义层级变量
          let catLeaveNode = draggingNode.level;
          if (draggingNode.level != siblings[i].level) {
            //当前节点层级发生变化
            catLeaveNode = siblings[i].level;
            //修改子节点的层级
            this.updateChildNodeLevel(siblings[i]);
          }
          this.updateNodes.push({
            catId: siblings[i].data.catId,
            sort: i,
            parentCid: pcid,
            catLevel: catLeaveNode,
          });
        } else {
          this.updateNodes.push({ catId: siblings[i].data.catId, sort: i });
        }
      }
      //3 当前拖拽节点的最新层级
      console.log("updateNodes :>> ", this.updateNodes);
      this.$http({
        url: this.$http.adornUrl("/product/category/update/sort"),
        method: "post",
        data: this.$http.adornData(this.updateNodes, false),
      }).then(({ data }) => {
        this.$message({
          type: "success",
          message: "菜单顺序修改成功",
        });
        //刷新
        this.getMethodsTree();
        //展开删除后的父节点
        this.expandenKeys = [pcid];
        this.updateNodes = [];
        this.maximumDrag = 0; //最大拖拽节点
      });
    },
    updateChildNodeLevel(node) {
      if (node.childNodes.length > 0) {
        for (let i = 0; i < node.childNodes.length; i++) {
          var cnode = node.childNodes[i].data;
          this.updateNodes.push({
            catId: cnode.catId,
            catLevel: node.childNodes[i].level,
          });
          //递归查找
          this.updateChildNodeLevel(node.childNodes[i]);
        }
      }
    },
    //判断节点是否可以被拖拽到指定节点
    // draggingNode 当前节点
    // dropNode 拖拽到哪个节点上
    // type 类型
    allowDrop(draggingNode, dropNode, type) {
      console.log("allowDrop :>> ", draggingNode, dropNode, type);
      //判断被拖拽的当前节点以及所在的父节点总层数不能大于3

      //1),判断被拖拽的当前节点的总层数
      this.getMaximumDrag(draggingNode.data);
      let deep = this.maximumDrag - draggingNode.data.catLevel + 1;
      console.log("深度 :>> ", deep);
      if (type == "inner") {
        console.log(
          `this.maximumDrag:${this.maximumDrag} ---> draggingNode.data.catLevel: ${draggingNode.data.catLevel}  --> dropNode.level ${dropNode.level}`
        );
        return deep + dropNode.level <= 3;
      } else {
        return deep + dropNode.parent.level <= 3;
      }
    },
    //获取最大的拖拽节点
    getMaximumDrag(draggingNode) {
      if (
        draggingNode.subcategoryList != null &&
        draggingNode.subcategoryList.length > 0
      ) {
        for (let i = 0; i < draggingNode.subcategoryList.length; i++) {
          if (draggingNode.subcategoryList[i].catLevel > this.maximumDrag) {
            //交换位置 获取最大值
            console.log(
              "交换位置 :>> ",
              draggingNode.subcategoryList[i].catLevel
            );
            this.maximumDrag = draggingNode.subcategoryList[i].catLevel;
          }
          this.getMaximumDrag(draggingNode.subcategoryList[i]);
        }
      }
    },
    //恢复category 对象的方法
    recoveryCategory() {
      this.category.name = "";
      this.category.catId = null;
      this.category.icon = "";
      this.category.productUnit = "";
    },
    //提交方法
    submitCategory() {
      //判断是否为提交方法
      if (this.submitType == "add") {
        this.saveCategory();
      }
      //判断是否为修改方法
      if (this.submitType == "edit") {
        this.editCategory();
      }
    },
    editCategory() {
      //使用结构表达式解析出 需要发送的内容
      var { name, catId, icon, productUnit } = this.category;
      //转换为对象的方式
      var data = {
        name: name,
        catId: catId,
        icon: icon,
        productUnit: productUnit,
      };
      this.$http({
        url: this.$http.adornUrl("/product/category/update"),
        method: "post",
        data: this.$http.adornData(data, false),
      }).then(({ data }) => {
        console.log("菜单修改成功 :>> ", data);
        //关掉分类菜单
        this.dialogVisible = false;
        //刷新分类菜单
        this.getMethodsTree();
        //展开父节点
        this.expandenKeys = [this.category.parentCid];
        this.$message({
          type: "success",
          message: "菜单修改成功",
        });
      });
    },

    //edit修改菜单方法
    edit(node, data) {
      console.log("edit :>> ", node);
      console.log("edit :>> ", data);
      //设置修改提交状态
      this.submitType = "edit";
      this.titlemsg = "修改分类";
      //打开弹出框
      this.dialogVisible = true;

      this.$http({
        url: this.$http.adornUrl(`/product/category/info/${data.catId}`),
        method: "get",
      }).then(({ data }) => {
        console.log("回显的数据是 :>> ", data);
        //回显数据
        this.category.name = data.category.name;
        this.category.catId = data.category.catId;
        this.category.icon = data.category.icon;
        this.category.productUnit = data.category.productUnit;
        this.category.parentCid = data.category.parentCid;
      });
    },
    //添加 分类菜单
    saveCategory() {
      console.log("category :>> ", this.category);
      this.$http({
        url: this.$http.adornUrl("/product/category/save"),
        method: "post",
        data: this.$http.adornData(this.category, false),
      }).then(({ data }) => {
        //关掉分类菜单
        this.dialogVisible = false;
        //刷新分类菜单
        this.getMethodsTree();
        //展开父节点
        this.expandenKeys = [this.category.parentCid];
        this.$message({
          type: "success",
          message: "菜单添加成功",
        });
      });
    },
    handleNodeClick(data) {
      console.log(data);
      this.dialogVisible = true;
    },
    //获取树形结构数据
    getMethodsTree() {
      this.$http({
        url: this.$http.adornUrl("/product/category/list/tree"),
        method: "get",
      }).then(({ data }) => {
        console.log("data :>> ", data.data);
        this.menus = data.data;
      });
    },
    append(data) {
      console.log("append :>> ", data);
      //设置提交状态
      this.submitType = "add";
      this.titlemsg = "添加分类";
      //设置父分类id
      this.category.parentCid = data.catId;
      //设置 层级
      this.category.catLevel = data.catLevel * 1 + 1;
      //清空输入框内容
      this.recoveryCategory();
    },

    remove(node, data) {
      console.log("node :>> ", node.parent.data.catId);
      console.log("data.catId :>> ", data.catId);
      let ids = [data.catId];

      this.$confirm(`是否删除当前${data.name}菜单, 是否删除?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //发送请求进行删除
          this.$http({
            url: this.$http.adornUrl("/product/category/delete"),
            method: "post",
            data: this.$http.adornData(ids, false),
          }).then(({ data }) => {
            //展开删除后的父节点
            this.expandenKeys = [node.parent.data.catId];
            this.$message({
              type: "success",
              message: "菜单删除成功",
            });
            //刷新tree
            this.getMethodsTree();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.getMethodsTree();
  },
};
</script>

<style scoped>
</style>