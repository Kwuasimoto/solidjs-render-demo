import { IconifyIconProps } from "@iconify/react";
import { FetchRequest, FetchResponse } from "./http";

export interface IconProps {
  containerClass: string;
  iconifyProps: IconifyIconProps;
}

export type DebuggerRequestLogProps = FetchRequest;
export type DebuggerResponseLogProps = FetchResponse;
