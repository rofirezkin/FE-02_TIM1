/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProducts } from '../../services';
import Detail from './detail';
import './styleProduct.css';

const DetailProduct = () => {
  const [loading, setLoading] = useState(false);
  const [infoProduk, setInfoProduk] = useState([]);
  // const [listPetani, setListPetani] = useState([]);
  const params = useParams();
  const { numberId } = params;

  useEffect(() => {
    setLoading(true);
    getProducts
      .getProductId(numberId)
      .then((res) => {
        setInfoProduk(res);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        console.log('setinfo', infoProduk);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberId]);

  if (loading) {
    return (
      <div className="margin-hero text-center loading">
        <h2>Loading....</h2>
        <h2>Loading....</h2>
        <h2>Loading....</h2>
        <h2>Loading....</h2>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div className="mt-5 container margin-hero">
      <Detail key={infoProduk._id} data={infoProduk} />
    </div>
  );
};

export default DetailProduct;
