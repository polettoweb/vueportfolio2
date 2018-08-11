<template>
    <div v-if="!loading" class="blog__container">
        <section>
            <h1>{{article.title}}</h1>
            <div class="blog__image">
                <img :src="article.image" alt="">
            </div>
            <div class="blog__post">
                <p>{{article.content}}</p>
            </div>
            
        </section>
        <div class="blog__back-container">
            <router-link to="/blog" class="blog__back">< Back to blogs</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            article: ''
        }
    },
    created() {
        fetch('https://marcopolettouk.firebaseio.com/articles/.json')
        .then(res => {
            return res.json();
        })
        .then(res => {
            return res.filter(el => {return el.slug === this.$route.params.slug;});
        })
        .then((res) => {
            this.article = res[0];
        })
        .finally(() => {
            this.loading = false;
        })
    }
}
</script>
