import React from 'react';

const InfoOrang = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row  justify-content-md-center">
          <div className="col-sm-4 text-left">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-person">
                <h2 className="py-4">
                  <b>192383</b>
                </h2>
                <p className="loc-product">Pembeli</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-person">
                <h2 className="py-4">
                  <b>182</b>
                </h2>
                <p className="loc-product">Penjual</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-right">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-person">
                <h2 className="py-4">
                  <b>3</b>
                </h2>
                <p className="loc-product">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoOrang;
