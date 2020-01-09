<template>
<div id="app" class="h-100">
<textarea @change="onChange" v-model="article" style="width:100%;height:100%;border:solid 0px;"></textarea>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import {INSERT_MEMO} from '../mutation-types'
export default {
    data:function(){
        return{
          article:[],
        }
    },
        methods:{
            ...mapActions([INSERT_MEMO]),
            onChange:function(){
                  this[INSERT_MEMO](this.article)
            },
        }
  
    
}
</script>

<style scoped>
textarea:focus {
   outline: 0;
}
</style>