<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  //导入组件
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    name: 'App',
    components: {  // 注册组件
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
