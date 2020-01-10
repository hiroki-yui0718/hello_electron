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
         article:[],
         data:[]
        }
    },
     mouted:function(){
                fbDB.ref('memo').on('value', snapshot => {
                    if (snapshot) {
                        const rootList = snapshot.val();
                        this.data.length = 0 // eslint-disable-line
                        Object.keys(rootList).forEach((val, key) => { // eslint-disable-line
                          this.data.push(rootList[val])// eslint-disable-line
                            console.log(this.$route.params.id)
                        })
                        this.list.push(this.data[this.$route.params.id]);
                         console.log(this.list)
                      }
                    })
                },

        methods:{
            ...mapActions([UPDATE_MEMO]),
            onChange:function(){
              this.article = this.list
                  this[UPDATE_MEMO](this.article,this.$route.params.id)
            },
        }
  
    
}
</script>

<style scoped>
textarea:focus {
   outline: 0;
}
</style>
