import { useAppSelector } from "../hooks"
import { store } from "../store"
import { formatPrice } from "../utils"

function Checkout() {
  const { total, shipping } = useAppSelector((store) => store.cart)

  return (
    <article className="col-span-4 bg-slate-50 h-fit shadow-md rounded-md p-4">
      <h1 className="text-3xl mb-4">Checkout</h1>
      <hr className="h-[1.5px] bg-slate-300/70 border-none mb-4" />
      <div className="flex flex-col gap-3">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <div className="font-medium">{formatPrice(total)}</div>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Shipping</span>
          <div className="font-medium">{formatPrice(shipping)}</div>
        </p>
        {/* TOTAL */}
        <p className="flex justify-between text-lg mt-3 pb-2">
          <span>Order Total</span>
          <div className="font-medium">{formatPrice(total + shipping)}</div>
        </p>
        <button className="inline-flex overflow-hidden text-white bg-gray-900 rounded group hover:scale-105 transition-transform">
          <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600  flex items-center justify-center transition ">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </span>
          <span className="pl-4 pr-5 py-2.5">Go to pay</span>
        </button>
      </div>
    </article>
  )
}

export default Checkout
