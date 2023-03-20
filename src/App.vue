<template>
  <div id="app">
    <!-- <Home /> -->
    <zj-button
      v-if="$route.path !== '/'"
      circle
      size='mini'
      icon="zj-icon-shouye"
      @click="handleBtnClick"
    ></zj-button>
    <router-view />
  </div>
</template>

<script>
import Home from "@/view/Home";
export default {
  name: "App",
  components: { Home },
  created() {},
  methods: {
    handleBtnClick() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss"></style>
