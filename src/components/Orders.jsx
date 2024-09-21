import HistoryIcon from '@mui/icons-material/History';
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

export default function Orders()  {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex w-full h-screen px-20 py-10 gap-4 justify-center bg-dark">
      {cartCount === 0 && (
        <div className='flex gap-2'>
          <HistoryIcon />
          <h1>No orders history</h1>
        </div>
      )}
      <div className="relative">
        <div className="flex flex-col items-center">
          <Button color="primary" onPress={handleAddToCart}>
            Add to Cart
          </Button>
        </div>

        {cartCount > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
            {cartCount} item(s) in cart
          </div>
        )}
      </div>
    </div>
  );
}