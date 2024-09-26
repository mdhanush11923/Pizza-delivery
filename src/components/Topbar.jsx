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
  Badge,
} from "@nextui-org/react";
import BrandIcon from "./BrandIcon";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "./Cart";

export default function Topbar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathname } = useLocation();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const menuItems = [
    { title: "Home", path: "/pizza-delivery/dashboard" },
    { title: "Menu", path: "/pizza-delivery/dashboard/menu" },
    { title: "Custom", path: "/pizza-delivery/dashboard/custom" },
    { title: "Orders", path: "/pizza-delivery/dashboard/orders" },
    { title: "Log Out", path: "/pizza-delivery/" },
  ];

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(!isMenuOpen); // Close the menu
    navigate(path); // Navigate to the selected path
  };

  return (
    <Navbar
      maxWidth
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
          <Button isBlock color="danger" variant="light" href="/pizza-delivery/">
            Logout
          </Button>
        </NavbarItem>
        <NavbarItem>
          <IconButton aria-label="cart">
            <Badge
              size="lg"
              content={cartCount === 0 ? "" : cartCount}
              variant="shadow"
              color="success"
            >
              <ShoppingCartIcon color="success" />
            </Badge>
          </IconButton>
        </NavbarItem>

        {false && (
          <NavbarItem className="hidden md:flex">
            <Link
              isBlock
              color="primary"
              variant="light"
              href="/pizza-delivery/login"
            >
              Login
            </Link>
          </NavbarItem>
        )}
        {false && (
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              href="/pizza-delivery/signup"
              color="primary"
              variant="ghost"
              radius="sm"
            >
              Sign up
            </Button>
          </NavbarItem>
        )}
        <NavbarItem>
          <ThemeSwitcher
            onSwitch={props.onSwitch}
            condition={props.condition}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        motionProps={{
          initial: { backgroundColor: "#FFFFFF" }, // Initial color (before menu opens)
          animate: { backgroundColor: props.condition ? "black" : "white" }, // Color after menu opens
          exit: { backgroundColor: "#FFFFFF" }, // Color when menu closes
          transition: { duration: 0.5 }, // Optional: transition duration
        }}
        className="bg-inherit"
        isOpen={isMenuOpen}
      >
        <div>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.title}-${index}`}>
              <Button
                color={index === 4 ? "danger" : "default"}
                className={`text-${props.condition ? "white" : "black"} ${
                  index === 4 && "text-danger"
                } w-full `}
                onClick={() => handleMenuItemClick(item.path)}
                size="lg"
                variant="light"
                radius="none"
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
