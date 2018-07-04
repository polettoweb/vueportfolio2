<template>

    <Carousel :loop="true" :perPage="1" :autoplay="true" :navigationEnabled="true" >
            <Slide><img src="../../assets/img/aqua-pura-portfolio.jpg" alt="Aqua Pura"/></Slide>
            <Slide><img src="../../assets/img/bbvenezia-portfolio.jpg" alt="B&amp;B Venezia"/></Slide>
            <Slide><img src="../../assets/img/belling-portfolio.jpg" alt="Belling"/></Slide>
            <Slide><img src="../../assets/img/bmuk-portfolio.jpg" alt="Brandy Melville UK"/></Slide>
            <Slide><img src="../../assets/img/tankard-portfolio.jpg" alt="The Lantern Tankard"/></Slide>
            <Slide><img src="../../assets/img/stoves-portfolio.jpg" alt="Stoves"/></Slide>
            <Slide><img src="../../assets/img/bmusa-portfolio.jpg" alt="Brandy Melville USA"/></Slide>      
        </Carousel>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    }
}
</script>
