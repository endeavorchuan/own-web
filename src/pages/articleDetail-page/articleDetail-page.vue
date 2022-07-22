<!--
* @name: articleDetail-page
* @author: chuanchuan
* @date: 2022-07-22 16:07
* @description: 文章详情页
* @update: 2022-07-22 16:07
-->

<template>
  <div class="articleDetail">
    <TopNavigation />
  </div>
</template>

<script>
import TopNavigation from '@/components/top-navigation/top-navigation.vue'

export default {
  name: "articleDetail-page",
  components: {
    TopNavigation
  }
}
</script>

<style scoped lang="less">
@import "css/article-detail-page.less";
</style>
