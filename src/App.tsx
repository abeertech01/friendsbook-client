import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import ErrorPage from "./components/ErrorPage"
import Auth from "./pages/Auth/Auth"
import RootLayout from "./components/RootLayout"

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
      <RootLayout>
        <RouterProvider router={router} />
      </RootLayout>
    </>
  )
}

export default App
