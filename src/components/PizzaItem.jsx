import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import PizzaImg from "../Images/pizza.jpg";
import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownCircleSharpIcon from "@mui/icons-material/ArrowDropDownCircleSharp";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import pizzas from "./pizzaData";

export default function PizzaItem({id , color}) {
  const [selectedSize, setSelectedSize] = React.useState("medium"); // Default size
  const pizza = pizzas[id];

  function DemoDropDown() {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            fullWidth
            className="capitalize bg-background text-forground"
            radius="sm"
            color="warning"
            size="sm"
          >
            {selectedSize}
            <ArrowDropDownCircleSharpIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={new Set([selectedSize])}
          onSelectionChange={(keys) =>
            setSelectedSize(Array.from(keys).join(", "))
          }
        >
          <DropdownItem key="small">Small (8 Inches)</DropdownItem>
          <DropdownItem key="medium">Medium (10 Inches)</DropdownItem>
          <DropdownItem key="large">Large (12 Inches)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Card
      isPressable
      className=" flex flex-col bg-foreground gap-4 pb-4 rounded-b-[10px] items-center shadow-sm"
    >
      <Card
        isPressable
        style={{ backgroundColor: color }}
        className={`w-[275px] justify-center text-center rounded-b-[30px] ${color} p-5 shadow-sm`}
      >
        <div className="flex gap-4 flex-col items-center p-5">
          <Image
            className="w-full object-cover"
            width="100%"
            radius="full"
            src={PizzaImg}
          />
          <div>
            <h1 className="scroll-m-20 text-black text-2xl font-extrabold tracking-tight">
              {pizza.name}
            </h1>
          </div>
          <div className="flex flex-col w-full gap-4 px-5">
            <DemoDropDown />
            <Button color="danger" radius="full" size="lg">
              <AddIcon />
            </Button>
          </div>
        </div>
      </Card>

      <h2 className="scroll-m-20 pb-2 text-background text-xl font-bold tracking-tight first:mt-0">
        ₹ {pizza.prices[selectedSize]}
      </h2>
    </Card>
  );
}
