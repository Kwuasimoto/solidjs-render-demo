// @ts-nocheck

import { IconifyIconProps } from "@iconify/react";

export interface IconProps {
  containerClass: string;
  iconifyProps: IconifyIconProps;
}

function Icon(props: IconProps) {
  return (
    <div class={props.containerClass}>
      <iconify-icon
        {...props.iconifyProps}
        icon={props.iconifyProps.icon}
      ></iconify-icon>
    </div>
  );
}

export { Icon };
