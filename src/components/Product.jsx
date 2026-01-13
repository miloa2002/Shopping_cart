import { numberPrice } from "../utils";

export default function Product({ product, cart = [], addToCart, increaseQuantity, decreaseQuantity }) {
  const productExistsInCart = cart.find((element) => element.id === product.id);

  return (
    <div>
      <div className="relative">
        <picture className="block w-full">
          {/* Desktop */}
          <source media="(min-width: 768px)" srcSet={product.image.desktop} />

          {/* Mobile (fallback) */}
          <img
            src={product.image.mobile}
            alt={product.name}
            className="rounded-lg"
          />
        </picture>

        {!productExistsInCart ? (
          <button
            className="flex items-center justify-center absolute bottom-0 left-0 right-0 translate-y-1/2 bg-white border border-rose-950 rounded-full font-semibold text-rose-950 w-2/3 m-auto p-2 cursor-pointer"
            onClick={() => addToCart(product)}
          >
            <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 translate-y-1/2 bg-red-700 w-2/3 m-auto p-2 rounded-full border-0">
            <button 
              className="w-6 h-6 m-auto border rounded-full flex justify-center items-center text-white cursor-pointer"
              onClick={() => decreaseQuantity(product.id)}
            >
              −
            </button>

            <input
              type="number"
              value={product.quantity}
              readOnly
              className="w-8 m-auto text-center text-white focus:outline-none appearance-none"
            />

            <button 
              className="w-6 h-6 m-auto border rounded-full flex justify-center items-center text-white cursor-pointer"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
        )}
      </div>
      <div className="my-8">
        <p className="text-rose-300">{product.category}</p>
        <p className="text-rose-950 font-bold">{product.name}</p>
        <p className="text-rose-600 font-bold">{numberPrice(product.price)}</p>
      </div>
    </div>
  );
}
