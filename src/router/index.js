import Vue from 'vue';
import VueRouter from 'vue-router';

import Msite from '../pages/Msite/Msite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/login.vue';
import Shop from '../pages/shops/shop.vue';
import Shopgoods from '../pages/shops/shopgoods/shopGoods.vue';
import Shopinfo from '../pages/shops/shopinfo/shopInfo.vue';
import Shopratings from '../pages/shops/shopratings/shopRatings.vue';


Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite',
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:Shopgoods,
        },
        {
          path:'/shop/info',
          component:Shopinfo,
        },
        {
          path:'/shop/ratings',
          component:Shopratings,
        },
        {
          path:'/',
          redirect:'/shop/goods',
        },
      ]
    }


  ]



})
