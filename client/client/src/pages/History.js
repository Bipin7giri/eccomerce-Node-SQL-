/** @format */

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import apiClient from '../api/index';
import { useSelector } from 'react-redux';
const History = () => {
  const [history, setHistory] = useState();
  const { email } = useSelector((state) => state.user.user);
  const getHistory = async () => {
    const res = await apiClient.get(`order/orderlist/${email}`);
    if (res.data) {
      console.log(res.data);
      setHistory(res.data);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <>
      <Navbar />
      <div class='container-fluid'>
        <div class='row px-xl-5'>
          <div class='col-lg-12 table-responsive mb-5'>
            <table class='table table-light table-borderless table-hover text-center mb-0'>
              <thead class='thead-dark'>
                <tr>
                  <th>payment_id</th>
                  <th>Payment VIA</th>
                  <th>Amount</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody class='align-middle'>
                {history?.map((item) => {
                  return (
                    <tr>
                      <td class='align-middle'>
                        <img
                          src='img/product-1.jpg'
                          alt=''
                          style={{ width: '50px' }}
                        />
                        {item.payment_id}
                      </td>
                      <td class='align-middle'>{item.payment_by}</td>
                      <td class='align-middle'>{item.product_name}</td>
                      <td class='align-middle'>{item.paid_amount}</td>

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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div class='col-lg-4'>
            <h5 class='section-title position-relative text-uppercase mb-3'>
              <span class='bg-secondary pr-3'>Order Summary</span>
            </h5>
            <div class='bg-light p-30 mb-5'>
              <div class='border-bottom pb-2'></div>
              <div class='pt-2'>
                <div class='d-flex justify-content-between mt-2'>
                  <h5>Total</h5>
                  <h5>400</h5>
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

export default History;
