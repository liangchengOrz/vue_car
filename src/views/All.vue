<template>
  <ul>
    <Item v-for="item in all" :key="item._id" :item='item'/>  
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
        axios.get('https://dahua0822-api.herokuapp.com/goods',{params:{sort:'all'}}).then((res)=>{
            this.all=res.data.data.data
        })
        
    },
    data(){
        return {
            all:[]
        }
    }
}
</script>

<style>

</style>