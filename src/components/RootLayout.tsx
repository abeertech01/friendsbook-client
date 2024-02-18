import React from "react"
import Header from "./Header"
import useAuth from "../util/useAuth"

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return (
    <div className="min-h-screen pb-4">
      {isAuthenticated && <Header />}
      {children}
      <footer></footer>
    </div>
  )
}
export default RootLayout
