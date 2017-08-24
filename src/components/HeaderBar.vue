<template>
    <header class="flex justify-between items-center bg-black">
        <h1 class="pl2">color-of</h1>
        <header-buttons />
    </header>
</template>

<script>
import HeaderButtons from './HeaderButtons';

export default {
  name: 'header-bar',
  data() {
    return {};
  },
  components: {
    HeaderButtons,
  },
};
</script>

<style scoped>

</style>