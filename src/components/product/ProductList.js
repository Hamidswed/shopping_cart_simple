import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const url = "https://fakestoreapi.com/products";
export default function ProductList({ addToCart, cartItems, removeQtyCart }) {
  const [productItem, setProductItem] = useState([]);
  const getData = async () => {
    const response = await axios.get(url);
    const data = await response.data;
    setProductItem(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="title">
      <h2>ProductList</h2>
      <div className="product-list">
        {productItem.length !== 0 ? (
          productItem.slice(0, 9).map((item) => {
            return (
              <ProductItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeQtyCart={removeQtyCart}
                cartItems={cartItems}
              />
            );
          })
        ) : (
          <i className="fas fa-spinner fa-spin fa-xl" />
        )}
      </div>
    </div>
  );
}
