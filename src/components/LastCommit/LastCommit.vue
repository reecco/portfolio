<template>
  <div class="container-lastcommit">
    <h3>Last commit</h3>
    <div class="box-infos">
      <p>Repository: 
        <a 
          :href="commit.repo_url" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Access the repository">
          {{ commit.repo }}
        </a> 
      </p>
      <p>Commit: 
        <a 
          :href="commit.commit_url" 
          title="Access the commit here" 
          target="_blank" 
          rel="noopener noreferrer">
          {{ commit.message }}
        </a>
      </p>
      <p class="date">{{ commit.date }} UTC -3</p>
    </div>
  </div>
</template>

<script>
import { lastCommit } from '@/service/api'

export default {
  name: 'LastCommit',

  data() {
    return {
      commit: Object,
    }
  },

  props: {
    user: String
  },

  methods: {
    async getCommit() {
      const commit = await lastCommit(this.user);

      this.commit = {
        repo: commit.repo.name,
        message: commit.payload.commits[0].message,
        repo_url: `https://github.com/${commit.repo.name}`,
        commit_url: `https://github.com/${commit.repo.name}/commit/${commit.payload.commits[0].sha}`,
        date: new Date(commit.created_at).toLocaleString('pt-BR')
      }
    }
  },

  mounted() {
    this.getCommit();
  }
}
</script>

<style src="./styles.sass" lang="sass" scoped></style>