import { useCallback, useEffect } from "react"

/**
 * Listens to *Ecs* key click and closes the opened modal
 */
const useModalCloseKeyShortcut = (
  isOpen: boolean,
  handleOpenChange: () => void
) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      event.key == "Escape" && isOpen && handleOpenChange()
    },
    [isOpen]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress])
}

export default useModalCloseKeyShortcut
