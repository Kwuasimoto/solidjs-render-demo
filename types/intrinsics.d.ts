import "solid-js";
import { IconifyIconProps } from "@iconify/react";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}
