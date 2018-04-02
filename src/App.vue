<template>
  <div>
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>

</template>
<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
    export default {
    components:{FooterGuide}
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
