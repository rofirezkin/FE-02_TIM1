/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PerProduct from './perProduct';
import { produk, tambah } from '../../assets';
import { Petani } from '../../services';

const Products = () => {
  const [infoProduk, setInfoProduk] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nama_petani, setNama_petanil] = useState(infoProduk.nama_petani);
  const [alamat, setAlamat] = useState(infoProduk.alamat);
  const [nomor_hp, setNomor_hp] = useState(infoProduk.nomor_hp);
  const [email, setEmail] = useState(infoProduk.email);
  // const [listPetani, setListPetani] = useState([]);
  const params = useParams();
  const { petaniId } = params;

  useEffect(() => {
    setLoading(true);
    Petani.getPetaniId(petaniId)
      .then((res) => {
        setInfoProduk(res);
        setLoading(false);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petaniId]);

  const onSubmitLogin = () => {
    Petani.updatePetani(alamat, petaniId, nama_petani, nomor_hp, email)
      .then((res) => {
        console.log('data keseluruhan', res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.location.replace(`/petani/${petaniId}`);
      });
  };

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
      <div className="container my-5 margin-hero">
        <h2 className="py-4">Dashboard Petani</h2>
        <div>Informasi Petani :</div>
        <div>{`Nama Petani : ${infoProduk.nama_petani}`}</div>
        <div>{`Email : ${infoProduk.email}`}</div>
        <div>{`Alamat : ${infoProduk.alamat}`}</div>
        <div>{`Nomor Hp : ${infoProduk.nomor_hp}`}</div>
        <div className="mt-5">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="collapse"
            data-target="#demo"
          >
            Edit Data
          </button>
          <div id="demo" className="collapse">
            <div className="col-sm-6">
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitLogin();
                  }}
                >
                  <div>
                    <label htmlFor="username">
                      Nama :
                      <input
                        type="text"
                        className="form-control"
                        value={nama_petani}
                        onChange={(e) => {
                          setNama_petanil(e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="username">
                      Email :
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="username">
                      alamat :
                      <input
                        type="text"
                        className="form-control"
                        value={alamat}
                        onChange={(e) => {
                          setAlamat(e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="username">
                      Nomor Hp :
                      <input
                        type="text"
                        className="form-control"
                        value={nomor_hp}
                        onChange={(e) => {
                          setNomor_hp(e.target.value);
                        }}
                      />
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <div className="row">
            <div className="col-md-6">
              <h2 className="py-4">Produkmu</h2>
            </div>
            <div className="col-md-6">
              <Link to="/tambah_produk">
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
              </Link>
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
