<template>
  <div>
    <template v-if="type === 'textarea'">
      <div class="zj-textarea">
        <textarea
          class="zj-textarea__inner"
          :class="{ 'is-disabled': disabled, 'is-center': center }"
          :placeholder="placeholder"
          :name="name"
          :disabled="disabled"
          :value="value"
          :clearable="clearable"
          @input="handleInput"
        ></textarea>
      </div>
    </template>
    <template v-else>
      <div
        class="inline-container"
        :class="{ 'is-prepend': $slots.prepend, 'is-append': $slots.append }"
      >
        <div class="zj-input__prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div
          class="zj-input"
          :class="{
            'zj-input--prefix': $slots.prefix || prefixIcon,
            'zj-input--suffix': $slots.suffix || suffixIcon,
          }"
        >
          <!-- 如果传了show-password，判断是否需要切换密码的显示，如果不传，就使用传进来的type值 -->
          <input
            class="zj-input__inner"
            :class="{ 'is-disabled': disabled, 'is-center': center }"
            :type="
              showPassword ? (passwordVisible ? 'text' : 'password') : type
            "
            :placeholder="placeholder"
            :name="name"
            :disabled="disabled"
            :value="value"
            :clearable="clearable"
            :showPassword="showPassword"
            @input="handleInput"
          />
          <span class="zj-input__prefix">
            <slot name="prefix"></slot>
            <i v-if="prefixIcon" :class="prefixIcon"></i>
          </span>
          <span class="zj-input__suffix">
            <slot name="suffix"></slot>
            <i v-if="suffixIcon" :class="suffixIcon"></i>
            <i
              class="zj-input__icon zj-icon-guanbi1"
              v-if="clearable && value"
              @click="clear"
            ></i>
            <i
              class="zj-input__icon zj-icon-eye-fill"
              :class="{ 'zj-icon-eye-fill-active': passwordVisible }"
              v-if="showPassword"
              @click="handlePassword"
            ></i>
          </span>
        </div>
        <div class="zj-input__append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ZjInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    prefixIcon: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false,
    };
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      // 把内容清空
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style scoped lang="scss">
.zj-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;

  &__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      border-color: #c0c4cc;
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

    &.is-center {
      text-align: center;
    }
  }
}
.inline-container {
  width: 100%;
  display: inline-flex;

  &.is-prepend .zj-input__inner {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.is-prepend .zj-input__prepend {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;
  }

  &.is-append .zj-input__inner {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.is-append .zj-input__append {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: none;
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
}

.zj-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .zj-input__inner {
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

    &.is-center {
      text-align: center;
    }
  }
}
.zj-input--prefix {
  .zj-input__inner {
    padding-left: 30px;
  }
  .zj-input__prefix {
    position: absolute;
    height: 100%;
    left: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 18px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

.zj-input--suffix {
  .zj-input__inner {
    padding-right: 30px;
  }
}
.zj-input__suffix {
  position: absolute;
  height: 100%;
  right: 10px;
  top: 0;
  line-height: 40px;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  z-index: 900;
  i {
    color: #c0c4cc;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .zj-icon-eye-fill-active {
    color: blue;
  }
}
</style>
