import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks"

function Navbar() {
  const { cartItems, total } = useAppSelector((store) => store.cart)

  return (
    <div className="h-16 flex items-center justify-between w-full">
      <div>
        <div>Items in cart: {cartItems.length}</div>
        <div>Subtotal: $ {total.toFixed(2)}</div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <Link
          className="cursor-pointer hover:underline underline-offset-2"
          to="/cart"
        >
          Cart
        </Link>
      </div>
    </div>
  )
}

export default Navbar
