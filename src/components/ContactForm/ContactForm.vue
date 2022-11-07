<template>
  <div class="contact contact__form">
    <h2 class="contact__form-title">Ou me envie uma mensagem</h2>
    <form @submit="sendEmail">
      <p class="message">{{ alert }}</p>
      <input type="text" name="email" class="input input-email" id="input-email" placeholder="Email" v-model="email">
      <input type="text" name="name" class="input input-name" id="input-name" placeholder="Nome" v-model="name">
      <textarea type="text" name="text" class="textarea" id="textarea-text" placeholder="Mensagem"
        v-model="text"></textarea>
      <button class="btn-send">Enviar mensagem</button>
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
      const alert = 'Preencha os campos corretamente.'

      let emailInput = document.getElementById('input-email')
      let nameInput = document.getElementById('input-name')
      let textArea = document.getElementById('textarea-text')

      let email = this.email == '' || this.email == ' '
      let name = this.name == '' || this.name == ' '
      let text = this.text == '' || this.text == ' '

      if (email) {
        emailInput.style.borderColor = 'red'
        emailInput.style.borderWidth = '2px'
        this.alert = alert
        setTimeout(() => {
          this.alert = ''
          emailInput.style.borderColor = ''
          emailInput.style.borderWidth = ''
        }, 5000)
      } else if (name) {
        nameInput.style.borderColor = 'red'
        nameInput.style.borderWidth = '2px'
        this.alert = alert
        setTimeout(() => {
          this.alert = ''
          nameInput.style.borderColor = ''
          nameInput.style.borderWidth = ''
        }, 5000)
      } else if (text) {
        textArea.style.borderColor = 'red'
        textArea.style.borderWidth = '2px'
        this.alert = alert
        setTimeout(() => {
          this.alert = ''
          textArea.style.borderColor = ''
          textArea.style.borderWidth = ''
        }, 5000)
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