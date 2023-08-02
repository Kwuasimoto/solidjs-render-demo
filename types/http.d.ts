export interface FetchRequest {
  id: string;
  timestamp: number;
  endpoint: string;
}

export interface FetchResponse {
  /**
   * Assigned via FetchRequest["id"]
   */
  id: string;
  timestamp: number;
  status: number;
  body: BodyInit;
}

export type FetchCache = Array<FetchRequest | FetchResponse>;
