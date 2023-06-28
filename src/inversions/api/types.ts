interface HttpRequest {
  url: string
}

export interface HttpGetRequest extends HttpRequest {}

export interface HttpPostRequest extends HttpRequest {
  data: object
}

export type HttpRequestErrorResponse = string
