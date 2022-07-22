/**
 * @name: index
 * @author: chuanchuan
 * @date: 2022-07-22 16:29
 * @description：index
 * @update: 2022-07-22 16:29
 */

import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";

// 若使用常规方式导入，会造成全局变量污染，判断是否有全局变量，就可以知道导入方式
if(!window.VueRouter) {
  // 使用一个vue插件
  Vue.use(VueRouter);
}

const router = new VueRouter({
  // 配置
  routes,  // 路由匹配规则
  mode: "history"   // 改变模式
});

export default router;
