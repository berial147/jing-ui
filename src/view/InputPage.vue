<template>
  <div>
    <div style="margin-top: 30px">
      <zj-input
        type="text"
        placeholder="请输入"
        name="username"
        :disabled="false"
        v-model="username"
      >
      </zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="textarea"
        placeholder="请输入"
        name="username"
        v-model="username"
      >
      </zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="text"
        placeholder="请输入"
        name="username"
        :disabled="false"
        v-model="username2"
        clearable
        center
      ></zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="password"
        placeholder="请输入"
        name="username"
        :disabled="false"
        v-model="username3"
        show-password
      ></zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="password"
        placeholder="请输入"
        name="username"
        :disabled="false"
        v-model="username3"
        show-password
      >
        <template slot="prefix">
          <i class="zj-icon-home"></i>
        </template>
        <template slot="suffix">
          <i class="zj-icon-neiyi"></i>
        </template>
      </zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="password"
        placeholder="请输入"
        name="username"
        :disabled="false"
        v-model="username3"
        show-password
        prefix-icon="zj-icon-nanzhuang"
        suffix-icon="zj-icon-nvzhuang"
      >
      </zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="text"
        placeholder="请输入"
        name="username"
        v-model="username3"
      >
        <template slot="prepend">https://</template>
      </zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="text"
        placeholder="请输入"
        name="username"
        v-model="username3"
      >
        <template slot="append">.com</template>
      </zj-input>
    </div>
    <div style="margin-top: 30px">
      <zj-input
        type="text"
        placeholder="请输入"
        name="username"
        v-model="username3"
        clearable
      >
        <template slot="prepend">
          <i class="zj-icon-home"></i>
        </template>
        <template slot="append">.com</template>
      </zj-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputPage",
  data() {
    return {
      username: "thief",
      username2: "dog",
      username3: "123",
    };
  },
  methods: {},
};
</script>

<style scoped>
.zj-input {
  width: 200px;
}
</style>
