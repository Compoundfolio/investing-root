const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const buildUrl = (path: string) => {
  if (!path.startsWith("/")) throw new Error("Wrong usage of `buildUrl` function. Path should starts with '/'")
  return `${apiBaseUrl}${path}`
}