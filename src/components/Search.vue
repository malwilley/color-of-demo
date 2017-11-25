<template>
  <section class="flex flex-auto justify-center items-center">
    <input
      contenteditable="true" 
      class="text thick-underline center p2 m2 h2"
      type="text" 
      v-model="searchQuery"
     />
    <div class="colorize-btn" :class="{ 'pulse--animate': colorIsFetching }" @click="colorize(searchQuery)"></div>
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
      'colorIsFetching',
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
  font-size: 24px;
}

input:focus {
  outline: 0;
}

.colorize-btn {
  cursor: pointer;
  background-color: var(--active);
  mix-blend-mode: exclusion;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  transition: background-color 100ms linear, transform 200ms linear;
}

.colorize-btn:hover {
  transform: scale(1.2);
}

.pulse--animate {
  animation: colorpulse 1s infinite;
}

@keyframes colorpulse {
  0% {
    background-color: white;
    transform: scale(1.2);
  }
  50% {
    background-color: black;
    transform: scale(1.0);
  }
  100% {
    background-color: white;
    transform: scale(1.2);
  }
}
</style>