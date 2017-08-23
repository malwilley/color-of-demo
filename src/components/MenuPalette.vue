<template>
  <ul class="flex-auto flex flex-column items-stretch list-reset">
    <li v-for="color in colors" v-bind:key="color" class="p2" v-bind:style="{ background: color }">
      {{ color.toUpperCase() }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'menu-palette',
  computed: {
    colors() {
      return this.$store.state.palette.colors;
    },
  },
  methods: {
  },
};
</script>

<style scoped>

</style>