import { useState } from "react"
import { Product } from "../types"
import { formatPrice } from "../utils"
import { useAppDispatch } from "../hooks"
import { addToCart } from "../features/cart/cartSlice"

function ProductCard(productInfo: Product) {
  const [showMore, setShowMore] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  return (
    <article className="bg-slate-50 w-xs flex flex-col gap-2 justify-between shadow-lg p-6 rounded-md hover:shadow-2xl transition">
      <img
        src={productInfo.image}
        alt={productInfo.title}
        width={150}
        height={150}
        loading="lazy"
        className="size-48 object-contain self-center mix-blend-multiply"
      />
      <h2 className="text-xl font-bold text-slate-900">{productInfo.title}</h2>
      <p className=" text-sm text-gray-800/70 font-semibold">
        {productInfo.category}
      </p>
      <p className="text-slate-900">
        {showMore
          ? `${productInfo.description} `
          : `${productInfo.description.slice(0, 80)}... `}
        <button
          className="text-purple-600 hover:underline underline-offset-2 rounded-sm"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "show less" : "show more"}
        </button>
      </p>

      <div className="flex space-x-4 items-center justify-between">
        <h3 className="text-xl text-purple-500 font-bold font-sans">{`${formatPrice(
          productInfo.price
        )}`}</h3>
        <button
          onClick={() => dispatch(addToCart(productInfo))}
          className="bg-gradient-to-tl from-purple-400 via-purple-200 to-purple-400 hover:scale-105 px-10 py-2 text-base font-semibold transition"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
