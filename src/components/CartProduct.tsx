import { removeFromCart } from "../features/cart/cartSlice"
import { useAppDispatch } from "../hooks"
import { Product } from "../types"
import { formatPrice } from "../utils"

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
        <h2 className="text-lg  leading-6">{item.title}</h2>
      </div>
      <div className="flex items-center space-x-3">
        <button className="size-8 bg-blue-400 rounded-sm hover:bg-blue-500 transition-colors text-xl">
          -
        </button>
        <p>1</p>
        <button className="size-8 bg-blue-400 rounded-sm hover:bg-blue-500 transition-colors text-xl">
          +
        </button>
      </div>
      <div className="text-xl font-semibold ">{formatPrice(item.price)} US</div>
      <button
        onClick={() =>
          dispatch(removeFromCart({ id: item.id, price: item.price }))
        }
        className="bg-red-500 p-4 rounded-sm hover:bg-red-600 text-slate-100 transition-colors"
      >
        eliminar
      </button>
    </article>
  )
}

export default CartProduct
