<template>
  <label class="zj-checkbox" :class="{ 'is-checked': isChecked }">
    <span class="zj-checkbox__input">
      <span class="zj-checkbox__inner">
        <input
          class="zj-checkbox__original"
          type="checkbox"
          :name="name"
          v-model="model"
          :value="label"
        />
      </span>
      <span class="zj-checkbox__label">
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </span>
  </label>
</template>

<script>
export default {
  name: "ZjCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(val) {
        this.isGroup
          ? this.CheckboxGroup.$emit("input", val)
          : this.$emit("input", val);
      },
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      // 如果是group包裹，判断label是否在model中
      // 如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.zj-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;

  .zj-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .zj-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);

      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        width: 3px;
        height: 7px;
        left: 4px;
        top: 1px;
        position: absolute;
        transform: rotate(45deg) scaleY(0);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }

    .zj-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      width: 0;
      height: 0;
      margin: 0;
      z-index: -1;
    }
  }

  .zj-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

.zj-checkbox.is-checked {
  .zj-checkbox__input {
    .zj-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;

      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .zj-checkbox__label {
    color: #409eff;
  }
}
</style>
