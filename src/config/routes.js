import { Home, DetailProduct, Pembayaran, Success } from '../pages';

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
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
