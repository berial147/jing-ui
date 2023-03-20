<template>
  <button
    class="zj-button"
    :class="[
      `zj-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
      `zj-button--${size}`,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容，当我们没有传入插槽的时候，不显示插槽 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "ZjButton",
  // 封装一个通用的组件，会对props做一个约束，对props进行校验
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) => {
        return [
          "default",
          "primary",
          "success",
          "info",
          "warning",
          "danger",
          "",
        ].includes(value);
      },
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return [
          "default",
          "mini",
          "small",
          "medium",
          "large",
          "default",
          "",
        ].includes(value);
      },
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.zj-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    color: #c6e2ff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.zj-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

.zj-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.zj-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}

.zj-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.zj-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// 朴素按钮
.zj-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}

.zj-button--primary.is-plain {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;

  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

.zj-button--success.is-plain {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;

  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.zj-button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;

  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}

.zj-button--warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;

  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}

.zj-button--danger.is-plain {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;

  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// 圆角按钮
.zj-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形按钮
.zj-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 既有icon又有文字的按钮
.zj-button [class*="zj-icon-"] + span {
  margin-left: 5px;
}

// 禁用按钮
.zj-button.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.zj-button--primary.is-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
  cursor: not-allowed;
}
.zj-button--success.is-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
  cursor: not-allowed;
}
.zj-button--info.is-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
  cursor: not-allowed;
}
.zj-button--warning.is-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
  cursor: not-allowed;
}
.zj-button--danger.is-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
  cursor: not-allowed;
}
.zj-button.is-plain.is-disabled {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
  cursor: not-allowed;
}
.zj-button--primary.is-plain.is-disabled {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
  cursor: not-allowed;
}
.zj-button--success.is-plain.is-disabled {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  cursor: not-allowed;
}
.zj-button--info.is-plain.is-disabled {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  cursor: not-allowed;
}
.zj-button--warning.is-plain.is-disabled {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
  cursor: not-allowed;
}
.zj-button--danger.is-plain.is-disabled {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
  cursor: not-allowed;
}
// 按钮大小
.zj-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.zj-button--small {
  padding: 9px 15px;
  font-size: 13px;
  border-radius: 3px;
}
.zj-button--medium {
  padding: 14px 25px;
  font-size: 15px;
  border-radius: 4px;
}
.zj-button--large {
  padding: 16px 30px;
  font-size: 16px;
  border-radius: 5px;
}
</style>
