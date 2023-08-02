import { env, http } from "@services";
import { DebuggerInput, Icon } from "@components";
import { DebuggerLog } from "./DebuggerLog";
import { Component } from "solid-js";

export const Debugger: Component = () => {
  const [helloWorld, reHelloWorld] = http.get<{ payload: string }, string>(
    "/test",
  );

  return (
    <div class="border-t border-t-blue-300 text-gray-300">
      <div class="flex border-b border-b-blue-300 bg-gray-800">
        <div class="fira-thin-italic p-1 text-sm">SolidJS Debugger</div>
        <span class="ml-auto mr-1 flex">
          <div class="fira-thin p-1 text-sm">Connected: </div>
          <Icon
            containerClass={
              "pt-1 " +
              (helloWorld.state === "pending"
                ? "text-gray-300"
                : helloWorld.state === "errored"
                ? "text-red-500"
                : "text-green-500")
            }
            iconifyProps={{ icon: "mdi:rss", height: 18 }}
          ></Icon>
        </span>
      </div>
      <div class="flex h-48 flex-col bg-gray-950 text-xs">
        <div class="flex border-b border-b-gray-700">
          <div class="fira-regular p-1  text-gray-300">
            Environment: <span class="fira-thin-italic">{env.mode()}</span>
          </div>
          <div class="border-r border-r-gray-700"></div>
          <div class="fira-regular p-1 text-gray-300">
            BaseURL: <span class="fira-thin-italic">{http.baseURL}</span>
          </div>
        </div>
        <div class="flex flex-grow">
          <div class="fira-regular max-h-[164px] w-1/3 overflow-y-auto border-r border-r-gray-700 px-1 pt-0.5 text-xs">
            <div>Requests & Responses</div>
            <DebuggerLog />
          </div>
          <div class="fira-regular max-h-40 w-1/3 border-r border-r-gray-700 px-1 pt-0.5 text-xs">
            <div>Make Request</div>
            <DebuggerInput />
          </div>
          <div class="fira-regular max-h-36 w-1/3 overflow-y-auto border-r border-r-gray-700 px-1 pt-0.5 text-xs">
            <div>Response</div>
          </div>
        </div>
      </div>
    </div>
  );
};
