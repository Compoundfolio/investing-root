import type {
  HttpGetRequest,
  HttpGraphQlRequest,
  HttpPostRequest,
  HttpRestRequest,
} from "./types"
import { handleHttpRequestResult, withAuthenticationJWT } from "./helpers"
import { buildReqUrl } from "./helpers"
import { print } from "graphql"

/** Abstraction layer for HTTP requests */
class Api {
  static async GET<TResponse>(
    { url, withToken = true }: HttpGetRequest,
    customErrorMessage?: string
  ): Promise<TResponse> {
    const response = await fetch(buildReqUrl(url), {
      method: "GET",
      headers: {
        ...withAuthenticationJWT(withToken),
      },
    })

    return await handleHttpRequestResult(response, customErrorMessage)
  }
  /** Able to handle both REST & GraphQL requests */
  static async POST<TResponse>(props: HttpGraphQlRequest): Promise<TResponse>
  static async POST<TResponse>(props: HttpRestRequest): Promise<TResponse>
  static async POST<TResponse>({
    url,
    data,
    query,
    variables = {},
    customErrorMessage,
    withToken = true,
  }: HttpPostRequest): Promise<TResponse> {
    const endpoint = buildReqUrl(url, !!query)

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...withAuthenticationJWT(withToken),
      },
      body: JSON.stringify(
        // TODO: Check, does TResponse is a part of `query` type (fix type safety issue)
        query ? { query: print(query), variables } : data
      ),
    })

    return await handleHttpRequestResult(response, customErrorMessage)
  }
}

export default Api
