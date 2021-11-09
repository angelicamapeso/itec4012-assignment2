import "./styles.scss";

import Logo from "../../img/ikea-logo.svg";
import Button from "../Button";
import { MdOutlineLocationOn, MdOutlineShoppingBasket, MdPersonOutline } from "react-icons/md";
import { FiTruck, FiHeart, FiMenu } from "react-icons/fi";

export default function MainNav() {
  return (
    <header>
      <div className="header-wrapper">
        <a className="logo-wrapper" href="/"><img className="logo" alt="Home" src={Logo} /></a>
        <div className="nav-icons">
          <Button><MdOutlineLocationOn className="icon" /></Button>
          <Button id="truck"><FiTruck className="icon" /></Button>
          <Button><MdPersonOutline className="icon" /></Button>
          <Button><FiHeart className="icon" /></Button>
          <Button><MdOutlineShoppingBasket className="icon" /></Button>
          <Button><FiMenu className="icon" /></Button>
        </div>
      </div>
      <div className="hamburger-menu-icon">

      </div>
    </header>
  );
}