<template>
  <div>
    <zj-form :model="model" label-width="100px">
      <zj-form-item label="用户名">
        <zj-input placeholder="请输入" v-model="model.username"></zj-input>
      </zj-form-item>
      <zj-form-item label="开关">
        <zj-switch v-model="model.active"></zj-switch>
      </zj-form-item>
    </zj-form>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      model: {
        username: "",
        active: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
