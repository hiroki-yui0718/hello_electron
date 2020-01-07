<template>
<div class="container">
    <div class="row">
        <div class="col-md-6 border-right">
        <input type="text" v-model="todo.msg" class="form-control">
    <button class="mt-2 btn btn-primary" @click="onSubmit">送信</button><br>
    <button class="mt-3 btn btn-primary" @click="onSearch">表示</button>
    <div v-show="flg">{{allToDo}}</div><br>
        </div>
    <div class="col-md-6">
        <div v-for="(val,index) of allToDo" :key="index">
<div class="card card-body bg-light p-2 ml-3 mb-3">
    {{val.msg}}
    </div>
    </div>
        </div>
        </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {INSERT_TODO} from '../mutation-types'
import * as Datastore from "nedb";
export default {
    data:function(){
        return{
          todo:{
              "msg":""
          },
          list:[],
          flg:false,
        }
    },
        computed:mapGetters(['allToDo']),
        methods:{
            ...mapActions([INSERT_TODO]),
            onSubmit:function(){
                console.log(this.todo)
                  this[INSERT_TODO](this.todo)
            },
            onSearch:function(){
            console.log(this.todo)
            let db = new Datastore({ filename: "/nedb.db", autoload: true });
            db.insert({ hoge: "hoge", fuga: "fuga" }); // 適当なオブジェクトを保存
            db.insert(this.todo);
            db.find({}, (err, document) => {
            console.log(document); // 保存したオブジェクトが取り出せる
            });
            this.flg = !this.flg 
  }
        },
  
    
}
</script>