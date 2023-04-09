import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard'
import { addToCart } from '../Utils/fackDB';

const Shop = () => {
    const productData =useLoaderData();
    const handelAddToCart =id=>{
        console.log(id)
        addToCart(id)
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 my-container gap-8'>
         {
            productData.map(product=><ProductCard key={product.id} product={product} handelAddToCart={handelAddToCart}/>)
         }            
        </div>
    );
};

export default Shop;