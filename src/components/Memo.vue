<template>
<div id="app" class="h-100">
    <div class="row h-100">
        <div class="col-md-3 border-right">
                <div v-if="countMemo == 0">
    <div class="border-bottom" style="height:75px;">新しいメモ</div>
    </div>
    <div v-else>
    <div v-for="(value,index) of allMemo" :key="index">
        <div class="border-bottom" style="text-align:center;height:75px;">
            <router-link to="/article" :no="index">{{value}}</router-link>
        </div>
    </div>
    </div>
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
