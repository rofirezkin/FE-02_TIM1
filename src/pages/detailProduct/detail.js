import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setCookie } from '../../utils/cookie';
import './styleProduct.css';

const Detail = ({ data }) => {
  const [jumlah, setJumlah] = useState('1');
  console.log('nilai jumlah', jumlah);

  const price = data.harga;
  const kalkulasi = jumlah * price;
  console.log('kalkulasi harga', kalkulasi);

  const cookieData = data;
  setCookie('data', JSON.stringify(cookieData), 10000);
  setCookie('jumlah', JSON.stringify(kalkulasi), 10000);

  return (
    <div className="font-product">
      <h1 className="mb-5">Detail Produk</h1>
      <div className="row">
        <div className="col-sm-6">
          <div>
            <img src={data.image} alt="gambar Produk" width="70%" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="bg-white p-4 shadow">
            <div>
              <h6>Panen</h6>
              <h1 className="text-title">{`${data.kategori_hasil_pertanian} ${data.nama_hasil_pertanian}`}</h1>
              <h3>
                {`${data.harga} Per 
              ${data.satuan}`}
              </h3>
              <h6 className="mt-4">{`Stok Produk : ${data.stok}`}</h6>
              <h6 className="mt-4">Detail Produk</h6>
              <p>{data.deskripsi}</p>
              <div className="row">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    value={jumlah}
                    onChange={(e) => {
                      setJumlah(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <Link to={`pembayaran/${kalkulasi}`}>
                    <h6 type="button" className="btn btn-success">
                      Beli Produk
                    </h6>
                  </Link>
                </div>
              </div>
              <h6 className="mt-4">{`Kategori Produk : ${data.kategori_hasil_pertanian}`}</h6>
              {/* <Link to={`/product/${data.number}`}>
                <div className="col-5">
                  <div className="d-flex flex-row bd-highlight my-3 toko">
                    <div className="bd-highlight p-2">
                      <img src={data.images} alt="toko" width="50" />
                    </div>
                    <div className="p-2 bd-highlight">
                      penjual
                      <div>{data.title}</div>
                    </div>
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;