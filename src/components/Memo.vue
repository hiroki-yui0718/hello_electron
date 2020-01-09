<template>
<div id="app" class="h-100">
    <div class="row h-100">
        <div class="col-md-3 border-right">
                <div v-if="countMemo != 0">
                    <div v-for="(value,index) in allMemo" :key="index">
        <div class="border-bottom" style="height:75px;">
            <router-link :to="`/article/${ index }`">{{value}}</router-link>
        </div>
    </div>
    
    </div>
    <div class="border-bottom" style="height:75px;"><router-link to="/new">新しいメモ</router-link></div>
        </div>
<div class="col-md-9">
<router-view></router-view>
</div>
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
        beforeRouteUpdate (to, from, next) {
        
        next();
    },
    data:function(){
        return{
          memo:[],
        }
    },
    computed:mapGetters(['allMemo','countMemo']),
}
</script>

<style scoped>
textarea:focus {
   outline: 0;
}
</style>
