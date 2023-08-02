import { http } from "@services";
import { Component, createSignal, For } from "solid-js";

export const DebuggerInput: Component = () => {
  const [isPost, setIsPost] = createSignal("GET");

  return (
    <div class="flex flex-col">
      <div class="flex">
        <div>Methods</div>
        <div class="ml-auto flex px-1">
          <button
            onClick={() => setIsPost("GET")}
            class="ml-2 rounded-md bg-green-700 px-1"
          >
            GET
          </button>
          <button
            onClick={() => setIsPost("POST")}
            class="ml-2 rounded-md bg-blue-700 px-1"
          >
            POST
          </button>
        </div>
      </div>
      <div class="flex pt-1">
        <span>Endpoint:</span>
        <select class="ml-auto mr-1 rounded-md bg-gray-900 px-1">
          <For each={http.endpoints}>
            {(endpoint) => (
              <option class="bg-gray-900" value={endpoint}>
                {endpoint}
              </option>
            )}
          </For>
        </select>
      </div>
      <input type="field" />
    </div>
  );
}
