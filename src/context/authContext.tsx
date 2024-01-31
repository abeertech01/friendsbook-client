import React, { createContext } from "react"

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextType = {
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const login = (token: string) => {
    localStorage.setItem("token", token)
  }

  const logout = () => {
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
