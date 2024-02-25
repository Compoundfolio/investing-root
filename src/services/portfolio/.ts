import { gql, request } from "graphql-request"

const { data, isLoading, error } = useQuery("launches", () => {
  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: FILMS_QUERY }),
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Error fetching data")
      } else {
        return response.json()
      }
    })
    .then((data) => data.data)
})
const getAllExpensesQuery = gql`
  query getAllExpenses {
    expenses(sortBy: CREATEDAT_DESC) {
      _id
      title
      amount
      mode
      category
      createdAt
    }
  }
`

const queryVariables = {}

const headers = { Authorization: `Bearer ${user._accessToken}` }

const loadExpenses = () =>
  request(GRAPHQL_ENDPOINT, getAllExpensesQuery, queryVariables, headers)
