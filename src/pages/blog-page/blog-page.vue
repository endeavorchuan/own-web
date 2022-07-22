<!--
* @name: blog-page
* @author: chuanchuan
* @date: 2022-07-22 16:03
* @description: 博客列表页
* @update: 2022-07-22 16:03
-->

<template>
  <div class="blog">
    <TopNavigation />
  </div>
</template>

<script>
import TopNavigation from '@/components/top-navigation/top-navigation.vue'

export default {
  name: "blog-page",
  components: {
    TopNavigation
  }
}
</script>

<style scoped lang="less">
@import "css/blog-page.less";
</style>
