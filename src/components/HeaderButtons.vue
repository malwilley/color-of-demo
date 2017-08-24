<template>
  <ul class="list-reset flex">
    <li v-for="button in pageButtons" v-bind:key="button.name" class="btn p1 mx1" v-bind:class="{selected: button.selected}">
      <a v-bind:href="button.url">{{ button.name }}</a>
    </li>
    <li v-for="button in linkButtons" v-bind:key="button.name" class="btn p1 mx1">
      <a v-bind:href="button.link" target="_blank">{{ button.name }}</a>
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
          link: 'https://github.com/malwilley/color-of-demo',
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
  a { text-decoration: unset; }

  .selected {
    border-bottom: 4px solid #001f3f;
  }
</style>