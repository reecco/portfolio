<template>
  <div class="contact__form">
    <div id="vis-modal" class="modal">
      <div class="content-modal">
        <div class="body-modal">
          <p class="message-success">{{ success }}</p>
          <button class="btn-outline-success" @click="closeModal('vis-modal')">Close</button>
        </div>
      </div>
    </div>
    <h2 class="contact__form-title">Send a message</h2>
    <p class="message-error">{{ error }}</p>
    <form @submit="sendEmail">
      <input type="text" name="email" class="input input-email" id="input-email" placeholder="Email" v-model="email">
      <input type="text" name="name" class="input input-name" id="input-name" placeholder="Name" v-model="name">
      <textarea type="text" name="text" class="textarea" id="textarea-text" placeholder="Message"
        v-model="text"></textarea>
      <button class="btn-send">Send</button>
    </form>
  </div>
</template>

<script>
import api from '@/service/api.js'

export default {
  name: 'ContactForm',

  data() {
    return {
      email: '',
      name: '',
      text: '',
      success: '',
      error: ''
    }
  },

  methods: {
    async sendEmail(event) {
      event.preventDefault()

      let email = this.email == '' || this.email == ' '
      let name = this.name == '' || this.name == ' '
      let text = this.text == '' || this.text == ' '

      if (email || name || text) {
        this.error = 'Fill in the fields correctly.'
        setTimeout(() => this.error = '', 5000)

        if (email) {
          this.styleInput('input-email')
        } 
        if (name) {
          this.styleInput('input-name')
        } 
        if (text) {
          this.styleInput('textarea-text')
        }
      } else {
        const res = await api(this.email, this.name, this.text)

        if (res.status == 201) {
          this.success = 'Message sent successfully!'
          this.openModal('vis-modal')
          setTimeout(() => {
            this.closeModal('vis-modal')
          }, 10000)
        } else {
          this.error = res.response.data.message
          setTimeout(() => this.error = '', 4000)
        }

        this.email = ''
        this.name = ''
        this.text = ''
      }
    },

    openModal(loadModal) {
      let modal = document.getElementById(loadModal)

      modal.style.display = 'block'

      document.body.style.overflow = 'hidden'
    },

    closeModal(closeModal) {
      let modal = document.getElementById(closeModal)

      modal.style.display = 'none'

      document.body.style.overflow = 'auto'
    },

    styleInput(id) {
      document.getElementById(id).style.border = '2px solid red'

      setTimeout(() => document.getElementById(id).style.border = '', 5000)
    }
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>