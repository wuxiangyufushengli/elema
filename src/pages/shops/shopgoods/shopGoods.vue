<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="(good,index) in shopgoods" :class="{current:currentIndex===index}" @click="seclectFood(index)">
            <span class="text bottom-border-1px">
              <span class="icon" :class="supportClasses[good.type]" v-if="good.type>=0"></span>
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good,index) in shopgoods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food,index) in good.foods"  @click="selectedFood(food)">
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <Cartcontrol :food="food"></Cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li >

        </ul>
      </div>
      <ShopCart></ShopCart>
    </div>
    <Food ref="food" :food="food"></Food>

  </div>

</template>
<script>
  import Food from '../../../components/Food/food.vue'
  import BScroll  from 'better-scroll';
  import ShopCart from '../../../components/ShopCart/ShopCart.vue'
  import Cartcontrol from '../../../components/CartControl/CartControl.vue'
  import {mapState} from 'vuex'
    export default {
      mounted(){
        this.$store.dispatch('getShopGoods',()=>{
          this.$nextTick(()=>{
            this._initScoll();
            this._initTops();
          })

        });
      },
      data(){
        return{
          supportClasses: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
          isShow:false,
          tops:[],
          scrollY:0,
          food:{}
        }
      },
      computed:{
        ...mapState(['shopgoods']),
        currentIndex(){
          const {tops,scrollY}=this;
          return tops.findIndex((top,index)=>
            scrollY>=top&&scrollY<tops[index+1]
          )
        }
       },
      methods:{
        _initScoll(){
          new BScroll('.menu-wrapper',{click:true});
          this.rightScroll=new BScroll('.foods-wrapper',
            { probeType: 2,
              click:true
            });
          this.rightScroll.on('scroll',(pos)=>{
            //console.log(pos.x, pos.y);
            this.scrollY=Math.abs(pos.y)
          });
          this.rightScroll.on('scrollEnd',(pos)=>{
           // console.log(pos.x, pos.y);
            this.scrollY=Math.abs(pos.y)
          });

        },
        _initTops(){
          const tops=[];
          let top=0;
          tops.push(top);
          const lis=this.$refs.foodsUl.getElementsByClassName('food-list-hook');
          console.log(lis.length)
          Array.prototype.slice.call(lis).forEach((li)=>{
            top+=li.clientHeight;
            tops.push(top)
          });
          this.tops=tops;
          console.log(tops)
        },
        seclectFood(index){
          const y=-this.tops[index];
          this.rightScroll.scrollTo(0,y,300)
        },
        selectedFood(food){
          this.food=food;
          this.$refs.food.togooleshow()

        }
      },
      components:{
        Cartcontrol,
        ShopCart,
        Food

      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('./images/decrease_3')
          &.discount
            bg-image('./images/discount_3')
          &.guarantee
            bg-image('./images/guarantee_3')
          &.invoice
            bg-image('./images/invoice_3')
          &.special
            bg-image('./images/special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
