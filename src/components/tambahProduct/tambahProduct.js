import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { hero1, produk, tambah } from '../../assets';

const Tproduct = () => {
  return (
    <div className="container my-5">
      <h2>Tambahkan Produk</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={produk} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Foto Produk</h5>
              <div className="row">
                <div className="col-md-3">
                  <img src={produk} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={hero1} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={hero1} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-3">
                  <button type="button">
                    <img src={tambah} className="card-img-top" alt="..." />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <form style={{ background: 'white' }} className="px-5 py-5">
            <FormGroup>
              <Label for="exampleEmail">Nama Produk</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <Label for="exampleEmail">Harga</Label>
                  <Input
                    type="number"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="exampleEmail">Satuan</Label>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <Label className="form-check-label" for="flexRadioDefault1">
                      Kilo
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <Label className="form-check-label" for="flexRadioDefault2">
                      Pcs
                    </Label>
                  </div>
                </FormGroup>
              </div>
            </div>
            <FormGroup>
              <Label for="exampleEmail">Deskripsi Produk</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Kategori</Label>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <Label className="form-check-label" for="flexRadioDefault1">
                      Buah
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <Label className="form-check-label" for="flexRadioDefault2">
                      Sayur
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <Label className="form-check-label" for="flexRadioDefault1">
                      Daging Sapi
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      checked
                    />
                    <Label className="form-check-label" for="flexRadioDefault2">
                      Telur dan unggas
                    </Label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                    />
                    <Label className="form-check-label" for="flexRadioDefault1">
                      Makanan Beku
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault6"
                      checked
                    />
                    <Label className="form-check-label" for="flexRadioDefault2">
                      Rempah
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault7"
                    />
                    <Label className="form-check-label" for="flexRadioDefault1">
                      Ikan dan Makanan Laut
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault8"
                      checked
                    />
                    <Label className="form-check-label" for="flexRadioDefault2">
                      Dan lain-lain
                    </Label>
                  </div>
                </div>
              </div>
            </FormGroup>
          </form>
        </div>
        <button type="button" className="btn btn-success btn-block mt-5">
          Tambahkan Produk
        </button>
      </div>
    </div>
  );
};

export default Tproduct;
