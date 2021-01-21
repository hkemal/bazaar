import React, { useState } from 'react'
import AddingNewProduct from '../../containers/AddingNewProduct';
import './NewProductPopup.css';

function NewProductPopup(props) {
  const [newProduct, setNewProduct] = useState(null);
  const [valueOfProductName, setValueOfProductName] = useState('');
  const [valueOfProductCategory, setValueOfProductCategory] = useState('');
  const [valueOfProductPrice, setValueOfProductPrice] = useState('');
  const [valueOfProductUrl, setValueOfProductUrl] = useState('');

  let handleChangeProductName = (event) => {
    const enteredText = event.target.value
    setValueOfProductName(enteredText);
  }

  let handleChangeProductCategory = (event) => {
    setValueOfProductCategory(event.target.value);
  }

  let handleChangeProductPrice = (event) => {
    setValueOfProductPrice(event.target.value);
  }

  let handleChangeProductUrl = (event) => {
    setValueOfProductUrl(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();

    let addProduct = {
      'pictureUrl': valueOfProductUrl,
      'productName': valueOfProductName,
      'category': valueOfProductCategory.toLowerCase(),
      'price': valueOfProductPrice
    }
    // setNewProduct(addProduct);
    console.log(addProduct);
    debugger;
    postNewProduct(addProduct);
    window.location.reload();
  }

  let postNewProduct = (productData) => {
    let baseUrl = '/api/product-create';
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .catch(error => {
        console.log('Product information is wrong!');
      });
  };

  return (
    <div className='popup'>
      <div className='popup_inner'>
        <form id="new-product-form" action="submit" onSubmit={handleSubmit}>
          <label htmlFor="fProductName">Product Name : </label>
          <input type="text" id="product-name" name="product-name" value={valueOfProductName} onChange={handleChangeProductName} placeholder="Pepper, Water..." /><br />
          <label htmlFor="fProductName">Product Category : </label>
          <input type="text" id="product-category" name="product-category" value={valueOfProductCategory} onChange={handleChangeProductCategory} placeholder="Food,Vegetable..." /><br />
          <label htmlFor="fProductName">Product Price : </label>
          <input type="text" id="product-price" name="product-price" value={valueOfProductPrice} onChange={handleChangeProductPrice} placeholder="5.9 2.5..." /><br />
          <label htmlFor="fProductName">Product Url : </label>
          <input type="text" id="product-name" name="product-name" value={valueOfProductUrl} onChange={handleChangeProductUrl} placeholder="Please add png picture." /><br />
          <button type="submit" value="Submit" id="adding-new-product-button">ADD NEW PRODUCT</button>
        </form>
        <button onClick={props.closePopup}>CLOSE</button>
      </div>
      {/* <AddingNewProduct newProduct={newProduct} /> */}
    </div>
  )
}
export default NewProductPopup;

