/**
 * @name: routes
 * @author: chuanchuan
 * @date: 2022-07-22 16:32
 * @description：routes
 * @update: 2022-07-22 16:32
 */

import NotFound from "@/pages/not-found/not-found";

export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */"@/pages/home-page/home-page"),
    meta: {
      title: "首页"
    }
  },
  {
    name: "Blog",
    path: "/blog",
    component: () => import(/* webpackChunkName: "about" */"@/pages/blog-page/blog-page"),
    meta: {
      title: "文章"
    }
  },
  {
    name: "ArticleDetail",
    path: "/articleDetail",
    component: () => import(/* webpackChunkName: "blog" */"@/pages/articleDetail-page/articleDetail-page"),
    meta: {
      title: "文章详情"
    }
  },
  {
    name: "Retrieval",
    path: "/retrieval",
    component: () => import(/* webpackChunkName: "blog" */"@/pages/retrieval-page/retrieval-page"),
    meta: {
      title: "标签检索"
    }
  },
  {
    name: "TimeLine",
    path: "/timeLine",
    component: () => import(/* webpackChunkName: "blogDetail" */"@/pages/timeLine-page/timeLine-page"),
    meta: {
      title: "时间线"
    }
  },
  {
    name: "Personal",
    path: "/personal",
    component: () => import(/* webpackChunkName: "project" */"@/pages/personalInformation-page/personalInformation-page"),
    meta: {
      title: "联系我"
    }
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound
  }
];
