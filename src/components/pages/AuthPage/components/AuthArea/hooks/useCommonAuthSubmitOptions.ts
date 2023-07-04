import { useRouter } from "next/navigation"
import { ROUTES } from "src/routing"

const useCommonAuthSubmitOptions = () => {
  const router = useRouter()

  return {
    onSuccess: ({ token }) => {
      localStorage.setItem("token", token)
      router.push(ROUTES.BROKERAGES_SELECTION)
    },
    onError: (errors) => alert(errors),
  }
}

export default useCommonAuthSubmitOptions
