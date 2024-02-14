import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const useAuth = () => {
  let isAuthenticated: boolean = false
  const context = useContext(AuthContext)

  if (context?.user) isAuthenticated = true

  return {
    isAuthenticated,
  }
}

export default useAuth
