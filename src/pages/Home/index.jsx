import "./styles.scss";
import { CAROUSEL1 } from "./carousel_items.js";

// icons
import { HiOutlineArrowRight } from "react-icons/hi";

// components
import Promotional from "../../page-sections/Promotional";
import Card from "../../components/Card";
import Button from "../../components/Button";
import LinkWrapper from "../../components/LinkWrapper";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <>
      <Promotional />
      <section>
        <h2>Right Now at IKEA</h2>
        <Carousel id="carousel1" numPages={{ def: 6, sm: 3, md: 2, lg: 2 }} >
            { CAROUSEL1.map(card => (
                <LinkWrapper>
                  <Card src={card.src} color={card.color}>
                    <div className="card-text">
                      <h3 className="underline">{card.title}</h3>
                      <p>{card.para}</p>
                    </div>
                    <Button><HiOutlineArrowRight className="arrow-icon"/></Button>
                  </Card>
                </LinkWrapper>
              )) }
        </Carousel>
      </section>
      <section>
        <Card className="banner-card" color="#0057a3">
          <h2>IKEA Food Click and collect</h2>
          <p>Click and collect is now available for all of your favourite IKEA Food products found in our Swedish Food Market. Like our classic Swedish meatballs, sustainably sourced salmon, refreshing beverages and delicious desserts.</p>
          <Button contentType="text" className="bold">Shop IKEA Food Click and collect</Button>
        </Card>
      </section>
      <section>
        <h2>Shop products for a more sustainable home</h2>
      </section>
    </>
  );
}