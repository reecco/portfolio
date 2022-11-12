<template>
  <div class="about">
    <h2 class="about__title">About</h2>
    <div class="about__text">
      <p class="text">
        Recently graduated in Systems Analysis and Development from UNINOVE - Vila Maria. And looking for a first opportunity to work in the IT field.
      </p>
      <p class="text">
        He likes technology since he was a child, he is constantly learning and always looking for new challenges. His main hobbies involve building computers, watching hardware reviews and always keeping up with the latest in the technological world.
      </p>
    </div>
    <div class="about__skills">
      <h3 class="skills__title">Experience with</h3>
      <ul class="box__skills">
        <li class="skills">JavaScript, HTML, CSS, Sass and Vue.js</li>
        <li class="skills">Node.js, Java, Python and Linux</li>
        <li class="skills">MySQL, MongoDB and Git</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  created() {
    document.title = 'Sobre'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>