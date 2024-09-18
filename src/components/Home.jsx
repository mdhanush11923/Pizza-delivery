import React from "react";
import { Link } from "@nextui-org/react";
import Menu from "./Menu";
import PizzaImg from "../Images/circlePizza.png";
import { Divider, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import PizzaItem from "./PizzaItem";

export default function Home() {

  return (
    <div className="flex flex-col gap-10 p-5">
      <div>
        <div className={`items-center h-2/6 flex max-md:flex-wrap gap-20 lg:px-20`}>
          <div className="max-w-lg gap-4">
            <h1 className="scroll-m-20 mb-4  font-extrabold tracking-tight text-3xl lg:text-5xl">
              Delicious Pizza Delivered Right to Your Doorstep
            </h1>
            <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              Craving pizza? We’ve got you covered! Hot, fresh, and delivered
              fast!
            </h2>
            <div className="mt-14 w-40">
              <Button
                fullWidth
                className="text-[white]"
                color="success"
                radius="md"
                size="lg"
                href="/pizza-delivery/menu"
                as={Link}
              >
                  Order Now
              </Button>
            </div>
          </div>
          <div className={`max-md:w-full`}>
            <Image isBlurred src={PizzaImg} />
          </div>
        </div>
        <Divider className="my-8" />
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
        Featured Pizzas
      </h1>
      

    </div>
  );
}
