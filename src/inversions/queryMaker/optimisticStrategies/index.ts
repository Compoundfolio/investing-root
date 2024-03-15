import optimisticCreate from "./create"
import optimisticUpdate from "./update"

// https://tanstack.com/query/v4/docs/framework/react/guides/optimistic-updates#updating-a-list-of-todos-when-adding-a-new-todo

const optimistic = {
  create: optimisticCreate,
  update: optimisticUpdate,
  // TODO: delete,
}

export default optimistic
