import "./styles.scss";
import { CAROUSEL1 } from "./carousel_items.js";

// icons
import { HiOutlineArrowRight } from "react-icons/hi";

// components
import Promotional from "../../page-sections/Promotional";
import Card from "../../components/Card";
import Button from "../../components/Button";
import LinkWrapper from "../../components/LinkWrapper";

export default function Home() {
  console.log(CAROUSEL1);

  return (
    <>
      <Promotional />
      <div id="carousel1">
        <div className="carousel-wrapper">
          { CAROUSEL1.map(card => (
              <LinkWrapper>
                <Card src={card.src} color={card.color}>
                  <div className="card-text">
                    <a href="/"><h3>{card.title}</h3></a>
                    <p>{card.para}</p>
                  </div>
                  <Button><HiOutlineArrowRight className="arrow-icon"/></Button>
                </Card>
              </LinkWrapper>
            )) }
        </div>
      </div>
    </>
  );
}