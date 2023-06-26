import { useState, useCallback, SetStateAction, Dispatch } from "react"

type ReturnType = [boolean, () => void, Dispatch<SetStateAction<boolean>>]

/**
 * Hook to handle open/show statuses
 */
const useOpen = (): ReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenChange = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return [isOpen, handleOpenChange, setIsOpen]
}

export default useOpen
