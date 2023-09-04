"use client"

import { RefObject, useLayoutEffect } from "react"

interface IUseOverlayUiUnmountTriggers {
  ref: RefObject<any>
  hideOverlapComponent?: () => void
}

const useOverlayUiUnmountTriggers = ({
  ref,
  hideOverlapComponent,
}: IUseOverlayUiUnmountTriggers) => {
  const handleMissClicks = (e: MouseEvent) => {
    if (hideOverlapComponent && !ref?.current?.contains(e.target)) {
      hideOverlapComponent()
    }
  }

  /** Unmount on area miss-clicks */
  useLayoutEffect(() => {
    if (hideOverlapComponent) {
      document.addEventListener('click', handleMissClicks)
      return () => document.removeEventListener('click', handleMissClicks)
    }
  }, [])
}

export default useOverlayUiUnmountTriggers