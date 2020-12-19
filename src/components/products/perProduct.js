/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React from 'react';
import { Link } from 'react-router-dom';

function PerProduct({ data }) {
  return (
    <div className="col-sm-3 text-center mb-5">
      <Link to={`/product/${data._id}`} style={{ textDecoration: 'none' }}>
        <div className="product ">
          <img src={data.image} className="pt-3" alt="produk" width="70%" />
          <p className=" name-product">{`${data.kategori_hasil_pertanian} ${data.nama_hasil_pertanian}`}</p>
          <p className="price-product">
            {data.harga}
            /Kg
          </p>
          <p className="loc-product">{`Stok : ${data.stok}`}</p>
          <div className="row justify-content-md-center px-2 pb-3">
            <button type="button" className="btn btn-success">
              Add To Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PerProduct;
