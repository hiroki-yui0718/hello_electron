<template>
<div id="app">
    <button class="mb-3 mr-2 btn btn-primary" @click="onclick">+1</button>
    {{Num}}<br>
    <div v-for="(list,index) of lists" :key="index">
    {{list}}
    </div>
    </div>
</template>

<script>
import * as Datastore from "nedb";
export default {
    data:function(){
             return{
 Num:0,
 lists:[],
             }
    },
    methods:{
          onclick:function(){
    this.Num++
    let db = new Datastore({ filename: "/nedb.db", autoload: true });
                db.find({}, (err, document) => {
                  document.forEach(doc => this.lists.push(doc))
            });
  },
    }
}
</script>