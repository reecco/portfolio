<template>
  <div class="contact">
    <h1 class="contact__title">Contact</h1>
    <ul class="contact__list">
      <li class="contact-url">
        <a href="https://www.linkedin.com/in/fredericorecco/" target="_blank">
          <img src="@/assets/images/icons8-linkedin-circled.gif" alt="icon">
        </a>
      </li>
      <li class="contact-url">
        <a href="https://github.com/reecco" target="_blank">
          <img src="@/assets/images/icons8-github.gif" alt="icon">
        </a>
      </li>
    </ul>
    <ContactForm />
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
        { 'image': '@/assets/images/icons8-linkedin-circled.gif', 'url': 'https://www.linkedin.com/in/fredericorecco/' },
        { 'image': '@/assets/images/icons8-github.gif', 'url': 'https://github.com/reecco' },
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