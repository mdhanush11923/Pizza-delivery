import React from "react";
import {
  CardFooter,
  CardHeader,
  Link,
  ScrollShadow,
  Input,
  Card,
  CardBody,
  Button,
  Tabs,
  Tab,
  Image,
} from "@nextui-org/react";
import windowImg from "../Images/windowPizza.png";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import BrandIcon from "./BrandIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Entry(props) {
    const [isVisible, setIsVisible] = React.useState({
      loginPassword: false,
      signupPassword: false,
      signupConfirm: false,
    });

      const toggleVisibility = (field) => {
        setIsVisible((prevState) => ({
          ...prevState,
          [field]: !prevState[field],
        }));
      };

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

  const [errorMessage, setErrorMessage] = React.useState("");

  function handleSignupChange(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLoginDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  }

  function handleLoginSubmit() {
    if (!loginDetails.email || !loginDetails.p1) {
      setErrorMessage("Please fill in all fields for login.");
      return;
    }
    // Proceed with login action (e.g., API call)
    console.log("Login Details:", loginDetails);
  }

  function handleSignupSubmit() {
    if (
      !details.email ||
      !details.p1 ||
      !details.p2 ||
      !details.firstName ||
      !details.lastName
    ) {
      setErrorMessage("Please fill in all fields for sign up.");
      return;
    }
    if (details.p1 !== details.p2) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    // Proceed with signup action (e.g., API call)
    console.log("Sign Up Details:", details);
    
  }

     function handleLoginClear(inputName) {
       setLoginDetails((prevDetails) => ({
         ...prevDetails,
         [inputName]: "",
       }));
     }

     // Clear function for signup form inputs
     function handleSignupClear(inputName) {
       setDetails((prevDetails) => ({
         ...prevDetails,
         [inputName]: "",
       }));
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
        <CardBody>
          {errorMessage && (
            <div className="text-reddanger text-center mb-4">
              {errorMessage}
            </div>
          )}
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
                  isClearable
                  name="email"
                  onChange={handleLoginChange}
                  value={loginDetails.email}
                  type="email"
                  label="Email"
                  onClear={() => handleLoginClear("email")} // Clear only the email field
                />
                <Input
                  isClearable
                  name="p1"
                  onChange={handleLoginChange}
                  value={loginDetails.p1}
                  label="Password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => toggleVisibility("loginPassword")}
                      aria-label="toggle password visibility"
                    >
                      {isVisible.loginPassword ? (
                        <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible.loginPassword ? "text" : "password"}
                />
                <div className="flex justify-end">
                  <Button className="place-self-end" variant="light">
                    Forgot password?
                  </Button>
                </div>

                <Button
                  fullWidth
                  radius="lg"
                  className={buttonClass}
                  variant="solid"
                  size="lg"
                  onPress={handleLoginSubmit}
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
                    onClear={() => handleSignupClear("firstName")} // Clear only the first name field
                  />
                  <Input
                    name="lastName"
                    type="text"
                    onChange={handleSignupChange}
                    value={details.lastName}
                    label="Last Name"
                    onClear={() => handleSignupClear("lastName")} // Clear only the last name field
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  onChange={handleSignupChange}
                  value={details.email}
                  label="Email"
                  onClear={() => handleSignupClear("email")} // Clear only the email field
                />
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    name="p1"
                    type={isVisible.signupPassword ? "text" : "password"}
                    onChange={handleSignupChange}
                    value={details.p1}
                    label="Password"
                    onClear={() => handleSignupClear("p1")} // Clear only the password field
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => toggleVisibility("signupPassword")}
                        aria-label="toggle password visibility"
                      >
                        {isVisible.signupPassword ? (
                          <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                  <Input
                    name="p2"
                    type={isVisible.signupConfirm ? "text" : "password"}
                    onChange={handleSignupChange}
                    value={details.p2}
                    label="Confirm"
                    onClear={() => handleSignupClear("p2")} // Clear only the confirm password field
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => toggleVisibility("signupConfirm")}
                        aria-label="toggle confirm password visibility"
                      >
                        {isVisible.signupConfirm ? (
                          <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                </div>
                <Button
                  fullWidth
                  radius="lg"
                  className={buttonClass}
                  variant="solid"
                  size="lg"
                  onPress={handleSignupSubmit}
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
