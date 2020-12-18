import React from 'react';
import { herologin } from '../../assets';

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
          <div className="col-sm-6 pl-4">
            <div>
              <form>
                <label htmlFor="username">
                  Username :
                  <input type="text" />
                </label>
                <label htmlFor="password">
                  Password :
                  <input type="text" />
                </label>
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
