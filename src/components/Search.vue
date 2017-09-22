<template>
  <section class="flex flex-column justify-center items-center">
    <input class="thick-underline p2 m2 h2" type="text" v-model="searchQuery" />
    <button @click="colorize(searchQuery)">colorize</button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'search',
  mounted() {
    this.searchQuery = this.currentSearchTerm;
  },
  data: () => ({
    searchQuery: '',
  }),
  computed: {
    ...mapGetters([
      'currentSearchTerm',
    ]),
  },
  methods: {
    ...mapActions([
      'colorize',
    ]),
  },
};
</script>

<style scoped>
input {
  background: none;
  border-left: none;
  border-top: none;
  border-right: none;
}
</style>