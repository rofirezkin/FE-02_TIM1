import {
  Home,
  DetailProduct,
  Pembayaran,
  Success,
  TambahProduk,
  AdminPage,
  PenjualPage,
} from '../pages';
import Login from '../pages/login';
import Registrasi from '../pages/registrasi';

const routes = [
  {
    path: '/product/pembayaran/:kalkulasi/success',
    component: Success,
    isPublic: true,
  },
  {
    path: '/petani/:petaniId',
    component: PenjualPage,
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
    path: '/regist',
    component: Registrasi,
    isPublic: true,
  },
  {
    path: '/admin',
    component: AdminPage,
    isPublic: true,
  },
  {
    path: '/tambah_produk',
    component: TambahProduk,
    isPublic: true,
  },

  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
