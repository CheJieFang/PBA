import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home'
import Classification from '../components/pages/Classification/Classification'
import ShoppingCart from '../components/pages/ShoppingCart/ShoppingCart'
import Use from '../components/pages/Use/Use'

Vue.use(Router)

export default new Router({
//	linkActiveClass : 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //首页路由
    {
    	path: '/Home',
      name: 'Home',
      component: Home
    },
    //分类路由
    {
    	path: '/Classification',
      name: 'Classification',
      component: Classification
    },
    //购物车路由
    {
    	path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    //我的路由
    {
    	path: '/Use',
      name: 'Use',
      component: Use
    }
  ]
})
