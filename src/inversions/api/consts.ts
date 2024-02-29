export const baseApiUrls = {
  REST: process.env.NEXT_PUBLIC_API_BASE_URL,
  GRAPHQL: process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL,
} as const

export const DEFAULT_REQ_ERROR_MESSAGE =
  "Sorry. Something went wrong with your request. Our team fork on a fix." as const
