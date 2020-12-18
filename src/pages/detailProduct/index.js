/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// mport { produk } from '../../assets';

// import DataProduk from '../../assets/dummy';
import { getProducts } from '../../services';
import Detail from './detail';
import './styleProduct.css';

const DetailProduct = () => {
  const [infoProduk, setInfoProduk] = useState([]);
  // const [listPetani, setListPetani] = useState([]);
  const params = useParams();
  const { numberId } = params;

  console.log('product id', numberId);
  useEffect(() => {
    getProducts
      .getProductId(numberId)
      .then((res) => {
        console.log('ini data rest', res);
        setInfoProduk(res);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        console.log('setinfo', infoProduk);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberId]);

  console.log('info produk', infoProduk);

  return (
    <div className="mt-5 container margin-hero">
      <Detail key={infoProduk._id} data={infoProduk} />
    </div>
  );
};

export default DetailProduct;
