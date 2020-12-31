import React, { useState } from 'react';
import EachProduct from '../EachProduct';
import Menu from '../Menu';
import './Products.css';

const Products = (props) => {
  return (
    <div id="container">
      <div id="categories-div">
        <h4 id="categories-text">Categories</h4>
        <Menu style={{ position: "initial" }} opened={true} items={[{
          label: 'Category A >',
          onClick: () => console.log('Menu item 1 click.')
        }, {
          label: 'Category B       >',
          onClick: () => console.log('Menu item 2 click.')
        }, {
          label: 'Category C       >',
          onClick: () => console.log('Menu item 3 click.')
        }, {
          label: 'Category D       >',
          onClick: () => console.log('Menu item 4 click.')
        }, {
          label: 'Category E       >',
          onClick: () => console.log('Menu item 5 click.')
        }, {
          label: 'Category F       >',
          onClick: () => console.log('Menu item 6 click.')
        }]} />
      </div>

      <div id="products-div">
        <h4 id="products-text">Products</h4>
        <div className="Products" >
          <div className="product" id="product1">
            <EachProduct />
          </div>
          <div className="product" id="product2" >
          <EachProduct />
          </div>
          <div className="product" id="product3" >
          <EachProduct />
          </div>
          <div className="product" id="product4" >
          <EachProduct />
          </div>
          <div className="product" id="product5" >
          <EachProduct />
          </div>
          <div className="product" id="product6" >
          <EachProduct />
          </div>
          <div className="product" id="product7" >
          <EachProduct />
          </div>
          <div className="product" id="product8" >
          <EachProduct />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Products;