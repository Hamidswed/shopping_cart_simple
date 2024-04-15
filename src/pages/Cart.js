import React from "react";
import CartList from "../components/cart/CartList";

export default function Cart({
  cartItems,
  removeFromCart,
  removeQtyCart,
  addToCart,
}) {
  return (
    <div style={{padding:"0 1rem 5rem 1rem"}}>
      <CartList
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        removeQtyCart={removeQtyCart}
      />
    </div>
  );
}
