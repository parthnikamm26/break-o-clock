import { FaMugHot } from "react-icons/fa";

import "./Logo.css";

function Logo() {
  return (
    <a href="/" className="logo">

      <FaMugHot className="logo__icon" />

      <span className="logo__text">
        Break <span>O'</span> Clock
      </span>

    </a>
  );
}

export default Logo;