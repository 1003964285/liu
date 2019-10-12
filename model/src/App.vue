<template>
  <div id="app">
  	<router-link to="/shouye">首页</router-link>
  	<router-link to="/goods">产品</router-link>
  	<router-link to="/shezhi">设置</router-link>
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
</style>
