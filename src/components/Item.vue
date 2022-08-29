<template>
  <div>
    <li class="item">
      <div class="left">
        <img :src=item.image alt="" />
        <div class="text">
          <p class="name">{{item.name}}</p>
          <p class="price">¥{{item.price}}</p>
        </div>
      </div>
      <div class="right">
          <img
            src="../images/分组 2.png"
            alt=""
           
          />
        </div>
    </li>
  </div>
</template>

<script>
export default {
  props:['item']
};
</script>

<style>
.item {
  display: flex;
  justify-content: space-between;
  height: 68px;
  align-items: center;
  margin-bottom: 20px;
}
.left{
  width: 285px;
  display: flex;
}
.left img {
  width: 68px;
  height: 68px;
  border-radius: 20px;
}
.left .text{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
}
.name{
  font-size: 12px;
  font-weight: 700;
}
.price{
  font-size: 16px;
  font-weight: 700;
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
</style>