import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pos from '@/components/Pos'
import NotOpen from '@/components/NotOpen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },{
    	path: '/store',
    	name: 'Store',
    	component: NotOpen
    },{
    	path: '/vip',
    	name: 'VIP',
    	component: NotOpen
    },{
    	path: '/product',
    	name: 'Product',
    	component: NotOpen
    },{
    	path: '/count',
    	name: 'Count',
    	component: NotOpen
    },{
    	path: '/setting',
    	name: 'Setting',
    	component: NotOpen
    }
  ]
})
