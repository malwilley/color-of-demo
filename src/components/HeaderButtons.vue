<template>
  <ul class="list-reset flex">
    <router-link tag="li" v-for="button in pageButtons" v-bind:key="button.name" v-bind:to="button.url" class="btn p1 mx1 link" exact>{{ button.name }}</router-link>
    <li v-for="button in linkButtons" v-bind:key="button.name" class="btn p1 mx1">
      <a v-bind:href="button.url" class="link" target="_blank">{{ button.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'header-buttons',
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

  .router-link-active {
    border-bottom-width: 4px;
    border-bottom-style: solid; 
  }
</style>