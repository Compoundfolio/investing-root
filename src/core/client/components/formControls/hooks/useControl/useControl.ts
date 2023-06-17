import { 
  useClearErrorMessage, 
  IUseClearErrorMessage,
} from "./subHooks"

interface IUseControl extends IUseClearErrorMessage {}

/** Contains common functionality to all of the form controls */
const useControl = ({
  value,
  name,
  errorMessage,
  setErrorMessage,
}: IUseControl) => {

  useClearErrorMessage({
    value,
    name,
    errorMessage,
    setErrorMessage,
  })
  
}

export default useControl