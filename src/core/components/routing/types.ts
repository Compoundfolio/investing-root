import { IReactChildren } from 'src/core/types'

export interface ILinkLazy extends IReactChildren {
  /** @example "/example-route" */
  to: string,
  withoutLiWrapper?: boolean,
  isActive?: boolean
}