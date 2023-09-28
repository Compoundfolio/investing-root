import { useRouter } from "next/navigation"
import { ROUTES, ROUTES_GUEST } from "src/routing"

const useCommonAuthSubmitOptions = () => {
  const router = useRouter()

  return {
    onSuccess: (params) => {
      if (params?.token) {
        // TODO: Uncomment after MVV stage
        // router.push(ROUTES.BROKERAGES_SELECTION)
        localStorage.setItem("token", params.token)
        router.push(ROUTES_GUEST.AUTH)
      }
    },
    onError: (error) => {
      console.log(error)
      // alert(error)
    }, // TODO: Err handling
  }
}

export default useCommonAuthSubmitOptions
