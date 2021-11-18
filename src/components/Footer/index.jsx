import "./styles.scss";

import { HELP_ITEMS, SHOP_LEARN_ITEMS, ABOUT_ITEMS } from "./footer_links";
import { BREAKPOINTS } from "../../constants";

import { useEffect, useState } from "react";
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
              <li>
                <AccordionMenu
                  title="Help"
                  listItems={HELP_ITEMS}
                  useAccordion={useAccordion}
                />
              </li>
              <li>
                <AccordionMenu
                  title="Shop &amp; Learn"
                  listItems={SHOP_LEARN_ITEMS}
                  useAccordion={useAccordion}
                />
              </li>
              <li>
                <AccordionMenu
                  title="About IKEA"
                  listItems={ABOUT_ITEMS}
                  useAccordion={useAccordion}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}