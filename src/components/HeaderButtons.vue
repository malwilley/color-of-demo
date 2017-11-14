<template>
  <ul class="list-reset flex">
    <button-page tag="li" v-for="button in pageButtons" :key="button.name" :text="button.name" :url="button.url" exact></button-page>
    <li v-for="button in linkButtons" v-bind:key="button.name" class="btn p1 mx1">
      <a v-bind:href="button.url" class="link" target="_blank">{{ button.name }}</a>
    </li>
  </ul>
</template>

<script>
import ButtonPage from './ButtonPage';

export default {
  name: 'header-buttons',
  components: {
    ButtonPage,
  },
  data() {
    return {
      pageButtons: [
        {
          name: 'search',
          url: '/',
        },
        {
          name: 'api',
          url: '/api',
        },
        {
          name: 'palette',
          url: '/palette',
        },
      ],
      linkButtons: [
        {
          name: 'github',
          url: 'https://github.com/malwilley/color-of-demo',
          external: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
  .link { 
    text-decoration: unset; 
  }
</style>