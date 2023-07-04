import { useAuthWithEmail } from "src/api/restful"
import useCommonAuthSubmitOptions from "./useCommonAuthSubmitOptions"

const useHandleAuthSubmit = () => {
  const options = useCommonAuthSubmitOptions()
  return useAuthWithEmail(options)
}

export default useHandleAuthSubmit
