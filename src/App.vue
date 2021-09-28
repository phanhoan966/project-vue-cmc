<template>
  <div id="app">
      <Header/>
      <AddUser/>
      <ListUser/>
      <EditUser/>
  </div>
</template>

<script>
import AddUser from './page/AddUser.vue'
import ListUser from './page/ListUser.vue';
import EditUser from './page/EditUser.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    ListUser,
    AddUser,
    Header,
    EditUser
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
