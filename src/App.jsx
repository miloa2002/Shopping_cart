import Product from "./components/Product"
import Cart from "./components/Cart"
import { UseCart } from "./hooks/UseCart"

function App() {
  
  const { products, cart, addToCart, increaseQuantity, decreaseQuantity, deleteProduct } = UseCart();

  return (
    <div className="w-10/12 m-auto">
      <div className="md:flex flex-row gap-4 m-10">
        <main className="md:w-3/5">
          <h1 className="font-bold text-5xl text-rose-950 mb-10">Desserts</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              products.map(product => (
                <Product key={product.name} product={product} addToCart={addToCart} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
              ))
            }
          </div>
        </main>

        <div className="md:w-2/5">
          <Cart cart={cart} deleteProduct={deleteProduct}/>
        </div>
      </div>
    </div>
  )
}

export default App