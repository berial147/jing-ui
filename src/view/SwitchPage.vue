<template>
  <div>
    <zj-switch v-model="active"></zj-switch>
    <zj-switch
      v-model="active"
      active-color="red"
      inactive-color="green"
      name="username"
    ></zj-switch>
  </div>
</template>

<script>
export default {
  name: "SwitchPage",
  data() {
    return {
      active: false,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
