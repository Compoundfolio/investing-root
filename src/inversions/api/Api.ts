import type {
  HttpGetRequest,
  HttpGraphQlRequest,
  HttpPostRequest,
  HttpRestRequest,
} from "./types"
import { getHttpRequestResult, withAuthenticationJWT } from "./helpers"
import { buildReqUrl } from "./helpers"
import { print } from "graphql"

/** Abstraction layer for HTTP requests */
class Api {
  static async GET<TResponse>({
    url,
    withToken = true,
  }: HttpGetRequest): Promise<TResponse> {
    const response = await fetch(buildReqUrl(url), {
      method: "GET",
      headers: {
        ...withAuthenticationJWT(withToken),
      },
    })

    return await getHttpRequestResult(response)
  }
  /** Able to handle both REST & GraphQL requests */
  static async POST<TResponse>(props: HttpGraphQlRequest): Promise<TResponse>
  static async POST<TResponse>(props: HttpRestRequest): Promise<TResponse>
  static async POST<TResponse>({
    url,
    data,
    query,
    withToken = true,
  }: HttpPostRequest): Promise<TResponse> {
    const endpoint = buildReqUrl(url, !!query)

    const body = JSON.stringify(query ? { query: print(query) } : data)

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...withAuthenticationJWT(withToken),
      },
      body,
    })

    return await getHttpRequestResult(response)
  }
}

export default Api
