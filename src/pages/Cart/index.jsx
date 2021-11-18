import "./styles.scss";
import { PROD_LIST_1 } from "./product_lists";

import { BsThreeDots } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";

import Button from "../../components/Button";
import Card from "../../components/Card";
import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel";

export default function Cart() {
  return (
    <>
      <section>
        <div className="cart-title">
          <h2>Your cart is empty</h2>
          <Button><BsThreeDots className="more-icon" /></Button>
        </div>
        <Card className="login-banner">
          <div className="text">
            <h3>Have an account?</h3>
            <p><a href="/" className="underline">Join or log in</a> for a smoother checkout.</p>
          </div>
          <MdPersonOutline className="person-icon" />
        </Card>
      </section>
      <section className="recommend-section">
        <h2>We recommend</h2>
        <Carousel id="recommended" numPages={{ def: 6, sm: 4, md: 2, lg: 2 }}>
          { PROD_LIST_1.map((product, i) => (
              <ProductCard
                key={i}
                src={product.src}
                altSrc={product.altSrc}
                newProd={product.newProd}
                name={product.name}
                descrip={product.descrip}
                price={product.price}
                perText={product.perText}
                availMoreOptions={product.availMoreOptions}
                showStarRating={product.showStarRating}
                starRating={product.starRating}
                numReview={product.numReview}
              />
          ))}
        </Carousel>
      </section>
    </>
  );
}