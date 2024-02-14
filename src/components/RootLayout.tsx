import React, { useEffect } from "react"

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {}, [])
  return <div className="min-h-screen">{children}</div>
}
export default RootLayout
