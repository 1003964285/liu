<template>
  <div class="shouye">
    这里是产品页
    <el-amap ref="map" vid="amapDemo"  :center="center" :zoom="zoom"   class="amap-demo">
      </el-amap>
  </div>
</template>

<script>
export default {
  name: 'shouye',
  data () {
    return {
          zoom: 12,
          center: [121.59996, 31.197646],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
