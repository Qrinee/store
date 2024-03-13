import './Header.css'
import NavigationButton from './NavigationButton/NavigationButton'
import home from '../../assets/home.png'
import store from '../../assets/shop.png'
import user from '../../assets/user.png'
import cart from '../../assets/cart.png'
import { usePageContext } from '../../context/PageContext'
export default function Header() {
  const { setPageNumber } = usePageContext();
  return (
    <header className='header'>
        <div className='navigation-container'>
          <div className='navigation-button' onClick={() => setPageNumber(1)}>
            <NavigationButton text={"LOGO"} isBold number={0} />
          </div>
          <div className='navigation-button' onClick={() => setPageNumber(1)}>
            <NavigationButton text={"Home"} image={home} number={1} />
          </div>
          <div className='navigation-button' onClick={() => setPageNumber(2)}>
            <NavigationButton text={"Store"} image={store} number={2} />
          </div>
          <div className='navigation-button' onClick={() => setPageNumber(3)}>
            <NavigationButton text={"Cart"} image={cart} number={3} />
          </div>
          <div className='navigation-button' onClick={() => setPageNumber(4)}>
            <NavigationButton text={"User"} image={user} number={4} />
          </div>
        </div>
    </header>
  )
}
