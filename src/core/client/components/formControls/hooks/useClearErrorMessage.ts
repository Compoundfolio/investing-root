import { useEffect } from "react"

interface IUseClearErrorMessage {
  value: unknown
  // TODO: Reuse form smwr.
  errorMessage?: string
  // TODO: Reuse form smwr.
  setErrorMessage?: (errorMessage: string) => void
}

/** Clears validation errors when user starts to type in */
const useClearErrorMessage = ({
  value,
  errorMessage,
  setErrorMessage,
}: IUseClearErrorMessage) => {

  useEffect(() => {
    if (value && setErrorMessage && errorMessage) {
      setErrorMessage('')
    }
  }, [value])
}

export default useClearErrorMessage