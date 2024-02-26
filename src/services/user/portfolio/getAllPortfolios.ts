// import { gql, request } from "graphql-request"
// import { Api } from "src/inversions"
// import { createUseQuery } from "src/inversions/queryMaker"
// // https//freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/
// // https://medium.com/@sourabhbagrecha/how-to-integrate-react-query-in-a-graphql-based-react-app-54b4541352c0
// const { data, isLoading, error } = useQuery("launches", () => {
//   return fetch(endpoint, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query: FILMS_QUERY }),
//   })
//     .then((response) => {
//       if (response.status >= 400) {
//         throw new Error("Error fetching data")
//       } else {
//         return response.json()
//       }
//     })
//     .then((data) => data.data)
// })

// // TODO: Type gen
// // TODO: Abstractions
// // TODO: Structure the code

// const QUERY = gql`
//   query {
//     portfolios {
//       id
//       label
//     }
//   }
// `

// // Query key
// const qk = "test" as const

// // const queryFn = () => request(GRAPHQL_ENDPOINT, getAllExpensesQuery, queryVariables, headers)
// const queryFn = () => Api.POST({ query: QUERY })

// // HOOK
// const useGetAllPortfolios = () => createUseQuery({
//   queryFn: queryFn,
//   queryKey: [qk],
//   // onSuccess,
//   // onError,
// )

// // query fn.

// // const headers = { Authorization: `Bearer ${user._accessToken}` }

// // const loadExpenses = () =>

// // export const signInWithEmailMutationKey = "useAuthWithEmail" as const

// // const requestAuthWithEmail = async ({
// //   data,
// //   authType,
// // }: IEmailAuthRequestRequestBody) => {
// //   return await Api.POST<SignInWithEmailResponse>({
// //     url:
// //       authType === "signIn"
// //         ? restfulApiUrls.auth.SIGN_IN_WITH_EMAIL_URL
// //         : restfulApiUrls.auth.SIGN_UP_WITH_EMAIL_URL,
// //     data,
// //   })
// // }

// // const useAuthWithEmail: MutationHook<
// //   SignInWithEmailResponse,
// //   HttpRequestErrorResponse,
// //   IEmailAuthRequestRequestBody
// // > = ({ onSuccess, onError }) =>
// //   createUseMutation({
// //     mutationFn: requestAuthWithEmail,
// //     mutationKey: [signInWithEmailMutationKey],
// //     onSuccess,
// //     onError,
// //   })
