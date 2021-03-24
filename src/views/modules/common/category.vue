<template>
  <!-- 添加绑定时间 nodeClick -->
  <el-tree
    :data="menus"
    :props="defaultProps"
    node-key="catId"
    ref="tree"
    @node-click="nodeClick"
  >
  </el-tree>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      menus: [],
      expandenKeys: [],
      defaultProps: {
        children: "subcategoryList",
        label: "name",
      },
    };
  },
  methods: {
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
    //点击事件
    nodeClick(date, Node, component) {
      //向父组件发送事件
      this.$emit("tree-node-click",date, Node, component)
    },
  },
  created() {
    this.getMethodsTree();
  },
};
</script>
<style scoped>
</style>