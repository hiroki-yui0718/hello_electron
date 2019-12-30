<template>
<div class="container">
    <div class="row">
        <div class="col-md-6 border-right">
        <input type="text" v-model="memo.msg" class="form-control">
    <button class="mt-2 btn btn-primary" @click="onSubmit">送信</button><br>
    <button class="mt-3 btn btn-primary" @click="onSearch">表示</button>
    <div v-show="flg">{{result}}</div><br>
        </div>
    <div class="col-md-6">
        <div v-for="(value,index) of result" :key="index">
<div class="card card-body bg-light p-2 ml-3 mb-3">
    {{value.msg}}
    </div>
    </div>
        </div>
        </div>
</div>
</template>

<script>
import {db} from '../Scripts/indexedDB'
export default {
    data:function(){
        return{
          memo:{
        msg:''
    },
          flg:false,
                result:[],
        }
        },
        methods:{
              onSubmit:function(){
    db.insert(this.memo)
  },
          onSearch:function(){
    console.log("Hi!")
    db.loadDatabase()
    db.find({}, (error, docs) => {
    // 全ドキュメントが返る
    this.result = docs
    this.flg=!this.flg
    });
        }

  }
    

}
</script>