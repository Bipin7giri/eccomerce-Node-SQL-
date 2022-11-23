/** @format */

import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const CarouselPage = () => {
  return (
    <>
      <div class='container-fluid mb-3'>
        <div class='row px-xl-5'>
          <div class='col-lg-8'>
            <Carousel autoplay>
              <div>
                <img
                  width='100%'
                  src={require('../assets/carousel-1.jpg')}
                />
              </div>
              <div>
                <img
                  width='100%'
                  src={require('../assets/carousel-2.jpg')}
                />
              </div>
              <div>
                <img
                  width='100%'
                  src={require('../assets/carousel-3.jpg')}
                />
              </div>
            </Carousel>
          </div>
          <div class='col-lg-4'>
            <div
              class='product-offer mb-30'
              style={{ height: '200px' }}>
              <img
                class='img-fluid'
                src={require('../assets/img/offer-1.jpg')}
                alt=''
              />
              <div class='offer-text'>
                <h6 class='text-white text-uppercase'>Save 20%</h6>
                <h3 class='text-white mb-3'>Special Offer</h3>
                <a
                  href=''
                  class='btn btn-primary'>
                  Shop Now
                </a>
              </div>
            </div>
            <div
              class='product-offer mb-30'
              style={{ height: '200px' }}>
              <img
                class='img-fluid'
                src={require('../assets/img/offer-2.jpg')}
                alt=''
              />
              <div class='offer-text'>
                <h6 class='text-white text-uppercase'>Save 20%</h6>
                <h3 class='text-white mb-3'>Special Offer</h3>
                <a
                  href=''
                  class='btn btn-primary'>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
