import axios from "axios";
import { APIPaths } from "./paths";

export const axiosInstence = axios.create({
    baseURL: "http://localhost:8000"
})

export const ProductsAPI = () => axiosInstence(APIPaths.PRODUCTS)