<template>
  <div class="contact__form">
    <Modal v-if="showModal" :message="success" />
    <h2 class="contact__form-title">Send a message</h2>
    <p class="message-error">{{ error }}</p>
    <form @submit="sendEmail">
      <input 
        type="text" 
        :class="{'input-email': true, 'alert-error': emailStyle}" 
        placeholder="Email" 
        v-model="email"
      >
      <input 
        type="text" 
        :class="{'input-name': true, 'alert-error': nameStyle}" 
        placeholder="Name" 
        v-model="name"
      >
      <textarea 
        type="text" 
        :class="{'textarea': true, 'alert-error': textStyle}" 
        placeholder="Message" 
        v-model="text">
      </textarea>
      <button class="btn-send">Send</button>
    </form>
  </div>
</template>

<script>
import { sendEmail } from '@/service/api.js';
import Modal from '../Modal/Modal.vue';

export default {
  name: 'ContactForm',

  components: {
    Modal
  },

  data() {
    return {
      email: '',
      name: '',
      text: '',
      success: '',
      error: '',
      emailStyle: false,
      nameStyle: false,
      textStyle: false,
      showModal: false
    }
  },

  methods: {
    async sendEmail(event) {
      event.preventDefault();

      let email = this.email == '' || this.email == ' ';
      let name = this.name == '' || this.name == ' ';
      let text = this.text == '' || this.text == ' ';

      if (email || name || text) {
        this.error = 'Fill in the fields correctly.';
        setTimeout(() => this.error = '', 5000);

        if (email) {
          this.changeStyle('email');
        } 
        if (name) {
          this.changeStyle('name');
        } 
        if (text) {
          this.changeStyle('text');
        }
      } else {
        const res = await sendEmail(this.email, this.name, this.text);

        if (res.status == 200) {
          this.success = 'Message sent successfully!';
          this.showModal = !this.showModal;
          setTimeout(() => {
            this.showModal = !this.showModal;
          }, 10000)
        } else {
          this.error = res.response.data.message;
          setTimeout(() => this.error = '', 4000);
        }

        this.email = '';
        this.name = '';
        this.text = '';
      }
    },

    changeStyle(input) {
      if (input === 'email') {
        this.emailStyle = !this.emailStyle;
        setTimeout(() => this.emailStyle = !this.emailStyle, 5000);
      }

      if (input === 'name') {
        this.nameStyle = !this.nameStyle;
        setTimeout(() => this.nameStyle = !this.nameStyle, 5000);
      }

      if (input === 'text') {
        this.textStyle = !this.textStyle;
        setTimeout(() => this.textStyle = !this.textStyle, 5000);
      }
    }
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>