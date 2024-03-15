export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U]

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never
