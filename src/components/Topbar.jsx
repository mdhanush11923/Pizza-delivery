import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import BrandIcon from "./BrandIcon";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Tab, Tabs } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

export default function Topbar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Menu",
    "Custom",
    "Orders",
    "Log Out",
  ];

  const { pathname } = useLocation();

  return (
    <Navbar classNames={{
      item: [
        "flex",
        "relative",
        "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-warning",

      ],
    }}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarBrand>
      <BrandIcon/>
      </NavbarBrand>
      <NavbarContent className="hidden max-w-full md:flex" justify="center">
        {/* <NavbarItem isActive={true}>
          <Link color="foreground" href="/" aria-current="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={false}>
          <Link color="foreground" href="/menu">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem isActive={false}>
          <Link color="foreground" href="/custom">
            Custom
          </Link>
        </NavbarItem>
        <NavbarItem isActive={false}>
          <Link color="foreground" href="/orders">
            Orders
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Tabs selectedKey={pathname} color="success" size="lg" variant="underlined" aria-label="Tabs variants">
            <Tab key="/pizza-delivery/" href="/pizza-delivery/" title="Home" />
            <Tab key="/pizza-delivery/menu" href="/pizza-delivery/menu" title="Menu" />
            <Tab key="/pizza-delivery/custom" href="/pizza-delivery/custom" title="Custom" />
            <Tab key="/pizza-delivery/orders" href="/pizza-delivery/orders" title="Orders" />
          </Tabs>
        </NavbarItem>
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={`/pizza-delivery/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
