import { Card } from "@nextui-org/react";
import React, { createContext, useContext, useState } from "react";

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

export default function Cart() {
  const { cartCount, setCartCount } = useCart();
  return (
    <div>
      {cartCount > 0 && (
        <Card isBlurred radius="sm" className="fixed bottom-5 left-10 right-10 bg-green-500 text-white p-4 text-center z-50">
          {cartCount} {cartCount === 1 ? "item" : "items"} in cart
        </Card>
      )}
    </div>
  );
}