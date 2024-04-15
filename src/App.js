import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCartArray = [...cartItems];
    const updatedProduct = { ...product, qty: 1, totalPrice: product.price };
    const productIndex = updatedCartArray.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex === -1) {
      setCartItems([...updatedCartArray, updatedProduct]);
    } else {
      updatedCartArray[productIndex].qty += 1;
      setCartItems(updatedCartArray);
      updatedCartArray[productIndex].totalPrice =
        updatedCartArray[productIndex].price *
        updatedCartArray[productIndex].qty;
      setCartItems(updatedCartArray);
    }
  };
  const removeFromCart = (id) => {
    const updatedCartArray = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartArray);
  };
  const removeQtyCart = (id) => {
    const productIndex = cartItems.findIndex((item) => item.id === id);
    const updatedCartArray = [...cartItems];
    if (productIndex !== -1 && updatedCartArray[productIndex].qty !== 1) {
      updatedCartArray[productIndex].qty -= 1;
      setCartItems(updatedCartArray);
      updatedCartArray[productIndex].totalPrice =
        updatedCartArray[productIndex].price *
        updatedCartArray[productIndex].qty;
      setCartItems(updatedCartArray);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div>
      <NavBar cartLength={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              cartItems={cartItems}
              removeQtyCart={removeQtyCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              removeQtyCart={removeQtyCart}
            />
          }
        />
        <Route
          path="/products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
