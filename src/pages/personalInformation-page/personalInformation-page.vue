<!--
* @name: personalInformation-page
* @author: chuanchuan
* @date: 2022-07-22 16:12
* @description: 个人信息页
* @update: 2022-07-22 16:12
-->

<template>
  <div class="personal-Info">
    <TopNavigation />
  </div>
</template>

<script>
import TopNavigation from '@/components/top-navigation/top-navigation.vue'

export default {
  name: "personalInformation-page",
  components: {
    TopNavigation
  }
}
</script>

<style scoped lang="less">
@import "css/personalInformation-page.less";
</style>
