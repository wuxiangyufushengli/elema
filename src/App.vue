<template>
  <div>
    <router-view></router-view>
    <footer-guide v-if="$route.meta.showFooter"> </footer-guide>
  </div>

</template>
<script>
    import {reqAddress} from './api/index'
    import FooterGuide from './components/FooterGuide/FooterGuide';


    export default {
     components:{FooterGuide},
      mounted () {
        this.$store.dispatch('getAddress');
        this.$store.dispatch('getFoodList');
        this.$store.dispatch('getShopList');
        this.$store.dispatch('getUserInfo');
      },

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
