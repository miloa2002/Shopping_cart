import { useMemo } from "react";
import { numberPrice } from "../utils";

export default function Cart({ cart = [], deleteProduct, confirmOrderButton }) {
  const orderTotals = useMemo(() => {
    return cart.reduce(
      (accum, element) => accum + element.price * element.quantity,
      0
    );
  }, [cart]);

  return (
    <div className="bg-white rounded-lg p-4">
      {cart.length === 0 ? (
        <div>
          <p className="text-4xl text-red-700 font-bold">
            You Cart <span>(0)</span>
          </p>
          <img
            className="m-auto"
            src="/images/illustration-empty-cart.svg"
            alt="nothing products"
          />
          <p className="text-rose-950 text-center font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="">
          <p className="text-4xl text-red-700 font-bold mb-8">
            You Cart <span>({cart.length})</span>
          </p>

          {cart.map((elemet) => (
            <div key={elemet.id}>
              <div className="border-b border-b-rose-950">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-md mb-2">{elemet.name}</p>
                    <div className="flex gap-6 mb-2">
                      <p className="text-red-700 font-bold">
                        {elemet.quantity} <span>x</span>
                      </p>
                      <p className="text-rose-950 font-bold">
                        <span>
                          {numberPrice(elemet.price * elemet.quantity)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="border border-rose-950 p-1 rounded-full cursor-pointer" onClick={() => deleteProduct(elemet.id)}>
                    <img
                      src="/images/icon-remove-item.svg"
                      alt="delete product"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="my-8 flex justify-between items-center">
            <p className="text-rose-950">Order Total</p>
            <p className="text-black font-bold text-3xl">
              <span>{numberPrice(orderTotals)}</span>
            </p>
          </div>

          <button 
            className="text-white bg-red-700 rounded-full w-full h-14 cursor-pointer"
            onClick={confirmOrderButton}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}
