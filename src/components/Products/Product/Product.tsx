import { ProductScheme } from '../../../types'
import './Product.css'

export default function Product({id, title, price, description, images}:ProductScheme) {
  return (
    <div>
      <div className='image'></div>
      <div className='title'></div>
      {id} {title} {price} {description} {images[0]}
    </div>
  )
}
