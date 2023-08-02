import type { Component } from 'solid-js';
import {Show} from "solid-js"
import {Header, Footer, Debugger} from "@components";

const App: Component = () => {
  const production = import.meta.env.MODE === "production"

    // Testing automatic commits
  return (
    <div class="flex flex-col h-full  bg-gray-900">
      <Header></Header>
      <Footer></Footer>
      <Show when={!production}>
        <Debugger></Debugger>
      </Show>
    </div>
  );
};

export default App;
