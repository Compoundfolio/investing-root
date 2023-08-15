import { useCallback, useState } from "react"

const useHoverViewMode = (isFileUploaded: boolean) => {
  const [isActButtonsShowed, setIsActButtonsShowed] = useState<boolean>(false)

  const showOnHoverView = useCallback(() => {
    isFileUploaded && !isActButtonsShowed && setIsActButtonsShowed(true)
  }, [isFileUploaded, isActButtonsShowed])

  const hideOnHoverView = useCallback(() => {
    isFileUploaded && isActButtonsShowed && setIsActButtonsShowed(false)
  }, [isFileUploaded, isActButtonsShowed])

  return {
    isActButtonsShowed,
    showOnHoverView,
    hideOnHoverView,
  }
}

export default useHoverViewMode
