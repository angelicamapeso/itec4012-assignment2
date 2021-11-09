import "./styles.scss";

import Button from "../Button";
import { FiCamera, FiSearch } from "react-icons/fi";

export default function Search({ className }) {
  return (
    <form id="search-form" className={className}>
      <label for="search">Search</label>
      <div id="search-input-wrapper">
        <input id="search" placeholder="What are you looking for?"/>
        <FiSearch className="icon" aria-hidden="true"/>
        <Button><FiCamera /></Button>
      </div>
    </form>
  );
}