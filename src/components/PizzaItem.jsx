import React from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import PizzaImg from "../Images/pizza.jpg";
import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import AddIcon from '@mui/icons-material/Add'; 
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";


function DemoModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly className="w-10 h-28 rounded-[13px] items-center justify-center" color="warning">+</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="auto"
        backdrop="opaque"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

function DemoPopOver() {
  return (
    <Popover backdrop="blur" placement="right" showArrow={true}>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
      </PopoverContent>
    </Popover>
  );
}

function DemoDropDown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Medium"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
          {selectedValue} 
          <ArrowDropDownCircleSharpIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="small">Small</DropdownItem>
        <DropdownItem key="medium">Medium</DropdownItem>
        <DropdownItem key="large">Large</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default function PizzaItem(props) {

  return (
    <Card className=" flex flex-col bg-foreground gap-4 pb-4 rounded-b-[10px] items-center shadow-sm" >
      <Card className={`w-[250px] justify-center text-center rounded-b-[30px] bg-[${props.color}] p-5 shadow-sm`}>
        <div className="flex gap-4 flex-col items-center p-5">
          <Image className="w-full object-cover" width="100%" radius="full" src={PizzaImg} />
          <div>
            <h1 className="scroll-m-20 text-black text-2xl font-extrabold tracking-tight lg:text-3xl">
              Pizza
            </h1>
          </div>
          <div className="flex flex-col w-full gap-4 px-5">

            <DemoDropDown />
            <Button color="danger" radius="full" size="lg"><AddIcon/></Button>
          </div>
        </div>
      </Card>
      
      <h2 className="scroll-m-20 pb-2 text-background text-xl font-bold tracking-tight first:mt-0">
        ₹250
      </h2>
    </Card>
  );
}
