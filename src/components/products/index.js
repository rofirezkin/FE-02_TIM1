import React from 'react';
import PerProduct from './perProduct';
import DataProduk from '../../assets/dummy';

const Products = () => {
  console.log(DataProduk);
  return (
    <div>
      <div className="container my-5">
        <h2 className="py-4">Produk Segar Rekomendasi Untuk Anda</h2>
        <div className="row">
          {DataProduk.map((data) => {
            return <PerProduct key={data.number} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
