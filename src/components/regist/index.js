import React from 'react';
import { heroregist, logo } from '../../assets';

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row margin-hero">
          <div className="col-sm-6 ">
            <div className>
              <h1 className="brand-text-icon">
                Buat akun untuk membeli dan menjual produk
              </h1>
              <img src={heroregist} alt="banner" />
            </div>
          </div>
          <div className="pl-4 col-sm-4 text-center text-icon">
            <div
              className="card text-right"
              style={{ width: '28.375 rem', height: '33.188 rem' }}
            >
              <img src={logo} alt="banner" />
              <ul>Belum punya akun? </ul>
              <button type="button" className="btn btn-link">
                {' '}
                Daftar disini
                {' '}
              </button>
              <form>
                <label htmlFor="username">
                  Username :
                  <input type="text" />
                </label>
                <label htmlFor="email">
                  Email :
                  <input type="text" />
                </label>
                <label htmlFor="password">
                  Password :
                  <input type="text" />
                </label>
                <label htmlFor="konfirmasiPassword">
                  Konfirmasi Password :
                  <input type="text" />
                </label>
                <p>Daftar Sebagai: </p>
                <label htmlFor="radio">
                  <input
                    type="radio"
                    name="rekening"
                    value="BRI - no. rek. 14923981 A.n. Fulan"
                  />
                  <span className="pl-3">Pembeli </span>
                </label>
                <label htmlFor="radio">
                  <input
                    type="radio"
                    name="rekening"
                    value="BRI - no. rek. 14923981 A.n. Fulan"
                  />
                  <span className="pl-3">Penjual </span>
                </label>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
