<template>
    <div class="blog-cat__home">
        <h1>Blog</h1>
        <h2 v-if="loading">Please wait while the contentg is loading...</h2>
        <article v-if="!loading" v-for="(article, index) in articles" :key="index" class="blog-cat__post">
            <div class="blog-cat__image">
                <img :src="article.image" alt="" class="blog-cat__image">
            </div>
            <div class="blog-cat__title">
                <h2 >{{article.title}}</h2>
            </div>
            <div class="blog-cat__text" v-html="article.content">
            </div>
        </article>
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
            console.log(res);
            this.articles = res;
        })
        .catch(error => console.log(error))
        .finally(() => {
            this.loading = false;
        })
    }
}
</script>

<style lang="scss" scoped>
    .container {
        height: 60vh;

        h1 {
            font-size: 10rem;
            padding-top: 150px;
            text-align: center;
            color: darkgrey;

            @media(max-width: 767px) {
                font-size: 2.5rem;
            }
        }
    }
</style>



