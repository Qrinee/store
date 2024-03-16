import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

// Możesz utworzyć sobie taki główny layout dla wielu podstron i wtedy w nim zagnieżdzasz podstrony
// Przykładowo tutaj dodaję sobie header, który będzie wcześnej i za pomocą Outlet wstawiam podstronę z routera, która będzie zależeć od urla (patrz: main.tsx)
export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
