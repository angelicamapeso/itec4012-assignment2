import "./styles.scss";

import Logo from "../../img/ikea-logo.svg";
import Button from "../Button";
import Search from "../Search";
import { MdOutlineLocationOn, MdOutlineShoppingBasket, MdPersonOutline } from "react-icons/md";
import { FiTruck, FiHeart, FiMenu } from "react-icons/fi";

export default function MainNav() {
  return (
    <header>
      <div className="header-wrapper">
        <a className="logo-wrapper" href="/"><img className="logo" alt="Home" src={Logo} /></a>
        <ul className="nav-text">
          <li><a href="/">Products</a></li>
          <li><a href="/">Rooms</a></li>
          <li><a href="/">Offers</a></li>
          <li><a href="/">Green Friday</a></li>
        </ul>
        <ul className="nav-icons">
          <li><Button><MdOutlineLocationOn className="icon" /></Button></li>
          <li id="truck"><Button><FiTruck className="icon" /></Button></li>
          <li><Button><MdPersonOutline className="icon" /></Button></li>
          <li><Button><FiHeart className="icon" /></Button></li>
          <li><Button><MdOutlineShoppingBasket className="icon" /></Button></li>
          <li id="menu"><Button><FiMenu className="icon" /></Button></li>
        </ul>
        <Search className="search-form" />
      </div>
      <div className="hamburger-menu-icon">

      </div>
    </header>
  );
}