import React from "react";
import "./CategorySection.css";
import { categoryList } from "../../../../../Data/ProductList/categoryList";
import CategoryImageCard from "../../../../UI/Card/ImageWithText/CategoryImageCard";

const CategorySection = (props) => {
  console.log(categoryList);
  return (
    <>
      <div className="categorySection-header">
        <h1 className="text-center title-xl-wt-5">{props.title}</h1>
        <div className="flex-row-center">
          <p className="mg-1-rt">show</p>
          <select className="categorySection-selection">
            <option>All</option>
            <option>Only Veg</option>
            <option>Only Non-Veg</option>
          </select>
        </div>
      </div>
      <div className="category-cards-container">
        {categoryList.map((item) => {
          return (
            <CategoryImageCard src={item.src} name={item.name} key={item.id} />
          );
        })}
      </div>
    </>
  );
};
export default CategorySection;
