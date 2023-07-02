import { useRouter } from "next/router"
import { useAuthWithEmail } from "src/api/restful"
import { ROUTES } from "src/routing"

const useHandleAuthSubmit = () => {
  const router = useRouter()

  return useAuthWithEmail({
    onSuccess: ({ token }) => {
      localStorage.setItem("token", token)
      router.push(ROUTES.BROKERAGES_SELECTION)
    },
    onError: (errors) => alert(errors),
  })
}

export default useHandleAuthSubmit
