import { createStore } from "solid-js/store";

export class Env {
  private static _SERVICE_INSTANTIATED = false;
  private readonly _mode = import.meta.env.MODE;
  readonly isProd = () => this._mode === "production";
  readonly mode = () => this._mode;

  constructor() {
    if (Env._SERVICE_INSTANTIATED)
      throw Error("Env store already instantiated.");
    Env._SERVICE_INSTANTIATED = true;
  }
}

const [env] = createStore(new Env());

export { env };
