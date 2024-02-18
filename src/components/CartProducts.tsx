import { clearCart, removeFromCart } from "../features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { formatPrice } from "../utils"
import CartProduct from "./CartProduct"

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
      <article className="col-span-4 bg-slate-50 shadow-md rounded-md p-4">
        <h1 className="text-3xl mb-4">Checkout</h1>
        <div className="w-96 h-36 bg-green-400"></div>
      </article>
      <button
        onClick={() => dispatch(clearCart())}
        className="bg-blue-500 text-neutral-200 px-3 py-1.5 rounded-md hover:bg-blue-600 active:scale-90 transition"
      >
        Clear cart
      </button>
    </main>
  )
}

export default CartProducts
