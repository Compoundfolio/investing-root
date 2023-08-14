import { flushSync } from "react-dom"

const ANIMATION_TIME_IN_SEC = 1

/** Cause 1s content fade-out, then runs work sync, and then 1s fade-in effect */
export const causeGentleUiTransition = (
  /** Callback with any sync/async work */
  work: () => void
) => {
  if (document) {
    let contentAreaNode = document.querySelector("#contentArea") as any

    if (contentAreaNode) {
      // Page content fade-out animation
      contentAreaNode.style.transition = `opacity ${ANIMATION_TIME_IN_SEC}s ease-in-out`
      contentAreaNode.style.opacity = 0

      // Schedule work & fade-in animation
      setTimeout(() => {
        // Synchronously do all necessary work
        flushSync(work)
        // Page content fade-out animation
        contentAreaNode.style.opacity = 1
      }, ANIMATION_TIME_IN_SEC * 1000)
    }
  }
}
