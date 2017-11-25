<template>
    <header class="flex flex-none justify-between items-center bg-black">
        <h1 class="color-of-heading p1 m1">color-of</h1>
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
.color-of-heading {
  mix-blend-mode: exclusion;
  background: var(--active);
  color: var(--none);
}
</style>