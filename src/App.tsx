import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProductsContainer from "./components/ProductsContainer"
import HomeLayout from "./components/HomeLayout"
import Cart from "./components/Cart"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsContainer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
