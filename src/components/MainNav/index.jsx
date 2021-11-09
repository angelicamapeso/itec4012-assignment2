import "./styles.scss";

import Logo from "../../img/ikea-logo.svg";
import Button from "../Button";
import { MdOutlineLocationOn, MdOutlineShoppingBasket, MdPersonOutline } from "react-icons/md";
import { FiTruck, FiHeart } from "react-icons/fi";

export default function MainNav() {
  return (
    <header>
      <div class="header-wrapper">
        <a class="logo-wrapper" href="/"><img class="logo" alt="Home" src={Logo} /></a>
        <div class="nav-icons">
          <Button><MdOutlineLocationOn class="icon" /></Button>
          <Button><FiTruck class="icon" /></Button>
          <Button><MdPersonOutline class="icon" /></Button>
          <Button><FiHeart class="icon" /></Button>
          <Button><MdOutlineShoppingBasket class="icon" /></Button>
        </div>
      </div>
      <div class="hamburger-menu-icon">

      </div>
    </header>
  );
}