<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() { 
    return {
      scroll: null
    }
  },
  mounted() {
    // this.scroll = new BScroll('.wrapper',{

    // })
  //   this.scroll = new BScroll(document.querySelector('.wrapper'), {})

    this.scroll = new BScroll(this.$refs.wrapper, {
      
    })

  },

 }
</script>

<style lang="" scoped>

</style>