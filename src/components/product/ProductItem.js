import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

export default function ProductItem({
  item,
  addToCart,
  cartItems,
  removeQtyCart,
}) {
  const [proIndex, setProIndex] = useState(-1);
  const [cart, setCart] = useState(cartItems);
  useEffect(() => {
    const index = cart.findIndex((obj) => obj.id === item.id);
    setProIndex(index);
    setCart(cartItems);
  }, [cart, cartItems, item.id]);

  return (
    <div className="product-item">
      <div>
        <h5>{item.title.slice(0, 20)}</h5>
        <h4>$ {item.price}</h4>
      </div>
      <div className="product-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="product-btn">
        <Link to={`/products/${item.id}`}>
          <button type="button" className="detail-btn">
            More detail
          </button>
        </Link>
        {proIndex < 0 ? (
          <button
            type="button"
            className="add-btn"
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        ) : (
          <div className="product-counter">
            <button onClick={() => removeQtyCart(item.id)}>-</button>
            <span>{cart[proIndex]?.qty}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
