import { Home, DetailProduct, Pembayaran, Success } from '../pages';
import Login from '../pages/login';

const routes = [
  {
    path: '/product/pembayaran/:kalkulasi/success',
    component: Success,
    isPublic: true,
  },
  {
    path: '/product/pembayaran/:kalkulasi',
    component: Pembayaran,
    isPublic: true,
  },
  {
    path: '/product/:numberId',
    component: DetailProduct,
    isPublic: true,
  },

  {
    path: '/login',
    component: Login,
    isPublic: true,
  },

  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
