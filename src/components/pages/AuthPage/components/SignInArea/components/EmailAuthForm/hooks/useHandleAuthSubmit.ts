import { useRouter } from "next/router"
import { EmailAuthType, useSignInWithEmail } from "src/api/restful"
import { ROUTES } from "src/routing"

const useHandleAuthSubmit = (authType: EmailAuthType) => {
  const router = useRouter()

  return useSignInWithEmail({
    onSuccess: ({ token }) => {
      localStorage.setItem("token", token)
      router.push(ROUTES.BROKERAGES_SELECTION)
    },
    onError: (errors) => alert(errors),
  })
}

export default useHandleAuthSubmit
