import { NavigationButtonProps } from "../../../types";
import './NavigationButton.css'
export default function NavigationButton({ text, isBold, image, active }: NavigationButtonProps) {
  return (
    <div className={`${active ? 'selected-page' : ''}  ${isBold ? 'bold' : ''}`}>
      {
        !isBold ? (
          <img src={image} alt="" width="15" height="15" className="navigation-icon" />
        ) : null
      }

      {text}
      </div>
  );
}