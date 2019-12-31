<template>
<div class="container">
    <div class="row">
        <div class="col-md-6 border-right">
        <input type="text" v-model="todo.msg" class="form-control">
        {{todo.msg}}
    <button class="mt-2 btn btn-primary" @click="onSubmit">送信</button><br>
    <button class="mt-3 btn btn-primary" @click="onSearch">表示</button>
    <div v-show="flg">{{allToDo}}</div><br>
        </div>
    <div class="col-md-6">
        <div v-for="(value,index) of allToDo" :key="index">
<div class="card card-body bg-light p-2 ml-3 mb-3">
    {{value.msg}}
    </div>
    </div>
        </div>
        </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {INSERT_TODO} from '../mutation-types'
export default {
    data:function(){
        return{
          todo:{
            msg:'',
          },
          flg:false,
        }
    },
        computed:mapGetters(['allToDo']),
        methods:{
            ...mapActions([INSERT_TODO]),
            onSubmit:function(){
                console.log('Hi')
                  this[INSERT_TODO](this.todo)
            },
            onSearch:function(){
                console.log('Heloo')
            this.flg = !this.flg 
  }
        },

  
    

}
</script>