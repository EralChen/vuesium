<script lang="ts">
import { AnyFunc } from '@vunk/core'
import { defineComponent, nextTick, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { VkSpreadTo } from '@vunk/core/components/spread-to'

export default defineComponent({
  components: {
    VkSpreadTo,
  },
  props: {
    data: {
      type: Object as PropType<RouteRecordRaw>,
      required: true,
    },
    isMenu: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
  },
  setup (props) {
    const doNav = (navigate: AnyFunc) => {
      if (!props.isMenu) {
        navigate()
      }
    }
    const getSpreadTarget = async (vnode: any) => {
      if (!vnode.el) {
        await nextTick()
      }
      return vnode.el?.parentElement
    }
    return {
      doNav,
      getSpreadTarget,
    }
  },
})
</script>
<template>
  <RouterLink
    :to="to"
    custom
  >
    <template #default="{ navigate, isActive, isExactActive, href }">
      <VkSpreadTo
        :target="getSpreadTarget"
        :type="'class'"
        :data="{
          'is-active': isActive,
          'is-exact-active': isExactActive,
        }"
      ></VkSpreadTo>

      <a
        class="layout-default-aside-link"
        :href="href"
        :class="{
          'is-active': isActive,
          'is-exact-active': isExactActive,
        }"
        @click.prevent="doNav(navigate)"
      >
        <slot
          :is-active="isActive"
          :is-exact-active="isExactActive"
        >
          <!-- {{ data.meta?.name }} -->
          <span></span>
        </slot>
      </a>
    </template>
  </RouterLink>
</template>
<style>
.layout-default-aside-link {
  text-decoration: none;
  color: var(--el-menu-text-color);
}

.layout-default-aside-link.is-active {
  color: var(--el-menu-item-active-color);
}
</style>

