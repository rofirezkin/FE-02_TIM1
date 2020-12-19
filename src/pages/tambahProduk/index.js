/* eslint-disable camelcase */
import React, { useState } from 'react';
import { createProducts } from '../../services';

const TambahProduk = () => {
  const [stok, setStok] = useState('');
  const [nama_hasil_pertanian, setNama_hasil_pertanian] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [deskripsi, setDeskripsi] = useState('');
  const [harga, setHarga] = useState('');
  const [id_farmers, setId_farmers] = useState('5fd73edb9c7b7b512c989bb1');
  const [image, setImage] = useState('');
  const [kategori_hasil_pertanian, setKategori_hasil_pertanian] = useState({
    isAgree: false, // checkbox
    kategori: '', // radio
  });
  const [satuan, setSatuan] = useState({
    isAgree: false, // checkbox
    namaSatuan: '', // radio
  });
  const handleChange = (e) => {
    const target1 = e.target;
    const name1 = target1.name;
    const value1 = target1.value;
    setSatuan({
      ...satuan,
      [name1]: value1,
    });
  };
  const handleChange2 = (e) => {
    const target1 = e.target;
    const name1 = target1.name;
    const value1 = target1.value;
    setKategori_hasil_pertanian({
      ...kategori_hasil_pertanian,
      [name1]: value1,
    });
  };
  const onSubmitLogin = () => {
    setLoginLoading(true);
    createProducts
      .createProduct(
        stok,
        nama_hasil_pertanian,
        kategori_hasil_pertanian,
        deskripsi,
        harga,
        id_farmers,
        satuan,
        image
      )
      .then((res) => {
        console.log('data keseluruhan', res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
        window.location.replace('/');
      });
  };

  return (
    <div className="cmt-5 container margin-hero ">
      <div className="row justify-content-md-center">
        <div className="bg-white navbar-farm p-5 col-sm-6">
          <div>
            <h1 className="text-center"> Upload Produk</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitLogin();
              }}
            >
              Stok Produk :
              <input
                type="text"
                className="form-control"
                value={stok}
                onChange={(e) => {
                  setStok(e.target.value);
                }}
              />
              Nama Produk :
              <input
                type="text"
                className="form-control"
                value={nama_hasil_pertanian}
                onChange={(e) => {
                  setNama_hasil_pertanian(e.target.value);
                }}
              />
              Deskripsi Produk :
              <input
                type="text"
                className="form-control"
                value={deskripsi}
                onChange={(e) => {
                  setDeskripsi(e.target.value);
                }}
              />
              Harga Produk :
              <input
                type="text"
                className="form-control"
                value={harga}
                onChange={(e) => {
                  setHarga(e.target.value);
                }}
              />
              id farmers :
              <input
                type="text"
                className="form-control"
                value={id_farmers}
                onChange={(e) => {
                  setId_farmers(e.target.value);
                }}
              />
              Upload Foto :
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
              <p>Satuan: </p>
              <div>
                <label htmlFor="radio">
                  <input
                    type="radio"
                    name="namaSatuan"
                    onChange={handleChange}
                    value="Kg"
                    checked={satuan.namaSatuan === 'Kg'}
                  />
                  <span className="pl-3">Kg </span>
                </label>
              </div>
              <div>
                <label htmlFor="radio">
                  <input
                    type="radio"
                    name="namaSatuan"
                    onChange={handleChange}
                    value="pcs"
                    checked={satuan.namaSatuan === 'pcs'}
                  />
                  <span className="pl-3">pcs </span>
                </label>
              </div>
              <p>Kategori: </p>
              <div>
                <label htmlFor="radio">
                  <input
                    type="radio"
                    name="kategori"
                    value="buah"
                    onChange={handleChange2}
                    checked={kategori_hasil_pertanian.kategori === 'buah'}
                  />
                  <span className="pl-3">buah</span>
                </label>
              </div>
              <div>
                <label htmlFor="radio">
                  <input
                    className="p-4"
                    type="radio"
                    name="kategori"
                    value="Sayur"
                    onChange={handleChange2}
                    checked={kategori_hasil_pertanian.kategori === 'Sayur'}
                  />
                  <span className="pl-3">Sayur</span>
                </label>
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-success"
                disabled={isLoginLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahProduk;
