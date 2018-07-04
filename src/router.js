import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import Workshop from './views/Workshop.vue';
import Resume from './views/Resume.vue';
import Blog from './views/Blog.vue';
import Single from './views/Blog.vue';

// import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:slug',
      name: 'single',
      component: Single
    },
    {
      path: '/workshop',
      name: 'Workshop',
      component: Workshop
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ],
  mode: 'history'
})