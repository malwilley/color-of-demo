<template>
  <div 
    class="flex flex-auto flex-column items-center" 
    :style="{ 'background-color': currentBackgroundColor, 'color': currentTextColor, 'border-color': currentTextColor }">
    <div id="app" class="flex flex-column justify-start items-stretch ">
      <header-bar />
      <div class="body-container flex flex-column items-stretch flex-auto px2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderBar from './components/HeaderBar';
import Search from './components/Search';
import MenuApi from './components/MenuApi';
import MenuPalette from './components/MenuPalette';

export default {
  name: 'app',
  components: {
    HeaderBar,
    Search,
    MenuApi,
    MenuPalette,
  },
  computed: {
    ...mapGetters([
      'currentBackgroundColor',
      'currentTextColor',
    ]),
  },
};
</script>

<style>
@import "../node_modules/normalize.css/normalize.css";
@import "../node_modules/basscss/css/basscss.css";

body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 1200px;
}

.btn {
  cursor: pointer;
}

.thick-underline {
  border-bottom-width: 4px;
  border-bottom-style: solid;
}

a:visited {
  color: inherit;
}

</style>
