import { Link } from "react-router-dom"
import CartProducts from "./CartProducts"

function Cart() {
  return (
    <>
      <Link
        className="cursor-pointer hover:underline underline-offset-2"
        to="/"
      >
        Go back to products
      </Link>
      <CartProducts />
    </>
  )
}

export default Cart
