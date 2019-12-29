<template>
  <div id="app">
    <button class="mb-3 ml-2 btn btn-primary" @click="onclick">+1</button>
    {{Num}}<br>
    <input type="text" v-model="memo.msg" class="form-control">
    <button class="mt-2 btn btn-primary" @click="onSubmit">送信</button><br>
    <button class="mt-3 btn btn-primary" @click="onSearch">表示</button>
    <div v-show="flg">{{result}}</div><br>
   <button class="mt-2 btn btn-primary" @click="onProgramSearch">検索</button>
   {{radiko}}
   <br>
  </div>
</template>

<script>
import {db} from './Scripts/indexedDB'
import axios from 'axios';
export default {
  data:function(){
    return{
      Num:0, 
      memo:{
        msg:''
    },
    radiko:'',
      result:[],
      flg:false
    }
  },
  methods:{
  onclick:function(){
    console.log(db)
    this.Num++
  },
  onProgramSearch:function(){
    axios.get('http://radiko.jp/v3/api/program/search?key=井口&filter=past&start_day=&end_day=&area_id=JP13&region_id=&cul_area_id=JP13&page_idx=0&uid=e3948e8de187bab420a2fb4487f35675&row_limit=12&app_id=pc&action_id=0')
  .then(response => {
     console.log(JSON.stringify(response.data));
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    // skip
  });
  },
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
