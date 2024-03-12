import icon from '../../../assets/theme-icon.svg'
import './ThemeButton.css'
export default function ThemeButton() {
  return (
    <div className="theme-button">
        <img className='theme-icon' src={icon} alt="icon" />
    </div>
  )
}
