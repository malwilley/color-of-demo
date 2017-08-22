<template>
  <ul class="list-reset flex">
    <li v-for="button in buttons" v-bind:key="button.name" class="btn p1" v-bind:class="{selected: button.selected}">
      <a v-bind:href="button.link" v-bind:target="{'_blank': button.external}">{{ button.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'header-buttons',
  data() {
    return {
      buttons: [
        {
          name: 'api',
          selected: true,
        },
        {
          name: 'palette',
          selected: false,
        },
        {
          name: 'github',
          selected: false,
          link: 'https://github.com/malwilley/color-of-demo',
          external: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
  a { text-decoration: unset; }

  .selected {
    border-bottom: 4px solid #001f3f;
  }
</style>