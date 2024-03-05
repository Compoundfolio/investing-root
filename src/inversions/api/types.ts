import { TadaDocumentNode } from "gql.tada"

interface HttpRequest {
  url: string
  withToken?: boolean
}

type Common = {
  customErrorMessage?: string
}

export type HttpGraphQlRequest = Omit<HttpRequest, "url"> &
  Common & {
    query: TadaDocumentNode<object, {}, void>
    variables?: object
  }

export type HttpRestRequest = HttpRequest &
  Common & {
    data: unknown
  }

export type HttpGetRequest = HttpRequest
export type HttpPostRequest = HttpGraphQlRequest & HttpRestRequest

export type HttpRequestErrorResponse = string
export type PostFormSubmitError = {
  message: string
  details: string
}
