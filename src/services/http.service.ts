import { createResource, ResourceReturn } from "solid-js";
import { createStore } from "solid-js/store";

export class HttpService {
  private readonly _config: RequestInit = {
    credentials: "include",
  };

  private readonly request = <TResponse>(url: string, config: RequestInit) => {
    return () =>
      fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as TResponse);
  };

  readonly get = <T, R>(url: string): ResourceReturn<T, R> => {
    return createResource<T, R>(
      this.request(url, { ...this._config, method: "GET" }),
    );
  };

  readonly post = <T, R>(url: string, data: BodyInit | null) => {
    return createResource<T, R>(
      this.request(url, { ...this._config, method: "POST", body: data }),
    );
  };
}

const [http, setHttp] = createStore(new HttpService());

export { http };
