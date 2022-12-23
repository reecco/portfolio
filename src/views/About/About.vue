<template>
  <div class="about">
    <h2 class="about__title">About</h2>
    <div class="about__text">
      <p class="text">
        Recently graduated in Systems Analysis and Development from UNINOVE - Vila Maria. And looking for a first
        opportunity to work in the IT field.
      </p>
      <p class="text">
        He likes technology since he was a child, he is constantly learning and always looking for new challenges. His
        main hobbies involve building computers, watching hardware reviews and always keeping up with the latest in the
        technological world.
      </p>
    </div>
    <div class="about__skills">
      <div class="box">
        <h3>Experience with</h3>
        <ul class="box__skills">
          <li class="skills">JavaScript, HTML, CSS, Sass and Vue.js</li>
          <li class="skills">Node.js, Python and Linux</li>
          <li class="skills">MySQL, MongoDB and Git</li>
          <li class="skills">REST API, CRUD</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  created() {
    document.title = 'About';
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>