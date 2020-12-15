import React from 'react';
import PerProduct from './perProduct';
import { produk } from '../../assets';

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
      {
        number: 5,
        title: 'Tomat Besar',
        description: 'Tomat berkualitas terbaik dan bisa memuaskan pelanggan',
        price: '15.000',
        images: produk,
      },

      {
        number: 6,
        title: 'Tomat Besar',
        description: 'Tomat berkualitas terbaik dan bisa memuaskan pelanggan',
        price: '15.000',
        images: produk,
      },
      {
        number: 7,
        title: 'Tomat Besar',
        description: 'Tomat berkualitas terbaik dan bisa memuaskan pelanggan',
        price: '15.000',
        images: produk,
      },
      {
        number: 8,
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
        <h2 className="py-4">Produk Segar Rekomendasi Untuk Anda</h2>
        <div className="row">
          {data.lists.map((isiProduk) => {
            return <PerProduct data={isiProduk} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
