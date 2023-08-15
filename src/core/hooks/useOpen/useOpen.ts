import { useState, useCallback, SetStateAction, Dispatch } from "react"

type ReturnType = [boolean, () => void, Dispatch<SetStateAction<boolean>>]

/**
 * Hook to handle open/show statuses
 */
const useOpen = (defaultValue: boolean = false): ReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue)

  const handleOpenChange = useCallback(() => {
    console.log(12)

    setIsOpen((prev) => !prev)
  }, [])

  return [isOpen, handleOpenChange, setIsOpen]
}

export default useOpen
