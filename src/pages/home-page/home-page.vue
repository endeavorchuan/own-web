<!--
* @name: home-page
* @author: chuanchuan
* @date: 2022-07-22 16:01
* @description: 首页
* @update: 2022-07-22 16:01
-->

<template>
  <div class="home">
    <TopNavigation />
  </div>
</template>

<script>
import TopNavigation from '@/components/top-navigation/top-navigation.vue'

export default {
  name: "home-page",
  components: {
    TopNavigation
  }
}
</script>

<style scoped lang="less">
@import "css/home-page.less";
</style>
