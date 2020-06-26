<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommendView :recommends="recommends"></HomeRecommendView>
      <FeatureView></FeatureView>
      <TabControl :titles="['流行','精选','新款']" @tabClick="tabClick" class="tab-control"></TabControl>

      <GoodsList :goods="showGoods"></GoodsList>
    </scroll>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";

import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./childcomps/HomeSwiper";
import HomeRecommendView from "./childcomps/HomeRecommendView";
import FeatureView from "./childcomps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 创建完首页发生网络请求
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    // 事件监听相关
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;

        case 1:
          this.currentType = "sell";
          break;

        case 2:
          this.currentType = "new";
      }
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  /* position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>