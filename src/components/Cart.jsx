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
  // State to store items in the cart
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;
  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.itemId !== itemId)
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
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            cart
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
