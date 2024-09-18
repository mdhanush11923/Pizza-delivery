import { Button, Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import PizzaImg from "../Images/pizza.jpg";
import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import AddIcon from '@mui/icons-material/Add'; 
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";



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

export default function PizzaItem() {
  return (
    // <Card className="max-w-screen  p-10 rounded-[35px]">
      
    // </Card>
    // <Card className="flex gap-4 flex-row p-0 rounded-[35px] bg-[#fdd792]">
 
    //   <CardFooter className="flex-col text-small justify-between">
    //     <b>Title</b>
    //     <p className="text-default-500">$20</p>
    //   </CardFooter>
    // </Card>

    // <Card className="flex flex-col" shadow="sm" isPressable onPress={() => console.log("item pressed")}>
    //       <CardBody className="overflow-visible p-0">
    //     <div className="flex gap-4 flex-row items-center p-5">
    //          <Image className="w-full object-cover h-[140px]" width="100%" radius="full" src={PizzaImg} />
    //          <div>
    //            <h1 className="scroll-m-20 mb-4 text-black text-2xl font-extrabold tracking-tight lg:text-3xl">
    //     //         Pizza
    //     //       </h1>
    //     //       <h2 className="scroll-m-20 pb-2 text-black text-2xl font-medium tracking-tight first:mt-0">
    //     //         $40
    //            </h2>
    //          </div>
    //     </div>
    //       </CardBody>
    //       <CardFooter className="text-small justify-center">
    //          <AddCircleIcon />
    //       </CardFooter>
    //     </Card>

    <Card className=" flex flex-col h-96 bg-[orange] items-center shadow-none" >
      <Card className="w-full justify-center text-center rounded-b-[30px] bg-[#fdd792] p-5 shadow-none">
        <div className="flex gap-4 flex-col items-center p-5">
          <Image className="w-full object-cover" width="100%" radius="full" src={PizzaImg} />
          <div>
            <h1 className="scroll-m-20 text-black text-2xl font-extrabold tracking-tight lg:text-3xl">
              Pizza
            </h1>
            <h2 className="scroll-m-20 pb-2 text-black text-xl font-medium tracking-tight first:mt-0">
              $40
            </h2>
          </div>
        </div>
      </Card>
    </Card>
  );
}
