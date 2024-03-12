import './CategoriesHeader.css'
export default function CategoriesHeader() {
  return (
    <div className='categories-header'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M18.5 18.5l2.5 2.5"></path><path d="M4 6h16"></path><path d="M4 12h4"></path><path d="M4 18h4"></path></svg>
        <p className='categories-header-text'>Categories</p>
    </div>
  )
}
