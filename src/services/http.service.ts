import { createResource, ResourceReturn } from "solid-js";
import { createStore } from "solid-js/store";
import { env } from "./env.service";
import { FetchCache, FetchRequest, FetchResponse } from "@types";
import { v4 } from "uuid";
import { Logger } from "./logger.service";

const logger = new Logger("HttpService");

const baseURL = env.isProd()
  ? "https://render-spring-kotlin-demo.onrender.com"
  : "http://localhost:8080";

const config: RequestInit = {
  credentials: "include",
};

const appendRequestToCache = (request: FetchRequest) => {
  logger.info(request, "Appended Request to Cache");
  setHttp("cache", [...http.cache, request]);
};

const appendResponseToCache = (response: FetchResponse) => {
  logger.info(response, "Appended Response to Cache");
  setHttp("cache", [...http.cache, response]);
};

const request = <TResponse>(endpoint: string, config: RequestInit) => {
  if (!http.endpoints.includes(endpoint))
    throw Error(
      `Supplied an invalid endpoint to http.request function: [endpoint=${endpoint}] `,
    );
  let body: BodyInit;
  let status: number;
  const id = v4();
  const timestamp = Date.now();
  const request: FetchRequest = {
    id,
    endpoint,
    timestamp,
  };
  appendRequestToCache(request);
  return () =>
    fetch(baseURL + endpoint, config)
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((data) => {
        body = data;
        return data as TResponse;
      })
      .finally(() => {
        appendResponseToCache({
          id,
          body,
          status,
          timestamp,
        });
      });
};

const isRequest = (x: any): x is FetchRequest => !!x.endpoint;

const [http, setHttp] = createStore({
  baseURL: baseURL,
  cache: [] as FetchCache,
  endpoints: ["/test"],
  post: <T, R>(endpoint: string, data: BodyInit | null) => {
    return createResource<T, R>(
      request(endpoint, { ...config, method: "POST", body: data }),
    );
  },
  get: <T, R>(endpoint: string): ResourceReturn<T, R> => {
    return createResource<T, R>(
      request(endpoint, { ...config, method: "GET" }),
    );
  },
});

export { http, isRequest };
