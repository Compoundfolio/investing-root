import { UseMutationOptions } from "@tanstack/react-query"

type Props = {
  keys: UseMutationOptions["mutationKey"]
}

type OptimisticUpdateSetup = Pick<
  UseMutationOptions,
  "onMutate" | "onError" | "onSettled"
>

const optimisticUpdate = ({ keys }: Props): OptimisticUpdateSetup => ({
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: [...keys, newTodo.id] })

    // Snapshot the previous value
    const previousTodo = queryClient.getQueryData([...keys, newTodo.id])

    // Optimistically update to the new value
    queryClient.setQueryData([...keys, newTodo.id], newTodo)

    // Return a context with the previous and new todo
    return { previousTodo, newTodo }
  },
  // If the mutation fails, use the context we returned above
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(
      [...keys, context.newTodo.id],
      context.previousTodo
    )
  },
  // Always refetch after error or success:
  onSettled: (newTodo) => {
    queryClient.invalidateQueries({ queryKey: [...keys, newTodo.id] })
  },
})

export default optimisticUpdate
