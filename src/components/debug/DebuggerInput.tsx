import { http, Logger } from "@services";
import { Component, createSignal, For, Show } from "solid-js";
import { DebuggerEditor } from "./DebuggerEditor";
import { EditorView } from "codemirror";

const [codeMirrorInput, setCodeMirrorInput] = createSignal<string>();

// Shout out to ChatGPT for this one.
// Clean up the JSON string by removing extra commas
function cleanUpJSONString(jsonString: string) {
  // Replace multiple commas with a single comma
  const cleanedJSON = jsonString.replace(/,+/g, ",");
  // Remove trailing commas after opening curly braces or before closing curly braces
  return cleanedJSON.replace(/,\s*}/g, "}").replace(/{\s*,/g, "{");
}

const handleCodeMirrorInput = () =>
  EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      const cleanedJSON = cleanUpJSONString(update.state.doc.toJSON().join());
      setCodeMirrorInput(cleanedJSON.replace(" ", ""));
    }
  });

export const DebuggerInput: Component = () => {
  const logger = new Logger("DebuggerInput");
  const [method, setMethod] = createSignal("GET");

  return (
    <div class="flex flex-col">
      <div class="fira-regular flex pt-0.5">
        <div>Methods</div>
        <div class="ml-auto flex">
          <button
            onClick={() => setMethod("GET")}
            class="ml-2 rounded-sm bg-green-700 px-1"
          >
            GET
          </button>
          <button
            onClick={() => setMethod("POST")}
            class="ml-2 rounded-sm bg-blue-700 px-1"
          >
            POST
          </button>
        </div>
      </div>
      <div class="flex pt-1">
        <span class="pt-0.5">Endpoint:</span>
        <select class="ml-1 rounded-sm bg-gray-900 px-1 py-0.5">
          <For each={http.endpoints}>
            {(endpoint) => (
              <option class="bg-gray-900" value={endpoint}>
                {endpoint}
              </option>
            )}
          </For>
        </select>
        <button
          onclick={() => {
            logger.info(codeMirrorInput(), "Code mirror input");
          }}
          class="ml-auto rounded-sm bg-red-700 px-4"
        >
          run
        </button>
      </div>
      <div class="max-h-[124px] overflow-y-auto">
        <Show when={method() === "POST"}>
          <DebuggerEditor onChange={handleCodeMirrorInput()} />
        </Show>
      </div>
    </div>
  );
};
