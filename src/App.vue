<template>
  <div id="app">
    <button class="btn btn-primary" @click="onclick">+1</button>
    {{Num}}
  </div>
</template>

<script>
import path from 'path'
import { remote } from 'electron'
export default {
  data:function(){
    return{
      Num:0, 

    }
  },
  methods:{
  onclick:function(){
    this.Num++
    var Datastore = require('nedb');
var db = new Datastore({
  filename: path.join(remote.app.getPath('userData'), '/data.db')
})
db.loadDatabase(function (err) {
  if(err!= null)
    db.insert({post: "hogehoge", date: new Date()});
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
