<template>
  <div class="container-commit">
    <img :src="userInfos.image" alt="GitHub user image">
    <h2>
      <a :href="userInfos.url" target="_blank" rel="noopener noreferrer" title="Access profile">{{ userInfos.name }}</a>
    </h2>
    <div class="box-infos">
      <p>{{ userInfos.location }}</p>
      <p>{{ userInfos.repos }} repositories</p>
    </div>
    <LastCommit user="reecco" />
  </div>
</template>

<script>
import { gitUser } from '@/service/api';
import LastCommit from '../../components/LastCommit/LastCommit.vue';

export default {
  name: 'GitHub',

  components: {
    LastCommit
  },

  data() {
    return {
      user: 'reecco',
      userInfos: Object
    }
  },

  methods: {
    async getUser() {
      const user = await gitUser(this.user);

      this.userInfos = {
        name: user.name,
        image: user.avatar_url,
        location: user.location,
        url: user.html_url,
        repos: user.public_repos
      }
    }
  },

  mounted() {
    this.getUser();
  }
}
</script>

<style src="./styles.sass" lang="sass" scoped></style>