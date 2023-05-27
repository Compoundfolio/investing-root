import { IReactChildren } from 'src/core/types'

export interface ILinkLazy extends IReactChildren {
  to: string,
  withoutLiWrapper?: boolean,
  isActive?: boolean
}