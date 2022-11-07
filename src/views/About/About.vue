<template>
  <div class="about">
    <h2 class="about__title">Sobre</h2>
    <div class="about__text">
      <p class="text">
        Recém formado em Análise e Desenvolvimento de Sistemas pela UNINOVE - Vila Maria. E a procura de uma primeira
        oportunidade para trabalhar na área de TI.
      </p>
      <p class="text">
        Gosta de tecnologia desde criança, está em constante aprendizado e sempre buscando por novos desafios. Seus
        principais hobbies envolvem montagem de computadores, assistir reviews sobre hardwares e estar sempre
        acompanhando as novidades do mundo tecnológico.
      </p>
    </div>
    <div class="about__skills">
      <h3 class="skills__title">Experiência com</h3>
      <ul class="box__skills">
        <li class="skills">JavaScript, HTML, CSS, Sass e Vue.js</li>
        <li class="skills">Node.js, Java, Python e Linux</li>
        <li class="skills">MySQL, MongoDB e Git</li>
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