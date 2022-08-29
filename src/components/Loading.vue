<template>
  <div class="loading" @touchmove.stop.prevent="()=>{
    }">
    <div class="round"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999999;

}
.round{
    width: 80px;
    height: 80px;
    border: 6px solid ;
    border-radius: 50%;
    border-color: #fff transparent #fff transparent;
    animation: loading 1s linear infinite;
}
@keyframes loading{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>