import { DebuggerResponseLogProps } from "@types";
import moment from "moment/moment";
import { Component } from "solid-js";

export const DebuggerResponseLog: Component<DebuggerResponseLogProps> = (
  props,
) => {
  const timestampISO = moment(props.timestamp).toISOString();
  return (
    <div class="flex cursor-pointer px-1 py-1 hover:bg-gray-900">
      <div>
        Response: <span class="fira-thin-italic">{props.status}</span>
      </div>
      <div class="ml-auto">
        {timestampISO.substring(
          timestampISO.indexOf("T") + 1,
          timestampISO.length - 2,
        )}
      </div>
    </div>
  );
};
