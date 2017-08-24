<template>
  <div class="flex flex-column items-center">
    <div id="app" class="flex flex-column justify-start items-stretch ">
      <header-bar />
      <div class="body-container flex flex-column items-stretch flex-auto px2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar';
import MenuApi from './components/MenuApi';
import MenuPalette from './components/MenuPalette';

export default {
  name: 'app',
  components: {
    HeaderBar,
    MenuApi,
    MenuPalette,
  },
};
</script>

<style>
@import "../node_modules/normalize.css/normalize.css";
@import "../node_modules/basscss/css/basscss.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  max-width: 1200px;
}

</style>
