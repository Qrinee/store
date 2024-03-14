import { CategoryScheme, ProductScheme } from "../types/index";

export async function fetchProducts() : Promise<ProductScheme[]> {
    const response = await fetch(import.meta.env.VITE_URL + '/api/v1/products')
    const products = await response.json()
    return products
}

export async function fetchProductsById(id:number) : Promise<ProductScheme> {
    const response = await fetch(import.meta.env.VITE_URL + '/api/v1/products/' + id)
    const products = await response.json()
    return products
}

export async function fetchCategories() : Promise<CategoryScheme[]> {
    const response = await fetch(import.meta.env.VITE_URL + '/api/v1/categories')
    const categories = await response.json()
    return categories
}