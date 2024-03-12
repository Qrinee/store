import './Header.css'
import NavigationButton from './NavigationButton/NavigationButton'
import home from '../../assets/home.png'
import store from '../../assets/shop.png'
import cart from '../../assets/cart.png'
export default function Header() {
  return (
    <header className='header'>
        <div className='navigation-container'>
            <NavigationButton text={"LOGO"} isBold />
            <NavigationButton text={"Home"} image={home} />
            <NavigationButton text={"Store"} image={store} />
            <NavigationButton text={"Cart"} image={cart} />
        </div>
    </header>
  )
}
