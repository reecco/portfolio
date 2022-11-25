<template>
  <div class="home">
    <div class="home__photo">
      <div class="photo"></div>
    </div>
    <div class="home__infos">
      <h1>Fred Recco</h1>
      <h3 class="typing"></h3>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'

export default {
  name: 'Home',
  components: {

  },
  
  methods: {
    animation() {
      let options = {
        strings: ['Web Developer', 'Software Developer', 'Backend Developer'],
        typeSpeed: 100,
        showCursor: false,
        loop: true
      }

      new Typed('.typing', options)
    }
  },

  created() {
    document.title = 'Home' 
  },

  mounted() {
    this.animation()
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>