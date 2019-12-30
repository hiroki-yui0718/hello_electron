<template>
<div id="app">
    <button class="mb-3 mr-2 btn btn-primary" @click="onclick">+1</button>
    {{Num}}<br>
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
  },
    }
}
</script>