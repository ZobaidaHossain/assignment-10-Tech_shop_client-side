import b1 from "./../assets/b1.jpg";
import b2 from "./../assets/b2.jpg";
import b3 from "./../assets/b3.jpg";
import b4 from "./../assets/b4.jpg";

import { useLoaderData, useParams,  } from 'react-router-dom';
 import { useState } from 'react';
import CoffeeCard from './CoffeeCard';

const Product = () => {
    const loadedcoffees=useLoaderData();
//edit
  const {brandName}=useParams();

  const filteredCoffees = brandName?loadedcoffees.filter((coffee) => coffee.brand === brandName)
  : loadedcoffees;

  const hasAvailableProducts = filteredCoffees.length > 0;

  //edit sesh
  
   const[coffees,setCoffees]=useState(loadedcoffees);
    return (
        <>

<div className="carousel w-full h-[25rem]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={b1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={b2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={b3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={b4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      {/* show product */}
      <div className='m-20'>
     <h1 className='text-6xl text-center text-purple-600'>Your desire Products</h1>
     {hasAvailableProducts ? (
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

     
     {filteredCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={filteredCoffees}
              setCoffees={setCoffees}
            />
          ))}
     </div>
     ):
     (
      <p className="text-center text-red-500">
        No products available for the selected brand.
      </p>
    )}
     </div>
   
    </>
    );
};

export default Product;