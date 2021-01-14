import React from 'react';
import CategoryList from '../../containers/CategoryList';
import EachProduct from '../EachProduct/EachProduct';
import './Products.css';

const Products = ({ items, onAddToCart, cart }) => {
  return (
    <div id="container">
      <div id="categories-div">
        <h4 id="categories-text">Categories</h4>
        <CategoryList />
      </div>

      <div id="products-div">
        <h4 id="products-text">Products</h4>
        <div className="Products" >
          {items.map(item => (
            <div className="product" key={`product-${item.id}`}>
              <EachProduct
                onAddToCart={onAddToCart}
                item={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Products;