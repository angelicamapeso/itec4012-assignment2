import "./styles.scss";

import { ACCORDION_ITEMS, SOCIAL_MEDIA_ICONS, POLICY_LINKS } from "./footer_links.jsx";
import { BREAKPOINTS } from "../../constants";

import { useEffect, useState } from "react";
import { VscGlobe } from "react-icons/vsc";
import { FiChevronDown } from "react-icons/fi";

import Button from "../Button";
import AccordionMenu from "../AccordionMenu";


export default function Footer() {
  const [useAccordion, setUseAccordion] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleResize = () => {
    if (window.matchMedia(`(min-width: ${BREAKPOINTS.md})`).matches) {
      setUseAccordion(false);
    } else {
      setUseAccordion(true);
    }
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-lists">
            <div className="intro">
              <h3>IKEA Family</h3>
              <p>Bring your ideas to life with rewards, inspiration, discounts and a few surprises along the way.</p>
              <Button className="bold" styleType="dark" contentType="text">Join now</Button>
            </div>
            <ul className="lists">
              { ACCORDION_ITEMS.map(item => (
                  <li>
                    <AccordionMenu
                      title={item.title}
                      listItems={item.items}
                      useAccordion={useAccordion}
                    />
                  </li>
              ))}
            </ul>
          </div>
          <div className="btn-links">
            <ul>
              { SOCIAL_MEDIA_ICONS.map(icon => (
                  <li>
                    <Button className="social-media-btn" styleType="line-light">{icon}</Button>
                  </li>
              ))}
            </ul>
            <div className="extra-btns">
                <Button styleType="line-light bold" contentType="text">
                  <VscGlobe className="icon globe" />Change country
                </Button>
                <Button styleType="line-light bold" contentType="text">
                  English<FiChevronDown className="icon chevron" />
                </Button>
            </div>
          </div>
          <div className="policy">
            <p>This is not the copyright you're looking for</p>
            <ul className="policy-links">
                { POLICY_LINKS.map(link => (
                    <li><a href="/">{link}</a></li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}