import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import ProductList from '../../containers/ProductList';
import './ProductsPage.css';

class ProductsPage extends Component {
  state = {
    products: []
  }

  render () {
    return (
      <div className="ProductsPage">
        <Navbar />
        <ProductList />
      </div>
    );
  }
}
export default ProductsPage;
