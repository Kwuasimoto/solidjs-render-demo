import {createStore} from "solid-js/store";
import {HttpService} from "./http.service";

export interface Services {
  http: HttpService
}

const [] = createStore<Services>({
  http: new HttpService()
})