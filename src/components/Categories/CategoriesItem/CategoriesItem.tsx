import { CategoryScheme } from "../../../types";
import './CategoriesItem.css'
export default function CategoriesItem({ name }:CategoryScheme) {

  return (
    <div className={`categories-item`}>
        {name}
    </div>
  )
}
