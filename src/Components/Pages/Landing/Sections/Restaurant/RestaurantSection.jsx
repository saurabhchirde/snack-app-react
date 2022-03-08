import React from "react";
import RestaurantCards from "../../../../UI/Card/ImageWithText/RestaurantCards";
import { restaurantList } from "../../../../../Data/ProductList/restaurantList";
import "./RestaurantSection.css";

const RestaurantSection = (props) => {
  return (
    <>
      <div className="categorySection-header">
        <h1 className="text-center title-xl-wt-5">{props.title}</h1>
        <div className="flex-row-center">
          <p className="mg-1-rt">sort</p>
          <select className="categorySection-selection">
            <option>Rating</option>
            <option>Veg</option>
            <option>Non-Veg</option>
          </select>
        </div>
      </div>
      <div className="restaurant-cards-container">
        {restaurantList.map((item) => {
          return (
            <RestaurantCards
              name={item.name}
              src={item.src}
              description={item.description}
              rating={item.rating}
              totalRating={item.totalRating}
              wishlist={item.wishlist}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantSection;
