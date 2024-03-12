import { CategoriesProps } from "../../../types";
import './CategoriesItem.css'
export default function CategoriesItem({ selected, text }:CategoriesProps) {
  return (
    <div className={`categories-item${selected ? ' selected': ''}`}>
        {text}
    </div>
  )
}
