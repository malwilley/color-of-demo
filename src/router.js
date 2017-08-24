import VueRouter from 'vue-router';
import Api from './components/MenuApi';
import Palette from './components/MenuPalette';

const routes = [
  { path: '/api', component: Api },
  { path: '/palette', component: Palette },
];

export default new VueRouter({
  routes,
});
