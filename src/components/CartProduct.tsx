import { removeFromCart } from "../features/cart/cartSlice"
import { useAppDispatch } from "../hooks"
import { Product } from "../types"
import { formatPrice, generateAmountOptions } from "../utils"

function CartProduct(item: Product) {
  const dispatch = useAppDispatch()

  return (
    <article className="grid grid-cols-5 items-center space-x-6 px-4">
      <div className="">
        <img
          className="max-w-24 object-contain mix-blend-multiply m-auto"
          src={item.image}
          alt={item.title}
          loading="lazy"
          width={300}
          height={300}
        />
      </div>
      <div className=" ">
        <h2 className="text-lg w-60 leading-6">{item.title}</h2>
      </div>
      <select
        className="text-center py-1 w-fit justify-self-end p-2 rounded-sm bg-neutral-200"
        value={4}
      >
        {generateAmountOptions(Math.round(Math.random() * 9) + 1)}
      </select>
      <div className="text-xl font-semibold text-right ">
        {formatPrice(item.price)}
      </div>
      <button
        onClick={() =>
          dispatch(removeFromCart({ id: item.id, price: item.price }))
        }
        className="text-purple-500 hover:text-purple-600 hover:underline underline-offset-2 transition"
      >
        remove
      </button>
    </article>
  )
}

export default CartProduct
