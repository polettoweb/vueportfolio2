<template>
    <div class="portfolio">
      <div class="portfolio__content">
        <h1>Workshop</h1>
        <PortfolioItem
          text = "Second version of the portfolio using Nuxt.JS as framework."
          image="../assets/img/nuxtCover.jpg"
          tags="Nuxt.JS, Vue.JS, Vuex, Sass"
          link="https://nuxt.marcopoletto.co.uk"
          linkTitle="Marco Poletto Nuxt.JS"
          linkGit="https://github.com/polettoweb/nuxtportfolio"
          linkGitTitle="Nuxt portfolio Github repository"
        />
        <PortfolioItem
          text = "Second version of the portfolio using React.JS as framework."
          image="../assets/img/react.png"
          tags="React.JS, React-router, Sass"
          link="https://react.marcopoletto.co.uk"
          linkTitle="Marco Poletto React.JS"
          linkGit="https://github.com/polettoweb/reactportfolio"
          linkGitTitle="React portfolio Github repository"
        />
        <PortfolioItem
          text = "Third version of the portfolio using Vue.JS as framework."
          image="../assets/img/vue.jpg"
          tags="Vue.JS, Vuex, Sass"
          link="https://vue.marcopoletto.co.uk"
          linkTitle="Marco Poletto Vue.JS"
          linkGit="https://github.com/polettoweb/vueportfolio"
          linkGitTitle="Vue portfolio Github repository"
        />
        <PortfolioItem
          text = "Small example of ecommerce functionality in Vue.JS"
          image="../assets/img/vueCover.jpg"
          tags="Vue.JS, vue-resource, Imageur API"
          link="https://small-ecommerce-example-vuejs-ldaubcucrv.now.sh/"
          linkTitle="Small ecommerce example in Vue.JS"
          linkGit="https://github.com/polettoweb/vue-small-ecommerce"
          linkGitTitle="Vue eCommerce Github repository"
        />
        <PortfolioItem
          text = "Todo list Built with Vue.JS"
          image="../assets/img/vueCover.jpg"
          tags="Vue.JS"
          link="https://github.com/polettoweb/todo-vue"
          linkTitle="Todo list Built with Vue.JS"
          linkGit="https://github.com/polettoweb/todo-vue"
          linkGitTitle="Todo list Built with Vue.JS"
        />
      </div>
      </div>
</template>
<script>
import PortfolioItem from '../components/partials/PortfolioItem.vue';
export default {
  components: {
    PortfolioItem
  }
}
</script>
