import React from 'react';

const BodyAdmin = () => {
  return (
    <div>
      <div className="container">
        <div className="row margin-hero">
          <div className="col-sm-6 ">
            <div className>
              <p className="brand-text-icon">Dasboard Admin</p>
              <p className="brand-text-icon">Status Pengguna :</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-11 text-right">
        <div>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Check Log
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyAdmin;
