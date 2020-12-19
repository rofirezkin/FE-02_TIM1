import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className="pl-4 col-sm-4 text-center text-icon navbar-farm  bg-white">
            <img src={logo} alt="banner" />
            <ul>Sudah punya akun? </ul>
            <Link to="login">
              <button type="button" className="btn btn-link">
                Masuk disini
              </button>
            </Link>
            <form>
              <label htmlFor="username">
                Username :
                <input type="text" className="form-control" />
              </label>
              <label htmlFor="email">
                Email :
                <input type="text" className="form-control" />
              </label>
              <label htmlFor="password">
                Password :
                <input type="text" className="form-control" />
              </label>
              <label htmlFor="konfirmasiPassword">
                Konfirmasi Password :
                <input type="text" className="form-control" />
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
              <input type="submit" value="Submit" className="btn btn-success" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
