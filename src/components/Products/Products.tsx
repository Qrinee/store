import { useEffect, useState } from "react";
import Product from "./Product/Product";
import { fetchProducts } from "../../services/api";
import { ProductScheme } from "../../types"; 
import './Products.css'
export default function Products() {
  const [products, setProducts] = useState<ProductScheme[]>([]);

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
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
