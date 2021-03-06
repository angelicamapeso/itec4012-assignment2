import "./styles.scss";

import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

import LinkWrapper from "../LinkWrapper";

export default function AccordionMenu({
  title = "",
  listItems = [],
  useAccordion = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (useAccordion) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [useAccordion])

  return (
    <>
      <h4
        className={`accordion-title ${useAccordion ? 'clickable' : 'reg'}`}
        onClick={() => useAccordion ? setIsExpanded(!isExpanded) : null}
      >
        {title}
        <button
          className={`accordion-button ${
              useAccordion ? 'show' : 'hide'
            }`}
        >
          <FiChevronDown className={`accordion-arrow ${
              isExpanded ? 'expanded' : 'closed'
            } `} />
        </button>
      </h4>
      <ul className={`accordion-list ${isExpanded ? 'show' : 'hide'}`}>
        { listItems.map((item, i) => (
          <li key={i} className="accordion-item">
            <LinkWrapper className="underline">
              {item}
            </LinkWrapper>
          </li>
        ))}
      </ul>
    </>
  );
}