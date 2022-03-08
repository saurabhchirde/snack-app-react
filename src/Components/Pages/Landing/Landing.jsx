import React from "react";

import Navbar from "../../Layout/Navigation/Navbar";
import SearchBar from "../../UI/Search/SearchBar";
import CategorySection from "./Sections/Category/CategorySection";
import HeaderSection from "./Sections/Header/HeaderSection";
import RestaurantSection from "./Sections/Restaurant/RestaurantSection";

const Landing = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <HeaderSection title="Top Picks Of The Day" />
      <CategorySection title="Category" />
      <RestaurantSection title="Nearby Restaurants" />
    </>
  );
};

export default Landing;
