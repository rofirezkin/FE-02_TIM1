import React from 'react';

function PerProduct({ data }) {
  return (
    <div className="col-sm-3 text-center mb-5">
      <div className="product">
        <img src={data.images} alt="produk" />
        <p className=" name-product">{data.title}</p>
        <p className="price-product">Rp16.000/Kg </p>
        <p className="loc-product">Bandung</p>
        <div className="row justify-content-md-center px-2 pb-3">
          <div className="col-4">
            <input type="text" className="form-control" />
          </div>
          <button type="button" className="btn btn-success">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PerProduct;
