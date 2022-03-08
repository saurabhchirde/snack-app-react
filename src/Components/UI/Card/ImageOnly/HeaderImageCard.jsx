import React from "react";
import "./HeaderImageCard.css";

const HeaderImageCard = (props) => {
  return (
    <div className="headerImageCard-container">
      <img src={props.src} alt="img" />
    </div>
  );
};
export default HeaderImageCard;
