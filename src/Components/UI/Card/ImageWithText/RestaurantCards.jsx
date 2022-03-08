import React from "react";
import "./RestaurantCards.css";

const RestaurantCards = (props) => {
  return (
    <div className="restaurantCard-container">
      <img src={props.src} alt="img" />
      <div className="restaurant-text">
        <div className="restaurant-main-text">
          <h2 className="title-xl-wt-bold">{props.name}</h2>
          <div class="rating-badge">
            <span class="rating-badge-number">{props.rating}</span>
            <span class="rating-badge-star">
              <i class="fas fa-star"></i>
            </span>
            <span class="rating-badge-number">|</span>
            <span class="rating-badge-number">{props.totalRating}</span>
          </div>
          <i className={props.wishlist}></i>
        </div>
        <p className="p-xl">{props.description}</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
