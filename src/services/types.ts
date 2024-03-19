import { createGraphQlUseMutation, createGraphQlUseQuery } from "src/inversions"

type UseQuery = ReturnType<typeof createGraphQlUseQuery>
type UseMutation = ReturnType<typeof createGraphQlUseMutation>
type ServiceHook<T extends UseQuery | UseMutation> = (...args: any[]) => T

export type Service = {
  useGetAll?: ServiceHook<UseQuery>
  useGetAllBy?: ServiceHook<UseQuery>
  useGetById?: ServiceHook<UseQuery>

  useCreate?: ServiceHook<UseMutation>
  useUpdate?: ServiceHook<UseMutation>
  useDeleteById?: ServiceHook<UseMutation>
  useDeleteAll?: ServiceHook<UseMutation>
  useUpload?: ServiceHook<UseMutation>
}
