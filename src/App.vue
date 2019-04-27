<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    //import Footer from './components/Footer.vue'
    import Header from './components/Header.vue'
    import Footer from "./components/Footer.vue";


export default {
  name: 'app',
  components: {
      Footer,
      HelloWorld,
      //Footer,
      Header

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
