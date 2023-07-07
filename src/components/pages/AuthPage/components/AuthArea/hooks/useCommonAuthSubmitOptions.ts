import { useRouter } from "next/navigation"
import { ROUTES } from "src/routing"

const useCommonAuthSubmitOptions = () => {
  const router = useRouter()

  return {
    onSuccess: (params) => {
      if (params?.token) {
        router.push(ROUTES.BROKERAGES_SELECTION)
        localStorage.setItem("token", params.token)
      }
    },
    onError: (error) => {
      console.log(error)
      // alert(error)
    }, // TODO: Err handling
  }
}

export default useCommonAuthSubmitOptions
