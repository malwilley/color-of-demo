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
      linkButtons: [
        {
          name: 'github',
          url: 'https://github.com/malwilley/color-of-demo',
          external: true,
        },
      ],
    };
  },
  computed: {
    pageButtons() {
      return this.$store.state.pages;
    },
  },
};
</script>

<style scoped>
  .link { 
    text-decoration: unset; 
    color: #001f3f;
  }

  .router-link-active {
    border-bottom: 4px solid #001f3f;
  }
</style>