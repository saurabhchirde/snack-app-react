import HeaderImageCard from "../../../../UI/Card/ImageOnly/HeaderImageCard";
import "./HeaderSection.css";
import { products } from "../../../../../Data/ProductList/products";

const HeaderSection = (props) => {
  return (
    <>
      <h1 className="text-center mg-3-top title-xl-wt-5">{props.title}</h1>
      <div className="header-cards-container">
        {products.map((item) => (
          <HeaderImageCard src={item.src} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default HeaderSection;
