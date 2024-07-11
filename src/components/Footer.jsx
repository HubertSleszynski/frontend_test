import "../styles/Footer.scss";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";

const Footer = ({ isDataAcive, setIsDataAcive, resetSettings }) => {
  return (
    <footer className="footer">
      <div className="css__container">
        <h2 className="css__textcontainer">
          <span className="css__text">CSS</span>
          <span className="css__text">is</span>
          <span className="css__text">awesome</span>
        </h2>
      </div>
      <div className="company__container">
        <div className="company__divider" />
        <p className="company__text">nabthat</p>
        <div className="company__divider" />
      </div>
      <div className="footer__btncontainer">
        <input type="checkbox" id="toggle" className="footer__toggle" />
        <label htmlFor="toggle" className="footer__btn">
          Pokaż <IoIosArrowUp className="footer__icon" />
        </label>
        <div className="footer__frame">
          <button className="frame__btn" onClick={resetSettings}>
            <IoIosArrowForward className="frame__icon" /> Zresetuj ustawienia
          </button>
          {!isDataAcive && (
            <button className="frame__btn" onClick={() => setIsDataAcive(true)}>
              <IoIosArrowForward className="frame__icon" /> Pokaż dane osobowe
            </button>
          )}
          {isDataAcive && (
            <button
              className="frame__btn"
              onClick={() => setIsDataAcive(false)}
            >
              <IoIosArrowForward className="frame__icon" /> Ukryj dane osobowe
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
