import "../styles/Header.scss";
import { FaHtml5 } from "react-icons/fa";

const Header = () => {
  return (
    <header className="main-header">
      <a href="/" className="main-header__logo-link">
        <FaHtml5 className="main-header__icon" />
      </a>
      <div className="main-header__details">
        <h2 className="main-header__title">
          Zadanie{" "}
          <span className="main-header__title-highlight">rekrutacyjne</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
