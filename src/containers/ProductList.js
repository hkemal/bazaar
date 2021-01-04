import React, { Component } from 'react';
import Products from '../components/Products';

class ProductList extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const res = await window.fetch('/api/get-all-product');
    const products = await res.json();
    this.setState({ products });
  }

  render () {
    return (
      <Products items={this.state.products} />
    );
  }
}
export default ProductList;
