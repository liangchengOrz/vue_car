<template>
  <div>
    <div @click="toGoogs" style="padding:25px">
       《去商品列表
    </div>
    <ul>
      <li v-for="item in car" :key="item._id">
        <span
          class="check"
          @click="handleClick(item.productId._id)"
          :style="{
            background: item.checked ? 'yellow' : '',
            border: item.checked ? 'none' : '1px solid #ccc',
          }"
        ></span>
        <div class="content">
          <img :src="item.productId.image" alt="" />
          <div class="price">
            <p class="name11" style="fontsize: 12px">
              {{ item.productId.name }}
            </p>
            <p style="fontsize: 12px; color: rgba(204, 204, 204, 1)">
              ¥{{ item.price }}
            </p>
            <p style="fontsize: 14px; fontweight: 700">¥{{ item.total }}</p>
          </div>
          <div class="jj">
            <span class="btn" @click="decrement(item.productId._id)">-</span>
            <span style="fontsize: 14px; fontweight: 700">{{
              item.quantity
            }}</span>
            <span class="btn" @click="increment(item.productId._id)">+</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="footer">
      <div class="total">
        <span style="fontsize: 12px">共计：{{ total }}件</span>
        <span style="fontsize: 12px"
          >合计：<span style="fontsize: 16px; fontweight: 700">{{
            subTotal
          }}</span
          >元</span
        >
      </div>
      <p class="zf" @click="aaa">支付</p>
    </div>
    <img src="../images/WechatIMG262.jpeg" alt="" class="ddd" :style="{
      display: bool ? 'block' : 'none',
    }" @click="yc">
    <Loading v-if="isLoading"></Loading>
  </div>
  
</template>

<script>
import axios from "axios";
import Loading from '../components/Loading.vue'
export default {
  name: "VueYdCar",
  components:{
    Loading
  },

  data() {
    return {
      car: [],
      subTotal: "",
      bool:'',
      isLoading:false

    };
  },

  created() {
    this.isLoading=true
    axios.get("/api/cart").then((res) => {
      // console.log(res.data.data);
      this.isLoading=false
      this.car = res.data.data.items;
      this.subTotal = res.data.data.subTotal;
    });
  },

  methods: {
    toGoogs(){
      this.$router.push({
        path:'/goods'
      })
    },
    yc(){
      this.bool=false
    },
    handleClick(id) {
      this.isLoading=true
      axios
        .post("/api/cart/select", {
          productId: id,
        })
        .then((res) => {
          
          axios.get("/api/cart").then((res) => {
            this.isLoading=false
            // console.log(res.data.data);
            this.car = res.data.data.items;
            this.subTotal = res.data.data.subTotal;
          });
        });
    },
    decrement(id) {
      this.isLoading=true
      axios
        .post("/api/cart", {
          productId: id,
          quantity: -1,
        })
        .then((res) => {
          axios.get("/api/cart").then((res) => {
            this.isLoading=false
            // console.log(res.data.data);
            this.car = res.data.data.items;
            this.subTotal = res.data.data.subTotal;
          });
        });
    },
    increment(id) {
      this.isLoading=true
      axios
        .post("/api/cart", {
          productId: id,
          quantity: 1,
        })
        .then((res) => {
          axios.get("/api/cart").then((res) => {
            this.isLoading=false
            // console.log(res.data.data);
            this.car = res.data.data.items;
            this.subTotal = res.data.data.subTotal;
          });
        });
    },
    aaa(){
      this.bool=true
    }
  },
  computed: {
    total() {
      let total = 0;
      this.car.forEach((item) => {
        if(item.checked){
          total += item.quantity;
        }
        
      });
      return total;
    },
  },
};
</script>

<style  scoped>
.ddd{
  width: 200px;
  height: 200px;
  position: fixed;
  top: 100px ;
  left: 90px;
  display: none;
}
ul {
  width: 375px;
  padding-bottom: 200px;
}
li {
  width: 331px;
  margin: 0 auto;
  height: 98px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.content {
  width: 295px;
  height: 98px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.content img {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-left: 14px;
}
.price {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  width: 130px;
}
.jj {
  margin-left: 10px;
  width: 50px;
  display: flex;
  justify-content: space-between;
  height: 20px;
  margin-top: 50px;
}
.btn {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: rgba(255, 223, 117, 1);
  text-align: center;
  line-height: 16px;
}
.footer {
  width: 375px;
  background: white;
  height: 135px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px 20px 0 0;
}
.total {
  width: 335px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.zf {
  width: 335px;
  height: 58px;
  margin: 0 auto;
  background: rgba(255, 223, 117, 1);
  border-radius: 20px;
  font-size: 16px;
  font-weight: 900px;
  text-align: center;
  line-height: 58px;
}
.name11 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>