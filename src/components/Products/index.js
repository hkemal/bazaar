import React, { useState } from 'react';
import CategoryList from '../../containers/CategoryList';
import EachProduct from '../EachProduct';
import Menu from '../Menu';
import './Products.css';

const Products = (props) => {
  return (
    <div id="container">
      <div id="categories-div">
        <h4 id="categories-text">Categories</h4>
        <CategoryList />

      </div>

      <div id="products-div">
        <h4 id="products-text">Products</h4>
        <div className="Products" >
          {props.items.map(item => (
            <div className="product" key={`product-${item.id}`}>
              <EachProduct
                pictureUrl={item.pictureUrl}
                name={item.productName}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
export default Products;