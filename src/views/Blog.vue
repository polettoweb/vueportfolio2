<template>
    <div class="blog-cat__home">
        <h1>Blog</h1>
        <div class="blog-cat__container">
            <h2 v-if="loading">Please wait while the contentg is loading...</h2>
            <article v-if="!loading" v-for="(article, index) in articles" :key="index" class="blog-cat__post">
                <router-link :to="`/blog/${article.slug}`" :title="article.slug">
                    <div class="blog-cat__image">
                        <img :src="article.thumbnail" alt="" class="blog-cat__image">
                    </div>
                    <div class="blog-cat__title">
                        <h2 >{{article.title}}</h2>
                    </div>
                    <div class="blog-cat__text">
                        <p>{{article.previewText}}</p>
                    </div>
                </router-link>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            articles: []
        }
    },
    created() {
        fetch('https://marcopolettouk.firebaseio.com/articles/.json')
        .then(res => {
            return res.json();
        })
        .then(res => {

            this.articles = res;
        })
        .finally(() => {
            this.loading = false;
        })
    }
}
</script>



