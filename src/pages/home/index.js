import React from 'react';
import { Products, Footer } from '../../components';
import TabelKomponen from '../../components/table/table';

const Home = () => {
  return (
    <div className="background-home">
      <Products />
      <TabelKomponen />
      <Footer />
    </div>
  );
};

export default Home;
