

<script >
export default{
  data(){
    return{message:'Hello Ngambi?'};
  }
};
</script>

<template>
  <h1>{{ message }}</h1>
  <Car-Items/>
  <Car-Items/>
  <Car-Items/>
</template>


<style>
#app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>
