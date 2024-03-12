import { NavigationButtonProps } from "../../../types";
import './NavigationButton.css'
export default function NavigationButton({ text, isBold }: NavigationButtonProps) {
  return (
    <div className={`navigation-button ${isBold ? 'bold' : null}`}>{text}</div>
  );
}