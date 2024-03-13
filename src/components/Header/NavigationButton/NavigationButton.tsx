import { usePageContext } from "../../../context/PageContext";
import { NavigationButtonProps } from "../../../types";
import './NavigationButton.css'
export default function NavigationButton({ text, isBold, image, number }: NavigationButtonProps) {
  const {pageNumber} = usePageContext();
  return (
    <div className={`${pageNumber === number ? 'selected-page' : ''}  ${isBold ? 'bold' : ''}`}>
      {
        !isBold ? (
          <img src={image} alt="" width="15" height="15" className="navigation-icon" />
        ) : null
      }

      {text}
      </div>
  );
}