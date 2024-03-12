import { useEffect, useState } from 'react'
import './Categories.css'
import CategoriesHeader from './CategoriesHeader/CategoriesHeader'
import CategoriesItem from './CategoriesItem/CategoriesItem'
import { CategoryScheme } from '../../types'
import { fetchCategories } from '../../services/api'

export default function Categories() {
  const [categories, setCategories] = useState<CategoryScheme[]>([])
  useEffect(() => {
    (async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  return (
    <div className='categories'>
      <CategoriesHeader/>
      <div className='categories-selector'>
        <CategoriesItem id={2} name='All' image='' creationAt='' updatedAt=''  />
        {categories.map((category) => (
          <CategoriesItem key={category.id} {...category} />
        ))}
      </div>
    </div>
  )
}
