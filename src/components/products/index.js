import React, { useState, useEffect } from 'react';
import PerProduct from './perProduct';
import DataProduk from '../../assets/dummy';
import { getProducts } from '../../services';
import { Pagination, Poster } from '../index';

const Products = () => {
  const [listPetani, setListPetani] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const getProduk = (namaProduct) => {
    getProducts.getProduct(namaProduct).then((res) => {
      console.log('data keseluruhan', res);
      setListPetani(res);
    });
  };
  useEffect(() => {
    getProduk('');
  }, []);
  console.log('hasill data', listPetani);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listPetani.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentPage === 2 && (
        <div className="container my-5 margin-hero">
          <h2 className="py-4">Produk Segar Rekomendasi Untuk Anda</h2>
          <div className="row">
            {currentPosts.map((data) => {
              return <PerProduct key={data.number} data={data} />;
            })}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={DataProduk.length}
            paginate={paginate}
          />
        </div>
      )}
      {currentPage === 1 && (
        <div>
          <Poster />
          <div className="container my-5 ">
            <h2 className="py-4">Produk Segar Rekomendasi Untuk Anda</h2>
            <div className="row">
              {currentPosts.map((data) => {
                return <PerProduct key={data.number} data={data} />;
              })}
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={DataProduk.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
