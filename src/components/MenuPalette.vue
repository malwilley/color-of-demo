<template>
  <ul class="flex-auto flex flex-column items-stretch">
    <li v-for="color in colors" v-bind:key="color" class="p2 list-reset" v-bind:style="{ background: color }">
      {{ color }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'menu-palette',
  data: () => ({
    colors: [
      '#ffffff',
      '#000000',
      '#6f3292',
      '#5d9921',
      '#140345',
    ],
  }),
  methods: {
  },
};
</script>

<style scoped>

</style>