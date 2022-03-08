import React from "react";
import "./CategoryImageCard.css";

const CategoryCard = (props) => {
  console.log(props);
  return (
    <div className="categoryImageCard-container">
      <img src={props.src} alt="img" />
      <h3 className="text-center title-md-wt-5">{props.name}</h3>
    </div>
  );
};
export default CategoryCard;
