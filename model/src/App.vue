<template>
  <div id="app">
  	<router-link to="/shouye" activeClass="active">首页</router-link>
  	<router-link to="/goods" activeClass="active">产品</router-link>
  	<router-link to="/shezhi" activeClass="active">设置</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
.active{
	color:red;
}
</style>
