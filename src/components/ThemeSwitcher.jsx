import React from "react";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const ThemeSwitcher = (props) => {

  return (
    <Switch
      isSelected={props.condition}
      size="md"
      color="success"
      onChange={() => props.onSwitch(props.condition)}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
    </Switch>
  )
};