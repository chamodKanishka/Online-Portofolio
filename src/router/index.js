import Vue from 'vue'
import Router from 'vue-router'
import About from '@/comonents/About'
import Portfolio from '@/components/Portfilo'
import Contact from '@/components/Contacts'

Vue.use(Router)

export default  new Router({
 routers:[
     {path: '/about', name:'About',component:About},
     {path: '/portfolio', name:'Portfolio',component:Portfolio},
     {path: '/contact', name:'Contact',component:Contact},
     {path: '/', redirect:'/portfolio'},
 ]   
}
)