import { useEffect, useState } from "react";
import { fetchProductsById } from "../../services/api";
import './ProductView.css'
import { ProductScheme } from "../../types";
import { CartButton } from "../Products/CartButton/CartButton";

export default function ProductView() {
    const [product, setProduct] = useState<ProductScheme | null>(null);
    const urlParams = new URLSearchParams(window.location.search);
    const idString = urlParams.get('id');
    const id = idString ? parseInt(idString) : null;

    useEffect(() => {
      if (id !== null) {
        (async () => {
          try {
            const productData = await fetchProductsById(id);
            setProduct(productData);
          } catch (error) {
            console.log(error);
          }
        })();
      }
    }, [id]);

  return (
    <div className="product-view-container">
      {product && (
        <>
          <div className="view-images">
            <img src={product.images} alt={product.title} className="product-view-image" />
          </div>
          <div className="view-text">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            {id !== null && <CartButton id={id} />}
            <div></div>
          </div>
        </>
      )}
    </div>
  );
}
