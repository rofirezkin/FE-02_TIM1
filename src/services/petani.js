/* eslint-disable camelcase */
import BaseService from './baseService';
import API from '../config/rest';

const getPetani = (namaProduct) => {
  return BaseService.get(API.PETANI, { namaProduct });
};
const getPetaniId = (petaniId) => {
  return BaseService.get(API.PETANIBYID(petaniId));
};
const updatePetani = (alamat, petaniId, nama_petani, nomor_hp, email) => {
  return BaseService.put(API.PETANIBYID(petaniId), {
    alamat,
    nama_petani,
    nomor_hp,
    email,
  });
};

export default { getPetani, getPetaniId, updatePetani };
