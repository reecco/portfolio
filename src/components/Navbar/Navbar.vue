<template>
  <header class="header">
    <nav>
      <button class="hamb-nav-open" @click="handleButton()">&#9776;</button>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/activity-github">Activity</router-link></li>
      </ul>
    </nav>
    <div id="nav-suspense" :class="style">
      <ul>
        <li :style="{display: displayStyle}">
          <router-link to="/">Home</router-link>
        </li>
        <li :style="{display: displayStyle}">
          <router-link to="/about">About</router-link>
        </li>
        <li :style="{display: displayStyle}">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li :style="{display: displayStyle}">
          <router-link to="/activity-github">Activity</router-link>
        </li>
      </ul>
      <button class="hamb-nav-close" :style="{display: displayStyle}" @click="handleButton()">&#x2715;</button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Navbar',

  data() {
    return {
      active: false,
      style: '',
      displayStyle: '',
      header: ''
    }
  },

  methods: {
    handleButton() {
      this.active = !this.active

      if (this.active) {
        this.style = 'open'
        this.displayStyle = 'flex'
      } else {
        this.style = 'close'
        this.displayStyle = 'none'
      }
    }
  },
}
</script>

<style src="./style.sass" lang="sass" scoped></style>