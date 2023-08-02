import { IconifyIconProps } from "@iconify/react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}
