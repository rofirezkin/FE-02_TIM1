import BaseService from './baseService';
import API from '../config/rest';

const getProduct = (namaProduct) => {
  return BaseService.get(API.PRODUCT, { namaProduct });
};
const getProductId = (productId) => {
  return BaseService.get(API.PRODUCTBYID(productId));
};

export default { getProduct, getProductId };
