import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataProduk from '../../assets/dummy';
import Detail from './detail';
import './styleProduct.css';

const DetailProduct = () => {
  const [infoProduk, setInfoProduk] = useState([]);
  const params = useParams();
  const { numberId } = params;

  useEffect(() => {
    const filterNews = DataProduk.filter((resp) => {
      return resp.number === numberId;
    });

    setInfoProduk(filterNews);
  }, [numberId]);

  return (
    <div className="mt-5 container margin-hero">
      {infoProduk.map((data) => {
        return <Detail key={data.number} data={data} />;
      })}
    </div>
  );
};

export default DetailProduct;
