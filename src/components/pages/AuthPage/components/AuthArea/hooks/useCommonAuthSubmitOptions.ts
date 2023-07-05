import { useRouter } from "next/navigation"
import { ROUTES } from "src/routing"

const useCommonAuthSubmitOptions = () => {
  const router = useRouter()

  return {
    onSuccess: ({ token }) => {
      router.push(ROUTES.BROKERAGES_SELECTION)
      localStorage.setItem("token", token)
    },
    onError: (error) => alert(error), // TODO: Err handling
  }
}

export default useCommonAuthSubmitOptions
