<script setup lang="ts">
import { onMounted } from 'vue'
import { start } from 'qiankun'
import { injectMicroApps } from './qiankun-config/index'

onMounted(() => {
  if (!window.qiankunStarted) {
    // 是否启用qiankun
    window.qiankunStarted = true
    injectMicroApps()
    // 开启qiankun
    start({
      // sandbox: {
      //   sandbox: { strictStyleIsolation: true }, // 严格隔离
      //   experimentalStyleIsolation: true // 样式隔离
      // }
    })
  }
})
</script>

<template>
  <div id="app">
    这里是主应用
    <RouterLink to="/react-sub-app"><button>go to react-sub-app</button></RouterLink>
    <RouterLink to="/vue-sub-app"><button>go to vue-sub-app</button></RouterLink>
    <div id="sub-app-container">
      <!-- 子应用内容 -->
    </div>
  </div>
</template>

<style scoped></style>
