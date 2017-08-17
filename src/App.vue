<template>
  <div id="app" class="flex flex-column justify-start items-stretch">
    <header-bar />
    <div class="body-container flex flex-auto">
      <menu-api />
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello';
import HeaderBar from './components/HeaderBar';
import MenuApi from './components/MenuApi';


export default {
  name: 'app',
  components: {
    Hello,
    HeaderBar,
    MenuApi,
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
}

</style>
