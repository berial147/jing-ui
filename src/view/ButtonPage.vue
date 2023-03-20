<template>
  <div>
    <div class="text">按钮类型</div>
    <div class="row">
      <zj-button disabled @click="handleDefaultClick">默认按钮</zj-button>
      <zj-button type="primary" @click="handlePrimaryClick">主要按钮</zj-button>
      <zj-button type="success" @click="handleSuccessClick">成功按钮</zj-button>
      <zj-button type="info" @click="handleInfoClick">信息按钮</zj-button>
      <zj-button type="warning" @click="handleWarningClick">警告按钮</zj-button>
      <zj-button type="danger" @click="handleDangerClick">危险按钮</zj-button>
    </div>
    <div class="text">朴素按钮</div>
    <div class="row">
      <zj-button plain>按钮</zj-button>
      <zj-button plain type="primary">按钮</zj-button>
      <zj-button plain type="success">按钮</zj-button>
      <zj-button plain type="info">按钮</zj-button>
      <zj-button plain type="warning">按钮</zj-button>
      <zj-button plain type="danger">按钮</zj-button>
    </div>
    <div class="text">圆角按钮</div>
    <div class="row">
      <zj-button icon="zj-icon-nanzhuang" round>按钮</zj-button>
      <zj-button icon="zj-icon-nvzhuang" round type="primary">按钮</zj-button>
      <zj-button icon="zj-icon-neiyi" round type="success">按钮</zj-button>
      <zj-button icon="zj-icon-kuzi" round type="info">按钮</zj-button>
      <zj-button icon="zj-icon-muying" round type="warning">按钮</zj-button>
      <zj-button icon="zj-icon-jujia" round type="danger">按钮</zj-button>
    </div>
    <div class="text">圆形按钮</div>
    <div class="row">
      <zj-button circle>拆</zj-button>
      <zj-button circle type="primary">拆</zj-button>
      <zj-button circle type="success">拆</zj-button>
      <zj-button circle type="info">拆</zj-button>
      <zj-button circle type="warning">拆</zj-button>
      <zj-button circle type="danger">拆</zj-button>
    </div>
    <div class="text">图标按钮</div>
    <div class="row">
      <zj-button icon="zj-icon-nanzhuang"></zj-button>
      <zj-button icon="zj-icon-nvzhuang" type="primary"></zj-button>
      <zj-button icon="zj-icon-neiyi" type="success"></zj-button>
      <zj-button icon="zj-icon-kuzi" type="info"></zj-button>
      <zj-button icon="zj-icon-muying" type="warning"></zj-button>
      <zj-button icon="zj-icon-jujia" type="danger"></zj-button>
    </div>
    <div class="text">禁用按钮</div>
    <div class="row">
      <zj-button disabled icon="zj-icon-nanzhuang"></zj-button>
      <zj-button disabled icon="zj-icon-nvzhuang" type="primary"></zj-button>
      <zj-button disabled icon="zj-icon-neiyi" type="success"></zj-button>
      <zj-button disabled icon="zj-icon-kuzi" type="info"></zj-button>
      <zj-button disabled icon="zj-icon-muying" type="warning"></zj-button>
      <zj-button disabled icon="zj-icon-jujia" type="danger"></zj-button>
    </div>
    <div class="row">
      <zj-button disabled plain icon="zj-icon-nanzhuang"></zj-button>
      <zj-button
        disabled
        plain
        icon="zj-icon-nvzhuang"
        type="primary"
      ></zj-button>
      <zj-button disabled plain icon="zj-icon-neiyi" type="success"></zj-button>
      <zj-button disabled plain icon="zj-icon-kuzi" type="info"></zj-button>
      <zj-button
        disabled
        plain
        icon="zj-icon-muying"
        type="warning"
      ></zj-button>
      <zj-button disabled plain icon="zj-icon-jujia" type="danger"></zj-button>
    </div>
    <div class="text">按钮大小</div>
    <div class="row">
      <zj-button>按钮</zj-button>
      <zj-button size="mini" type="primary">按钮</zj-button>
      <zj-button size="small" type="success">按钮</zj-button>
      <zj-button size="medium" type="info">按钮</zj-button>
      <zj-button size="large" type="warning">按钮</zj-button>
      <zj-button size="" type="danger">按钮</zj-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonPage",
  methods: {
    handleDefaultClick() {
      console.log("默认按钮");
    },
    handlePrimaryClick() {
      console.log("主要按钮");
    },
    handleSuccessClick() {
      console.log("成功按钮");
    },
    handleInfoClick() {
      console.log("信息按钮");
    },
    handleWarningClick() {
      console.log("警告按钮");
    },
    handleDangerClick() {
      console.log("危险按钮");
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
.text {
  margin: 5px 0;
}
</style>
