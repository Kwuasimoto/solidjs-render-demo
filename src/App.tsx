import type { Component } from 'solid-js';
import { Header, Footer } from "@components";

const App: Component = () => {
    // Testing automatic commits
  return (
    <div class="flex flex-col align-between">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
};

export default App;
