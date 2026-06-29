import "./Navbar.css";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import navigation from "../../config/navigation";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">

        <Logo />

        <ul className="navbar__links">

          {navigation.map((item) => (

            <li key={item.title}>
              {item.title}
            </li>

          ))}

        </ul>

        <Button text="Order Now" />

      </div>
    </nav>
  );
}

export default Navbar;