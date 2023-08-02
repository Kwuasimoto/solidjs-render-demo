import { createResource, ResourceReturn } from "solid-js";

const fetchUser = () => fetch("");

export class HttpService {
  readonly #config: RequestInit = {
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
      this.request(url, { ...this.#config, method: "GET" }),
    );
  };

  readonly post = <T, R>(url: string, data: BodyInit | null) => {
    return createResource<T, R>(
      this.request(url, { ...this.#config, method: "POST", body: data }),
    );
  };
}
