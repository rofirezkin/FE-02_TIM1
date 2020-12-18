import React from 'react';
import { Link } from 'react-router-dom';
import { logo, account, keranjang } from '../../assets';

const Header = () => {
  return (
    <nav className="navbar navbar-light fixed-top bg-white navbar-farm mb-5">
      <Link to="dashboard">
        <div className="navbar-brand container">
          <button
            type="button"
            style={{ border: 'none', backgroundColor: 'white' }}
          >
            <img src={logo} alt="logo" />
          </button>
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
        <button
          type="button"
          style={{ border: 'none', backgroundColor: 'white' }}
        >
          <img src={keranjang} alt="logo" />
        </button>
        <button
          type="button"
          style={{ border: 'none', backgroundColor: 'white' }}
        >
          <img src={account} alt="logo" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
