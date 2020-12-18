import React from 'react';
import { logo } from '../../assets';

export default function Footer() {
  const penjual = ['Buat Akun', ' Upload Produk', 'Hapus Produk'];
  return (
    <footer style={{ borderTop: '1px solid #E5E5E5', bottom: 0 }}>
      <div className="container my-5">
        <div className="row  justify-content-md-center">
          <div className="col-sm-4">
            <img src={logo} alt="logo" />
            <p className="text-icon mt-4">
              Produk kualitas terbaik pembelian langsung dari petani.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <h4>Untuk Penjual</h4>
            <ul className="list-group ">
              {penjual.map((data) => {
                return (
                  <li className="text-icon" style={{ listStyleType: 'none' }}>
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-4 text-right">
            <h4>Untuk Penjual</h4>
            <ul className="list-group ">
              {penjual.map((data) => {
                return (
                  <li className="text-icon" style={{ listStyleType: 'none' }}>
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <h3 className="text-icon text-center pb-5">
          Copyright 2019 • All rights reserved • Staycation
        </h3>
      </div>
    </footer>
  );
}
