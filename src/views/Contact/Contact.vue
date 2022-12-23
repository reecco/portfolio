<template>
  <div class="contact">
    <h1 class="contact__title">Contact</h1>
    <ul class="contact__list">
      <li class="contact-url" v-for="(contact, index) in contacts" :key="index">
        <a :href="contact.url" target="_blank" rel="noopener noreferrer">
          <img :src="contact.image" :alt="contact.alt">
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
        { 
          'image': require('@/assets/images/icons8-linkedin-circled.gif'), 
          'url': 'https://www.linkedin.com/in/fred-recco-a95144259/', 
          'alt': 'Linkedin icon' 
        },
        { 
          'image': require('@/assets/images/icons8-github.gif'), 
          'url': 'https://github.com/reecco', 'alt': 
          'GitHub icon' 
        },
      ]
    }
  },

  mounted() {
    this.list()
  },

  created() {
    document.title = 'Contact'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>