import "./styles.scss";

import Logo from "../../img/ikea-logo.svg";
import Button from "../Button";
import Search from "../Search";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn, MdOutlineShoppingBasket, MdPersonOutline } from "react-icons/md";
import { FiTruck, FiHeart, FiMenu } from "react-icons/fi";

export default function MainNav() {
  return (
    <header>
      <nav>
        <div className="header-wrapper">
          <Link className="logo-wrapper" to="/"><img className="logo" alt="Home" src={Logo} /></Link>
          <ul className="nav-text">
            <li><a href="/" className="bold">Products</a></li>
            <li><a href="/" className="bold">Rooms</a></li>
            <li><a href="/" className="bold">Offers</a></li>
            <li><a href="/" className="bold">Green Friday</a></li>
          </ul>
          <ul className="nav-icons">
            <li><Button><MdOutlineLocationOn className="icon" /></Button></li>
            <li id="truck"><Button><FiTruck className="icon" /></Button></li>
            <li><Button><MdPersonOutline className="icon" /></Button></li>
            <li><Button><FiHeart className="icon" /></Button></li>
            <li><Link to="/cart"><Button><MdOutlineShoppingBasket className="icon" /></Button></Link></li>
            <li id="menu"><Button><FiMenu className="icon" /></Button></li>
          </ul>
          <Search className="search-form" />
        </div>
        <div className="hamburger-menu-icon">
          <Button><FiMenu className="icon" /></Button>
        </div>
      </nav>
    </header>
  );
}