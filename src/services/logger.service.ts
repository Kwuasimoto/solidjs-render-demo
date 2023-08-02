import pino, { LogFn } from "pino";

export class Logger {
  private readonly _instance: string;
  private readonly _logger: pino.Logger;
  constructor(componentName: string) {
    this._instance = componentName;
    this._logger = pino({
      enabled: true,
      browser: {
        asObject: true,
      },
    });
  }

  readonly info: LogFn = <T>(obj: T, msg?: string, ...args: any[]): void => {
    this._logger.info(
      { obj },
      `[${this._instance}] ${msg ? msg : "No Message Set"}`,
      args,
    );
  };

  readonly warn: LogFn = <T>(obj: T, msg?: string, ...args: any[]): void => {
    this._logger.warn(
      { obj },
      `[${this._instance}] ${msg ? msg : "No Message Set"}`,
      args,
    );
  };
}
