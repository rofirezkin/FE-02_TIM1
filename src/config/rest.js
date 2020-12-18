export default {
  LOGIN: '/login',
  PRODUCT: '/hasil_tani',
  PRODUCTBYID: (productId) => {
    return `/hasil_tani/${productId}`;
  },
};
