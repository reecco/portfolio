<template>
  <div id="vis-modal" class="modal" v-bind:style="{ display: displayModal }">
    <div class="content-modal">
      <div class="body-modal">
        <p class="message-success">{{ message }}</p>
        <button class="btn-outline-success" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    message: String
  },

  data() {
    return {
      displayModal: ''
    }
  },

  methods: {
    closeModal() {
      this.displayModal = 'none';
    }
  }
}
</script>

<style src="./styles.sass" lang="sass" scoped></style>