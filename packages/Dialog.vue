<template>
  <!-- 
  transition标签包裹的标签会自动添加类名：
  v-enter：进入前的样式
  v-enter-to：进入后的样式
  v-enter-active：进入时的动画
  v-leave：离开前的样式
  v-leave-to：离开后的样式
  v-leave-active：离开时的动画
  如果增加了name属性，则类名为name属性值替代v
-->
  <transition name="dialog-fade">
    <!-- 对话框遮罩 @click.self代表只有点击自己才触发 -->
    <div class="zj-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="zj-dialog" :style="{ width, marginTop: top }">
        <div class="zj-dialog__header">
          <slot name="title">
            <span class="zj-dialog__title">
              {{ title }}
            </span>
          </slot>
          <button class="zj-dialog__headerbtn">
            <i class="zj-icon-guanbi1" @click="handleClose"></i>
          </button>
        </div>
        <div class="zj-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="zj-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ZjDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      // .sync修饰符是一个语法糖 当父组件传值为 :visible="visible"时，相当于父组件会默认注册一个@update:visible事件去修改这个值，所以我们需要向父组件传递这个方法
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
// scoped会给当前组件的模板中的所有的元素都添加一个随机的属性
// scoped会给当前组件中所有的样式也添加一个对应的属性选择器
.zj-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .zj-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;

      .zj-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .zj-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // 深度选择器 scss中是 ::v-deep less中是 /deep/ css中是 >>> 原理是加了深度选择器的元素样式不会添加上随机的属性选择器
      ::v-deep .zj-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.5s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
