import { http, isRequest, Logger } from "@services";
import { Component, For, Show } from "solid-js";
import { DebuggerRequestLog, DebuggerResponseLog } from "@components";
import { FetchRequest, FetchResponse } from "@types";

export const DebuggerLog: Component = () => {
  const logger = new Logger("DebuggerLog");

  return (
    <For each={http.cache}>
      {(cacheEntry) => (
        <div class="flex flex-col border-b border-b-gray-700">
          <Show when={isRequest(cacheEntry)}>
            <DebuggerRequestLog {...(cacheEntry as FetchRequest)} />
          </Show>
          <Show when={!isRequest(cacheEntry)}>
            <DebuggerResponseLog {...(cacheEntry as FetchResponse)} />
          </Show>
        </div>
      )}
    </For>
  );
};
