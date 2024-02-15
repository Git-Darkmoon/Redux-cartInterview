import { useState } from "react"
import { Product } from "../types"
import { formatPrice } from "../utils"
import { useAppDispatch } from "../hooks"
import { addToCart } from "../features/cart/cartSlice"

function ProductCard(productInfo: Product) {
  const [showMore, setShowMore] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  return (
    <article className="bg-slate-50 w-xs flex flex-col gap-4 justify-between shadow-lg p-6 rounded-md hover:scale-105 hover:shadow-xl transition">
      <img
        src={productInfo.image}
        alt={productInfo.title}
        width={150}
        height={150}
        loading="lazy"
        className="size-48 object-contain self-center mix-blend-multiply"
      />
      <h2 className="text-xl font-bold text-slate-900">{productInfo.title}</h2>

      <p className="text-slate-900">
        {showMore
          ? `${productInfo.description} `
          : `${productInfo.description.slice(0, 80)}... `}
        <button
          className="text-blue-600 hover:underline underline-offset-2 rounded-sm"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "show less" : "show more"}
        </button>
      </p>
      <div className="flex text-sm justify-between text-gray-800/70 font-semibold">
        <div>{productInfo.category}</div>
        <div>⭐ {productInfo.rating.rate}</div>
      </div>
      <div className="flex space-x-4 items-center justify-between">
        <h3 className="text-xl font-mono">{`${formatPrice(
          productInfo.price
        )}`}</h3>
        <button
          onClick={() => dispatch(addToCart(productInfo))}
          className="bg-blue-400 px-3 py-2 text-base font-semibold hover:bg-blue-500 rounded-sm transition-colors"
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
