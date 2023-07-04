import { useAuthWithGoogle } from "src/api/restful"
import useCommonAuthSubmitOptions from "./useCommonAuthSubmitOptions"

const useHandleGoogleAuthSubmit = () => {
  const options = useCommonAuthSubmitOptions()
  return useAuthWithGoogle(options)
}

export default useHandleGoogleAuthSubmit
