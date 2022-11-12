<template>
  <nav>
    <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style src="./style.sass" lang="sass" scoped></style>