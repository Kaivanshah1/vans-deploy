import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meal from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShow] = useState(false);

  const showCart = () => {
    setCartIsShow(true);
  };

  const hideCart = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCartClick={showCart} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
