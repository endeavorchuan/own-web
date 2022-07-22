<!--
* @name: retrieval-page
* @author: chuanchuan
* @date: 2022-07-22 16:13
* @description: 检索页面（分类 / 标签）
* @update: 2022-07-22 16:13
-->

<template>
  <div class="retieval">
    <TopNavigation />
  </div>
</template>

<script>
import TopNavigation from '@/components/top-navigation/top-navigation.vue'

export default {
  name: "retrieval-page",
  components: {
    TopNavigation
  }
}
</script>

<style scoped lang="less">
@import "css/retrieval-page.less";
</style>
