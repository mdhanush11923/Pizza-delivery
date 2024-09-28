import React from "react";
import { Link } from "@nextui-org/react";
import PizzaImg from "../Images/circlePizza.png";
import { Divider, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function StartPage({ darkMode, changeMode }) {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-10 py-10 sm:p-16">
        <div
          className={`items-center justify-center h-2/6 flex max-md:flex-wrap-reverse px-16 gap-20 lg:px-20`}
        >
          <div className="max-w-lg gap-4">
            <h1 className="scroll-m-20 mb-4 font-black tracking-tight text-3xl lg:text-5xl">
              Delicious Pizza Delivered Right to Your Doorstep
            </h1>
            <h2 className="scroll-m-20 pb-2 text-xl font-medium tracking-tight mt-6">
              Craving pizza? We’ve got you covered! 🔥Hot, 🍃fresh and
              ⏩delivered fast!
            </h2>
            <div className="flex flex-wrap gap-3 mt-14">
              <Button
                className="h-14 w-32"
                color="primary"
                radius="sm"
                size="lg"
                href="/pizza-delivery/login"
                as={Link}
                variant="ghost"
              >
                Login
              </Button>
              <Button
                className="h-14 w-32 hover:bg-[#0000a1]"
                color="primary"
                radius="sm"
                size="lg"
                href="/pizza-delivery/signup"
                as={Link}
              >
                Sign up
              </Button>
              <div className="flex m-5">
                <ThemeSwitcher onSwitch={changeMode} condition={darkMode} />
              </div>
            </div>
          </div>
          <div className={`max-md:w-full`}>
            <Image isBlurred src={PizzaImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
