<template>
  <section class="flex flex-column justify-center items-center">
    <input type="text" v-model="searchQuery" />
    <button @click="colorize(searchQuery)">colorize</button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'search',
  mounted() {
    this.searchQuery = this.currentTerm;
  },
  data: () => ({
    searchQuery: '',
  }),
  computed: {
    currentTerm() {
      return this.$store.state.search.term;
    },
  },
  methods: {
    ...mapActions([
      'colorize',
    ]),
  },
};
</script>

<style scoped>

</style>