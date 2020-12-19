import React from 'react';
import { Link } from 'react-router-dom';
import { logo, account, tambah } from '../../assets';

const Header = () => {
  return (
    <nav className="navbar navbar-light fixed-top bg-white navbar-farm mb-5">
      <Link
        to="/"
        type="button"
        style={{ border: 'none', backgroundColor: 'white' }}
      >
        <div className="navbar-brand container">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div>
        <Link to="tambah_produk">
          <button
            type="button"
            style={{ border: 'none', backgroundColor: 'white' }}
          >
            <img src={tambah} alt="logo" width="70%" />
          </button>
        </Link>

        <Link to="login">
          <button
            type="button"
            style={{ border: 'none', backgroundColor: 'white' }}
          >
            <img src={account} alt="logo" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
