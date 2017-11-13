import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { getDefaultPalettes } from '@/common/colors';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colors: {
      primary: '#FFFFFF',
      secondary: '#FF0000',
      tertiary: '#000000',
    },
    search: {
      term: '',
    },
    api: {
      selectedProvider: 'bing',
      providers: {
        bing: {
          apiKey: '',
          valid: false,
        },
        google: {
          cseId: '',
          apiKey: '',
          valid: false,
        },
      },
    },
    palette: {
      colors: getDefaultPalettes()[0],
    },
  },
  getters,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      paths: [
        'api',
        // 'palette',
      ],
    }),
  ],
});
