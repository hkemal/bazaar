import React from 'react';
import Navbar from '../../components/Navbar';
import ProductList from '../../containers/ProductList';
import './ProductsPage.css';

function ProductsPage({ onAddToCart, cart }) {
  return (
    <div className="ProductsPage">
      <Navbar />
      <ProductList onAddToCart={onAddToCart} cart={cart} />
    </div>
  );
}

export default ProductsPage;
