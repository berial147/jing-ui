<template>
  <div class="zj-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZjCheckboxGroup",
  props: {
    value: {
      type: Array,
      default: [],
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
};
</script>

<style lang="scss" scoped></style>
