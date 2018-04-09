import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO,RECEIVE_SHOP_GOODS,RECEIVE_SHOP_INFO,RECEIVE_SHOP_RATINGS,INCREMENT_COUNT,DEINCREMENT_COUNT,CLEARCART} from './mutation_type'
import Vue from 'vue';
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },
  [RECEIVE_SHOP_INFO](state,{shopInfo}){
    state.shopInfo=shopInfo
  },
  [RECEIVE_SHOP_RATINGS](state,{shopratings}){
    state.shopratings=shopratings
  },
  [RECEIVE_SHOP_GOODS](state,{shopgoods}){
    state.shopgoods=shopgoods
  },
  [INCREMENT_COUNT](state,{food}){
   if(food.count){
     food.count++
   }else{
     Vue.set(food,'count',1);
     state.shopCart.push(food)
   }
  },
  [DEINCREMENT_COUNT](state,{food}){
    if(food.count){
      food.count--;
      if(food.count===0){
        state.shopCart.splice(state.shopCart.indexOf(food),1)

      }
    }
  },
 [CLEARCART](state){
    state.shopCart.forEach(food=>{
      food.count=0
    });
   state.shopCart=[];


 }

}
