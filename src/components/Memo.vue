<template>
<div id="app" class="h-100">
    <div class="row h-100">
        <div class="col-md-3 border-right"></div>
<div class="col-md-9">
<textarea v-model="memo" style="width:100%;height:100%;border:solid 0px;"></textarea>
</div>
</div>

</div>
</template>

<script>
    import {mapActions} from 'vuex'
import {INSERT_MEMO} from '../mutation-types'
export default {
    data:function(){
        return{
          memo:"",
        }
    },
        methods:{
            ...mapActions([INSERT_MEMO]),
            onSubmit:function(){
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
