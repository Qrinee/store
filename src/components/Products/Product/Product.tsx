import { useState } from 'react';
import { CartButton } from '../CartButton/CartButton';
import { ProductScheme } from '../../../types';
import './Product.css';
import tab from '../../../assets/tab.png';

export default function Product({ title, price, description, images, id }: ProductScheme) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [percent, setPercent] = useState(0)
  
  const handleLeft = () => {
    setPercent(percent - 100)
    if(percent < 0)
      setPercent((images.length - 1) * 100)
    
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length + 1 ? 0 : prevIndex + 1));
    
  }
  
  const handleRight = () => {
    setPercent(percent + 100)
    if(((images.length - 1) * 100) === percent)
      setPercent(0)
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    
  
  };

  return (
    <div className='product'>
      <div className='image'>
        <div className='image-overlay'>
          <div className='image-circle-overlay'>
            <div className='circle' onClick={handleLeft}></div>
            <div className='circle' onClick={handleRight}></div>
          </div>
          <div className='circles-overlay'>
            {images.map((_:any, index:any) => (
              <div key={index} className={`mini-circle ${index === currentImageIndex ? 'active-mini-circle' : ''}`}></div>
            ))}
          </div>
        </div>
        <div style={{left: '-' + percent.toString() + '%', display: 'flex', position: 'relative', transition: '0.5s all'}}>
        {
        images.map((image:any, index:any) => (
          <img
            className={`product-image ${index === currentImageIndex ? 'active-image' : ''}`}
            key={index}
            src={image}
            alt={title}
          />
        ))}
        </div>
      </div>
      <div className='product-text'>
        <div className='title'>{title.slice(0, 23)}</div>
        <div className='description'>{description.slice(0, 65).trimEnd()}...</div>
        <div className='product-bottom'>
          <div className='price'>{price}$</div>
          <div className='button-container'>
          <a href={'/product?id=' + id}>
              <img className='tab-button' src={tab} width={20} />
            </a>
            <CartButton id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
