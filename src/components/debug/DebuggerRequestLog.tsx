import { DebuggerRequestLogProps } from "@types";
import moment from "moment";
import { Component } from "solid-js";

export const DebuggerRequestLog: Component<DebuggerRequestLogProps> = (
  props,
) => {
  const timestampISO = moment(props.timestamp).toISOString();
  return (
    <div class="flex flex-col bg-gray-900 px-1 py-1">
      <div class="flex">
        <div>
          Request:{" "}
          <span class="fira-thin-italic">
            {props.id.substring(0, props.id.indexOf("-"))}
          </span>
        </div>

        <div class="ml-auto">
          {timestampISO.substring(
            timestampISO.indexOf("T") + 1,
            timestampISO.length - 2,
          )}
        </div>
      </div>
      <div class="pt-1">
        Endpoint: <span>{props.endpoint}</span>
      </div>
    </div>
  );
};
