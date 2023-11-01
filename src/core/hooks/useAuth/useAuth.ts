// TODO: Refactor

const useAuth = () => {
  if (typeof window !== "undefined") {
    return {
      isAuth: !!localStorage?.getItem("token"),
    }
  } else {
    return {
      isAuth: false,
    }
  }
}

export default useAuth
