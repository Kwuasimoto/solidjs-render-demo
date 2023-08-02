import type { Component } from "solid-js";
import { AppContainer, Debugger, Footer, Header } from "@components";
import { Logger } from "./services/logger.service";

const logger = new Logger("APP");

const App: Component = () => {
  const production = import.meta.env.MODE === "production";
  logger.info({ env: import.meta.env.MODE }, "Current Mode");
  return (
    <div class="flex h-full flex-col bg-gray-900">
      <Header></Header>
      <AppContainer></AppContainer>
      <Footer></Footer>
      <Debugger></Debugger>
    </div>
  );
};

export default App;
