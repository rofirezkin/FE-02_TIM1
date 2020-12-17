import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Bank({ dataJumlah, kalkulasi }) {
  const [bank, setBank] = useState({
    isAgree: false, // checkbox
    rekening: '', // radio
  });
  const handleChange = (e) => {
    const target1 = e.target;
    const name1 = target1.name;
    const value1 = target1.value;
    setBank({
      ...bank,
      [name1]: value1,
    });
  };

  return (
    <div>
      <div className=" mt-4 p-3 background-checkout">
        <div className="row p-3">
          <div className="col-sm-6">
            <h3>Pilih metode Pembayaran</h3>
            <form>
              <label htmlFor="radio">
                <input
                  type="radio"
                  name="rekening"
                  value="BRI - no. rek. 14923981 A.n. Fulan"
                  onChange={handleChange}
                  checked={
                    bank.rekening === 'BRI - no. rek. 14923981 A.n. Fulan'
                  }
                />
                <span className="pl-3">BRI - no. rek. 14923981 A.n. Fulan</span>
              </label>
            </form>
            <form>
              <label htmlFor="radio">
                <input
                  className="p-4"
                  type="radio"
                  name="rekening"
                  value="BCA - no. rek. 013482341 A.n. Fulan"
                  onChange={handleChange}
                  checked={
                    bank.rekening === 'BCA - no. rek. 013482341 A.n. Fulan'
                  }
                />
                <span className="pl-3">
                  BCA - no. rek. 013482341 A.n. Fulan
                </span>
              </label>
            </form>
            <div />
          </div>
          <div className="col-sm-6 bg-white ">
            <h3>Total Harga</h3>
            <h4>
              {dataJumlah}
              .000
            </h4>
            <Link to={`/product/pembayaran/${kalkulasi}/success`}>
              <h6 type="button" className="btn btn-success">
                Pesan Produk
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bank;
