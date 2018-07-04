<template>
  <div class="blog--home">
      <h1>Blog</h1>
      <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
      <article v-for="(post,index) in posts" :key="post.slug + '_' + index">
        <router-link :to="'/blog/' + post.slug">
            <figure>
              <img v-if="post.featured_image" :src="post.featured_image" alt="">
              <img v-else src="http://via.placeholder.com/250x250" alt="">
            </figure>
            <div class="blog--text">
                <h2>{{ post.title }}</h2>
            </div>
            
        </router-link>
      </article>
  </div>
</template>
<script>
import { butter } from '@/buttercms';
import Single from './Single.vue';

export default {
    data: function(){
        return {
            posts: []
        } 
    },    
    methods: {
        fetchPosts() {
            butter.post.list({
                page: 1,
                page_size: 10
            })
            .then((res) => {
                console.log('Content from ButterCMS')
                console.log(res)
                this.posts = res.data.data
            })
        },   
    },
    created() {
      this.fetchPosts()
    },
    components: {
        Single
    }
  }
</script>

