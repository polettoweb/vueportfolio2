<template>
  <div id="app">
    <Header/>
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
