<template>
  <div>
    <zj-input-number
      v-model="count"
      :step="0.5"
      :max="100"
      :min="0"
      :precision="2"
    ></zj-input-number>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "InputNumberPage",
  data() {
    return {
      count: 5,
    };
  },
};
</script>

<style lang="scss" scoped></style>
