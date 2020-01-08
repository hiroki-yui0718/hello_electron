<template>
<div id="app" class="h-100">
<textarea @change="onChange" v-model="article" style="width:100%;height:100%;border:solid 0px;"></textarea>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import {INSERT_MEMO} from '../mutation-types'
import {fbDB} from '../Scripts/firebase'
export default {
    props:['no'],
    data:function(){
        return{
          memo:[],
        }
    },
        computed:{
            article:function(){
                fbDB.ref('memo').on('value', snapshot => {
                        const rootList = snapshot.val()
                        this.memo.push(rootList[this.no]) // eslint-disable-line
                        
                    })
                                return this.memo
                }, 

            },
        methods:{
            ...mapActions([INSERT_MEMO]),
            onChange:function(){
                  this[INSERT_MEMO](this.memo)
            },
        }
  
    
}
</script>

<style scoped>
textarea:focus {
   outline: 0;
}
</style>
