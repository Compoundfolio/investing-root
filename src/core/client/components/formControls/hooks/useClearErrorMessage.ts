import { useEffect } from "react"

interface IUseClearErrorMessage {
  value: unknown
  // TODO: Reuse form smwr.
  errorMessage?: string
  name: string
  // TODO: Reuse form smwr.
  setErrorMessage?: (field: string, value: string | undefined) => void
}

/** Clears validation errors when user starts to type in */
const useClearErrorMessage = ({
  value,
  name,
  errorMessage,
  setErrorMessage,
}: IUseClearErrorMessage) => {

  useEffect(() => {
    if (value && setErrorMessage && errorMessage) {
      setErrorMessage(name, "")
    }
  }, [value])
}

export default useClearErrorMessage