<template>
    <ul class="list-reset flex">
          <li class="selected btn p1">api</li>
          <li class="btn p1">palette</li>
          <li class="btn p1"><a href="https://github.com/malwilley/color-of-demo" target="_blank">github</a></li>
        </ul>
</template>

<script>
export default {
  name: 'header-buttons',
  data() {
    return {};
  },
};
</script>

<style scoped>
  a { text-decoration: unset; }

  .selected {
    border-bottom: 4px solid #001f3f;
  }
</style>