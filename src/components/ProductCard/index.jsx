import "./styles.scss";

import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingBasket } from "react-icons/md";

import Button from "../Button";
import LinkWrapper from "../LinkWrapper";
import { useEffect } from "react/cjs/react.development";

export default function ProductCard({
  src = "https://source.unsplash.com/700x933/?furniture",
  altSrc = "https://source.unsplash.com/700x933/?room",
  newProd = false,
  name = "Sample Name",
  descrip = `Sample description, 9/1x2/4`,
  price = "9.99",
  perText = "",
  availMoreOptions = true,
  showStarRating = true,
  starRating = 0,
  numReview = 0,
}) {
  const [starRatingEl, setStarRatingEl] = useState(null);

  useEffect(() => {
    if (showStarRating) {
      setupStarRating();
    }
  // eslint-disable-next-line
  }, [showStarRating])

  const setupStarRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i ++) {
      stars.push(
        <BsStarFill key={i} className={`star ${i <= starRating ? 'filled' : ''}`} />
      );
    }

    setStarRatingEl(
      <div className="star-rating-el">
        { stars }
        <p>{`(${numReview})`}</p>
      </div>
    );
  }

  return (
    <LinkWrapper className="product-card">
      <button className="like-btn"><FiHeart className="heart-icon"/></button>
      <div className="product-img">
        <img className="alt" src={altSrc} alt="" />
        <img className="main" src={src} alt="" />
      </div>
      <div className="product-info">
        <p className={`new ${newProd ? 'show' : ''}`}>New</p>
        <p className="name">{name}</p>
        <p className="descrip">{descrip}</p>
      </div>
      <div className="product-price">
        <p>
          <span className="super">$</span>
          <span className="dollars">{price.split('.')[0]}</span>
          <span className="super">{'.' + price.split('.')[1]}</span>
          { perText ? <span className="sub">{'/ ' + perText}</span> : null }
        </p>
      </div>
      <div className="extra">
        { showStarRating ? starRatingEl : null }
        { availMoreOptions ? <p>Available in more options</p> : null }
      </div>
      <Button className="basket-btn" styleType="blue">
        <MdOutlineShoppingBasket className="basket-icon"/>
      </Button>
    </LinkWrapper>
  );
}