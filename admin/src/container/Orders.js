/** @format */

import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/order/allOrder/')
      .then((res) => {
        setOrders(res.data);
      });
  },[]);
  return (
    <div class='grid  place-items-center mt-16 '>
      <div class='lg:w-[1000px] sm:mr-0 mr:0 lg:mr-40  sm:w-[200px] sm:overflow-x-auto overflow-x-auto mx-auto'>
        <table class='lg:w-[1000px] w-full sm:w-[200px] whitespace-no-wrap'>
          <thead>
            <tr class='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
              <th class='px-4 py-3'>Name</th>
              <th class='px-4 py-3'>Amount</th>
              <th class='px-4 py-3'>orderBy</th>
              <th class='px-4 py-3'>paymentby</th>
              <th class='px-4 py-3'>orderAT</th>
            </tr>
          </thead>
          <tbody class='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
            {orders?.map((item, id) => {
              return (
                <tr class='text-gray-700 dark:text-gray-400'>
                  <td class='px-4 py-3'>
                    <div class='flex items-center text-sm'>
                      {/* <!-- Avatar with inset shadow --> */}
                      <div class='relative hidden w-12 h-12 mr-3 rounded-full md:block'>
                        <img
                          class='object-cover w-full h-full rounded-full'
                          src={item.image}
                          alt=''
                          loading='lazy'
                        />
                        <div
                          class='absolute inset-0 rounded-full shadow-inner'
                          aria-hidden='true'></div>
                      </div>
                      <div>
                        <p class='font-semibold'>{item.product_name}</p>
                        <p class='text-xs text-gray-600 dark:text-gray-400'>
                          {item.tags}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class='px-4 py-3 text-sm'>$ {item.product_price}</td>
                  <td class='px-4 py-3 text-sm'>
                    {' '}
                    {item.firstname + item.lastname}
                  </td>

                  <td class='px-4 py-3 text-xs'>
                    <span class='px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100'>
                      {item.payment_by}
                    </span>
                  </td>
                  <td class='px-4 py-3 text-sm'>{item.created_AT}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
