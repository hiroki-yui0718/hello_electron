<template>
<div id="app" class="h-100">
<textarea @change="onChange" v-model="article" style="width:100%;height:100%;border:solid 0px;"></textarea>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import {UPDATE_MEMO} from '../mutation-types'
import {fbDB} from '../Scripts/firebase'
export default {
    data:function(){
        return{
          list:[],
        }
    },
    computed:{
        article:function(){
                fbDB.ref('memo').on('value', snapshot => {
                    if (snapshot) {
                        const rootList = snapshot.val();
                        this.list.length = 0 // eslint-disable-line
                        Object.keys(rootList).forEach((val, key) => { // eslint-disable-line
                          this.list.push(rootList[val]); // eslint-disable-line
                            console.log(this.list)
                            console.log(this.$route.params.id)
                        })
                      }
                    })
                    return this.list[this.$route.params.id]
                
                },
    },
        methods:{
            ...mapActions([UPDATE_MEMO]),
            onChange:function(){
                  this[UPDATE_MEMO](this.article)
            },
        }
  
    
}
</script>

<style scoped>
textarea:focus {
   outline: 0;
}
</style>
