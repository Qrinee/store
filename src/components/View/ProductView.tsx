import { useEffect, useState } from "react";
import { fetchProductsById } from "../../services/api";
import './ProductView.css'
import { ProductScheme } from "../../types";
import { CartButton } from "../Products/CartButton/CartButton";

export default function ProductView() {
    const [product, setProduct] = useState<ProductScheme | null>(null);
    const [selected, setSelected] = useState<number>(0)
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
            <img src={product.images[selected]} alt={product.title} className="product-view-image" />
          </div>
          <div className="view-text">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <div className="view-mini-images">
                {
                    product && product.images.map((e:any, index:number) => (
                        <img src={e} key={index} onClick={() => setSelected(index)}  alt={product.title} className={`product-view-image ${index == selected ? 'view-selected': ''}`} />
                    ))
                }
            </div>
            {id !== null && <CartButton id={id} />}
          </div>
        </>
      )}
    </div>
  );
}
