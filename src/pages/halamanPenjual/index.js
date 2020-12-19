import React from 'react';
import { Penjual, Bawah } from '../../components';
// import TabelKomponen from '../../components/table/table';

const Home = () => {
  return (
    <div className="background-home">
      <Penjual />
      {/* <TabelKomponen /> */}
      <Bawah />
    </div>
  );
};

export default Home;
