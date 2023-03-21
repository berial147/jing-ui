<template>
  <div>
    <button @click="handleBtnClick">按钮</button>
    <button @click="handleDialogClick">弹窗</button>
    <button @click="handleInputClick">输入框</button>
    <button @click="handleSwitchClick">开关</button>
    <button @click="handleRadioClick">单选框</button>
    <button @click="handleCheckboxClick">复选框</button>
    <button @click="handleFormClick">表单</button>
    <button @click="handleInputNumberClick">计数器</button>

    <router-link to="/ButtonPage"></router-link>
    <router-link to="/DialogPage"></router-link>
    <router-link to="/InputPage"></router-link>
    <router-link to="/SwitchPage"></router-link>
    <router-link to="/RadioPage"></router-link>
    <router-link to="/CheckboxPage"></router-link>
    <router-link to="/FormPage"></router-link>
    <router-link to="/InputNumberPage"></router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleBtnClick() {
      this.$router.push({ name: "ButtonPage" });
    },
    handleDialogClick() {
      this.$router.push({ name: "DialogPage" });
    },
    handleInputClick() {
      this.$router.push({ name: "InputPage" });
    },
    handleSwitchClick() {
      this.$router.push({ name: "SwitchPage" });
    },
    handleRadioClick() {
      this.$router.push({ name: "RadioPage" });
    },
    handleCheckboxClick() {
      this.$router.push({ name: "CheckboxPage" });
    },
    handleFormClick() {
      this.$router.push({ name: "FormPage" });
    },
    handleInputNumberClick() {
      this.$router.push({ name: "InputNumberPage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .zj-button {
    margin-right: 20px;
  }
}
</style>
