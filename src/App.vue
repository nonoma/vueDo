<template>
  <div id="app">
    <leftnav></leftnav>
    <div id="main"><router-view/></div>
  </div>
</template>

<script>
import leftnav from './common/leftNav.vue'
export default {
  name: 'app',
  components: {
    leftnav
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#main {
  height: 100%;
  width: 95%;
  background: #f2f4f7;
  overflow: hidden;

}
</style>
