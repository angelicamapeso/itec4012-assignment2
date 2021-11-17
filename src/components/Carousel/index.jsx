import "./styles.scss";
import { BREAKPOINTS } from "../../constants";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useState, useRef, useEffect } from "react";
import Button from "../Button";

export default function Carousel({
  id = "",
  className = "",
  children,
  numPages = { def: 2, sm: 2, md: 2, lg: 2 },
  btnStyleType = "dark",
  btnPreventHide = false,
  hideScrollbar = false,
}) {
  const [pageLocations, setPageLocations] = useState([]);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return  () => window.removeEventListener('resize', handleResize);
  }, [])


  const calcCurrentNumPages = () => {
    let currentNumPages = numPages.def;
    for (const breakpointSize in BREAKPOINTS) {
      if (window.matchMedia(`(min-width: ${BREAKPOINTS[breakpointSize]})`).matches) {
        currentNumPages = numPages[breakpointSize];
        break;
      }
    }
    currentNumPages -= 1;
    return currentNumPages;
  }

  const generatePageLocations = (currentNumPages) => {
    const currentPageLocations = []
    for (let i = 0; i <= currentNumPages; i++) {
      currentPageLocations.push(Math.round(((wrapper.current.scrollWidth - wrapper.current.clientWidth) / currentNumPages) * i));
    }
    return currentPageLocations;
  }

  const determinePageIndex = (pageLocations) => {
    const scrollPos = scroll.current.scrollLeft;
    for (let i = pageLocations.length - 1; i >= 0; i--) {
      if (scrollPos >= pageLocations[i]) {
        return i;
      }
    }
  }

  const handleResize = () => {
    let currentNumPages = calcCurrentNumPages();

    let pageLocations = []
    if (currentNumPages !== pageLocations.length) {
      pageLocations = generatePageLocations(currentNumPages);
      setPageLocations(pageLocations);
    }
  }

  const handleScroll = (e) => {
    setScrollPos(e.target.scrollLeft);
  }

  const handleForward = () => {
    const currentPageIndex = determinePageIndex(pageLocations);
    if (currentPageIndex + 1 < pageLocations.length) {
      scroll.current.scrollLeft = pageLocations[currentPageIndex + 1];
    }
  }

  const handleBackward = () => {
    const currentPageIndex = determinePageIndex(pageLocations);
    if (currentPageIndex - 1 >= 0) {
      scroll.current.scrollLeft = pageLocations[currentPageIndex - 1];
    }
  }

  return (
    <div
      id={id}
      className={'carousel ' + className}
    >
        <Button
          className={`carousel-btn carousel-back ${scrollPos > 0 ? 'show' : ''} ${btnPreventHide ? 'dont-hide' : ''}`}
          styleType={btnStyleType}
          onClick={handleBackward}
        >
          <IoIosArrowBack className="arrow-icon"/>
        </Button>
        <div
          className={`carousel-scroll custom-scrollbar ${hideScrollbar ? 'hide-scrollbar' : ''}`}
          ref={scroll}
          onScroll={handleScroll}
        >
          <div
            className="carousel-wrapper"
            ref={wrapper}
          >
            { children }
          </div>
        </div>
        <Button
          className={`carousel-btn carousel-next ${scrollPos < pageLocations[pageLocations.length - 1] ? 'show' : ''} ${btnPreventHide ? 'dont-hide' : ''}`}
          styleType={btnStyleType}
          onClick={handleForward}
        >
          <IoIosArrowForward className="arrow-icon"/>
        </Button>
    </div>
  );
}