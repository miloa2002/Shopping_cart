import { useEffect, useState } from "react";
import { productsData } from "../api/api";

export const UseCart = () => {
  const [products, setProducts] = useState([]);

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
  };
};
