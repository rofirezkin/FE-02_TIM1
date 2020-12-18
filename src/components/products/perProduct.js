import React from 'react';
import { Link } from 'react-router-dom';

function PerProduct({ data, loading }) {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="col-sm-3 text-center mb-5">
      <Link to={`/product/${data.number}`}>
        <div className="product">
          <img src={data.images} alt="produk" />
          <p className=" name-product">{data.title}</p>
          <p className="price-product">Rp16.000/Kg </p>
          <p className="loc-product">Bandung</p>
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
