import BaseService from './baseService';
import API from '../config/rest';

const getProduct = (namaProduct) => {
  return BaseService.get(API.PRODUCT, { namaProduct });
};

export default { getProduct };
