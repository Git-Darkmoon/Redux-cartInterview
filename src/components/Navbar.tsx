import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks"

function Navbar() {
  const { amount } = useAppSelector((store) => store.cart)

  return (
    <div className="h-16 flex items-center justify-between w-full">
      <Link
        className="cursor-pointer hover:underline underline-offset-2"
        to="/"
      >
        All products
      </Link>
      <div className="flex flex-col items-end justify-between">
        <Link
          className="relative cursor-pointer hover:underline underline-offset-2"
          to="/cart"
        >
          <div className="absolute -top-3 -right-3 bg-purple-400 p-2.5 size-4 text-lg rounded-full flex items-center justify-center">
            {amount}
          </div>
          Cart
        </Link>
      </div>
    </div>
  )
}

export default Navbar
