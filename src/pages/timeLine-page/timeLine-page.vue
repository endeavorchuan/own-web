<!--
* @name: timeLine-page
* @author: chuanchuan
* @date: 2022-07-22 16:10
* @description: 时间线动态显示页
* @update: 2022-07-22 16:10
-->

<template>
  <div class="time-line">
    <TopNavigation />
  </div>
</template>

<script>
import TopNavigation from '@/components/top-navigation/top-navigation.vue'

export default {
  name: "timeLine-page",
  components: {
    TopNavigation
  }
}
</script>

<style scoped lang="less">
@import "css/timeLine-page.less";
</style>
