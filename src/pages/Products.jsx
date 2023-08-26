import React from 'react'
import { BikeList } from "../helpers/helper"



const Products = () => {


  return (
    <div className='product-wrapper'>
      <h2 className='products-title text-white text-center fs-1'>Ride in Style: Discover Our Range of High-Quality Bicycles</h2>
      <div className='products-list'>
        {BikeList.map((item, index)=>{
          return <div className='prod' key={index}>
            <img className='rounded shadow' src={item.image} />
            <div>
              <p className='fw-bold fs-5 text-white'>{item.name}</p>
              <p className='badge bg-success'>$ {item.price}</p>
              <a id='a'><span>Add</span></a>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Products;