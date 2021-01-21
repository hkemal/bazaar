import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NewProduct from '../../components/NewProduct/NewProduct';
import AddingItem from '../../containers/AddingItem';
import CategoryList from '../../containers/CategoryList';
import './ProductAddingPage.css';

function ProductAddingPage({ onAddToCart, cart }) {
  // console.log(items);
  return (
    <div>
      <Navbar cart={cart} />
      <div id="info-container" style={{ width: "66.67%", height: '100%', margin: "0 auto" }}>
        <div id="categories-div">
          <h4 id="categories-text">Categories</h4>
          <CategoryList />
        </div>
        <AddingItem onAddToCart={onAddToCart} cart={cart} />
        <NewProduct />
      </div>
    </div>
  )
}

export default ProductAddingPage