import "./styles.scss";
import { CAROUSEL1, CAROUSEL2 } from "./carousel_items.js";
import { IMAGE_LIST_1, IMAGE_LIST_2, IMAGE_LIST_3 } from "./image_lists.jsx";
import { ICON_CARDS_1 } from "./icon_card_list.jsx";

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
                      <h3 className="hover-underline">{card.title}</h3>
                      <p>{card.para}</p>
                    </div>
                    <Button><HiOutlineArrowRight className="arrow-icon"/></Button>
                  </Card>
                </LinkWrapper>
              )) }
        </Carousel>
      </section>
      <section>
        <Card className="banner-card dark-banner" color="#0057a3">
          <h2>IKEA Food Click and collect</h2>
          <p>Click and collect is now available for all of your favourite IKEA Food products found in our Swedish Food Market. Like our classic Swedish meatballs, sustainably sourced salmon, refreshing beverages and delicious desserts.</p>
          <Button contentType="text" className="bold">Shop IKEA Food Click and collect</Button>
        </Card>
      </section>
      <section>
        <h2>Shop products for a more sustainable home</h2>
        <Carousel id="carousel2" numPages={{ def: 8, sm: 4, md: 3, lg: 2 }} >
            <LinkWrapper>
              <Card className="text-card" color="#00853E">
                <h3 className="hover-underline">Simple changes for an everyday sustainable life</h3>
                <Button><HiOutlineArrowRight className="arrow-icon" /></Button>
              </Card>
            </LinkWrapper>
            { CAROUSEL2.map(card => (
                <LinkWrapper>
                  <Card className="img-card" src={card.src} overlay={true}>
                    <Button className="bold" contentType="text">{card.btnText}</Button>
                  </Card>
                </LinkWrapper>
              )) }
        </Carousel>
      </section>
      <section>
        <h2>Explore the beautiful possibilities</h2>
        <div id="image-list1" className="custom-scrollbar">
          { IMAGE_LIST_1.map(card => (
              <LinkWrapper>
                <Card src={card.src}>
                  <p className="hover-underline">{card.txt}</p>
                </Card>
              </LinkWrapper>
          )) }
        </div>
      </section>
      <section>
        <h2>You can do everything yourself, but you don't have to</h2>
        <div id="icon-cards1">
          { ICON_CARDS_1.map(card => (
              <Card className="icon-card" color="#f5f5f5">
                { card.icon }
                <h3>{card.title}</h3>
                <p>{card.descrip}</p>
                <a href="/">{card.linkTxt}</a>
              </Card>
          ))}
        </div>
        <Button className="service-btn bold" styleType="dark" contentType="text">View all services</Button>
      </section>
      <section>
        <h2>More from IKEA Canada</h2>
        <div id="image-list2">
          { IMAGE_LIST_2.map(card => (
              <Card src={card.src}>
                <p><strong>{card.title}</strong></p>
                { card.descrip }
                <Button styleType="dark" contentType="text">{card.btnTxt}</Button>
                { card.btnTxtSec ?
                    <Button styleType="line-light" contentType="text">{card.btnTxtSec}</Button> :
                    null
                }
              </Card>
          ))}
        </div>
      </section>
      <section>
        <Card className="banner-card light-banner" color="#ffde00">
          <h2>We’re looking for people with a taste for working together</h2>
          <p>
            We’re looking for Food co-workers in the Restaurant, Bistro/Café, Swedish Food Market Specialty Shop and Co-worker Restaurant ready to satisfy any customer food cravings.
          </p>
          <p>You’re home here. Build your dream job with us.</p>
          <Button styleType="dark" contentType="text" className="bold">Apply today</Button>
        </Card>
      </section>
      <hr />
      <section id="important-info">
        <h2>Important Information</h2>
        <div id="image-list3">
          { IMAGE_LIST_3.map(card => (
              <Card>
                <h3>{card.title}</h3>
                <LinkWrapper>
                  <img src={card.src} alt="" />
                </LinkWrapper>
                {card.descrip}
                <Button styleType="line-light" contentType="text">{card.btnTxt}</Button>
              </Card>
          ))}
        </div>
      </section>
    </>
  );
}