import { clearCart } from "../features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { formatPrice } from "../utils"

function CartProducts() {
  const dispatch = useAppDispatch()
  const { cartItems, amount } = useAppSelector((store) => store.cart)

  return (
    <main className="grid grid-cols-12 gap-4 px-6 py-3">
      <article className="col-span-8 bg-slate-100 shadow-md rounded-md p-4">
        <h1 className="text-3xl mb-4">Cart Items</h1>
        <section className="grid grid-cols-3 gap-6 ">
          {amount <= 0 ? (
            <h1>Cart Empty</h1>
          ) : (
            cartItems.map((item) => {
              return (
                <>
                  <div className="">
                    <h2>{item.title}</h2>
                    <img
                      className="size-20 object-contain mix-blend-multiply"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className=" ">{item.category}</div>
                  <div className=" ">{formatPrice(item.price)}</div>
                </>
              )
            })
          )}
        </section>
      </article>
      <article className="col-span-4 bg-slate-100 shadow-md rounded-md p-4">
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
