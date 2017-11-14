<template>
    <router-link :to="url" class="btn p1 mx1 link" exact>
      {{ text }}
    </router-link>
</template>

<script>
export default {
  name: 'button-page',
  props: {
    text: String,
    url: String,
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