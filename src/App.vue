<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/_variables.sass'
*
  font-family: $font-main, sans-serif
  padding: 0
  margin: 0
  box-sizing: border-box
  color: $color-text
</style>
