<template>
  <div>
    <zj-radio label="1" v-model="gender">男</zj-radio>
    <zj-radio label="0" v-model="gender">女</zj-radio>

    <zj-radio label="1" v-model="gender"></zj-radio>
    <zj-radio label="0" v-model="gender"></zj-radio>

    <zj-radio-group v-model="gender">
      <zj-radio label="1">男</zj-radio>
      <zj-radio label="0">女</zj-radio>
    </zj-radio-group>
  </div>
</template>

<script>
export default {
  name: "RadioPage",
  data() {
    return {
      gender: "1",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
