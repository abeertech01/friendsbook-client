import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import ErrorPage from "./components/ErrorPage"
import Auth from "./pages/Auth/Auth"
import RootLayout from "./components/RootLayout"

function App() {
  return (
    <>
      <RootLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </RootLayout>
    </>
  )
}

export default App
