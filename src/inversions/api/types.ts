import { TadaDocumentNode } from "gql.tada"

interface HttpRequest {
  url: string
  withToken?: boolean
}

export interface HttpGraphQlRequest extends Omit<HttpRequest, "url"> {
  query: TadaDocumentNode<object, {}, void>
}

export interface HttpRestRequest extends HttpRequest {
  data: unknown
}

export type HttpGetRequest = HttpRequest
export type HttpPostRequest = HttpGraphQlRequest & HttpRestRequest

export type HttpRequestErrorResponse = string
export type PostFormSubmitError = {
  message: string
  details: string
}
