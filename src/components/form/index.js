import React from 'react';
import { herologin, logo } from '../../assets';

const Form = () => {
  return (
    <div>
      <div className="container">
        <div className="row margin-hero">
          <div className="col-sm-6 ">
            <div className>
              <h1 className="brand-text-icon">Login dan dapatkan produkmu</h1>
              <img src={herologin} alt="banner" />
            </div>
          </div>
          <div className="pl-4 col-sm-4 text-center text-icon">
            <div
              className="card"
              style={{ width: '28.375 rem', height: '33.188 rem' }}
            >
              <img src={logo} alt="banner" />
              <p>Belum punya akun? </p>
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
                <label htmlFor="password">
                  Password :
                  <input type="text" />
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

export default Form;
