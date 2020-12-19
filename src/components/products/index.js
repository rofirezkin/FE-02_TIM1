import React, { useState, useEffect } from 'react';
import PerProduct from './perProduct';
import DataProduk from '../../assets/dummy';
import { getProducts } from '../../services';
import { Pagination, Poster } from '../index';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [listPetani, setListPetani] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const getProduk = (namaProduct) => {
    setLoading(true);
    getProducts.getProduct(namaProduct).then((res) => {
      setListPetani(res);
      setLoading(false);
    });
  };
  useEffect(() => {
    setLoading(true);
    getProduk('');
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listPetani.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };
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
    <div>
      {currentPage === 2 && (
        <div className="container my-5 margin-hero">
          <h2 className="py-4">Produk Segar Rekomendasi Untuk Anda</h2>
          <div className="row">
            {currentPosts.map((data) => {
              return (
                <PerProduct key={data.number} data={data} loading={loading} />
              );
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
                return (
                  <PerProduct key={data.number} data={data} loading={loading} />
                );
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
