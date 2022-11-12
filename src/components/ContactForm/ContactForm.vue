<template>
  <div class="contact__form">
    <h2 class="contact__form-title">Send a message</h2>
    <form @submit="sendEmail">
      <p class="message">{{ alert }}</p>
      <input type="text" name="email" class="input input-email" id="input-email" placeholder="Email" v-model="email">
      <input type="text" name="name" class="input input-name" id="input-name" placeholder="Name" v-model="name">
      <textarea type="text" name="text" class="textarea" id="textarea-text" placeholder="Message" v-model="text"></textarea>
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
      alert: ''
    }
  },

  methods: {
    async sendEmail(event) {
      event.preventDefault()
      const alert = 'Fill in the fields correctly.'

      let emailInput = document.getElementById('input-email')
      let nameInput = document.getElementById('input-name')
      let textArea = document.getElementById('textarea-text')

      let email = this.email == '' || this.email == ' '
      let name = this.name == '' || this.name == ' '
      let text = this.text == '' || this.text == ' '

      if (email || name || text) {
        this.alert = alert
        setTimeout(() => this.alert = '', 5000)
      }

      if (email) {
        emailInput.style.border = '2px solid red'
        
        setTimeout(() => emailInput.style.border = '' , 5000)
      } else if (name) {
        nameInput.style.border = '2px solid red'

        setTimeout(() => nameInput.style.border = '' , 5000)
      } else if (text) {
        textArea.style.border = '2px solid red'

        setTimeout(() => textArea.style.border = '' , 5000)
      } else {
        const res = await api(this.email, this.name, this.text)

        if (res.status == 201) {
          this.alert = 'Mensagem enviada com sucesso!'
          setTimeout(() => this.alert = '', 5000)
        } else {
          this.alert = res.response.data.message
          setTimeout(() => this.alert = '', 4000)
        }

        this.email = ''
        this.name = ''
        this.text = ''
      }
    }
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>