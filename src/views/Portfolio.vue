<template>
  <div class="portfolio">
        <div class="portfolio__content">
          <h1>Portfolio</h1>
          <PortfolioItem
            text="Highly customised, multilanguage Magento eCommerce website"
            image="../assets/img/missguided-portfolio.jpg"
            tags="Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing"
            link="https://missguided.co.uk"
            linkTitle="Missguided"
          />
          <PortfolioItem
            text="Highly customised, multilanguage Magento eCommerce website"
            image="../assets/img/mennace-portfolio.jpg"
            tags="Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing"
            link="https://mennace.com/uk"
            linkTitle="Mennace"
          />
          <PortfolioItem
            text="Responsive website based on Wordpress and developed from scratch"
            image="../assets/img/aqua-pura-portfolio.jpg"
            tags="Wordpress, Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, WebGL, RESTful API"
            link="http://aqua-pura.com"
            linkTitle="Aqua Pura UK"
          />
          <PortfolioItem
            text="Responsive website made on top of Umbraco cms."
            image="../assets/img/belling-portfolio.jpg"
            tags="Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX"
            link="http://www.belling.co.uk"
            linkTitle="Belling UK"
          />
          <PortfolioItem
            text="Responsive single page website built from scratch"
            image="../assets/img/tankard-portfolio.jpg"
            tags="Frontend Development, HTML5, Sass, CSS animations, Javascript"
            link="http://www.thelanterntankard.com"
            linkTitle="The Lantern Tankard"
          />
          <PortfolioItem
            text="Responsive website made on top of Umbraco cms."
            image="../assets/img/stoves-portfolio.jpg"
            tags="Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, GoogleMaps API"
            link="http://www.stoves.co.uk"
            linkTitle="Stoves UK"
          />
          <PortfolioItem
            text="Responsive website built for a Bed&amp;Breakfast in Venice using HTML5, Sass, jQuery, and PHP for the online booking."
            image="../assets/img/bbvenezia-portfolio.jpg"
            tags="Graphic Design, Full Stack Development, PHP, Sass, CSS3, Javascript, RESTful API"
            link="http://www.bbvenezia.com"
            linkTitle="B&amp;B Venezia"
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
