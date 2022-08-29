<template>
  <div>
    <div @click="toCar" style="padding: 30px; float: right">去购物车》</div>
    <ul>
      <li v-for="item in goods" :key="item._id">
        <img class="img1" :src="item.image" alt="" />
        <div class="center">
          <p class="name">{{ item.name }}</p>
          <p class="price">¥{{ item.price }}</p>
        </div>
        <div class="right">
          <img
            src="../images/分组 2.png"
            alt=""
            @click="handleClick(item._id)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VueYdGoods",

  data() {
    return {
      goods: "",
    };
  },

  mounted() {},
  created() {
    axios.get("https://dahua0822-api.herokuapp.com/goods").then((res) => {
      this.goods = res.data.data;
      // console.log(res.data.data)
    });
  },

  methods: {
    handleClick(id) {
      axios
        .post("https://dahua0822-api.herokuapp.com/cart", {
          productId: id,
          quantity: 1,
        })
        .then((res) => {});
    },
    toCar() {
      this.$router.push({
        path: "/car",
      });
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  height: 100%;
}
li {
  width: 325px;
  margin-left: 25px;
  height: 68px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li .img1 {
  width: 68px;
  height: 68px;
  border-radius: 15px;
}

.center {
  margin-left: 20px;
  width: 200px;
  height: 52px;
  margin-top: 8px;
  position: relative;
}
.right {
  width: 48px;
  height: 48px;
  background: rgba(255, 230, 148, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right img {
  width: 18px;
}
.name {
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 180px;
}
.price {
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  bottom: 8px;
}
</style>