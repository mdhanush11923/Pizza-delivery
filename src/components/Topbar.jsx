import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Tab,
  Tabs,
} from "@nextui-org/react";
import BrandIcon from "./BrandIcon";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useLocation } from "react-router-dom";

export default function Topbar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathname } = useLocation();

  const menuItems = [
    { title: "Home", path: "/pizza-delivery/" },
    { title: "Menu", path: "/pizza-delivery/menu" },
    { title: "Custom", path: "/pizza-delivery/custom" },
    { title: "Orders", path: "/pizza-delivery/orders" },
    { title: "Log Out", path: "/pizza-delivery/logout" },
  ];

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false); // Close the menu
    window.location.href = path; // Navigate to the selected path
  };

  return (
    <Navbar>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden"
      />
      <NavbarBrand>
        <BrandIcon />
      </NavbarBrand>
      <NavbarContent className="hidden max-w-full md:flex" justify="center">
        <Tabs
          selectedKey={pathname}
          color="success"
          size="lg"
          variant="underlined"
          aria-label="Navigation tabs"
        >
          {menuItems.slice(0, 4).map((item) => (
            <Tab key={item.path} href={item.path} title={item.title} />
          ))}
        </Tabs>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Link color="success" href="/pizza-delivery/entry">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button as={Link} href="/pizza-delivery/entry" color="success" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher onSwitch={props.onSwitch} condition={props.condition} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-inherit" isOpen={isMenuOpen}>
        <div className={`bg-${props.condition? "black":"white"} h-full`}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.title}-${index}`}>
              <Button
                color="default"
                className={`text-${props.condition ? "white" : "black"} w-full `}
                onClick={() => handleMenuItemClick(item.path)}
                size="lg"
                variant="light"
                radius="sm"
              >
                <p> {item.title} </p>
              </Button>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
