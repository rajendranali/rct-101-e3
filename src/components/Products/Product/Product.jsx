import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Product = () => {
  // Note: this id should come from api
  const [products, Getproducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/products').then((r) => Getproducts(r.data))
  }, [])
  //const product = { id: 1 };

  return (
    <>
      {products.map((products) => (
        <div data-cy={`product-${products.id}`}>
          <h3 data-cy="product-name">{products.name}</h3>
          <h6 data-cy="product-description">{products.description}</h6>
          <button data-cy="product-add-item-to-cart-button">Add to cart</button>
          <div>
            <button data-cy="product-increment-cart-item-count-button">
              +
            </button>
            <span data-cy="product-count">
              {
                // Count here from CartItems
              }
            </span>
            <button data-cy="product-decrement-cart-item-count-button">
              -
            </button>
            <button data-cy="product-remove-cart-item-button">remove</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Product
