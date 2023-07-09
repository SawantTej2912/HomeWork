import React from 'react';
import Products from '../Product';
import { productData, productDataTwo } from '../Product/data';


export default function Watches() {
  // const headingStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh',
  // };<h1 style={headingStyle}>Watches</h1>;

  return (
    <>
      <Products heading='Choose your favorite' data={productData} />
      <Products heading='Bling Bling' data={productDataTwo} />
    </>
  );
}