import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Citylist from '@/components/Citylist'

Vue.use(Router)

export default new Router({
  
  // history可去除地址栏中#，不过npm run build构建完后部署到服务器访问发现路由无法解析 
  // mode:"history",

  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/citylist',
      name: 'city',
      component: Citylist
    }
  ]
})