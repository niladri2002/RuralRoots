import React from 'react'
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import FeaturedProducts from './components/FeaturedProducts';
import FeatureProduct from "./components/FeatureProduct";

import styled from "styled-components";

const Home = () => {
 const data = {
    name: "RuralRoots store",
    data: "Welcome to Rural Roots, your virtual gateway to the heart of local communities. We invite you to embark on a unique shopping journey that celebrates the essence of rural living. At Rural Roots, we take pride in curating a diverse collection of products that showcase the craftsmanship, traditions, and rich cultural heritage of our villages. From handcrafted artisanal goods to locally sourced produce, our online store is a vibrant marketplace where community spirit thrives. Join us in supporting local businesses, embracing sustainability, and exploring the true roots of rural life. Start your adventure with Rural Roots and connect with the warmth and authenticity of our villages, one click at a time."
  };

  return   <>
  <HeroSection myData={data} />
  <FeatureProduct/>
  <Services />
  <FeaturedProducts/>
  
</>;
};



export default Home
