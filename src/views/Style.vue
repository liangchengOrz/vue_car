<template>
  <ul>
    <Item v-for="item in style" :key="item._id" :item='item'/>
    
  </ul>
</template>

<script>
import axios from 'axios'
import Item from '../components/Item.vue'
export default {
    components:{
        Item
    },
    mounted(){
        axios.get('https://dahua0822-api.herokuapp.com/goods',{params:{sort:'style'}}).then((res)=>{
           
            this.style=res.data.data.data
        })
        
    },
    data(){
        return {
            style:[]
        }
    }
}
</script>

<style>

</style>