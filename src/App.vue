<template>
  <div id="app">
    <button class="btn btn-primary" @click="onclick">+1</button>
    {{Num}}
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      Num:0, 
    }
  },
  methods:{
  onclick:function(){
    this.Num++
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
