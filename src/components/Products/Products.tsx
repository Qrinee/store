import { useEffect, useState } from "react";
import Product from "./Product/Product";
import { fetchCategories, fetchProducts } from "../../services/api";
import { CategoryScheme, ProductScheme } from "../../types"; 
import '../Categories/Categories.css'
import '../Categories/CategoriesHeader/CategoriesHeader.css'
import '../Categories/CategoriesItem/CategoriesItem.css'
import './Products.css'
import CategoriesHeader from "../Categories/CategoriesHeader/CategoriesHeader";
import CategoriesItem from "../Categories/CategoriesItem/CategoriesItem";
export default function Products() {
  const [products, setProducts] = useState<ProductScheme[]>([]);
  const [categories, setCategories] = useState<CategoryScheme[]>([])
  const [selectedCategorie, setSelectedCategorie] = useState<number>(0)
  
  useEffect(() => {
    (async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
    <div className='categories'>
      <CategoriesHeader/>
      <div className='categories-selector'>
        {categories.map((category, index:number) => (
          <div key={category.id} onClick={() => setSelectedCategorie(index)} className={`${selectedCategorie == index ? 'selected' : ''}`}>
            <CategoriesItem key={category.id} {...category} />
          </div>
        ))}
      </div>
    </div>
    <div className="products">
      { products.map((product) => (
        <>
          {
            categories[selectedCategorie]?.name == product.category?.name ? (
              <Product key={product.id} {...product} />
            ) : null
          }
        </>
      ))} 
    </div>
    </>
  );
}
