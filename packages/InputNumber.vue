<template>
  <div class="zj-input__number-container">
    <div
      class="zj-input__prepend"
      :class="{ 'is-disabled': increaseDisabled }"
      @click="increase"
    >
      <i class="zj-icon-plus"></i>
    </div>
    <div>
      <div class="zj-input__number">
        <input
          class="zj-input__number--inner"
          :class="{ 'is-disabled': disabled }"
          type="text"
          :value="value"
          :disabled="disabled"
          @change="handleChange"
        />
      </div>
    </div>
    <div
      class="zj-input__append"
      :class="{ 'is-disabled': decreaseDisabled }"
      @click="decrease"
    >
      <i class="zj-icon-minus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZjInputNumber",
  props: {
    value: {
      type: [Number, String],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: +Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    precision: {
      type: Number,
      defaule: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(val) {
        let { max, min } = this;
        let limit = [
          {
            validate: (value) => !this.isNumber(value),
            res: val,
          },
          {
            validate: (value) => value >= max,
            res: max,
          },
          {
            validate: (value) => value <= min,
            res: min,
          },
          {
            validate: (value) => true,
            res: val * 1, // 字符串转数字
          },
        ];

        let _value = limit.find((v) => v.validate(val)).res;
        this.$emit("input", _value.toFixed(this.precision));
      },
    },
    increaseDisabled() {
      return this.disabled || this.innerValue >= this.max;
    },
    decreaseDisabled() {
      return this.disabled || this.innerValue <= this.min;
    },
  },
  methods: {
    increase() {
      if (this.increaseDisabled) return;
      this.innerValue = Number(this.innerValue) + this.step;
    },
    decrease() {
      if (this.decreaseDisabled) return;
      this.innerValue = Number(this.innerValue) - this.step;
    },
    isNumber(num) {
      return (
        !isNaN(num * 1) &&
        Object.prototype.toString.call(num * 1) === "[Object Number]"
      );
    },
    handleChange() {
      this.$forceUpdate(); // 当输入的不是数字时，value为数字，innerValue为不是数字，此时需要强制更新，时innerValue显示的值与value一样，为数字
    },
  },
};
</script>

<style lang="scss" scoped>
.zj-input__number-container {
  width: 100%;
  display: inline-flex;
}
.zj-input__number {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .zj-input__number--inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    text-align: center;
    border-radius: 0;

    &:hover {
      border-color: #606266;
      cursor: pointer;
    }
    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.zj-input__prepend,
.zj-input__append {
  background-color: #f5f7fa;
  color: #909399;
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 0px;
  padding: 0 10px;
  width: 1px;
  white-space: nowrap;
  width: max-content;

  &:hover {
    cursor: pointer;
    border: 1px solid #409eff;

    i {
      color: #409eff;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    border: 1px solid #dcdfe6;
    i {
      color: #dcdfe6;
    }
  }
}
.zj-input__prepend {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: none;
}
.zj-input__append {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: none;
}
</style>
