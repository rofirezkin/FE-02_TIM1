import React, { useState, useEffect } from 'react';
import { Petani, Pembeli } from '../../services';

const InfoOrang = () => {
  const [listPetani, setListPetani] = useState([]);
  const [jumlahPembeli, setJumlahPembeli] = useState([]);
  const getPenjual = (namaProduct) => {
    Petani.getPetani(namaProduct).then((res) => {
      console.log('data keseluruhan', res);
      setListPetani(res);
    });
  };
  const getPembeli = (namaProduct) => {
    Pembeli.getPembeli(namaProduct).then((res) => {
      console.log('data Pembeli', res);
      setJumlahPembeli(res);
    });
  };

  useEffect(() => {
    getPenjual('');
    getPembeli('');
  }, []);

  console.log('hasill data', listPetani);
  const jumlahPetani = listPetani.length;
  const NilaiJumlahPembeli = jumlahPembeli.length;
  return (
    <div>
      <div className="container my-5">
        <div className="row  justify-content-md-center">
          <div className="col-sm-4 text-left">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-person">
                <h2 className="py-4">
                  <b>{jumlahPetani}</b>
                </h2>
                <p className="loc-product">Jumlah Petani</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-center">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-person">
                <h2 className="py-4">
                  <b>{NilaiJumlahPembeli}</b>
                </h2>
                <p className="loc-product">Jumlah Pembeli1</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-right">
            <div className="col-sm-10 text-center mb-5">
              <div className="card-person">
                <h2 className="py-4">
                  <b>3</b>
                </h2>
                <p className="loc-product">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoOrang;
