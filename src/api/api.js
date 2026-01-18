import axios from "axios";

export function productsData() {
    return axios.get("http://localhost:3000/products");
}

export function confirmOrder(cart) {
    return axios.post(import.meta.env.VITE_STRIPE_PUBLIC_KEY, {cart});
}