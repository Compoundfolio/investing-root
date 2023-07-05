const useAuth = () => {
  return {
    isAuth: !!localStorage.getItem("token"),
  }
}

export default useAuth
