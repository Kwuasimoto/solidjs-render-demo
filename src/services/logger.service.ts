import pino, { LogFn } from "pino";

export class Logger {
  readonly #instance: string;
  readonly #logger: pino.Logger;
  constructor(componentName: string) {
    this.#instance = componentName;
    this.#logger = pino({
      enabled: true,
      browser: {
        asObject: true,
      },
    });
  }

  readonly info: LogFn = <T>(obj: T, msg?: string, ...args: any[]): void => {
    this.#logger.info(
      { obj },
      `[${this.#instance}] ${msg ? msg : "No Message Set"}`,
      args,
    );
  };

  readonly warn: LogFn = <T>(obj: T, msg?: string, ...args: any[]): void => {
    this.#logger.warn(
      { obj },
      `[${this.#instance}] ${msg ? msg : "No Message Set"}`,
      args,
    );
  };
}
