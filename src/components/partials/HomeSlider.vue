<template>
    <div class='carousel-view' @mouseover="pause" @mouseleave="start">
    <transition-group class='carousel' tag="div">
      <div v-for="slide in slides" class='slide' :key="slide.id">
        <img :src="slide.src" :alt="slide.title"/>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button ion-arrow-left-b' @click="previous"></button>
      <button class='carousel-controls__button ion-arrow-right-b' @click="next"></button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            slides: [
                {
                    title: "Aqua Pura",
                    id: 1,
                    src: "../../assets/img/aqua-pura-portfolio.jpg"
                },
                {
                    title: "B&amp;B Venezia",
                    id: 2,
                    src: "../../assets/img/bbvenezia-portfolio.jpg"
                },
                {
                    title: "Belling",
                    id: 3,
                    src: "../../assets/img/belling-portfolio.jpg"
                },
                {
                    title: "Brandy Melville UK",
                    id: 4,
                    src: "../../assets/img/bmuk-portfolio.jpg"
                },
                {
                    title: "The Lantern Takard",
                    id: 5,
                    src: "../../assets/img/tankard-portfolio.jpg"
                },
                {
                    title: "Stoves",
                    id: 6,
                    src: "../../assets/img/stoves-portfolio.jpg"
                },
                {
                    title: "Brandy Melville USA",
                    id: 7,
                    src: "../../assets/img/bmusa-portfolio.jpg"
                }
            ]
        };
    },
    created() {
        this.start();
    },
    methods: {
        next() {
            const first = this.slides.shift();
            this.slides = this.slides.concat(first);
        },
        previous() {
            const last = this.slides.pop();
            this.slides = [last].concat(this.slides);
        },
        pause() {
            clearInterval(this.interval);
        },
        start() {
            this.interval = setInterval(() => {
                this.next();
            }, 3000);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_vars.scss";

.carousel-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 960px;
    min-height: 15em;
    height: auto;
}

.slide {
    box-sizing: border-box;
    flex: 0 0 48em;
    width: 90%;
    height: auto;
    margin: 1em 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    transition: transform 0.3s ease-in-out;
    border-radius: 7px;
    box-shadow: $box-shadow;

    &:nth-child(even) {
        box-shadow: $box-shadow-purple;
    }

    img {
        max-width: 960px;
        width: 100%;
        @media (max-width: 600px) {
            width: 70%;
        }
        @media (max-width: 480px) {
            width: 50%;
        }
    }
}

.slide:first-of-type {
    opacity: 0;
}

.slide:last-of-type {
    opacity: 0;
}

.carousel-controls {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    @media (max-width: $mbp) {
        top: 110%;
    }

    button {
        width: 75px;
        margin: 0 20px;
        border: none;
        background-color: transparent;
        font-size: 40px;
        color: $purple;
    }
}
</style>
