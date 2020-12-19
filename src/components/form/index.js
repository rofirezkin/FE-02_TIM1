import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { herologin, logo } from '../../assets';

const Form = () => {
  const [petaniId, setPetaniId] = useState('5fd73edb9c7b7b512c989bb1');
  console.log('petani', petaniId);
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
          <div className="pl-4 col-sm-4 text-center text-icon navbar-farm bg-white">
            <img className="pt-4" src={logo} alt="banner" />
            <p>Belum punya akun? </p>
            <Link to="regist">
              <button type="button" className="btn btn-link">
                Daftar disini
              </button>
            </Link>
            <div className="text-left px-3">
              <form>
                <label htmlFor="username">
                  Username :
                  <input
                    type="text"
                    className="form-control"
                    value={petaniId}
                    onChange={(e) => {
                      setPetaniId(e.target.value);
                    }}
                  />
                </label>
              </form>
              <form>
                <label htmlFor="password">
                  Password :
                  <input type="text" className="form-control" />
                </label>
                <div>
                  <Link to={`/petani/${petaniId}`}>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-success mb-4"
                    />
                  </Link>
                </div>

                <div>
                  <Link to="admin">
                    <input
                      type="submit"
                      value="Login Sebagai Admin"
                      className="btn btn-success mb-4"
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
