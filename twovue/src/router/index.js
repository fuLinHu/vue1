import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bootstrap from '@/components/Bootstrap'
import Message from '@/components/Message'
import Setting from '@/components/Setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bootstrap',
      name: 'bootstrap',
      component: Bootstrap
    },
    {
    	path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/message',
      name: 'Message',
      component: Message
    },
    {
    	path:'/setting',
    	name:'setting',
    	component:Setting
    }
  ]
})
