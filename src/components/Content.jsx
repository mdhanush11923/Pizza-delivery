import React from "react";
import { CardFooter, CardHeader, ScrollShadow } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import Entry from "./Entry";
import Home from "./Home";
import Menu from "./Menu";
import Topbar from "./Topbar";
import PizzaItem from "./PizzaItem";
import PizzaCustomization from "./PizzaCustomization";

export default function Content() {
  return (
    // <main className={mode? "dark " + modeClass:modeClass}>
    //     <Topbar condition={mode} onSwitch={changeMode}/>
    //     <Content />
    //   </main>

    <div className="p-10">
      <Home />
    </div>
  );
}
