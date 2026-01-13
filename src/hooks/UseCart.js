import { useEffect, useState } from "react";
import { productsData } from "../api/api";

export const UseCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productExits = cart.findIndex(element => element.id === product.id);
    if(productExits >= 0) {
      const updatedCart = cart.map(element => {
        if(element.id === product.id) {
          return {...element, quantity: element.quantity + 1}
        }
        return element;
      })

      setCart(updatedCart)
    }else{
      product.quantity = 1;
      setCart([...cart, product])
    }
  }

  const increaseQuantity = (id) => {
    const updatedCart = [...cart]
    updatedCart.map(element => {
      if(element.id === id) {
        return element.quantity ++;
      }
      return element;
    })

    setCart(updatedCart);
  }
  
  const decreaseQuantity = (id) => {
    const updatedCart = [...cart]
    updatedCart.map(element => {
      if(element.id === id) {
        if(element.quantity >= 1) {
          return element.quantity --;
        }
      }
      return element;
    })

    setCart(updatedCart);
  }

  useEffect(() => {
    const getProducts = async () => {
        try {
            const result = await productsData();
            setProducts(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    getProducts();
  }, []);

  return {
    products,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity
  };
};
