import { clearCart } from "../features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import CartProduct from "./CartProduct"
import Checkout from "./Checkout"

function CartProducts() {
  const dispatch = useAppDispatch()
  const { cartItems, amount } = useAppSelector((store) => store.cart)

  return (
    <main className="grid grid-cols-12 gap-4 px-6 py-3">
      <article className="col-span-8 bg-slate-50 shadow-md rounded-md p-4">
        <h1 className="text-3xl mb-4">Cart Items</h1>
        <section className="flex flex-col items-center gap-6 gap-y-10 ">
          {amount <= 0 ? (
            <h1>Cart Empty</h1>
          ) : (
            cartItems.map((item) => {
              return <CartProduct key={item.id} {...item} />
            })
          )}
        </section>
      </article>
      <Checkout />
      <button
        onClick={() => dispatch(clearCart())}
        className="bg-purple-500 text-neutral-200 px-3 py-1.5 rounded-md hover:bg-purple-600 active:scale-90 transition"
      >
        Clear cart
      </button>
    </main>
  )
}

export default CartProducts
