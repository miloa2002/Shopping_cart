import axios from "axios";

export function productsData() {
    return axios.get("http://localhost:3000/products");
}