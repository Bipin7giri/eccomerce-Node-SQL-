/** @format */

import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import apiClient from '../api/index';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slice/cartSlice';
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState({});
  const getProductById = async () => {
    const res = await apiClient.get(`product/getproduct/${id}`);
    if (res.data) {
      setProducts(res.data);
    }
  };
  useEffect(() => {
    getProductById();
  }, []);
  return (
    <>
      <Navbar />
      <div class='container-fluid pb-5'>
        <div class='row px-xl-5'>
          <div class='col-lg-5 mb-30'>
            <div>
              <img
                style={{ width: '100%', height: '100%' }}
                src={products[0]?.image}
              />
            </div>
          </div>

          <div class='col-lg-7 h-auto mb-30'>
            <div class='h-100 bg-light p-30'>
              <h3>{products[0]?.product_name}</h3>
              <div class='d-flex mb-3'>
                <div class='text-primary mr-2'>
                  <small class='fas fa-star'></small>
                  <small class='fas fa-star'></small>
                  <small class='fas fa-star'></small>
                  <small class='fas fa-star-half-alt'></small>
                  <small class='far fa-star'></small>
                </div>
                <small class='pt-1'>(99 Reviews)</small>
              </div>
              <h3 class='font-weight-semi-bold mb-4'>
                RS {products[0]?.product_price}
              </h3>
              <div>
                <p class='mb-4'>{products[0]?.slug}</p>
                <p class='mb-4'>Category:{products[0]?.name}</p>
                <p class='mb-4'>Tags:{products[0]?.tags}</p>
              </div>

              <div class='d-flex align-items-center mb-4 pt-2'>
                <button
                  onClick={() => {
                    dispatch(cartAction.addToCart(products));
                  }}
                  class='btn btn-primary px-3'>
                  <i class='fa fa-shopping-cart mr-1'>
                    <ShoppingCartOutlined style={{ fontSize: '300%' }} />
                  </i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class='row px-xl-5'>
          <div class='col'>
            <div class='bg-light p-30'>
              <div class='nav nav-tabs mb-4'>
                <a
                  class='nav-item nav-link text-dark active'
                  data-toggle='tab'
                  href='#tab-pane-1'>
                  Description
                </a>
              </div>
              <div class='tab-content'>
                <div
                  class='tab-pane fade show active'
                  id='tab-pane-1'>
                  <h4 class='mb-3'>Product Description</h4>
                  <p>{products[0]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
