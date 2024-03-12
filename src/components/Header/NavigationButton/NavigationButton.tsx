import { NavigationButtonProps } from "../../../types";
import './NavigationButton.css'
export default function NavigationButton({ text, isBold, image }: NavigationButtonProps) {
  return (
    <div className={`navigation-button ${isBold ? 'bold' : null}`}>
      {
        !isBold ? (
          <img src={image} alt="" width="15" height="15" className="navigation-icon" />
        ) : null
      }

      {text}
      </div>
  );
}