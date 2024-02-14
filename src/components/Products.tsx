import { useQuery } from "@tanstack/react-query"
import { Product } from "../types"
import ProductCard from "./ProductCard"
import Loading from "./Loading"

const baseURL = "https://fakestoreapi.com"

function Products() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/products`)
      const data = await response.json()
      return data
    },
  })

  if (isLoading) return <Loading />

  if (isError) return <p>Something went wrong... </p>

  // console.log(data[0])

  return (
    <div>
      <h1 className="text-3xl font-medium text-center mb-6">
        All our products
      </h1>
      <div className="w-full gap-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product: Product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}

export default Products
