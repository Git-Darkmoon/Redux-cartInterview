import { clearCart } from "../features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../hooks"

function Navbar() {
  const { cartItems, total } = useAppSelector((store) => store.cart)
  const dispatch = useAppDispatch()

  return (
    <div className="h-16 flex items-center justify-between w-full">
      <div>
        <div>Items in cart: {cartItems.length}</div>
        <div>Subtotal: $ {total.toFixed(2)}</div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <a
          className="cursor-pointer hover:underline underline-offset-2"
          href="/cart"
        >
          Go to Cart
        </a>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-slate-500 text-neutral-200 px-3 py-1.5 rounded-md hover:bg-slate-600 active:scale-90 transition"
        >
          Clear cart
        </button>
      </div>
    </div>
  )
}

export default Navbar
