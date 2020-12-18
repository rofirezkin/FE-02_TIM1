import React from 'react';

import { getCookie } from '../../utils/cookie';
import './style.css';
import Bank from './bank';

const Pembayaran = () => {
  const dataCookie = JSON.parse(getCookie('data'));
  const dataJumlah = JSON.parse(getCookie('jumlah'));

  console.log(dataCookie.price);
  const jumlah = dataJumlah / dataCookie.harga;

  return (
    <div className="mt-5 container margin-hero">
      <h2>Keranjang Belanja</h2>
      <div>
        <div className="p-3 background-checkout">
          <div className="d-flex flex-row bd-highlight my-3 toko ">
            <div className="bd-highlight p-1  text-center">
              <img src={dataCookie.image} alt="toko" width="60%" />
            </div>
            <div className="py-2 bd-highlight  col-4">
              <div>
                <h4>{`${dataCookie.kategori_hasil_pertanian} ${dataCookie.nama_hasil_pertanian}`}</h4>
              </div>
              <div>
                <h4>
                  {`${dataCookie.harga} Per 
              ${dataCookie.satuan}`}
                </h4>
              </div>
            </div>
            <div className=" col-4 text-right">
              <h3>Jumlah Produk</h3>
              <h5>{jumlah}</h5>
            </div>
          </div>
        </div>
        <Bank dataJumlah={dataJumlah} kalkulasi={dataJumlah} />
      </div>
    </div>
  );
};

export default Pembayaran;
