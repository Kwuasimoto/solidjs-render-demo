import { IconProps } from "@types";

export function Icon(props: IconProps) {
  return (
    <div class={props.containerClass}>
      <iconify-icon
        {...props.iconifyProps}
        icon={props.iconifyProps.icon}
      ></iconify-icon>
    </div>
  );
}
