import "./styles.scss";

// Images
import promoImg1 from "../../img/text-img-1.webp";
import promoImg2 from "../../img/text-img-2.webp";
import promoImg3 from "../../img/text-img-3.webp";

// Components
import LinkWrapper from "../../components/LinkWrapper";

export default function Promotional() {
  return (
    <>
      <section id="promotional">
        <div id="main-promotion">
          <div>
            <LinkWrapper>
              <img src={promoImg1} alt="This Green Friday, earn 1.5x the value on your Sell-back item*"/>
            </LinkWrapper>
          </div>
        </div>
        <div id="additional-promotions">
          <div>
            <LinkWrapper>
              <img src={promoImg2} alt="20% off* all kitchen appliences"/>
            </LinkWrapper>
            <LinkWrapper>
              <p>
                <span className="bold hover-underline">MEDELNIVÅ</span>
                <span>Over the range microwave</span>
                <span className="bold red">$319.00</span>
                <span>Price valid until Nov 10, 2021</span>
                <span className="bold strike">$399.00</span>
              </p>
            </LinkWrapper>
          </div>
          <div>
            <LinkWrapper>
              <img src={promoImg3} alt="Make laundry easier. Keep your dirty clothes sorted with a laundry cabinet"/>
            </LinkWrapper>
            <LinkWrapper>
              <p>
                <span className="bold orange">New</span>
                <span className="bold hover-underline">NYSJÖN</span>
                <span>Laundry cabinet</span>
                <span className="bold">$129.00</span>
              </p>
            </LinkWrapper>
          </div>
        </div>
      </section>
    </>
  );
}