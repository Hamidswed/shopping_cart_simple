import React from "react";
import ProductList from "../components/product/ProductList";

export default function Home({addToCart,cartItems,removeQtyCart}) {
  return (
    <div>
      <ProductList addToCart={addToCart} removeQtyCart={removeQtyCart} cartItems={cartItems}/>
    </div>
  );
}
