<template>
  <label class="zj-radio" :class="{ 'is-checked': label == model }">
    <span class="zj-radio__input" :class="{ 'is-checked': label == model }">
      <span class="zj-radio__inner">
        <input
          class="zj-radio__original"
          type="radio"
          :value="label"
          :name="name"
          v-model="model"
        />
      </span>
      <span class="zj-radio__label">
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </span>
  </label>
</template>

<script>
export default {
  name: "ZjRadio",
  // 通过inject拿到其祖先组件提供的数据
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  props: {
    value: {
      type: null,
    },
    label: {
      type: [String, Number, Boolean],
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
  computed: {
    // 通过v-model绑定的计算属性要提供get和set方法，不只是单纯一个函数
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(val) {
        // 触发父组件给当前组件注册的input事件
        // this.$emit("input", val);
        this.isGroup
          ? this.RadioGroup.$emit("input", val)
          : this.$emit("input", val);
      },
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.zj-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:last-child {
    margin-right: 0;
  }

  .zj-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .zj-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    .zj-radio__original {
      opacity: 0;
      display: none;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .zj-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.zj-radio {
  .zj-radio__input.is-checked {
    .zj-radio__inner {
      border-color: #409eff;
      background: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .zj-radio__label {
    color: #409eff;
  }
}
</style>
