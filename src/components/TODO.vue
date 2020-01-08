<template>
<div id="app" class="h-100">
    <div class="row h-100">
            <div class="col-md-5">
        </div>
        <div class="col-md-7">
            <div :style="{ 'background-image': 'url(' + assetsImage + ')'}" style="background-size:cover;" class="h-100">
            <div class="row container ">
                <div class="col-md-10 mt-3">
        <input type="text" v-model="todo.msg" class="form-control">
        </div>
        <div class="col-md-2 mt-3">
        <button class="btn btn-primary" @click="onSubmit">+</button>
        </div><br>
        <div class="col-md-12">
                <div class="mt-3" v-for="(val,index) of allToDo" :key="index">
<div class="card card-body bg-light p-2 mb-3">
    {{val.msg}}
    </div>
    </div>
    </div>
    </div>
    </div>
        </div>

        </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {INSERT_TODO} from '../mutation-types'
import pic from '../assets/back.jpg'
export default {
    data:function(){
        return{
          todo:{
              "msg":""
          },
          list:[],
          flg:false,
          assetsImage:pic,
        }
    },
        computed:mapGetters(['allToDo']),
        methods:{
            ...mapActions([INSERT_TODO]),
            onSubmit:function(){
                console.log(this.todo)
                  this[INSERT_TODO](this.todo)
            },
        }
  
    
}
</script>