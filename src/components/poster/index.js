import React from 'react';
import { hero1 } from '../../assets';

const Poster = () => {
  return (
    <div>
      <div className="container">
        <div className="row margin-hero">
          <div className="col-sm-6 ">
            <div className>
              <h1 className="brand-text-icon">Ayo Dapatkan Diskon</h1>
              <h1 className="brand-text-icon">Dengan Belanja Disini!</h1>
              <p className="text-icon">
                Buah-buahan dan sayuran yang segar dan kualitas terbaik anda
                bisa dapatkan langsung dari petani dan anda bisa memajukan usaha
                UMKM bagi para petani.
              </p>
            </div>
          </div>
          <div className="col-sm-6 pl-4">
            <div>
              <img src={hero1} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
