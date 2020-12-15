import React from 'react';
import { Poster, Products, Footer } from '../../components';

const Home = () => {
  return (
    <div className="background-home">
      <Poster />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
