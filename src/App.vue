<template>
  <div id="app">
    <div class="container">
    <button class="mb-3 mr-2 btn btn-primary" @click="onclick">+1</button>
    {{Num}}<br>
    <input type="text" v-model="memo.msg" class="form-control">
    <button class="mt-2 btn btn-primary" @click="onSubmit">送信</button><br>
    <button class="mt-3 btn btn-primary" @click="onSearch">表示</button>
    <div v-show="flg">{{result}}</div><br>
    <input type="text" v-model="word" class="mt-3 form-control">
   <button class="mt-2 btn btn-primary" @click="onProgramSearch">検索</button>
   検索ワード:{{word}}<br>
    <!-- <div v-for="(value,key,index) of jsons" :key="index" v-show="key=='data'">
      <p>{{index}}{{value}}{{key}}</p>
      <ul>
    <li v-for="(value,index) of value" :key="index">{{index}}{{value.title}}</li>
      </ul>
      </div> -->
      <ul class="mt-3">
    <li v-for="(value,key) of searchResults.data" :key="key">{{value.title}}</li>
      </ul>
      <br>
    </div>
  </div>
</template>

<script>
import {db} from './Scripts/indexedDB'
import axiosbase from 'axios';
export default {
  data:function(){
    return{
      Num:0,
      jsons:{
        'meta':'Hi!',
        'data':[{'title':'水樹奈々'}]
        },
      memo:{
        msg:''
    },
    word:'',
    URL:'',
    searchResults:[],
      result:[],
      flg:false,
    }
  },
  methods:{
  onclick:function(){
    console.log(db)
    this.Num++
  },
  onProgramSearch:function(){
    this.URL = '/v3/api/program/search?key='+this.word+'&filter=past&start_day=&end_day=&area_id=JP13&region_id=&cul_area_id=JP13&page_idx=0&uid=e3948e8de187bab420a2fb4487f35675&row_limit=12&app_id=pc&action_id=0'
    const axios = axiosbase.create({
  baseURL: 'http://radiko.jp',
  headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
  },
  responseType: 'json',
})
    axios.get(this.URL, {headers : this.headers})
  .then(response => {
this.searchResults = response.data
     console.log(this.searchResults);
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
