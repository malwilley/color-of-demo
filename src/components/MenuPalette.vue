<template>
  <div class="p1">
    <div class="flat-select ml-auto mr-auto">
      <select v-model="selectedDropdownItem">
        <option v-for="option in paletteOptions" :key="option" :value="option">{{option}}</option>
      </select>
    </div>
    <ul class="flex-auto flex flex-column items-stretch list-reset">
      <li v-for="color in paletteColors" :key="color" class="p2" v-bind:style="{ 'background': color, 'color': textColor(color) }">
        {{ color.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { calculateTextColor } from '@/common/colors';

export default {
  name: 'menu-palette',
  computed: {
    ...mapGetters([
      'paletteColors',
      'paletteOptions',
      'selectedPalette',
    ]),
    selectedDropdownItem: {
      get() {
        return this.selectedPalette;
      },
      set(value) {
        this.setSelectedPalette(value);
      },
    },
  },
  methods: {
    ...mapActions([
      'setSelectedPalette',
    ]),
    textColor(backgroundColor) {
      return calculateTextColor(backgroundColor);
    },
  },
};
</script>

<style scoped>
.flat-select {
  position: relative;
  mix-blend-mode: exclusion;
  border: 4px solid white;
  background-color: white;
  color: white;
  width: 140px;
  height: 25px;
  border-radius: 6px;
  overflow: hidden;
}

.flat-select::before {
  position: absolute;
  content: '▼';
  color: black;
  z-index: -1;
  right: 8px;
  top: 2px;
}

.flat-select select {
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  padding: 5px 8px;
  width: 130%;
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
}

.flat-select select:focus {
  outline: none;
}

</style>