<template>
    <header>
        <div class="header--top">
            <div class="nav__container">
                <div class="header__mobile">
                    <a class="toggleLink" @click="handleMenu"><img :src="toggle" class="toggle" alt="Toggle menu" /></a>
                    <p class="mobileName" >Marco Poleto</p>
                </div>
                <nav>
                    <ul>
                        <li><router-link @click.native="handleMenu()" to="/" title="Home">Home</router-link></li>
                        <li><router-link @click.native="handleMenu()" to="/portfolio" title="Portfolio">Portfolio</router-link></li>
                        <li><router-link @click.native="handleMenu()" to="/blog" title="Blog">Blog</router-link></li>
                        <li><router-link @click.native="handleMenu()" to="/workshop" title="Workshop">Workshop</router-link></li>
                        <li><router-link @click.native="handleMenu()" to="/resume" title="Resume">Resume</router-link></li>
                    </ul>
                </nav>
            </div>
            <h2 class="header__name">Marco Poletto</h2>
            <!-- <h3>Frontend Web Developer</h3> -->
        </div>
        <div class="header__logo">
            <img :src="logo" class="logo" alt="logo" />
        </div>
    </header>
</template>
<script>
import logo from "../../assets/img/logo.png";
import toggle from "../../assets/img/toggle.svg";

export default {
  data: function() {
    return {
      logo,
      toggle
    };
  },
  methods: {
    handleMenu() {
      let el = document.querySelector(".nav__container>nav");
      let name = document.querySelector(".mobileName");
      el.classList.toggle("open");
      if (name) name.classList.toggle("open");
    }
  }
};
</script>