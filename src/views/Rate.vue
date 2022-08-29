<template>
  <ul>
    <Item v-for="item in rate" :key="item._id" :item='item'/>
    
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
        axios.get('https://dahua0822-api.herokuapp.com/goods',{params:{sort:'rate'}}).then((res)=>{
           
            this.rate=res.data.data.data
        })
        
    },
    data(){
        return {
            rate:[]
        }
    }
}
</script>

<style>

</style>