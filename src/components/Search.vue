<template>
  <section class="flex flex-auto flex-column justify-center items-center">
    <input
      contenteditable="true" 
      class="thick-underline center p2 m2 h2" 
      :style="{ 'border-color': currentTextColor, 'color': currentTextColor }"
      type="text" 
      v-model="searchQuery"
     />
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
      'currentTextColor',
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
  width: auto;
  box-shadow: none;
  background-color: none;
  background-image:none;
}
input:focus {
  outline: 0;
}
</style>