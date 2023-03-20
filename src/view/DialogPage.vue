<template>
  <div>
    <zj-button @click="visible = true">显示dialog</zj-button>
    <!-- .sync修饰符是一个语法糖 当父组件传值为 :visible.sync="visible"时，父组件会默认注册一个@update:visible事件去修改这个值。相当于:visivle="visivle" 与 @update:visible="this.visible=val" -->
    <zj-dialog title="温馨提示" width="60%" top="100px" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <zj-button @click="visible = false">取消</zj-button>
        <zj-button type="primary" @click="visible = false">确定</zj-button>
      </template>
    </zj-dialog>

    <!-- <zj-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </zj-dialog> -->
  </div>
</template>

<script>
export default {
  name: "DialogPage",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style></style>
