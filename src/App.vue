<template>
  <div id="app">
    <button class="mb-3 ml-2 btn btn-primary" @click="onclick">+1</button>
    {{Num}}<br>
    <input type="text" v-model="data.message" class="form-control">
    <button class="mt-2 btn btn-primary" @click="onSubmit">送信</button><br>
    <button class="mt-3 btn btn-primary" @click="onSearch">表示</button>
    <div v-show="flg">{{result}}</div>
  </div>
</template>

<script>
import {db} from './DataBase/indexedDB'
export default {
  data:function(){
    return{
      Num:0, 
      data:{
        message:""
      },
      result:[],
      flg:false
    }
  },
  methods:{
  onclick:function(){
    this.Num++
  },
  onSubmit:function(){
    db.insert(this.data)
    this.data.message=""
  },
  onSearch:function(){
    console.log("Hi!")
    db.find({}, (error, docs) => {
    // 全ドキュメントが返る
    console.log(docs)
    this.result = docs
    this.flg=true
    });
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
