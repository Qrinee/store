import './Header.css'
import NavigationButton from './NavigationButton/NavigationButton'
export default function Header() {
  return (
    <header className='header'>
        <div className='navigation-container'>
            <NavigationButton text={"LOGO"} isBold />
            <NavigationButton text={"Home"} />
            <NavigationButton text={"Store"} />
            <NavigationButton text={"Cart"} />
        </div>
    </header>
  )
}
