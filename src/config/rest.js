export default {
  LOGIN: '/login',
  PETANI: '/petani',
  PEMBELI: '/pembeli',
  PRODUCT: '/hasil_tani',
  PRODUCTBYID: (productId) => {
    return `/hasil_tani/${productId}`;
  },
  PETANIBYID: (petaniId) => {
    return `/petani/${petaniId}`;
  },
};
