import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import ErrorPage from "./components/ErrorPage"
import Auth from "./pages/Auth/Auth"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
