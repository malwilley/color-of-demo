<template>
  <section class="flex flex-auto justify-center items-center">
    <input
      contenteditable="true" 
      class="text thick-underline center p2 m2 h2"
      type="text" 
      v-model="searchQuery"
     />
    <div class="colorize-btn" @click="colorize(searchQuery)"></div>
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
  border-radius: 0px;
  width: 100%;
  max-width: 300px;
  box-shadow: none;
  background-color: none;
  background-image:none;
}
input:focus {
  outline: 0;
}
.colorize-btn {
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: 6px solid white;
  mix-blend-mode: exclusion;
}
.colorize-btn:hover {
  background-color: white;
}
</style>