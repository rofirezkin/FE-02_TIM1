import React from 'react';
import { success } from '../../assets';

const Home = () => {
  return (
    <div className="cmt-5 container margin-hero">
      <div className="text-center">
        <h2>Selamat Anda Berhasil Membeli Produk</h2>
        <img src={success} alt="success" width="70%" />
        <h4 className="mt-5">Pesanan Akan Diantar Ketempat Anda</h4>
      </div>
    </div>
  );
};

export default Home;
