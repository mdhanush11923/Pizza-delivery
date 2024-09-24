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

  const removeItemFromCart = (itemId, itemSize) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.itemId === itemId && item.itemSize === itemSize
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addItemToCart, removeItemFromCart }}
    >
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle modal open event only if there are items in the cart
  const handleOpenModal = () => {
    if (cartItems.length > 0) {
      onOpen();
    }
  };

  // Handle modal close event when all items are removed
  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  return (
    <div>
      {cartItems.length > 0 && (
        <Card
          isBlurred
          isPressable
          radius="sm"
          shadow="lg"
          onPress={handleOpenModal}
          className="fixed bottom-5 left-10 border items-center right-10 p-4 text-center z-50"
        >
          <h1 className="text-center  m-0">
            {cartItems.reduce((total, item) => total + item.quantity, 0)} items
            in cart
          </h1>
        </Card>
      )}

      <Modal
        scrollBehavior="inside"
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cart Items
              </ModalHeader>
              <ModalBody>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p> // Display this if cart is empty
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.itemId}-${item.itemSize}`}
                      className="flex justify-between"
                    >
                      <div>
                        <h4 className="font-semibold">{item.itemName}</h4>
                        <p>Size: {item.itemSize}</p>
                        <p>Price: ${item.itemPrice}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <Button
                        size="sm"
                        color="danger"
                        onPress={() =>
                          removeItemFromCart(item.itemId, item.itemSize)
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                )}
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
    </div>
  );
}
