import React from "react"

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>
}
export default RootLayout
