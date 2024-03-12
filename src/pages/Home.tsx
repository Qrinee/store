import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

export default function Home() {
  return (
    <>
        <Header />
        <main className="main-container">
            <Categories/>
            <Products/>
        </main>
    </>
  )
}
