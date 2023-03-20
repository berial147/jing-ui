<template>
  <div class="zj-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZjRadioGroup",
  provide() {
    return {
      // 依赖注入当前 zj-radio-group组件，使它的下级组件都能拿到它
      RadioGroup: this,
    };
  },
  props: {
    // zj-radio-group接收到了value值
    // 还需要触发当前组件的input事件
    // provide 与 inject
    value: {
      type: null,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
