import { IconProps } from "@types";
import { Component } from "solid-js";

export const Icon: Component<IconProps> = (props) => {
  return (
    <div class={props.containerClass}>
      <iconify-icon
        {...props.iconifyProps}
        icon={props.iconifyProps.icon}
      ></iconify-icon>
    </div>
  );
};
