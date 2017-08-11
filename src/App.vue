<template>
  <div id="app">
    <header-bar/>
  </div>
</template>

<script>
import Hello from './components/Hello';
import HeaderBar from './components/HeaderBar';

export default {
  name: 'app',
  components: {
    Hello,
    HeaderBar,
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
