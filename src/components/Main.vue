<template>
  <div class="main">
    <p class="vv">火爆商品</p>
    <div class="hb">
      <ul class="asd">
        <li class="fgh" v-for="item in goods" :key="item._id">
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <p style="fontsize: 12px; fontweight: 700">{{ item.name }}</p>
          <p style="fontsize: 16px; fontweight: 700">¥{{ item.price }}</p>
        </li>
      </ul>
    </div>
    
      <ul class="header">
        <li v-for="item in navList" :key="item.path">
          <router-link :to="item.path" class="navLink">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    

    <div class="goods">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Item from "../components/Item.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      navList: [
        { name: "全部", path: "/all", bool: false },
        { name: "款式新", path: "/style", bool: false },
        { name: "销量高", path: "/sell", bool: false },
        { name: "好评", path: "/rate", bool: false },
      ],
      goods: [],
      num: 0,
    };
  },
  methods: {
    handleClick(item) {
      this.$router.push(
        item.path,
        () => {},
        () => {}
      );
    },
    getGoods() {
      axios.get("https://dahua0822-api.herokuapp.com/goods").then((res) => {
        // console.log(res.data.data.top);
        this.goods = res.data.data.top;
      });
    },
  },
  mounted() {
    this.getGoods();
  },
};
</script>

<style>
.header1{
    width: 355px;
  display: flex;
  overflow-x: auto;
}
.fgh .img {
  width: 100%;
  height: 146px;
  overflow: hidden;
}
.fgh .img img {
  width: 100%;
}
.fgh p {
  margin: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.asd {
  height: 222px;
  display: flex;
}
.asd li {
  width: 168px;
  height: 222px;
  background: white;
  margin-right: 26px;
  /* display: inline-block; */
  border-radius: 28px;
  overflow: hidden;
}

.aaa {
  width: 1000px;
}
.hb {
  width: 355px;
  height: 222px;
  margin-top: 20px;
  display: flex;
  overflow-x: auto;
  
}
.vv {
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background: rgba(247, 247, 250, 1);
}
.active {
  background: rgba(255, 223, 117, 1);
}
.main {
  width: 335px;
  margin: 0 auto;
}
.header {
  display: flex;
    justify-content: space-between;
  margin-top: 20px;
}
.header li {
  height: 44px;
  background: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 14px;
 
}
.navLink {
  line-height: 44px;
  padding: 0 20px;
  height: 44px;
  display: block;
  border-radius: 14px;
  text-decoration: none;
  color: black;
}

.goods {
  height: 400px;
  margin-top: 15px;
}
</style>