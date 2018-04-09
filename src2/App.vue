<template>
  <div>
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>

</template>
<script>
   import {reqAddress} from './api/index'
    import FooterGuide from './components/FooterGuide/FooterGuide'
    export default {
    components:{FooterGuide},
      async mounted () {
        const result = await reqAddress('40.10038,116.37867')
        console.log(result)
      },

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
