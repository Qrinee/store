import './Categories.css'
import CategoriesHeader from './CategoriesHeader/CategoriesHeader'
import CategoriesItem from './CategoriesItem/CategoriesItem'

export default function Categories() {
  return (
    <div className='categories'>
      <CategoriesHeader/>
      <div className='categories-selector'>
          <CategoriesItem selected text='All' />
          <CategoriesItem text='Furniture' />
          <CategoriesItem text='Miscellaneous' />
          <CategoriesItem text='T-shirt' />
          <CategoriesItem text='Post' />
      </div>
    </div>
  )
}
