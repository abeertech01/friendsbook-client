import React from "react"

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <div className="bg-[#F0F2F5] min-h-screen">{children}</div>
}
export default RootLayout
