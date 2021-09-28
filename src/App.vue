<template>
  <div id="app">
      <Header/>
      <ListUser/>
  </div>
</template>

<script>
import ListUser from './page/ListUser.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    ListUser,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
