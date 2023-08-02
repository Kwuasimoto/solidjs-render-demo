import { createStore } from "solid-js/store";
import { HttpService } from "./http.service";

export interface Services {
  http: HttpService;
}

const [services] = createStore<Services>({
  http: new HttpService(),
});

export { services };
