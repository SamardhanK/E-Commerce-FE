import React from "react";
import { Link } from "react-router-dom"
import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__container z-30">
        <h4>UP TO 20% DISCOUNT ON</h4>
        <h1>Girl's Fashion</h1>
        <p>
          Discover and Explore the new Trends and Culture with our Shopping
          Website. Enjoy all types of Collection for a occasion to make it
          perfect
        </p>
        <button className="btn">
            <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="Banner Img" />
      </div>
    </div>
  );
};

export default Banner;
