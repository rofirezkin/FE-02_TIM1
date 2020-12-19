import BaseService from './baseService';
import API from '../config/rest';

const getPembeli = (namaProduct) => {
  return BaseService.get(API.PEMBELI, { namaProduct });
};

export default { getPembeli };
