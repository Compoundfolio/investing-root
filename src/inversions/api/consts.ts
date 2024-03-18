export const baseApiUrls = {
  REST:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_BASE_URL
      : process.env.NEXT_PUBLIC_API_BASE_URL_DEV,
  GRAPHQL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL_PROD
      : process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL_DEV,
} as const

export const DEFAULT_REQ_ERROR_MESSAGE =
  "Sorry. Something went wrong with your request. Our team work on a fix." as const
