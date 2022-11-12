<template>
  <div class="home">
    <div class="home__photo">
      <div class="photo"></div>
    </div>
    <div class="home__infos">
      <h1>Fred Recco</h1>
      <h3>Web Developer</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },

  created() {
    document.title = 'Home'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>