<template>
  <div class="ratingselect" v-if="foodratings">
    <div class="rating-type border-1px">
      <span class="block" :class="{active:selecttype===2}" @click="setSelectType(2)">
        {{desc.all}}<span class="count" >{{foodratings.length}}</span>
      </span>
      <span class="block" :class="{active:selecttype===0}" @click="setSelectType(0)">
        {{desc.positive}}<span class="count">{{positiveCount}}</span>
      </span>
      <span class="block" :class="{active:selecttype===1}" @click="setSelectType(1)">
       {{desc.nagative}}<span class="count">{{foodratings.length-positiveCount}}</span>
      </span>
    </div>
    <div class="switch " :class="{on:onlyContent}" @click="toggleOnlyContent">
      <span class="iconfont icon-check_circle" ></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
    export default {
       props:{
         desc:Object,
         foodratings:Array,
         selecttype:Number,
         onlyContent:Boolean
       },
      methods:{
        setSelectType(selecttype){
          this.$emit('setSelectType',selecttype)

        },
        toggleOnlyContent(){
          this.$emit('toggleOnlyContent')
        }
      },
      computed:{
        positiveCount(){
          return this.foodratings.reduce((pretal,rating)=>pretal+(rating.rateType===0?1:0),0)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        background: rgba(77, 85, 93, 0.2)
        &.active
          background: $green
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: $green
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
</style>

