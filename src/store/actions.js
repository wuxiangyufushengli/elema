import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOP_INFO, RECEIVE_SHOPS,RECEIVE_SHOP_GOODS, RECEIVE_SHOP_RATINGS,RECEIVE_USER_INFO,INCREMENT_COUNT,DEINCREMENT_COUNT,CLEARCART} from './mutation_type'
import {reqAddress,reqShopList,reqFoodList,reqUserInfo,reqShopgoods,reqShopInfo,reqShopratings} from '../api/index.js'
export default {
 async getAddress({commit,state}){
   let geohash=state.latitude+','+state.longitude;
   let result=await reqAddress(geohash);
   if(result.code===0){
     let address=result.data
     commit(RECEIVE_ADDRESS,{address})
   }
 },
 getFoodList({commit}){
   reqFoodList().then((response)=>{
     if(response.code===0){
         let categorys=response.data;
         commit(RECEIVE_CATEGORYS,{categorys})
     }
   })

 },
  async getShopList({commit,state}){
    let result=await reqShopList(state.latitude,state.longitude);
    if(result.code===0){
      let shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

saveUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})

},
async getUserInfo({commit}) {
      var result=await reqUserInfo();
      if(result.code===0){
        let userInfo=result.data
        commit(RECEIVE_USER_INFO,{userInfo})
      }
},

  async getShopInfo({commit}) {
    var result=await reqShopInfo();
    if(result.code===0){
      let shopInfo=result.data
      commit(RECEIVE_SHOP_INFO,{shopInfo})
    }
  },
  async getShopGoods({commit},cb) {
    var result=await reqShopgoods();
    if(result.code===0){
      let shopgoods=result.data
      commit(RECEIVE_SHOP_GOODS,{shopgoods});
      cb&&cb()
    }
  },
  async getShopRatings({commit}) {
    var result=await reqShopratings();
    if(result.code===0){
      let shopratings=result.data
      commit(RECEIVE_SHOP_RATINGS,{shopratings});

    }
  },
  updateFoodCount({commit},{food,isAdd}){
   if(isAdd){
     commit(INCREMENT_COUNT,{food});
   }else{
     commit(DEINCREMENT_COUNT,{food});
   }
  },
  ClearCart({commit}){
    commit(CLEARCART)
  }
}
