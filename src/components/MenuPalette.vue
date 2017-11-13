<template>
  <ul class="flex-auto flex flex-column items-stretch list-reset">
    <li v-for="color in currentPalette" v-bind:key="color" class="p2" v-bind:style="{ 'background': color, 'color': textColor(color) }">
      {{ color.toUpperCase() }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import { calculateTextColor } from '@/common/colors';

export default {
  name: 'menu-palette',
  computed: {
    ...mapGetters([
      'currentPalette',
    ]),
  },
  methods: {
    textColor(backgroundColor) {
      return calculateTextColor(backgroundColor);
    },
  },
};
</script>

<style scoped>

</style>