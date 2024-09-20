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

  return (
    <div className="flex flex-col items-center p-10 gap-6">
      <Tabs size="lg" aria-label="Tabs sizes">
        <Tab key="photos" title="All items" />
        <Tab key="music" title="Vegetarian" />
        <Tab key="videos" title="Non Vegetarian" />
      </Tabs>
      <h1 className="scroll-m-20 mb-4  font-extrabold tracking-tight text-center text-3xl lg:text-4xl">
        All items
      </h1>
      <div className="flex flex-wrap justify-center gap-16">
        {colors.map((color, index) => (
          <PizzaItem key={index} color="bg-peachblossom" />
        ))}
      </div>
    </div>
  );
}
