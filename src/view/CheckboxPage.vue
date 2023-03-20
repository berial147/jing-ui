<template>
  <div>
    <zj-checkbox v-model="active">是否选中</zj-checkbox>

    <zj-checkbox-group v-model="list">
      <zj-checkbox label="唱"></zj-checkbox>
      <zj-checkbox label="跳"></zj-checkbox>
      <zj-checkbox label="rap"></zj-checkbox>
      <zj-checkbox label="篮球"></zj-checkbox>
    </zj-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CheckboxPage",
  data() {
    return {
      active: false,
      list: ["唱", "跳", "rap", "篮球"],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
