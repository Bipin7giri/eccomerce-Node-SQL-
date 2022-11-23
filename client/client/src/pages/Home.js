/** @format */

import Carousel from '../components/Carousel';
import React from 'react';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import Category from '../components/Category';
import FeaturedProducts from '../components/FeaturedProducts';
import Offer from '../components/Offer';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Feature />
      <Category />
      <FeaturedProducts />
      <Offer />
      <Footer />
    </>
  );
};

export default Home;
