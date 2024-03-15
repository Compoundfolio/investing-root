import { UseMutationOptions } from "@tanstack/react-query"

type Props = {
  keys: UseMutationOptions["mutationKey"]
}

type OptimisticCreateSetup = Pick<
  UseMutationOptions,
  "onMutate" | "onError" | "onSettled"
>

const optimisticCreate = ({ keys }: Props): OptimisticCreateSetup => ({
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: keys })

    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData(keys)

    // Optimistically update to the new value
    queryClient.setQueryData(keys, (old) => [...old, newTodo])

    // Return a context object with the snapshotted value
    return { previousTodos }
  },
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(keys, context.previousTodos)
  },
  // Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: keys })
  },
})

export default optimisticCreate
