/** @format */

import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import apiClient from '../api/index';
import { cartAction } from '../redux/slice/cartSlice';

const FeaturedProducts = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const getAllProduct = async () => {
    const res = await apiClient.get(`product/allProduct`);
    if (res.data) {
      setProducts(res.data);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div class='container-fluid pt-5 pb-3'>
        <h2 class='section-title position-relative text-uppercase mx-xl-5 mb-4'>
          <span class='bg-secondary pr-3'>Featured Products</span>
        </h2>
        <div class='row px-xl-5'>
          {products?.map((item) => {
            return (
              <div class='col-lg-3 col-md-4 col-sm-6 pb-1'>
                <div class='product-item bg-light mb-4'>
                  <div class='product-img position-relative overflow-hidden'>
                    <div style={{ width: '400px', height: '450px' }}>
                      <img
                        class='img-fluid w-100'
                        // style={{ width: '100%', height: '100%' }}
                        src={item.image}
                        alt=''
                      />
                    </div>

                    <div class='product-action'>
                      <a
                        onClick={() => {
                          dispatch(cartAction.addToCart(item));
                        }}
                        class='btn btn-outline-dark btn-square'>
                        <i class='fa fa-shopping-cart'>
                          <ShoppingCartOutlined style={{ fontSize: '200%' }} />
                        </i>
                      </a>
                      <a
                        class='btn btn-outline-dark btn-square'
                        href=''>
                        <i class='far fa-heart'>
                          <HeartOutlined style={{ fontSize: '200%' }} />
                        </i>
                      </a>
                    </div>
                  </div>
                  <div class='text-center py-4'>
                    <Link
                      to={isLoggedIn ? '/productdetails/' + item.id : '/login'}
                      class='h6 text-decoration-none text-truncate'
                      href=''>
                      {item.product_name}
                    </Link>
                    <div class='d-flex align-items-center justify-content-center mt-2'>
                      <h5>${item.product_price}</h5>
                      <h6 class='text-muted ml-2'>
                        <del>$123.00</del>
                      </h6>
                    </div>
                    <div class='d-flex align-items-center justify-content-center mb-1'>
                      <small class='fa fa-star text-primary mr-1'></small>
                      <small class='fa fa-star text-primary mr-1'></small>
                      <small class='fa fa-star text-primary mr-1'></small>
                      <small class='fa fa-star text-primary mr-1'></small>
                      <small class='fa fa-star text-primary mr-1'></small>
                      <small>(99)</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
