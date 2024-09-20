import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
} from "@nextui-org/react";
import PizzaImg from "../Images/pizza.jpg";
import { Button } from "@nextui-org/react";
import PizzaItem from "./PizzaItem";
export default function Menu() {
  const colors = [
    "#98DED9", // Blue-Green
    "#A1D6B2", // Green
    "#B4E380", // Green
    "#CCE0AC", // Light Green
    "#C3FF93", // Pale Green
    "#D5ED9F", // Light Green
    "#F0EAAC", // Light Yellow
    "#FFFF80", // Yellow
    "#C0C78C", // Olive
    "#F4DEB3", // Beige
    "#FFDB5C", // Yellow-Orange
    "#FFEEAD", // Light Orange
    "#FFDBB5", // Peach
    "#fadfa1", // Light Apricot
  ];

  const [selectedKey, setSelectedKey] = React.useState("All items");

  return (
    <div className="flex flex-col items-center p-10 py-10 gap-6">
      <div className="flex flex-wrap gap-4 lg:px-32 w-full justify-between">
        <h1 className="scroll-m-20 mb-4  font-extrabold tracking-tight text-center text-3xl lg:text-4xl">
          {selectedKey}
        </h1>
        <Tabs variant="light" color="success" defaultSelectedKey="All items" selectedKey={selectedKey} onSelectionChange={setSelectedKey} classNames={{ tab: "h-14 font-semibold" }} size="lg" aria-label="Tabs sizes">
          <Tab key="All items" title="All items" />
          <Tab key="Vegetarian" title="Vegetarian" />
          <Tab key="Non Vegetarian" title="Non Vegetarian" />
        </Tabs>
     </div>
      
      <div className="flex flex-wrap justify-center gap-16">
        {colors.map((color, index) => (
          <PizzaItem key={index} color="bg-peachblossom" />
        ))}
      </div>
    </div>
  );
}
