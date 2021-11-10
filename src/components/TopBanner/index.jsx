import './styles.scss';
import { VscGlobe, VscCreditCard } from 'react-icons/vsc';
import { AiOutlineEdit } from "react-icons/ai";

export default function TopBanner() {
  return (
    <div id="top-banner">
      <a href="/"><VscGlobe /><span>We're experiencing supply issues</span></a>
      <a href="/"><VscCreditCard /><span>Join IKEA Family for free | Get member-only discounts, benefits and more</span></a>
      <a href="/"><AiOutlineEdit /><span>Personalized planning services</span></a>
    </div>
  );
}