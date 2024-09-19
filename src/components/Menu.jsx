import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import PizzaImg from "../Images/pizza.jpg";
import { Button } from "@nextui-org/react";
import PizzaItem from "./PizzaItem";
export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <div className="flex flex-col p-10 gap-6">
      <h1 className="scroll-m-20 mb-4  font-extrabold tracking-tight text-3xl lg:text-5xl">
        All items
      </h1>
      <div className="flex flex-wrap justify gap-6 justify-evenly">
        {Array(10).fill(null).map((_, index) => (
          <PizzaItem key={index} />
        ))}
      </div>
    </div>

  );
}
