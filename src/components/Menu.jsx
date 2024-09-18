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
    <div className="flex h-screen">
      <PizzaItem/>
    </div>

  );
}
