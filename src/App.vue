<template>
  <div 
    id="background"
    class="flex flex-auto flex-column items-center" 
    :style="{ 'background-color': currentBackgroundColor }">
    <div class="fit-screen">
      <color-bubble />
    </div>
    <div id="app" class="flex flex-column  flex-auto">
      <header-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderBar from './components/HeaderBar';
import Search from './components/Search';
import MenuApi from './components/MenuApi';
import MenuPalette from './components/MenuPalette';
import ColorBubble from './components/ColorBubble';

export default {
  name: 'app',
  components: {
    HeaderBar,
    Search,
    MenuApi,
    MenuPalette,
    ColorBubble,
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
@import '../node_modules/normalize.css/normalize.css';
@import '../node_modules/basscss/css/basscss.css';

@font-face {
  font-family: 'Roboto Mono';
  src: url('https://fonts.googleapis.com/css?family=Roboto+Mono:700');
}

:root {
  --active: white;
  --inactive: gray;
  --none: black;
}

body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: -1000;
}

#background {
  overflow: auto;
  z-index: -100;
  mix-blend-mode: exclusion;
}

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 1200px;
}

.text {
  mix-blend-mode: exclusion;
  color: white;
  border-color: white;
}

.fit-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.thick-underline {
  border-bottom-width: 4px;
  border-bottom-style: solid;
}

/* inputs */

label {
  color: var(--active);
  mix-blend-mode: exclusion;
}

input[type="text"] {
  font-family: 'Roboto Mono', monospace;
  background-color: transparent;
  border: 4px solid var(--inactive);
  color: var(--inactive);
  padding: 10px 14px;
  border-radius: 6px 6px;
  mix-blend-mode: exclusion;
  font-size: 15px;
  transition: border 250ms linear, color 250ms linear;
}

input[type="text"]:focus {
  border-color: var(--active);
  color: var(--active);
}

.btn {
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  background-color: var(--inactive);
  border-radius: 4px;
  padding: 6px 8px;
  border: none;
  transition: background-color 250ms linear;
  color: var(--none);
  mix-blend-mode: exclusion;
}

.btn:hover {
  background-color: var(--active);
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

[contenteditable="true"]:focus {
    outline: none;
}

</style>
