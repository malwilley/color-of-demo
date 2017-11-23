<template>
    <router-link :to="url" @click.native="clickLink" class="p1 mx1 link relative text" exact>
      {{ text }}
    </router-link>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'button-page',
  props: {
    text: String,
    url: String,
  },
  methods: {
    ...mapActions([
      'startBubbleAnimation',
    ]),
    clickLink(e) {
      const x = e.clientX;
      const y = e.clientY;

      this.startBubbleAnimation({ x, y });
    },
  },
};
</script>

<style scoped>
  .link { 
    text-decoration: unset;
    color: var(--inactive);
    transition: color 250ms linear;
  }

  .link:hover {
    color: var(--active);
  }

  .router-link-active {
    border-bottom-width: 4px;
    border-bottom-style: solid; 
    color: var(--active);
  }
</style>