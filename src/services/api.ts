import { ProductScheme } from "../types/index";

export async function fetchProducts() : Promise<ProductScheme[]> {
    const response = await fetch(import.meta.env.VITE_URL + '/api/v1/products')
    const products = await response.json()
    return products
}