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
      background: '#FFFFFF',
      primary: '#FFFFFF',
      secondary: '#3F51B5',
      tertiary: '#000000',
    },
    search: {
      term: '',
      state: {
        type: 'not_asked', // not_asked/fetching/success/error
      },
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
      selected: 'MATERIAL',
      options: getDefaultPalettes(),
    },
    bubble: {
      posX: 0,
      posY: 0,
      color: '#FFFFFF',
      animating: false,
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
