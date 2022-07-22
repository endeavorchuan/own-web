<!--
* @name: top-navigation
* @author: chuanchuan
* @date: 2022-07-22 16:15
* @description: 顶部导航栏组件
* @update: 2022-07-22 16:15
-->

<template>
  <nav class="topbar">
    <span class="logo">
      <span class="logo-text">L</span>
    </span>
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/" class="link">主页</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/blog" class="link">博客</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/retrieval" class="link">标签</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/timeLine" class="link">时间线</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/personal" class="link">联系我</router-link>
      </li>
    </ul>
    <div class="search">
      <i class="iconfont ion-search"></i>
      <input placeholder="请输入搜索的内容..." class="search-input" type="text" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "top-navigation"
}
</script>

<style scoped lang="less">
@import "css/top-navigation.less";
</style>
