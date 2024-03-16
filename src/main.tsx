import React from "react";
import ReactDOM from "react-dom/client";
import Shop from "./pages/Shop.tsx";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ProductView from "./components/View/ProductView.tsx";

const router = createBrowserRouter([
  // Tworzę sobie główną ścieżkę i wskazuję, że ma ona używać komponentu z layoutem
  {
    path: "/",
    element: <App />,
    // Teraz wskazuję, że w tym layoucie mają być zagnieżdżone ścieżki
    children: [
      // Index: true mówi mi, że ten komnponent jest domyślnym dla tej ścieżki /
      { index: true, element: <Shop /> },
      // A inne podstorny sobie definiują podając dodatkowo ścieżkę po tym /, czyli ogólnie np. /products/1
      // Tutaj też zamiast query param id teraz używam parametru w ścieżce, który później sobie wyciągam za pomocą hooka useParams
      { path: "products/:id", element: <ProductView /> },
      
      { path: "store", element:  <Shop /> },
      { path: "cart", element: <div>Cart</div> },
      { path: "user", element: <div>User</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Context nie jest już  potrzebny bo wyciągam sobie dane z routera
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
