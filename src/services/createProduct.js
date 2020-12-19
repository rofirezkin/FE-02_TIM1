/* eslint-disable camelcase */
import BaseService from './baseService';
import API from '../config/rest';

const createProduct = (
  stok,
  nama_hasil_pertanian,
  kategori_hasil_pertanian,
  deskripsi,
  harga,
  id_farmers,
  satuan,
  image
) => {
  return BaseService.post(API.PRODUCT, {
    stok,
    nama_hasil_pertanian,
    kategori_hasil_pertanian,
    deskripsi,
    harga,
    id_farmers,
    satuan,
    image,
  });
};

export default { createProduct };
