<template>
  <div class="goods-list">
    <!-- {{goods}} -->
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsitem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() { 
    return {

    }
  },
  components: {
    GoodsListItem
  }
 }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>