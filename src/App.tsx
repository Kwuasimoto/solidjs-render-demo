import type { Component } from "solid-js";
import { Show } from "solid-js";
import { Debugger, Footer, Header } from "@components";

const App: Component = () => {
  const production = import.meta.env.MODE === "production";
  return (
    <div class="flex h-full flex-col bg-gray-900">
      <Header></Header>
      <Footer></Footer>
      <Show when={!production}>
        <Debugger></Debugger>
      </Show>
    </div>
  );
};

export default App;
