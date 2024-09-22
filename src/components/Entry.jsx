import React from "react";
import { CardFooter, CardHeader, Link, ScrollShadow } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import windowImg from "../Images/windowPizza.png";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import BrandIcon from "./BrandIcon";

export default function Entry(props) {
  const buttonClass = "bg-[#4C5D65] hover:bg-[#F27F14] text-white h-14";
  const [details, setDetails] = React.useState({
    email: "",
    p1: "",
    p2: "",
    firstName: "",
    lastName: "",
  });
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    p1: "",
  });

  function handleSignupChange(event) {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;

    setLoginDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  return (
    <div className="flex flex-wrap flex-row-reverse items-center justify-around p-4 sm:p-10 bg-[#3A5565]">
      <Card className="px-6 py-6 rounded-[20px] w-[440px]">
        <CardHeader className="justify-center">
          <div className="flex gap-2">
            <h1>Get Started with </h1>
            <BrandIcon />
          </div>
        </CardHeader>
        <CardBody className="">
          <Tabs
            variant="underlined"
            defaultSelectedKey={props.defaultTab}
            classNames={{ tab: "h-12 font-medium mb-2" }}
            fullWidth
            size="lg"
            radius="lg"
          >
            <Tab key="login" title="Login">
              <div className="flex-col space-y-5 justify-center">
                <Input
                  name="email"
                  onChange={handleLoginChange}
                  value={loginDetails.email}
                  type="email"
                  label="Email"
                />
                <Input
                  name="p1"
                  onChange={handleLoginChange}
                  value={loginDetails.p1}
                  type="password"
                  label="Password"
                />
                <div className="flex justify-end">
                  <Button className="place-self-end" variant="light">
                    Forgot password?
                  </Button>
                </div>

                <Button
                  as={Link}
                  fullWidth
                  radius="lg"
                  className={buttonClass}
                  variant="solid"
                  size="lg"
                  onPress={() => console.log(loginDetails)}
                  href="/pizza-delivery/"
                >
                  Login
                </Button>

                <div className="flex justify-center">
                  <Button className="place-self-center" variant="light">
                    Admin?
                  </Button>
                </div>
              </div>
            </Tab>

            <Tab key="signup" title="Sign up">
              <div className="flex-col space-y-5 justify-center">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    name="firstName"
                    type="text"
                    onChange={handleSignupChange}
                    value={details.firstName}
                    label="First Name"
                  />
                  <Input
                    name="lastName"
                    type="text"
                    onChange={handleSignupChange}
                    value={details.lastName}
                    label="Last Name"
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  onChange={handleSignupChange}
                  value={details.email}
                  label="Email"
                />
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    name="p1"
                    type="password"
                    onChange={handleSignupChange}
                    value={details.p1}
                    label="Password"
                  />
                  <Input
                    name="p2"
                    type="password"
                    onChange={handleSignupChange}
                    value={details.p2}
                    label="Confirm"
                  />
                </div>
                <Button
                  as={Link}
                  fullWidth
                  radius="lg"
                  className={buttonClass}
                  variant="solid"
                  size="lg"
                  onPress={() => console.log(details)}
                  href="/pizza-delivery/"
                >
                  Sign Up
                </Button>
              </div>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      <Card className="bg-transparent sm:flex">
        <CardBody>
          <Image width={720} src={windowImg} alt="NextUI Album Cover" />
        </CardBody>
      </Card>
    </div>
  );
}
