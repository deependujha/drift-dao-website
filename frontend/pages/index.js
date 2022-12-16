import React from 'react'
import Navbar from '../components/layout/Navbar';
import Home from '../components/main/Home';
import Image from "next/image";
import Product from '../components/main/Product';
import About from '../components/main/About';
import Contact from '../components/main/Contact';


const index = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <Product />
      <About />
      <Contact/>
    </div>
  );
}

export default index