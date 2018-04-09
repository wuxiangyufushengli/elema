export default {
  totaleCount(state){
    return state.shopCart.reduce((pretal,food)=>pretal+food.count,0)
  },
  totalePrice(state){
    return state.shopCart.reduce((pretal,food)=>pretal+food.count*food.price,0)
  },
}
