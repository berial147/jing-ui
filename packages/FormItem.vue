<template>
  <div class="zj-form-item">
    <label
      class="zj-form-item__label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="zj-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZjFormItem",
  props: {
    label: {
      type: String,
    },
  },
  inject: ["Form"],
  computed: {
    labelStyle() {
      return {
        // width: this.form.labelWidth,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.zj-form-item {
  margin-bottom: 25px;

  .zj-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }

  .zj-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
