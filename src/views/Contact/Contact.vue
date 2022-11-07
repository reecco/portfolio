<template>
  <div class="contact">
    <h1 class="contact__title">Contato</h1>
    <ul class="contact__list">
      <li v-for="(contact, index) in contacts" :key="index" class="contact-url">
        <a :href="contact.url" target="_blank">
          <img :src="contact.image" alt="icon">
        </a>
      </li>
    </ul>
    <ContactForm/>
  </div>
</template>
<script>
import ContactForm from '../../components/ContactForm/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
  },

  data() {
    return {
      contacts: []
    }
  },

  methods: {
    list() {
      this.contacts = [
        { 'image': 'https://img.icons8.com/color/512/linkedin-circled.png', 'url': 'https://www.linkedin.com/in/fredericorecco/' },
        { 'image': 'https://img.icons8.com/color/512/github.png', 'url': 'https://github.com/reecco' },
      ]
    }
  },

  mounted() {
    this.list()
  },

  created() {
    document.title = 'Contato'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>