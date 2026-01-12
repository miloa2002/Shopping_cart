import { useEffect, useState } from "react"
import { productsData } from "./api/api"
import Product from "./components/Product"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsData().then(result => setProducts(result.data))
  }, [])

  return (
    <div className="w-10/12 m-auto">
      <div className="flex flex-row gap-4 mt-10">
        <main className="w-3/5">
          <h1 className="font-bold text-5xl text-rose-950 mb-10">Desserts</h1>

          <div>
            {
              products.map(product => (
                <Product key={product.name} product={product} />
              ))
            }
          </div>
        </main>

        <div className="w-2/5">
          cart
        </div>
      </div>
    </div>
  )
}

export default App