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