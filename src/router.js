import VueRouter from 'vue-router';
import Search from './components/Search';
import Api from './components/MenuApi';
import Palette from './components/MenuPalette';

const routes = [
  { path: '/', component: Search },
  { path: '/api', component: Api },
  { path: '/palette', component: Palette },
];

export default new VueRouter({
  routes,
});
