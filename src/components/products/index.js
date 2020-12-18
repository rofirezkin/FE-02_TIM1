import React from 'react';
import PerProduct from './perProduct';
import { produk, tambah } from '../../assets';

const Products = () => {
  const data = {
    lists: [
      {
        number: 1,
        title: 'brokoli',
        description:
          'Brokoli dengan kualitas terbaik dan di panen langsung dari petani',
        price: '15.000',
        images: produk,
      },
      {
        number: 2,
        title: 'Buah Melon',
        description:
          'Melon madu dengan rasa manis yang khas dan produk terbaik',
        price: '15.000',
        images: produk,
      },
      {
        number: 3,
        title: 'Wortel',
        description:
          'Wortel dengan kualitas yang baik dan segar dengan hidroponik',
        price: '15.000',
        images: produk,
      },
      {
        number: 4,
        title: 'Tomat Besar',
        description: 'Tomat berkualitas terbaik dan bisa memuaskan pelanggan',
        price: '15.000',
        images: produk,
      },
    ],
  };
  console.log(data);
  return (
    <div>
      <div className="container my-5">
        <h2 className="py-4">Dashboard Petani</h2>
        <nav>
          <div className="row">
            <div className="col-md-6">
              <h2 className="py-4">Produkmu</h2>
            </div>
            <div className="col-md-6">
              <button
                type="button"
                style={{
                  border: 'none',
                  backgroundColor: '#FAFCF0',
                  float: 'right',
                  display: 'inline',
                }}
              >
                <img src={tambah} alt="tambah" />
                <h2 style={{ float: 'right' }}>Tambah</h2>
              </button>
            </div>
          </div>
        </nav>
        <div className="row">
          {data.lists.map((isiProduk) => {
            return <PerProduct data={isiProduk} />;
          })}
        </div>
        <button type="button" className="btn btn-success float-right">
          Lihat Semua
        </button>
        <div>
          <h2 className="mt-5">Aktivitas</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;
