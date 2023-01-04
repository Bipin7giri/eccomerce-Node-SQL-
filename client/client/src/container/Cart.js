/** @format */

import React, { useEffect, useState } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { cartAction } from '../redux/slice/cartSlice';
// import config from '../khalti/khaltiConfig';
import { useNavigate } from 'react-router-dom';
import { Button, notification } from 'antd';
import apiClient from '../api/index';
const Cart = () => {
  const { cart } = useSelector((state) => state.carts);
  console.log(cart)
  const [cartItem, setCartItem] = useState();
  useEffect(() => {
    setCartItem(cart)
    console.log(cart)
  },[cart])

  const dispatch = useDispatch();
  const nagvigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.user.user)
  console.log(id)
  let config = {
    // replace this key with yours
    publicKey: 'test_public_key_86b647c1a4004b5db9321a90a93e9074',
    productIdentity: '1234567',
    productName: 'Multishop',
    productUrl: 'http://127.0.0.1:3000',
    eventHandler: {
       onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
    
        const { idx } = payload;
    
        const res = apiClient.post('/order/addOrder', {cart:cart,payment_id:idx,user_id:id});
        if (res) {

          dispatch(cartAction.removeAll());
          nagvigate('/history');
          console.log(res.data);
        }
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log('widget is closing');
      },
    },
    paymentPreference: [
      'KHALTI',
      'EBANKING',
      'MOBILE_BANKING',
      'CONNECT_IPS',
      'SCT',
    ],
  };
  let checkout = new KhaltiCheckout(config);

  const openNotification = () => {
    notification.open({
      message: 'Error',
      description: 'Nothing in the carts',
    });
  };
 
  let price = cart?.map((item) => {
    return item.product_price;
  });
  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total = total + price[i];
  }
  const payVIAKhalti = () => {
    if (isLoggedIn === false) {
      nagvigate('/login');
    } else if (cart.length === 0) {
      openNotification();
    } else {
      checkout.show({ amount: 2000 });
    }
  };
  return (
    <>
      <Navbar />
      <div class='container-fluid'>
        <div class='row px-xl-5'>
          <div class='col-lg-8 table-responsive mb-5'>
            <table class='table table-light table-borderless table-hover text-center mb-0'>
              <thead class='thead-dark'>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody class='align-middle'>
                {cart.map((item) => {
                  return (
                    <tr>
                      <td class='align-middle'>
                        <img
                          src={item?.image}
                          alt=''
                          style={{ width: '50px' }}
                        />{' '}
                        {item.product_name}
                      </td>
                      <td class='align-middle'>${item.product_price}</td>
                      <td class='align-middle'>
                        <div
                          class='input-group quantity mx-auto'
                          style={{ width: '100px' }}>
                          <input
                            type='text'
                            class='form-control form-control-sm bg-secondary border-0 text-center'
                            value='1'
                          />
                        </div>
                      </td>
                      <td class='align-middle'>
                        <button
                          onClick={() => {
                            dispatch(cartAction.removeCart(item.id));
                          }}
                          class='btn btn-sm btn-danger'>
                          <i class='fa fa-times'>X</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div class='col-lg-4'>
            <form
              class='mb-30'
              action=''>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control border-0 p-4'
                  placeholder='Coupon Code'
                />
                <div class='input-group-append'>
                  <button class='btn btn-primary'>Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 class='section-title position-relative text-uppercase mb-3'>
              <span class='bg-secondary pr-3'>Cart Summary</span>
            </h5>
            <div class='bg-light p-30 mb-5'>
              <div class='border-bottom pb-2'>
                <div class='d-flex justify-content-between mb-3'>
                  <h6>Subtotal</h6>
                  <h6> {total}</h6>
                </div>
                <div class='d-flex justify-content-between'>
                  <h6 class='font-weight-medium'>Shipping</h6>
                  <h6 class='font-weight-medium'>$10</h6>
                </div>
              </div>
              <div class='pt-2'>
                {/* <div class='d-flex justify-content-between mt-2'>
                  <h5>Total</h5>
                  <h5>{total}</h5>
                </div> */}
                <button
                  onClick={payVIAKhalti}
                  class='btn btn-block btn-primary font-weight-bold my-3 py-3'>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
