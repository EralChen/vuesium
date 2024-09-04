<script lang="ts" setup>
import ByPassword from './by-password/index.vue'
import ByPhone from './by-phone/index.vue'
import ByDing from './by-ding/index.vue'
import { ref } from 'vue'
const currentPage = ref('1')

</script>
<template>
  <div sk-flex="col-center2" class="h-100% bg-bg-page">
    <div class="w-1200px h-680px bg-bg-overlay rd-16px overflow-hidden" sk-flex>
      <div class="flex-1  overflow-hidden bg-login-bg">
        <div class="pa-42px text-white  h-full" sk-flex="col-between">
          <div class="fw-bold f-l ">
            智子开发平台
          </div>
          <div>
            浙江时空智子大数据
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-hidden ">
        <div class="pl-80px pr-80px ">
          <div
            class="c-primary fw-bold text-28px pt-90px
            pb-56px text-center"
          >
            智子开发平台
          </div>

          <ElTabs v-model="currentPage" class="login-tabs">
            <ElTabPane label="账号密码登录" name="1">
              <ByPassword></ByPassword>
            </ElTabPane>

            <ElTabPane label="手机验证码登录" name="2">
              <ByPhone></ByPhone>
            </ElTabPane>

            <ElTabPane label="扫码登录" name="3">
              <ByDing></ByDing>
            </ElTabPane>
          </ElTabs>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg-login-bg {
  background-image: url('/imgs/login-bg.png');
  background-size: cover;
  background-position: center;
}
</style>

<style lang="scss">
.login-tabs {
  .el-tabs__nav {
    width: 100%;
  }

  .el-tabs__item {
    width: 33.33%;
    text-align: center;
  }

  .el-tabs__header {
    margin-bottom: 60px;
  }
}
</style>
