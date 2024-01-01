import { useState } from "react";
import CategoryButton from "./CategoryButton";

const AppsCategories = ({ categories, onFilterApps }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterApps(activeCat);
  };

  return (
    <div className="projects__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default AppsCategories;
