import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { createContext, useContext, useState } from "react";

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Sum up the quantities

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) =>
          cartItem.itemId === item.itemId && cartItem.itemSize === item.itemSize
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.itemId === item.itemId && cartItem.itemSize === item.itemSize
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };


  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.itemId === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};
// UI part
export default function Cart() {
  const { cartItems, removeItemFromCart } = useCart();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      {cartItems.length > 0 && (
        <Card
          isBlurred
          isPressable
          radius="sm"
          shadow="lg"
          onPress={onOpen}
          className="fixed bottom-5 left-10 border items-center right-10 p-4 text-center z-50"
        >
          <h1 className="text-center  m-0">
            {cartItems.reduce((total, item) => total + item.quantity, 0)} items
            in cart
          </h1>
          <Modal
            scrollBehavior="inside"
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            classNames={{
              backdrop: "",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Cart Items
                  </ModalHeader>
                  <ModalBody>
                    {cartItems.map((item) => (
                      <div key={item.itemId} className="flex justify-between">
                        <div>
                          <h4>{item.itemName}</h4>
                          <p>Price: ${item.itemPrice}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                        <Button
                          size="sm"
                          color="danger"
                          onPress={() => removeItemFromCart(item.itemId)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Proceed to Checkout
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </Card>
      )}
    </div>
  );
}
