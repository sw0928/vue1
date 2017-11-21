// 在模块系统中必须通过特定的方式配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// Home 业务组件
import Home from '@/home/Home'

import Index from '@/layout/Index'

// User 业务组件
import UserList from '@/user/List'

// Teacher 业务组件
import TeacherList from '@/teacher/List'
import TeacherList2 from '@/teacher/List2'
import TeacherAdd from '@/teacher/Add'
import TeacherEdit from '@/teacher/Edit'
import Login from '@/session/Login'

import Cookies from 'js-cookie'

// 将 VueRouter 作为插件配置到 Vue 中
Vue.use(VueRouter)

// 接下来就和以前的写法一样了
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Index,
      children: [ // 孩子路由会渲染到父路由的 router-view 中
        { path: '/home', component: Home },
        { path: '/user', component: UserList },
        { path: '/teacher', component: TeacherList },
        { path: '/teacher-list', component: TeacherList2 },
        { path: '/teacher/add', component: TeacherAdd },
        { path: '/teacher/edit', component: TeacherEdit }
      ]
    }
  ]
})

//  注册一个全局的 before 钩子，也就是说所有路由组件在导航之前都必须经过该函数的调用处理
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    // 如果已经登录了，则 next 渲染该组件
    // 苟泽，跳转到登录页
    if (Cookies.get('PHPSESSID')) {
      return next()
    }
    router.push(`/login?redirect=${to.path}`)
  } else {
    next()
  }
})

export default router
