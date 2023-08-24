import { Children } from "react";

export interface ISkeleton {
  children?: typeof Children
  className?: string
  width?: string
  height?: string
}