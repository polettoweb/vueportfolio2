<template>
    <footer>
            <div class="footer__content">
                <div class="footer__logo">
                    <router-link to="/" title="Marco Poletto">
                        <img :src="logo" class="logo" alt="logo" />
                    </router-link>
                    <div class="footer__copy">
                        <p>&copy; {{ year }} Marco Poletto</p>
                    </div>
                </div>
                <div class="footer__social">
                    <a href="https://github.com/polettoweb" title="GitHub Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-github"></i></a>
                    <a href="https://twitter.com/polettoweb" title="Twitter Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/marco-poletto-96853774/" title="Linkedin Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-linkedin"></i></a>
                    <a href="https://plus.google.com/+MarcoPoletto" title="Google+ Page" target="_blank" rel="noopener noreferrer"><i class="ion-social-googleplus"></i></a>
                    <a href="mailto:marco@marcopoletto.co.uk" title="Contact me via email"><i class="ion-email"></i></a>
                </div>
            </div>
        </footer>
</template>
<script>
import logo from '../../assets/img/logo.png';
export default {
    data: function() {
        return {
            logo,
            year: new Date().getFullYear()
        }
    }
}
</script>