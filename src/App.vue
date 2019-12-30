<template>
  <div id="app">
    <div class="row">
      <div class="col-md-12 mb-3">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
</el-menu>
</div></div>

      <div class="row">
        <div class="col-md-1">
<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">Navigator One</span>
    </template>
    <el-menu-item-group>
      <span slot="title">Group One</span>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group Two">
      <el-menu-item index="1-3">item three</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">item four</span>
      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">Navigator Two</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">Navigator Three</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">Navigator Four</span>
  </el-menu-item>
</el-menu>
          </div>
          <div class="col-md-11">
    <button class="mb-3 mr-2 btn btn-primary" @click="onclick">+1</button>
    {{Num}}<br>
    <input type="text" v-model="memo.msg" class="form-control">
    <button class="mt-2 btn btn-primary" @click="onSubmit">送信</button><br>
    <button class="mt-3 btn btn-primary" @click="onSearch">表示</button>
    <div v-show="flg">{{result}}</div><br>
    <select class="mt-3 form-control" v-model="pref_id">
<option value="" selected>都道府県</option>
<option value="JP1">北海道</option>
<option value="JP2">青森県</option>
<option value="JP3">岩手県</option>
<option value="JP4">宮城県</option>
<option value="JP5">秋田県</option>
<option value="JP6">山形県</option>
<option value="JP7">福島県</option>
<option value="JP8">茨城県</option>
<option value="JP9">栃木県</option>
<option value="JP10">群馬県</option>
<option value="JP11">埼玉県</option>
<option value="JP12">千葉県</option>
<option value="JP13">東京都</option>
<option value="JP14">神奈川県</option>
<option value="JP15">新潟県</option>
<option value="JP16">富山県</option>
<option value="JP17">石川県</option>
<option value="JP18">福井県</option>
<option value="JP19">山梨県</option>
<option value="JP20">長野県</option>
<option value="JP21">岐阜県</option>
<option value="JP22">静岡県</option>
<option value="JP23">愛知県</option>
<option value="JP24">三重県</option>
<option value="JP25">滋賀県</option>
<option value="JP26">京都府</option>
<option value="JP27">大阪府</option>
<option value="JP28">兵庫県</option>
<option value="JP29">奈良県</option>
<option value="JP30">和歌山県</option>
<option value="JP31">鳥取県</option>
<option value="JP32">島根県</option>
<option value="JP33">岡山県</option>
<option value="JP34">広島県</option>
<option value="JP35">山口県</option>
<option value="JP36">徳島県</option>
<option value="JP37">香川県</option>
<option value="JP38">愛媛県</option>
<option value="JP39">高知県</option>
<option value="JP40">福岡県</option>
<option value="JP41">佐賀県</option>
<option value="JP42">長崎県</option>
<option value="JP43">熊本県</option>
<option value="JP44">大分県</option>
<option value="JP45">宮崎県</option>
<option value="JP46">鹿児島県</option>
<option value="JP47">沖縄県</option>
</select><br>
    <input type="text" v-model="word" class="mt-3 form-control">
   <button class="mt-2 btn btn-primary" @click="onProgramSearch">検索</button>
   検索ワード:{{word}} 都道府県:{{pref_id}}<br>
    <!-- <div v-for="(value,key,index) of jsons" :key="index" v-show="key=='data'">
      <p>{{index}}{{value}}{{key}}</p>
      <ul>
    <li v-for="(value,index) of value" :key="index">{{index}}{{value.title}}</li>
      </ul>
      </div> -->
      <ul class="mt-3">
    <li v-for="(value,key) of pastPrograms.data" :key="key">{{value.program_date}} {{value.title}}</li>
    <li v-for="(value,key) of futurePrograms.data" :key="key">{{value.program_date}} {{value.title}}</li>
      </ul>
      <br>
          </div>
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
      memo:{
        msg:''
    },
    pref_id:'',
    word:'',
    URL:'',
    pastPrograms:[],
    futurePrograms:[],
      result:[],
      flg:false,
      isCollapse: true
    }
  },
  methods:{
  onclick:function(){
    console.log(db)
    this.Num++
  },
  onProgramSearch:function(){
    this.URL = '/v3/api/program/search?key='+this.word+'&filter=past&start_day=&end_day=&area_id='+this.pref_id+'&region_id=&cul_area_id=JP13&page_idx=0&uid=e3948e8de187bab420a2fb4487f35675&row_limit=12&app_id=pc&action_id=0'
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
this.pastResults = response.data
     console.log(this.pastResults);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    // skip
  });
  this.URL = '/v3/api/program/search?key='+this.word+'&filter=future&start_day=&end_day=&area_id='+this.pref_id+'&region_id=&cul_area_id=JP13&page_idx=0&uid=e3948e8de187bab420a2fb4487f35675&row_limit=12&app_id=pc&action_id=0'
      axios.get(this.URL, {headers : this.headers})
  .then(response => {
this.futurePrograms = response.data
     console.log(this.futurePrograms);
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
  },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
