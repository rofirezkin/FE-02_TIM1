import React from 'react';
import { setting } from '../../assets';

const Kategori = () => {
  return (
    <div>
      <div className="container">
        <div className="col-sm-6 ">
          <div className>
            <p className="brand-text-icon">Kategori :</p>
          </div>
        </div>
      </div>
      <div className="col-sm-11 text-right">
        <button
          type="button"
          style={{ border: 'none', backgroundColor: '#fafcf0' }}
        >
          <img src={setting} alt="setting" />
        </button>
      </div>

      <div className="container my-5">
        <div className="row  justify-content-md-center">
          <div className="col-sm-4 text-left">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-category">
                <h2 className="py-4">
                  <b>Ayam</b>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-category">
                <h2 className="py-4">
                  <b>Ikan</b>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-right">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-category">
                <h2 className="py-4">
                  <b>Sayur</b>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-category">
                <h2 className="py-4">
                  <b>Buah</b>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
