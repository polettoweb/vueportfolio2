<template>
  <div id="app">
    <Header/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/workshop">Workshop</router-link>
    </div> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/commons/Header.vue";
import Footer from "./components/commons/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "./assets/scss/App.scss";
</style>
