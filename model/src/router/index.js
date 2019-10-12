import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import goods from '@/page/goods'
import shezhi from '@/page/shezhi'

Vue.use(Router)

export default new Router({
	
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path: '/goods',name: 'goods',component: goods},
    {path: '/shezhi',name: 'shezhi',component: shezhi},
  ],
  mode:'history',
})
