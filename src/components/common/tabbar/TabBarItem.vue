<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 利用v-if -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeClor: {
      type: String,
      default: '#ff5777'
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  
  computed: {
    // 利用计算属性动态的比较this.path的值与mainTabbar传递过来的path是否相等
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 动态的添加样式
    activeStyle() {
      return this.isActive ? { color: this.activeClor } : {};
    }
  },
  methods: {
    // 利用repalce作为点击事件跳转路由
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  height: 20px;
  width: 20px;
}
</style>