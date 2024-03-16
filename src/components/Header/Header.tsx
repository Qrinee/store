import "./Header.css";
import NavigationButton from "./NavigationButton/NavigationButton";
import home from "../../assets/home.png";
import store from "../../assets/shop.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import { Link, NavLink } from "react-router-dom";

const navigationLinks = [
  { path: "/", text: "Home", image: home },
  { path: "/store", text: "Store", image: store },
  { path: "/cart", text: "Cart", image: cart },
  { path: "/user", text: "User", image: user },
];

export default function Header() {
  return (
    <header className="header">
      <div className="navigation-container">
        <Link to={"/"} className="navigation-button">
          <NavigationButton text={"LOGO"} isBold />
        </Link>
        {/* Tutaj też kontekst staje się niepotrzebny, to z routera wyciągam czy route jest aktywny i dopisuję odpowiednią klasę */}
        {/* Poza tym żeby ułatwić sobie życie link mogę generować na podstawie obiektu, wtedy nie muszę powtarzać i ewentualnie zmieniać kodu dla każdego linku */}
        {navigationLinks.map((link, index) => (
          <NavLink to={link.path} className="navigation-button">
            {({ isActive }) => (
              <NavigationButton
                text={link.text}
                image={link.image}
                key={index}
                active={isActive}
              />
            )}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
