import { useState } from "react";
import { CategoryScheme } from "../../../types";
import './CategoriesItem.css'
export default function CategoriesItem({ name }:CategoryScheme) {
  const [selected, setSelected] = useState(false)
  return (
    <div className={`categories-item${selected ? ' selected': ''}`} onClick={() => setSelected(true)}>
        {name}
    </div>
  )
}
