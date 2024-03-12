import { ProductScheme } from '../../../types'
import './Product.css'

export default function Product({title, price, description, images}:ProductScheme) {
  return (
    <div className='product'>
      <div className='image'>
        {
          images.map((image:any, index:any) => {
            return <img className='product-image' key={index} src={image} alt={title} />
          })
        }
      </div>
      <div className='product-text'>
        <div className='title'>{title.slice(0, 23)}</div>
        <div className='description'>{description.slice(0, 65).trimEnd()}...</div>
        <div className='product-bottom'>
          <div className='price'>{price}$</div>
          <div className='button-buy'>Add to cart</div>
        </div>
      </div>
    </div>
  )
}
