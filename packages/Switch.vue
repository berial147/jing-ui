<template>
  <div class="zj-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <!-- 用户在使用switch组件的时候，实质上是当成表单元素来使用的，因此可能会用到组件的name属性，因此需要在switch组件中添加一个checkbox，并且当值改变的时候，也需要设置checkbox的value值 -->
    <input class="zj-switch__input" type="checkbox" :name="name" ref="input" />
    <span class="zj-switch__core" ref="core">
      <span class="zj-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "ZjSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  mounted() {
    // 修改开关的颜色
    this.setColor();
    // 将input的checked值与value值同步
    this.$refs.input.checked = this.value;
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      // 点击的时候，还需要修改背景色
      // 由于子组件的value改变后，向父组件emit了一个事件，但此时父组件的值还没修改就已经执行了setColor，所以我们需要等待value发生改变后，再setColor，此时可以使用nextTick
      // 数据修改后，等待DOM更新，再修改按钮的颜色
      await this.$nextTick();
      this.setColor();
      // 将input的checked值与value值同步
      this.$refs.input.checked = this.value;
    },
    setColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.zj-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .zj-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .zj-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .zj-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background: #fff;
    }
  }
}

.zj-switch.is-checked {
  .zj-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .zj-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
